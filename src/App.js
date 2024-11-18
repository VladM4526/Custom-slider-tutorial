import { Swiper } from "swiper/react";
import { register } from "swiper/element/bundle";

import setIcons from "./imgs/set-icons.svg";
import {
  ButtonsSliders,
  ContainerSlide,
  ContainerSlider,
  IconsArrow,
  Slide,
  Title,
} from "./StylesSlider.styled";

import NightCity from "./imgs/image-1-edited.png";
import NightTime from "./imgs/image-2-edited.png";
import Night from "./imgs/image-3-edited.png";

import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const App = () => {
  register();

  return (
    <>
      <Title>Tutorial swiper.js</Title>
      <ContainerSlider>
        <ButtonsSliders className="arrow-left">
          <IconsArrow>
            <use href={`${setIcons}#icon-left-arrow`}></use>
          </IconsArrow>
        </ButtonsSliders>
        <Swiper
          spaceBetween={30}
          loop={true}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          modules={[Pagination, Navigation]}
        >
          <Slide>
            <ContainerSlide>
              <h1>Photo #1</h1>
              <img src={NightCity} alt="" />
            </ContainerSlide>
          </Slide>
          <Slide>
            <ContainerSlide>
              <h1>Photo #2</h1>
              <img src={NightTime} alt="" />
            </ContainerSlide>
          </Slide>
          <Slide>
            <ContainerSlide>
              <h1>Photo #3</h1>
              <img src={Night} alt="" />
            </ContainerSlide>
          </Slide>
        </Swiper>

        <ButtonsSliders className="arrow-right">
          <IconsArrow>
            <use href={`${setIcons}#icon-right-arrow`}></use>
          </IconsArrow>
        </ButtonsSliders>
      </ContainerSlider>
    </>
  );
};
