import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Users from './Users';

export default function Home() {
  const [user, setUser] = useState(useSelector((state) => state.currentUser))
  const navigate = useNavigate()
  if (user === null) {
    navigate('/login')
  }
  return (
    <div>
      <h1>Welcome, {user.first_name + " " + user.last_name}</h1>
      <h1>User List</h1>
      <Users />
    </div>
  )
}
