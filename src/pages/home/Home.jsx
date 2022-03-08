import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import TabOptions from '../../components/tabOptions/TabOptions'
import Delivery from '../../components/delivery/Delivery'
import DiningOut from '../../components/diningOut/DiningOut'
import NightLife from '../../components/nightLife/NightLife'

const Home = () => {

  const[activeTab, setActiveTab] = useState("Delivery");

  return (
    <>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {
          getCorrectScreen(activeTab)
        }
        <Footer />
    </>
  )
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />
    case "Dining Out":
      return <DiningOut />
    case "Nightlife":
      return <NightLife />
    default:
      return <Delivery />
  }
}

export default Home