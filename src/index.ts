import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Does it change right away?';
  greetUser(name);
  document.body.style.backgroundColor = 'lightblue';
});
