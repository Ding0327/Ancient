$(document).ready(function () {
  setTimeout(function () {
    $(".loading-wrapper").fadeOut(500);
  }, 3000);
});
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
//------------------------------------
//滑動離開頂部時就取消at_top的class
$(window).scroll(function(e){
  if ($(window).scrollTop()<=0)
    $(".navbar,.explore").addClass("at_top");
  else
    $(".navbar,.explore").removeClass("at_top");
});
//緩慢滑動
$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
//-----------------------------------------
//按鈕-協尋
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close1")[0];
var nav = document.getElementById("nav");
var body = document.getElementsByTagName("body")[0];
var top = document.getElementById("toTop");
btn.onclick = function() {
  modal.style.display = "block";
  nav.style.display= "none";
  body.style.overflow = "hidden";
}
span.onclick = function() {
  modal.style.display = "none";
  nav.style.display= "block";
  body.style.overflow = "auto";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//-------------------------------------
//按鈕-連署
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
  nav.style.display= "none";
  body.style.overflow = "hidden";
}
span2.onclick = function() {
  modal2.style.display = "none";
  nav.style.display= "block";
  body.style.overflow = "auto";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//團隊modal
var modal_ding = document.getElementById("myModal_ding");
var ding = document.getElementById("ding");
var span_ding = document.getElementsByClassName("close_ding")[0];
ding.onclick = function() {
  modal_ding.style.display = "block";
  nav.style.display= "none";
  body.style.overflow = "hidden";
}
span_ding.onclick = function() {
  modal_ding.style.display = "none";
  nav.style.display= "block";
  body.style.overflow = "auto";
}
var modal_xue = document.getElementById("myModal_xue");
var xue = document.getElementById("xue");
var span_xue = document.getElementsByClassName("close_xue")[0];
xue.onclick = function() {
  modal_xue.style.display = "block";
  nav.style.display= "none";
  body.style.overflow = "hidden";
}
span_xue.onclick = function() {
  modal_xue.style.display = "none";
  nav.style.display= "block";
  body.style.overflow = "auto";
}
var modal_yeh = document.getElementById("myModal_yeh");
var yeh = document.getElementById("yeh");
var span_yeh = document.getElementsByClassName("close_yeh")[0];
yeh.onclick = function() {
  modal_yeh.style.display = "block";
  nav.style.display= "none";
  body.style.overflow = "hidden";
}
span_yeh.onclick = function() {
  modal_yeh.style.display = "none";
  nav.style.display= "block";
  body.style.overflow = "auto";
}
var modal_chen = document.getElementById("myModal_chen");
var chen = document.getElementById("chen");
var span_chen = document.getElementsByClassName("close_chen")[0];
chen.onclick = function() {
  modal_chen.style.display = "block";
  nav.style.display= "none";
  body.style.overflow = "hidden";
}
span_chen.onclick = function() {
  modal_chen.style.display = "none";
  nav.style.display= "block";
  body.style.overflow = "auto";
}
var modal_liu = document.getElementById("myModal_liu");
var liu = document.getElementById("liu");
var span_liu = document.getElementsByClassName("close_liu")[0];
liu.onclick = function() {
  modal_liu.style.display = "block";
  nav.style.display= "none";
  body.style.overflow = "hidden";
}
span_liu.onclick = function() {
  modal_liu.style.display = "none";
  nav.style.display= "block";
  body.style.overflow = "auto";
}
//特色
var modal_oucuo = document.getElementById("myModal_oucuo");
var oucuo = document.getElementById("oucuo");
var span_oucuo = document.getElementsByClassName("close_oucuo")[0];
oucuo.onclick = function() {
  modal_oucuo.style.display = "block";
  nav.style.display= "none";
  body.style.overflow= "hidden";
}
span_oucuo.onclick = function() {
  modal_oucuo.style.display = "none";
  nav.style.display= "block";
  body.style.overflow= "auto";
}
window.onclick = function(event) {
  if (event.target == modal_oucuo) {
    span_oucuo.style.display = "none";
  }
}
var modal_anchi = document.getElementById("myModal_anchi");
var anchi = document.getElementById("anchi");
var span_anchi = document.getElementsByClassName("close_anchi")[0];
var body = document.getElementsByTagName("body")[0];
anchi.onclick = function() {
  modal_anchi.style.display = "block";
  nav.style.display= "none";
  body.style.overflow= "hidden";
}
span_anchi.onclick = function() {
  modal_anchi.style.display = "none";
  nav.style.display= "block";
  body.style.overflow= "auto";
}
window.onclick = function(event) {
  if (event.target == modal_anchi) {
    span_anchi.style.display = "none";
  }
}
var modal_north = document.getElementById("myModal_north");
var north = document.getElementById("north");
var span_north = document.getElementsByClassName("close_north")[0];
var body = document.getElementsByTagName("body")[0];
north.onclick = function() {
  modal_north.style.display = "block";
  nav.style.display= "none";
  body.style.overflow= "hidden";
}
span_north.onclick = function() {
  modal_north.style.display = "none";
  nav.style.display= "block";
  body.style.overflow= "auto";
}
window.onclick = function(event) {
  if (event.target == modal_north) {
    span_north.style.display = "none";
  }
}
var modal_south = document.getElementById("myModal_south");
var south = document.getElementById("south");
var span_south = document.getElementsByClassName("close_south")[0];
var body = document.getElementsByTagName("body")[0];
south.onclick = function() {
  modal_south.style.display = "block";
  nav.style.display= "none";
  body.style.overflow= "hidden";
}
span_south.onclick = function() {
  modal_south.style.display = "none";
  nav.style.display= "block";
  body.style.overflow= "auto";
}
window.onclick = function(event) {
  if (event.target == modal_south) {
    span_south.style.display = "none";
  }
}
//youtube自動關閉
$('.close1').click(function(){ //.close為關閉鈕的class或id
  $('.youtube_player_iframe').each(function(){ //.youtube_player_iframe為iframe的class或id
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});
$('.close2').click(function(){ //.close為關閉鈕的class或id
  $('.youtube_player_iframe2').each(function(){ //.youtube_player_iframe為iframe的class或id
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});

// var s = skrollr.init();