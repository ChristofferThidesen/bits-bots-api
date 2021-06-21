module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8081),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c29ae23599cb7b4be863a4f2d807b8d8"),
    },
  },
});
