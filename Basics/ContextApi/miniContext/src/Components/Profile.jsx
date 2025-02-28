import React from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div>please login</div>

    return (
        <div>Welcome {user.userName}</div>
    )
}

export default Profile
