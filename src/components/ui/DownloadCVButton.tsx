import React from 'react';
import { FaDownload } from 'react-icons/fa';

const DownloadCVButton: React.FC = () => {
  return (
    <a
      href='/Jayps CV.pdf' // Adjust the path to your CV file
      download
      className='flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-lg border border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors shadow-sm hover:shadow-md'
    >
      <FaDownload className='text-lg' />
      <span>Resume</span>
    </a>
  );
};

export default DownloadCVButton;
