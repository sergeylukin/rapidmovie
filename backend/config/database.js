module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'rapidmovie-postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'rapidmovie'),
        username: env('DATABASE_USERNAME', 'rapidmovie'),
        password: env('DATABASE_PASSWORD', 'rapidmovie'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
