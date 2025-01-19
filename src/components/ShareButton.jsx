import React from 'react'
import {ReactComponent as ShareIcon} from '../images/icon-share.svg'

const ShareButton = ({handleClick}) => {
    return (
        <button onClick={handleClick}>
            {/* <img src={shareIcon} className='icon-share' alt="Share Icon" onClick={handleClick} /> */}
            <ShareIcon/>
        </button>
    )
}

export default ShareButton