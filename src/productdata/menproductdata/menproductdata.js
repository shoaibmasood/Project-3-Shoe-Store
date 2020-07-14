const productData = [
  {
    id: 1,
    title: 'air zoom pegasus trail',
    price: `$${107.97}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-zoom-pegasus-36-trail-mens-trail-running-shoe-r48p3j-1-.png'),
    thumbnail: require('../../assests/air-zoom-pegasus-36-trail-mens-trail-running-shoe-r48p3j.jpg'),
    description:
      'An icon trades pavement for path with the Nike Air Zoom Pegasus 36 Trail. A perforated mesh upper adds breathability, as double Zoom Air units underfoot cushion your stride. Opposing lugs on outsole optimize traction on your uphill climbs.',
  },
  {
    id: 2,
    title: 'air zoom univers FlyEase',
    price: `$${160}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-zoom-unvrs-flyease-basketball-shoe-29tFGs-1-.png'),
    thumbnail: require('../../assests/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg'),
    description:
      'Built for all basketball players and inspired by Elena Delle Donne, the Nike Air Zoom UNVRS with FlyEase technology gives you a quick and easy way to get into your shoes and onto the court. The heel of the shoe folds down to let you slip in then a strap secures the fit.',
  },

  {
    id: 3,
    title: 'zoom d unisex',
    price: `$${90}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/zoom-d-unisex-distance-spike-Yd1dPR-1-.png'),
    thumbnail: require('../../assests/zoom-d-unisex-distance-spike-Yd1dPR.jpg'),
    description:
      'The Nike Zoom D Unisex Distance Spike is designed to run longer distances, made with engineered mesh and Cushlon cushioning for breathable comfort from start to finish. A split Pebax ® plate with five spikes delivers optimal traction and a smooth transition.',
  },

  {
    id: 4,
    title: 'air max 270',
    price: `$${100}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-max-270-mens-shoe-qVk0Vw-1-.png'),
    thumbnail: require('../../assests/air-max-270-mens-shoe-qVk0Vw.jpg'),

    description:
      'Boasting the first-ever Max Air unit created specifically for Nike Sportswear, the Nike Air Max 270 delivers an Air unit that absorbs and gives back energy with every springy step. Updated for modern comfort, it nods to the original, 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.',
  },

  {
    id: 5,
    title: 'air zoom pegasus 36',
    price: `$${220}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-zoom-pegasus-36-mens-running-shoe-D24Mcz-1-.png'),
    thumbnail: require('../../assests/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg'),

    description:
      'The iconic Nike Air Zoom Pegasus 36 returns with more perforations and mesh in the upper for targeted breathability across high-heat areas. A slimmer heel collar and tongue reduces bulk without compromising comfort, while exposed cables give you a snug fit at higher speeds',
  },

  {
    id: 6,
    title: 'nike react infinity',
    price: `$${220}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/custom-nike-react-infinity-run-flyknit-by-you-1-.png'),
    thumbnail: require('../../assests/custom-nike-react-infinity-run-flyknit-by-you.jpg'),

    description: 'details about product',
  },
  {
    id: 7,
    title: 'air-zoom-pegasus-running',
    price: `$${220}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-zoom-pegasus-36-mens-running-shoe-D24Mcz-1-.png'),
    thumbnail: require('../../assests/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg'),

    description: 'details about product',
  },
  {
    id: 8,
    title: 'air-zoom-pegasus-running',
    price: `$${220}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-zoom-pegasus-36-mens-running-shoe-D24Mcz-1-.png'),
    thumbnail: require('../../assests/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg'),

    description: 'details about product',
  },
  {
    id: 9,
    title: 'air-zoom-pegasus-running',
    price: `$${220}`,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-zoom-pegasus-36-mens-running-shoe-D24Mcz-1-.png'),
    thumbnail: require('../../assests/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg'),

    description: 'details about product',
  },
];
export default productData;
