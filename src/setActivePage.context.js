import { useState } from 'react';
import { createContext } from 'react';
const Activator = {
    active: '',
    setActive: (label) => null,
  }
    const CurrentClick = createContext(Activator)
    export default CurrentClick