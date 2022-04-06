import { Routes, Route } from "react-router-dom"
import { LandingPage } from '../page/landingPage'
import { Dao } from '../page/dao'
import { GameFi } from '../page/gamefi'
import { SocialFi } from '../page/socialfi'
import { SportFi } from '../page/sportfi'
import { useEffect } from "react"
// import { SideBar } from "./sideBar/index"
// import { Content } from "./content/index"

export const PageContent = ()=> {
  return (
    <div className="pageContent">
      <Routes>
        {/* <SideBar /> */}
        {/* <Content /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/gamefi" element={<GameFi />} />
        <Route path="/socialfi" element={<SocialFi />} />
        <Route path="/sportfi" element={<SportFi />} />
      </Routes>
    </div>
  )
}
