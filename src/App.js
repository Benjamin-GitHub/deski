import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { HelmetMeta } from './HelmetMeta';
import './App.css';

const App = () => (
  <Switch>
		<Route path="/" exact>
      <HelmetMeta />
			<Home />
		</Route>
		{/* <Route path="/about/this/site">
			<About />
		</Route> */}
	</Switch>
)
  


export default App;
