import React from 'react'
import FirstSec from './MainPage/FirstSec'
import SecondPage from './MainPage/SecondPage'
import ThirdPage from './MainPage/ThirdPage'
import FourthPage from './MainPage/FourthPage'
import FifthPage from './MainPage/FifthPage'

const MainPage = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
        <FirstSec/>
        <SecondPage/>
        <ThirdPage/>
        <FourthPage/>
        <FifthPage/>
    </div>
  )
}

export default MainPage