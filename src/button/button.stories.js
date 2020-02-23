import '../../app/assets/styles.css';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Button',
  decorators: [withA11y],
};

export const withText = () => '<button class="btn">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};
