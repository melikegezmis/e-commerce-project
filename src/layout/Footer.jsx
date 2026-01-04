import FooterInfo from "../components/Footer/FooterInfo";
import FooterLogo from "../components/Footer/FooterLogo";

function Footer(){

    return(
        <>
            <FooterLogo />
            <FooterInfo />

            <div className="flex justify-center items-center bg-gray-100 h-15 w-full">
                <div className="w-2/3">
                    <p className="flex flex-row justify-start text-gray-500 text-sm text-center font-bold sm:w-full w-50">Made With Love By Finland All Right Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer;