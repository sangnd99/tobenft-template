import styles from "./FooterStrip.module.scss";
import Heading from "components/Heading";
import {
  WalletIcon,
  ImageIcon,
  CreateIcon,
  TagIcon,
  LightBulbIcon,
  AwardIcon,
  ChartIcon,
  PlatformIcon,
} from "assets/svg";

import { randomId } from "common/functions";

interface IFooterStripProps {}

const FooterStrip: React.FC<IFooterStripProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.step}>
          <Heading center>Create and sell your NFTs</Heading>
          <div className={styles["step__container"]}>
            {listSteps.map(({ icon, width, height, title, desc }) => (
              <div className={styles["step__card"]} key={`step-${randomId()}`}>
                <div className={styles["step__card-image-wrapper"]}>
                  <img src={icon} width={width} height={height} alt={title} />
                </div>
                <p className={styles["step__card-name"]}>{title}</p>
                <p className={styles["step__card-desc"]}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["about-us"]}>
          <Heading center>About us</Heading>
          <div className={styles["about-us__container"]}>
            {listAbouts.map(({ icon, width, height, name }) => (
              <div className={styles["about-us__card"]}>
                <img src={icon} width={width} height={height} alt={name} />
                <div className={styles["about-us__name"]}>
                  <p>{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterStrip;

const listSteps = [
  {
    icon: WalletIcon,
    width: 55,
    height: 49,
    title: "Set up your wallet",
    desc: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
  },
  {
    icon: ImageIcon,
    width: 51,
    height: 45,
    title: "Add your NFTs",
    desc: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
  },
  {
    icon: CreateIcon,
    width: 53,
    height: 53,
    title: "Create your collection",
    desc: "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
  },
  {
    icon: TagIcon,
    width: 49,
    height: 51,
    title: "List them for sale",
    desc: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!",
  },
];

const listAbouts = [
  {
    icon: LightBulbIcon,
    width: 80,
    height: 77,
    name: "Innovative Creators",
  },
  {
    icon: AwardIcon,
    width: 66,
    height: 89,
    name: "Quality and Diverse Works",
  },
  {
    icon: ChartIcon,
    width: 84,
    height: 70,
    name: "Higher Profits",
  },
  {
    icon: PlatformIcon,
    width: 81,
    height: 81,
    name: "Dynamic Platform",
  },
];
