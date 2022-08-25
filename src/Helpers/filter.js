/* import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/init";
import { collection, query, where,} from "firebase/firestore";

export const gastoFil = async (category) => {
    
    try{
    const refDataQuery = collection(db, "Gastos");
    const q = query(refDataQuery, where("Category", "==", "true"));
    const querySnapshot = await getDocs(q);
    console.log("hii")
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id });
    });
    console.log(docs)
     return docs;
  } catch(error) {}
}; */

/* 
const citiesRef = collection(db, "Gastos"); */

// Create a query against the collection.
/* export  const q = async () => {

const gastoFil = query(citiesRef, where("Category", "==", "Restaurante"));
} */
/* export const gastosFil = collection(db, "Gastos");

 const q = query(gastosFil, where("Category", "==", "Restaurante"));
*/