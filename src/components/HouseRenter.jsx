import React from 'react';
import Map from './GoogleMap.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addHouse } from '../redux/actions/houseAction';

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
		console.log(this.state);
		this.props.addHouse(this.state);
		/* var newHouse = {
			title: this.state.title,
			imageUrl: this.state.imageUrl,
			description: this.state.description,
			adress: this.state.adress,
			price: this.state.price,
			startDate: this.state.startDate,
			endDate: this.state.endDate,
		}; */
		/* console.log(newHouse);
        $.post('/House/addHouse', newHouse, (err, results) => {
            if(err) console.log(err);
            else {
                console.log(results);
            }
        })
        console.log(this.state) */
	}

	render() {
		return (
			<div>
				<div className="add">
					<div className="add-house">
						<h3>Enter information for the House to rent</h3>
						<form onSubmit={this.handleEventOnClick}>
							Title:{' '}
							<input
								className="input"
								type="text"
								name="title"
								onChange={this.handleEventOnChange}
								required
							/>
							<br></br>
							Image:{' '}
							<input
								className="input"
								type="text"
								name="imageUrl"
								onChange={this.handleEventOnChange}
							/>
							<br></br>
							Description:{' '}
							<textarea
								className="textarea"
								name="description"
								cols="30"
								rows="10"
								onChange={this.handleEventOnChange}
								required
							></textarea>
							<br></br>
							Adress:{' '}
							<input
								className="input"
								type="text"
								name="adress"
								onChange={this.handleEventOnChange}
								required
							/>
							<br></br>
							Price:{' '}
							<input
								className="input"
								type="number"
								name="price"
								min="0"
								max="100"
								onChange={this.handleEventOnChange}
								required
							/>
							<br></br>
							daysOfService: startDate{' '}
							<input
								className="input"
								type="date"
								name="startDate"
								onChange={this.handleEventOnChange}
								required
							/>
							<br></br>
							EndDate{' '}
							<input
								className="input"
								type="date"
								name="endDate"
								onChange={this.handleEventOnChange}
								required
							/>
							<br></br>
							<button className="btn btn-success" type="submit">
								Add my House
							</button>
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
	house: state.house,
});
export default connect(mapStateToProps, { addHouse })(HouseRenter);
