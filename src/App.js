import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//    <WelcomeComponent name="Kofi " />
//   );
// }

// class WelcomeComponent extends React.Component {
//   render(){
//     return  <h1>{name} is awesome, react works!!!!</h1>;
//   }
// }
// export default App;

function AppA() {
  return (<WelcomeComponent name="Kofi" />) ;
}

class WelcomeComponent extends React.Component(){
  render(){
    return <h1>{this.props.name} is awesome !!!</h1> ;
  }
}