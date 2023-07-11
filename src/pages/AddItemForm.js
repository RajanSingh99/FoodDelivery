import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, TextBox } from 'react-form-elements';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddItemForm.css';
import { useAccordionButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddItemForm = () => {
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState('');
  const [cost, setCost] = useState();
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const key = localStorage.getItem('key');
      const item = {
        category: {
          categoryId: categoryId,
          categoryName: categoryName
        },
        cost: cost,
        itemName: itemName,
        quantity: quantity
      };

      const response = await axios.post('http://localhost:8088/items/add', item, {
        params: {
          key: key
        }
      });

      console.log('Add item response:', response.data);

      if (response.status === 201) {
        toast.success('Item added successfully');
      }
    } catch (error) {
      console.log('Error adding item:', error);
      toast.error('Error adding item');
    }
  };

  return (
    <div className="add-item-form">
      <h2>Add Item</h2>
      <div className='formContainer'><Form onSubmit={handleSubmit}>
        <TextBox
          label=''
          name="categoryId"
          placeholder="Category ID"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          type="number"
          required
        />
        <TextBox
        label=''
          name="categoryName"
          placeholder="Category Name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          required
        />
        <TextBox
        label=''
          name="cost"
          placeholder="Cost"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
          type="number"
          required
        />
        <TextBox
        label=''
          name="itemName"
          placeholder="Item Name"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
          required
        />
        <TextBox
          label=''
          name="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          type="number"
          required
        />
        <Button>Submit</Button>
        <Button onClick={()=>navigate('/Admin-services')}>Return</Button>
      </Form></div>
      
      <ToastContainer />
    </div>
  );
};

export default AddItemForm;
