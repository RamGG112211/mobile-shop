import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { RxCross2 } from "react-icons/rx";
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import axios from 'axios';  // If you prefer axios

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddProductModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    shortDescription: '',
    fullDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    console.log(product);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/v1/products/new', product, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data); // Handle the response data as needed
      setIsOpenModal(false);
    } catch (error) {
      console.error('There was an error posting the product!', error);
    }
  };

  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>Add New Product</Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        TransitionComponent={Transition}
        maxWidth="sm"
        fullWidth
      >
        <div className='absolute top-3 right-[2rem] text-2xl cursor-pointer' onClick={() => setIsOpenModal(false)}>
          <RxCross2 />
        </div>
        <div className='p-6 max-h-[80vh] overflow-y-auto'>
          <h3 className='text-xl font-medium mb-2'>Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <input
                type='text'
                name='name'
                placeholder='Name*'
                value={product.name}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='number'
                name='price'
                placeholder='Price*'
                value={product.price}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                name='image'
                placeholder='Image URL*'
                value={product.image}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <textarea
                name='shortDescription'
                placeholder='Short Description*'
                value={product.shortDescription}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <textarea
                name='fullDescription'
                placeholder='Full Description*'
                value={product.fullDescription}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
            </div>
            <div className='flex justify-end'>
              <Button type='submit' variant='contained' color='primary'>
                Add Product
              </Button>
              <Button onClick={() => setIsOpenModal(false)} variant='outlined' color='secondary' className='ml-2'>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default AddProductModal;
