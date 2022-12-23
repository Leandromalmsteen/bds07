import './styles.css';

import { ReactComponent as MainImage } from 'assets/images/car-header 1.svg';
import { NavLink } from 'react-router-dom';

import ButtonIcon from '../../components/ButtonIcon';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-image-container">
          <MainImage />
          <div className="home-image-container-textos">
            <h2>O carro perfeito para você</h2>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>

        <div className="home-content-container">
          <NavLink to="/products">
            <ButtonIcon />
            <p>Comece agora a navegar</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
