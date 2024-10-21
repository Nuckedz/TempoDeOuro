import Card from './Card';
import Footer from './Footer';
import './Lista.css';
import Navbar from './Navbar';

const Lista = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>CONHEÇA NOSSOS IDOSOS</h1>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Lista;