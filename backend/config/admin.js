module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ed0f047264e1c69aabe7e9ccd7a7308b'),
  },
});
