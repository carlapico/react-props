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
            <h1> Hello {name || "Guest"}</h1> {/* // if we have a value for name it uses it, if not, it uses guest */}
            {name && <StudentCard student = {student} />} {/*if there is a name then it will show the student card if not it won't*/}
        </main>
    )
}

export default Main;