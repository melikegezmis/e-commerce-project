import { useState } from "react";

function FooterInfo(){
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
        alert("Please enter an email address");
        return;
        }

        console.log("Email:", email);
        setEmail("");
    };

    return(
        <div className="flex justify-center items-center w-full lg:h-60 h-220">
            <div className="flex lg:flex-row flex-col lg:gap-2 gap-5 w-2/3 justify-start lg:pl-1">

                <div className="flex flex-col gap-2 w-40">
                    <p className="font-bold text-md mb-2">Company Info</p>
                    <nav className="flex flex-col font-semibold text-sm text-gray-500 gap-2">
                        <a>About Us</a>
                        <a>Carrier</a>
                        <a>We are hiring</a>
                        <a>Blog</a>
                    </nav>
                </div>

                <div className="flex flex-col gap-2 w-40">
                    <p className="font-bold text-md mb-2">Legal</p>
                    <nav className="flex flex-col font-semibold text-sm text-gray-500 gap-2">
                        <a>About Us</a>
                        <a>Carrier</a>
                        <a>We are hiring</a>
                        <a>Blog</a>
                    </nav>
                </div>

                <div className="flex flex-col gap-2 w-40">
                    <p className="font-bold text-md mb-2">Features</p>
                    <nav className="flex flex-col font-semibold text-sm text-gray-500 gap-2">
                        <a>business Marketing</a>
                        <a>User Analytic</a>
                        <a>Live Chat</a>
                        <a>Unlimited Support</a>
                    </nav>
                </div>

                <div className="flex flex-col gap-2 w-40">
                    <p className="font-bold text-md mb-2">Reasources</p>
                    <nav className="flex flex-col font-semibold text-sm text-gray-500 gap-2">
                        <a>IOS & Android</a>
                        <a>Watch a Demo</a>
                        <a>Customers</a>
                        <a>API</a>
                    </nav>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-bold text-md mb-2">Get In Touch</p>
                    
                     <form
                        onSubmit={handleSubmit}
                        className="flex sm:w-70 w-50 items-center"
                        >
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="sm:flex-1 w-42 sm:w-55 sm:px-4 px-2 py-3 border border-gray-300 rounded-l-md outline-none focus:border-blue-500 bg-gray-100"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white sm:px-6 px-2 py-3 rounded-r-md transition"
                        >
                            Subscribe
                        </button>
                        </form>

                        <p className="text-gray-500 text-xs font-semibold">Lore imp sum dolor Amit</p>
                    
                </div>


            </div>
        </div>
    )
}

export default FooterInfo;