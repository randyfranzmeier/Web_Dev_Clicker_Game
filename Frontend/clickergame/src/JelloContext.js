import React from 'react';
const Jello = {
    points: 0,
    isDoubleClick: false,
    isQuadClick: false,
    isMegaClick: false,
    numClicks: 0,
    itemsLeft: 8,
}

const jelloContext = React.createContext(Jello);