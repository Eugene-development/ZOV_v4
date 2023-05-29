"use client"
import { motion } from "framer-motion"
import Hero from './z-module/components/Hero'
import Content from './z-module/components/Content'
import Video from './z-module/components/Video'
import Values from './z-module/components/Values'
import Team from './z-module/components/Team'

export default function Company() {
  return (
    <motion.main initial={{opacity:0}} animate= {{opacity:1}}>
      <div className="bg-white">
        <main className="isolate">
          <Hero/>
          <Content/>
          <Video/>
          <Values/>
          <Team/>
        </main>
      </div>
    </motion.main>
  )
}
