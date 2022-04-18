import { UpcomingImage } from "assets/images";

import styles from "./Upcoming.module.scss";
import { Calendar } from "assets/svg";

interface IUpcomingProps {}

const cssVariables = {
  "--background-image": `url(${UpcomingImage})`,
} as React.CSSProperties;

const Upcoming: React.FC<IUpcomingProps> = () => {
  return (
    <div className={styles.wrapper} style={{ ...cssVariables }}>
      <div className={styles.content}>
        <button className={styles["content__btn"]}>
          <img src={Calendar} width={16} height={18} alt="Calendar" />
          Upcoming
        </button>
        <p className={styles["content__date"]}>Friday, April 1</p>
        <p className={styles["content__title"]}>Extranet Metaverse #2</p>
      </div>
    </div>
  );
};

export default Upcoming;
