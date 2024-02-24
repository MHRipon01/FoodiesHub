import Image from 'next/image';

const SingleSlide = ({ slide }) => {
  return (
    <div className={`relative h-full min-w-full`}>
      <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-l from-transparent to-[#0000008c]'>
        <div className='absolute left-2 top-8 w-full sm:left-40 sm:top-1/3 md:w-[640px]'>
          <h1 className='mb-4 text-4xl text-white'>{slide.title}</h1>
          <p className='text-sushi-50'>{slide.description}</p>
        </div>
      </div>
      <div className='h-full w-full'>
        <Image
          src={slide.image}
          alt={slide.title}
          width={1000}
          height={1000}
          className='h-full w-full object-cover'
        />
      </div>
    </div>
  );
};

export default SingleSlide;
