'use client';
import { useState } from 'react';
const SingleFaq = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mx-auto mb-5 w-full overflow-hidden border-b text-white'>
      <div className='flex items-center' onClick={toggleFaq}>
        <div className='w-10 transform border-r px-2 transition duration-1000 ease-in-out'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className={`h-6 w-6 ${isOpen ? 'rotate-90' : ''}`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </div>
        <div className='flex items-center px-2 py-3'>
          <div className='mx-3 text-xl'>
            <button className='hover:underline'>{faq.question}</button>
          </div>
        </div>
      </div>

      <div
        className={`flex w-full transform border-b p-3 pb-5 transition-all duration-500 ease-in-out ${
          isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );
};

export default SingleFaq;
