import React from 'react';

const BookSession = () => {
    return (
        <div style={{ backgroundColor: '#CEBEBE' }} className='text-center mt-12'>
            <h1 className="text-2xl mb-20">Start Online Psychologist Consultation With Three Easy Steps</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div style={{ backgroundColor: '#E7E6E4' }} className='w-80 mx-auto pb-10 pt-8'>
                    <div className="radial-progress" style={{ "--value": "33", "--size": "4rem", "--thickness": "2px", "color": "#6D2E46", "backgroundColor": "#D9D9D9" }}>1</div>
                    <h2 style={{ color: '#6D2E46' }} className='py-2 text-sm font-bold'>Choose a Package</h2>
                    <p className='text-sm w-2/3 mx-auto'>Choose between two types of packages, Depending upon on your requirement and need.</p>
                </div>
                <div style={{ backgroundColor: '#E7E6E4' }} className='w-80 mx-auto bg-slate-300 pb-10 pt-8'>
                    <div className="radial-progress" style={{ "--value": "66", "--size": "4rem", "--thickness": "2px", "color": "#6D2E46", "backgroundColor": "#D9D9D9" }}>2</div>
                    <h2 style={{ color: '#6D2E46' }} className='py-2 text-sm font-bold'>Connect With Your Therapist</h2>
                    <p className='text-sm w-2/3 mx-auto'>Fill out our form and complete the payment process I Will shortly be in touch with you.</p>
                </div>
                <div style={{ backgroundColor: '#E7E6E4' }} className='w-80 mx-auto bg-slate-300 pb-10 pt-8'>
                    <div className="radial-progress" style={{ "--value": "100", "--size": "4rem", "--thickness": "2px", "color": "#6D2E46", "backgroundColor": "#D9D9D9" }}>3</div>
                    <h2 style={{ color: '#6D2E46' }} className='py-2 text-sm font-bold'>Begin Your Healing Journey</h2>
                    <p className='text-sm w-2/3 mx-auto'>Start your session with Me, a step towards healing.</p>
                </div>
            </div>
            <div className='text-center mx-auto w-52 mb-28 mt-14'>
                <p style={{ backgroundColor: '#6D2E46' }} className='text-base py-4 px-12 text-white'>Book Session</p>
            </div>
        </div>
    );
};

export default BookSession;