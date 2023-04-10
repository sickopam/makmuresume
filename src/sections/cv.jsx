import React from 'react'
import Vitae from '../images/Naufal Abiyyu_CV.pdf'

export default function Cv({isVisibleCV, setShowCV, fadePropsCV}) {

  return (
    <div {...fadePropsCV} id='modal' className='text-xl overflow-y-scroll'>
        <iframe src={Vitae} title='cv'></iframe>
        <div className='flex justify-center'>
            <button id='x' onClick={() => setShowCV(!isVisibleCV)} className='h-fit'>&times;</button>
        </div>
    </div>
  )
}