import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import state, {addPost, updateNewPostText} from "./redux/state";

test('renders learn react link', () => {
  const { getByText } = render(<App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
  />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
