import styles from "./Card.module.scss";
import { Collectibles1, Decoration } from "assets/images/demo/collectibles";
import { Heart, Money, Equivalent } from "assets/svg";

interface ICardProps {
  like: number;
  image: string;
  name: string;
}

const Card: React.FC<ICardProps> = ({ like, image, name }) => {
  return (
    <div className={styles.container}>
      <div className={styles["image-wrapper"]}>
        <div className={styles.heart}>
          <img src={Heart} width={13} height={12} alt="heart" />
          {like}
        </div>
        <img src={image} width={280} height={283} alt="AlphaPeace" />
      </div>
      <div className={styles.introduce}>
        <p>Creator</p>
        <p className={styles["introduce__name"]}>
          <img src={Decoration} width={14} height={14} alt="Decoration" />
          Alexander Goth
        </p>
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.price}>
        <div className={styles["price__total"]}>
          <div>
            <img src={Money} width={14} height={12} alt="Money" />
            Total price
          </div>
          <p className={styles["price__BNB"]}>0.244 BNB</p>
        </div>
        <p className={styles["price__equivalent"]}>
          <img src={Equivalent} width={10} height={7} alt="equivalent" />$
          101.06
        </p>
      </div>
    </div>
  );
};

export default Card;
