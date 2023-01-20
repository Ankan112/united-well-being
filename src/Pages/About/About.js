import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../img/Rectangle.png'

const About = () => {
    return (
        <div>
            <h1 className='text-center text-2xl mt-28 mb-32'>About Me</h1>

            <div className="hero min-h-screen bg-base-200 mb-64">
                <div className="hero-content flex">
                    <div className='w-1/2'>
                        <img src={aboutImg} alt='' />
                        <div className="flex justify-center items-center mt-8">
                            <Link to='/contact' className="flex justify-center items-center py-8 px-16 shadow-md btn-xs sm:btn-sm md:btn-md lg:btn-lg">Contact Dr. Goswami</Link>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <p className="py-1  leading-10">Hello, I have completed an undergraduate degree in psychology at Delhi University, subsequently pursued graduate training in counseling psychology at the AIIMS Delhi, and completed a doctorate in clinical psychology at the Adler School of Professional Psychology. I have clinical interests and worked with children, teens, adults, diagnostic assessment and addictions. I use a broad range of cognitive behavioral and insight oriented techniques in the psychotherapy and counseling process. <br /> <br />

                            I have also taught a broad variety of graduate psychology and counseling courses at the Delhi University and Jamia Milia Islamia. I have lectured and presented training seminars and workshops nationally and internationally in Europe and East Asia. My research and publication interests have included addictions, psychometrics, clinical training and supervision, and the integration of spiritual values in psychotherapy and supervision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;