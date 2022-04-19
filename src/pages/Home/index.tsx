import cn from "classnames";

import styles from "./Home.module.scss";
import Banner from "./component/Banner";
import TopCollection from "./component/TopCollection";
import Collectibles from "./component/Collectibles";
import Category from "./component/Category";
import FooterStrip from "./component/FooterStrip";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div>
      <div className={cn("container", styles.container)}>
        <Banner />
        <TopCollection />
        <Collectibles />
        <Category />
      </div>
      <FooterStrip />
    </div>
  );
};

export default Home;
