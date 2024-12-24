const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  // Вхідний файл для React-додатка
  entry: path.join(__dirname, "view/src", "index.js"),

  // Вихідні файли після збірки
  output: {
    path: path.resolve(__dirname, 'view/build'), // Папка, в яку будуть зберігатися зібрані файли
    filename: 'bundle.js', // Назва зібраного файлу
  },

  mode: isDevelopment ? 'development' : 'production', // Режим роботи Webpack
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Карти джерела для дебагу

  // Налаштування модулів
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Для JavaScript/React-файлів
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel для React
            plugins: isDevelopment ? ['react-refresh/babel'] : [], // Плагін для гарячого перезавантаження
          },
        },
      },
      {
        test: /\.css$/, // Для CSS-файлів
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i, // Для зображень
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'], // Розширення файлів за замовчуванням
  },

  plugins: [
    // Генерація HTML-файлу з підключеним `bundle.js`
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "view/public", "index.html"),
    }),
    // Плагін для гарячого перезавантаження в режимі розробки
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean), // Фільтрація `undefined` у масиві плагінів
  devServer: {
    port: 3000,
  },
};
