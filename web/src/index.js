import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HomePage, ErrorPage, OtherPage } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <Router>
       <Switch>
		      <Route exact path="/" component={HomePage}/>
		      <Route exact path="/error" component={ErrorPage}/>
          <Route exact path="/other" component={OtherPage}/>
          <Redirect to="/error" />
	    </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
