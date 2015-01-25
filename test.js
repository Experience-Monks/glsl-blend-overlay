var test = require('tape')
var Fuzzy = require('test-fuzzy-array')

test('overlay blend mode', function(t) {
    //get a shader
    var glslify = require('glslify')
    var shader = glslify({
        fragment: './shaders/test.frag',
        vertex: './shaders/test.vert'
    })

    //compares input color with output
    var draw = require('gl-shader-output')({
        shader: shader
    })

    //fuzzy compare with vec3 uniform named 'value'
    var almostEqual = Fuzzy(t, 0.01)
    var compare = function(background, foreground, expected, msg) {
        var vec3 = draw({ 
            background: background,
            foreground: foreground
        }).slice(0, 3)
        return almostEqual(vec3, expected, msg)
    }

    compare([0.25, 0.55, 1.0], [0.5, 0.25, 0.75], [ 0.25, 0.33, 1 ])
    compare([0.65, 0.55, 1.0], [0.5, 0.25, 0.75], [ 0.65, 0.33, 1 ])
    t.end()
})