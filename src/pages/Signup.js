import React, { useRef, useState } from 'react';
import { Button, Form, TextBox, Range, EmailInput } from 'react-form-elements';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';

const SignupPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    if(mobileNumber.length !==10){
      toast.error("Mobile number should be of 10 digits")
      setMobileNumber('');
    } else{
        try {
          const data = {
            age: parseInt(formData.age),
            email: formData.email,
            firstName: formData.firstName,
            gender: formData.gender,
            lastName: formData.lastName,
            mobileNumber: formData.mobileNumber,
            password: formData.password
          };

          console.log(data);

          const response = await axios.post('http://localhost:8088/customers/add', data);
          console.log('Signup response:', response.data);

          if (response.status === 201) {
            toast.success('Account created successfully');

            setTimeout(() => {
              navigate('/');
            }, 2000);
          }

        } catch (error) {
          console.log('Error occurred during signup:', error);
          toast.error("email already Exists");
        }
   }
  };

  const handleChangeMobile=(event) =>{
    setMobileNumber(event.target.value);
  }

  return (
    <div className='main-body'>
      <div className="signup-container">
        <h2>Signup</h2>
        <Form onSubmit={handleSubmit}>
          <TextBox name="firstName" Placeholder="First Name" label="" initialValue="" required className='signup-input' />
          <TextBox name="lastName" Placeholder="Last Name" label="" initialValue="" required className='signup-input' />
          <EmailInput name="email" Placeholder="Email" label="" initialValue="" required className='signup-input' />
          <TextBox
            name="mobileNumber"
            Placeholder="Mobile Number"
            value={mobileNumber}
            required
            label=""
            onChange={handleChangeMobile}
            type="number"
            className='signup-input' 
          />
          <Range name="age" label="Age" required min={18} max={100}  />
          <TextBox name="gender" Placeholder="Gender" label="" initialValue="" required className='signup-input'  />
          <TextBox
            name="password"
            Placeholder="Password"
            initialValue=""
            required
            label=""
            type="password"
            className='signup-input' 
          />
          <Button >Submit</Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignupPage;