import React from 'react';
import './Body.css'; // Import CSS file for styling
import {PrimaryButton} from './primaryButton'
import { ExpandableUsecases } from './ExpandableUsecases';
import { Messages } from './messages';

function Body({homeRef, openContactModal}) {
  return (
    <div ref={homeRef} className="body-container">
      <div className='sub-body'> 
        <div className='floating-button-container'>
          <h3><span className='highlighted-animation'>{Messages.NO_SIGN_UP}</span></h3>
          <PrimaryButton customStyle='try-for-free' onPress={openContactModal} buttonText={Messages.TRY_FOR_FREE}/>
        </div>
      </div>
      <div className='sub-body-2'>
        <ExpandableUsecases/>    
      </div>
    </div>
  );
}

export default Body;