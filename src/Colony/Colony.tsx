import { useEffect, useMemo, useState } from 'react';
import styles from './Colony.module.css';

import { COLONY_INFO, RESOURCE_NAMES } from '../data/colony'; // ### TEMP: Hardcoded
import ResourceGrid from './ResourceGrid';
import DropDown from '../components/DropDown';

type ResourceInfoType = {
  name: string,
  displayName: string,
  requiredAmount: number,
  currentAmount: number,
}

const Colony = () => {
  const colonyInfoFile: any = useMemo(() => COLONY_INFO, []); 
  const resourceNamesFile = useMemo(() => RESOURCE_NAMES, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [colonyTitle, setColonyTitle] = useState<string>("");
  const [colonyType, setColonyType] = useState<string>('settlement');
  const [colonySubType, setColonySubType] = useState<string>('settlement-industrial-large');
  const [resourcesInfo, setResourceInfo] = useState<ResourceInfoType[]>([]);
  const [userResources, setUserResources] = useState(() => {
    const storedData = localStorage.getItem('elite-assistant');
    return storedData ? JSON.parse(storedData) : {};  // check if browser localStorage has data to load
  });


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
            }
            tempResourcesInfo.push(resourceItem); 
          }
          setResourceInfo(tempResourcesInfo);
        } else {
          return null;
        }

      } catch (err) {
        console.log("Load Error: ", err);
      } finally {
        setLoading(false);
      }
    }  
    loadData();
  },[colonyType, colonySubType, colonyInfoFile, resourceNamesFile, userResources])


  const updateResourceAmount = (resourceName: string, newAmount: number ) => {
    let updatedResources:any = {...userResources};

    updatedResources[resourceName] = newAmount;
    setUserResources(updatedResources)
    localStorage.setItem('elite-assistant', JSON.stringify(updatedResources)); // store in localStorage of browser
  }

  const resetUserResources = () => {
    setUserResources({});
    localStorage.removeItem('elite-assistant'); // clear localStorage
  }

  const createUserOutpost = () => {
    let updatedUserResources = {...userResources};
    for (let i = 0; i < resourcesInfo.length; i++) {
      if (updatedUserResources.hasOwnProperty(resourcesInfo[i]['name'])) {
        const tempCalculation = updatedUserResources[resourcesInfo[i]['name']] - resourcesInfo[i]['requiredAmount'];
        updatedUserResources[resourcesInfo[i]['name']] = tempCalculation < 0 ? 0 : tempCalculation;
      }
    }
    localStorage.removeItem('elite-assistant'); // clear localStorage
    localStorage.setItem('elite-assistant', JSON.stringify(updatedUserResources)); // store in localStorage of browser
    setUserResources(updatedUserResources);
  }

  const selectColonyTypes = (colonyType: string, colonySubType: string) => {
    setResourceInfo([]);
    setColonyType(colonyType);
    setColonySubType(colonySubType);
  }

  return (
    <div className={styles.colonyContainer}>
      <h2>Colony Manager</h2>
      <DropDown 
        selected={colonySubType} 
        options={[]} 
        selectOption={selectColonyTypes} 
      />
      {loading ? <h3>Loading...</h3> : (
        <ResourceGrid
          colonyTitle={colonyTitle} 
          resourcesInfo={resourcesInfo}
          userResources={userResources} 
          updateResourceAmount={updateResourceAmount}
        />
      )}
      <button onClick={resetUserResources}>Clear User Resources</button>
      <button onClick={createUserOutpost}>User Created The Outpost</button>
    </div>
  );
}

export default Colony;