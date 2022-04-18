import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import styles from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  full?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, onClick, to, full = false, ...restProps } = props;
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (to) {
      navigate(to);
    }
    onClick && onClick(e);
  };
  return (
    <button
      className={cn(styles.container, { [styles.full]: full })}
      onClick={handleClick}
      {...(restProps as any)}
    >
      {children}
    </button>
  );
};

export default Button;
