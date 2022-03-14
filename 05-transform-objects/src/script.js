import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Objects
 */
const group = new THREE.Group();
scene.add(group)

const greenCubeMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00FF00})
)
greenCubeMesh.position.set(-2, 0, 0)

const redCubeMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xFF0000})
)
redCubeMesh.position.set(0, 0, 0)

const blueCubeMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x0000FF})
)
blueCubeMesh.position.set(2, 0, 0)

group.add(greenCubeMesh, redCubeMesh, blueCubeMesh)



/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(1, 1, 4)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)