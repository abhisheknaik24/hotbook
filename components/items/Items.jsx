import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import ItemSkeleton from './ItemSkeleton';

const Items = () => {
  const selectedCategory = useSelector((state) => state.category.value);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch('/api/getItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ selectedCategory: selectedCategory }),
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.data.items);
      }
    };

    fetchItems();
  }, [selectedCategory]);

  return (
    <div className='bg-white px-4 pb-4 pt-48 md:px-12'>
      <div className='container mx-auto'>
        <div className='grid h-full w-full grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {items.length > 0 &&
            items.map((item) => <Item key={item.id} item={item} />)}
          {!items.length > 0 &&
            Array.from({ length: 10 }, (_, i) => i).map((index) => (
              <ItemSkeleton key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
