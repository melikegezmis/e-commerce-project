import { Link } from "react-router-dom";

function ShopNavBar() {
  return (
    <div className="absolute left-0 top-full mt-4 bg-white z-50 shadow-lg">
      <div
        className="
          grid grid-cols-1 lg:grid-cols-2 gap-6
          w-[30vw] max-w-4xl
          px-6 py-5
        "
      >
        <div>
          <h3 className="font-semibold mb-4">Women</h3>

          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Clothes
          </Link>
          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Belts
          </Link>
          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Cosmetics
          </Link>
          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Bags
          </Link>
          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Hats
          </Link>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Men</h3>

          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Clothes
          </Link>
          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Belts
          </Link>
          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Cosmetics
          </Link>
          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Bags
          </Link>
          <Link to="/shop" className="block py-2 hover:text-blue-500">
            Hats
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopNavBar;

