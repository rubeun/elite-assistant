import { useRef, useEffect, useState, MouseEvent } from "react";
import styles from './NumberField.module.css';

type NumberFieldType = {
  numValue: number,
  amountReached: boolean,
  updateAmount: any,
}


const NumberField = ({numValue, amountReached, updateAmount}: NumberFieldType) => {
  const [value, setValue] = useState<number | undefined>(numValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(numValue);
  }, [numValue]);

  const handleEdit = (event: MouseEvent<HTMLInputElement>) => {
    event.currentTarget.select();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? undefined : parseFloat(e.target.value);
    setValue(newValue);
    updateAmount(newValue);
  }

  return (
    <div className={`${styles.numfieldContainer} ${amountReached ? styles.noRemaining : ''}`}>
      <input 
        ref={inputRef} 
        type="number" 
        value={value}
        onClick={handleEdit}
        onChange={handleChange}
      />
    </div>
  );
}

export default NumberField;