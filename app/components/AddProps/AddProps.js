import React from 'react';

export default function AddProps(WrappedComponent, addedProps) {
  return () => (
    <WrappedComponent
      addedProps={addedProps}
    />
  );
}
