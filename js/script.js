function showHide(id) {
  var elem = $("#" + id);
  if (elem.is(":visible")) {
    elem.fadeOut("slow");
    window.location.hash = "";
  } else {
    elem.fadeIn("slow");
    window.location.hash = id;
  }
  
}