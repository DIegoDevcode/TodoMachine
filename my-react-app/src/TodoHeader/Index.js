import React, { Children } from 'react'


function TodoHeader({ Children }) {
    return (
        <header>
            {Children}
        </header>
    );  
}

export {TodoHeader};