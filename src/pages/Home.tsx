import React from "react"
import ListCategorize from "src/layout/components/Categorize/ListCategorize"
import HeroSlider from "src/layout/components/HeroSlider"
import ListCard from "src/layout/components/ListCard"
import ListRank from "src/layout/components/Rank/ListRank"

const Home = () => {
  return (
    <div className="flex-col bg-gray-900">
      <HeroSlider />
      <ListCard/>
      <ListRank/>
      <ListCategorize/>
    </div>
  )
}

export default Home
