import React from "react";
import {Link} from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1> Plurasight Admin </h1>
        <p>Reactm Redux and Reac Router in ES6 for ultra resp web apps </p>
        <Link to="about" className="btn btn-primary btn-lg"> Learn more </Link>
      </div>

    );
  }
}

export default HomePage;
