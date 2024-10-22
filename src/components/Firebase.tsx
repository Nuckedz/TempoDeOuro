import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyD8BhyhfudQrTfwAC7o9VVqcCxeNNg2-ig",
    authDomain: "tempodeouro-c51c8.firebaseapp.com",
    projectId: "tempodeouro-c51c8",
  });


export const Firebase = () => {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [horario, setHorario] = useState("")
    const [colaboradores, setColaboradores] = useState([])

    const db = getFirestore(firebaseApp);
    const colaboradorCollectionRef = collection(db, "colaboradores")

    useEffect(() => {
        const getColaboradores = async () => {
            const data = await getDocs(colaboradorCollectionRef)
            console.log(data.docs.map((doc =>({...doc.data(), id: doc.id}))))
        }
        getColaboradores()
    },[])

}

export const db = getFirestore(firebaseApp); 
export { firebaseApp }; 

