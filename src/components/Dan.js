import React, { Component } from 'react';


class Dan extends Component {
    state = {
        name: "Dan",
        age: 33,
        location: "Dearborn"
      };

    render() { 
        return (
            <div>
                <p>This is a test component!!!</p>
                <p>{this.state.name}</p>
                <div>Hello this is a div tag...</div>
                <p>{this.state.age}</p>
                <p>{this.state.location}</p>
            </div>
          );
    }
}
 
export default Dan;