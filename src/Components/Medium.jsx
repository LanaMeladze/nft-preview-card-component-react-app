import React from 'react';
import IconEthereum from '../images/icon-ethereum.svg';
import IconClock from '../images/icon-clock.svg';


export default function Medium() {
  return (
    <div className="medium">
      
      <div className="eth-time">
        <img className="img-eth" src={IconEthereum} alt="icon-ethereum"/>
        <p className="amount">0.041 ETH</p> 
      </div>
      
      <div className="eth-time">
        <img className="clock" src={IconClock} alt="icon-clock"/>
        <p className="days"> 3 days left</p>
      </div>  
      
    </div> 
  )
}
