import React from 'react';
import Purchase from './Purchase.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Houses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedBack: ['the service was good', 'Beautiful views'],
			/* title: 'vilaa',
			description: 'good one',
			price: '200',
			imageUrl:
				'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80',
			*/ startDate:
				'',
			endDate: '',
			totalDays: 0,
			totalPrice: 0,
			switch: '',
		};

		this.handleEventOnChange = this.handleEventOnChange.bind(this);
	}

	/* 	componentDidMount() {
		// this.props.house information from selim;
	} */

	handleEventOnChange(e) {
		var name = e.target.name;
		var value = e.target.value;
		this.setState({ [name]: value });
	}

	onClick() {
		this.setState({
			switch: 'purchase',
		});
	}

	numberDays() {
		var start = this.state.startDate.split('-');
		var end = this.state.endDate.split('-');
		var totalDays =
			(Number(end[0]) - Number(start[0])) * 365 +
			(Number(end[1]) - Number(start[1])) * 30 +
			(Number(end[2]) - Number(start[2]));
		var totalPrice = this.props.house.price * totalDays;
		this.setState({
			totalDays: totalDays,
			totalPrice: totalPrice,
		});
	}

	render() {
		if (this.state.switch === '') {
			return (
				<div className="house">
					<center>
						<h1 className="house-title">{this.props.house.title}</h1>
						<br />
						<br />
						<img
							src={this.props.house.imageUrl}
							alt="house "
							className="house-image"
						/>
						<br />
						<br />
						<div className="house-byline">
							<p style={{ whiteSpace: 'pre-line' }}>
								description : {this.props.house.description}
							</p>
							<br />
							<br />
							<span className="house-byline-price">
								price per day : {this.props.house.price}
							</span>
							<br />
							<br />
							feedback :
							{this.state.feedBack.map((feedback, i) => (
								<div key={i}>
									<span>* {feedback}</span>
								</div>
							))}{' '}
							<br />
						</div>
						<form
							onSubmit={() => {
								this.numberDays();
								this.onClick();
							}}
						>
							startDate :
							<input
								className="input"
								type="date"
								name="startDate"
								required
								onChange={this.handleEventOnChange}
								required
							/>
							<br />
							<br />
							endDate :
							<input
								className="input"
								type="date"
								name="endDate"
								onChange={this.handleEventOnChange}
								required
							/>
							<br />
							<br />
							<input type="submit" value="Confirm" className="submitBtn" />
						</form>
					</center>
				</div>
			);
		} else if (this.state.switch === 'purchase') {
			return (
				<div>
					<center>
						<Purchase
							startDate={this.state.startDate}
							endDate={this.state.endDate}
							totalDays={this.state.totalDays}
							price={this.props.house.price}
							totalPrice={this.state.totalPrice}
						/>
					</center>
				</div>
			);
		}
	}
}

Houses.propTypes = {
	house: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	house: state.house.house,
});
export default connect(mapStateToProps, {})(Houses);
