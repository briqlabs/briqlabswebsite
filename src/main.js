import React, {useRef, useState} from 'react';
import {Header} from './components/header'
import Body from './components/body';
import { Footer } from './components/footer';
import ContactModal from './components/contactModal';

function Main() {
  const homeRef = useRef(null);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => {
      console.log("Nancy onOpen")
      setIsModalOpen(true)
  }

  const closeModal = () => {
      setIsModalOpen(false);
  };

  const scrollToHomeRef = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

return (
    <div>
    <Header scrollToHomeRef={scrollToHomeRef} openContactModal={openContactModal}/> 
    <Body homeRef={homeRef} openContactModal={openContactModal}/>
    <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    <Footer/>
    </div>
  );
}

export default Main;