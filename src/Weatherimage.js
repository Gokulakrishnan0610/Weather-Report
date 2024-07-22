import clear from "./images/sun.png"
import cloudy from "./images/cloud.png"
import rain from "./images/rainy.png"

const Weatherimage = (props) => {
  return (
    <div>
      {props.weather === "Clear" ? (
        <img src={clear} alt="clear" style={{ width: '35px', height: '35px' }} />
      ) : props.weather === "Clouds" ? (
        <img src={cloudy} alt="cloudy" style={{ width: '35px', height: '35px' }} />
      ) : props.weather === "Rain" ? (
        <img src={rain} alt="rainy" style={{ width: '35px', height: '35px' }} />
      ) : props.weather === "Drizzle" ? (
        <img src={rain} alt="Drizzle" style={{ width: '35px', height: '35px' }} />
      ) : (
        " "
      )}
    </div>
  );

}

export default Weatherimage