import { Heading } from '..'
import { StyledTestemonials } from './styles';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Image from 'next/image';

const Testemonials = () => {
  return (
    <StyledTestemonials>
        <div className="container">
            <Heading subTitle='Testemonials' title='What people are saying about us!'/>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Image 
                        src='https://images.unsplash.com/photo-1671726203422-dd710fd8a72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        width={100}
                        height={100}
                        alt='testemonial'
                    />
                    <h3>Maria Crist</h3>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor erat nec urna congue dapibus.
                    Etiam sollicitudin eget massa nec fringilla. Phasellus varius quam id felis accumsan volutpat.“</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        width={100}
                        height={100}
                        alt='testemonial'
                    />
                    <h3>Maria Crist</h3>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor erat nec urna congue dapibus.
                    Etiam sollicitudin eget massa nec fringilla. Phasellus varius quam id felis accumsan volutpat.“</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src='https://images.unsplash.com/photo-1671726203422-dd710fd8a72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        width={100}
                        height={100}
                        alt='testemonial'
                    />
                    <h3>John Doe</h3>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor erat nec urna congue dapibus.
                    Etiam sollicitudin eget massa nec fringilla. Phasellus varius quam id felis accumsan volutpat.“</p>
                </SwiperSlide>
        </Swiper>
      </div>
    </StyledTestemonials>
  )
}

export default Testemonials