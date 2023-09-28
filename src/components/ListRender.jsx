import React, { useState } from 'react'

function ListRender() {
    const [list] = useState(["Matheus", "Pedro", "Josias"])
    const [users] = useState([
        {id: 1, name: "Matheus", age: 22},
        {id: 2, name: "Josias", age: 27},
        {id: 3, name: "Pedro", age: 19}
    ])
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                <li key={i}>{item}</li> 
            ))}
            </ul>
            <ul>
                {users.map((users) => (
                    <li key={users.id}>
                        {users.name} - {users.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender