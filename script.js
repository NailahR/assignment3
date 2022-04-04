const changecolor1 = document.getElementById("copyright")

changecolor1.style.color = "red"



const font1 = document.getElementById("article-title")

font1.style.setProperty('font-size','3.25rem')



const newstitle = document.getElementById("latest-news")

newstitle.setAttribute('class','invert')



document.getElementById("emptyp").innerHTML = "Stay updated on the events happening in your area, from concerts and festivals to sports games!"



const eventsList = ["Bad Bunny Concert - April 3", "Miami Heat vs. Charlotte Hornets - April 5", "Miami Heat vs. Atlanta Hawks - April 8", "New Edition: The Culture Tour - April 10", "Justin Bieber Concert - April 13"]

const myList = document.querySelector("#eventslist")
myList.innerHTML = eventsList.join("<br>")



const mybutton = document.getElementById('button')
const news = document.getElementById("news-section")

mybutton.addEventListener('click', function() {
     news.classList.toggle('darkmode')
})

const button = document.querySelector('#menubutton')
const body = document.body

button.addEventListener('click', _ => {
  body.classList.toggle('offsite-is-open')
})

$("#ht-text").html("Click here to watch this unforgettable Super Bowl halftime show featuring Mary J Blige, Snoop Dog amd much more!");

$( "#target" ).click(function() { 
   $("#addContent h3").prepend("WHAT'S HAPPENING IN THE CULTURE?<br>");
});

//map
const map = L.map('map').setView([25.7814014,-80.1891577], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHNhcm1pZW50b20iLCJhIjoiY2tnMmU5eTh2MDdjcjJzbnhnM3oyMm15NSJ9.3Gf_eVrrTsUvfCbnmaqY5w'
}).addTo(map);

const marker = L.marker([25.7814014,-80.1891577]).addTo(map);

var circle = L.circle([25.7814014,-80.1891577], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

marker.bindPopup("<b>FTX Arena</b>").openPopup();

//bar chart
var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'DONDA vs CLB',
      data: [37,63]
    }],
    xaxis: {
      categories: ["DONDA","CLB"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();


