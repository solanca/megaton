import React, { useContext, ReactNode, useState } from 'react';
import { PageContext, PageContextType } from '../context/pageContext';
import { PagesList } from '../components/header/hader-swith';


export const PageContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [page,setPage] = useState<PagesList>('pools');
  const pageToggle = () => {
    setPage((prev) => prev === 'claim'?"pools":"claim" )
  }
  return (
    <PageContext.Provider value={{page,pageToggle}}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = (): PageContextType => {
  const contextValue = useContext(PageContext);
  if (contextValue === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return contextValue;
};
