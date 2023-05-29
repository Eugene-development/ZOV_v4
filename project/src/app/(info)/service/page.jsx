"use client"
import { motion } from "framer-motion"

import ServiceList from "./z-module/components/ServiceList"

export default function Service() {
  return (
    <motion.main initial={{opacity:0}} animate= {{opacity:1}}>
      <ServiceList/>
    </motion.main>
  )
}
