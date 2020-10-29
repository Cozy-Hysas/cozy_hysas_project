// import React from 'react';
// import axios from 'axios';
//  class Houses extends React.Component  {
//      constructor(props) {
//          super(props);
//          this.state = {
//              data:[]
//          }

// //    this.handleChange = this.handleChange.bind(this);
//         }


//         componentDidMount(){
//             axios.get("http://localhost:3000/houses")
//             .then(response=>{
//                 this.setState({data:response.data})
//             })
          
//            }

//      render() { 
//          return (
//              <div>
//                  {
//                  this.state.data.map((data, index)=>{
//                      return (
//                          <div key={data._id} style={{backgroundImage:`url:(${data.imageurl})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
//                      <h1>{data.title}</h1>

//                      </div>
//                      )
//                  })}
//              </div>
//           );
//      }
//  }
  
//  export default Houses;
