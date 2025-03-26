import { useEffect, useMemo, useState } from 'react';
import styles from './Colony.module.css';

import { COLONY_INFO, RESOURCE_NAMES } from '../data/colony'; // ### TEMP: Hardcoded
import ResourceGrid from './ResourceGrid';

type ResourceInfoType = {
  name: string,
  displayName: string,
  requiredAmount: number,
  currentAmount: number,
  updateResourceAmount: any,
}

const Colony = () => {
  const colonyInfoFile: any = useMemo(() => COLONY_INFO, []); 
  const resourceNamesFile = useMemo(() => RESOURCE_NAMES, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [colonyTitle, setColonyTitle] = useState<string>("");
  const [colonyType, setColonyType] = useState<string>('settlement');
  const [colonySubType, setColonySubType] = useState<string>('settlement-industrial-large');
  const [resourcesInfo, setResourceInfo] = useState<ResourceInfoType[]>([]);


  useEffect(() => {
    const loadData = () => { 
      try {
        if (colonyType && colonySubType) {
          const colonyInfo = colonyInfoFile["category"][colonyType][colonySubType];
          if (!colonyInfo) throw new Error("colonyInfo didn't load");

          setColonyTitle(colonyInfo.displayName);
          let colonyResources = colonyInfo.materials;
          let tempResourcesInfo: any = [];
          for (let [key, value] of Object.entries(colonyResources)) {
            const displayName = resourceNamesFile[key];
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

      } catch (err) {
        console.log("Load Error: ", err);
      } finally {
        setLoading(false);
      }
    }  
    loadData();
  },[colonyType, colonySubType, colonyInfoFile, resourceNamesFile])


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
      {loading ? <h3>Loading...</h3> : (
        <ResourceGrid
          colonyTitle={colonyTitle} 
          resourcesInfo={resourcesInfo} 
          updateResourceAmount={updateResourceAmount}
        />
      )}
    </div>
  );
}

export default Colony;