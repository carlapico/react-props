import React from 'react'
import StudentCard from './StudentCard';

const student =  {
    name: 'Khali Gopaul',
    age: 37,
    id: 'r64j83',
    term: 'Su22'
}

// function Main(props){
//     const {name, total, isAmazing, fruit}= props
//     return (
//         <main>
//             {/* <h1> Hello {props.name} </h1> */}
//             <h1> Hello {name}</h1>
//         </main>
//     )
// }

//same as 

function Main({name}){
    return (
        <main>
            <h1> Hello {name}</h1>
            <StudentCard student = {student} />
        </main>
    )
}
export default Main;