import {Router} from 'express';
import penalties from '../models/penalties.js';
import teams from '../models/teams.js';

const router = Router();

router.get('/',(req,res)=>{
    res.status(200).render('home');
})

router.get('/penalties',(req,res)=>{
    res.status(200).render('penalties',{penalties});
});

router.get('/teams',(req,res)=>{
    res.status(200).render('teams',{teams});
})

router.get('/teams/:teamname',(req,res)=>{
    const team = teams.filter(t=>t.name==req.params.teamname);
    console.log(team);
    res.status(200).render('teaminfo',{team});
})

export default router;