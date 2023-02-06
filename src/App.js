// import './App.css';
import Header from "./views/Header"
import { LoginView } from "./views/LoginView";
import { Home } from "./views/Home";
import { ContentDetails } from "./components/contentDetails.jsx";
import Error404View from "./views/Error404View";
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import "./styles.css"

function App() {
  return (
    <Router>
		<div className="App">
			<Header/>
			{/* <LoginView/> */}
			<Switch >
				<Route exact path="/" component={LoginView} />
				<Route exact path='/ingreso' component={LoginView} />
				<Route exact path="/categories" component={Home} />
				<Route path="/categories/:categoryId" component={ContentDetails} />
				<Route component={Error404View} />
			</Switch >
		</div>
	</Router>
  );
}

export default App;
