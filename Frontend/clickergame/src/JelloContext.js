/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * The purpose of this file is to store
 * properties in an object that need to be
 * shared across components. This eliminates
 * the need to use prop drilling. It also 
 * better encapsulates my code.
 */
import React from 'react';//need React

//here I am creating and exporting React's context api
export const JelloContext = React.createContext( { 
    points: 0, 
    clickRate: 1,
    numClicks: 0,
    itemsLeft: 8,
    isGameDone: false,
    numAchievements: 0,
} );
