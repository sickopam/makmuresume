import React from 'react'
import Me from '../images/me.webp'

export default function About({isVisibleAbout, setShowAbout, fadePropsAbout}) {

  return (
    <div {...fadePropsAbout} id='modal' className='space-y-12 text-xl overflow-y-scroll text-center md:text-justify'>
        <div className='lg:flex justify-between space-y-5 lg:space-y-0 lg:space-x-5'>
            <img id='image' className='w-full lg:w-[40%]' src={Me} alt='me'></img>
            <div className='flex flex-col space-y-3'>
                {details.map((e, i) => (
                    <div key={i} className='flex-wrap md:inline-flex md:space-x-1'>
                        <h2 className='font-semibold'>{e.title}</h2>
                        <h3>{e.sub}</h3>
                    </div>
                ))}
            </div>
            <div className='hidden lg:block'>
                <button id='x' onClick={() => setShowAbout(!isVisibleAbout)}>&times;</button>
            </div>
        </div>

        <div>
            <p className=''>a student driven by motivation and passion to work. i am able to adapt to new working environments, as well as get along with co-workers in a brief period of time. i have active hobbies that accompany me throughout times, thus, laziness was never an option for me, especially when it comes to working professionally with other people or comrades.</p>
        </div>

        <div className='flex justify-center block lg:hidden'>
            <button id='x' onClick={() => setShowAbout(!isVisibleAbout)}>&times;</button>
        </div>
    </div>
  )
}

const details = [
  {title: 'full name:', sub: 'naufal abiyyu'},
  {title: 'nickname:', sub: 'opam'},
  {title: 'd.o.b:', sub: '10 july 2003'},
  {title: 'email:', sub: 'naubiyyu@gmail.com'},
  {title: 'phone number:', sub: '62-82127877676'},
  {title: 'address:', sub: 'jl. pogung baru block E no. 48, sleman'},
  {title: 'current occupation:', sub: 'semester 4 computer science student'},
  {title: 'campus:', sub: 'gadjah mada university'},
]