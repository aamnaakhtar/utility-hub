'use strict';

module.exports = function (deployTarget) {
  let ENV = {
    build: {},

    git: {
      repo: 'https://github.com/YOUR_USERNAME/utility-hub.git',
      branch: 'gh-pages',
    },

    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
