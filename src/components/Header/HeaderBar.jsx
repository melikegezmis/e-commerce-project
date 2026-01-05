import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ChevronDown, UserRound, Search, ShoppingCart, Heart, TextAlignEnd } from 'lucide-react';
import ShopNavBar from "./ShopNavBar";


function HeaderBar(){

    const [buttons, setButtons] = useState([["About", "/"], ["Blog", "/"],
         ["Contact", "/"], ["Pages","/"]]);
    const [openShopBar, setOpenShopBar] = useState(false);
    const [openLine, setOpenLine] = useState(false);

    const history = useHistory();

    return(
        <div className={`flex lg:flex-row flex-col lg:h-20 ${openLine ? "sm:h-50  h-100" : "sm:h-25 h-25"}
            ${openShopBar && openLine ? "sm:h-50  h-155" : "sm:h-25 h-25"} items-center`}>
            <div className="flex flex-row justify-between items-center w-screen lg:px-10 px-10 mt-7 lg:mt-0">
                <div className="flex flex-row justify-between lg:space-x-25 space-x-5">
                    <h1 className="text-2xl lg:text-3xl font-bold">Bandage</h1>

                    <div className="hidden lg:flex flex-row items-center space-x-5">
                        <button onClick={() => history.push("/")}>
                            Home
                        </button>
                    
                    <div className="relative hidden lg:flex">
                        <button className="flex flex-row"
                            onClick={() => setOpenShopBar(!openShopBar)}>
                        Shop {<ChevronDown 
                            className={`transition ${openShopBar ? "rotate-180" : ""}`}/>}
                        </button>

                        {openShopBar && (
                            <ShopNavBar />
                        )}
                    </div>


                    
                    {buttons.map((b, i) => {
                        return (
                        <div key={i} className="hidden lg:flex">
                            <button onClick={() => history.push(b[1])}>
                                {b[0]}
                            </button>
                        </div>)
                    })}
                    </div>
                </div>

                <div className="text-blue-500 flex flex-row md:space-x-5 space-x-2">
                    <div className="flex flex-row lg:space-x-1 items-center">
                        <UserRound />
                        <button onClick={() => history.push("/")}>
                            <span className="hidden lg:block">
                                Login / Register
                            </span>
                        </button>
                    </div>

                    <div className="flex flex-row lg:space-x-5 md:space-x-2 gap-3 relative">
                        <button onClick={() => history.push("/")}><Search /></button>

                        <button className="flex flex-row"
                            onClick={() => history.push("/")}>
                            <ShoppingCart />
                            <p className="hidden lg:block">1</p>
                        </button>

                        <button className="hidden lg:flex flex-row"
                            onClick={() => history.push("/")}>
                            <Heart />
                            <p>2</p>
                        </button>

                        <button className="flex lg:hidden"
                            onClick={() => setOpenLine(!openLine)}>
                            <TextAlignEnd />
                        </button>

                        
                    </div>
                </div>
            </div>

            {openLine && (<div className="flex sm:flex-row flex-col items-center lg:hidden px-10 mt-7 
                 text-2xl text-gray-500 font-semibold py-10">
                    <button onClick={() => history.push("/")} className="m-3 sm:mx-7">
                        Home
                    </button>
                    <button onClick={() => setOpenShopBar(!openShopBar)} 
                        className={`m-3 sm:mx-7 ${openShopBar ? "sm:mb-3 mb-65" : "mb-3"}`}>
                        Product
                    </button>
                    
                    {openShopBar && (
                            <div className="flex lg:hidden">
                                <ShopNavBar />
                            </div>
                    )}

                    <button onClick={() => history.push("/")} className="m-3 sm:mx-7">
                        Pricing
                    </button>
                    <button onClick={() => history.push("/")} className="m-3 sm:mx-7">
                        Contact
                    </button>
                </div>)}
        </div>
    )
}

export default HeaderBar;