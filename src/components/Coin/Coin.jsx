import PropTypes from 'prop-types';
import s from "./coin.module.css";

function Coin({ data }) {
  const elements = data.map(({
    id, image, name, symbol, market_cap,
    current_price,
    price_change_percentage_24h,
    total_volume
  }) => (
    
    <li className={s.item} key={id}>
      <div className={s.firstWrapper}>
        <img src={image} alt="crypto" className={s.img}/>
        <span className={s.name}>{name}</span>
        <p className={s.symbol}>{symbol}</p>
      </div>
      <div className={s.secondWrapper}>
        <p className={s.price}>${current_price}</p>
        <p className={s.volume}>${total_volume.toLocaleString()}</p>
        {price_change_percentage_24h < 0 ? (
          <p className={`${s.percent} ${s.red}`}>
            {price_change_percentage_24h.toFixed(2)} %
          </p>
        ) : (
          <p className={`${s.percent} ${s.green}`}>
            {price_change_percentage_24h.toFixed(2)} %
          </p>
        )}
        <p className={s.marketcap}>
          Mkt Cap: ${market_cap.toLocaleString()}
        </p>
      </div>
    </li>
  ));

  return (<>
  {Boolean(data.length) && <ul className={s.list}>{elements}</ul>}
  </>)
}

export default Coin;


Coin.dafaultProps = {
  data: [],
};

Coin.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
      symbol: PropTypes.string.isRequired, 
      market_cap: PropTypes.number.isRequired,
      current_price: PropTypes.number.isRequired,
      price_change_percentage_24h: PropTypes.number.isRequired,
      total_volume: PropTypes.number.isRequired
    })
  ),
};