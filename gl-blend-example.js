var Texture = require('gl-texture2d')
var triangle = require('a-big-triangle')

module.exports = function create(opt) {
    //setup context & textures
    var gl = require('webgl-context')(opt)
    
    var shader = typeof opt.shader === 'function' ? opt.shader(gl) : opt.shader

    //our foreground, use a test texture for now
    var tex1 = Texture(gl, require('baboon-image').transpose(1, 0, 2))
    //our background, another test texture
    var tex0 = require('gl-checker-texture')(gl, { colors: [
        [0x50,0x50,0x50,0xff],
        [0x46,0x46,0x46,0xff]
    ]})

    //draw it to the canvas
    render(gl)

    //return the context
    return gl

    function render(gl) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)

        shader.bind()
        shader.uniforms.background = 0
        shader.uniforms.foreground = 1

        tex1.bind(1)
        tex0.bind(0)
        triangle(gl)
    }
}

    