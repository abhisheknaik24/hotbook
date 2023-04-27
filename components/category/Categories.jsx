import { useEffect, useState } from 'react';
import Category from './Category';
import CategorySkeleton from './CategorySkeleton';

const Categories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCategoryItems = async () => {
      const res = await fetch('/api/getCategoryItems');
      const data = await res.json();
      if (data.success) {
        setItems(data.data.categoryItems);
      }
    };

    fetchCategoryItems();
  }, []);

  return (
    <nav className='fixed left-0 right-0 top-20 z-40 w-full bg-white px-4 shadow-md md:px-12'>
      <div className='container mx-auto'>
        <ul className='flex h-20 items-center justify-start gap-12 overflow-x-auto overflow-y-hidden scrollbar-hide'>
          {items.length > 0 &&
            items.map((item) => <Category key={item.id} item={item} />)}
          {!items.length > 0 &&
            Array.from({ length: 10 }, (_, i) => i).map((index) => (
              <CategorySkeleton key={index} />
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Categories;
