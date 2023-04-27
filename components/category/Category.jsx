import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '@/redux/slices/category/categorySlice';

const Category = ({ item }) => {
  const selectedCategory = useSelector((state) => state.category.value);

  const dispatch = useDispatch();

  return (
    <li
      className={`flex min-w-max cursor-pointer flex-col items-center justify-center gap-2 py-2 
          ${
            selectedCategory === item.type
              ? 'border-b-2 border-black text-black'
              : 'text-gray-500 hover:border-b-2 hover:border-gray-300'
          }`}
      onClick={() => dispatch(selectCategory(item.type))}
    >
      <Image
        src={item.logo}
        alt='Category'
        height={500}
        width={500}
        className='h-6 w-6'
      />
      <span className='text-xs font-semibold'>{item.title}</span>
    </li>
  );
};

export default Category;
