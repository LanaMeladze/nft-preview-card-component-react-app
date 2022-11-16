import React from 'react';
import ImageEquilibrium from '../images/image-equilibrium.jpg';
import IconView from '../images/icon-view.svg';

export default function ImgContainer() {
  return (
    <div>
        <div className='img-container'>
            <div className='eye-image-container'>
            <img className='eye-image' src={IconView} alt=''/>
            </div>
            <img className='equilibrium' src={ImageEquilibrium} alt=''/>
        </div>

    </div>
  )
}
