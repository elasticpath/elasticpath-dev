module.exports = function preset(context, opts = {}) {
    return {
        plugins: [
            // Using three docs plugins at the same time!
            // Assigning a unique ID for each without asking the user to do it
            ['@docusaurus/plugin-content-docs', {...opts.docs1, id: 'docs1'}],
        ],
    };
}
