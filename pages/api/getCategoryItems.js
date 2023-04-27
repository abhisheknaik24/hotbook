const handler = (req, res) => {
  const categoryItems = [
    {
      id: 1,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Amazing views',
      type: 'amazing-views',
    },
    {
      id: 2,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Farms',
      type: 'farms',
    },
    {
      id: 3,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Amazing pools',
      type: 'amazing-pools',
    },
    {
      id: 4,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Earth homes',
      type: 'earth-homes',
    },
    {
      id: 5,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Surfing',
      type: 'surfing',
    },
    {
      id: 6,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Private rooms',
      type: 'private-rooms',
    },
    {
      id: 7,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Countryside',
      type: 'countryside',
    },
    {
      id: 8,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Cabins',
      type: 'cabins',
    },
    {
      id: 9,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'OMG!',
      type: 'omg',
    },
    {
      id: 10,
      logo: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Top of the world',
      type: 'top-of-the-world',
    },
  ];
  res.status(200).json({
    success: true,
    message: 'Category items fetched successfully!',
    data: { categoryItems: categoryItems },
  });
};

export default handler;
