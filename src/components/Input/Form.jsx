import React, { useState } from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      // ease: "linear",
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const Form = () => {
  const [formData, setFormData] = useState({
    teamNumber: "",
    days: "",
    department: "",
    numberOfWorkers: "",
    overtime: "",
    incentive: "",
    svm: "",
    targetedProductivity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <motion.div initial="initial" animate="animate" variants={textVariants}>
      <div className="container mx-auto">
        <form className="max-w-md mx-auto mt-8">
          <div className="flex justify-start">
            <motion.div className="mb-4 mr-2">
              <motion.label
                htmlFor="teamNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Team Number
              </motion.label>
              <motion.select
                id="teamNumber"
                name="teamNumber"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
                value={formData.teamNumber}
              >
                {[...Array(12).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </motion.select>
            </motion.div>
            {/* Other form elements */}
          </div>
          {/* Submit button */}
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
