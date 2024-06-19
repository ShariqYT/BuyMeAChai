import React from 'react';

const Changelogs = ({ setModal }) => {
  return (
    <div className='bg-[rgba(0,0,0,0.1)] w-full h-full backdrop-filter backdrop-blur-lg fixed z-50'>

      <div className='flex justify-center items-center top-[40%] md:top-[50%] absolute left-[49%] md:left-[50%]'>\
        <div className="w-fit  border-2 border-cyan-500  rounded-2xl shadow-[0px_0px_20px_#a1a1a1]  fixed h-fit mx-auto z-50 backdrop-filter backdrop-blur-3xl bg-[rgba(0,0,0,0.5)]">
          <svg onClick={() => { setModal(false) }} className='fill-white w-6 absolute top-4 cursor-pointer hover:drop-shadow-[0px_0px_10px_cyan] right-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
          <div className="max-w-xl mx-auto p-8">
            <div className="flow-root">
              <ul className="-mb-8">
                <li>
                  <div className="relative pb-8">
                    <span className="absolute top-5 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    <div className="relative flex items-start space-x-3">
                      <div>
                        <div className="relative px-1 top-2 left-1">
                          <div className="h-4 w-4 bg-blue-400 rounded-full ring-4 ring-white flex items-center justify-center">
                            <div className="flex justify-center items-center h-screen">
                              <div className="rounded-full h-6 w-6 bg-cyan-600 animate-ping"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 py-0">
                        <div className="text-md text-gray-500">
                          <div className='flex gap-4'>
                            <span className="font-medium flex items-center gap-4 text-white mr-2">
                              v1.2.0
                              </span>
                              <div
                                href="#"
                                className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <div className="absolute flex-shrink-0 flex items-center justify-center">
                                  <span
                                    className="h-1.5 w-1.5 rounded-full bg-green-500"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div className="ml-3.5 font-medium text-black">
                                  Feature
                                </div>
                              </div>
                            
                          </div>

                        </div>
                        <div className="mt-2 text-white">
                          <p className='md:text-base text-sm'>
                            - Enchanced user experience.
                            <br />
                            - UI improvements.
                            <br />
                            - Added new features.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="relative pb-8">
                    <span className="absolute top-5 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    <div className="relative flex items-start space-x-3">
                      <div>
                        <div className="relative px-1 top-2 left-1">
                          <div className="h-4 w-4 bg-blue-400 rounded-full ring-4 ring-white flex items-center justify-center">
                            <div className="flex justify-center items-center h-screen">
                              <div className="rounded-full h-6 w-6 bg-cyan-600 animate-ping"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 py-0">
                        <div className="text-md text-gray-500">
                          <div className='flex gap-4'>
                            <span className="font-medium flex items-center gap-4 text-white mr-2">
                              v1.1.0
                              </span>
                              <div
                                href="#"
                                className="my-0.5 relative flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <div className="absolute flex-shrink-0 flex items-center justify-center">
                                  <span
                                    className="h-1.5 w-1.5 rounded-full bg-green-500"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div className="ml-3.5 font-medium text-black">
                                  Feature
                                </div>
                              </div>
                            
                          </div>

                        </div>
                        <div className="mt-2 text-white">
                          <p className='md:text-base text-sm'>
                            - Improved performance by optimizing database queries.
                            <br />
                            - Enhanced security measures to protect user data.
                            <br />
                            - Added Creators button.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


                <li>
                  <div className="relative pb-8">
                    <span className="absolute top-5 left-4 -ml-px h-[16vh] md:h-[12vh] w-0.5 bg-gray-200" aria-hidden="true"></span>
                    <div className="relative flex items-start space-x-3">
                      <div>
                        <div className="relative px-1 top-2 left-1">
                          <div className="h-4 w-4 bg-blue-400 rounded-full ring-4 ring-white flex items-center justify-center">
                            <div className="flex justify-center items-center h-screen">
                              <div className="rounded-full h-6 w-6 bg-cyan-600 animate-ping"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 py-0">
                        <div className="text-md text-gray-500">
                          <div className='flex gap-4'>
                            <span className="font-medium flex items-center gap-4 text-white mr-2">
                              v1.0.0
                              </span>

                              <div
                                href="#"
                                className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <div className="absolute flex-shrink-0 flex items-center justify-center">
                                  <span
                                    className="h-1.5 w-1.5 rounded-full bg-red-500"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div className="ml-3.5 font-medium text-black">
                                  Bug
                                </div>
                              </div>
                          </div>

                        </div>
                        <div className="mt-2 text-white">
                          <p className='md:text-base text-sm'>
                            - We cannot find creators to support the creators.
                            <br />
                            - Addressed a display glitch causing text overflow in long
                            messages.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Changelogs;
