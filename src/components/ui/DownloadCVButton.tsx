import React from 'react';
import { FaDownload } from 'react-icons/fa';

const DownloadCVButton: React.FC = () => {
  return (
    <a
      href='/jpcv.pdf' // Adjust the path to your CV file
      download
      className='flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'
    >
      <FaDownload className='text-lg' />
      <span>Download CV</span>
    </a>
  );
};

export default DownloadCVButton;
