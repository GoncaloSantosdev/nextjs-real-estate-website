// Components
import { Heading, PropertyCard } from "..";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Styles
import { StyledFeaturedPropertiesSlider } from "./styles";
import { useIsDesktop } from "@/src/features/hooks/useIsDesktop";

const FeaturedProperties = ({ featuredProperties }) => {
  const { isDesktop } = useIsDesktop();
  
  return (
    <section className='featuredProperties'>
      <div className="container">
        <Heading subTitle='Our Properties' title='Discover Our Featured Properties'/>
        
        <StyledFeaturedPropertiesSlider>
          <Swiper
          slidesPerView={isDesktop ? 3 : 1}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          autoplay={{ delay: 2000 }}
          pagination={{ dynamicBullets: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"

        >
          {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledFeaturedPropertiesSlider>
      </div>
    </section>
  )
}

export default FeaturedProperties