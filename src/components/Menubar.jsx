import React from 'react';

function Menubar() {
    return  (
        <nav style={{display:'flex',justifyContent:'space-between'}}>
            <span>Menubar</span>
            <button>Logout</button>
        </nav>
    )
}

export default Menubar