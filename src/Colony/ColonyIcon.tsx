import styles from './ColonyIcon.module.css';
import iconOutpost from '../assets/icon-outpost2.svg';
import iconSettlement from '../assets/icon-settlement4.svg';
import iconStation from '../assets/icon-station-coriolis.svg';


const ColonyIcon = ({ colonyType }: any) => {
  return ( 
    <>
      {colonyType === "outpost" ? 
        <img src={iconOutpost} className={styles.colonyIcon} alt='Outpost Icon' /> :
        colonyType === "settlement" ?
          <img src={iconSettlement} className={styles.colonyIcon} alt='Settlement Icon' /> :
          colonyType === "station" ?
            <img src={iconStation} className={styles.colonyIcon} alt='Station Icon' /> :
            null
      }      
    </>
  );
}

export default ColonyIcon;