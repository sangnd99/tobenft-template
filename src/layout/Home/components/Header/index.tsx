import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { Logo, Hamburger, Search, Close, ArrowDown } from "assets/svg";
import { listNavs } from "./helper";
import { randomId } from "common/functions";
import { useClickOutSide } from "common/hooks";
import Button from "components/Button";
import SearchBox from "components/SearchBox";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const { elementRef, isVisible, setElementVisible } =
    useClickOutSide<HTMLDivElement>(false);
  return (
    <div ref={elementRef}>
      <div className={styles.wrapper}>
        <div className={cn(styles.container, "container")}>
          <img src={Logo} width={160} height={46} alt="Tobenft" />
          <div className={styles["desktop-action"]}>
            <SearchBox placeholder="Search" />
            <div className={styles["desktop-action__nav"]}>
              <ul>
                {listNavs.map(({ name, link, children }) => (
                  <li key={`list-nav-${randomId()}`}>
                    <Link to={link}>
                      {name}
                      {children && (
                        <div className={styles["mobile-menu__extend"]}>
                          <img
                            src={ArrowDown}
                            width={9}
                            height={7}
                            alt="Arrow down"
                          />
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
                <Button>Create</Button>
              </ul>
              <div className={styles.separate} />
              <Link to="/" className={styles["mobile-menu__authen"]}>
                Login
              </Link>
              <Link to="/" className={styles["mobile-menu__authen"]}>
                Sign up
              </Link>
            </div>
          </div>

          <div className={styles["mobile-action"]}>
            <div className={styles["mobile-action__btn-wrapper"]}>
              <img src={Search} width={25} height={25} alt="Search" />
            </div>
            <div
              className={styles["mobile-action__btn-wrapper"]}
              onClick={() => setElementVisible(!isVisible)}
            >
              <img src={Hamburger} width={25} height={25} alt="Hamburger" />
            </div>
          </div>
        </div>
      </div>
      <ul
        className={cn(styles["mobile-menu"], {
          [styles["mobile-menu--extend"]]: isVisible,
        })}
      >
        <div
          className={styles["mobile-menu__close"]}
          onClick={() => setElementVisible(!isVisible)}
        >
          <img src={Close} width={25} height={25} alt="close" />
        </div>
        <li>
          <div className={styles["mobile-menu__logo"]}>
            <img src={Logo} width={160} height={50} />
          </div>
        </li>
        {listNavs.map(({ name, link, children }) => (
          <li key={`list-nav-${randomId()}`}>
            <Link to={link}>
              {name}
              {children && (
                <div className={styles["mobile-menu__extend"]}>
                  <img src={ArrowDown} width={9} height={7} alt="Arrow down" />
                </div>
              )}
            </Link>
          </li>
        ))}
        <div className={styles["mobile-menu__btn"]}>
          <Button full={true}>Create</Button>
        </div>
        <Link to="/" className={styles["mobile-menu__authen"]}>
          Login
        </Link>
        <Link to="/" className={styles["mobile-menu__authen"]}>
          Sign up
        </Link>
      </ul>
    </div>
  );
};

export default Header;
