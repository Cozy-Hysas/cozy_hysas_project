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
        alert('this should take me to home page')

        // this.setState({
        //     toHomePage:"homepage"
        // })
    }




    render() {

        if (this.state.toHomePage === "") {
            return (
                <div>
                    <h1>start date : {this.props.startDate} end date : {this.props.endDate}</h1>



                    <h1>Your information</h1>
			Use the following form to complete your reservation.<br /><br />

			Card number<input type="text" name="cardNumber" maxLength="32" className="input" onChange={this.handleEventOnChange} />

expiry<input type="text" name="expiry" required="required" maxLength="100" className="input" onChange={this.handleEventOnChange} />
            Zip Code<input type="text" name="zipCode" required="required" maxLength="32" className="input" onChange={this.handleEventOnChange} />
                    <button className="btn btn-primary" type="submit" onClick={this.onClick.bind(this)}>Confirm</button>
                </div>
            )
        } else if (this.state.toHomePage === 'homepage') {
            return (
                <div>
                    {/* <HomePage /> */}
                </div>
            )
        }

        <div>

        </div>
    }
}

export default Purshas;