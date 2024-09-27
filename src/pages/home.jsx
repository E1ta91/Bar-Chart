import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="bg-[#ccc8c8] border-2 border-[#e795f1] shadow-lg rounded-lg h-[27vh] pt-12 lg:pt-14  2xl-custom:h-[50vh] 2xl-custom:w-[50vw] 2xl-custom:max-w-none 2xl-custom:pt-60 text-center w-full max-w-md">
        <motion.h1
          className="text-2xl 2xl-custom:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to our Risk Evaluation Dashboard
        </motion.h1>
        <motion.p
          className="mt-4 2xl-custom:text-4xl text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore your data and insights.
        </motion.p>
      </div>
    </div>

  );
};

export default Home;
