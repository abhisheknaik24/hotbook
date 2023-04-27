const handler = (req, res) => {
  const items = [
    {
      id: 1,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'amazing-views',
    },
    {
      id: 2,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/c8f48e8b-091d-47ea-85ac-b31bc2604bbb.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'amazing-views',
    },
    {
      id: 3,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-598289084005563595/original/5037ecff-e315-4464-9c85-64503ae5b6ea.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'amazing-views',
    },
    {
      id: 4,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'farms',
    },
    {
      id: 5,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'farms',
    },
    {
      id: 6,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'farms',
    },
    {
      id: 7,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'amazing-pools',
    },
    {
      id: 8,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'amazing-pools',
    },
    {
      id: 9,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'amazing-pools',
    },
    {
      id: 10,
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/86a851fc-087a-4baa-80cf-0e9ed0d3cf5d.jpeg',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/0fa6e9bb-e0df-4743-beef-ee5604219f19.jpeg',
      ],
      title: 'Baindur, India',
      rate: 5,
      km: 1643,
      date: '1–6 May',
      price: 8128,
      type: 'earth-homes',
    },
  ];
  if (req.method === 'POST') {
    const { selectedCategory } = req.body;

    const filteredItems = items.filter((i) => {
      if (i.type === selectedCategory) {
        return i;
      }
    });

    res.status(200).json({
      success: true,
      message: 'Items fetched successfully!',
      data: { items: filteredItems },
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Request method is not allowed!',
    });
  }
};

export default handler;
