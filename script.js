var gold = [209, 178, 119];
var light = [220, 220, 220];

var bg = document.getElementById("main");
var width = bg.offsetWidth;
var height = bg.offsetHeight;

two = new Two({
  type: Two.Types.canvas,
  width: width,
  height: height,
}).appendTo(bg);

var mesh = new window.Mesh(two, {
  x: 30,
  y: 30,
  width: width,
  height: height,
  resolution: 70,
});
mesh.bgColor = light;
mesh.varyBy(50);
mesh.colors = [
  new window.ColorPoint(400, 200, {
    rgb: gold,
    falloff_radius: 300,
    falloff_easing: window.Easing.flat(0.7),
  }),
];

mesh.draw();
mesh.animateVariance({
  delta: 20,
  cyclePerMS: 1000
});