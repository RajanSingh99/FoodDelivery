import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, TextBox } from 'react-form-elements';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DeleteCusotmer.css';
import { useNavigate } from 'react-router-dom';

const DeleteCustomer = () => {
  const [customerId, setCustomerId] = useState('');
  const navigate = useNavigate();

  const handleHome = async() => {
    navigate('/Admin-services');
  }

  const handleSubmit = async () => {
    try {
      const key = localStorage.getItem('key');
      const customerIdL=parseInt(customerId);
      const response = await axios.delete(`http://localhost:8088/customers/delete/${customerIdL}?key=${key}`);
      console.log('Delete response:', response.data);

      if (response.status === 200) {
        toast.success('Customer deleted successfully');
        setTimeout(() => {
          navigate('/Admin-services');
        }, 1000);
      }
    } catch (error) {
      console.log('Error deleting customer:', error);
      toast.error('Error deleting customer');
    }
  };

  const handleChangeCustomerId = (event) => {
    setCustomerId(event.target.value);
  };

  return (
    <div className='del-contain'>
      <h2>Delete Customer</h2>
      <div className='itemContainer'>
      <Form onSubmit={handleSubmit}>
        <TextBox label='' name="customerId" placeholder="Customer ID" value={customerId} type="number" onChange={handleChangeCustomerId} required />
        <Button>Submit</Button>
        <Button onClick={handleHome}>Return</Button>
      </Form>
      <ToastContainer />
      </div>  
    </div>
  );
};

export default DeleteCustomer;