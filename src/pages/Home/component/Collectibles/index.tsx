import styles from "./Collectibles.module.scss";
import { Fragment } from "react";

import Heading from "components/Heading";
import Button from "components/Button";

import Card from "./components/Card";
import { listCollectibles } from "./helpers";
import { randomId } from "common/functions";

interface ICollectiblesProps {}

const Collectibles: React.FC<ICollectiblesProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading mb={false}>Top Collectibles</Heading>
        <div className={styles["button-wrapper"]}>
          <Button outline={false} contained={true}>
            All time
          </Button>
          <Button outline={true} contained={false}>
            Last 7 days
          </Button>
          <Button outline={true} contained={false}>
            Last months
          </Button>
        </div>
      </div>
      <div className={styles["card-container"]}>
        {listCollectibles.map((item) => (
          <Fragment key={`collectibles-card-${randomId()}`}>
            <Card {...item} />
          </Fragment>
        ))}
      </div>
      <p className={styles["show-more"]}>Show more option</p>
    </div>
  );
};

export default Collectibles;
