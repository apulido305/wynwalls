// var images = [
//   "wyn1.jpg",
//   "wyn2.jpg",
//   "wyn3.jpg",
//   "wyn4.jpg",
//   "wyn5.jpg",
//   "wyn6.jpg",
//   "wyn7.jpg",
//   "wyn8.jpg",
//   "wyn9.jpg",
//   "wyn10.jpg",
//   "wyn11.jpg",
//   "wyn12.jpg",
//   "wyn13.jpg",
//   "wyn14.jpg",
//   "wyn15.jpg"
// ];
// function getActiveDateString() {
//     var e = new Date;
//     return activeDateStringForDate(e)
// }
// function activeDateStringForDate(e) {
//     var t = new Date(e);
//     t.getHours() < 5 && (t = new Date(t.getTime() - 864e5));
//     var i = t.getFullYear().toString() + "-" + twoDigit(t.getMonth() + 1) + "-" + twoDigit(t.getDate());
//     return i
// }
// function getWeekdayName(e) {
//     var t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return t[e.getDay()]
// }
// function getMonthName(e) {
//     var t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return t[e.getMonth()]
// }
// var quoteSource = [
//   {
//     quote:
//       "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
//     author: "Francis of Assisi"
//   },
//   {
//     quote: "Believe you can and you're halfway there.",
//     author: "Theodore Roosevelt"
//   },
//   {
//     quote: "It does not matter how slowly you go as long as you do not stop.",
//     author: "Confucius"
//   },
//   {
//     quote:
//       "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
//     author: "Thomas A. Edison"
//   },
//   {
//     quote:
//       "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
//     author: "Confucius"
//   },
//   {
//     quote: "Don't watch the clock; do what it does. Keep going.",
//     author: "Sam Levenson"
//   },
//   {
//     quote:
//       "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
//     author: "Ayn Rand"
//   },
//   {
//     quote:
//       "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
//     author: "Ayn Rand"
//   },
//   {
//     quote: "Expect problems and eat them for breakfast.",
//     author: "Alfred A. Montapert"
//   },
//   {
//     quote: "Start where you are. Use what you have. Do what you can.",
//     author: "Arthur Ashe"
//   },
//   {
//     quote:
//       "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
//     author: "Samuel Beckett"
//   },
//   {
//     quote: "Be yourself; everyone else is already taken.",
//     author: "Oscar Wilde"
//   },
//   {
//     quote:
//       "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
//     author: "Albert Einstein"
//   },
//   {
//     quote:
//       "Always remember that you are absolutely unique. Just like everyone else.",
//     author: "Margaret Mead"
//   },
//   {
//     quote:
//       "Do not take life too seriously. You will never get out of it alive.",
//     author: "Elbert Hubbard"
//   },
//   {
//     quote:
//       "People who think they know everything are a great annoyance to those of us who do.",
//     author: "Isaac Asimov"
//   },
//   {
//     quote: "Procrastination is the art of keeping up with yesterday.",
//     author: "Don Marquis"
//   },
//   {
//     quote: "Get your facts first, then you can distort them as you please.",
//     author: "Mark Twain"
//   },
//   {
//     quote: "A day without sunshine is like, you know, night.",
//     author: "Steve Martin"
//   },
//   {
//     quote:
//       "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
//     author: "Ellen DeGeneres"
//   },
//   {
//     quote: "Don't sweat the petty things and don't pet the sweaty things.",
//     author: "George Carlin"
//   },
//   {
//     quote: "Always do whatever's next.",
//     author: "George Carlin"
//   },
//   {
//     quote: "Atheism is a non-prophet organization.",
//     author: "George Carlin"
//   },
//   {
//     quote:
//       "Hapiness is not something ready made. It comes from your own actions.",
//     author: "Dalai Lama"
//   }
// ];
//
// function chooseOne(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
//
// window.onload = function() {
//   var randomImage = chooseOne(images);
//   var randomQuote = chooseOne(quoteSource);
//   document.getElementById("background-image").style.backgroundImage =
//     'url("img/' + randomImage + '")';
//   document.getElementById("author").className = "move";
//   $(".real-quote").append(randomQuote["quote"]);
//   $(".move").append(randomQuote["author"]);
// };
//
// (function() {
//   'use strict';
//
//   function getDate() {
//     var date = new Date();
//     var weekday = date.getDay();
//     var month = date.getMonth();
//     var day = date.getDate();
//     var year = date.getFullYear();
//     var hour = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//
//     if (hour < 10) hour = "0" + hour;
//     if (minutes < 10) minutes = "0" + minutes;
//     if (seconds < 10) seconds = "0" + seconds;
//
//     var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//
//     var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
//     var monthColors = ["#1E90FF", "#FF69B4", "#00FFFF", "#7CFC00", "#00CED1", "#FF1493", "#00008B", "#FF7F50", "#C71585", "#FF4500", "#FFD700", "#800000"]
//
//     var ampm = " PM ";
//
//     if (hour < 12) ampm = " AM ";
//
//     if (hour > 12) hour -= 12;
//
//     var showDate = weekdayNames[weekday] + ", " + monthNames[month] + " " + day + ", " + year;
//
//     var showTime = hour + ":" + minutes + ":" + seconds + ampm;
//
//     var color = monthColors[month];
//
//     document.getElementById('date').innerHTML = showDate;
//
//     document.getElementById('time').innerHTML = showTime;
//     requestAnimationFrame(getDate);
//   }
//   getDate();
// }());


$(document).ready(function(){
  $.ajax({
    url: "https://ajax.googleapis.com/ajax/services/search/images",
    dataType: "jsonp",
    data: {
      v: "1.0",
      rsz: 8,
      hl: "pl",
      start: position,
      q: picQuery
    },
    success: function(response) {
      if (response.responseData === null) {
        alert("Sorry no more results!");
      } else {
        for (i = 0; i <= 8; i++) {
          $("#" + i).attr("src", response.responseData.results[i].unescapedUrl);
        }
      }
    }
  });
}
