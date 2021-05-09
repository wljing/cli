import { HashRouter as Router, Route } from 'react-route-dom';

const Home = () => <div>home page</div>;

export default () => {
  <Router>
    <Route path="/" exact components={Home}></Route>
  </Router>
};