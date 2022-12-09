var Link = {
  Setcolor: function(color){
    var alink = document.querySelectorAll('a');
    var i = 0;
    while(i < alink.length){
    alink[i].style.color = color;
i = i + 1; }
  }
}
var Body = {
  SetBackgruond: function(color){
    document.querySelector('body').style.backgroundColor= color;
  },
  Setcolor: function(color){
    document.querySelector('body').style.color= color;
  }
}
function Nightday(self){
  if(self.value === 'night'){
    Body.SetBackgruond('black');
    Body.Setcolor('white');
    self.value='day';
    Link.Setcolor('powderblue'); }
   else {
    Body.SetBackgruond('white');
    Body.Setcolor('black');
    self.value='night';
    Link.Setcolor('blue');
  }
}
