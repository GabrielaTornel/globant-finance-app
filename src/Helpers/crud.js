import { collection, getDocs,addDoc , Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig/init";

export const getInfo = async () => {
  const querySnapshot = await getDocs(collection(db, "Gastos"));
  const dataItems = []
  querySnapshot.forEach((doc) => {
    dataItems.push({ id: doc.id, ...doc.data() });
  });
  
   return dataItems;
};



export const sendExpense = async (amount, category) => {
  const timestamp = Timestamp.fromDate(new Date())
  await addDoc(collection(db, "Gastos"), {
    Monto: amount || null,
    Category: category,
    Fecha: timestamp,
  });
};