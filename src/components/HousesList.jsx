import React from "react";
import axios from "axios";


class HousesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {

        axios.get('/house').then(resp => {
            this.setState({
                data: resp.data
            });
        });
    }



    click() {
        alert('this should take me to house component')
    }


    render() {
        return (
            <div>
                {this.state.data.map((house, i) => {
                    return (
                        <div key={i}>
                            <h1 className="houseTitle" onClick={this.click.bind(this)}>{house.title}</h1>
                            <img src={house.imageUrl} alt="" onClick={this.click.bind(this)} className="houseimage" />
                            <span className="description">{house.description} </span>
                            <div className="price"><span className="housePrice">{house.price} </span> </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default HousesList;