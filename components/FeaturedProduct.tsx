import Image from "next/image";

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
};

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products.length) {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-500 mt-2">No products available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="py-16 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1C2E56]">Featured Products</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Discover our most popular high-quality products designed for professional industrial applications.
          </p>
        </div>

        {/* Product list */}
        <div
          className={`${
            products.length >= 4
              ? "flex gap-6 overflow-x-auto scrollbar-thin pb-4"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          }`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-card bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition 
                ${products.length >= 4 ? "min-w-[320px] max-w-[320px] flex-shrink-0" : ""}`}
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 line-clamp-2">{product.title}</h3>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill={i < product.rating ? "#FBBF24" : "#E5E7EB"}
                      className="w-4 h-4"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.179c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.05 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>

                <p className="mt-3 text-lg font-bold text-blue-800">
                  ${product.price.toFixed(2)}
                </p>

                <button className="mt-4 w-full bg-blue-800 text-white text-sm font-medium py-2 rounded hover:bg-blue-900 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
    
          <div className="flex justify-center mt-12">
            <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition">
              View All Products
            </button>
          </div>
        
      </div>
    </section>
  );
}
