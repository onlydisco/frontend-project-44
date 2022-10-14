#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as calc from '../src/games/calc.js';

playBrainGames(calc.rules, calc.getRound);
