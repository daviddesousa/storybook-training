import '../../app/assets/styles.css';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Text',
  decorators: [withA11y],
};

export const Accessible = () => '<div style="padding:20px;background:black;"><p style="color:white;">Accessible - Some example text to test contrast.</p>';

export const Inaccessible = () => '<div style="padding:20px;background:red;"><p style="color:darkred;">Inaccessible - Some example text to test contrast.</p>';
