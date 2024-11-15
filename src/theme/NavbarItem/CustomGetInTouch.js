// src/theme/NavbarItem/CustomUTMButton.js
import React from 'react';
import GetInTouch from '../../components/GetInTouch';

export default function CustomUTMButton({ defaultHref, label }) {
  return <GetInTouch defaultHref={defaultHref}>{label}</GetInTouch>;
}
