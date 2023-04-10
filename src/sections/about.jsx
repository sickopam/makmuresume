import React from 'react'
import Me from '../images/me.webp'

export default function About({isVisibleAbout, setShowAbout, fadePropsAbout}) {

  return (
    <div {...fadePropsAbout} id='modal'>
        <div id='me-n-details'>
            <img id='image' src={Me} alt='me'></img>
            <div id='detail-container'>
                {details.map((e, i) => (
                    <div key={i} id='details'>
                        <h2 id='title'>{e.title}</h2>
                        <h3>{e.sub}</h3>
                    </div>
                ))}
            </div>
            <div className='hidden lg:block'>
                <button id='x' onClick={() => setShowAbout(!isVisibleAbout)}>&times;</button>
            </div>
        </div>

        <div>
            <p>a student driven by motivation and passion to work. i am able to adapt to new working environments, as well as get along with co-workers in a brief period of time. i have active hobbies that accompany me throughout times, thus, laziness was never an option for me, especially when it comes to working professionally with other people or comrades.</p>
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