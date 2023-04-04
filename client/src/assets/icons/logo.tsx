import React from "react";

import { SVGProps } from "./svg.types";

export default function LogoIcon({
  width = 48,
  height = 48,
  className = "",
  color = "#000",
  ...otherProps
}: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      id="movie"
      fill="#fff"
      className={className}
      {...otherProps}
    >
      <rect width={width} height={height} rx="10.144" ry="10.144" />
      <path
        fill={color}
        d="m 21.5,15.97603 c -4.687001,0 -8.5,3.813 -8.5,8.5 0,4.687 3.812999,8.5 8.5,8.5 0.134999,0 0.26639,-0.01353 0.40039,-0.01953 0.034,0.007 0.06461,0.01953 0.09961,0.01953 l 4.5,0 c 3.584001,0 6.5,-2.916 6.5,-6.5 l 0,-1 0,-3 0,-3 c 0,-1.378 1.121,-2.5 2.5,-2.5 0.276001,0 0.5,-0.224 0.5,-0.5 0,-0.276 -0.223999,-0.5 -0.5,-0.5 -1.93,0 -3.5,1.57 -3.5,3.5 l 0,3 0,3 0,1 c 0,3.033 -2.468,5.5 -5.5,5.5 l -1.009766,0 c 2.68,-1.432 4.509766,-4.255 4.509766,-7.5 0,-4.687 -3.813001,-8.5 -8.5,-8.5 z m 0,1 c 4.136,0 7.5,3.364 7.5,7.5 0,4.136 -3.364,7.5 -7.5,7.5 -4.136,0 -7.5,-3.364 -7.5,-7.5 0,-4.136 3.364,-7.5 7.5,-7.5 z m 0,1 c -1.103001,0 -2,0.897 -2,2 0,1.103 0.896999,2 2,2 1.103,0 2,-0.897 2,-2 0,-1.103 -0.897,-2 -2,-2 z m 0,1 c 0.551999,0 1,0.449 1,1 0,0.551 -0.448001,1 -1,1 -0.552,0 -1,-0.449 -1,-1 0,-0.551 0.448,-1 1,-1 z m -4.072266,1.298828 c -0.130266,0.01011 -0.260172,0.03406 -0.388672,0.07031 -0.515,0.145 -0.942078,0.479312 -1.205078,0.945312 -0.54,0.962 -0.197328,2.182656 0.763672,2.722656 0.303999,0.171 0.637563,0.259766 0.976562,0.259766 0.182,0 0.362968,-0.02617 0.542968,-0.07617 0.514,-0.145 0.941125,-0.479312 1.203125,-0.945312 0.263,-0.466 0.328547,-1.004532 0.185547,-1.519532 -0.145,-0.514 -0.481265,-0.941125 -0.947265,-1.203125 -0.34875,-0.196499 -0.740063,-0.284233 -1.13086,-0.253905 z m 8.146484,0 c -0.390937,-0.03047 -0.78211,0.05741 -1.130859,0.253906 -0.466001,0.262 -0.803266,0.688125 -0.947266,1.203125 -0.143999,0.514 -0.07941,1.053532 0.183594,1.519532 0.262,0.466 0.689125,0.800312 1.203125,0.945312 0.18,0.05 0.360968,0.07617 0.542969,0.07617 0.338,0 0.672562,-0.08781 0.976562,-0.257813 0.961,-0.54 1.305625,-1.761609 0.765625,-2.724609 -0.262,-0.466 -0.690078,-0.800312 -1.205078,-0.945312 -0.128749,-0.0365 -0.25836,-0.06016 -0.388672,-0.07031 z m -7.996093,0.996094 c 0.169,0 0.337281,0.04391 0.488281,0.128906 0.233,0.131 0.400656,0.343563 0.472656,0.601563 0.072,0.257 0.04116,0.526765 -0.08984,0.759765 -0.131,0.233 -0.345516,0.400656 -0.603516,0.472656 -0.255,0.07 -0.524812,0.0392 -0.757812,-0.0918 -0.48,-0.27 -0.651813,-0.881328 -0.382813,-1.361328 0.131,-0.233001 0.345516,-0.400657 0.603516,-0.472657 0.09,-0.025 0.179531,-0.03711 0.269531,-0.03711 z m 7.84375,0 c 0.091,0 0.180531,0.01211 0.269531,0.03711 0.258,0.072 0.472515,0.239656 0.603515,0.472657 0.270001,0.480999 0.09819,1.093281 -0.382812,1.363281 -0.233,0.13 -0.505765,0.160843 -0.759766,0.08984 -0.258,-0.072 -0.470562,-0.239656 -0.601562,-0.472656 -0.131,-0.233 -0.161843,-0.502765 -0.08984,-0.759765 0.071,-0.257 0.238656,-0.470563 0.472656,-0.601563 0.151001,-0.085 0.319281,-0.128906 0.488281,-0.128906 z M 21.5,22.97603 c -0.827,0 -1.5,0.673 -1.5,1.5 0,0.827 0.673,1.5 1.5,1.5 0.826999,0 1.5,-0.673 1.5,-1.5 0,-0.827 -0.673001,-1.5 -1.5,-1.5 z m 0,1 c 0.274999,0 0.5,0.224 0.5,0.5 0,0.276 -0.225001,0.5 -0.5,0.5 -0.275,0 -0.5,-0.224 -0.5,-0.5 0,-0.276 0.225,-0.5 0.5,-0.5 z m -3.773438,0.708984 c -0.39061,-0.03033 -0.778657,0.05741 -1.128906,0.253907 -0.961,0.54 -1.305625,1.759656 -0.765625,2.722656 0.262,0.466 0.690078,0.802266 1.205078,0.947265 0.178999,0.05 0.360016,0.07422 0.541016,0.07422 0.338999,0 0.675516,-0.08681 0.978515,-0.257812 0.466001,-0.262 0.803265,-0.689125 0.947266,-1.203125 0.143999,-0.516 0.07941,-1.055485 -0.183594,-1.521485 -0.262,-0.466 -0.689125,-0.800312 -1.203125,-0.945312 -0.129001,-0.03625 -0.260421,-0.0602 -0.390625,-0.07031 z m 7.544922,0.002 c -0.130109,0.01009 -0.260172,0.03261 -0.388672,0.06836 -0.513999,0.145 -0.941125,0.479312 -1.203125,0.945312 -0.262999,0.466 -0.328547,1.004532 -0.185547,1.519532 0.145001,0.514 0.481265,0.942125 0.947266,1.203125 0.304,0.171 0.638516,0.257812 0.978515,0.257812 0.181,0 0.362015,-0.02422 0.541016,-0.07422 0.515,-0.145 0.942079,-0.479312 1.205078,-0.945312 0.54,-0.962 0.197328,-2.182656 -0.763672,-2.722656 -0.35025,-0.19725 -0.740532,-0.282235 -1.130859,-0.251953 z m 0.152344,0.992187 c 0.168999,0 0.33728,0.04391 0.488281,0.128906 0.481,0.272 0.651812,0.883282 0.382812,1.363281 -0.131,0.233001 -0.345516,0.400657 -0.603515,0.472657 -0.257,0.07 -0.526765,0.0392 -0.759766,-0.0918 -0.232999,-0.131 -0.400657,-0.343563 -0.472656,-0.601563 -0.072,-0.257 -0.0392,-0.526765 0.0918,-0.759765 0.131,-0.233 0.343563,-0.40261 0.601562,-0.47461 0.089,-0.025 0.180484,-0.03711 0.271484,-0.03711 z m -7.84961,0.002 c 0.091,0 0.182484,0.01211 0.271485,0.03711 0.257999,0.072 0.472515,0.239656 0.603515,0.472656 0.131,0.233 0.161844,0.502765 0.08984,0.759765 -0.071,0.257 -0.238657,0.470563 -0.472657,0.601563 -0.232,0.13 -0.502766,0.162797 -0.759766,0.0918 -0.258,-0.072 -0.472515,-0.239656 -0.603515,-0.472657 -0.27,-0.481 -0.09623,-1.093281 0.384765,-1.363281 0.151,-0.085 0.317329,-0.126953 0.486329,-0.126953 z M 21.5,26.97603 c -1.103001,0 -2,0.897 -2,2 0,1.103 0.896999,2 2,2 1.103,0 2,-0.897 2,-2 0,-1.103 -0.897,-2 -2,-2 z m 0,1 c 0.551999,0 1,0.449 1,1 0,0.551 -0.448001,1 -1,1 -0.552,0 -1,-0.449 -1,-1 0,-0.551 0.448,-1 1,-1 z"
      />
    </svg>
  );
}
