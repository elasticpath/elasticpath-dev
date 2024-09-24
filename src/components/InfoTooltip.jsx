import React from 'react';
import { Info } from 'react-feather';

export default function InfoTooltip({ label }) {
  return (
    <span style={{ verticalAlign: 'middle' }}>
      <EPToolTip variant="primary" label={label} kind="inline">
        <Info />
      </EPToolTip>
    </span>
  );
}
