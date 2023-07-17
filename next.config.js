const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      experimental: {
        newNextLinkBehavior: false,
      },
      images: {
        unoptimized: true
      },
      env: {
        mongodb_username: 'maximilian',
        mongodb_password: '2YkcXq43KyPk0vqp',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      }
    };
  }

  return {
    reactStrictMode: true,
    experimental: {
      newNextLinkBehavior: false,
    },
    images: {
      unoptimized: true
    },
    env: {
      mongodb_username: 'maximilian',
      mongodb_password: '2YkcXq43KyPk0vqp',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    }
  };
};
