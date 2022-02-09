import React, { useContext, useState, useEffect } from 'react'
import { Users } from '../utils/data'

const DataContext = React.createContext()

export function useData() {
  return useContext(DataContext)
}

export function DataProvider({ children }) {
  const [userDetails, setUserDetails] = useState(Users[0])
  const [users, setUsers] = useState(Users)
  const [newPost, setNewPost] = useState({ text: '', content: [] })

  const value = {
    userDetails,
    setUserDetails,
    users,
    setUsers,
    newPost,
    setNewPost,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
