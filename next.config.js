const withInterceptStdout = require('next-intercept-stdout')

/** @type {import('next').NextConfig} */
module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
    swcMinify: true,
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text)
)
