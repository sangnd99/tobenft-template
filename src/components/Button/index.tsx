import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import styles from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  full?: boolean;
  outline?: boolean;
  contained?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    children,
    onClick,
    to,
    full = false,
    outline = false,
    contained = true,
    ...restProps
  } = props;
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (to) {
      navigate(to);
    }
    onClick && onClick(e);
  };
  return (
    <button
      className={cn(
        styles.container,
        { [styles.contained]: contained },
        { [styles.full]: full },
        { [styles.outline]: outline },
      )}
      onClick={handleClick}
      {...(restProps as any)}
    >
      {children}
    </button>
  );
};

export default Button;
