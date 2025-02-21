import React, { useState } from 'react'
import AetoGrid from '../../utils/AetoGrid'
import { Button } from 'primereact/button';

const Dashboard = () => {
    const [requests, setRequests] = useState([{}]);
    const [enquiries, setEnquiries] = useState([{}]);

    const serviceRequestColumns = [
        { label: "Name", key: "name" },
        { label: "Email", key: "Email" },
        { label: "Phone Number", key: "phone" },
        { label: "Coming as", key: "title" },
        { label: "Description", key: "description" },
        { label: "Service Category", key: "serviceCategory" },
        { label: "Service Package", key: "servicePackage" },
      ]

      const enquiryColumns = [
        { label: "Name", key: "name" },
        { label: "Email", key: "Email" },
        { label: "Phone Number", key: "phone" },
        { label: "Coming as", key: "title" },
        { label: "Description", key: "description" },
      ]
  return (
    <div>
      <section className='px-[2vw] md:px-[8vw] py-[6vh] flex md: justify-between gap-2 md:gap-0 items-center border-b'>
        <p className='text-3xl font-bold opacity-60'>Suave Music PR Dashboard</p>
        <Button
            label='Logout'
            className='bg-black text-white px-6 p-2'
        />
      </section>

      <section className='px-[2vw] md:px-[8vw] py-[2vh]'>
        <p className='text-lg font-semibold opacity-50 pb-4'>Service requests</p>
            <AetoGrid columns={serviceRequestColumns} data={requests} />
      </section>

      <section className='px-[2vw] md:px-[8vw] py-[2vh]'>
        <p className='text-lg font-semibold opacity-50 pb-4'>Enquiries</p>
            <AetoGrid columns={enquiryColumns} data={enquiries} />
      </section>
    </div>
  )
}

export default Dashboard
