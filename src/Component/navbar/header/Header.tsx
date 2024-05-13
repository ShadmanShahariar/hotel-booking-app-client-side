import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faHeart,
  faHeartCirclePlus,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airpory Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Book Hotels Easily!</h1>
        <p className="headerDescription">
          Find hotels on you favourite destination easily. Enjoy your vacation
          rather then wasting your time finding hotels.
        </p>
        <button className="headerButton">Login/Regiser Now</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Search Your Destination"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className="headerSearchText">Date Range</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faHeart} className="headerIcon" />
            <span className="headerSearchText">Honeymoon Suite</span>
          </div>
        </div>
      </div>
    </div>
  );
};
