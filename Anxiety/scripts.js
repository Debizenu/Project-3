var r = new Rune({
  container: "body",
  width: 500,
  height: 400,
  frameRate: 5

});

var myGroup1 = r.group(80, 100);

r.circle(500, 400, 200, myGroup1)
  .fill('4F080D');

r.circle(500, 400, 150, myGroup1)
  .fill('79CFE2');

r.circle(500, 400, 100, myGroup1)
  .fill('FC031C');

r.circle(500, 400, 50, myGroup1)
  .fill('4F080D');

r.on('update', function(){
	myGroup1.move(10, 0, true);
});

r.play();

var myGroup2 = r.group(30, -50);

r.circle(1000, 800, 200, myGroup2)
  .fill('4F080D');

r.circle(1000, 800, 150, myGroup2)
  .fill('79CFE2');

r.circle(1000, 800, 100, myGroup2)
  .fill('FC031C');

r.circle(1000, 800, 50, myGroup2)
  .fill('4F080D');

r.on('update', function(){
	myGroup2.move(0, -10, true);
});

r.play();

// var r = new Rune({ frameRate: 10 })

var myGroup3 = r.group(30, -50);

r.circle(100, 80, 200, myGroup3)
  .fill('4F080D');

r.circle(100, 80, 150, myGroup3)
  .fill('79CFE2');

r.circle(100, 80, 100, myGroup3)
  .fill('FC031C');

r.circle(100, 80, 50, myGroup3)
  .fill('4F080D');

r.on('update', function(){
  myGroup3.move(0, 10, true);
});

r.play();

// var r = new Rune({ frameRate: 10 })

var myGroup4 = r.group(80, -100);

r.circle(100, 800, 200, myGroup4)
  .fill('4F080D');

r.circle(100, 800, 150, myGroup4)
  .fill('79CFE2');

r.circle(100, 800, 100, myGroup4)
  .fill('FC031C');

r.circle(100, 800, 50, myGroup4)
  .fill('4F080D');

r.on('update', function(){
  myGroup4.move(0, -15, true);
});

r.play();

// var r = new Rune({ frameRate: 10 })

var myGroup5 = r.group(30, -50);

r.circle(1000, 200, 200, myGroup5)
  .fill('4F080D');

r.circle(1000, 200, 150, myGroup5)
  .fill('79CFE2');

r.circle(1000, 200, 100, myGroup5)
  .fill('FC031C');

r.circle(1000, 200, 50, myGroup5)
  .fill('4F080D');

r.on('update', function(){
  myGroup5.move(0, 15, true);
});

r.play();

// r.draw();

// var r = new Rune({ frameRate: 10 })

var myGroup6 = r.group(80, 100);

r.circle(500, 400, 200, myGroup6)
  .fill('4F080D');

r.circle(500, 400, 150, myGroup6)
  .fill('79CFE2');

r.circle(500, 400, 100, myGroup6)
  .fill('FC031C');

r.circle(500, 400, 50, myGroup6)
  .fill('4F080D');

r.on('update', function(){
	myGroup6.move(10, 0, true);
});

r.play();

// var r = new Rune({ frameRate: 10 })

var myGroup7 = r.group(30, -50);

r.circle(1000, 800, 200, myGroup7)
  .fill('4F080D');

r.circle(1000, 800, 150, myGroup7)
  .fill('79CFE2');

r.circle(1000, 800, 100, myGroup7)
  .fill('FC031C');

r.circle(1000, 800, 50, myGroup7)
  .fill('4F080D');

r.on('update', function(){
	myGroup7.move(0, -10, true);
});

r.play();

// var r = new Rune({ frameRate: 10 })

var myGroup8 = r.group(30, -50);

r.circle(100, 80, 200, myGroup8)
  .fill('4F080D');

r.circle(100, 80, 150, myGroup8)
  .fill('79CFE2');

r.circle(100, 80, 100, myGroup8)
  .fill('FC031C');

r.circle(100, 80, 50, myGroup8)
  .fill('4F080D');

r.on('update', function(){
  myGroup8.move(0, 10, true);
});

r.play();

// var r = new Rune({ frameRate: 10 })

var myGroup9 = r.group(80, -100);

r.circle(100, 800, 200, myGroup9)
  .fill('4F080D');

r.circle(100, 800, 150, myGroup9)
  .fill('79CFE2');

r.circle(100, 800, 100, myGroup9)
  .fill('FC031C');

r.circle(100, 800, 50, myGroup9)
  .fill('4F080D');

r.on('update', function(){
  myGroup9.move(0, -15, true);
});

r.play();

// var myGroupk = r.group(30, -50);

r.circle(1000, 200, 200, myGroupk)
  .fill('4F080D');

r.circle(1000, 200, 150, myGroupk)
  .fill('79CFE2');

r.circle(1000, 200, 100, myGroupk)
  .fill('FC031C');

r.circle(1000, 200, 50, myGroupk)
  .fill('4F080D');

r.on('update', function(){
  myGroupk.move(0, 15, true);
});

r.play();

// r.draw();

// var r = new Rune({ frameRate: 10 })
