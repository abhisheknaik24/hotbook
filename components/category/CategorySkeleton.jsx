const CategorySkeleton = () => {
  return (
    <li className='flex min-w-max cursor-pointer flex-col items-center justify-center gap-2 py-2'>
      <div className='h-6 w-6 rounded-full bg-gray-300'></div>
      <div className='h-3 w-16 rounded-sm bg-gray-300'></div>
    </li>
  );
};

export default CategorySkeleton;
