import { useState } from 'react';
import styles from './ResourceGrid.module.css';
import NumberField from '../components/NumberField';


type ResourceInfoType = {
  name: string,
  displayName: string,
  requiredAmount: number,
  currentAmount: number,
  updateResourceAmount: any,
}

type ResourceGridType = {
  colonyTitle: string,
  resourcesInfo: any,
  updateResourceAmount: any,
}

const ResourceInfo = ({ name, displayName, requiredAmount, currentAmount, updateResourceAmount}: ResourceInfoType) => {
  const [amount, setAmount] = useState(currentAmount);

  const remainingAmount = requiredAmount >= currentAmount ? requiredAmount - currentAmount : 0;
  const amountReached =  remainingAmount < 1 ? true : false;

  const updateAmount = (amount: number) => {
    setAmount(amount);
    updateResourceAmount(name, amount);
  }

  return (
    <div className={styles.resourcesGrid}>
      <div className={`${amountReached ? styles.noRemaining : ''}`}>{displayName} {amountReached ? '✓' : ''}</div>
      <div className={`${amountReached ? styles.noRemaining : ''}`}>{requiredAmount}</div>
      <div className={`${amountReached ? styles.noRemaining : ''}`}>{remainingAmount}</div>
      <div>
        <NumberField numValue={amount} amountReached={amountReached} updateAmount={updateAmount} />
      </div>
    </div>
  );

}

const ResourceGrid = ({ colonyTitle, resourcesInfo, updateResourceAmount }: ResourceGridType) => {

  return (
    <div className={styles.resourceContainer}>
      <h4>{colonyTitle}</h4>
      <div key={`resource-titles`} className={`${styles.resourcesGrid} ${styles.resourcesGridTitle}`}>
        <div>RESOURCES</div>
        <div>REQUIRED</div>
        <div>REMAINING</div>
        <div>CURRENT</div>
      </div>

      {resourcesInfo.length > 0 ? 
        resourcesInfo.map((resource: Record<string, string>, index: number) => (
          <ResourceInfo 
            key={`resource-${index}`}
            name={resource.name} 
            displayName={resource.displayName} 
            requiredAmount={parseInt(resource.requiredAmount)} 
            currentAmount={parseInt(resource.currentAmount)}
            updateResourceAmount={updateResourceAmount}
          />
          ))
        : null}
    </div>
  );
}

export default ResourceGrid;