import componentsImg from '../assets/components.png';
import propsImg from '../assets/config.png';
import jsxImg from '../assets/jsx-ui.png';
import stateImg from '../assets/state-mgmt.png';

const coreConcepts = {
  components: {
    id: 0,
    image: componentsImg,
    title: 'Components',
    slug: 'components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
      code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },

  jsx: {
    id: 1,
    image: jsxImg,
    title: 'JSX',
    slug: 'jsx',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
      code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    id: 2,
    image: propsImg,
    title: 'Props',
    slug: 'props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
      code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    id: 3,
    image: stateImg,
    title: 'State',
    slug: 'state',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
      code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};

export default coreConcepts
