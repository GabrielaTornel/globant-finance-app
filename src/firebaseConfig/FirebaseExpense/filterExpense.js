import {collection, getDocs} from "firebase/firestore";

export const itemSortCategory = async () => {
  try {
    const refDataQuery = collection(db, "Gastos");
    const q = query(refDataQuery, where("category", "==", "Entretenimiento"));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  } catch (error) {}
};