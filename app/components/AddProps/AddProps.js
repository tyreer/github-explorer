import React from 'react';

export default function AddProps(WrappedComponent, props) {
  return () => (<WrappedComponent {...props} />);
}
