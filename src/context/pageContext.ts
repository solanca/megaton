import { createContext } from "react";
import { PagesList } from "../components/header/hader-swith";

export interface PageContextType {
    page: PagesList;
    pageToggle: () => void;
  }
  
  export const PageContext = createContext<PageContextType|undefined>(undefined);