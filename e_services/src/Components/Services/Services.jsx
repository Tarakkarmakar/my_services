
import React, { useEffect, useMemo, useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';
import { Send } from '@mui/icons-material';
import Sidebar from '../Navbar/Sidebar/Sidebar';
import "../../Components/styles.css"
const Services = () => {
    const [data, setData] = useState([]);
    const [newService, setNewService] = useState({ title: '', body: '' });
    const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(5);


    // get data JSONPlaceholder on mount
    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data))
        .catch(error => console.error('Error:', error));
    }, []);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewService((prevService) => ({
        ...prevService,
        [name]: value,
      }));
    };
  
//makeing post request
    const postData = () => {
        alert("working")
      axios
        .post('https://jsonplaceholder.typicode.com/posts', newService)
        .then(response => {
          console.log('Posted', response.data);
          alert('Service added Successfully');
          
          //  update the data state 
          setData(prevData => [...prevData, response.data]);

          axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(response => setData(response.data))
          .catch(error => console.error('Error:', error));
    
        })
        .catch(error => console.error('Error:', error));
        alert('Failed to add service');
        
    } ;

    //pagination
    const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = data.slice(indexOfFirstService, indexOfLastService);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
<div className='flex '>
    <Sidebar />
    

      <Container className="mx-auto mt-8 p-8 bg-gray-100 rounded-md shadow-md">
        <Typography variant="h4" gutterBottom>
          Service Data
        </Typography>
        <ul className="list-disc ml-6">
          {currentServices.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
   {/* Pagination */}
   <div className="flex mt-4">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Typography className="mx-4">{currentPage}</Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastService >= data.length}
        >
          Next
        </Button>
      </div>

        <div className="mt-4">
          <Typography variant="h6" gutterBottom>
            Add New Service
          </Typography>
          <form>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              className="mb-2"
              name="title"
              value={newService.title}
              onChange={handleInputChange}
            />
            <TextField
              label="Body"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              className="mb-2"
              name="body"
              value={newService.body}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={<Send/>}
              onClick={postData}
            >
              Post Service
            </Button>
          </form>
        </div>
      </Container>

      </div>
    );
}

export default Services
