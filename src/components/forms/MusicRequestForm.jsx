import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';

const MusicRequestForm = ({ visible, onHide }) => {
  const [request, setRequest] = useState({
    name: "",
    nextOfKin: "",
    phone: "",
    email: "",
    service: "",
    file: "",
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
      header="Submit your music"
      draggable={false}
      className="w-11/12 md:w-1/2"
      headerClassName='text-center'
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
        <input
          type="text"
          placeholder="e.g. Joseph Doe"
          className="px-2 py-3 border rounded-md"
          value={request.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <input
            type="text"
            placeholder="Next of Kin"
            className="px-2 py-3 border rounded-md"
            value={request.nextOfKin}
            onChange={(e) => handleInputChange("nex￼tOfKin", e.target.value)}
        />
        <input
            type="text"
            placeholder="Contact e.g 0712345678"
            className="px-2 py-3 border rounded-md"
            value={request.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
        />
        <input
          type="email"
          placeholder="e.g. jdoe@gmail.com"
          className="px-2 py-3 border rounded-md"
          value={request.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <select
          className="px-2 py-3 border rounded-md"
          value={request.service}
          onChange={(e) => handleInputChange("service", e.target.value)}
        >
          <option label='' value="" disabled>Select a Service</option>
          <option label='Promotion' value="PROMOTION">Promotion</option>
          <option label='Distribution' value="DISTRIBUTION">Distribution</option>
          <option label='Management' value="MANAGEMENT">Management</option>
        </select>
        <InputTextarea
          value={request.message}
          placeholder="Briefly describe the service you specifically want for your music and more..."
          autoResize
          spellCheck
          rows={2}
          cols={30}
          className="text-sm w-full p-3 border focus:border-gray-300"
          onChange={(e) => handleInputChange("message", e.target.value)}
        />
        <input
            type="file"
            placeholder='select music'
            accept="audio/mpeg"
            className="px-2 py-3 border rounded-md"
            onChange={handleFileChange}
            />

        <button
          type="submit"
          className="px-2 py-3 bg-black bg-opacity-80 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </Dialog>
  );
};

export default MusicRequestForm;