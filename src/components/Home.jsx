import React from 'react'
import User from './User'
export default function Home({name, bio, avatar, followers, following}) {
  return (
    <div className='main-container'>
      <User name = {name} bio = {bio} avatar = {avatar} followers = {followers} following = {following}/>
      {/* <Repositories/> */}
    </div>
  )
}
