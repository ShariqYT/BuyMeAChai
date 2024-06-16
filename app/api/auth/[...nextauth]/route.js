import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import User from '@/models/User'
import connectDB from '@/db/connectDb';
import bcrypt from 'bcryptjs';

export const authOptions = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn({ user, account }) {
            if (['github', 'google'].includes(account.provider)) {
                try {
                    await connectDB();
                    const currentUser = await User.findOne({ email: user.email });
                    if (!currentUser) {
                        const newUser = new User({
                            name: user.name,
                            email: user.email,
                            username: user.email.split("@")[0],
                        });
                        await newUser.save();
                    }
                    return true;
                } catch (error) {
                    console.error('Sign in error:', error);
                    return false;
                }
            }
            return true;
        },
        async session({ session }) {
            try {
                await connectDB();
                const dbUser = await User.findOne({ email: session.user.email });
                if (dbUser) {
                    session.user.name = dbUser.username;
                }
            } catch (error) {
                console.error('Session callback error:', error);
            }
            return session;
        }
    }
});

export { authOptions as GET, authOptions as POST };
