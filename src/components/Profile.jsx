import React from 'react'
import avatar from '../images/avatar-michelle.jpg'
import ShareButton from './ShareButton'

const Profile = ({isClicked, handleClick, desktop}) => {
    return (
        <div className={`profile ${(desktop && isClicked) && 'desktop'}`}>
            <img src={avatar} className='img-avatar' alt="Avatar" />
            <div className='details'>
                <p className='name'>Michelle Appleton</p>
                <p className='date'>28 Jun 2020</p>
            </div>
            <ShareButton handleClick={handleClick}/>
        </div>
    )
}

export default Profile