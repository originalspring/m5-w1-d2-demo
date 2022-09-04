class Football extends React.Component{
  shoot = () =>{
    alert(this);


  }
render(){
  return(
    <button onClick = {this.shoot}>Take the shoot!</button>
  );
}
}

ReactDOM.render(<Football />, document.getElementById('root'));
