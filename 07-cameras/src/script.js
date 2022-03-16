import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / sizes.width) - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper)

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height) // near and far
camera.position.z = 2
scene.add(camera)
camera.lookAt(mesh.position)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const orbitControl = new OrbitControls(camera, canvas)
orbitControl.enableDamping = true

const tick = () =>
{

    // Render
    renderer.render(scene, camera)

    // Update Orbit Control
    orbitControl.update()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()