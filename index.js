const stylelint = require("stylelint");
const ruleName = "konojunya/no-zero-unit-ident";
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected...",
});

module.exports = stylelint.createPlugin(ruleName, function () {
  return function (root, result) {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {});

    root.walkDecls((decl) => {
      const matched = decl.value.match(/(\d+)(cm|mm|Q|in|pt|pc|px)/);
      if (!matched) {
        return;
      }

      if (matched[1] === "0") {
        stylelint.utils.report({
          ruleName,
          result,
          message: messages.expected,
          node: decl,
        });
      }
    });

    if (!validOptions) {
      return;
    }
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
