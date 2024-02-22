import Container from '../shared/Container';
import SingleFaq from './SingleFaq';

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

              {/* Render each FAQ using SingleFaq component */}
              {FAQs.map((faq) => (
                <SingleFaq key={faq.question} faq={faq} />
              ))}
              {/* End rendering FAQs */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
