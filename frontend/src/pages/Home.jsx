import { useEffect, useState } from "react";
import MobileCard from "../components/MobileCard";

const mobilePhones = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1690705229380-a32a8eb5017d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDescription: "The ultimate iPhone experience with A16 Bionic.",
    fullDescription:
      "Experience the power of A16 Bionic, the best battery life in an iPhone, and an innovative Pro camera system.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1707438095940-1eee18e85400?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDescription: "The new era of mobile photography with 108MP camera.",
    fullDescription:
      "Capture the night with Nightography on the 108MP sensor, and enjoy an immersive experience with the Dynamic AMOLED display.",
  },
  {
    id: 3,
    name: "Google Pixel 7 Pro",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1657797066015-311cb505b009?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDescription:
      "Pure Android experience with Google's AI and camera magic.",
    fullDescription:
      "Pixel 7 Pro offers stunning photography capabilities, AI-powered features, and the cleanest Android experience.",
  },
  {
    id: 4,
    name: "OnePlus 11",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1637088587775-d8ca5fb1bc38?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDescription: "Fast and smooth performance with a sleek design.",
    fullDescription:
      "OnePlus 11 offers top-tier performance, a beautiful AMOLED display, and a user-friendly OxygenOS experience.",
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    price: 899,
    image:
      "https://images.pexels.com/photos/18525573/pexels-photo-18525573/free-photo-of-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription:
      "High-end specs and innovative features at a competitive price.",
    fullDescription:
      "Xiaomi 13 Pro brings flagship-level specs, a versatile camera system, and a high-quality build at an attractive price point.",
  },
  {
    id: 6,
    name: "Sony Xperia 1 IV",
    price: 1299,
    image:
      "https://images.pexels.com/photos/2591485/pexels-photo-2591485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription:
      "A multimedia powerhouse with a 4K display and pro-grade cameras.",
    fullDescription:
      "Sony Xperia 1 IV is built for content creators, offering a stunning 4K OLED display, advanced camera features, and powerful performance.",
  },
  {
    id: 7,
    name: "Oppo Find X5 Pro",
    price: 999,
    image:
      "https://images.pexels.com/photos/21424626/pexels-photo-21424626/free-photo-of-product-shot-of-a-smartphone-oppo-f25-pro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription:
      "Premium design and performance with Hasselblad camera partnership.",
    fullDescription:
      "Oppo Find X5 Pro offers a luxurious design, fast performance, and exceptional camera capabilities, thanks to its Hasselblad collaboration.",
  },
  {
    id: 8,
    name: "Asus ROG Phone 6",
    price: 899,
    image:
      "https://images.pexels.com/photos/225232/pexels-photo-225232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription: "The ultimate gaming phone with top-tier specs.",
    fullDescription:
      "Asus ROG Phone 6 is designed for gamers, with a powerful Snapdragon processor, a high-refresh-rate display, and advanced cooling technology.",
  },
];

const Home = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    setMobiles(mobilePhones);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">
        Mobile Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
        {mobiles.map((mobile) => (
          <MobileCard key={mobile.id} mobile={mobile} />
        ))}
      </div>
    </div>
  );
};

export default Home;
