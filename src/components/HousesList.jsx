import React from "react";
import { connect } from "react-redux";
import { fetchHouses } from "../redux/actions/houseAction";
import PropTypes from "prop-types";
import House from "./House.jsx";

class HousesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "",
    };
  }

  handleClick(event) {
    console.log(event);
    //alert('this should take me to house component');
  }
  componentDidMount() {
    this.props.fetchHouses();
  }

  render() {
    if ((this.state.check = "")) {
      return (
        <div>
          <ul>
            {this.props.listOfHouses.map((house, i) => {
              return (
                <li>
                  <div key={house._id}>
                    <h1
                      className="houseTitle"
                      onClick={(event) => this.handleClick(event)}
                    >
                      {house.title}
                    </h1>
                    <img
                      src={house.imageUrl}
                      alt=""
                      onClick={(event) => this.handleClick(event)}
                      className="houseimage"
                    />
                    <span className="description">{house.description} </span>
                    <div className="price">
                      <span className="housePrice">{house.price} </span>{" "}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <center>
          <div>
            <House />
          </div>
        </center>
      );
    }
  }


}

HousesList.propTypes = {
  fetchHouses: PropTypes.func.isRequired,
  listOfHouses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  fetchHouses: PropTypes.func.isRequired,
  listOfHouses: state.house.listOfHouses,
});
export default connect(mapStateToProps, { fetchHouses })(HousesList);
