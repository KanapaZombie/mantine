import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      decimalSeparator=","
      label="Number input with a custom decimal separator"
      defaultValue={0.5}
      precision={2}
      step={0.5}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        decimalSeparator=","
        label="Number input with a custom decimal separator"
        placeholder="Decimal separator"
        defaultValue={0.5}
        precision={2}
        step={0.5}
      />
    </div>
  );
}

export const decimalSeparator: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
