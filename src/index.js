import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';

// class WhoAmI extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       years: 26
//     } 
//     //первый способ через Bind
//     // this.nextYear = this.nextYear.bind(this);
//     // Второй способ через () = >
//     this.nextYear = () => {
//       this.setState(state => ({
//         years: ++state.years
//       }))
//     }
//   }
//   //третий способ новый  class field за пределами констурктора
//   nextYear = () => {
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }

//   // nextYear() {
    
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }
//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//       <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname - {surname} = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//   )
//   }
// }

// const All = () => {
//   return (
//     <>
//         <WhoAmI name="John" surname="Smith" link="facebook.com" />
//         <WhoAmI name="JAlexohn" surname="Smith" link="vk.com" />
//         <WhoAmI name="Freez" surname="Smith" link="facebook.com" />
//     </>
//   )
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


