import React from 'react';
import { MDBContainer, MDBInput } from 'mdbreact';

import 'react-datepicker/dist/react-datepicker.css';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [], //list of houses from DB
			view: 'HomePage',
			chosenAddress: {},
			pickupDate: 0,
			returnDate: 0,
			period: 0,
			Price: 0,
		};

		this.handleEventchange = this.handleEventchange.bind(this);
	}

	handleEventchange(e) {
		var address = e.target.value;
		var currentAdress = this.state.data.filter(
			(house) => house.address === address
		);
		this.setState({
			chosenAddress: currentAdress, //list of filtered addresses from DB
		});
		console.log(currentAdress);
	}

	render() {
		return (
			<>
				<h3>Welcome to Cozy hysas!</h3>

				<MDBContainer>
					<MDBInput
						label="Address: Where are you going? "
						outline
						size="lg"
						onChange={this.handleEventchange}
					/>
					<button className="btn btn-outline-secondary">Confirm choice</button>
					{/*<DatePicker selected={startdate} onChange={date => setStartDate(date)} /> const [startDate, setStartDate] = useState(new Date());*/}
				</MDBContainer>
			</>
		);
	}
}

export default HomePage;

// return (
//
//     <div>
//         <div>
//             <h3>Welcome to Cozy hysas!</h3>
//         </div>
//         <div>
//
//         </div>
//         <MDBInputGroup
//             prepend="Search for your House here"
//             inputs={
//                 <>
//                     <MDBInput noTag type="text" hint="Where are you going?"/>
//                     <MDBCardTitle>Choose your rang of price</MDBCardTitle>
//                     <MDBRow className="my-4" center>
//                         <MDBIcon className="font-weight-bold indigo-text mr-2 mt-1" icon="minus"/>
//                         <MDBIcon className="font-weight-bold indigo-text ml-2 mt-1" icon="plus" />
//                     </MDBRow>
//                     <MDBBtn color="Grey" rounded size="sm" type="submit" className="mr-auto">
//                         Search
//                     </MDBBtn>
//                 </>
//             }
//         />
//     </div>
//
// );
