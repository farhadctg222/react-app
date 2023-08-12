import React from 'react';


const Header = (props) => {
   const [name,age]= props.student
    return (
        <div>
            <h1>{name}</h1>
            <h4>{age}e</h4>
        </div>
    );
};

export default Header;