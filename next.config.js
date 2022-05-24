/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET,
  },
  publicRuntimeConfig: {
    previewEnabled: process.env.UNIFORM_PREVIEW_ENABLED,
    projectId: process.env.UNIFORM_PROJECT_ID,
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET,
  },
};

module.exports = nextConfig;
