import React, { useContext, useEffect, useState } from 'react'; // Importing necessary React hooks and components
import { ListingContext } from './context/ListingContext';      // Context for global listing state

// Importing the components used in the app
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Categories from './Components/Categories';
import Listings from './Components/Listings';
import Footer from './Components/Footer';

function App() {
  // Retrieving the global listing state from ListingContext
  const { listing } = useContext(ListingContext);
  // State to hold the filtered items based on the selected listing
  const [filteredItems, setFilteredItems] = useState([]);

  // Sample listings
  const Items = [
    // Beachfronts
    { 
      category: "Beachfront",
      title: "Oceanview Villa",
      type: "Beachfront",
      details: "8 guests | 4 beds | 3 baths",
      pricing: "$3000/night",
      rating: "4.9 ★",
      image: "https://pix10.agoda.net/hotelImages/271/271107/271107_15060415260028504426.jpg?ca=4&ce=1&s=414x232&ar=16x9"
    },
    { 
      category: "Beachfront",
      title: "Seaside Retreat",
      type: "Beachfront",
      details: "4 guests | 2 beds | 2 baths",
      pricing: "$2200/night",
      rating: "4.8 ★",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/540322603.jpg?k=a8eace31736e54c5752d4731a41e027e13aebd659526ebcdac1836b6a7c03cf5&o=&hp=1"
    },
    { 
      category: "Beachfront",
      title: "Beachfront Paradise",
      type: "Beachfront",
      details: "6 guests | 3 beds | 2 baths",
      pricing: "$1800/night",
      rating: "4.7 ★",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/540452584.jpg?k=79daa31be0c9f8050721e74adf6a10c0417798d6d619cd766a60b1b0556fe6df&o=&hp=1"
    },
    { 
      category: "Beachfront",
      title: "Tropical Oasis",
      type: "Beachfront",
      details: "10 guests | 5 beds | 4 baths",
      pricing: "$5000/night",
      rating: "5.0 ★",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24287543-9ccb-4d19-b68f-76b83d1626f4/dfia0q9-bf9e1823-879b-40dd-8cdb-c3ef83bf5d6a.png/v1/fill/w_1095,h_730,q_70,strp/tropical_oasis_by_aaronochs_dfia0q9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvMjQyODc1NDMtOWNjYi00ZDE5LWI2OGYtNzZiODNkMTYyNmY0XC9kZmlhMHE5LWJmOWUxODIzLTg3OWItNDBkZC04Y2RiLWMzZWY4M2JmNWQ2YS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.okxaTxbyoEbuNznuKxEQ1bZCGfWgNviiPCOf0v4dTio"
    },
    { 
      category: "Beachfront",
      title: "Coastal Escape",
      type: "Beachfront",
      details: "5 guests | 3 beds | 2 baths",
      pricing: "$2800/night",
      rating: "4.9 ★",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/580811709.jpg?k=d9e98dc3f0fdca51d32bea9c39749cf16a7132258498b3504620c944801e9e7f&o=&hp=1"
    },
    { 
      category: "Beachfront",
      title: "Beachfront Luxury Villa",
      type: "Beachfront",
      details: "8 guests | 4 beds | 4 baths",
      pricing: "$3800/night",
      rating: "5.0 ★",
      image: "https://www.theluxurybali.com/wp-content/uploads/2019/01/Villa-Photo-Villa-Vedas-Bali-Indonesia-32-660x440.jpg"
    },
    { 
      category: "Beachfront",
      title: "Seaside Cottage",
      type: "Beachfront",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$1200/night",
      rating: "4.5 ★",
      image: "https://simplyseaviews.co.uk/blog/wp-content/uploads/2021/12/Coastal-cottage-with-sea-views-in-North-Devon.jpg"
    },
    { 
      category: "Beachfront",
      title: "Oceanfront Retreat",
      type: "Beachfront",
      details: "4 guests | 2 beds | 2 baths",
      pricing: "$2000/night",
      rating: "4.7 ★",
      image: "https://www.rhulens.com/caches/1920x1078/2024-01-15-14-01-29-1704915736OceanfrontDevelopment-112.jpg"
    },
    { 
      category: "Beachfront",
      title: "Beachfront Residence",
      type: "Beachfront",
      details: "6 guests | 3 beds | 3 baths",
      pricing: "$3500/night",
      rating: "4.8 ★",
      image: "https://images.stockcake.com/public/e/3/7/e37cd40e-2260-4ddb-bd0c-873fea9cd66c_large/luxurious-beachfront-residence-stockcake.jpg"
    },
    { 
      category: "Beachfront",
      title: "Caribbean Beach House",
      type: "Beachfront",
      details: "12 guests | 6 beds | 5 baths",
      pricing: "$7000/night",
      rating: "5.0 ★",
      image: "https://www.shutterstock.com/image-photo/bungalow-on-tropical-island-wooden-600nw-1911350431.jpg"
    },
    // Cabins
    { 
      category: "Cabin",
      title: "Mountain Escape",
      type: "Cabin",
      details: "6 guests | 3 beds | 2 baths",
      pricing: "$1500/night",
      rating: "4.6 ★",
      image: "https://mountainroomescapes.com/wp-content/uploads/2018/03/lodge.jpg"
    },
    { 
      category: "Cabin",
      title: "Forest Cabin",
      type: "Cabin",
      details: "4 guests | 2 beds | 1 bath",
      pricing: "$1100/night",
      rating: "4.5 ★",
      image: "https://static.vecteezy.com/system/resources/previews/025/483/751/non_2x/rustic-log-cabin-nestled-in-tranquil-forest-generated-by-ai-free-photo.jpg"
    },
    { 
      category: "Cabin",
      title: "Luxury Log Cabin",
      type: "Cabin",
      details: "8 guests | 4 beds | 3 baths",
      pricing: "$2500/night",
      rating: "4.8 ★",
      image: "https://www.logspan.com/media/.renditions/wysiwyg/luxury-log-cabin-features.jpg"
    },
    { 
      category: "Cabin",
      title: "Cabin by the Lake",
      type: "Cabin",
      details: "5 guests | 3 beds | 2 baths",
      pricing: "$1700/night",
      rating: "4.7 ★",
      image: "https://images.stockcake.com/public/6/9/c/69c5f035-152c-4d9e-b983-25f775ea3f31_large/serene-lake-cabin-stockcake.jpg"
    },
    { 
      category: "Cabin",
      title: "Charming Cabin",
      type: "Cabin",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$800/night",
      rating: "4.4 ★",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMQhZBDXVeffxXK_7GMVXl752gvJtRe8qig&s"
    },
    { 
      category: "Cabin",
      title: "Woodland Getaway",
      type: "Cabin",
      details: "6 guests | 3 beds | 2 baths",
      pricing: "$2200/night",
      rating: "4.9 ★",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/372347573.jpg?k=af932a51818fe94d9d609320518940b9826946894da089eccce8a34c35a7a71f&o=&hp=1"
    },
    { 
      category: "Cabin",
      title: "Secluded Cabin",
      type: "Cabin",
      details: "4 guests | 2 beds | 2 baths",
      pricing: "$1300/night",
      rating: "4.6 ★",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnGF_BpN9-l01ddOBeFdUpAJd4JqMoTUv0w&s"
    },
    { 
      category: "Cabin",
      title: "Rustic Lodge",
      type: "Cabin",
      details: "8 guests | 4 beds | 3 baths",
      pricing: "$2500/night",
      rating: "4.7 ★",
      image: "https://markstewart.com/wp-content/uploads/2021/11/Rustic-Lodge-House-Plan-MB-3809-Noel-Rear-View-scaled.jpg"
    },
    { 
      category: "Cabin",
      title: "Mountain Retreat",
      type: "Cabin",
      details: "7 guests | 3 beds | 2 baths",
      pricing: "$2200/night",
      rating: "4.8 ★",
      image: "https://images.stockcake.com/public/d/2/8/d28d8e7f-1188-44d7-b680-9470a75bc553_large/luxurious-mountain-retreat-stockcake.jpg"
    },
    { 
      category: "Cabin",
      title: "Alpine Cabin",
      type: "Cabin",
      details: "5 guests | 3 beds | 2 baths",
      pricing: "$1800/night",
      rating: "4.7 ★",
      image: "https://www.almdorf-sanktjohann.com/wp-content/uploads/2020/12/winter-skiurlaub-almdorf-oesterreich.jpg"
    },
    // Luxury
    { 
      category: "Luxury",
      title: "Oceanfront Mansion",
      type: "Luxury",
      details: "12 guests | 6 beds | 6 baths",
      pricing: "$10,000/night",
      rating: "5.0 ★",
      image: "https://ik.imagekit.io/edge/tr:w-800,ar-545-303,pr-true/properties/5788/photos/1_EXTERIOR_NIGHT.png"
    },
    { 
      category: "Luxury",
      title: "Hilltop Villa",
      type: "Luxury",
      details: "8 guests | 4 beds | 5 baths",
      pricing: "$6000/night",
      rating: "4.9 ★",
      image: "https://www.desewing.com/user_uploads/images/property/medium/148_classic-hilltop-villa-1_20210113153321.jpg"
    },
    { 
      category: "Luxury",
      title: "Palace Getaway",
      type: "Luxury",
      details: "10 guests | 5 beds | 5 baths",
      pricing: "$8000/night",
      rating: "5.0 ★",
      image: "https://www.factdubai.com/_next/image?url=https%3A%2F%2Fapi.factmagazines.com%2Fwp-content%2Fuploads%2F2024%2F07%2FRaffles-Bahrain-001-scaled.jpg&w=3840&q=75"
    },
    { 
      category: "Luxury",
      title: "Skyline Penthouse",
      type: "Luxury",
      details: "4 guests | 2 beds | 2 baths",
      pricing: "$4000/night",
      rating: "4.8 ★",
      image: "https://luxuryescapes.capetown/wp-content/uploads/2021/04/skyline-penthouse-ctle.jpg"
    },
    { 
      category: "Luxury",
      title: "Glamorous Mansion",
      type: "Luxury",
      details: "14 guests | 7 beds | 7 baths",
      pricing: "$12,000/night",
      rating: "5.0 ★",
      image: "https://robbreport.com/wp-content/uploads/2017/08/manor-1.jpg"
    },
    { 
      category: "Luxury",
      title: "Luxury Seaside Villa",
      type: "Luxury",
      details: "8 guests | 4 beds | 3 baths",
      pricing: "$5000/night",
      rating: "4.7 ★",
      image: "https://croatia-exclusive.com/storage/app/uploads/public/642/443/d3b/642443d3b640d193866367.jpg"
    },
    { 
      category: "Luxury",
      title: "Private Island Villa",
      type: "Luxury",
      details: "6 guests | 3 beds | 2 baths",
      pricing: "$9000/night",
      rating: "5.0 ★",
      image: "https://easguides.travel/wp-content/uploads/2024/01/Untitled-design-4-1.webp"
    },
    { 
      category: "Luxury",
      title: "Highland Chalet",
      type: "Luxury",
      details: "5 guests | 3 beds | 3 baths",
      pricing: "$3000/night",
      rating: "4.9 ★",
      image: "https://d1he78nyljqsh3.cloudfront.net/properties/_1536x938_crop_center-center_61_line/Highland-1.jpg"
    },
    { 
      category: "Luxury",
      title: "Elite Manor",
      type: "Luxury",
      details: "10 guests | 5 beds | 5 baths",
      pricing: "$7000/night",
      rating: "5.0 ★",
      image: "https://eltmnr.com/assets/images/project/project-01.jpg"
    },
    { 
      category: "Luxury",
      title: "Ultra Luxury Villa",
      type: "Luxury",
      details: "15 guests | 7 beds | 8 baths",
      pricing: "$15,000/night",
      rating: "5.0 ★",
      image: "https://do84cgvgcm805.cloudfront.net/article/362/1200/25cf654358d7812a07902fa42f249dedbec8eb058bdda541c88b9e3b317a93d9.jpg"
    },
    // Trending
    {
      category: "Trending",
      title: "Sunset Mansion",
      type: "Trending",
      details: "6 guests | 3 beds | 3 baths",
      pricing: "$3500/night",
      rating: "4.8 ★",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/47/14/6b/sunset-mansion-seminyak.jpg?w=700&h=-1&s=1"
    },
    { 
      category: "Trending",
      title: "Modern Penthouse",
      type: "Trending",
      details: "4 guests | 2 beds | 2 baths",
      pricing: "$4000/night",
      rating: "4.7 ★",
      image: "https://images.stockcake.com/public/1/9/2/1920beca-b7f8-4c62-895e-60195c8030d4_large/luxurious-penthouse-interior-stockcake.jpg"
    },
    { 
      category: "Trending",
      title: "Beachfront Luxury",
      type: "Trending",
      details: "8 guests | 4 beds | 3 baths",
      pricing: "$5000/night",
      rating: "4.9 ★",
      image: "https://www.luxurybeachhouses.com.au/files/wp-content/uploads/beachfront-1.jpg"
    },
    { 
      category: "Trending",
      title: "Eco Resort",
      type: "Trending",
      details: "10 guests | 5 beds | 5 baths",
      pricing: "$6000/night",
      rating: "5.0 ★",
      image: "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/04/20/90/eco-friendly-resorts_ss_006.rend.hgtvcom.1280.960.suffix/1491582813121.jpeg"
    },
    { 
      category: "Trending",
      title: "Cliffside Villa",
      type: "Trending",
      details: "6 guests | 3 beds | 3 baths",
      pricing: "$3500/night",
      rating: "4.8 ★",
      image: "https://www.home-designing.com/wp-content/uploads/2009/07/villa.jpg"
    },
    { 
      category: "Trending",
      title: "Treehouse Escape",
      type: "Trending",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$900/night",
      rating: "4.5 ★",
      image: "https://media.glampinghub.com/CACHE/images/metacollections/tree-house-getaways/a339fc4048a4831f99f5c39605699b0c.jpg"
    },
    { 
      category: "Trending",
      title: "Downtown Loft",
      type: "Trending",
      details: "3 guests | 2 beds | 2 baths",
      pricing: "$2500/night",
      rating: "4.7 ★",
      image: "https://www.flooringamerica.com/root/clientImages/MF7979WEB/empty-big-413.jpg"
    },
    { 
      category: "Trending",
      title: "Farmhouse Retreat",
      type: "Trending",
      details: "5 guests | 3 beds | 2 baths",
      pricing: "$1200/night",
      rating: "4.6 ★",
      image: "https://i.ytimg.com/vi/YruwlEgCenc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHoVyGBkrfVElLYVEpLUkLyAlpDQ"
    },
    { 
      category: "Trending",
      title: "Luxury Chateau",
      type: "Trending",
      details: "12 guests | 6 beds | 5 baths",
      pricing: "$7000/night",
      rating: "5.0 ★",
      image: "https://broncesmestre.com/wp-content/uploads/2012/09/Chateau-du-Nord-general-view3.jpg"
    },
    { 
      category: "Trending",
      title: "City Loft",
      type: "Trending",
      details: "4 guests | 2 beds | 2 baths",
      pricing: "$2500/night",
      rating: "4.6 ★",
      image: "https://www.stay-cooper.com/site/assets/files/3370/hq-cooper-loftluca-guadagnini-_y0a7134.702x469.jpg"
    },
    // Budget
    { 
      category: "Budget",
      title: "Cozy Cottage",
      type: "Budget",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$400/night",
      rating: "4.2 ★",
      image: "https://thecottagejournal.com/wp-content/uploads/2022/02/TheCottageJournal_BytheFire.jpg"
    },
    { 
      category: "Budget",
      title: "Basic Studio", 
      type: "Budget",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$300/night",
      rating: "4.0 ★",
      image: "https://i.pinimg.com/736x/ff/0a/4a/ff0a4aacd69efca8b6117517f3fb0f6d.jpg"
    },
    { 
      category: "Budget",
      title: "Tiny House",
      type: "Budget",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$350/night",
      rating: "4.1 ★",
      image: "https://images.squarespace-cdn.com/content/v1/5ac05dad3e2d0940d0038935/1696257535439-S9RQ7TXYI1PTARC9FLIC/SETTLER_TINY_08.jpg"
    },
    { 
      category: "Budget",
      title: "City Bunk",
      type: "Budget",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$250/night",
      rating: "4.0 ★",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVnYPbkFZXlPM3wsHv-mXMGNcR4-GTjMwg&s"
    },
    { 
      category: "Budget",
      title: "Simple Cabin",
      type: "Budget",
      details: "3 guests | 2 beds | 1 bath",
      pricing: "$450/night",
      rating: "4.2 ★",
      image: "https://www.thespruce.com/thmb/WxtYOJJdXYMYjmXbIl4VE01owrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Escape-trvler-cabin-5912179f3df78c9283c758a7.jpg"
    },
    { 
      category: "Budget",
      title: "Rustic Cabin",
      type: "Budget",
      details: "4 guests | 2 beds | 2 baths",
      pricing: "$550/night",
      rating: "4.3 ★",
      image: "https://images.squarespace-cdn.com/content/v1/57046156c6fc0847c3b812d3/1592605835086-VWW0ALNL8CUKIEWW36P6/CC_exterior_01.jpg"
    },
    { 
      category: "Budget",
      title: "Beachside Hostel",
      type: "Budget",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$300/night",
      rating: "4.1 ★",
      image: "https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/3/309233/v67kmfembrbeofi0qdwy"
    },
    { 
      category: "Budget",
      title: "Affordable Apartment",
      type: "Budget",
      details: "3 guests | 2 beds | 1 bath",
      pricing: "$500/night",
      rating: "4.2 ★",
      image: "https://nhe-inc.com/wp-content/uploads/2022/06/NorthsideSpartanburg001_frontcorner.jpg"
    },
    { 
      category: "Budget",
      title: "Budget Beach Hut",
      type: "Budget",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$400/night",
      rating: "4.1 ★",
      image: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/id233215bc4aed365/version/1456242089/best-beach-huts-mersey-island.jpg"
    },
    { 
      category: "Budget",
      title: "Cozy Studio",
      type: "Budget",
      details: "2 guests | 1 bed | 1 bath",
      pricing: "$350/night",
      rating: "4.2 ★",
      image: "https://i.pinimg.com/736x/01/78/10/01781082e02b6e318b042b07407e4c88.jpg"
    },
    // Experiennce
    {
      category: "Experience",
      title: "Cooking with Chef Anna",
      type: "Cooking Class",
      details: "3 hours | 10 guests",
      pricing: "$75/person",
      rating: "4.8 ★",
      image: "https://rockgas.co.nz/wp-content/uploads/2023/03/Pasta-1024x683.jpg"
    },
    { 
      category: "Experience",
      title: "Mountain Hike Adventure",
      type: "Outdoor Activity",
      details: "5 hours | 8 guests",
      pricing: "$120/person",
      rating: "4.7 ★",
      image: "https://img.freepik.com/free-photo/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai_188544-7877.jpg"
    },
    { category: "Experience",
      title: "Yoga Retreat",
      type: "Wellness",
      details: "3 days | 15 guests",
      pricing: "$350/person",
      rating: "4.9 ★",
      image: "https://media.cntraveler.com/photos/53da917d6dec627b149f394d/master/pass/bikiki-bootcamp-tulum.jpg"
    },
    { category: "Experience",
      title: "Art Class with Artists",
      type: "Art Class",
      details: "2 hours | 6 guests",
      pricing: "$50/person",
      rating: "4.5 ★",
      image: "https://theartofeducation.edu/wp-content/uploads/2022/08/Photo-2-2.jpg"
    },
    { 
      category: "Experience",
      title: "Pottery Wheel Workshop",
      type: "Art Class",
      details: "2 hours | 8 guests",
      pricing: "$60/person",
      rating: "4.8 ★",
      image: "https://146614107.cdn6.editmysite.com/uploads/1/4/6/6/146614107/s733036561681170573_p357_i2_w2410.jpeg?width=2400&optimize=medium"
    },
    { 
      category: "Experience",
      title: "Cultural Walking Tour",
      type: "Cultural Experience",
      details: "3 hours | 12 guests",
      pricing: "$45/person",
      rating: "4.6 ★",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/50/fc/02/caption.jpg?w=500&h=400&s=1"
    },
    { 
      category: "Experience",
      title: "Scuba Diving Lessons",
      type: "Adventure",
      details: "2 hours | 6 guests",
      pricing: "$120/person",
      rating: "4.9 ★",
      image: "https://assets.vogue.com/photos/65390ccce7e9af80e4cfc019/16:9/w_1280,c_limit/CLU05263.jpg"
    },
    { 
      category: "Experience",
      title: "Photography Workshop",
      type: "Workshop",
      details: "3 hours | 8 guests",
      pricing: "$60/person",
      rating: "4.7 ★",
      image: "https://www.imagesredefined.in/wp-content/uploads/2019/05/photography-workshop-blog.jpg"
    },
    { 
      category: "Experience",
      title: "Cooking Vegan Delights",
      type: "Cooking Class",
      details: "2 hours | 10 guests",
      pricing: "$65/person",
      rating: "4.8 ★",
      image: "https://png.pngtree.com/thumb_back/fw800/background/20220711/pngtree-vegan-delight-theprocess-of-cooking-stewed-vegetables-in-a-pan-photo-image_32668104.jpg"
    },
    { 
      category: "Experience",
      title: "Mountain Biking Tour",
      type: "Adventure",
      details: "5 hours | 10 guests",
      pricing: "$100/person",
      rating: "4.6 ★",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fysn0deDbpQzwBG_1JgPuubbvPfo556zMA&s"
    },
    // Online Experience
    { 
      category: "Online Experience",
      title: "Virtual Cooking with Mike",
      type: "Cooking Class",
      details: "1 hour",
      pricing: "$30/person",
      rating: "4.8 ★",
      image: "https://hips.hearstapps.com/hmg-prod/images/best-online-cooking-classes-1588014476.jpg?crop=1xw:1xh;center,top&resize=1200:*"
    },
    { 
      category: "Online Experience",
      title: "Live Painting Class",
      type: "Art Class",
      details: "1.5 hours",
      pricing: "$25/person",
      rating: "4.7 ★",
      image: "https://justpaintitblog.com/wp-content/uploads/2013/01/Birds-on-Branch-Painting-Class.jpg"
    },
    { 
      category: "Online Experience",
      title: "Virtual Yoga for Beginners", 
      type: "Yoga Class",
      details: "1 hour",
      pricing: "$20/person",
      rating: "4.9 ★",
      image: "https://cdn.magicdecor.in/com/2023/11/22171141/Lotus-Pose-Yoga-With-Mudra-Hand-Wallpaper-for-Wall-M-710x488.jpg"
    },
    { 
      category: "Online Experience",
      title: "Private Language Lesson",
      type: "Language Class",
      details: "1 hour",
      pricing: "$35/person",
      rating: "5.0 ★",
      image: "https://d2sj6gv6213dvd.cloudfront.net/files/School/69496/640x480/photo-2-2023-07-17-21-00-28.jpg"
    },
    { 
      category: "Online Experience",
      title: "Music Production Online",
      type: "Music Class",
      details: "2 hours",
      pricing: "$50/person",
      rating: "4.8 ★",
      image: "https://c1.wallpaperflare.com/preview/407/546/511/controls-amp-mixer-lights.jpg"
    },
    { 
      category: "Online Experience",
      title: "Nature Photography Walk",
      type: "Outdoor Activity",
      details: "4 hours | 10 guests",
      pricing: "$80/person",
      rating: "4.7 ★",
      image: "https://media.istockphoto.com/id/473954724/photo/a-footpath-through-a-forest-with-sunshine.jpg?s=612x612&w=0&k=20&c=8qwS_lHOZx-IlXf_uwjkye8B5OwLJHyJ_SgSx4ERcrc="
    },
    { 
      category: "Online Experience",
      title: "Virtual Travel Experience",
      type: "Virtual Tour",
      details: "2 hours",
      pricing: "$25/person",
      rating: "4.6 ★",
      image: "https://www.viar360.com/wp-content/uploads/2018/02/now-boarding-vr-travel-apps.jpg"
    },
    { 
      category: "Online Experience",
      title: "Online History Lesson",
      type: "History Class",
      details: "1 hour",
      pricing: "$30/person",
      rating: "4.9 ★",
      image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2020/11/best-homeschool-history-online-classes.jpg"
    },
    { 
      category: "Online Experience",
      title: "Online Cooking with Sofia",
      type: "Cooking Class",
      details: "1.5 hours",
      pricing: "$35/person",
      rating: "4.8 ★",
      image: "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?cs=srgb&dl=pexels-yente-van-eynde-1263034-2403392.jpg&fm=jpg"
    },
    { 
      category: "Online Experience",
      title: "Virtual Dance Class",
      type: "Dance Class",
      details: "1 hour",
      pricing: "$20/person",
      rating: "4.7 ★",
      image: "https://images.squarespace-cdn.com/content/v1/551eb398e4b0b101cf722ed8/b7aadac0-5e71-4912-810c-c10aa1607888/360_F_607587115_gptFro8QcCRGRSi7nc6X5Ll2ocHiKbrS.jpg"
    },
  ];

  // useEffect hook to filter the items whenever the 'listing' state changes
  useEffect(() => {
    if (listing) {
      // If there's a listing, filter the items based on the listing keyword
      const filtered = Items.filter(
        (item) =>
          item.title.toLowerCase().includes(listing.toLowerCase()) || // Filter by title
          item.category.toLowerCase().includes(listing.toLowerCase()) // Or filter by category
      );
      setFilteredItems(filtered); // Update the filtered items state
    } else {
      setFilteredItems(Items); // If no listing is selected, show all items
    }
  }, [listing]); // This effect runs every time the 'listing' state changes

  return (
    <div>
      <Navbar />                        {/* Navbar component */}
      <SearchBar />                     {/* SearchBar component */}
      <Categories />                    {/* Categories component */}
      <Listings data={filteredItems} /> {/* Listings component to display the filtered items */}
      <Footer />                        {/* Footer component */}
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application