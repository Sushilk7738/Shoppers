import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";


const Home = ()=>{
    return(
        <Layout>
            <div>
                <header>
                    <Swiper
                        pagination={true}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <img src="/p4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/p2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/p3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/p.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </header>
            </div>
        </Layout>
    )
}

export default Home;