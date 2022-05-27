const api_url = "https://zenquotes.io/api/random/";

async function getapi(url) {
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

getapi(api_url).then((data) => {
  let data_q = data[0]["q"];
  let data_a = data[0]["a"];
  document.getElementById("quote").innerHTML = data_q;
  document.getElementById("author").innerHTML = data_a;
});
