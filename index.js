const { props } = require("./props");

module.exports = {
  rules: {
    "html-no-invalid-prop": {
      create: function(context) {
        return {
          JSXElement(node) {
            const elementName = node.openingElement.name.name;
            if (!elementName) {
              return;
            }
            const firstChar = elementName[0];

            if (
              firstChar !== firstChar.toLowerCase() ||
              elementName !== "div"
            ) {
              return;
            }

            const attributes = node.openingElement.attributes;

            attributes.forEach((attribute) => {
              if (!attribute.name) {
                return;
              }
              if (
                attribute.name &&
                attribute.name.name &&
                !props[elementName].includes(attribute.name.name)
              ) {
                context.report({
                  node,
                  data: {
                    value: attribute.name.name,
                  },
                  message: '"{{value}}" is an invalid property',
                });
              }
            });
          },
        };
      },
    },
  },
};
