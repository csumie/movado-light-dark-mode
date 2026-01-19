function toggleLight() {
  var body = document.getElementById("button-layout");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "light-mode";
}

function toggleDark() {
  var body = document.getElementById("button-layout");
  var currentClass = body.className;
  body.className = currentClass == "light-mode" ? "dark-mode" : "dark-mode";
}

$(".btn-group > .btn").click(function(){
  $(".btn-group > .btn").removeClass("active");
  $(this).addClass("active");
});


const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
