const ItemSkeleton = () => {
  return (
    <div className='flex cursor-pointer flex-col items-start justify-center gap-2'>
      <div className='relative h-96 w-full rounded-xl bg-gray-300 sm:h-64 md:h-72'></div>
      <div className='w-full'>
        <div className='flex items-center justify-between'>
          <div className='h-4 w-1/2 rounded-sm bg-gray-300'></div>
          <div className='h-4 w-1/6 rounded-sm bg-gray-300'></div>
        </div>
        <div className='h-4 w-1/3 rounded-sm bg-gray-300 mt-1'></div>
        <div className='h-4 w-1/4 rounded-sm bg-gray-300 mt-1'></div>
        <div className='h-4 w-1/5 rounded-sm bg-gray-300 mt-2'></div>
      </div>
    </div>
  );
};

export default ItemSkeleton;
