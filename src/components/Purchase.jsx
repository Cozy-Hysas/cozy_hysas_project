import HomePage from './HomePage.jsx';
import React from 'react';

class Purchase extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toHomePage: '',
		};
		this.handleEventOnChange = this.handleEventOnChange.bind(this);
	}
	handleEventOnChange(e) {
		var name = e.target.name;
		var value = e.target.value;
		this.setState({
			[name]: value,
		});
	}
	onClick() {
		this.setState({
			toHomePage: 'homepage',
		});
	}
	render() {
		if (this.state.toHomePage === '') {
			return (
				<div>
					<h1>Confirm your reservation</h1>
					<h4>
						{' '}
						Your first day is : <span>{this.props.startDate}</span>
					</h4>
					<br />
					<h4>
						{' '}
						Your last day is : <span>{this.props.endDate}</span>
					</h4>
					<br />
					<br />
					<div>
						<h2>Check</h2>
						<h4>
							{' '}
							price per day : <span>{this.props.price}</span>
						</h4>
						<br />
						<h4>
							Days : <span>{this.props.totalDays}</span>
						</h4>
						<br />
						<h4>
							Total Price : <span>{this.props.totalPrice}</span>
						</h4>
						<br />
						<button onClick={this.onClick.bind(this)}>Confirm</button>
					</div>
				</div>
			);
		} else if (this.state.toHomePage === 'homepage') {
			return (
				<div>
					<HomePage />
				</div>
			);
		}
		<div></div>;
	}
}
export default Purchase;
