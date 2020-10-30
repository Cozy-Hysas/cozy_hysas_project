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
            feedBacks:"the service was good",
            startDate: "",
            endDate: "",
            switch : "",

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleEventOnChange = this.handleEventOnChange.bind(this);
    }
    handleChange(e) {
        this.setState({data: e.target.value});
    }
    handleEventOnChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({[name]: value});
    }
      
onClick() {
    this.setState({
        switch:"purchase"
    })
}



    // componentDidMount(){
    //     axios.get("http://localhost:3000/api/houses")
    //     .then(response=>{
    //         this.setState({data:response.data})
    //     })

    //    }

    render() {
        if (this.state.switch === ""){
        return (
            <div> {
                this.state.title
            }
                <br/>
                <img src={
                        this.state.imageUrl
                    }
                    alt="image url "
                    width="250"
                    height="200"/>{" "}
                <br/>
                description : {
                this.state.description
            }
                <br/>
                price : {
                this.state.price
            }
                <br/>
                startDate{" "}
                <input className="input" type="date" name="startDate"
                    onChange={
                        this.handleEventOnChange
                    }/>
                <br/>
                endDate{" "}
                <input className="input" type="date" name="endDate"
                    onChange={
                        this.handleEventOnChange
                    }/> <br/>

                    feedbacks :{this.state.feedBacks} <br/>
                    <input type="submit" value="Confirm" className="submitBtn"
            onClick={this.onClick.bind(this)} />
            </div>
        )}else if(this.state.switch==='purchase'){
            return(
                <div>
                    <Purshas  startDate={this.state.startDate} endDate={this.state.endDate} />
                </div>
            )
        }
    }
}

export default Houses;