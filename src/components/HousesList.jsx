import React from 'react';
import { connect } from 'react-redux';
import { selectHouseById, fetchHouses } from '../redux/actions/houseAction';
import PropTypes from 'prop-types';
import House from './House.jsx';

class HousesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			check: '',
		};
	}

	handleClick(id) {
		this.props.selectHouseById(id);
		this.setState({ check: 'unchecked' });
	}

	render() {
		if (this.state.check === '') {
			return (
				<div className="houses">
					<ul>
						{this.props.listOfHouses.map((house, i) => {
							return (
								<li className="houses-list-item" key={house._id}>
									<div
										className="houses-list-item-title"
										onClick={(event) => this.handleClick(house._id)}
									>
										{house.title}
									</div>
									<div className="houses-list-item-byline">
										The price per day is :
										<span className="houses-list-item-byline-price">
											{house.price} DT
										</span>
									</div>
									<img
										src={house.imageUrl}
										alt=""
										onClick={(event) => this.handleClick(house._id)}
										className="houses-list-item-image"
									/>
									<span className="houses-list-item-lede">
										{house.description.slice(0, 280)}{' '}
									</span>
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
	selectHouseById: PropTypes.func.isRequired,
	fetchHouses: PropTypes.func.isRequired,
	listOfHouses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	selectHouseById: PropTypes.func.isRequired,
	fetchHouses: PropTypes.func.isRequired,
	listOfHouses: state.house.listOfHouses,
});
export default connect(mapStateToProps, { selectHouseById, fetchHouses })(
	HousesList
);
