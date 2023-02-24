// import { Component } from 'react';

// export default class AppCopi extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {};

//   requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//   };
//   setUsers = (result) => {
//     this.setState({
//       user: {
//         name: result.name,
//         gender: result.gender,
//         hair_color: result.hair_color,
//       },
//     })
  
//   }
//   myRequest = (number) => {
//     fetch(`https://swapi.dev/api/people/${number}`, this.requestOptions)
//       .then((response) => response.json())
//       .then((result) =>
//        this.setUsers(result)
//       )
//       .catch((error) => console.log('error', error));
//   };
//   componentDidMount(): void {
//     this.myRequest(5);
//   }
//   // addNewContact = (newContact) => {
//   // this.setState({con})
//   // }
//   render() {
//     return (
//       <>
//         {console.log(this.state.user.gender)
//         }
//         <table>
//           <tbody>
//             <tr>
//               <td>{}</td>
           
//             </tr>
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }
