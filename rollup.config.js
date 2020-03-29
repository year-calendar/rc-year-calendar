import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss';
import { uglify } from "rollup-plugin-uglify";
import pkg from "./package.json";

var defaultConfig = {
  input: './src/rc-year-calendar.jsx',
  plugins: [
    nodeResolve({
      jsnext: true,
      extensions: [".js", ".jsx"]
    }),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs(),
    postcss()
  ],
  external: Object.keys(pkg.peerDependencies)
};

export default [
  // CJS
  {
    ...defaultConfig,
    output: {
      file: "./dist/rc-year-calendar.js",
      format: "cjs"
    },
  },
  {
    input: './dist/rc-year-calendar.js',
    output: {
      file: './dist/rc-year-calendar.min.js',
      format: "cjs"
    },
    plugins: [uglify()]
  },

  // UMD
  {
    ...defaultConfig,
    output: {
      file: "./dist/rc-year-calendar.umd.js",
      format: "umd",
      name: "Calendar",
      globals: {
        react: "React",
        "prop-types": "PropTypes"
      }
    },
  },
  {
    input: './dist/rc-year-calendar.umd.js',
    output: {
      file: './dist/rc-year-calendar.umd.min.js',
      format: "umd"
    },
    plugins: [uglify()]
  }
];