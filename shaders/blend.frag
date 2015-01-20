precision mediump float;

uniform sampler2D background;
uniform sampler2D foreground;

varying vec2 screenPosition;

#define BG_REPEAT 40.0
#pragma glslify: blend = require(../)

void main() {
  vec4 bgColor = texture2D(background, screenPosition * BG_REPEAT);
  vec4 fgColor = texture2D(foreground, screenPosition);

  vec3 color = blend(bgColor.rgb, fgColor.rgb);
  gl_FragColor = vec4(color, 1.0);
}