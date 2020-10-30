import React from "react";
import axios from "axios";
import Purshas from "./Purshas.jsx";
class Houses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "vilaa",
            description: "good one",
            price: "200",
            imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80",
            feedBack: ["the service was good","Beautiful views"],
            startDate: "",
            endDate: "",
            switch: "",

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
            switch: "purchase"
        })
    }


    render() {
        if (this.state.switch === "") {
            return (
                <div>
                    <center>
                        {
                            this.state.title
                        }
                        <br /><br />
                        <img src={
                            this.state.imageUrl
                        }
                            alt="house "
                            width="700"
                            height="450" />
                        <br /><br />
                        description : {
                                    this.state.description
                                }
                        <br /><br />
                        price : {
                                    this.state.price
                                }
                        <br /><br />
                        startDate{" "}
                                <input className="input" type="date" name="startDate"
                                   required onChange={
                                        this.handleEventOnChange
                                    } />
                        <br /><br />
                        endDate{" "}
                                <input className="input" type="date" name="endDate"
                                    required onChange={
                                        this.handleEventOnChange
                                    } /> 
                        <br /><br />

                        feedback : 
                        {this.state.feedBack.map((feedback,i) =>(
                            <div key={i}>
                               <span>* {feedback}</span>
                            </div>
                        ))} <br />
                            <input type="submit" value="Confirm" className="submitBtn"
                                 onClick={this.onClick.bind(this)} />
                    </center>
                </div>
            )
        } else if (this.state.switch === 'purchase') {
            return (
                <div>
                    <center>
                        <Purshas startDate={this.state.startDate} endDate={this.state.endDate} />
                    </center>
                </div>
            )
        }
    }
}

export default Houses;