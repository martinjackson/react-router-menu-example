module.exports = function (api) {
    api.cache(true);

    const plugins = [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-object-rest-spread",
        [ "@babel/plugin-proposal-class-properties", { "loose": true } ]
      ];

    const presets = [ "@babel/preset-env", "@babel/preset-react" ];

    return { presets, plugins };
}
