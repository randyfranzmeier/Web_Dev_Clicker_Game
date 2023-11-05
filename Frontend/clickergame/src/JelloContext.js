import React from 'react';
export const JelloContext = React.createContext( {
    points: 0,
    isDoubleClick: false,
    isQuadClick: false,
    isMegaClick: false,
    numClicks: 0,
    itemsLeft: 8,
    isGameDone: false,
} );

//export const JelloContext = React.createContext(Jello);