import styles from "./Category.module.scss";

import Heading from "components/Heading";

import { listCategories } from "./helpers";

interface ICategoryProps {}

const Category: React.FC<ICategoryProps> = () => {
  return (
    <div className={styles.container}>
      <Heading center>Browse by category</Heading>
      <div className={styles["card-container"]}>
        {listCategories.map(({ name, image }) => (
          <div className={styles.card}>
            <p>{name}</p>
            <div className={styles["card__image-wrapper"]}>
              <img src={image} width={405} height={200} alt={name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
