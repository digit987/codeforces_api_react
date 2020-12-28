// Thanks to https://stackoverflow.com/a/5002618
// This function attempts to return an html string with tags removed
export function tag_remover(html_string) {
  var html = html_string;
  var div = document.createElement("div");
  div.innerHTML = html;
  var text = div.textContent || div.innerText || "";
  return text;
}

// Thanks to https://stackoverflow.com/a/4611809
// This function converts seconds to date
export function seconds_to_date(seconds) {
  var timestamp = new Date(1970, 0, 1);
  timestamp.setSeconds(seconds);
  return timestamp.toString();
}
