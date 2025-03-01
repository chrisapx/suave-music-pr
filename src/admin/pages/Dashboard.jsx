import React, { useEffect, useState } from 'react';
import AetoGrid from '../../utils/AetoGrid';
import { Button } from 'primereact/button';
import { getUserToken, isAuthenticated, logout } from '../../utils/hooks/AuthCookiesManager';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from '../../utils/Spinner';
import { Sidebar } from "primereact/sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = getUserToken();
  const [searchParams, setSearchParams] = useSearchParams();
  const [requests, setRequests] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [selectedTab, setSelectedTab] = useState('service-requests');
  const [loading, setLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [pages, setPages] = useState({ page: 0, size: 5 });
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if(!isAuthenticated()){
      navigate('/login');
    }
  }, [isAuthenticated()]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const [serviceRequestsData, enquiriesData] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/service-requests?page=${pages.page}&size=${pages.size}`, {
            headers: { Authorization: `Bearer ${token}` }
          }).then(res => res.json()),
          fetch(`${import.meta.env.VITE_API_URL}/api/enquiry-requests?page=${pages.page}&size=${pages.size}`, {
            headers: { Authorization: `Bearer ${token}` }
          }).then(res => res.json())
        ]);

        setRequests(serviceRequestsData);
        setEnquiries(enquiriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pages]);

  useEffect(() => {
    setPages(prev => ({ ...prev, size: itemsPerPage }));
  }, [itemsPerPage]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const columns = {
    'service-requests': [
      { label: 'Name', key: 'name' },
      { label: 'Email', key: 'email' },
      { label: 'Phone Number', key: 'phone' },
      { label: 'Coming as', key: 'title' },
      { label: 'Description', key: 'description' },
      { label: 'Service Category', key: 'serviceCategory' },
      { label: 'Service Package', key: 'servicePackage' }
    ],
    'enquiries': [
      { label: 'Name', key: 'name' },
      { label: 'Email', key: 'email' },
      { label: 'Phone Number', key: 'phone' },
      { label: 'Coming as', key: 'title' },
      { label: 'Description', key: 'description' }
    ]
  };

  const data = selectedTab === 'service-requests' ? requests : enquiries;

  const handleRowClick = (row) => {
    setSelectedRecord(row);
    setIsSidebarOpen(true);
  };

  return (
    <div>
      <section className='px-4 md:px-16 py-4 flex justify-between items-center border-b'>
        <p className='text-3xl font-bold opacity-60'>Suave Music PR Dashboard</p>
        <Button label='Logout' onClick={handleLogout} className='bg-black text-white px-6 p-2' />
      </section>

      <section className='px-4 md:px-16 py-4 flex mt-8 border-b'>
        {['service-requests', 'enquiries'].map(tab => (
          <p 
            key={tab} 
            className={`text-gray-500 cursor-pointer px-4 border-l ${selectedTab === tab ? 'font-bold text-black' : ''}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.replace('-', ' ')}
          </p>
        ))}
      </section>

      <section className='px-4 md:px-16 py-4'>
        <p className='text-lg font-semibold opacity-50 pb-4 capitalize'>{selectedTab.replace('-', ' ')}</p>
        {loading ? <Spinner /> : (
          <AetoGrid 
            columns={columns[selectedTab]} 
            data={data} 
            isLoading={loading} 
            loaderIcon={<Spinner />} 
            onRowSelect={(selectedRows) => handleRowClick(selectedRows[0])}
            footerContent={
              <div className='flex gap-4 items-center justify-center'>

                <label htmlFor='itemsPerPage'>Page</label>
                <select 
                  id='itemsPerPage' 
                  value={pages?.page} 
                  onChange={(e) => setPages(prev => ({ ...prev, page: parseInt(e.target.value, 10)}))}
                  className='border rounded-md p-1'
                >
                  { Array.from({ length: pages?.page || '0' }).map((_, index) => (
                    <option key={index} value={index}>{index}</option>
                  ))}
                </select>

                <label htmlFor='itemsPerPage'>Items per page</label>
                <select 
                  id='itemsPerPage' 
                  value={itemsPerPage} 
                  onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
                  className='border rounded-md p-1'
                >
                  {[5, 10, 15, 25, 50, 100, 200].map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <button 
                  onClick={() => setPages(prev => (prev.page > 0 ? { ...prev, page: prev.page - 1 } : prev))} 
                  disabled={pages.page === 0}
                  className='bg-black text-white px-4 py-2 rounded-md disabled:opacity-50'
                >
                  Prev Page
                </button>
                <span>{data.length} Results</span>
                <button 
                  onClick={() => setPages(prev => ({ ...prev, page: prev.page + 1 }))} 
                  className='bg-black text-white px-4 py-2 rounded-md'
                >
                  Next Page
                </button>
              </div>
            }
          />
        )}
      </section>

      <Sidebar 
        visible={isSidebarOpen} 
        onHide={() => setIsSidebarOpen(false)} 
        position="right" 
        style={{ width: "33vw" }}
        content={({ hide }) => (
          <div className="p-5 h-[100vh] overflow-y-auto">
            <section className='flex justify-between items-center sticky -top-5 bg-white z-10'>
              <h2 className="text-xl font-bold">Record Details</h2>
              <Button 
                icon="pi pi-times" 
                className="p-button-rounded p-button-text p-button-sm" 
                onClick={() => {
                  setSelectedRecord(null);
                  hide();
                }}
              />
            </section>
            {selectedRecord ? (
              <div className="mt-4 space-y-6">
                <article>
                  <strong>Request ID</strong>
                  <p> {selectedRecord?.srId || selectedRecord?.eqId || "--"}</p>
                </article>
                <hr />

                <article>
                  <strong>Names, Email & Phone</strong>
                  <p className='flex gap-2 items-center'> {selectedRecord?.name || "--"}  | 
                    <a href={`mailto:${selectedRecord?.email}`} className='text-blue-500 '>{selectedRecord?.email || "--"}</a> |
                    <a href={`contact:${selectedRecord?.phone}`} className='text-blue-500'>{selectedRecord?.phone || "--"}</a>
                    </p>
                </article>
                <hr />

                <article>
                  <strong>Coming as</strong>
                  <p> {selectedRecord?.title || "--"} </p>
                </article>
                <hr />

                { selectedRecord?.serviceCategory && <article>
                  <strong>Service Category</strong>
                  <p>{selectedRecord?.serviceCategory?.replace("_", " ") || "--"}</p>
                </article>
                }
                { selectedRecord?.serviceCategory && <hr />}

                { selectedRecord?.servicePackage && <article>
                  <strong>Service Package</strong>
                  <p>{selectedRecord?.servicePackage?.replace("_", " ") || "--"}</p>
                </article>
                }
                { selectedRecord?.serviceCategory && <hr />}

                <article>
                  <strong>Description</strong>
                  <p>{selectedRecord?.description || "--"}</p>
                </article>
              </div>
            ) : (
              <p>No record selected</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Dashboard;