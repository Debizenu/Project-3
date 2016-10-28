
var r = new Rune({
  container: "body",
  width: 500,
  height: 400
});
var myGroup1 = r.group(80, -140);

r.circle(1200, 200, 100, 100, myGroup1)
.fill('5ABA5E');

r.circle(1200, 200, 100, 100, myGroup1)
.fill('5ABA5E');

r.on('update', function(){
  myGroup1.move(15, 10, true);
});

r.play();

r.draw();
