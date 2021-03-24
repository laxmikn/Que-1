import React, { Component } from 'react';
import Person from './Person/Person';

class app extends Component {
  state = {
    persons:[]
  };

  render() {
     let persons = null;
    let arrayOrg = [1,2,3,4,5];
    const temp = arrayOrg;
    let newArr = [...temp, ...arrayOrg];
   console.log("output for hello || world is below");
    console.log("hello" || "world");
    console.log("output for foo and bar is below");
    console.log("foo" && "bar");

    // fizz buzz logic
    let m = [[0, 'fizz'], ['buzz', 'fizzbuzz']];
    for (let i = 0; i < 100; i++) {
      let x = +(i % 3 === 0);
      let y = +(i % 5 === 0);
      if (x + y) {
        console.log(i, m[y][x]);
      }
    }
    // IIFE
    (function () {
      let userName = "Goldman";
      
      function display(name)
      {
          alert("MyScript2.js: " + name);
      }
  
      display(userName);
    })();
    persons = (
      <div>{<Person arr={newArr} /> }</div>
    )
    return (
      <div>
        <h1> React </h1>
        {persons}
      </div> 
    );
  }
 } 

export default app;

