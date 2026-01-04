import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import data from "../../axios/AxiosData";

function ReadMorePart(){
 const [image, setImage] = useState([]);

  const history = useHistory();

  useEffect(() => {
   setImage(data.home.readMorePart.photo);
  }, []);

    return(
        <div className="flex md:flex-row flex-col-reverse md:justify-center h-auto gap-10">
            <div className="flex justify-center items-center">
                <img src={image.img_url} className="md:h-auto md:w-150 w-auto"/>
            </div>
            <div className="flex flex-col items-center justify-center p-10">
                <div className="flex flex-col gap-6 sm:w-105 w-70 justify-center md:text-left text-center">
                    <h4 className="text-2xl text-gray-400 font-semibold">{image.collection}</h4>
                    <h2 className="text-5xl font-bold">{image.title}</h2>
                    <p className="text-lg text-gray-500">{image.paragraph}</p>

                    <div className="flex md:flex-row flex-col gap-2 items-center">
                        <button className="px-5 py-3 sm:w-35 w-45 sm:bg-green-400 bg-blue-500 text-sm font-semibold text-white rounded-sm">
                            BUY NOW
                        </button>

                        <button className="px-5 py-3 sm:w-35 w-45 border-2 sm:border-green-400 border-blue-500 text-sm font-semibold sm:text-green-400 text-blue-500 rounded-sm">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadMorePart; 