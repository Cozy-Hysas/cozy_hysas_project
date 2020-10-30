import React from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../redux/actions/houseAction';
import PropTypes from 'prop-types';

class HousesList extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick(id) {
		console.log(id);
		//this.props.selectHouseByID(id);
	}
	componentDidMount() {
		this.props.fetchHouses();
	}

	render() {
		return (
			<div className="houses">
				<ul>
					{this.props.listOfHouses.map((house, i) => {
						return (
							<li className="houses-list-item">
								<div key={house._id}>
									<div
										className="houses-list-item-title"
										onClick={(event) => this.handleClick(house._id)}
									>
										{house.title}
									</div>
									<div className="houses-list-item-byline">
										<span className="houses-list-item-byline-price">
											The price per night is:
										</span>{' '}
										{house.price}
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
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
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
