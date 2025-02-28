import React from 'react'

const Profile = (props) => {
    // console.log(props);
    
  return (
    <div>
      <img src={props.user.picture.medium} alt="" />
      <p>{props.user.name.first}</p>
    </div>
  )
}

export default Profile
