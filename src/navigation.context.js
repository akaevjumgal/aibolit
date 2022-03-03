import { createContext } from "react";

const initialState = {
  navigation: {
    links: ['ЗАПИСАТЬСЯ НА ПРИЕМ', 'ТЕРАПИЯ В НАШЕЙ КЛИНИКЕ'],
    title: 'Title',
  },
  setNavigation: () => null,
}

const NavigationContext = createContext(initialState);

export default NavigationContext