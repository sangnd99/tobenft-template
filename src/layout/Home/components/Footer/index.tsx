import cn from "classnames";

import styles from "./Footer.module.scss";
import { listContacts } from "./helper";
import { randomId } from "common/functions";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.container, "container")}>
        <div className={styles["left-side"]}>
          <ul>
            {listContacts.map(({ link, icon, name }) => (
              <li key={`contact-${randomId()}`}>
                <a href={link} target="_blank">
                  <img src={icon} width={30} height={30} alt={name} />
                </a>
              </li>
            ))}
          </ul>
          <p className={styles["left-side__coppy-right"]}>
            CopyRight © 2020 - 2022 TOBE NFT.com. All Rights Reserved.
          </p>
        </div>
        <div className={styles["right-side"]}>
          <p>2022-01-14 09:41:16 (UTC+8)</p>
          <p>24HVolume</p>
          <p>6,241,396,093.17066564USDT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
