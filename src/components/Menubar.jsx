import React from 'react';
//passing prop (name and SetName) from parent to child
//lifting up state (setName) from child to parent
function Menubar({name,setName}) {
    return  (
        <nav style={{display:'flex',justifyContent:'space-between'}}>
            <span>Menubar</span>
            {name
            ? <button onClick={() => {setName(null)}}>Logout</button>
            : <button onClick={() => {setName('Mason')}}>Login</button>
            }
            
        </nav>
    )
}

export default Menubar