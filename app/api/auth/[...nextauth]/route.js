import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDb';


export const authOptions = NextAuth({
    providers: [
        // OAuth authentication providers...
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        // // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === 'github') {
                await connectDB();
                // Check if the user already exists
                const currentUser = await User.findOne({ email: user.email });
                if (!currentUser) {
                    //create a new user
                    const newUser = new User({
                        name: user.name,
                        email: user.email,
                        username: user.email.split("@")[0],
                    });
                    await newUser.save();
                }
                return true
            }
            if (account.provider === 'google') {
                await connectDB();
                // Check if the user already exists
                const currentUser = await User.findOne({ email: user.email });
                if (!currentUser) {
                    //create a new user
                    const newUser = new User({
                        name: user.name,
                        email: user.email,
                        username: user.email.split("@")[0],
                    });
                    await newUser.save();
                }
                return true
            }
        },
        async session({ session, token, user }) {
            const dbUser = await User.findOne({ email: session.user.email })
            session.user.name = dbUser.username
            return session
        }
    }
})

export { authOptions as GET, authOptions as POST }