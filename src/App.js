import {  Route, BrowserRouter as Router } from 'react-router-dom';
import {HashRouter } from 'react-router-dom';
import WeatherHomeContainer from './components/containers/WeatherHomeContainer';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={WeatherHomeContainer} />
      {/* <Route path='/Followers/:username' component={FollowersContainer} /> */}
    </HashRouter>
  );
}

export default App;
