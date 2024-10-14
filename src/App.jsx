// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import {swiperDirection,setThumbswiper } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import swip1 from './assets/swip1.png'
// function App() {


//   return (
//     <>
//     <div className="mt-[200px]">
//       <div className="w-[250px] mx-auto">
//       <Swiper
//       direction={swiperDirection}
//       loop={true}
//       spaceBetween={10}
//       slidesPerView={3}
//       onSwiper={setThumbswiper}


//       // direction={swiperDirection}
//       //   navigation={true}

//       //   loop={true}
//       //   spaceBetween={10}
//       //   slidesPerView={1}


//       //   modules={[Pagination, Navigation]}
//         className="mySwiper w-[200px]"
//       >
//         <SwiperSlide>
//           <img  src={swip1} alt="" />
//         </SwiperSlide>
//         <SwiperSlide> <img className='w-[200px]'  src={swip1} alt="" /></SwiperSlide>
//         <SwiperSlide> <img className='w-[200px]'  src={swip1} alt="" /></SwiperSlide>
//         <SwiperSlide> <img className='w-[200px]'  src={swip1} alt="" /></SwiperSlide>
//       </Swiper>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App






// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import swip1 from './assets/swip1.png';
import swip2 from './assets/swip2.png';
import swip3 from './assets/swip3.png';
import { useState } from 'react';

function App() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="mt-[200px] flex justify-center">
        {/* Vertical Slider */}
        <div className="h-[400px] w-[200px] mx-4"> 
        <Swiper
                //  direction={'vertical'}
                direction='vertical'
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                onSwiper={setThumbsSwiper}
                className="mySwiper md:w-[151px] md:h-[487px]  "
              >
            <SwiperSlide>
              <img src={swip1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-full' src={swip1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-full' src={swip2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-full' src={swip3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swip1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Horizontal Slider */}
        <div className=" h-[487px] w-[375px] mx-4"> 
          <Swiper
           direction={'vertical'}
           loop={true}
           spaceBetween={10}
           slidesPerView={1}
           navigation={true}
           thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
           modules={[Navigation, Thumbs]}
          >
            <SwiperSlide>
              <img className='w-full' src={swip1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-full' src={swip2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-full' src={swip3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swip1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default App;




