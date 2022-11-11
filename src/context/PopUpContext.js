import React from 'react';

const PopUpContext = React.createContext({
    isOpen: false,
  handleChangeisOpen: (value) => {},
  handleData: (value) => {}
})

export const PopUpProvider = PopUpContext.Provider;
export const PopUpConsumer = PopUpContext.Consumer;
export default PopUpContext ;