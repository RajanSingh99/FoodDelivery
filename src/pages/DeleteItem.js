import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, TextBox } from 'react-form-elements';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DeleteItem.css';
import { useNavigate } from 'react-router-dom';

const DeleteItem = () => {
  const [itemId, setItemId] = useState('');
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/Admin-services');
  };

  const handleSubmit = async () => {
    try {
      const key = localStorage.getItem('key');
      const response = await axios.delete(
        `http://localhost:8088/items/delete/${itemId}`,
        { params: { key: key } }
      );

      console.log('Delete item response:', response.data);

      if (response.status === 200) {
        toast.success('Item deleted successfully');
        setTimeout(() => {
          navigate('/Admin-services');
        }, 1000);
      }
    } catch (error) {
      console.log('Error deleting item:', error);
      toast.error('Error deleting item');
    }
  };

  const handleChangeItemId = (event) => {
    setItemId(event.target.value);
  };

  return (
    <div className="delete-item">
      <h2>Delete Item</h2>
      <div className='formContainer'>  <Form onSubmit={handleSubmit}>
        <TextBox
          label=""
          name="itemId"
          placeholder="Item ID"
          value={itemId}
          type="number"
          onChange={handleChangeItemId}
          required
        />
        <Button>Submit</Button>
        <Button onClick={handleHome}>Return</Button>
      </Form>
      <ToastContainer />
      </div>  
    </div>
  );
};

export default DeleteItem;