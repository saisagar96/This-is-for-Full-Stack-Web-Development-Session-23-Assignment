import React, { Component } from 'react';
import {Search} from './search-bar'
import Emplist from './emplist'

class App extends Component {
    constructor(props){
        super(props);
        this.emp=[{
            name:'pawan',
            age:12
        },
        {
            name:'manish',
            age : 11
        },
        {
            name:'jagan',
            age
        }]
        this.state={emp:this.emp};
        this.filterResults=this.filterResults.bind(this);
    }

    filterResults(val)
    {
        if(this.state)
        {
            let filt=[];
            filt.push(
                this.emp.find(e=>{
                    return e.age==val
                })
            );
            this.setState({emp:filt});
        }
    }

    render() {
        return (
            <div className="App">
                <Search filterResults={this.filterResults}/>
                <Emplist emp={this.state.emp}/>
            </div>
        );
    }
}
export default App;