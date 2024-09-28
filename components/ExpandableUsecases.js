import React from 'react';
import {sections} from './data'
import './ExpandableUsecases.css'
import awsImage from '../images/aws.png';
import oracleImage from '../images/oracle.png';
import googleCloudImage from '../images/googleCloud.png';
import premisesImage from '../images/premises.png';
import chatBotGif from '../images/ChatBot.gif';
import educationGif from '../images/education.gif';
import researchPaperGif from '../images/ResearchPaper.gif';
import marketingImage from '../images/marketing.png';
import legalDocsImage from '../images/legal_docs.jpeg';
import demoVideo from '../videos/demo.mov';


export const DeployUsecaseRightSection = () => {
  return(
      <div className='deploy-images-container'>
        <div className='delpoy-images-row'>
          <img alt='AwsImage'  src={awsImage} className='cloud-image' />
          <img  alt='OracleImage'   src={oracleImage} className='cloud-image'/>
        </div>
        <div style={{marginBottom: 20}}/>
        <div className='delpoy-images-row'>
          <img  alt='CloudImage'   src={googleCloudImage} className='cloud-image'/>
          <img   alt='PremisesImage'  src={premisesImage} className='cloud-image'/>
        </div>
      </div>
  )
}

export const HorizontalSection = ({src}) => {
  return(
      <div className='deploy-images-container'>
        <img  alt='Horizontal'   src={src}  className='right-image'/>
      </div>
  )
}

export const RenderVideo = ({src}) => {
  return(
    <div className='deploy-images-container'>
      <video preload loop autostart autoPlay muted className='right-image'>
        <source src={src} type="video/mp4"/>
        </video>
    </div>
)
}

export const rightSection = (index) => {
  return (
    <>
                      {index === 0 && <RenderVideo src= {demoVideo}/>}
                      {index ===1 && <DeployUsecaseRightSection />}
                      {index === 2 && <HorizontalSection src={chatBotGif}/>}
                      {index === 3 && <HorizontalSection src={marketingImage}/>}
                      {index === 4 && <HorizontalSection src={educationGif}/>}
                      {index === 5 && <HorizontalSection src={legalDocsImage}/>}
                      {index === 6 && <HorizontalSection src={researchPaperGif}/>}
    </>
  )
}

const renderHorizontalSection = (section, index) => {
  return(<div className='usecase-section'>
                <div className='left-column-center'>
                  <h2 className='small-header-text'>{section.title}</h2>
                  <h2>{section.description}</h2>             
                  {rightSection(index)}
                </div>
  </div>)
}


const renderVerticalSection = (section, index) => {
  return(<div className='usecase-section'>
            <div className='column-style'>
                <div className='left-column-center'>
                  <h2 className='small-header-text'>{section.title}</h2>
                  <h2>{section.description}</h2>
                </div>
            </div>
            <div className='column-style'>
              {rightSection(index)}
            </div>
  </div>)
}

export const ExpandableUsecases = () => {
  return (
    <div>
         {sections.map((section, index) => {
           return index === 1 || index === 0 || index===6 ? renderVerticalSection(section, index) : renderHorizontalSection(section,index)
         }
         )}
    </div>
  );
}