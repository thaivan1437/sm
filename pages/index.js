import React from 'react'
import HomePageComponent from '../src/Pages/Home'
import { useRouter } from 'next/router'

const HomePage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }
  return <HomePageComponent {...prop}/>
}

export default HomePage
