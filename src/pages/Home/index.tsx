import { ReactComponent as MainImage } from 'assets/images/car-header 1.svg';
import Navbar from 'components/Navbar';
import './styles.css';
import ButtonIcon from '../../components/Navbar/ButtonIcon/index';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <MainImage />
            <h2>O carro perfeito para você</h2>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>

          <div className="home-content-container">
            <ButtonIcon />
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
