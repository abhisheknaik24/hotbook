import Link from 'next/link';

const Menu = () => {
  return (
    <div className='absolute right-0 top-12 z-50 w-full rounded-lg bg-white text-gray-700 drop-shadow-2xl'>
      <div className='flex flex-col items-start justify-start py-2 font-medium'>
        <Link
          href='/'
          className='w-full px-4 py-2 text-black hover:bg-gray-100'
        >
          <div>Sign up</div>
        </Link>
        <Link href='/' className='w-full px-4 py-2 hover:bg-gray-100'>
          <div>Log in</div>
        </Link>
      </div>
      <hr />
      <div className='flex flex-col items-start justify-start py-2 font-medium'>
        <Link href='/' className='w-full px-4 py-2 hover:bg-gray-100'>
          <div>Hotbook your home</div>
        </Link>
        <Link href='/' className='w-full px-4 py-2 hover:bg-gray-100'>
          <div>Help</div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
