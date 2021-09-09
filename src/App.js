import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import { EconomicContextProvider } from './EconomicContext';
import {FashionContextProvider} from './FashionContext';
import { NewsContextProvider } from './NewsContext';
import {SportsContextProvider} from './SportsContext';
import {TechContextProvider } from './TechContext';

import EconomicsScreen from './screens/EconomicsScreen';
import FashionScreen from './screens/FashionScreen';
import HomeScreen from './screens/HomeScreen';
import SportsScreen from './screens/SportsScreen';
import TechScreen from './screens/TechScreen';

function App() {
  return (
    <NewsContextProvider>
    <TechContextProvider>
    <EconomicContextProvider>
    <SportsContextProvider>
    <FashionContextProvider>
      <Router>
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/tech" component={TechScreen}/>
            <Route path="/fashion" component={FashionScreen}/>
            <Route path="/sports" component={SportsScreen}/>
            <Route path="economics" component={EconomicsScreen}/>
          </Switch>
      </Router>
    </FashionContextProvider>
    </SportsContextProvider>
    </EconomicContextProvider>
    </TechContextProvider> 
    </NewsContextProvider>
  );
}

export default App;
