import {motion} from "framer-motion";

import React from "react";
import LandingPage from "../components/LandingPage";

function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <LandingPage />
    </motion.div>
  );
}

export default Home;
