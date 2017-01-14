
const getDefaultState = () => (
  {
    value: 'thing is not yet done...',
  }
);

const handleDoThing = (state) => {
  const myVar = 'Hello!';
  return {
    ...state,
    value: `${myVar} Thing is done!`,
  };
};

export default {
  handleDoThing,
  getDefaultState,
};
