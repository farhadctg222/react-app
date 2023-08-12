import React from 'react';
import Header from '../Header/Header';



const Other = () => {
  const student = [{
    name:'farhad',
    age: 20,
    class:'eight'
  },{
    name: 'rakib',
    age: 30,
    class: 'nine'
  }]
 
  return (
    <div>
    {
      student.map(list=> <Header student={list}></Header>)
    }
     
    </div>
  );
};

export default Other;