import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12 dark:bg-main-dark-bg">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="mx-5 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 lg:ml-28 mr-5 p-8 pt-9 my-3 welcom-bg bg-hero-pattern bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md"/>
          </div>
        </div>

        <div className="flex-1 grid-rows-4 md:flex-wrap md:flex m-3 justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl m-1">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2 text-${item.pcColor}`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-3 rounded-2xl w-360 md:w-780">
          <div className="flex justify-between px-5 mt-5">
            <p className="font-semibold text-sm md:text-xl">Revenue Updates</p>
            <div className="flex items-center">
              <p className="flex items-center gap-2 mr-5 text-gray-600 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span className="md:text-sm text-xs dark:text-white ml-2">Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span className="md:text-sm text-xs ml-2">Budget</span>
              </p>
            </div>
          </div>
          <div>
            <div className="mt-10 flex gap-5 flex-wrap justify-center">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$93,438</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                  </p>
                  <p className="text-gray-500 mt-1">Budget</p>
                </div>
                <div className="mt-8">
                  <p>
                    <span className="text-3xl font-semibold">$48,438</span>
                  </p>
                  <p className="text-gray-500 mt-1">Expense</p>
                </div>

                <div className="mt-5">
                  <SparkLine/>
                </div>

                <div className="mt-10">
                  <Button color="white" bgColor={currentColor} borderRadius="10px" text="Download Report" />
                </div>
              </div>

              <div className="mt-5">
                <Stacked />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ecommerce