import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from './Menu';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div className='fixed left-0 right-0 top-0 z-50 w-full border-b bg-white px-4 md:px-12'>
      <div className='container mx-auto'>
        <div className='flex h-20 items-center justify-between'>
          <Link href='/' className='cursor-pointer'>
            <Image
              src='/images/logo.png'
              alt='logo'
              height={100}
              width={100}
              className='hidden md:block'
            />
            <Image
              src='/images/logo-sm.png'
              alt='logo'
              height={25}
              width={25}
              className='block md:hidden'
            />
          </Link>
          <div className='relative flex items-center justify-between gap-2'>
            <Link
              href='/'
              className='invisible rounded-full px-4 py-2 font-semibold text-gray-900 hover:bg-gray-100 md:visible'
            >
              Hotbook your home
            </Link>
            <button
              className='z-50 flex items-center justify-around gap-4 rounded-full border px-2 py-1 outline-none hover:shadow-md'
              onClick={() => (!active ? setActive(true) : setActive(false))}
            >
              <AiOutlineMenu />
              <Image src='/user.svg' alt='user' height={30} width={30} />
            </button>
            <OutsideClickHandler
              onOutsideClick={() => {
                setActive(false);
              }}
            >
              {active && <Menu />}
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
