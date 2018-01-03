import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanPlugin from 'clean-webpack-plugin';
import { join, resolve } from 'path';
import configs, { dir, directory } from './.vd/project.json';
import commonConfig from './webpack.config.common';


const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if (dir === '__dirname') {
    configs.dir = __dirname;
}


export default merge.smart(commonConfig, {
    entry: {
        index: join(dir, directory.development.envName, 'index.js'),
    },
    plugins: [
        new CleanPlugin([
            join(dir, directory.production.envName, directory.production.resource, directory.production.javascript, '*.*'),
            join(dir, directory.production.envName, directory.production.resource, directory.production.style, '*.*'),
            join(dir, directory.production.envName, directory.production.resource, directory.production.asset, '*.*'),
            join(dir, directory.production.envName, '*.*'),
            join(dir, directory.build.envName, 'sprite.*'),
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: directory.production.resource + '/' + directory.production.javascript + '/' + 'commons-[hash:10].js',
        }),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // [删除]所有的注释
            comments: false,
            compress: {
                // 在 UglifyJs 删除没有用到的代码时不输出警告
                warnings: false,
                // [删除]所有的 'console' 语句
                // 还可以兼容 IE 浏览器
                drop_console: true,
                drop_debugger: true,
                // [内嵌]定义了但是只用到一次的变量
                collapse_vars: true,
                // [提取]出现多次但是没有定义或变量去引用的静态值
                reduce_vars: true,
            }
        }),
        // 性能分析
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': false,
        }),
    ],
});
