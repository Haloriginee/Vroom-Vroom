import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { headContentAnimation, headTextAnimation, slideAnimation, headContainerAnimation } from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";

const Home = () => {

  const snap = useSnapshot(state);

  return (

    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./logo.png"
              alt="logo"
              className="w-80 h-80 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Customized <br className="hidden xl:block" /> Awesome Roadster.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="font-normal text-base text-gray-600 max-w-md">
                text here
              </p>

              <CustomButton
                title="Customize Now"
                type="filled"
                handleClick={() => state.intro = false }
                customStyles="text-sm font-bold py-2.5 px-4 w-fit"
              />

            </motion.div>
          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>

  )
}

export default Home
