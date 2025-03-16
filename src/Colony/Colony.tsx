import { useEffect, useState } from 'react';
import styles from './Colony.module.css';

import { OUTPOST_MILITARY, RESOURCE_NAMES } from '../data/colony'; // ### TEMP: Hardcoded

type ResourceGridType = {
  colonyTitle: string,
  resourcesInfo: Record<string, string>[],
}


const ResourceGrid = ({ colonyTitle, resourcesInfo }: ResourceGridType) => {

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
          <div key={`resource-${index}`} className={styles.resourcesGrid}>
            <div>{resource.displayName}</div>
            <div>{resource.requiredAmount}</div>
            <div><input className={styles.resourceInput} type='number' value={resource.currentAmount}></input></div>
          </div>
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

  return (
    <div className={styles.colonyContainer}>
      <h2>Colony Manager</h2>
      <ResourceGrid colonyTitle={colonyTitle} resourcesInfo={resourcesInfo} />
    </div>
  );
}

export default Colony;