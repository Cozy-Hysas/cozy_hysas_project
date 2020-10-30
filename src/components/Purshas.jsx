import HomePage from './HomePage.jsx'
import React from 'react';
import $ from 'jquery';
class Purshas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toHomePage: "",
        }
        this.handleEventOnChange = this.handleEventOnChange.bind(this);
    }
    handleEventOnChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value,
        })
    }
    onClick() {
        this.setState({
            toHomePage:"homepage"
        })
    }
    render() {
        if (this.state.toHomePage === "") {
            return (
                <div>
                    <h1>start date : {this.props.startDate}</h1> 
                    <h1> end date : {this.props.endDate}</h1>
                    <h6>total Price : {this.props.totalPrice}</h6>
                    <h6>Days : {this.props.totalDays}</h6>
                    <h6> price per day : {this.props.price}</h6>
                    <h1>Your information</h1>
             <button onClick={this.onClick.bind(this)}>Confirm</button>
                </div>
            )
        } else if (this.state.toHomePage === 'homepage') {
            return (
                <div>
                 <HomePage />
                </div>
            )
        }
        <div>
        </div>
    }
}
export default Purshas;