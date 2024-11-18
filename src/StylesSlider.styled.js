import styled from "styled-components";

import { SwiperSlide } from "swiper/react";

export const Title = styled.h1`
  text-align: center;
`;

export const ContainerSlider = styled.div`
  width: 1392px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Slide = styled(SwiperSlide)`
  width: 1156px;
`;

export const ContainerSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 70px;
`;

export const IconsArrow = styled.svg`
  width: 94px;
  height: 94px;
  position: relative;
  &.arrow-right {
    position: absolute;
    top: 50%;
  }

  &.container-box. arrow-left {
    left: 0;
  }

  &.container-box. arrow-left {
    right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonsSliders = styled.button`
  background: transparent;
  border: none;
  outline: none;
  width: 94px;
  height: 94px;
`;
