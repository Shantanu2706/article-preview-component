import React from 'react'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import pinterestIcon from '../images/icon-pinterest.svg'
import ShareButton from './ShareButton'

const SocialMedia = ({handleClick, isMobile}) => {
    return (
        <div className={`social-media`}>
            <p>SHARE</p>
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={twitterIcon} alt="Twitter Icon" />
            <img src={pinterestIcon} alt="Pintrest Icon" />
            <ShareButton handleClick={handleClick}/>
        </div>
    )
}

export default SocialMedia