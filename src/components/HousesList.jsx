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
	componentDidMount() {
		this.props.fetchHouses();
	}

	render() {
		if (this.state.check === '') {
			return (
				<div>
					<ul>
						{this.props.listOfHouses.map((house, i) => {
							return (
								<li>
									<div key={house._id}>
										<h1
											className="houseTitle"
											onClick={(event) => this.handleClick(house._id)}
										>
											{house.title}
										</h1>
										<img
											src={house.imageUrl}
											alt=""
											onClick={(event) => this.handleClick(house._id)}
											className="houseimage"
										/>
										<span className="description">{house.description} </span>
										<div className="price">
											<span className="housePrice">{house.price} </span>{' '}
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
