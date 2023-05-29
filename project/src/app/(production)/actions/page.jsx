"use client"
import { motion } from "framer-motion"
import Action from "./z-module/components/action";

import { usePathname } from "next/navigation"

export default () => {
    const pathname = usePathname();
    return (
        <motion.main initial={{opacity:0}} animate= {{opacity:1}}>
            {/* <p>{pathname}</p> */}
            <Action/>
        </motion.main>
    )
}