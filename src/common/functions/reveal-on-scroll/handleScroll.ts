import type { IOptions } from "./index";
import { offset } from "./offset";

export const handeScroll = (
  rosElement: NodeListOf<HTMLElement>,
  options: IOptions,
) => {
  const scrollTop = window.pageYOffset;
  rosElement.forEach((element) => {
    let threshold;
    if (element.hasAttribute("data-ros-threshold")) {
      const elementThreshold = Number(
        element.getAttribute("data-ros-threshold"),
      );
      threshold = elementThreshold;
    } else {
      threshold = options.threshold;
    }
    const elementPosition = offset(element) + element.clientHeight * threshold;
    if (elementPosition < window.innerHeight + scrollTop) {
      element.classList.add("ros-active");
    } else {
      if (options.once) return;
      element.classList.remove("ros-active");
    }
  });
};
