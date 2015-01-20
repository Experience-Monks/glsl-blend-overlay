# glsl-blend-overlay

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Photoshop-like "overlay" blend mode for GLSL.

```glsl
#pragma glslify: blend = require(../)

void main() {
  vec4 bgColor = texture2D(background, vUv);
  vec4 fgColor = texture2D(foreground, vUv);

  vec3 color = blend(bgColor.rgb, fgColor.rgb);
  gl_FragColor = vec4(color, 1.0);
}
```

## Usage

[![NPM](https://nodei.co/npm/glsl-blend-overlay.png)](https://nodei.co/npm/glsl-blend-overlay/)

#### `blend(vec3 background, vec3 foreground)`

Blends background and foreground with an "overlay" blend mode. The algorithm for each channel is as follows:

```
background < 0.5 ? (2.0 * background * foreground) : (1.0 - 2.0 * (1.0 - background) * (1.0 - foreground))
```

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing).

## License

MIT. See [LICENSE.md](http://github.com/stackgl/glsl-blend-overlay/blob/master/LICENSE.md) for details.
