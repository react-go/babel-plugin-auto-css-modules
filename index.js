/**
 * Refer https://github.com/umijs/umi/blob/master/packages/babel-plugin-auto-css-modules
 */
const { extname } = require('path');

const CSS_FILE_EXTENSIONS = ['.css'];

module.exports = () => {
  return {
    visitor: {
      ImportDeclaration(path, { opts }) {
        const { specifiers, source } = path.node;
        const { value } = source;
        if (
          specifiers.length > 0
          && (opts.extensions || CSS_FILE_EXTENSIONS).includes(extname(value))
        ) {
          source.value = `${value}?${ opts.flag || 'css_modules'}`;
        }
      },
    },
  };
};