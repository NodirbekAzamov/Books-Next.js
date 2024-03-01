"use client"
import { $api } from '@/api/interceptors'
import React from 'react'

const Dashboard = () => {
  const getBooks = () => {
    $api.get("/book").then(res => {
      console.log(res);
      
    })
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={getBooks}>get Books</button>
    </div>
    
  )
}

export default Dashboard