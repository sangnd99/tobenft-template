import cn from "classnames";

import styles from "./Heading.module.scss";

interface IHeadingProps {
  center?: boolean;
  mb?: boolean;
}

const Heading: React.FC<IHeadingProps> = ({
  children,
  center = false,
  mb = true,
}) => {
  return (
    <p
      className={cn(
        styles.heading,
        { [styles.center]: center },
        { [styles.mb]: mb },
      )}
    >
      {children}
    </p>
  );
};

export default Heading;
