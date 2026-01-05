import { Link } from "react-router-dom";

function ShopNavBar() {
  return (
    <div className="absolute lg:left-0 sm:left-2/7 left-0 lg:top-full sm:top-3/12 top-55 mt-4 bg-white z-10 shadow-md">
      <div
        className="
          flex flex-col flex-wrap gap-6
          sm:w-[30vw] w-screen sm:max-w-4xl
          px-6 py-5
          h-60
        "
      >
        <div>
          <h3 className="font-semibold mb-4 text-sm text-black">Women</h3>

          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Clothes
          </Link>
          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Belts
          </Link>
          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Cosmetics
          </Link>
          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Bags
          </Link>
          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Hats
          </Link>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-sm text-black">Men</h3>

          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Clothes
          </Link>
          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Belts
          </Link>
          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Cosmetics
          </Link>
          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Bags
          </Link>
          <Link to="/shop" className="text-sm block py-2 hover:text-blue-500">
            Hats
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopNavBar;

