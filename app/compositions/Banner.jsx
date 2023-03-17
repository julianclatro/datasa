// import React from "react";
// import Carousel from "nuka-carousel";
// import styled from "styled-components";
// // import banner1 from "@/assets/images/banner-01.png";
// // import banner1m from "@/assets/images/banner-01-m.png";
// // import banner2 from "@/assets/images/banner-02.png";
// // import banner2m from "@/assets/images/banner-02-m.png";
// // import banner3 from "@/assets/images/banner-03.png";
// // import banner3m from "@/assets/images/banner-03-m.png";

// import { useResponsive } from "ahooks";
// export const Banner = () => {
//   const isMobile = useResponsive();
//   return (
//     <CustomCarousel
//       className="max-w-screen-xl mx-auto"
//       autoplay={true}
//       autoplayInterval={7000}
//       disableAnimation
//       renderCenterLeftControls={({ previousSlide }) => (
//         <button onClick={previousSlide}></button>
//       )}
//       renderCenterRightControls={({ nextSlide }) => (
//         <button onClick={nextSlide}></button>
//       )}
//     >
//       <div>
//         <Image uri={!isMobile.md ? banner1m : banner1}></Image>
//       </div>
//       <div>
//         <Image uri={!isMobile.md ? banner2m : banner2}>
//           <div className="text-blue text-left font-bold text-2xl lg:text-4xl w-full xl:w-3/5">
//             Eco House Global es una organización sin fines de lucro
//             especializada en educación, política, economía y voluntariado para
//             la sostenibilidad.
//           </div>
//           <a
//             className="rounded-md bg-blue font-bold text-white absolute mt-8 py-4 px-8"
//             href="https://ecohouse.org.ar"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Mas Info
//           </a>
//         </Image>
//       </div>
//       <a
//         href="https://bibliotecaambiental.org/"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <Image uri={!isMobile.md ? banner3m : banner3}></Image>
//       </a>
//     </CustomCarousel>
//   );
// };

// const CustomCarousel = styled(Carousel)`
//   outline: none;
//   .slider-frame {
//     padding: 0 !important;
//   }
//   li.slider-slide {
//     outline: none;
//   }
//   .slider-control-bottomcenter {
//     margin-bottom: 20px;
//     ul {
//       top: 24px !important;
//       li {
//         padding: 8px;
//         button {
//           fill: black !important;
//           transform: scale(2);
//         }
//         &.paging-item.active button {
//           fill: white !important;
//         }
//       }
//     }
//   }
// `;

// const Image = styled.div`
//   padding: 48px;
//   background-image: url(${(props) => props.uri});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 592px;
// `;
