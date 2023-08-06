import "slick-carousel/slick/slick-theme.css";
import chair2 from '../../../assets/images/chair2.png'
import TopCategoriesCard from "../TopCategoriesCard";
import Slider from "react-slick";
import topCategories from "../../../data/topCategories";

const TopCategoriesSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };

  return (
    <div>
         <Slider {...settings}>
         {topCategories.map(({image,product})=>(
          <TopCategoriesCard image={image} product={product}/>
         ))}
    </Slider>
    </div>
  )
}

export default TopCategoriesSlider