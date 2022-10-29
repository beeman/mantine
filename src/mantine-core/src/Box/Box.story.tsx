import React from 'react';
import { Box } from './Box';

export default { title: 'Box' };

export function SystemProps() {
  return (
    <div style={{ padding: 40 }}>
      <Box
        bg={{
          base: 'red',
          xs: 'pink.5',
          sm: '#e5e5e5',
        }}
        pl={{ base: 30, xs: 300 }}
        pt="xl"
      >
        Some box
      </Box>
    </div>
  );
}