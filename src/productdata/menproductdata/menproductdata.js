const productData = [
  {
    id: 1,
    title: 'air zoom pegasus trail',
    price: 107.97,
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
    price: 160,
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
    price: 90,
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
    price: 100,
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
    price: 220,
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
    title: 'nike react infinity custom',
    price: 180,
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

    description:
      'The Nike React Infinity Run Flyknit By You is here for the long haul, delivering comfort and stability as you log your miles. More React foam and improved Flyknit in the upper are the canvas for your newest running innovation.',
  },
  {
    id: 7,
    title: 'Air Jordan 1 Mid SE',
    price: 125,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-jordan-1-mid-se-mens-shoe-kDdH3C-1-.png'),
    thumbnail: require('../../assests/air-jordan-1-mid-se-mens-shoe-kDdH3C.jpg'),

    description:
      'The Air Jordan 1 Mid SE maintains the timeless appeal of the OG AJ1, revamped with fresh colors and premium materials. Built with a lightweight Air-Sole unit and classic design lines, it captures the essence of the original through a modern lens.',
  },
  {
    id: 8,
    title: 'Nike Metcon 5',
    price: 97.7,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/metcon-5-mens-training-shoe-lFwjMP-1-.png'),
    thumbnail: require('../../assests/metcon-5-mens-training-shoe-lFwjMP.jpg'),

    description:
      'The Nike Metcon 5 is our most tuned Metcon yet. This means specific stability for heavy lifting, traction made for speed, and durability where you need it. It even includes a Hyperlift insert thats compatible with all prior versions of the Metcon. Meet your secret weapon for weight lifting and high-impact training.',
  },
  {
    id: 9,
    title: 'Nike Air Max 2090',
    price: 160,
    sizes: [
      { size: 7, available: true },
      { size: 8, available: true },
      { size: 9, available: false },
      { size: 10, available: false },
      { size: 11, available: true },
      { size: 12, available: false },
    ],
    img: require('../../assests/png/air-max-2090-mens-shoe-Kjct9t-1-.png'),
    thumbnail: require('../../assests/air-max-2090-mens-shoe-Kjct9t.jpg'),

    description:
      'Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent mesh and vibrantly colored details on the upper blend with timeless OG features for an edgy, modernized look.',
  },
];
export default productData;
