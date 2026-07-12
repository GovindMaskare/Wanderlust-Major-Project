const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5770, 34.1526] }
  },
  {
    title: "Mountain Retreat in Himalayas",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Manali",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1734, 32.2432] }
  },
  {
    title: "Lake View House in Udaipur",
    description: "Experience the charm of Udaipur with beautiful lake views from this heritage property.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "Backwater Houseboat in Kerala",
    description: "Stay in a luxury houseboat and cruise through the serene backwaters of Alleppey.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Alleppey",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3350, 9.4981] }
  },
  {
    title: "Beachfront Paradise in Sri Lanka",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Bentota",
    country: "Sri Lanka",
    geometry: { type: "Point", coordinates: [80.0086, 6.4210] }
  },
  {
    title: "Rustic Cabin in Nepal",
    description: "Spend your days in the lap of Himalayas in this cozy cabin in Pokhara.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Pokhara",
    country: "Nepal",
    geometry: { type: "Point", coordinates: [83.9820, 28.2096] }
  },
  {
    title: "Luxury Penthouse in Mumbai",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Ski Chalet in Gulmarg",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in Gulmarg.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Gulmarg",
    country: "India",
    geometry: { type: "Point", coordinates: [74.3860, 34.0488] }
  },
  {
    title: "Safari Lodge in Jim Corbett",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Spot tigers and elephants.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Jim Corbett",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9785, 29.5361] }
  },
  {
    title: "Heritage Haveli in Jaipur",
    description: "Stay in a piece of history in this beautifully preserved haveli in the Pink City.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Private Island Retreat in Maldives",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Male",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 4.1755] }
  },
  {
    title: "Charming Cottage in Darjeeling",
    description: "Escape to the tea gardens of Darjeeling in this quaint and charming cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Darjeeling",
    country: "India",
    geometry: { type: "Point", coordinates: [88.2662, 27.0360] }
  },
  {
    title: "Historic Bungalow in Shimla",
    description: "Step back in time in this elegant historic bungalow located in the heart of Shimla.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Shimla",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
  },
  {
    title: "Beachfront Bungalow in Andaman",
    description: "Relax on the pristine beaches of Andaman in this beautiful beachfront bungalow.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Havelock Island",
    country: "India",
    geometry: { type: "Point", coordinates: [92.9861, 12.9980] }
  },
  {
    title: "Mountain View Cabin in Bhutan",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Paro",
    country: "Bhutan",
    geometry: { type: "Point", coordinates: [89.4100, 27.4300] }
  },
  {
    title: "Art Deco Apartment in Kolkata",
    description: "Step into the colonial era in this stylish Art Deco apartment in Kolkata.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Kolkata",
    country: "India",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] }
  },
  {
    title: "Tropical Villa in Pondicherry",
    description: "Escape to a French-colonial villa in Pondicherry with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Pondicherry",
    country: "India",
    geometry: { type: "Point", coordinates: [79.8144, 11.9139] }
  },
  {
    title: "Historic Fort in Jaisalmer",
    description: "Live like royalty in this historic fort in the heart of the Thar Desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Jaisalmer",
    country: "India",
    geometry: { type: "Point", coordinates: [70.9033, 26.9157] }
  },
  {
    title: "Desert Oasis in Jodhpur",
    description: "Experience luxury in the blue city with a private pool overlooking the desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Jodhpur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.0243, 26.2389] }
  },
  {
    title: "Rustic Log Cabin in Himachal",
    description: "Unplug and unwind in this cozy log cabin surrounded by pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Dharamshala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3174, 32.2192] }
  },
  {
    title: "Beachfront Villa in Gokarna",
    description: "Enjoy the pristine beaches of Gokarna in this beautiful beachfront villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Gokarna",
    country: "India",
    geometry: { type: "Point", coordinates: [74.3712, 14.5489] }
  },
  {
    title: "Eco-Friendly Treehouse in Kerala",
    description: "Stay in an eco-friendly treehouse nestled in the Western Ghats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Wayanad",
    country: "India",
    geometry: { type: "Point", coordinates: [76.0000, 11.6854] }
  },
  {
    title: "Historic Cottage in Coorg",
    description: "Experience the charm of Coorg in this beautifully restored plantation cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Coorg",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8067, 12.4200] }
  },
  {
    title: "Modern Apartment in Bangalore",
    description: "Explore the IT hub of India from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Bangalore",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Lakefront Cabin in Nainital",
    description: "Spend your days by the lake in this cozy cabin in the scenic Kumaon hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Nainital",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4885, 29.3803] }
  },
  {
    title: "Luxury Villa in Goa",
    description: "Indulge in luxury in this private villa in Goa with stunning views of the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },
  {
    title: "Ski Chalet in Auli",
    description: "Hit the slopes in style with this luxurious ski chalet in Auli, the skiing paradise of India.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Auli",
    country: "India",
    geometry: { type: "Point", coordinates: [79.5856, 30.5289] }
  },
  {
    title: "Secluded Beach House in Andaman",
    description: "Escape to a secluded beach house in the Andaman Islands. Dive, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Port Blair",
    country: "India",
    geometry: { type: "Point", coordinates: [92.7297, 11.6234] }
  }
];

module.exports = { data: sampleListings };