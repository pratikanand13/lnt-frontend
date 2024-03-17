import React, { useState } from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
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
    <motion.div
      className="container mx-auto"
      initial="initial"
      animate="animate"
    >
      <form className="max-w-md mx-auto mt-8">
        <div className="flex justify-start">
          <motion.div className="mb-4 mr-2" variants={textVariants}>
            <label
              htmlFor="teamNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Team Number
            </label>
            <select
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
            </select>
          </motion.div>
          <motion.div className="mb-4 mx-2" variants={textVariants}>
            <label
              htmlFor="days"
              className="block text-sm font-medium text-gray-700"
            >
              Days
            </label>
            <select
              id="days"
              name="days"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={formData.days}
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </motion.div>
          <motion.div className="mb-4 ml-2 flex-grow" variants={textVariants}>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={formData.department}
            >
              <option value="Yes">Brickwork</option>
              <option value="No">Concreting</option>
            </select>
          </motion.div>
        </div>
        <motion.div className="mb-4" variants={textVariants}>
          <label
            htmlFor="numberOfWorkers"
            className="block text-sm font-medium text-gray-700"
          >
            Number of Workers
          </label>
          <input
            type="text"
            name="numberOfWorkers"
            id="numberOfWorkers"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.numberOfWorkers}
          />
        </motion.div>

        <motion.div className="mb-4" variants={textVariants}>
          <label
            htmlFor="overtime"
            className="block text-sm font-medium text-gray-700"
          >
            Overtime
          </label>
          <input
            type="text"
            name="overtime"
            id="overtime"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.overtime}
          />
        </motion.div>

        <motion.div className="mb-4" variants={textVariants}>
          <label
            htmlFor="incentive"
            className="block text-sm font-medium text-gray-700"
          >
            Incentive
          </label>
          <input
            type="text"
            name="incentive"
            id="incentive"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.incentive}
          />
        </motion.div>

        <motion.div className="mb-4" variants={textVariants}>
          <label
            htmlFor="svm"
            className="block text-sm font-medium text-gray-700"
          >
            SVM
          </label>
          <input
            type="text"
            name="svm"
            id="svm"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.svm}
          />
        </motion.div>

        <motion.div className="mb-4" variants={textVariants}>
          <label
            htmlFor="targetedProductivity"
            className="block text-sm font-medium text-gray-700"
          >
            Targeted Productivity
          </label>
          <input
            type="text"
            name="targetedProductivity"
            id="targetedProductivity"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.targetedProductivity}
          />
        </motion.div>

        <motion.div className="flex justify-end" variants={textVariants}>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default Form;
