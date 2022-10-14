#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as even from '../src/games/even.js';

playBrainGames(even.rules, even.getRound);
