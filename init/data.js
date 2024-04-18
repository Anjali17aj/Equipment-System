const sampleListings = [
  {
    title: "Tower Crane for Urban Construction",
    description:
      "Ideal for high-rise construction projects, this tower crane offers superior height and lifting capabilities. Ensure your project stays on track with this reliable equipment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586458995526-09ce6839babe?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Tower'],
    price: 150760,
    location: "Noida sector 62",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -118.689423, 34.035591 ] 
    }
  },
  {
    title: "Articulated Boom Lift for Flexible Reach",
      description:
        "Perfect for tasks that require flexibility and reach, this articulated boom lift provides excellent maneuverability and stability. Ideal for outdoor construction and industrial applications.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/man-nacelle_268835-3277.jpg?t=st=1713025631~exp=1713029231~hmac=35794335732b58f42894e967543f91e6756c773ae156fbe23c51f659429ff3f9&w=360",
    },
    category: ['ArticulatedBoom'],
    price: 120000,
    location: "Fin City",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -74.0059945, 40.7127492 ]
    }
  },
  {
    title: "Heavy Duty Dump Truck for Mining Operations",
      description:
        "This heavy-duty dump truck is engineered for performance and durability in the toughest mining conditions. Maximize your productivity with this robust vehicle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618906460527-05607b30f84b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Trucks'],
    price: 100000,
    location: "Mumbai",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -106.823561, 39.191113 ]
    }
  },
  {
    title: "Scissor Lift for Elevated Projects",
    description:
      "Offering a stable platform for various elevated projects, this scissor lift is ideal for indoor and outdoor maintenance work. Ensure safety and efficiency with its easy maneuverability.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/forklift_1187-793.jpg?t=st=1713025757~exp=1713029357~hmac=c71881e7204c81e5b2eae7e9b1ac775c64d45931a5a027ca5d49af748d6eade1&w=740",
    },
    category: ['Lifter'],
    price: 250980,
    location: "Delhi",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 11.255576, 43.769871 ]
    }
  },
  {
    title: "Mobile Crane for Efficient Material Handling",
    description:
      "Our mobile crane offers exceptional lifting capabilities and mobility for efficient material handling on construction sites. Its robust design ensures reliability and safety.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/crane-is-carrying-dirt_1112-1225.jpg?t=st=1713197163~exp=1713200763~hmac=0608b7ced35fae885513ac32017b33ab85ac16c4c2377608fb838f89b3acd0db&w=996",
    },
    category: ['Cranes'],
    price: 887900,
    location: "Port Blair",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -122.674195, 45.520247 ]
    }
  },
  {
    title: "Telehandler for Versatile Lifting and Reach",
      description:
        "This telehandler combines the power of a crane with the versatility of a forklift. It's perfect for lifting and reaching in a variety of construction and agricultural settings.",
    image: {
      filename: "listingimage",
      url: "https://www.vertikaluk.com/wp-content/uploads/2022/11/what-is-a-telehandler-1024x768.jpg",
    },
    category: ['Cranes'],
    price: 206500,
    location: " Orissa",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -86.851047, 21.161785 ]
    }
  },
  {
    title: "Excavator for Demolition and Construction",
      description:
        "Maximize your efficiency on demolition and construction sites with our high-performance excavator. Designed for heavy digging and lifting, it's a powerhouse for any project.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1628645419184-26a1f2757340?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Trending'],
    price: 901230,
    location: "Jamshedpur",
    country: "India",
    geometry:{
      coordinates: [ -120.12787, 39.267319 ], type: 'Point'
    }
  },
  {
    title: "Rotary Drilling Rig in Gurgaon",
      description: "Powerful rotary drilling rig designed for deep foundation drilling in construction. Ensures high efficiency and accuracy.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/close-up-hookah-charcoal-bowl-pipe_140725-634.jpg?t=st=1713026010~exp=1713029610~hmac=6649574c28c22bb730e34c80d84168e39d17471ec16fe1d0c173f25de91c9b19&w=360",
    },
    category: ['Trending'],
    price: 358700,
    location: "Gurgaon",
    country:"India",
    geometry:{
      type: 'Point', coordinates: [ -118.242766, 34.053691 ]
    }
  },
  {
    title: "Wheeled Loader in Noida",
    description: "Highly versatile wheeled loader, ideal for moving large amounts of material over short distances efficiently.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1675600360075-5564fe1a7e5a?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Loader'],
    price: 304500,
    location: "Noida",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 7.228548, 46.096795 ]
    }
  },
  {
    title: "Compact Track Loader in Faridabad",
      description: "Compact track loader for superior performance in muddy and difficult terrains. Enhances productivity in challenging conditions.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/excavator-digging-ground-day-light_23-2149194794.jpg?t=st=1713026109~exp=1713029709~hmac=1c75e794394bffd52935bff258a7ecb386a57fd7999d49b5585e35dadf7e985a&w=360",
    },
    category: ['Loader'],
    price: 406500,
    location: "Faridabad",
    country: "India",
    geometry:{
      coordinates: [ 34.8333, 2.3333 ], type: 'Point'
    }
  },
  {
    title: "Asphalt Paver in Ghaziabad",
      description: "Efficient asphalt paver for smooth and durable pavements. Ideal for roads, parking lots, and driveways.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1641309664383-b1228b0cc923?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Asphalt'],
    price: 187600,
    location: "Ghaziabad",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 4.9, 52.378 ]
    }
  },
  {
    title: "Trencher Machine in Ludhiana",
      description: "Robust trencher machine for efficient digging in a variety of soil conditions. Perfect for laying pipes and cables.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/heavy-machinery-used-construction-industry-engineering_23-2151307775.jpg?t=st=1713196733~exp=1713200333~hmac=9ba1f8c1c72955b3c7e6baee3f631a0c87f440ec70e6eaa71e86efb4315e2941&w=996",
    },
    category: ['Trencher'],
    price: 1007600,
    location: "Ludhiana",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 120.782751, 23.831445 ]
    }
  },
  {
    title: "Motor Grader in Amritsar",
    description: "Precision motor grader for creating flat surfaces during the grading process. Ensures high-quality road construction.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/close-up-seeder-attached-tractor-field_146671-19092.jpg?t=st=1713026284~exp=1713029884~hmac=9f23782a7be33c10416c818595e3c87baa7e05f5017debb8879da1543525bf1e&w=996",
    },
    category: ['Grader'],
    price: 198200,
    location: "Amritsar",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -0.22985, 51.74913 ] 
    }
  },
  {
    title: "Concrete Boom Pump in Jaipur",
      description: "High-reach concrete boom pump for efficient concrete placement in high-rise constructions. Ensures speed and accuracy.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/view-heavy-machinery-used-construction-industry_23-2151307803.jpg?t=st=1713026340~exp=1713029940~hmac=9354cb7355c176f059e3c9d9aa5cd3b40b6810dfd0a941e98e16934c295e9a7d&w=360",
    },
    category: ['ArticulatedBoom'],
    price: 212200,
    location: "Jaipur",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -71.058291, 42.360253 ]
    }
  },
  {
    title: "Tower Light in Kanpur",
    description: "Portable tower light for night-time construction and outdoor events. Provides ample lighting for safe and efficient work.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/premium-photo/low-angle-view-communications-tower_1048944-29577869.jpg?size=626&ext=jpg&ga=GA1.1.81010329.1713196612&semt=ais",
    },
    category: ['Tower'],
    price: 182300,
    location: "Kanpur",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 115.2191175, -8.6524973 ]
    }
  },
  {
    title: "Demolition Hammer in Surat",
    description: "Heavy-duty demolition hammer for breaking through concrete and asphalt. Ideal for demolition and renovation projects.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1710765540315-096c7ac61007?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Hammer'],
    price: 154500,
    location: "Banff",
    country:"India",
    geometry:{
      type: 'Point', coordinates: [ -115.56825, 51.177778 ]
    }
  },
  {
    title:"Skid Steer Concrete Mixer in Bhopal",
    description: "Skid steer attachment for mixing and pouring concrete efficiently. Offers flexibility and reduces manual labor.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674927125657-e8782933d009?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Skid'],
    price: 165400,
    location: "Bhopal",
    country: "India",
    geometry:{
      coordinates: [ -80.18537321875, 25.76513515625 ], type: 'Point'
    }
  },
  {
    title: "Crawler Carrier in Pune",
      description: "Crawler carrier for transporting heavy materials across rough terrains. Enhances logistics efficiency in challenging conditions.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/premium-photo/heavy-crawler-crane-lowered-cargo-hook-ground_187194-2145.jpg",
    },
    category: ['Crawler'],
    price: 309800,
    location: "Pune",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 98.386793, 7.888931 ]
    }
  },
  {
    title: "Excavator in Hyderabad",
      description: "Compact mini excavator for small to medium-sized projects. Offers exceptional maneuverability and efficiency.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/group-excavator-working-construction-site_587448-4947.jpg",
    },
    category: ['Excavator'],
    price: 406500,
    location: "Hyderabad",
    country: "India",
    geometry:{
      coordinates: [ -4.228937, 57.477415 ], type: 'Point'
    }
  },
  {
    title: "Compact Skid Steer Loader in Jaipur",
    description: "A versatile and nimble loader for landscaping, construction, and demolition. Easy to operate in tight spaces.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/professional-female-driver-operating-forklift-vehicle_23-2150248805.jpg?t=st=1713026771~exp=1713030371~hmac=250b49b84382e24b4a9b67cd9af66ebd6c2a6b70d574749e2852d1415f8de435&w=360",
    },
    category: ['Loader'],
    price: 500870,
    location: "Jaipur",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 55.292491, 25.265347 ]
    }
  },
  {
    title: "Loader for Construction in Lucknow",
      description: " loader, perfect for digging, trenching, back-filling, and material handling.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/heavy-excavator-digging-day-light_23-2149194840.jpg?t=st=1713026819~exp=1713030419~hmac=896266ea725c8729147648e4211eb0bb0e6b749f6c738dfb681e87ad14836443&w=360",
    },
    category: ['Loader'],
    price: 1109870,
    location: "Lucknow",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -109.172599073804, 47.0725146587006 ]
    }
  },
  {
    title: "Industrial Air Compressor in Kochi",
      description: "High-efficiency air compressor for industrial use, offering reliable and continuous operation.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/3d-rendering-gas-cylinder_23-2149290467.jpg?t=st=1713026890~exp=1713030490~hmac=cd0d2cb34c35819e101f9cc9bb64fecd605c18f22ebbd077acf6b20543252dfa&w=900",
    },
    category: ['Trending'],
    price: 259800,
    location: "Kochi",
    country:"India",
    geometry:{
      type: 'Point', coordinates: [ 25.334045, 37.440817 ]
    }
  },
  {
    title: "Crawler Dozer in Indore",
      description: "Powerful crawler dozer ideal for road construction, land clearing, and infrastructure projects.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1621922688811-8db0627303c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Crawler'],
    price: 787650,
    location: "Indore",
    country: "India",
    geometry:{
      coordinates: [ -84.092347, 9.932191 ], type: 'Point'
    }
  },
  {
    title: "Tandem Vibratory Roller in Bhopal",
    description: "Compact tandem vibratory roller for asphalt compaction and road construction works. High efficiency and maneuverability.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1642936727018-2f48affd7cb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Rolers'],
    price: 169800,
    location: "Bhopal",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -79.940273, 32.787601 ] 
    }
  },
  {
    title: "Walk-Behind Mini Trencher in Surat",
      description: "Efficient walk-behind mini trencher, perfect for cable and pipe laying projects. Compact and easy to use.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661811467442-ff589e8d2693?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Trencher'],
    price: 208700,
    location: "Surat",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 139.1485991, 35.76478424 ]
    }
  },
  {
    title: "Mini Dumper for Material Transportation in Visakhapatnam",
      description: "Compact and versatile mini dumper for efficient material transportation in construction sites.",
    image: {
      filename: "listingimage",
      url: "https://img.freepik.com/free-photo/large-truck-carrying-sand-platinum-mining-site-africa_181624-60189.jpg?t=st=1713027101~exp=1713030701~hmac=00a38b3e549a67b8d7e6ed6dbc2651571ddec7fefa2a414c4ab3733b435d65b0&w=1060",
    },
    category: ['Dumper'],
    price: 127900,
    location: "Visakhapatnam",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -71.5783054333969, 43.6898878153712 ]
    }
  },
  {
    title: "Lift in Nagpur",
    description: "Eco-friendly electric scissor lift for indoor maintenance and warehouse operations. Quiet and clean operation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['Lifter'],
    price: 60900,
    location: "Nagpur",
    country: "India",
    geometry:{
      coordinates: [ 100.58672, 13.772545 ], type: 'Point'
    }
  },
  {
    title: "Portable Concrete Mixer in Patna",
    description: "Easy to use portable concrete mixer for small to medium construction projects. Efficient and reliable.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674927125657-e8782933d009?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['ConcreteMixer'],
    price: 400000,
    location: "Aspen",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ -106.823561, 39.191113 ]
    }
  },
  {
    title: "Hydraulic Breaker for Demolition in Chennai",
    description: "High-power hydraulic breaker for efficient demolition of concrete and rocks. Perfect for construction and renovation projects.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1711450887288-3213d41170ee?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    category: ['HydraulicBreaker'],
    price: 10800,
    location: "Costa Rica",
    country: "India",
    geometry:{
      coordinates: [ -84.092347, 9.932191 ], type: 'Point' 
    }
  },
];

module.exports = { data: sampleListings };
