'use client';
import { useState } from 'react';
import Container from '../shared/Container';

const FAQs = [
  {
    question: 'How do I create a restaurant account?',
    answer:
      "To create a restaurant account, click on 'Sign Up', choose 'Restaurant Owner', and fill out the required information.",
  },
  {
    question: 'Can I update my restaurant menu?',
    answer:
      "Yes, log in to your account and select 'Edit Menu' to update your restaurant menu.",
  },
  {
    question: 'How do I track my food order?',
    answer:
      "You can track your order in real-time from the 'Order History' section of your account.",
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept credit/debit cards, PayPal, Google Pay, and cash on delivery.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can reach our customer support team at support@example.com or call +1-123-456-7890.',
  },
];

const Faq = () => {
  // State to track the open/closed state of each FAQ
  const [faqStates, setFaqStates] = useState(Array(FAQs.length).fill(false));

  // Function which will toggle the open/closed state of a FAQ item
  const toggleFaq = (index) => {
    const newFaqStates = [...faqStates];
    newFaqStates[index] = !newFaqStates[index];
    setFaqStates(newFaqStates);
  };

  return (
    <div>
      <Container>
        <div
          className='flex min-h-screen items-center justify-center rounded-lg bg-cover bg-center'
          style={{
            backgroundImage: `url(${'https://i.ibb.co/z2y5kMm/pexels-valeria-boltneva-1833349.jpg'})`,
          }}
        >
          <div className='mx-auto w-full max-w-lg rounded-lg bg-black bg-opacity-50 px-10 py-8 shadow-2xl'>
            <div className='mx-auto max-w-md space-y-6'>
              <p className='text-gray-200'></p>

              {/* FAQ items */}
              {FAQs.map((faq, index) => (
                <div
                  key={index}
                  className='mx-auto mb-5 w-full overflow-hidden border-b text-white'
                >
                  <div
                    className='flex items-center'
                    onClick={() => toggleFaq(index)}
                  >
                    <div className='w-10 transform border-r px-2 transition duration-1000 ease-in-out'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className={`h-6 w-6 ${faqStates[index] ? 'rotate-90' : ''}`}
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
                        <button className='hover:underline'>
                          {faq.question}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex w-full transform border-b p-3 pb-5 transition-all duration-500 ease-in-out ${faqStates[index] ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
              {/* End FAQ items */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
