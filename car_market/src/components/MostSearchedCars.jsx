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
  const [size, setSize] = React.useState(window.innerWidth);
  const [view, setView] = React.useState(3);
  
  const checkSize = () => {
    setSize(window.innerWidth);
    console.log(size)
  };
  const formatCardBasis = ()=>{
    if(size <= 1000){
      setView(1)
    }
    else{
      setView(3)
    }

  }

  React.useEffect(() => {
    // console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
      formatCardBasis()
    };
  }, [size, view]);
  return (
    <div style={{ textAlign: "center"}}>
      <h2>Most Searched Cars</h2>

      <div
        style={{
          position: "relative",
          padding: "60px",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={100}
          // {size <= 700 ? slidesPerView={3}: slidesPerView={1}}
          slidesPerView={view}
          loop={true}
          className="swipe"
        >
          {fakeData.carList.map((car, index) => {
            return (
              <SwiperSlide className="slide">
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
