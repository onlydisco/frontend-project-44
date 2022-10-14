#!/usr/bin/env node
import playBrainGames from '../src/index.js';
import * as prime from '../src/games/prime.js';

playBrainGames(prime.rules, prime.getRound);
