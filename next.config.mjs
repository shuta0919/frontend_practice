/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //以下を追加
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
