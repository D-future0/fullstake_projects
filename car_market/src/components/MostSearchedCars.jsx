import React from "react";
import fakeData from "./shared/fakeData";
import CarCard from "./CarCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MostSearchedCars = () => {
  const swiperRef = React.useRef(null);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Most Searched Cars</h2>

      <div
        style={{
          position: "relative",
          padding: "40px",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {fakeData.carList.map((car, index) => {
            return (
              <SwiperSlide style={{ display: "grid", placeItems: "center" }}>
                <CarCard {...car} key={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* Custom Buttons */}
        <Button
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft />
        </Button>
        <Button
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default MostSearchedCars;
