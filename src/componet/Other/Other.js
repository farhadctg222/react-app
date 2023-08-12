import React from 'react';
import Header from '../Header/Header';


const Other = () => {
    const studernt =[{
        name: 'farhad',
        age: 20,
        classname:'eight'
      },{
        name:'rokib',
        age:30,
        classname:'nine'
      }]
    return (
        <div>
        {
          studernt.map(id=><Header studernt={id}key={id.age}></Header>)
        }
        </div>
    );
};

export default Other;