import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

/**
 * @description Handle element state when click outside
 * @usage
 *   Put elementRef in ref of the element you want to handle click outside
 *
 *   const {elementRef,  isVisible, setElementVisible} = useClickOutSide<ELEMENT_REF_TYPE>(initState);
 *
 *   <div ref={elementRef}>
 *     ... your code here ...
 *   </div>
 *
 *   Use isVisible, setElementVisible instead of useState
 * */
export const useClickOutSide = <T extends HTMLElement>(
  initState: boolean,
  defaultState?: boolean,
): {
  elementRef: MutableRefObject<T | null>;
  isVisible: boolean;
  setElementVisible: Dispatch<SetStateAction<boolean>>;
} => {
  const [isVisible, setElementVisible] = useState<boolean>(
    defaultState || initState,
  );
  const elementRef = useRef<T | null>(null);
  const handleKeyDropdown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (defaultState) {
        setElementVisible(defaultState);
      } else {
        setElementVisible(false);
      }
    }
  };
  const handleClickOutSide = (e: Event) => {
    if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
      if (defaultState) {
        setElementVisible(defaultState);
      } else {
        setElementVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDropdown);
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("keydown", handleKeyDropdown);
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [isVisible]);

  return { elementRef, isVisible, setElementVisible };
};
