import React from 'react'

function User({avatar, name, bio, followers, following}) {
  return (
    <div className='user-container'>
        <div className="avatar">
            <img src = {avatar} alt="avatar" />
        </div>
        <div className="name">{name}</div>
        <div className="bio">{bio}</div>
        <div className="follower">
            <h3>{followers} followers</h3>
            <h3>{following} followings</h3>
        </div>
    </div>
  )
}

export default User