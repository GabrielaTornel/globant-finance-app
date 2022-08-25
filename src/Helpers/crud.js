import { collection, getDocs,addDoc , Timestamp, where, query } from "firebase/firestore";
import { db } from "../firebaseConfig/init";

export const getInfo = async () => {
  const querySnapshot = await getDocs(collection(db, "Gastos"));
  const dataItems = []
  querySnapshot.forEach((doc) => {
    dataItems.push({ id: doc.id, ...doc.data() });
  });
  // console.log(dataItems)
   return dataItems;
};


export const getInfoSortCategory = async (category) => {
  try {
    const refDataQuery = collection(db, "Gastos");
    const q = query(refDataQuery, where("Category", "==", category));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    console.log(docs)
    return docs;
  } catch (error) {}
};

export const sendExpense = async (amount, category) => {
  const timestamp = Timestamp.fromDate(new Date())
  await addDoc(collection(db, "Gastos"), {
    Monto: amount || null,
    Category: category,
    Fecha: timestamp,
  });
};