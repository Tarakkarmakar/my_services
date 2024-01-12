
import Sidebar from '../Navbar/Sidebar/Sidebar'
import React, { useEffect } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdNotificationsNone, MdNotifications, MdInfo } from 'react-icons/md';
import { useDarkMode } from '../../Context/darkModeContext';

const Setting = () => {

    const { darkMode, toggleDarkMode } = useDarkMode()

    useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);
    const handleCheckboxToggle = () => {
        toggleDarkMode();
      };
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-5'>
      <div className={`container mx-auto mt-8 ${darkMode ? 'dark' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>

      <div className="mb-6">
        <label className="flex items-center">
          {darkMode ? <MdCheckBox className="text-blue-500" /> : <MdCheckBoxOutlineBlank />}
          <span className="ml-2">Dark Mode</span>
        </label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleCheckboxToggle}
          className="ml-2 form-checkbox h-5 w-5 text-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          {darkMode ? <MdNotifications className="text-blue-500" /> : <MdNotificationsNone />}
          <span className="ml-2">Enable Notifications</span>
        </label>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Language</label>
        <select
          name="language"
          value="english"  // Note: you may want to use settings.language here
          onChange={() => {}}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-500">
          <span className="mr-1"><MdInfo /></span> Changes will be saved automatically.
        </p>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Setting
