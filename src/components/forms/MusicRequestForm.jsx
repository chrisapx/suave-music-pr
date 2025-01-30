import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';

const MusicRequestForm = ({ visible, onHide }) => {
  const [request, setRequest] = useState({
    name: "",
    ico: "",
    phone: "",
    email: "",
    service: "",
    // file: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setRequest((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setRequest((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", request);
    onHide();
  };

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Submit your request"
      draggable={false}
      className="w-11/12 md:w-1/2"
      headerClassName='text-center border-b'
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
        <section className='grid md:grid-cols-2 md:gap-x-6 md:gap-y-2'>
          <div className='grid'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id='name'
              name='name'
              placeholder="e.g. Joseph Doe"
              className="px-2 py-3 border rounded-md"
              value={request.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>

          <div className='grid'>
            <label htmlFor="ico">In capacity of</label>
            <select
              name='ico'
              className="px-2 py-3 border rounded-md"
              value={request.service}
              onChange={(e) => handleInputChange("ico", e.target.value)}
            >
              <option label='In capacity of?' value="" disabled/>
              <option label='Artist' value="Artist"/>
              <option label='Artist`s team' value="Artist`s team"/>
              <option label='Label representative' value="Label representative"/>
            </select>
              </div>

          <div className='grid'>
            <label htmlFor="phone">Phone number</label>
            <input
                type="text"
                id='phone'
                name='phone'
                placeholder="Contact e.g 0712345678"
                className="px-2 py-3 border rounded-md"
                value={request.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>

          <div className='grid'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id='email'
              name='email'
              placeholder="e.g. jdoe@gmail.com"
              className="px-2 py-3 border rounded-md"
              value={request.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </section>

        <select
          name='package'
          className="px-2 py-3 border rounded-md"
          value={request.service}
          onChange={(e) => handleInputChange("service", e.target.value)}
        >
          <option label='Select a Package' value="" disabled/>
          <option label='Project rollout' value="Project rollout"/>
          <option label='Single release cycle' value="Single release cycle"/>
          <option label='Post release campaign' value="Post release campaign"/>
        </select>

        <InputTextarea
          name='description'
          value={request.message}
          placeholder="Briefly describe the service you specifically want for your music and more..."
          autoResize
          spellCheck
          rows={2}
          cols={30}
          className="text-sm w-full p-3 border focus:border-gray-300"
          onChange={(e) => handleInputChange("message", e.target.value)}
        />
        {/* <input
            type="file"
            placeholder='select music'
            accept="audio/mpeg"
            className="px-2 py-3 border rounded-md"
            onChange={handleFileChange}
            /> */}

        <button
          type="submit"
          className="px-2 py-3 bg-black bg-opacity-80 hover:bg-opacity-50 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </Dialog>
  );
};

export default MusicRequestForm;