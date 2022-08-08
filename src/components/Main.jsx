import React from 'react'

function Main(props){
    const {name, total, isAmazing, fruit}= props
    return (
        <main>
            {/* <h1> Hello {props.name} </h1> */}
            <h1> Hello {name}</h1>
        </main>
    )
}

export default Main;