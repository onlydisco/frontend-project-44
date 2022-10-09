#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as brainPrime from '../games/brain-prime-options.js';

playBrainGames(brainPrime.rules, brainPrime.options);
