let models = [];
var current;
let index = 0;
let colors = [
  [255, 255, 255],
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255],
  [255, 255, 0],
  [0, 255, 255],
  [255, 0, 255]
];
let rotseq = ':'
let stringindex = 0;

function setup() {
  ca = createCanvas(windowWidth, windowHeight, WEBGL);
  ca.position(0, 0)
  ca.style("z-index: -1");
  xplus = createButton('+');
  xplus.position(120, 120);
  xplus.size(25, 20);
  xplus.mouseClicked(changeZangleplus);
  xminus = createButton('-');
  xminus.position(90, 120);
  xminus.size(25, 20);
  xminus.mouseClicked(changeZangleminus);

  yplus = createButton('+');
  yplus.position(120, 155);
  yplus.size(25, 20);
  yplus.mouseClicked(changeXangleplus);
  yminus = createButton('-');
  yminus.position(90, 155);
  yminus.size(25, 20);
  yminus.mouseClicked(changeXangleminus);

  zplus = createButton('+');
  zplus.position(120, 190);
  zplus.size(25, 20);
  zplus.mouseClicked(changeYangleplus);
  zminus = createButton('-');
  zminus.position(90, 190);
  zminus.size(25, 20);
  zminus.mouseClicked(changeYangleminus);

  xp = createButton('+');
  xp.position(120, 15);
  xp.size(25, 20);
  xp.mouseClicked(changeZposplus);
  xm = createButton('-');
  xm.position(90, 15);
  xm.size(25, 20);
  xm.mouseClicked(changeZposminus);

  yp = createButton('+');
  yp.position(120, 50);
  yp.size(25, 20);
  yp.mouseClicked(changeXposplus);
  ym = createButton('-');
  ym.position(90, 50);
  ym.size(25, 20);
  ym.mouseClicked(changeXposminus);

  zp = createButton('+');
  zp.position(120, 85);
  zp.size(25, 20);
  zp.mouseClicked(changeYposplus);
  zm = createButton('-');
  zm.position(90, 85);
  zm.size(25, 20);
  zm.mouseClicked(changeYposminus);

  makecopy = createButton('Makecopy');
  makecopy.position(20, 225);
  makecopy.size(80, 20);
  makecopy.mouseClicked(make_copy);

  models[0] = new model(0, 0, 0, 0, 0, 0);
  index++;
  models[1] = new model(0, 0, 0, 0, 0, 0);
  ortho()

}

function draw() {
  background(0);
  orbitControl();
  for (i = 0; i <= index; i++) {
    models[i].draw_()
  }
  document.getElementById("info").innerHTML = 'Rotation' + rotseq
}

function changeXangleplus() {
  models[index].xangle -= 0.0872665;
  if (rotseq.charAt(stringindex) != 'Y') {
    stringindex++;
    rotseq = rotseq + 'Y';
  }
  document.getElementById("ry").innerHTML = 'Rotate Y: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(-models[index].xangle * 180 / PI))
}

function changeXangleminus() {
  models[index].xangle += 0.0872665;
  if (rotseq.charAt(stringindex) != 'Y') {
    stringindex++;
    rotseq = rotseq + 'Y';
  }
  document.getElementById("ry").innerHTML = 'Rotate Y: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(-models[index].xangle * 180 / PI))
}

function changeYangleplus() {
  models[index].yangle += 0.0872665;
  if (rotseq.charAt(stringindex) != 'Z') {
    stringindex++;
    rotseq = rotseq + 'Z';
  }
  document.getElementById("rz").innerHTML = 'Rotate Z: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(models[index].yangle * 180 / PI))
}

function changeYangleminus() {
  models[index].yangle -= 0.0872665;
  if (rotseq.charAt(stringindex) != 'Z') {
    stringindex++;
    rotseq = rotseq + 'Z';
  }
  document.getElementById("rz").innerHTML = 'Rotate Z: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(models[index].yangle * 180 / PI))
}

function changeZangleplus() {
  models[index].zangle -= 0.0872665;
  if (rotseq.charAt(stringindex) != 'X') {
    stringindex++;
    rotseq = rotseq + 'X';
  }
  document.getElementById("rx").innerHTML = 'Rotate X: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(-models[index].zangle * 180 / PI))
}

function changeZangleminus() {
  models[index].zangle += 0.0872665;
  if (rotseq.charAt(stringindex) != 'X') {
    stringindex++;
    rotseq = rotseq + 'X';
  }
  document.getElementById("rx").innerHTML = 'Rotate X: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(-models[index].zangle * 180 / PI))
}

function changeXposplus() {
  models[index].xpos += 20;
  document.getElementById("ty").innerHTML = 'Translate Y: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(models[index].xpos / 20))
}

function changeXposminus() {
  models[index].xpos -= 20;
  document.getElementById("ty").innerHTML = 'Translate Y: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(models[index].xpos / 20))
}

function changeYposplus() {
  models[index].ypos -= 20;
  document.getElementById("tz").innerHTML = 'Translate Z: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(-models[index].ypos / 20))
}

function changeYposminus() {
  models[index].ypos += 20;
  document.getElementById("tz").innerHTML = 'Translate Z: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(-models[index].ypos / 20))
}

function changeZposplus() {
  models[index].zpos += 20;
  document.getElementById("tx").innerHTML = 'Translate X: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(models[index].zpos / 20))
}

function changeZposminus() {
  models[index].zpos -= 20;
  document.getElementById("tx").innerHTML = 'Translate X: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ' + str(round(models[index].zpos / 20))
}

function make_copy() {
  index++;
  models[index] = new model(models[index - 1].xangle, models[index - 1].yangle, models[index - 1].zangle, models[index - 1].xpos, models[index - 1].ypos, models[index - 1].zpos)
}

class model {
  constructor(xangle_, yangle_, zangle_, xpos_, ypos_, zpos_) {
    this.xangle = xangle_;
    this.yangle = yangle_;
    this.zangle = zangle_;
    this.xpos = xpos_;
    this.ypos = ypos_;
    this.zpos = zpos_;
    this.color = colors[index];
    this.id = index;
  }
  draw_() {
    push();
    stroke(this.color)
    fill(this.color)
    translate(0, 50, 0)
    rotateY(-PI / 4);
    rotateX(-0.3622181);
    rotateY(-0.0670375);
    rotateZ(0.3622181);
    translate(this.xpos, this.ypos, this.zpos)
    for (let j = 1; j <= stringindex; j++) {
      switch (rotseq.charAt(j)) {
        case 'X':
          rotateZ(this.zangle);
          break;
        case 'Y':
          rotateX(this.xangle);
          break;
        case 'Z':
          rotateY(this.yangle);
          break;
      }
    }
    line(0, 0, 0, 0, 0, 300);
    line(0, 0, 0, 0, -300, 0);
    line(0, 0, 0, 300, 0, 0);
    stroke(80)
    box(10, 300, 50);
    pop();
  }
}