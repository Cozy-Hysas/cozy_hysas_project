import React from 'react';
import Map from './GoogleMap.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addHouse } from '../redux/actions/houseAction';
import { MDBContainer, MDBInput, MDBInputGroup } from 'mdbreact';

class HouseRenter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			imageUrl: '',
			description: '',
			adress: '',
			price: 0,
			startDate: null,
			endDate: null,
		};

		this.handleEventOnChange = this.handleEventOnChange.bind(this);
		this.handleEventOnClick = this.handleEventOnClick.bind(this);
	}

	handleEventOnChange(e) {
		var name = e.target.name;
		var value = e.target.value;
		this.setState({
			[name]: value,
		});
	}
	handleEventOnClick(e) {
		e.preventDefault();
		this.props.addHouse(this.state);
	}

	render() {
		return (
			<div>
				<div className="add">
					<div className="add-house">
						<h3 className="Title">Enter information for the House to rent</h3>
						<form onSubmit={this.handleEventOnClick}>
							<MDBContainer>
								Title to the house <br></br>
								<MDBInput
									className="input"
									label="Please give a title to the house "
									outline
									size="lg"
									onChange={this.handleEventOnChange}
									required
								/>
								Image <br></br>
								<MDBInput
									className="input"
									label="Please add a URL for the house's image "
									outline
									size="lg"
									onChange={this.handleEventOnChange}
									required
								/>
								Please add a description of the house <br></br>
								<MDBInputGroup
									placeholder="Please add a description of the house "
									type="textarea"
									name="description"
									cols="30"
									rows="10"
									onChange={this.handleEventOnChange}
									required
								/>
								Address <br></br>
								<MDBInput
									className="input"
									label="Please add the address of the house "
									outline
									size="lg"
									onChange={this.handleEventOnChange}
									required
								/>
								Price <br></br>
								<MDBInputGroup
									containerClassName="mb-3"
									prepend="DT"
									append=".00"
									min="0"
									max="800"
									onChange={this.handleEventOnChange}
									required
								/>
								start Date <br></br>
								<div className="date">
									<input
										className="input"
										type="date"
										name="startDate"
										onChange={this.handleEventOnChange}
										required
									/>
								</div>
								<br></br>
								End Date <br></br>
								<div className="date">
									<input
										className="input"
										type="date"
										name="endDate"
										onChange={this.handleEventOnChange}
										required
									/>
								</div>
								<br></br>
								<button className="btn btn-outline-secondary">
									Add my house
								</button>
							</MDBContainer>

							<br></br>
							<br></br>
						</form>
						<div style={{ margin: '50px' }}>
							<Map
								google={this.props.google}
								center={{ lat: 36.894244, lng: 10.186992 }}
								height="300px"
								zoom={15}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

HouseRenter.propTypes = {
	addHouse: PropTypes.func.isRequired,
	house: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	addHouse: PropTypes.func.isRequired,
	house: state.house.house,
});
export default connect(mapStateToProps, { addHouse })(HouseRenter);
