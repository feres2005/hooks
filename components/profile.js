import React from 'react'


const Profile = (props)=> {

    return (<div style={{border:"5px solid black", backgroundColor:"white", color:"black", width:"400px"}}>
        <img style={{height:"75px"}} src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg" alt="..." />
        <h1>Name: {props.name} </h1>
    <h2>age : {props.age}</h2>
        <p> description :  {props.description} </p>
    </div>)
}
export default Profile