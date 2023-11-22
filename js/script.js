window.onload =
    function() {
  var indexNavButton = document.getElementById('indexNav');
  if(indexNavButton != null) indexNavButton.onclick = gotoIndex;

  var infoNavButton = document.getElementById('infoNav');
  if(infoNavButton != null) infoNavButton.onclick = gotoInfo;

  var materialNavButton = document.getElementById('matNav');
  if(materialNavButton != null) materialNavButton.onclick = gotoMaterial;

  var collabNavButton = document.getElementById('colabNav');
  if(collabNavButton != null) collabNavButton.onclick = gotoCollab;
}

function gotoIndex() {
  window.location.replace('index.html');
}
function gotoInfo() {
  window.location.replace('informations.html');
}
function gotoMaterial() {
  window.location.replace('material.html');
}
function gotoCollab() {
  window.location.replace('collab.html');
}