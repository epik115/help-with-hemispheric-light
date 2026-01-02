import { Engine,
        Scene,
        Vector3,
         } 
from "@babylonjs/core";

import {HemisphericLight} from "@babylonjs/core/Lights/hemisphericLight";

const canvas = document.getElementById('renderCanvas');
const engine = new Engine(canvas, true);
const createScene = () =>{
    const scene = new Scene(engine);

    scene.createDefaultCamera(true, true, true);
    scene.HemisphericLight('light1', new Vector3(1, 1, 0), scene);
// const box = MeshBuilder.CreateBox('box',{size:2},scene);
// const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 4, 6, new Vector3.Zero, scene);
// camera.setTarget(Vector3.Zero);
// camera.attachControl(canvas, true);
// box.color3 = new Color3(1,0,0);
//const boxMaterial = new StandardMaterial('boxMaterial', scene);
// box.material = boxMaterial;
// const ground = MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

    return scene;
}
const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});