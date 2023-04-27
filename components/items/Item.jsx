import Carousel from '@/packages/carousel/Carousel';
import Image from 'next/image';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';

const Item = ({ item }) => {
  return (
    <div className='flex cursor-pointer flex-col items-start justify-center gap-2'>
      <div className='relative w-full'>
        <Carousel>
          {item.images &&
            item.images.map((image) => (
              <Image
                key={item.id}
                src={image}
                alt={item.title}
                height={500}
                width={500}
                className='h-96 min-w-full rounded-xl sm:h-64 md:h-72'
              />
            ))}
        </Carousel>
        <span className='absolute right-4 top-4 z-10'>
          <AiOutlineHeart
            size={25}
            className='cursor-pointer text-white hover:scale-110'
          />
        </span>
      </div>
      <div className='w-full leading-5'>
        <div className='flex items-center justify-between'>
          <h3 className='font-bold'>{item.title}</h3>
          <div className='flex items-center justify-center'>
            <AiFillStar />
            <span>{parseFloat(item.rate).toFixed(1)}</span>
          </div>
        </div>
        <div className='text-sm text-gray-500'>
          <div>{item.km.toLocaleString()} kilometres away</div>
          <div>{item.date}</div>
        </div>
        <div className='mt-2'>
          <span className='font-bold'>
            &#8377;{item.price.toLocaleString()}
          </span>{' '}
          night
        </div>
      </div>
    </div>
  );
};

export default Item;
