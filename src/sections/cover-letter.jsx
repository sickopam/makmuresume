import React from 'react'
import Sign from '../images/sign.PNG'

export default function CoverLetter({isVisibleCL, setShowCL, fadePropsCL}) {

  return (
    <div {...fadePropsCL} id='modal' className='space-y-12 text-xl'>
        <div className='flex justify-betweem'>
            <div className='w-full space-y-16'>
                <div>
                    <h2 className='font-bold'>MAKMUR</h2>
                    <h3>jl. pakuningratan no. 37, yogyakarta</h3>
                </div>
                <div className='text-base'>
                    <p>
                        i am writing to let you know that i have keen interest in joining you as part of the bar crew as a part timer.
                        as a food & beverage enthusiast with great customer service abilities, i am confident that i would bring nothing but great service and addition to your team.
                        <br/><br/>
                        i am currently pursuing a degree in computer science at gadjah mada university, which had taught be a great deal about working under pressure with brief time intervals. despite having little to no experience in the fast food industry, i believe that with utilizing all my abilities that i have achieved throughout the course of my university life, i am able to provide a great addition to your restaurant, both with my soft-skills and hard-skills, which is highly concentrated in web development. 
                        <br/><br/>
                        therefore, not only that i could work well under pressure and adapt to a new working environment, providing the best service to the customers, but also i could spice things up at the restaurant by helping create or develop a website in order to attract more and newer customers into the restaurant.
                        <br/><br/>
                        as a part-time employee, i will mostly be able to work in the evening, typically after classes &#40;5pm – end of shift&#41;. plus, during the weekends, i am positive that i could partake in extra hours at the restaurant. using my ability as a quick learner, i believe that i would be a great asset to your team and adapt to environmental changes as fast and as efficient as possible.
                    </p>
                    <div className=''>
                        <h2><br/>sincerely,</h2>
                        <img className='w-[10%]' src={Sign} alt='signature'/>
                        <h3>naufal abiyyu</h3>
                    </div>
                </div>
            </div>
            <div className='flex justify-items-end'>
                <button id='x' onClick={() => setShowCL(!isVisibleCL)} className='text-2xl grid items-start h-fit'>&times;</button>
            </div>            
        </div>
    </div>
  )
}