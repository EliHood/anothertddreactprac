import React, {Component} from 'react';

export default class MyComponent extends Component{
    updateState(event){
        this.setState({
            input:event.target.value
        });
    }

    render(){
        return(
        <div>
            <input type="text" 
                    onChange={this.updateState.bind(this)} />
         </div>


        )
    }
}