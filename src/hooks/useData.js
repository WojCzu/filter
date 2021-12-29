import { createContext, useContext, useState } from 'react';
import { mowers } from 'utils/data';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mowers);

  const filterData = (options) => {
    const filteredData = mowers.filter((item) => {
      for (const key in options) {
        if (item[key] === undefined || item[key] !== options[key]) {
          return false;
        }
      }
      return true;
    });
    return setData(filteredData);
  };

  const resetData = () => setData(mowers);

  return (
    <DataContext.Provider value={{ data, filterData, resetData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
