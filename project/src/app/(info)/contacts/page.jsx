"use client"
import { motion } from "framer-motion"
import Head from "./z-module/components/Head";
import Map from "./z-module/components/Map";
import Addresses from "./z-module/components/Addresses";

export default function Showrooms() {
  return (
    <motion.main initial={{ opacity:0 }} animate={{ opacity:2 }}>
      <Head/>
      <Addresses/>
      {/* <Map/> */}
    </motion.main>
  );
}
