import CarImg from 'assets/images/car-card 1.png';
import BuyButton from 'components/BuyButton';
import './styles.css';
const CarCard = () => {
  return (
    <div>
      <div className="base-card car-card">
        <div className="card-top-container">
          <img src={CarImg} alt="Nome do Produto" />
        </div>
        <div className="card-bottom-container">
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <BuyButton />
      </div>
    </div>
  );
};

export default CarCard;
