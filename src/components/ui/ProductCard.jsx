// components/ProductCard.jsx
import Image from 'next/image'; // You can still use this if you want to optimize images

const ProductCard = ({ data }) => {
  const { image, title, description } = data; // Destructure properties from the data object

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
      <div className="relative h-40 w-full">
        <img
          src={image}
          alt={title} // Add alt text for accessibility
          className="object-cover w-full h-full"
          width={256} // Specify width for better control
          height={256} // Specify height for better control
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
