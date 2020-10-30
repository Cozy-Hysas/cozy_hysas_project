import React from 'react';
import axios from 'axios';
import Purshas from './Purshas.jsx';
class Houses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'vilaa',
			description: 'good one',
			price: '200',
			imageUrl:
				'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80',
			feedBack: ['the service was good', 'Beautiful views'],
			startDate: '',
			endDate: '',
			totalDays: 0,
			totalPrice: 0,
			switch: '',
		};

		this.handleEventOnChange = this.handleEventOnChange.bind(this);
	}

	componentDidMount() {
		// this.props.house information from selim;
	}

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
		var totalPrice = this.state.price * totalDays;
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
						<h1 className="house-title">{this.state.title}</h1>
						<br />
						<br />
						<img
							src={this.state.imageUrl}
							alt="house "
							className="house-image"
						/>
						<br />
						<br />
						<div className="house-byline">
							<p style={{ whiteSpace: 'pre-line' }}>
								description : {this.state.description}
							</p>
							<br />
							<br />
							<span className="house-byline-price">
								price per day : {this.state.price}
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
						<Purshas
							startDate={this.state.startDate}
							endDate={this.state.endDate}
							totalDays={this.state.totalDays}
							price={this.state.price}
							totalPrice={this.state.totalPrice}
						/>
					</center>
				</div>
			);
		}
	}
}

export default Houses;
