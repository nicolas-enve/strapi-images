module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1ca5ea05df4d60741cd3005ca764b1d8'),
  },
});
