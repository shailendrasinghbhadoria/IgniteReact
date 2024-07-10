import React, { Component, useContext } from 'react'
import UserContext from '../utils/UserContext';


class UserClass extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            userInfo:{
                name:"Chotu",
                location: "Gwalior",
                company: "SLX",
                avatar_url:"https://avatars.githubusercontent.com/u/82870578"
            }
        }
        console.log("Child Constructor")
    }   

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shailendrasinghbhadoria")

        const json = await data.json()
       console.log(json)
       this.setState({
        userInfo:json
     })
    }

  render() {
    //  const {name, location} = this.props
     const {name, location, company, avatar_url} = this.state.userInfo 
     //console.log("Child Render")
     
 

    return (
        <div className='user-card'>
            <p style={{textAlign:"center"}}><img src={avatar_url} style={{maxWidth:"125px"}}/></p>
            <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
            </UserContext.Consumer>         
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h4>Company: {company}</h4>
        </div>
    )
  }
}

export default UserClass