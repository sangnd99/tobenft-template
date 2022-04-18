import styles from "./SearchBox.module.scss";
import { Search } from "assets/svg";

interface ISearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBox: React.FC<ISearchBoxProps> = ({ ...restProps }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["icon-wrapper"]}>
        <img src={Search} width={18} height={18} alt="Search" />
      </div>
      <input {...(restProps as any)} className={styles.input} />
    </div>
  );
};

export default SearchBox;
