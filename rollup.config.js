// rollup.config.js
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'

import path from 'path'

export default [
  {
    input: 'src/main.js',
    output: {
      dir: path.dirname('dist/main/bundle.js'),
      // file: 'bundle.js',
      format: 'es',
      exports: 'named',
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: 'src' // 将保留的模块放在根级别的此路径下
    },
    plugins: [
      postcss({
        plugins: []
      })
    ]
  },
  {
    input: 'src/foo.js',
    output: {
      dir: path.dirname('dist/foo/bundle.js'),
      // file: path.dirname('dist/foo/bundle.js'),
      format: 'es',
      exports: 'named',
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: 'src' // 将保留的模块放在根级别的此路径下
    },
    plugins: [
      postcss({
        plugins: []
      })
    ]
  }
]
