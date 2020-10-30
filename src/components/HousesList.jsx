import React from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../redux/actions/houseAction';
import PropTypes from 'prop-types';

class HousesList extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick(event) {
		console.log(event);
		//alert('this should take me to house component');
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
										onClick={(event) => this.handleClick(event)}
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
										onClick={(event) => this.handleClick(event)}
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
/* 
<div className="feed">
	<ul>
		<li className="feed-list-item">
			<div className="feed-list-item-title" onClick={this.handleClick}>
				{this.props.postTitle}
			</div>
			<div className="feed-list-item-byline">
				<span className="feed-list-item-byline-author">
					{this.props.postAuthor}
				</span>{' '}
				{moment.parseZone(this.props.postDate).fromNow()}
			</div>
			<img
				src={this.props.postImage}
				onClick={this.handleClick}
				className="feed-list-item-image"
			/>
			<span className="feed-list-item-lede">
				{this.props.postParagraphe.slice(0, 280)}{' '}
			</span>
		</li>
	</ul>
</div>;
 */
/* .houses-list-item {
    min-height: 350px;
    margin: 40px;
    list-style: none;
    border: 1px solid #77777769;
    background-color: #fdfdfd;
    border-radius: 4px;
    padding: 30px 50px 0px 50px;
    box-shadow: 0 0 1em #80808066;
  }
  
  .houses-list-item-image {
    float: left;
    width: 100%;
    max-width: 350px;
    margin-right: 20px;
    margin-bottom: 5%;
  }
  
  .houses-list-item-title {
    font-size: 1.8em;   
    font-family: 'Francois One';
    margin-bottom: 10px;
  }
  
  .houses-list-item-lede {
    display: block;
    margin-bottom: 50px;
  }
  
  .houses-list-item-byline {
    font-size: .8em;
    margin-bottom: 15px;
    color: #777777;
  }
  
  .houses-list-item-byline-price {
    font-weight: bolder;
  } */
