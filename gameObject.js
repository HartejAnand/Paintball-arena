AFRAME.registerComponent("boxes", {
  schema: {
    height: { type: "number", default: 3 },
    width: { type: "number", default: 3 },
    depth: { type: "number", default: 3 },
  },
  init: function () {
    for (var i = 0; i < 20; i++) {

      var box = document.createElement("a-entity");
      box.setAttribute("id", "box" + i); 

      posX = Math.random()*100 -50;
      posY = 2;
      posZ =Math.random()*100 -50;

      position = {x: posX, y: posY, z: posZ};
      box.setAttribute("position", position);

      box.setAttribute("geometry", {
          primitive: "box",
          height: 10,
          width: Math.random()*10 +1,
          depth: 0.1,
      });

      box.setAttribute("material", {
          src: "./baseBox.png",
          repeat: "1 1 1",
      });

     box.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }


    for (var i = 0; i < 20; i++) {

      var box = document.createElement("a-entity");
      box.setAttribute("id", "box" + i); 

      posX = Math.random()*100 -50;
      posY = 2;
      posZ =Math.random()*100 -50;

      position = {x: posX, y: posY, z: posZ};
      box.setAttribute("position", position);

      box.setAttribute("geometry", {
          primitive: "box",
          height: 10,
          width: 0.1,
          depth: Math.random()*10 +1
      });

      box.setAttribute("material", {
          src: "./baseBox.png",
          repeat: "1 1 1",
      });

     box.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }
  },
});