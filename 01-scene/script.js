

// Scene (container)
const scene = new THREE.Scene();

// Create red cube mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh =new THREE. Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: 400,
    height: 300
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height) // field of view of 75 and ratio
camera.position.z = 2
camera.position.x = -1
scene.add(camera) // add camera to scene

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
