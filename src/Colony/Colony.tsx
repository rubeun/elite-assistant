import { useEffect, useState } from 'react';
import styles from './Colony.module.css';

import { OUTPOST_MILITARY, RESOURCE_NAMES } from '../data/colony'; // ### TEMP: Hardcoded

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

  const handleChange = (amount: number) => {
    
    setAmount(amount);
    updateResourceAmount(name, amount);
  }

  return (
    <div className={styles.resourcesGrid}>
      <div>{displayName}</div>
      <div>{requiredAmount}</div>
      <div><input onChange={(e) => handleChange(parseInt(e.target.value))} className={styles.resourceInput} type='number' value={amount}></input></div>
    </div>
  );

}

const ResourceGrid = ({ colonyTitle, resourcesInfo, updateResourceAmount }: ResourceGridType) => {

  return (
    <div className={styles.resourceContainer}>
      <h4>{colonyTitle}</h4>
      <div key={`resource-titles`} className={`${styles.resourcesGrid} ${styles.resourcesGridTitle}`}>
        <div>RESOURCES</div>
        <div>REQUIRED AMOUNT</div>
        <div>CURRENT AMOUNT</div>
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
  const outpostResources = OUTPOST_MILITARY.materials; // #### TEMP
  const colonyTitle = OUTPOST_MILITARY.displayName;
  const [resourcesInfo, setResourceInfo] = useState([]);

  useEffect(() => {
    initialLoad();
  },[])

  const initialLoad = () => {
    let tempResourcesInfo: any = [];
    for (let [key, value] of Object.entries(outpostResources)) {
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