module.exports = {
    presets: 
            [['@babel/preset-env', {targets: {node: 'current'}}],
            ['@babel/preset-react', {runtime:'automatic'}],
    ],
  };

// const presets = [
//   [
//   "@babel/preset-env",
//   {
//   targets: {
//   edge: "17",
//   firefox: "60",
//   chrome: "67",
//   safari: "11.1",
//   },
//   useBuiltIns: "usage",
//   corejs: "3.6.4",
//   },
//   ],
//  ];

// export default { presets };

