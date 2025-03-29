import { useState, useMemo } from "react";
import styles from './DropDown.module.css';
import { COLONY_NAV } from '../data/colony';

type DropDownOptionType = {
  optionSelected: string,
  optionName: string,
  optionKey: string,
  handleSelection: any,
}

type DropDownType = {
  selected: string,
  selectOption: any,
}

const DropDownOption = ({ optionSelected, optionName, optionKey, handleSelection }: DropDownOptionType) => {
  if (optionKey === optionSelected) {
    return <li className={styles.dropdownActive}>* {optionName} *</li>
  } else {
    return <li onClick={() => handleSelection(optionKey)}>{optionName}</li>
  }
}


const DropDown = ({ selected, selectOption }: DropDownType) => {
  const colonyNavFile: any = useMemo(() => COLONY_NAV, []); 
  
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>(selected);

  const dropdownOptions = Object.keys(COLONY_NAV);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  const handleSelection = (value: string) => {
    setOptionSelected(value);
    selectOption(colonyNavFile[value]["category"], value);
    setIsDropDownOpen(false);
  }

  return (
    <div className={styles.dropdownContainer}>
      <button
        className={styles.dropdownButton}
        onClick={toggleDropDown} 
        value={optionSelected}
      >Choose Colony Type</button>

      {isDropDownOpen && (
        <ul className={styles.dropdownOptions}>
          {dropdownOptions.length > 0 && dropdownOptions.map((option, idx) => 
            <DropDownOption
              key={`dropdown-${idx}`}
              optionSelected={optionSelected}
              optionName={colonyNavFile[option]["displayName"]} 
              optionKey={option} 
              handleSelection={handleSelection} />)}
        </ul>
      )}
    </div>
  );
}

export default DropDown;