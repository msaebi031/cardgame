
import { Avatar, Box, Link, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";

const Swiper_img = () => {

    const items = [
        { title: "بابک", name: "مالک ربات", src_img: "/img/swiper/img-1.png" },
        { title: "محمد", name: "ادمین اصلی", src_img: "/img/swiper/img-2.png" },
        { title: "مهگل", name: "ادمین اصلی", src_img: "/img/swiper/img-3.png" },
        { title: "فریبا", name: "ادمین", src_img: "/img/swiper/img-4.png" },
        { title: "نسیم", name: "ادمین", src_img: "/img/swiper/img-5.png" },
        { title: "یاسی", name: "ادمین", src_img: "/img/swiper/img-6.png" },
        { title: "آرزو", name: "ادمین", src_img: "/img/swiper/img-7.png" },
        { title: "بهار", name: "ادمین", src_img: "/img/swiper/img-8.png" },
    ];

    return (
        <Box data-aos="flip-right" marginTop={{ xs: 7, md: 10 }} id="admins">
            <Typography position="absolute" color="light" variant="h4" component="h6">ادمین های ربات</Typography>
            <Swiper
                styles={{ position: "relative" }}
                modules={[Navigation, Autoplay]}
                slidesPerView={6}
                navigation
                loop={true}
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },

                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    900: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href="#">
                            <Avatar sx={{ width: 113, height: 113 }} alt="Remy Sharp" src={item.src_img} />
                            <Typography mt={2.5} color="light" variant="h6" component="h5">{item.title}</Typography>
                            <Typography mt={.5} className="font-light" color="gray" variant="body2" component="h6">{item.name}</Typography>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default Swiper_img;
