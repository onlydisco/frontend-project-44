#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as progression from '../src/games/progression.js';

playBrainGames(progression.rules, progression.getRound);
