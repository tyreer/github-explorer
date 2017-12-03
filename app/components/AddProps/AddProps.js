import React from 'react';

export default function AddProps(WrappedComponent, addedProps) {
  return props => (
    <WrappedComponent
      addedProps={addedProps}
      {...props}
    />
  );
}
