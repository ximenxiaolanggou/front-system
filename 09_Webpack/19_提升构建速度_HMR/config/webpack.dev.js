// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口
    // 相对路径和绝对路径都行
    entry: "./src/main.js",
    // 输出
    output: {
        // path: 文件输出目录，必须是绝对路径
        // path.resolve()方法返回一个绝对路径
        // __dirname 当前文件的文件夹绝对路径
        path: undefined, // 开发模式没有输出，不需要指定输出目录
        // filename: 输出文件名
        filename: "static/js/main.js",
        // clean: true, // 自动将上次打包目录资源清空
    },
    // 加载器
    module: {
        rules: [
            // 处理css资源 loader
            {
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左(从下往上)
                use: [
                   'style-loader',
                    'css-loader'
                ]
            },
            // 处理less资源 loader
            {
                test: /\.less$/,
                // use 数组里面 Loader 执行顺序是从右到左(从下往上)
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // 处理sass | scss资源
            {
                test: /\.s[ac]ss$/,
                // use 数组里面 Loader 执行顺序是从右到左(从下往上)
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 处理styl资源
            {
                test: /\.styl$/,
                // use 数组里面 Loader 执行顺序是从右到左(从下往上)
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            // 图片处理
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator: {
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:8][ext][query]
                    // [hash:8]: hash值取8位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename: "static/imgs/[hash:8][ext][query]",
                },
            },
            // 其他资源处理
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: "static/media/[hash:8][ext][query]"
                }
            },
            // babel 设置
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules代码不编译
                loader: "babel-loader",
            },
        ],
    },
    // 插件
    plugins: [
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "src"),
        }),
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
        hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）
    },
    // 模式
    mode: "development", // 开发模式
    devtool: "cheap-module-source-map"
};
