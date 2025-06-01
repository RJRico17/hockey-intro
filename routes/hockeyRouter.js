import {Router} from 'express';
import { displayHome,displayPenalties,displaySinglePenalty,displaySingleTeam,displayTeams,displayRules,displaySingleRule,displayLeagues, displayAllTeams } from '../controllers/controller.js';

const router = Router();

router.post('/search',displayPenalties);
router.get('/home',displayHome);
router.get('/leagues',displayLeagues);
router.get('/teams',displayAllTeams);
router.get('/teams/:league',displayTeams);
router.get('/teams/info/:teamname',displaySingleTeam);
router.get('/rules',displayRules);
router.get('/rules/:rulename',displaySingleRule);
router.get('/penalties',displayPenalties);
router.get('/penalties/:penaltyname',displaySinglePenalty);

export default router;