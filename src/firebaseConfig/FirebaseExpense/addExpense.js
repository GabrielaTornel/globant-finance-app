import {db} from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const addExpense = ({categoria, monto, fecha, uidUsuario}) => {
	return addDoc(collection(db, 'Gastos'), {
		categoria: categoria,
		monto: Number(monto),
		fecha: fecha,
		uidUsuario: uidUsuario
	});
}

export default addExpense;