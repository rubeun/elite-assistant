import { useState, useMemo } from "react";
import styles from './DropDown.module.css';
import { COLONY_NAV } from '../data/colony';

type DropDownOptionType = {
  optionName: string,
  optionKey: string,
  handleSelection: any,
}

type DropDownType = {
  selected: string,
  options: string[],  // e.g. ["outpost", "outpost-military"] or ['settlement', 'settlement-industrial-large']
  selectOption: any,
}

const DropDownOption = ({ optionName, optionKey, handleSelection }: DropDownOptionType) => {
  return (
    <li><button onClick={() => handleSelection(optionKey)}>{optionName}</button></li>
  );

}


const DropDown = ({ selected, options, selectOption }: DropDownType) => {
  const colonyNavFile: any = useMemo(() => COLONY_NAV, []); 
  
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>(selected);

  const dropdownOptions = Object.keys(COLONY_NAV);
  const buttonName = colonyNavFile[optionSelected]["displayName"];

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  const handleSelection = (value: string) => {
    setOptionSelected(value);
    selectOption(colonyNavFile[value]["category"], value);
    setIsDropDownOpen(false);
  }
  console.log("File: ", colonyNavFile);

  return (
    <div className={styles.dropdownContainer}>
      <button
        className={styles.dropdownButton}
        onClick={toggleDropDown} 
        value={optionSelected}
      >{buttonName}</button>

      {isDropDownOpen && (
        <ul className={styles.dropdownOptions}>
          {dropdownOptions.length > 0 && dropdownOptions.map((option, idx) => 
            <DropDownOption 
              optionName={colonyNavFile[option]["displayName"]} 
              optionKey={option} 
              handleSelection={handleSelection} />)}
        </ul>
      )}
    </div>
  );
}

export default DropDown;