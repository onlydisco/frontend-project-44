#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as gcd from '../src/games/gcd.js';

playBrainGames(gcd.rules, gcd.getRound);
