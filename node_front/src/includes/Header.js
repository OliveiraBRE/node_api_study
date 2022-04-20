import { Link } from "react";
import style from './Header.module.css';

const Header = () => {
  return <div className={style.header}>
    <div className={style.container}>
      <Link to='/'>Home</Link>
      <Link to='/node'>API</Link>
    </div>
  </div>
};

export default Header;