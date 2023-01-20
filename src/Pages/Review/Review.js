import React from 'react';
import reviewImg from '../../img/Ellipse 1.png'
import arrowBack from '../../img/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg'
import arrowForword from '../../img/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg'

const Review = () => {
    return (
        <div>
            <div className='w-7/12 mx-auto'>
                <h1 className='text-4xl my-20 text-center' >Customer Reviews</h1>
                <div style={{ backgroundColor: '#E7E6E4' }} className="hero">
                    <div className="hero-content flex-col pb-20 px-5 lg:flex-row">

                        <div className='w-1/3'>
                            <img className='rounded-full ml-7' src={reviewImg} alt='' />
                            <p className='text-base text-center font-semibold'>Emily Kinney</p>
                        </div>

                        <div className='w-2/3'>
                            <div class="flex mt-5 pt-2 item-center">
                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <p className='text-md font-bold my-2'>5/5</p>
                            <p className='text-sm'>At first, I had my doubts about online counselling, but I gave it a shot and was pleasantly surprised to learn how much it can actually aid you. Dr. Sayesta created a wonderfully peaceful, healing environment where I felt free to share details with her that I would normally feel embarrassed to do so. She offers much-appreciated compassion instead of any judgement, followed by advice. She can pinpoint the source of my problems and the exercises I can do to solve them. I occasionally feel depressed again, but he constantly inspires me to get back on the right track. A truly helpful person is someone who won't judge you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='text-center flex justify-center mt-8'>
                    <span className=''><img style={{ backgroundColor: '#E7E6E4' }} className='w-1/2  p-2 shadow-md' src={arrowBack} alt="" /></span>
                    <span><img style={{ backgroundColor: '#E7E6E4' }} className='w-1/2  p-2 shadow-md' src={arrowForword} alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default Review;