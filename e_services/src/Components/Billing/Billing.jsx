
import Sidebar from '../Navbar/Sidebar/Sidebar'
import React, { useState, useEffect } from 'react';
const Billing = () => {
    const [invoices, setInvoices] = useState([]);
    const [newInvoice, setNewInvoice] = useState({
      client: '',
      amount: '',
      isPaid: false,
    });
  
    useEffect(() => {
      // Load invoices from local storage 
      const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
      setInvoices(storedInvoices);
    }, []);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewInvoice((prevInvoice) => ({
        ...prevInvoice,
        [name]: value,
      }));
    };
  
    const handleAddInvoice = () => {
      if (newInvoice.client && newInvoice.amount) {
        setInvoices((prevInvoices) => [
          ...prevInvoices,
          {
            id: prevInvoices.length + 1,
            ...newInvoice,
          },
        ]);
  
      
        setNewInvoice({
          client: '',
          amount: '',
          isPaid: false,
        });
      }
    };
  
    const handleMarkAsPaid = (id) => {
      setInvoices((prevInvoices) =>
        prevInvoices.map((invoice) =>
          invoice.id === id ? { ...invoice, isPaid: true } : invoice
        )
      );
    };
  
    useEffect(() => {
      // Update local storage
      localStorage.setItem('invoices', JSON.stringify(invoices));
    }, [invoices]);
  
    return (
    <div className='flex'>
        <Sidebar />

        <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Billing Management</h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Client"
          className="border border-gray-400 p-2 mr-4"
          name="client"
          value={newInvoice.client}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Amount"
          className="border border-gray-400 p-2 mr-4"
          name="amount"
          value={newInvoice.amount}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleAddInvoice}
        >
          Add Invoice
        </button>
      </div>

      <ul className="list-none">
        {invoices.map((invoice) => (
          <li
            key={invoice.id}
            className={`border shadow-md border-gray-300 rounded-md p-3 mb-4 ${
              invoice.isPaid ? 'bg-green-600' : 'bg-red-200'
            }`}
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">{invoice.client}</h3>
                <p>{`Amount: $${invoice.amount}`}</p>
                {invoice.isPaid && <p className="text-green-600">Paid</p>}
              </div>
              {!invoice.isPaid && (
                <button
                  className="bg-green-500 shadow-md border-black text-black py-2 px-4 rounded"
                  onClick={() => handleMarkAsPaid(invoice.id)}
                >
                  Mark as Paid
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
      
    </div>
  )
}

export default Billing
