import React from 'react';
import { Header } from '../components';
import CustomersTable from '../components/Table/CustomersTable';


const Customers = () => {
  return (
    <div className="flex justify-start 2xl:justify-center overflow-auto">
      <div className="mx-10 mt-20 md:m-10 p-10 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg">
        <Header category="Page" title="Customers" />
        <CustomersTable />
      </div>
    </div>
  )
}

export default Customers