import React from 'react';
import banner from '../../../img/banner.png'
import Miama from '../../../img/generatedtext.png'

const Banner = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#E7E6E4' }} className="hero mt-20 mb-32">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                    <img src={banner} alt='' className="relative" />
                    <div className='flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className="text-4xl italic font-bold"><img className='h-40' src={Miama} alt="" /></h1>
                            <p className="my-6 text-2xl">From the comfort of your own space</p>
                            <p className="my-6 text-xl">Individual therapy for adults</p>
                            <div className='text-center mx-auto w-52 mt-14'>
                                <p style={{ backgroundColor: '#6D2E46' }} className='text-base py-4 px-12 text-white'>Book Session</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;