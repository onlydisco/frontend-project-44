#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as brainCalc from '../src/games/brain-calc-options.js';

playBrainGames(brainCalc.rules, brainCalc.options);
