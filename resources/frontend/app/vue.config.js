module.exports = {
    devServer: {
        proxy: 'http://laravel.test'
    },

    // output built static files to Laravel's public dir.
    // note the "build" script in package.json needs to be modified as well.
    outputDir: '../../../public/assets/app',

    publicPath: '/assets/app/',

    // modify the location of the generated HTML file.
    indexPath: '../../../resources/views/app.blade.php',

    chainWebpack: (config) => {
        // disable webpacks default prefetch-tag to enable vue/chunk lazy-loading
        config.plugins.delete('prefetch')
    }
}
