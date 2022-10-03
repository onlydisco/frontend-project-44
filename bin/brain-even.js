#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as brainEven from '../games/brain-even-options.js';

playBrainGames(brainEven.rules, brainEven.options);
