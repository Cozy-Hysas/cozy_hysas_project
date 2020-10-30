import React, { useState } from 'react';
import { MDBContainer, MDBInput }from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";


class HomePage extends React.Component {

  render() {
    const [startDate, setStartDate] = useState(new Date());
    return(
        <>
            <h3>Welcome to Cozy hysas!</h3>

            

            <MDBContainer>
      
                <MDBInput label="Address: Where are you going? " outline size="lg" />
                
                
                <DatePicker selected={startdate} onChange={date => setStartDate(date)} />
                


            </MDBContainer>
        </>
    )
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


