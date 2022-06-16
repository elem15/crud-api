// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    module: {
                rules: [
                    {
                        exclude: /node_modules/,
                    }
                    // {
                    //     test: /\.css$/i,
                    //     use: ["style-loader", "css-loader"],
                    // },
                    // {
                    //     test: /\.m?js$/,
                    //     exclude: /(node_modules|bower_components)/,
                    //     use: {
                    //         loader: "babel-loader",
                    //         options: {
                    //             presets: ["@babel/preset-env"]
                    //         }
                    //     }
                    // }
        
                ]
            },
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
// module.exports = {
//     mode: "production",
//     entry: {
//         index: "./src/index.js",
//     },
//     devtool: "source-map",
//     devServer: {
//         static: "./dist",
//     },
//     plugins: [
//         // new HtmlWebpackPlugin({
//         //     title: "Virtual Keyboard",
//         // }),
//     ],
//     module: {
//         rules: [
//             // {
//             //     test: /\.css$/i,
//             //     use: ["style-loader", "css-loader"],
//             // },
//             // {
//             //     test: /\.m?js$/,
//             //     exclude: /(node_modules|bower_components)/,
//             //     use: {
//             //         loader: "babel-loader",
//             //         options: {
//             //             presets: ["@babel/preset-env"]
//             //         }
//             //     }
//             // }

//         ]
//     },
//     output: {
//         filename: "bundle.js",
//         path: path.resolve(__dirname, "dist"),
//         clean: true,
//     },
// };