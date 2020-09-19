import React,{Component} from 'react'


export default class CityAdmin extends Component{
    render(){
        return(
            <div className="container">
                <h2>Welcome city admin</h2>
                    <input type="text" name="add_area" placeholder="Add area"/>
            </div>
        )
    }
}