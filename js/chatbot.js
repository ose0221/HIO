function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURLComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
var csrftoken = getCookir("csrftoken");

var xhr;

function chatTrain() {
  var strurl = "chattrain";
  alert(strurl);
  // return false;

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var data = xhr.responseText;

      var obj = JSON.parse(data);
      alert(obj.result);
    }
  };
  xhr.open("GET", strurl);
  xhr.setRequestHeader("X-CSRFToken", csrftoken);
  xhr.send(null);
}

function sendAsk() {
  ctext = document.getElementById("chattext").value;
  if (ctext == "") {
    document.getElementById("chattext").focus();
    return false;
  }

  addtext =
    "<div style='margin:14px 0; text-align:right'><span style='background-color:#3388cc;padding:5px 8px;border-radius:3px;'>" +
    ctext +
    "</div>";
  document.getElementById("chatbox").innerHTML += addtext;

  var strurl = "chatanswer?chattext=" + chattext;
  //alert(strurl);
  // return false;

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var data = xhr.responseText;

      var obj = JSON.parse(data);
      alert(obj.anstext);

      bottext =
        "<div style='margin:14px 0; text-align:left'><span style='background-color:#dddddd;padding:5px 8px;border-radius:3px;'>" +
        obj.anstext +
        "</span></div>";
      document.getElementById("chatbox").innerHTML += bottext;

      var mydiv = document.getElementById("chatbox");
      mydiv.scrollTop = document.getElementById("chatbox").scrollHeight;
    }
  };
  xhr.open("GET", strurl);
  xhr.setRequestHeader("X-CSRFToken", csrftoken);
  xhr.send(null);
}
