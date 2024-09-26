import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-[#ccc8c8] border-2 border-[#e795f1] shadow-lg rounded-lg h-[35vh] p-16 text-center w-full max-w-md">
        <motion.h1 
          className="text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        > 
          Welcome to our dashboard
        </motion.h1>
        <motion.p 
          className="mt-4 text-gray-600"
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
