class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Brand:"Ford",
    model:"Mustang",
    color:"Red",
    year: 1964
      // add variables here
    };
  }
  render() {
    return ( 
      <div>
        <h1>My Ford{this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}
        </p>
      </div>
      // render variables here
    );
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));


