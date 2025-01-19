import Footer from './components/Footer';
import './App.css';
import Content from './components/Content';
import React, { useState, useEffect } from 'react';
import facebookIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import pinterestIcon from './images/icon-pinterest.svg'

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }



  return (
    <>
      <div className="card">
        <div className='img-div'>
        </div>
        <main>
          <Content />
          <Footer isClicked={isClicked} handleClick={handleClick} isMobile={isMobile} />
        </main>
      </div>
      <span className={`tooltip blue-class social-media ${(isClicked && !isMobile) ? 'show' : 'hide'}`}>
        <p>SHARE</p>
        <img src={facebookIcon} alt="Facebook Icon" />
        <img src={twitterIcon} alt="Twitter Icon" />
        <img src={pinterestIcon} alt="Pintrest Icon" />
      </span>
    </>

  );
}

export default App;
