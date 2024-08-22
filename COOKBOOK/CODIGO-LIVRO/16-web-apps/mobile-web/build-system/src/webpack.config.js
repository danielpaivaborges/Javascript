import React from 'react';
  
  const Webpack.config = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Webpack.config;
  const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
