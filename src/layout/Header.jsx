import ContactInfo from "../components/Header/ContactInfo";
import HeaderBar from "../components/Header/HeaderBar";


function Header(){
    return(
        <div>
            <div className="hidden lg:block">
                <ContactInfo />
            </div>

            <HeaderBar />
        </div>
    );
}

export default Header;