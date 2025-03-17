import styles from './Header.module.css';
import elitelogo from '../logo-elite1.svg';

const Header = () => {
  return ( 
    <header className={`${styles.header} `}>
      <h1>Elite Assistant</h1>
      <img src={elitelogo} className={styles.eliteLogo} alt='Elite Logo' />
    </header>
  );
}

export default Header;