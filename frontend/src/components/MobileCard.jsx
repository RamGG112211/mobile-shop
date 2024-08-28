/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MobileCard = ({ mobile }) => {
  return (
    <div className="mobile-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className=" overflow-hidden">
        <img
          src={mobile.image}
          alt={mobile.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-2">
        <h3 className="lg:text-lg font-bold">{mobile.name}</h3>
        <p className="mt-2 font-bold text-blue-500 text-2xl">${mobile.price}</p>
        <p className="text-gray-600 mt-2 line-clamp-2">{mobile.shortDescription}</p>
        <Link
          to={`/mobile/${mobile.id}`}
          className="text-blue-500 mt-4 block border border-blue-500 w-fit p-2 rounded-md px-4 hover:bg-blue-500 hover:text-white duration-200 transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MobileCard;
