import React from "react";

var problems = [];
var problem;

function get_problems() {
  fetch("https://codeforces.com/api/problemset.problems?tags=implementation")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      for (problem of json.result.problems) {
        problems.push(problem);
      }
    });
}

get_problems();

export default function Problems() {
  return (
    <div>
      <h1>Problems</h1>
      {problems.map((problems) => (
        <ul>
          <li>Contest ID: {problems["contestId"]}</li>
          <li>Name: {problems["name"]}</li>
          <li>Type: {problems["type"]}</li>
          <li>Rating: {problems["rating"]}</li>
          <li>Tags: {problems["tags"].toString()}</li>
        </ul>
      ))}
    </div>
  );
}
