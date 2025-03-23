const baseUrl = 'http://localhost:4200';

export const environment = {
    production: false,

    application: {
        baseUrl

      },
      apis: {
        default: {
          url: 'http://localhost:8081',
          rootNamespace: 'nove',
        },
      },
  };