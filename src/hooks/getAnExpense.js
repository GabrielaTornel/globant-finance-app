import {useState, useEffect} from 'react';
import {db} from './../firebaseConfig/init';
import {useNavigate} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firebase/firestore';


const useGetAnExpense = (id) => {
	const navigate = useNavigate();
	const [expense, setExpense] = useState('');

useEffect(() => {
	const getAnExpense = async() => {
		const docExpense = await getDoc(doc(db, 'Gastos', id));

		if(docExpense.exists){
			setExpense(docExpense);
		} else {
			navigate('/dashboard')
		}
	}

	getAnExpense();
	}, [navigate, id]);

	return [expense];
}

	export default useGetAnExpense;
