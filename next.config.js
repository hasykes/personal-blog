const nextConfig = {
    target:"serverless",
    webpack: function(config){
        config.moudle.rules.push({
            test:/\.md$/,
            use:"raw-loader",
        });
        return config;
    }
};

module.exports = nextConfig;