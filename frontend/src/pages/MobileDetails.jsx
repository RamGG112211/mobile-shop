import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const MobileDetails = () => {
  const { id } = useParams();
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const fetchMobile = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/v1/products/${id}`);
        setMobile(response.data);
      } catch (error) {
        console.error("Error fetching mobile details", error);
      }
    };

    fetchMobile();
  }, [id]);

  if (!mobile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">
        Back to Home
      </Link>
      <div className="flex flex-col items-center">
        <img
          src={mobile.image}
          alt={mobile.name}
          className="w-full max-w-sm object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{mobile.name}</h1>
        <p className="text-gray-700 mt-2">${mobile.price}</p>
        <p className="text-gray-600 mt-4">{mobile.fullDescription}</p>
      </div>
    </div>
  );
};

export default MobileDetails;
