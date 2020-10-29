import React from 'react';
import {MDBInputGroup , MDBContainer} from "mdbreact";



class HomePage extends React.Component {

  render() {
    return(
        <>
            <h3>Welcome to Cozy hysas!</h3>
            <MDBContainer>
                <MDBInputGroup containerClassName="mb-3" prepend="@" hint="Username" />
                <MDBInputGroup containerClassName="mb-3" append="@example.com" hint="Recipient's username" />
                <MDBInputGroup
                    label="Your vanity URL"
                    containerClassName="mb-3"
                    prepend="https://example.com/users/"
                    id="basic-url"
                />
                <MDBInputGroup containerClassName="mb-3" prepend="$" append=".00" />
                <MDBInputGroup prepend="With textarea" type="textarea" />
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


