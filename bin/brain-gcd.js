#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as brainGcd from '../games/brain-gcd-options.js';

playBrainGames(brainGcd.rules, brainGcd.options);
