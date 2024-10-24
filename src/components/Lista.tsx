import './Lista.css';
import Navbar from './layout/Navbar';
import Card from './layout/Card';
import Footer from './layout/Footer';

import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './Firebase/FirebaseConn';


const GetList = async () => {
    const q = query(collection(db, 'idosos'));
    const querySnapshot = await getDocs(q);

    const cards = querySnapshot.docs.map((doc) => {
        const data = doc.data(); // Ensure data is typed correctly
        return (
            <Card 
                key={doc.id} 
                nome={data.nome as string} 
                idade={data.idade as number} 
                att1={data.att1 as string} 
                att2={data.att2 as string} 
                att3={data.att3 as string} 
            />
        );
    });
    return cards;
};

const Lista = () => {
    const [cards, setCards] = useState<JSX.Element[]>([]); // Properly type the state

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetList();
            setCards(result);
        };

        fetchData();
    }, []);

    return (
        <div>

            <Navbar />

            <div className="container">

                <h1>CONHEÇA NOSSOS IDOSOS</h1>

                <div className="cards">
                    {cards.length > 0 ? cards : <p>Loading...</p>}
                </div>

            </div>

            <Footer />

        </div>
    );
};

export default Lista;