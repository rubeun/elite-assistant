import { useEffect, useState } from 'react';
import styles from './Colony.module.css';

import { COLONY_INFO, RESOURCE_NAMES } from '../data/colony'; // ### TEMP: Hardcoded
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
  resourcesInfo: Record<string, string>[],
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

const Colony = () => {
  // const [colonyType, setColonyType] = useState('');
  // const colonyResources = COLONY_INFO['category']['outpost']['outpost-military'].materials; // #### TEMP
  // const colonyTitle = COLONY_INFO['category']['outpost']['outpost-military'].displayName;
  const colonyResources = COLONY_INFO['category']['settlement']['settlement-industrial-large'].materials; // #### TEMP
  const colonyTitle = COLONY_INFO['category']['settlement']['settlement-industrial-large'].displayName;
  const [resourcesInfo, setResourceInfo] = useState([]);

  useEffect(() => {
    const initialLoad = () => {
      let tempResourcesInfo: any = [];
      for (let [key, value] of Object.entries(colonyResources)) {
        const displayName = RESOURCE_NAMES[key];
        let resourceItem = {
          name: key,
          displayName: displayName,
          requiredAmount: value,
          currentAmount: 0,
        }
        tempResourcesInfo.push(resourceItem); 
      }
      setResourceInfo(tempResourcesInfo);    
    }  
    initialLoad();
  },[colonyResources])


  const updateResourceAmount = (resourceName: string, newAmount: number ) => {
    let updatedResourcesArr:any = [...resourcesInfo];
    if (updatedResourcesArr.length > 0) {
      for (let x = 0; x < updatedResourcesArr.length; x++) {
        if (updatedResourcesArr[x]['name'] === resourceName) {
          updatedResourcesArr[x]['currentAmount'] = newAmount;
          break;
        }
      }  
    }
    setResourceInfo(updatedResourcesArr);
  }

  return (
    <div className={styles.colonyContainer}>
      <h2>Colony Manager</h2>
      <ResourceGrid
        colonyTitle={colonyTitle} 
        resourcesInfo={resourcesInfo} 
        updateResourceAmount={updateResourceAmount}
      />
    </div>
  );
}

export default Colony;