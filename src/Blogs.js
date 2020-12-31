import React from "react";
import { tag_remover, seconds_to_date } from "./UtilityFunctions";

var blog = {};
var comments = [];
var comment;
var tags = [];

function get_blog() {
  fetch("https://codeforces.com/api/blogEntry.view?blogEntryId=79")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      blog = json["result"];
      tags = blog["tags"].toString();
      //tags = tags_str.toString().substring(0, tags_str.length-1).split(',');
    });
}
get_blog();

function get_blog_comments() {
  fetch("https://codeforces.com/api/blogEntry.comments?blogEntryId=79")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      for (comment of json.result) {
        comments.push(comment);
      }
    });
}

get_blog_comments();

export default function Blog() {
  return (
    <div>
      <h1>{tag_remover(blog["title"])}</h1>
      <ul>
        <li>Blog Id: {blog["id"]}</li>
        <li>Posted On: {seconds_to_date(blog["creationTimeSeconds"])}</li>
        <li>Author: {blog["authorHandle"]}</li>
        <li>Language: {blog["locale"]}</li>
        <li>Rating: {blog["rating"]}</li>
        <li>Tags: {tags}</li>
      </ul>
      <h1>Comments</h1>
      {comments.map((result) => (
        <ul>
          <li>Comment ID: {result["id"]}</li>
          <li>Commentator Handle: {result["commentatorHandle"]}</li>
          <li>Language: {result["locale"]}</li>
          <li>Text: {tag_remover(result["text"])}</li>
        </ul>
      ))}
    </div>
  );
}
