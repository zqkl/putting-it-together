import react, { Component } from 'react';

class PersonCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    birthday = (e) => {
        this.setState({age:this.state.age += 1});
    }



    render(){
        return(
            <div>
                <h1>{this.props.lastName}{this.props.firstName}</h1>
                <p>age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthday}>Happy birthday {this.props.firstName}!!</button>
            </div>
                
        )
    }
}

export default PersonCard;