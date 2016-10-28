// this line of code sets up your canvas
var r = new Rune({
  container: "body",
  width: 500,
  height: 400
});
// write your own code below this line

// var myGroup = r.group

var myGroup1 = r.group(80, -140);

r.rect(126, 86, 104, 104, myGroup1)
  .fill('B6A7AC');

r.rect(151, 108, 84, 84, myGroup1)
  .fill('3F3639');

r.rect(168, 121, 70, 70, myGroup1)
  .fill('1B1919');

r.rect(183, 133, 59, 59, myGroup1)
  .fill('000000');

r.rect(272, 86, 104, 104, myGroup1)
  .fill('B6A7AC');

r.rect(269, 108, 84, 84, myGroup1)
  .fill('3F3639');

r.rect(266, 121, 70, 70, myGroup1)
  .fill('1B1919');

r.rect(262, 133, 59, 59, myGroup1)
  .fill('000000');

r.rect(128, 211, 104, 104, myGroup1)
  .fill('B6A7AC');

r.rect(153, 211, 84, 84, myGroup1)
  .fill('3F3639');

r.rect(170, 211, 70, 70, myGroup1)
  .fill('1B1919');

r.rect(185, 211, 59, 59, myGroup1)
  .fill('000000');

r.rect(274, 211, 104, 104, myGroup1)
  .fill('B6A7AC');

r.rect(270, 211, 84, 84, myGroup1)
  .fill('3F3639');

r.rect(266, 211, 70, 70, myGroup1)
  .fill('1B1919');

r.rect(263, 211, 59, 59, myGroup1)
  .fill('000000');

r.draw();

r.on('update', function(){
  myGroup1.move(15, 10, true);
});

r.play();

var myGroup2 = r.group(250, 250);

r.rect(126, 86, 104, 104, myGroup2)
  .fill('B6A7AC');

r.rect(151, 108, 84, 84, myGroup2)
  .fill('3F3639');

r.rect(168, 121, 70, 70, myGroup2)
  .fill('1B1919');

r.rect(183, 133, 59, 59, myGroup2)
  .fill('000000');

r.rect(272, 86, 104, 104, myGroup2)
  .fill('B6A7AC');

r.rect(269, 108, 84, 84, myGroup2)
  .fill('3F3639');

r.rect(266, 121, 70, 70, myGroup2)
  .fill('1B1919');

r.rect(262, 133, 59, 59, myGroup2)
  .fill('000000');

r.rect(128, 211, 104, 104, myGroup2)
  .fill('B6A7AC');

r.rect(153, 211, 84, 84, myGroup2)
  .fill('3F3639');

r.rect(170, 211, 70, 70, myGroup2)
  .fill('1B1919');

r.rect(185, 211, 59, 59, myGroup2)
  .fill('000000');

r.rect(274, 211, 104, 104, myGroup2)
  .fill('B6A7AC');

r.rect(270, 211, 84, 84, myGroup2)
  .fill('3F3639');

r.rect(266, 211, 70, 70, myGroup2)
  .fill('1B1919');

r.rect(263, 211, 59, 59, myGroup2)
  .fill('000000');

  r.on('update', function(){
    myGroup2.move(-15, 10, true);
  });

r.draw();
