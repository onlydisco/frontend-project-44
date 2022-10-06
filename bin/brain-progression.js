#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as brainProgression from '../games/brain-progression-options.js';

playBrainGames(brainProgression.rules, brainProgression.options);
