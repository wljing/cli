import { HashRouter as Router, Route } from 'react-router-dom';

const Home = () => <div>home page</div>;

export default () => {
  <Router>
    <Route path="/" exact component={Home} />
  </Router>
};