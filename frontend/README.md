# Mobile Shop Application

This project is a React.js application for a mobile shop, showcasing various mobile phone models with their details. The application includes a homepage that displays a list of mobile phones and a detailed page for each mobile phone.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [MobileCard](#mobilecard-component)
- [Pages](#pages)
  - [Home](#home-page)
  - [MobileDetails](#mobiledetails-page)
- [ESLint Configuration](#eslint-configuration)

## Features

- Displays a list of mobile phones.
- Responsive design with different grid layouts for various screen sizes.
- Detailed view for each mobile phone with an option to go back to the homepage.
- Styled using Tailwind CSS for a modern and responsive UI.

## Technologies Used

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **ESLint**

## Installation

1.  Create React project with Vite:

```bash
    npm create vite@latest my-react-app
```

2.  Install dependencies:

```bash
    npm install
```

3.  Run the application:

```bash
    npm run dev
```

4.  Folder Structure

```bash
    ├── public
    │ └── index.html
    ├── src
    │ ├── components
    │ │ └── MobileCard.js
    │ ├── pages
    │ │ ├── Home.js
    │ │ └── MobileDetails.js
    │ ├── App.js
    │ ├── index.js
    │ └── styles.css
    ├── .eslintrc.js
    └── package.json

```

- components/MobileCard.js: A component to display individual mobile phone details in a card format.

- pages/Home.js: The homepage where all mobile phones are displayed in a grid.

- pages/MobileDetails.js: A detailed page for each mobile phone, accessible by clicking the "View Details" button.

# MobileCard component

```bash
    /* eslint-disable react/prop-types */
    import { Link } from "react-router-dom";

    const MobileCard = ({ mobile }) => {
    return (
        <div className="mobile-card p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="overflow-hidden">
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

```

# update button component

```bash
    import React from "react";
    import { AiTwotoneEdit } from "react-icons/ai";

    export default function UpdateButton({onClick ,className}:{onClick:()=>void, className?:string}) {
    return (
        <button
        className={`p-2 bg-green-400/10 border-green-400/10 dark:border-yoga-yoga/10 text-green-400 rounded hover:bg-green-400/20 border hover:border-green-400/50 transition-all duration-400 ${className}`}
        onClick={onClick}
        >
        <AiTwotoneEdit size={18} />
        </button>
    );
    }


```

# delete button component

```bash
    import { Trash2 } from "lucide-react";
    import React from "react";

    export default function DeleteButton({ onClick, className }: { onClick?: () => void, className?:string }) {
    return (
        <button
        className={` p-2 bg-red-400/10 border-red-400/10 text-red-400 rounded hover:bg-red-400/20 border hover:border-red-400/50 transition-all duration-400 ${className}`}
        onClick={onClick}
        >
        <Trash2 size={16} />
        </button>
    );
    }

```

# Home component (page)

```bash
        import { useEffect, useState } from "react";
        import MobileCard from "../components/MobileCard";

        const mobilePhones = [
        {
            id: 1,
            name: "iPhone 13",
            price: 999,
            image: "https://example.com/iphone13.jpg",
            shortDescription: "The latest iPhone with A15 Bionic chip.",
            fullDescription: "The iPhone 13 is the latest smartphone from Apple featuring the A15 Bionic chip, a brighter display, and improved battery life. It comes in various colors and storage options."
        },
        {
            id: 2,
            name: "Samsung Galaxy S21",
            price: 799,
            image: "https://example.com/galaxys21.jpg",
            shortDescription: "The new Samsung Galaxy with Exynos 2100.",
            fullDescription: "The Samsung Galaxy S21 offers top-of-the-line features with its Exynos 2100 processor, 120Hz AMOLED display, and a versatile triple-camera setup. Available in multiple colors and storage configurations."
        },
        {
            id: 3,
            name: "Google Pixel 6",
            price: 699,
            image: "https://example.com/pixel6.jpg",
            shortDescription: "Google's flagship phone with Tensor chip.",
            fullDescription: "The Google Pixel 6 is powered by Google's own Tensor chip, offering exceptional AI and machine learning capabilities. It features a 50MP main camera and a 6.4-inch OLED display."
        },
        {
            id: 4,
            name: "OnePlus 9 Pro",
            price: 969,
            image: "https://example.com/oneplus9pro.jpg",
            shortDescription: "OnePlus with Snapdragon 888 and Hasselblad camera.",
            fullDescription: "The OnePlus 9 Pro is a high-end smartphone featuring the Snapdragon 888 chipset, a Fluid AMOLED display, and a camera system co-developed with Hasselblad. It provides fast charging and a smooth user experience."
        }
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

```

# MobileDetails component (page)

```bash
    import { useParams, Link } from "react-router-dom";

    const mobilePhones = [
    {
        id: 1,
        name: "iPhone 13",
        price: 999,
        image: "https://example.com/iphone13.jpg",
        shortDescription: "The latest iPhone with A15 Bionic chip.",
        fullDescription: "The iPhone 13 is the latest smartphone from Apple featuring the A15 Bionic chip, a brighter display, and improved battery life. It comes in various colors and storage options."
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 799,
        image: "https://example.com/galaxys21.jpg",
        shortDescription: "The new Samsung Galaxy with Exynos 2100.",
        fullDescription: "The Samsung Galaxy S21 offers top-of-the-line features with its Exynos 2100 processor, 120Hz AMOLED display, and a versatile triple-camera setup. Available in multiple colors and storage configurations."
    },
    {
        id: 3,
        name: "Google Pixel 6",
        price: 699,
        image: "https://example.com/pixel6.jpg",
        shortDescription: "Google's flagship phone with Tensor chip.",
        fullDescription: "The Google Pixel 6 is powered by Google's own Tensor chip, offering exceptional AI and machine learning capabilities. It features a 50MP main camera and a 6.4-inch OLED display."
    },
    {
        id: 4,
        name: "OnePlus 9 Pro",
        price: 969,
        image: "https://example.com/oneplus9pro.jpg",
        shortDescription: "OnePlus with Snapdragon 888 and Hasselblad camera.",
        fullDescription: "The OnePlus 9 Pro is a high-end smartphone featuring the Snapdragon 888 chipset, a Fluid AMOLED display, and a camera system co-developed with Hasselblad. It provides fast charging and a smooth user experience."
    }
    ];

    const MobileDetails = () => {
    const { id } = useParams();
    const mobile = mobilePhones.find((m) => m.id === parseInt(id));

    if (!mobile) {
        return <p>Mobile not found.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">
            {mobile.name}
        </h1>
        <div className="flex flex-col items-center">
            <img
            src={mobile.image}
            alt={mobile.name}
            className="w-64 h-64 object-cover rounded-lg"
            />
            <p className="mt-4 text-xl font-bold text-blue-500">${mobile.price}</p>
            <p className="mt-2 text-gray-600">{mobile.fullDescription}</p>
            <Link
            to="/"
            className="text-blue-500 mt-4 block border border-blue-500 w-fit p-2 rounded-md px-4 hover:bg-blue-500 hover:text-white duration-200 transition-all"
            >
            Back to Home
            </Link>
        </div>
        </div>
    );
    };

    export default MobileDetails;
```

# Add product dialog component

```bash
    import React, { useState } from "react";
    import Dialog from "@mui/material/Dialog";
    import { RxCross2 } from "react-icons/rx";
    import Slide from "@mui/material/Slide";
    import Button from "@mui/material/Button";
    import axios from "axios"; // If you prefer axios

    const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    });

    const AddProductModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        image: "",
        shortDescription: "",
        fullDescription: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
        ...product,
        [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        console.log(product);
        e.preventDefault();
        try {
        const response = await axios.post(
            "http://192.168.100.11:5001/api/v1/products/new",
            product,
            {
            headers: {
                "Content-Type": "application/json",
            },
            }
        );
        console.log(response.data); // Handle the response data as needed
        setIsOpenModal(false);
        setProduct({
            name: "",
            price: "",
            image: "",
            shortDescription: "",
            fullDescription: "",
        });
        } catch (error) {
        console.error("There was an error posting the product!", error);
        }
    };

    return (
        <div>
        <Button className="" onClick={() => setIsOpenModal(true)}>
            Add New Product
        </Button>
        <Dialog
            open={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            TransitionComponent={Transition}
            maxWidth="sm"
            fullWidth
        >
            <div
            className="absolute top-3 right-[2rem] text-2xl cursor-pointer"
            onClick={() => setIsOpenModal(false)}
            >
            <RxCross2 />
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-medium mb-2">Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={product.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="mb-4">
                <input
                    type="number"
                    name="price"
                    placeholder="Price*"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="mb-4">
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL*"
                    value={product.image}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="mb-4">
                <textarea
                    name="shortDescription"
                    placeholder="Short Description*"
                    value={product.shortDescription}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="mb-4">
                <textarea
                    name="fullDescription"
                    placeholder="Full Description*"
                    value={product.fullDescription}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="flex justify-end">
                <Button type="submit" variant="contained" color="primary">
                    Add Product
                </Button>
                <Button
                    onClick={() => setIsOpenModal(false)}
                    variant="outlined"
                    color="secondary"
                    className="ml-2"
                >
                    Cancel
                </Button>
                </div>
            </form>
            </div>
        </Dialog>
        </div>
    );
    };

    export default AddProductModal;


```

# Updated Home component after api integration (page)

```bash
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
            "http://192.168.100.11:5001/api/v1/products/"
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
        .post("http://192.168.100.11:5001/api/v1/products/", product)
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

```

# Update Product Dialog component

```bash
   /* eslint-disable react/prop-types */
    import React, { useState } from "react";
    import Dialog from "@mui/material/Dialog";
    import { RxCross2 } from "react-icons/rx";
    import Slide from "@mui/material/Slide";
    import Button from "@mui/material/Button";
    import axios from "axios"; // If you prefer axios
    import UpdateButton from "./updateButton";

    const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    });

    const UpdateProductModal = ({ mobile }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [product, setProduct] = useState({
        name: mobile.name,
        price: mobile.price,
        image: mobile.image,
        shortDescription: mobile.shortDescription,
        fullDescription: mobile.fullDescription,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
        ...product,
        [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        console.log(product);
        e.preventDefault();
        try {
        const response = await axios.put(
            `http://192.168.100.11:5001/api/v1/products/${mobile._id}`,
            product,
            {
            headers: {
                "Content-Type": "application/json",
            },
            }
        );
        console.log(response.data); // Handle the response data as needed
        setIsOpenModal(false);
        setProduct({
            name: "",
            price: "",
            image: "",
            shortDescription: "",
            fullDescription: "",
        });
        } catch (error) {
        console.error("There was an error posting the product!", error);
        }
    };

    return (
        <div>
        <UpdateButton onClick={() => setIsOpenModal(true)} />
        <Dialog
            open={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            TransitionComponent={Transition}
            maxWidth="sm"
            fullWidth
        >
            <div
            className="absolute top-3 right-[2rem] text-2xl cursor-pointer"
            onClick={() => setIsOpenModal(false)}
            >
            <RxCross2 />
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-medium mb-2">Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={product.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="mb-4">
                <input
                    type="number"
                    name="price"
                    placeholder="Price*"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="mb-4">
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL*"
                    value={product.image}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="mb-4">
                <textarea
                    name="shortDescription"
                    placeholder="Short Description*"
                    value={product.shortDescription}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="mb-4">
                <textarea
                    name="fullDescription"
                    placeholder="Full Description*"
                    value={product.fullDescription}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                </div>
                <div className="flex justify-end">
                <Button type="submit" variant="contained" color="primary">
                    Update Product
                </Button>
                <Button
                    onClick={() => setIsOpenModal(false)}
                    variant="outlined"
                    color="secondary"
                    className="ml-2"
                >
                    Cancel
                </Button>
                </div>
            </form>
            </div>
        </Dialog>
        </div>
    );
    };

    export default UpdateProductModal;


```

# Updated mobile card component

```bash
    /* eslint-disable react/prop-types */
    import { Link } from "react-router-dom";
    import DeleteButton from "./deleteButton";
    import axios from "axios";
    import UpdateProductModal from "./UpdateProductDialog";

    const MobileCard = ({ mobile }) => {
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.delete(
            `http://192.168.100.11:5001/api/v1/products/${mobile._id}`
        );
        console.log(response.data); // Handle the response data as needed
        } catch (error) {
        console.error("There was an error posting the product!", error);
        }
    };
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
            <p className="text-gray-600 mt-2 line-clamp-2">
            {mobile.shortDescription}
            </p>

            <div className=" flex items-center justify-between">
            <Link
                to={`/mobile/${mobile._id}`}
                className="text-blue-500 mt-4 block border border-blue-500 w-fit p-2 rounded-md px-4 hover:bg-blue-500 hover:text-white duration-200 transition-all"
            >
                View Details
            </Link>

            <div className=" flex items-center gap-2">
                <UpdateProductModal mobile={mobile} />
                <DeleteButton onClick={handleDelete} />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default MobileCard;

```
