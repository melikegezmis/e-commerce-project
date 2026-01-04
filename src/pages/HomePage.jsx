import HeroSlider from "../components/HomePage/HeroSlider";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CategoryPick from "../components/HomePage/CategoryPick";
import ProductCategoryList from "../components/HomePage/ProductCategoryList";
import Slider from "../components/HomePage/Slider";
import ReadMorePart from "../components/HomePage/ReadMorePart";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";

function HomePage(){
    return(
        <div>
            <Header />
            <HeroSlider />
            <CategoryPick />
            <ProductCategoryList />
            <Slider />
            <ReadMorePart />
            <FeaturedPosts />
            <Footer />
        </div>
    )
}

export default HomePage;