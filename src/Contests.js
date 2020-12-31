import React from "react";
import { seconds_to_date } from "./UtilityFunctions";

var contests = [];
var contest;

function get_contests() {
  fetch("https://codeforces.com/api/contest.list?gym=true")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      for (contest of json.result) {
        contests.push(contest);
      }
    });
}

get_contests();

export default function Contests() {
  return (
    <div>
      <h1>Contests</h1>
      {contests.map((result) => (
        <ul>
          <li>ID: {result["id"]}</li>
          <li>Name: {result["name"]}</li>
          <li>Type: {result["type"]}</li>
          <li>Phase: {result["phase"]}</li>
          <li>Prepared By: {result["preparedBy"]}</li>
          <li>Website URL: {result["websiteUrl"]}</li>
          <li>Frozen: {result["frozen"]}</li>
          <li>Duration: {result["durationSeconds"] / 3600} hours</li>
          <li>Start Time: {seconds_to_date(result["startTimeSeconds"])}</li>
          <li>Difficulty: {result["difficulty"]}</li>
          <li>Description: {result["description"]}</li>
        </ul>
      ))}
    </div>
  );
}
