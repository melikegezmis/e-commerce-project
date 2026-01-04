import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import data from "../../axios/AxiosData";

function CategoryPick(){

    const [images, setImages] = useState(null);

    const history = useHistory();

    useEffect(() => {
        setImages(data.home.categoryPickPhotos);
    }, []);


    return(
        <div className="flex flex-col items-center justify-center sm:h-screen h-400 bg-gray-100">
            <div className="text-center space-y-4">
                <h3 className="font-bold text-2xl">EDITOR'S PICK</h3>
                <p className="text-gray-500">Problems trying to resolve the conflict between</p>

                {images && (
                    <nav className="flex sm:flex-row flex-col justify-center items-center gap-4 max-w-4xl mt-15">
                        <button onClick={() => history.push("/")} className="relative">
                            <img src={images.photo1.imgUrl} className="object-cover sm:w-90 md:w-140 h-110 w-80"/>
                            <p className="absolute bottom-4 left-4 bg-white px-15 py-2 text-md font-bold z-10">MEN</p>
                        </button>

                        <button onClick={() => history.push("/")} className="relative">
                            <img src={images.photo2.imgUrl} className="object-cover sm:w-70 md:w-95 h-110 w-80"/>
                            <p className="absolute bottom-4 left-4 bg-white px-10 py-2 text-md font-bold z-10">WOMEN</p>
                        </button>

                        <div>
                            <button onClick={() => history.push("/")} className="relative">
                                <img src={images.photo3.imgUrl} className="object-cover sm:w-40 md:w-64 h-53 w-80 mb-4 "/>
                                <p className="absolute bottom-4 bg-white ml-3 sm:px-2 md:px-7 py-2 text-md font-bold z-10">ACCESORIES</p>
                            </button>

                            <button onClick={() => history.push("/")} className="relative">
                                <img src={images.photo4.imgUrl} className="object-cover sm:w-40 md:w-64 w-80 h-53"/>
                                <p className="absolute bottom-4 bg-white ml-3 px-7 py-2 text-md font-bold z-10">KIDS</p>
                            </button>
                        </div>

                    </nav>
                )}
            </div>
        </div>
    )
}

export default CategoryPick;