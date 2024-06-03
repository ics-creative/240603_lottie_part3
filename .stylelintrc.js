module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-selector-bem-pattern",
  ],
  rules: {
    // kebab-caseを許容に
    "selector-class-pattern": null,
  },
};
