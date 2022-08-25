import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/init";

export const getInfo = async () => {
  const querySnapshot = await getDocs(collection(db, "Gastos"));
  const dataItems = []
  querySnapshot.forEach((doc) => {
    dataItems.push({ id: doc.id, ...doc.data() });
  });
  console.log(dataItems)
   return dataItems;
};
