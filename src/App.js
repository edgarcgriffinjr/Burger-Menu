import Burger from './components/Nav/nav'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Burger />
        <Switch>
          <Route path = '/' />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
