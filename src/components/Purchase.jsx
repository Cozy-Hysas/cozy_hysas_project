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
					<h1 className="Title">Confirm your reservation</h1>

					<h4 className="subtitlet">
						{' '}
						Your first day is : <span>{this.props.startDate}</span>
					</h4>
					<br />
					<h4 className="subtitlet">
						{' '}
						Your last day is : <span>{this.props.endDate}</span>
					</h4>
					<br />
					<br />
					<div>
						<h2 className='Title2'>Check</h2>
						<h4 className="subtitlet">
							{' '}
							price per day : <span>{this.props.price}</span>
						</h4>
						<br />
						<h4 className="subtitlet">
							Days : <span>{this.props.totalDays}</span>
						</h4>
						<br />
						<h4 className="subtitlet">
							Total Price : <span>{this.props.totalPrice}</span>
						</h4>
						<br />
						<button className="btn btn-outline-secondary" onClick={this.onClick.bind(this)}>
									Confirm
								</button>
					
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
