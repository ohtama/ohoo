window.onload = function(){
  var object1 = document.getElementById('topimg1');
  var object2 = document.getElementById('topimg2');
  var object3 = document.getElementById('topimg3');
  var object4 = document.getElementById('topimg4');
  var object5 = document.getElementById('topimg5');
  
  window.setTimeout( rand1, 5000);
  window.setTimeout( rand2, 25000);
  window.setTimeout( rand3, 10000);
  window.setTimeout( rand4, 18000);
  window.setTimeout( rand5, 3000);


  object1.onmouseover = function(){
    this.style.zIndex = 1;
    this.style.height = 'calc(253px + 5%)';
    this.style.width  = 'calc(450px + 3%)';
  };
  object1.onmouseout = function() {
    this.style.zIndex = 0;
    this.style.height = 'calc(101px + 5%)';
    this.style.width  = 'calc(180px + 3%)';
  };
  object2.onmouseover = function(){
    this.style.zIndex = 1;
    this.style.height = 'calc(253px + 5%)';
    this.style.width  = 'calc(450px + 3%)';
  };
  object2.onmouseout = function() {
    this.style.zIndex = 0;
    this.style.height = 'calc(112px + 5%)';
    this.style.width  = 'calc(200px + 3%)';
  };
  object3.onmouseover = function(){
    this.style.zIndex = 1;
    this.style.height = 'calc(253px + 5%)';
    this.style.width  = 'calc(450px + 3%)';
  };
  object3.onmouseout = function() {
    this.style.zIndex = 0;
    this.style.height = 'calc(140px + 5%)';
    this.style.width  = 'calc(250px + 3%)';
  };
  object4.onmouseover = function(){
    this.style.zIndex = 1;
    this.style.height = 'calc(253px + 5%)';
    this.style.width  = 'calc(450px + 3%)';
  };
  object4.onmouseout = function() {
    this.style.zIndex = 0;
    this.style.height = 'calc(196px + 5%)';
    this.style.width  = 'calc(350px + 3%)';
  };
  object5.onmouseover = function(){
    this.style.zIndex = 1;
    this.style.height = 'calc(253px + 5%)';
    this.style.width  = 'calc(450px + 3%)';
  };
  object5.onmouseout = function() {
    this.style.zIndex = 0;
    this.style.height = 'calc(225px + 5%)';
    this.style.width  = 'calc(400px + 3%)';
  };

  function rand1(){
    window.setInterval( function()
    {
      var rand = Math.floor( Math.random() * 5);
      object1.style.top = calc( 8% + rand + 'px') ;
    }, 30000)
  }
  function rand2(){
    window.setInterval( function()
    {
      var rand = Math.floor( Math.random() * 5);
      object2.style.top = calc( 18% + rand + 'px');
    }, 30000)
  }
  function rand3(){
    window.setInterval( function()
    {
        var rand = Math.floor( Math.random() * 5);
      object3.style.top = calc( 28% + rand + 'px');
    }, 30000)
  }
  function rand4(){
    window.setInterval( function()
    {
      var rand = Math.floor( Math.random() * 5);
      object4.style.top = calc( 38% + rand + 'px');
    }, 30000)
  }
  function rand5(){
    window.setInterval( function()
    {
      var rand = Math.floor( Math.random() * 5);
      object5.style.top = calc( 48% + rand + 'px');
    }, 30000)
  }
}
