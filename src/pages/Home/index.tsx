import cn from "classnames";

import styles from "./Home.module.scss";
import Banner from "./component/Banner";
import TopCollection from "./component/TopCollection";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div className={cn("container", styles.container)}>
      <Banner />
      <TopCollection />
    </div>
  );
};

export default Home;
