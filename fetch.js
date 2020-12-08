const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url = `${proxyUrl}http://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur`;
const request = new Request(url);

async function getDateTime() {
  let url = "http://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderDateTime() {
  let html = "";
  let dateTime = await getDateTime();
  let rawDateTime = dateTime.datetime;
  let formattedDate = rawDateTime.match(/(\d{4}-\d{2}-\d{2})/);
  let formattedTime = rawDateTime.match(/(\d{2}:\d{2}:\d{2})/);
  let htmlSegment = `<div class="time-text">
                          <h1>${formattedTime[0]}</h1>
                      </div>
                      <div class="date-text">
                          <h1>${formattedDate[0]}</h1>
                      </div>`;

  html += htmlSegment;

  let container = document.querySelector(".site-body-container");
  container.innerHTML = html;
}

var t = setInterval(renderDateTime, 1000);
