import { collection,onSnapshot, getDocs,addDoc , Timestamp, where, query } from "firebase/firestore";
import { db } from "../firebaseConfig/init";

export const getInfo = () => {
  return new Promise((resolve, reject) => {
    const email = localStorage.getItem("email");
    onSnapshot(collection(db, "Gastos"), (docs) => {
    
      const dataItems = []
      docs.forEach(doc => {
        
        dataItems.push({ id: doc.id, ...doc.data() });
      });
      resolve(dataItems.filter((item) => item.user === email));
    
    });
  })
  
};


export const getInfoSortCategory = async (category) => {
  try {
    const email = localStorage.getItem("email");
    const refDataQuery = collection(db, "Gastos");
    const q = query(refDataQuery, where("Category", "==", category),
    );
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    console.log(docs)
    return docs.filter((item) => item.user === email);

  } catch (error) {}
};
/* 
export const getInfoByMonth = async (fecha) => {
  try {
    const refDataQuery = collection(db, "Gastos");
    const q = query(refDataQuery, where("Fecha", "==", fecha),
    );
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    ("traer fecha", docs)
    return docs;
  } catch (error) {}
}; */



export const sendExpense = async (amount, category,mounth ) => {
  // const timestamp = Timestamp.fromDate(new Date())
  await addDoc(collection(db, "Gastos"), {
    Monto: Number(amount) || null,
    Category: category,
    Fecha: mounth,
    user : localStorage.getItem("email")
  });
  ( amount, category,mounth, "parametros")
};