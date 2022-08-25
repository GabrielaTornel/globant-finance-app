import {db} from '../init';
import {doc, updateDoc,getDoc} from 'firebase/firestore';

export const editExpense = async({id, categoria, monto, fecha}) => {
	const documento = doc(db, 'Gastos', id);
	return await updateDoc(documento, {
		categoria: categoria,
		monto: Number(monto),
		fecha: fecha
	});
}
export const getAnExpense = async (id) => {
	return await getDoc(doc(db, 'Gastos', id));

}


