module.exports = {
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs",
    "@storybook/addon-contexts/register"
  ],
  stories: ["../src/stories/*.stories.(tsx|mdx)"]
};
