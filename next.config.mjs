/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   webpack: (config) => {
      config.watchOptions = {
         ignored: ["**/node_modules", "**/.git", "C:/pagefile.sys", "C:/swapfile.sys", "C:/hiberfil.sys", "C:/DumpStack.log.tmp"],
      };
      return config;
   },
};

export default nextConfig;
