import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getInfo } from './Helpers/crud';

export const DataContext = createContext([])
let itemsDB = [];
const fetchData = async () => {
  const items = await getInfo();
  console.log("items", items);
  return itemsDB = items;
  
};
fetchData();
console.log(itemsDB, "DB")


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext.Provider value = {itemsDB}>
    <App/>
    </DataContext.Provider>
  </React.StrictMode>
)
