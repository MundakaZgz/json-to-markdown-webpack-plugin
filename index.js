function JsonToMarkdownWP(options) {

}

JsonToMarkdownWP.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Hello from JsonToMarkdownWP plugin');
    });
};

module.exports = JsonToMarkdownWP;
