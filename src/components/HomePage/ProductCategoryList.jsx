import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import data from "../../axios/AxiosData";

function ProductCategoryList() {
    const [products, setProducts] = useState(null);

    const history = useHistory();

    useEffect(() => {
        setProducts(Object.values(data.home.productCategoryList));
    }, []);

    return (
        <div className="flex flex-col items-center md:h-410 lg:h-330 h-1220">
            <h4 className="mb-3 mt-15 text-lg text-gray-500 font-semibold">Featured Products</h4>
            <h2 className="mb-2 sm:w-full w-32 text-center text-2xl font-bold">BESTSELLER PRODUCTS</h2>
            <p className="mb-15 sm:w-full w-50 text-center text-sm text-gray-500 font-semibold">Problems trying to resolve the conflict between</p>
            <div className="flex md:flex-row flex-col flex-wrap justify-center max-w-5xl gap-4 md:space-y-15">
                {products &&
                    products.map((product, i) => (
                    <div key={i} className="flex flex-col items-center bg-white h-140 md:h-100 lg:h-120">
                        <img
                        src={product.imgUrl}
                        className="md:w-53 w-80 h-95 object-cover"
                        />

                        <p className="mt-5 text-sm font-bold">{product.name}</p>

                        <p className="my-3  text-sm font-semibold text-gray-500">{product.department}</p>

                        <p className="text-gray-400">
                        {product.oldPrice}
                        <span className="ml-2 text-green-600 font-bold">
                            {product.currentPrice}
                        </span>
                        </p>

                        <div className="flex gap-1 mt-3">
                        {product.colors.map((color, j) => (
                            <div
                            key={j}
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color }}
                            />
                        ))}
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    );
}


export default ProductCategoryList;