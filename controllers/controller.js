import penalties from '../models/penalties.js';
import teams from '../models/teams.js';

export const displayHome = (req,res) => {
    res.status(200).render('home');
};
export const displayTeams = (req,res) => {
    res.status(200).render('teams',{teams});
};
export const displayPenalties = (req,res) => {
    res.status(200).render('penalties',{penalties});
};
export const displaySingleTeam = (req,res) => {
    const team = teams.filter(t=>t.name==req.params.teamname);
    console.log(team);
    res.status(200).render('teaminfo',{team});
};
export const displaySinglePenalty = (req,res) => {
    const penalty = penalties.filter(p=>p.name==req.params.penaltyname);
    console.log(penalty);
    res.status(200).render('penaltyinfo',{penalty});
};