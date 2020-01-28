module.exports = environment => (
    require(`./webpack.${environment}.js`)
);