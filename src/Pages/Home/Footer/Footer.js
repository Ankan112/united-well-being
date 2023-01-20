import React from 'react';

const Footer = () => {
    return (
        <>
            <footer style={{ backgroundColor: '#E7E6E4' }} className="footer p-10 text-base-content">
                <div>
                    <div style={{ color: '#6D2E46' }}>
                        <p className="normal-case text-2xl">Sayesta Goswami, PhD</p>
                        <p className='text-md'>CLINICAL PSYCHOLOGISR</p>
                    </div>
                    <div className="mt-6 space-y-8 md:mt-8">
                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#6D2E46' }} className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            <span style={{ color: '#6D2E46' }} className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                Anchal Tower, Sixmile, <br /> Guwahati, Assam 781022, India
                            </span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#6D2E46' }} className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span style={{ color: '#6D2E46' }} className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+918333552221</span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#6D2E46' }} className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                            <span style={{ color: '#6D2E46' }} className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">sayestagoswami.pt@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div style={{ color: '#6D2E46' }}>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">Book Session</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>

                </div>
                <div style={{ color: '#6D2E46' }}>
                    <span className="footer-title">Legal Stuff</span>
                    <a className="link link-hover">Disclaimer</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Services</a>

                </div>
            </footer>
            <footer style={{ backgroundColor: '#E7E6E4' }} className="px-10 py-4 border-t text-base-content border-base-300">
                <div className='flex justify-center items-center'>
                    <h1 style={{ color: '#6D2E46' }} className='text-sm'> All Rights Reserved &copy; Sayesta Goswami</h1>
                </div>
            </footer>
        </>
    );
};

export default Footer;