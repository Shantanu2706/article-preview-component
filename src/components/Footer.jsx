import React from 'react'
import Profile from './Profile'
import SocialMedia from './SocialMedia'

const Footer = ({ isClicked, handleClick, isMobile }) => {
    return (
        <footer className={(isClicked && isMobile) && 'blue-class'}>
            {
                (isClicked && isMobile) ?
                    <SocialMedia handleClick={handleClick} isMobile={true} /> :
                    <Profile isClicked={isClicked} handleClick={handleClick} desktop={!isMobile} />

            }
        </footer>
    )
}

export default Footer