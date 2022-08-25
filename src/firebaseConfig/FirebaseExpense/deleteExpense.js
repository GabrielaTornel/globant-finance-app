import {db} from './firebaseConfig';
import {doc, deleteDoc} from 'firebase/firestore';

const deleteExpense = async(id) => {
	await deleteDoc(doc(db, 'Gastos', id));
}

export default deleteExpense;