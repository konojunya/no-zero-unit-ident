const { messages, ruleName } = require("./");

testRule({
  plugins: ["./index.js"],
  ruleName,
  config: true,
  fix: false,

  accept: [
    {
      code: ".class { margin: 0; }",
      description: "The unit identifier does not exist.",
    },
    {
      code: ".class { margin: 10px; }",
      description: "value is 10px",
    },
  ],

  reject: [
    {
      code: ".class { margin: 0px; }",
      message: messages.expected,
      description: "It has an optional identifier.",
    },
    {
      code: ".class { margin: 0pt; }",
      message: messages.expected,
      description: "It has an optional identifier.",
    },
  ],
});
