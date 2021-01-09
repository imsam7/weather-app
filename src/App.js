import {  Route, BrowserRouter as Router } from 'react-router-dom';
import WeatherHomeContainer from './components/containers/WeatherHomeContainer';

function App() {
  return (
    <Router>
      <Route exact path="/" component={WeatherHomeContainer} />
      {/* <Route path='/Followers/:username' component={FollowersContainer} /> */}
    </Router>
  );
}

export default App;
