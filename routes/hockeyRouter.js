import {Router} from 'express';
import { displayHome,displayPenalties,displaySinglePenalty,displaySingleTeam,displayTeams } from '../controllers/controller.js';

const router = Router();

router.post('/search',displayPenalties);
router.get('/home',displayHome);
router.get('/penalties',displayPenalties);
router.get('/penalties/:penaltyname',displaySinglePenalty);
router.get('/teams',displayTeams);
router.get('/teams/:teamname',displaySingleTeam);

export default router;