
import Sidebar from '../Navbar/Sidebar/Sidebar'
import React, { useState } from 'react';
import "../../Components/styles.css"


const Client = () => {
    const [clients, setClients] = useState([
        { id: 1, name: 'Client 1', email: 'client1@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Client 2', email: 'client2@example.com', phone: '987-654-3210' },
      ]);
    
      const [newClient, setNewClient] = useState({
        name: '',
        email: '',
        phone: '',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient((prevClient) => ({
          ...prevClient,
          [name]: value,
        }));
      };
  

  const handleAddClient = () => {
    setClients((prevClients) => [
      ...prevClients,
      {
        id: prevClients.length + 1,
        ...newClient,
      },
    ]);

 
    setNewClient({
      name: '',
      email: '',
      phone: '',
    });
  };


  return (
    <div className='flex justify-between'>
        <Sidebar />
        <div className="container mx-auto mt-8 ml-6">
      <h1 className="text-3xl font-bold mb-4">Client Management</h1>

    
      <div className="mb-8">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-400 p-2 mr-4"
          name="name"
          value={newClient.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-400 p-2 mr-4"
          name="email"
          value={newClient.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Phone"
          className="border border-gray-400 p-2 mr-4"
          name="phone"
          value={newClient.phone}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleAddClient}
        >
          Add Client
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 py-2 px-4">ID</th>
            <th className="border border-gray-300 py-2 px-4">Name</th>
            <th className="border border-gray-300 py-2 px-4">Email</th>
            <th className="border border-gray-300 py-2 px-4">Phone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="border border-gray-300 py-2 px-4">{client.id}</td>
              <td className="border border-gray-300 py-2 px-4">{client.name}</td>
              <td className="border border-gray-300 py-2 px-4">{client.email}</td>
              <td className="border border-gray-300 py-2 px-4">{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}



export default Client
