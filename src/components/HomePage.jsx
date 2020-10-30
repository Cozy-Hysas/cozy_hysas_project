import React from 'react';
import { MDBContainer, MDBInput } from 'mdbreact';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	fetchHouses,
	filterHouseByAddress,
} from '../redux/actions/houseAction';

import 'react-datepicker/dist/react-datepicker.css';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: '',
		};

		this.handleEventchange = this.handleEventchange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.filterHouseByAddress(this.state.address);
	}
	handleEventchange(e) {
		this.setState({
			address: e.target.value,
		});
	}

	render() {
		return (
			<div id="HomePage">
				<h3 className="Title">Welcome to Cozy hysas!</h3>
				<center>
				<MDBContainer>
					<MDBInput
						label="Address: Where are you going? "
						outline
						size="lg"
						onChange={this.handleEventchange}
					/>
					<button
						className="btn btn-outline-secondary"
						onClick={this.handleClick}
					>
						Confirm choice
					</button>
					{/*<DatePicker selected={startdate} onChange={date => setStartDate(date)} /> const [startDate, setStartDate] = useState(new Date());*/}
				</MDBContainer>
				</center>
				
			</div>
		);
	}
}
HomePage.propTypes = {
	fetchHouses: PropTypes.func.isRequired,
	filterHouseByAddress: PropTypes.func.isRequired,
	listOfHouses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	fetchHouses: PropTypes.func.isRequired,
	filterHouseByAddress: PropTypes.func.isRequired,
	listOfHouses: state.house.listOfHouses,
});
export default connect(mapStateToProps, { fetchHouses, filterHouseByAddress })(
	HomePage
);
