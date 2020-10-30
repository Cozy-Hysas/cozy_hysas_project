
import React from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../redux/actions/houseAction';
import PropTypes from 'prop-types';

class HousesList extends React.Component {
	constructor(props) {
		super(props);
	}

	click() {
		alert('this should take me to house component');
	}
	componentDidMount() {
		this.props.fetchHouses();
    /*
       axios.get('/house').then(resp => {
            this.setState({
                data: resp.data
            });
        });
    */
	}

	render() {
		return (
			<div>
				{this.props.listOfHouses.map((house, i) => {
					return (
						<div key={i}>
							<h1 className="houseTitle" onClick={this.click.bind(this)}>
								{house.title}
							</h1>
							<img
								src={house.imageUrl}
								alt=""
								onClick={this.click.bind(this)}
								className="houseimage"
							/>
							<span className="description">{house.description} </span>
							<div className="price">
								<span className="housePrice">{house.price} </span>{' '}
							</div>
						</div>
					);
				})}
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
