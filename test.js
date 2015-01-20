//get a shader
var glslify = require('glslify')
var createShader = glslify({
    fragment: './shaders/blend.frag',
    vertex: './shaders/blend.vert'
})

//create our WebGL test example
var context = require('./gl-blend-example')({
    shader: createShader,
    width: 512,
    height: 512
})

//add to DOM
require('domready')(function() {
    document.body.style.margin = '0'
    document.body.appendChild(context.canvas)
})