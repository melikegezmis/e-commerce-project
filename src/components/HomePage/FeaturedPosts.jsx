import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import data from "../../axios/AxiosData";
import { AlarmClock, ChartNoAxesCombined, ChevronRight } from 'lucide-react';

function FeaturedPosts(){
    const [posts, setPosts] = useState(null);

     const history = useHistory();

    useEffect(() => {
        setPosts(Object.values(data.home.featuredPosts));
    }, []);

    return(
        <div className="flex flex-col justify-center items-center lg:h-210 h-520 w-full">
            <div className="flex flex-col justify-center items-center">

                <h5 className="text-sky-500 font-semibold text-md mt-5">Practice Advice</h5>
                <h2 className="font-bold text-4xl my-2">Featured Posts</h2>
                <p className="md:w-md w-70 mb-5 mt-2 text-center text-sm text-gray-500 font-semibold">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                
                <div className="flex lg:flex-row flex-col items-center gap-5 mt-10">
                    {posts && (posts.map((post) => 
                        (<div key={post.id} className="shadow-md relative">
                            <img src={post.img_url} className="w-80 h-70 object-cover"/>

                            <p className="absolute z-10 inset-0 ml-4 mt-4 text-sm text-center
                                 text-white font-semibold bg-red-500 w-14 h-6 pt-0.5 rounded-sm">
                                    NEW
                            </p>

                            <div className="flex flex-col p-4">
                                <div className="flex flex-row gap-3 text-xs text-gray-500 font-semibold my-2">
                                    <p className="text-sky-500">Google</p>
                                    <p>Trending</p>
                                    <p>New</p>
                                </div>

                                <h5 className="text-lg font-semibold w-50">{post.title}</h5>

                                <p className="text-sm text-gray-500 font-semibold w-65 my-2">{post.paragraph}</p>

                                <div className="flex flex-row justify-between text-xs font-semibold text-gray-500 my-4">
                                    <p className="flex flex-row items-center">
                                        <AlarmClock className="w-4 mr-1 text-sky-500"/> 
                                        {post.date}
                                    </p>

                                    <p className="flex flex-row items-center">
                                        <ChartNoAxesCombined className="w-4 mr-1 text-green-700"/>
                                        {post.commentCount} comments
                                        </p>
                                </div>

                                <button className="flex self-start text-sm font-bold text-gray-500">
                                    Learn More 
                                    <ChevronRight className="w-7 text-sky-500"/>
                                    </button>
                            </div>
                        </div>)
                    ))}
                </div>
            </div>
        </div>
    )

}

export default FeaturedPosts;