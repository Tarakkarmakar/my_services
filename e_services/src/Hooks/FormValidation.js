import { useState } from 'react';

const useFormValidation = () => {
  const [values, setValues] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
   
    if (!value) {
      return 'Email is required';
    }
    return '';
  };

  const validatePhone = (value) => {
  
    if (!value) {
      return 'Phone number is required';
    }
  
    // Check s only numeric characters
    if (!/^\d+$/.test(value)) {
      return 'Phone number should contain only numeric characters';
    }
  
    // Checkif the phone number has at least 9 digits
    if (value.length < 9 ) {
      return 'Phone number should be at least 9 digits';
    }

    if(value.length >16){
        return 'Should not be greater than 16 digit'
    }
  


    return '';
  };

  const validateMessage = (value) => {
    
    if (!value) {
      return 'Message is required';
    }
  
    // Check greater than 50 characters
    if (value.length <= 50) {
      return 'Message should be greater than 50 characters';
    }
  
    return '';
  };

  const validateForm = () => {
    const emailError = validateEmail(values.email);
    const phoneError = validatePhone(values.phone);
    const messageError = validateMessage(values.message);

    setErrors({
      email: emailError,
      phone: phoneError,
      message: messageError,
    });

    return !(emailError || phoneError || messageError);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
 
      console.log('Form submitted:', values);
    } else {
      console.log('Form validation failed');
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

export { useFormValidation };