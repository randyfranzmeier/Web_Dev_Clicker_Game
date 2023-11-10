import React from 'react';
export const JelloContext = React.createContext( {
    points: 0,
    clickRate: 1,
    numClicks: 0,
    itemsLeft: 8,
    isGameDone: false,
    numAchievements: 0,
} );

//export const JelloContext = React.createContext(Jello);