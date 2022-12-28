import LocomotiveScroll from "locomotive-scroll";
import "./locoBasic.css";

export default function useLocoScroll() {
  const scrollEl = document.getElementById("container");
  const scroll = new LocomotiveScroll({
    el: scrollEl,
    smooth: true,
    multiplier: 1,
  });
}
