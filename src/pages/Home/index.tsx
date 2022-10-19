import { ReactComponent as MainImage } from 'assets/images/car-header 1.svg';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <MainImage />
                      <h2>O carro perfeito para você</h2>
                      <h6>Conheça nossos carros e dê mais um passo na realização do seu sonho</h6>
          </div>

          <div className="home-content-container">
            <h1>Comece a navegar agora</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
