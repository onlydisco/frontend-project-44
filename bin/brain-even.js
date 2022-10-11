#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as brainEven from '../src/games/brain-even-options.js';

playBrainGames(brainEven.rules, brainEven.options);
