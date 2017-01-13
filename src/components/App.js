//this Component is used on every page and loads the other components

import  React, {PropTypes} from 'react';
import Header from './common/Header';
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default  App;
