import React from 'react'

const student =  {
    name: 'Khali Gopaul',
    age: 37,
    id: 'r64j83',
    term: 'Su22'
}

function StudentCard ({student}) {
    return (
        <section>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Id: {student.id}</p>
            <p>Term: {student.term}</p>
        </section>
    )
}

export default StudentCard