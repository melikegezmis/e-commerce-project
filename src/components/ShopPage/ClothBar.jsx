import { ChevronRight } from "lucide-react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../axios/AxiosData";


function ClothBar(){
    const [photos, setPhotos] = useState();

    useEffect(() => {
        setPhotos(Object.values(data.shopPage.clothBar));
    }, []);


    const history = useHistory();
    return (
        <div className="flex md:flex-row flex-col justify-center md:items-start w-full md:h-90 h-420 bg-gray-100">
            <div className="flex flex-col justify-start items-center w-full">
                <div className="flex md:flex-row flex-col items-center justify-between w-2/3 my-10 gap-10">
                    <h3 className="text-2xl font-bold ml-2">Shop</h3>

                    <div className="flex flex-row items-center">
                        <button onClick={() => history.push("/")} className="cursor-pointer">Home</button>
                        <p className="flex flex-row text-gray-500"><ChevronRight /> Shop</p>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-4">
                    {photos && photos.map((photo, i) => (
                        <div
                        key={i}
                        className="relative md:w-32 lg:w-47 w-full md:h-32 lg:h-47 h-70 overflow-hidden group"
                        >

                            <img
                                src={photo.imgUrl}
                                alt=""
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/60" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-2">
                                <p className="text-white text-lg font-semibold">
                                    {photo.categoryName}
                                </p>

                                <p className="text-white text-sm font-semibold">
                                    {photo.itemCount} items
                                </p>
                            </div>
                        </div>
                    ))}
                    </div>

            </div>
        </div>
    );
}

export default ClothBar;