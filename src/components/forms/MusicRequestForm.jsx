import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  phone: z.string().min(1, 'Phone number is required'),
  title: z.string().min(1, 'Title is required'),
  servicePackage: z.string().min(1, 'Service package is required'),
  serviceCategory: z.string().min(1, 'Service category is required'),
  description: z.string().min(1, 'Description is required'),
});

const MusicRequestForm = ({ visible, onHide }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      title: "",
      servicePackage: "",
      serviceCategory: "",
      description: "",
    },    
  });

  const [request, setRequest] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    servicePackage: "",
    serviceCategory: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    setRequest((prev) => ({ ...prev, [field]: value }));
  };

  const _handleSubmit = async (request) => {
    setIsSubmitting(true);
    if (!trigger()) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/service-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) setError(await response.text());
      console.log("Form Data Submitted:", request);
      setSuccess("Details successfuly submitted, Our PR team will reach out shortly via email or phone");
      reset();
    } catch (error) {
      setError(error.message)
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
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
      <form onSubmit={handleSubmit(_handleSubmit)} className="flex flex-col gap-4 my-4">
        <section className='grid md:grid-cols-2 md:gap-x-6 md:gap-y-2'>
          <div className='grid'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id='name'
              name='name'
              placeholder="e.g. Joseph Doe"
              className="px-2 py-3 border rounded-md"
              {...register("name")}
            />
            {errors.name && <small className="text-red-500">{errors.name.message}</small>}
          </div>
          <div className='grid'>
            <label htmlFor="title">In capacity of</label>
            <select
              name='title'
              className="px-2 py-3 border rounded-md"
              {...register("title")}
            >
              <option label='In capacity of?' value="" disabled/>
              <option label='Artist' value="ARTIST"/>
              <option label='Artist`s team' value="ARTIST_TEAM"/>
              <option label='Label representative' value="LABEL_REP"/>
            </select>
            {errors.title && <small className="text-red-500">{errors.title.message}</small>}
          </div>
          <div className='grid'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id='email'
              name='email'
              placeholder="e.g. jdoe@gmail.com"
              className="px-2 py-3 border rounded-md"
              {...register("email")}
            />
            {errors.email && <small className="text-red-500">{errors.email.message}</small>}
          </div>
          
          <div className='grid'>
            <label htmlFor="servicePackage">Select service package</label>
            <select
              name='servicePackage'
              className="px-2 py-3 border rounded-md"
              {...register("servicePackage")}
            >
              <option label='Select a Package' value="" disabled/>
              <option label='Project rollout' value="PROJECT_ROLLOUT"/>
              <option label='Single release cycle' value="SINGLE_RELEASE_CYCLE"/>
              <option label='Post release campaign' value="POST_RELEASE_CAMPAIGN"/>
            </select>
            {errors.servicePackage && <small className="text-red-500">{errors.servicePackage.message}</small>}
          </div>

          <div className='grid'>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id='phone'
              name='phone'
              placeholder="e.g. +1234567890"
              className="px-2 py-3 border rounded-md"
              {...register("phone")}
            />
            {errors.phone && <small className="text-red-500">{errors.phone.message}</small>}
          </div>
          <div className='grid'>
            <label htmlFor="category">Select service category</label>
            <select
              name='category'
              className="px-2 py-3 border rounded-md"
              {...register("serviceCategory")}
            >
              <option label='Select service category' value="" disabled/>
              <option label='Digital press' value="DIGITAL_PRESS"/>
              <option label='Alternative media placement' value="ALTERNATIVE_MEDIA_PLACEMENT"/>
              <option label='Spotify play listing' value="SPOTIFY_PLAY_LISTING"/>
            </select>
            {errors.serviceCategory && <small className="text-red-500">{errors.serviceCategory.message}</small>}
          </div>
        </section>
        <InputTextarea
          name='description'
          placeholder="Briefly describe the service you want for your music..."
          autoResize
          spellCheck
          rows={2}
          cols={30}
          className="text-sm w-full p-3 border focus:border-gray-300"
          {...register("description")}
        />
        {errors.description && <small className="text-red-500">{errors.description.message}</small>}
        <button
          disabled={isSubmitting}
          type="submit"
          className="px-2 py-3 bg-black bg-opacity-80 hover:bg-opacity-50 text-white rounded-md"
        >
          { !isSubmitting ? "Submit" : <i className='pi pi-spinner pi-spin'/>}
        </button>

        { success && <p className='text-center text-sm text-green-600 bg-green-200 p-3 rounded-md border border-green-600'>{success}</p>}
        { error && <p className='text-center text-sm text-red-600 bg-red-200 p-3 rounded-md border border-red-600'>{error}</p>}
      </form>
    </Dialog>
  );
};

export default MusicRequestForm;
