import React from 'react';
import { Button } from 'react-toolbox/lib/button';

const MyButton = (props, { store }) =>
  <Button
    raised
    primary
    label="Do Thing!"
    onClick={(e) => {
      e.preventDefault();
      store.dispatch({
        type: 'DO_THING',
      });
    }}
  />;

MyButton.contextTypes = {
  store: React.PropTypes.object,
};

export default MyButton;
