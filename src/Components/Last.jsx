import React from 'react';
import ImageAvatar from '../images/image-avatar.png';

export default function Last() {
  return (
    <div className="last">
     <img className="author" src={ImageAvatar} alt="image-avatar"/>
      <p className="creation"> Creation of</p>
      <a href="#" className="name" > Jules Wyvern </a>
    </div>
  )
}
