import { useEffect, useState } from "react";
import axios from "axios";
import MobileCard from "../components/MobileCard";
import AddProductDialog from "../components/AddProductDialog";

const Home = () => {
  const [mobiles, setMobiles] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchMobiles = async () => {
    try {
      const response = await axios.get(
        "http://192.168.18.27:5001/api/v1/products/"
      );
      setMobiles(response.data.products);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching mobile phones", error);
    }
  };

  useEffect(() => {
    fetchMobiles();
  }, []);

  const handleAddProduct = (product) => {
    // Assuming you have a function to handle adding the product to the backend
    // You would call fetchMobiles here to refresh the product list after adding a new product
    axios
      .post("http://localhost:5001/api/v1/products/", product)
      .then(() => {
        fetchMobiles(); // Refresh the product list
      })
      .catch((error) => {
        console.error("Error adding product", error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-500">Mobile Shop</h1>
        <AddProductDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onAddProduct={handleAddProduct}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
        {mobiles &&
          mobiles.map((mobile) => (
            <MobileCard key={mobile._id} mobile={mobile} />
          ))}
      </div>
    </div>
  );
};

export default Home;
