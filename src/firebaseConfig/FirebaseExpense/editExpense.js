import {db} from './firebaseConfig';
import {doc, updateDoc} from 'firebase/firestore';

const editExpense = async({id, categoria, monto, fecha}) => {
	const documento = doc(db, 'Gastos', id);
	return await updateDoc(documento, {
		categoria: categoria,
		monto: Number(monto),
		fecha: fecha
	});
}

export default editExpense;