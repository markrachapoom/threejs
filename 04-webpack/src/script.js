import {
    Scene,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    PerspectiveCamera,
    WebGLRenderer
} from 'three';

import './style.css';

// Scene
const scene = new Scene();

// Red Cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({color: '#fff'});
const mesh = new Mesh(geometry, material);
scene.add(mesh);

const sizes = {
    width: 400,
    height: 300
}

// Camera
const camera = new PerspectiveCamera(75, sizes.width/sizes.height) // fov + ratio w:h
camera.position.z = 2
camera.position.x = -1
camera.position.y = 1
scene.add(camera)

// Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

