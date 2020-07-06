import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["sravan", "kumar", "reddy"];  //without keys we can use index position
        const nameList = names.map((name, index) => <h2 key={index}>{index+1} {name}</h2>);
  return <div>{nameList}</div>;

  //   const persons = [
  //     {                              //with keys we can use this
  //       id: 1,
  //       name: "sravan",
  //       age: 24,
  //       skill: "react",
  //     },
  //     {
  //       id: 2,
  //       name: "krishna",
  //       age: 24,
  //       skill: "angular",
  //     },
  //     {
  //       id: 3,
  //       name: "kumar",
  //       age: 24,
  //       skill: "native",
  //     },
  //     {
  //       id: 4,
  //       name: "reddy",
  //       age: 24,
  //       skill: "node",
  //     },
  //   ];
  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));
  //   return <div>{personList}</div>;
  // }
}

export default NameList;
