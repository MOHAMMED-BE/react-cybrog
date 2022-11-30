import React from './GamingLibrary.css'
import { Card, SectionWrapper, SectionHeader } from "../../components/index"

import mostPopularData from "../../Data/MostPopularData"

const GamingLibrary = () => {
  return (
        <>
            <SectionWrapper>
                <SectionHeader>Gaming Library</SectionHeader>
                <div className="most-popular-items">
                </div>
            </SectionWrapper>
        </>
  )
}

export default GamingLibrary
