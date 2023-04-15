import React, { useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { motion, AnimatePresence } from 'framer-motion';
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import config from "../config/config";
import { download } from "../assets";
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, Tab, FilePicker, ColorPicker, CustomButton } from '../components';

const Customizer = () => {

  const snap = useSnapshot(state);

  return (

    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
            key="custom"
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-5 right-5 z-10"
            {...fadeAnimation}
          >
            <CustomButton
              title="Back"
              type="filled"
              handleClick={() => state.intro = true }
              customStyles="text-sm font-bold py-2.5 px-4 w-fit"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
            >
              {FilterTabs.map((tab) => (
                <Tab
                  isFilterTab
                  isActiveTAb=""
                  key={tab.name}
                  tab={tab}
                  handleClick={() => {}}
                />
              ))}

          </motion.div>

        </>
      )}
    </AnimatePresence>

  )
}

export default Customizer
