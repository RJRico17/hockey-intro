import penalties from '../models/penalties.js';
import teams from '../models/teams.js';
import rules from '../models/rules.js';
import leagues from '../models/leagues.js';

export const displayHome = (req,res) => {
    res.status(200).render('home');
};
export const displayAllTeams = (req,res) => {
    const leagueteams = teams;
    res.status(200).render('teams',{leagueteams});
}
export const displayTeams = (req,res) => {
    let leagueteams = teams;
    if (req.params.league=="CHL") {
        leagueteams = teams.filter(t=>t.league=="WHL"||t.league=="OHL"||t.league=="QMJHL");
    }
    else {
        leagueteams = teams.filter(t=>t.league==req.params.league);
    }
    const league = leagues.filter(l=>l.name==req.params.league);
    res.status(200).render('teams',{leagueteams,league});
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
export const displayRules = (req,res) => {
    res.status(200).render('rules',{rules});
};
export const displaySingleRule = (req,res) => {
    const rule = rules.filter(r=>r.rule==req.params.rulename);
    res.status(200).render('ruleinfo',{rule});
};
export const displayLeagues = (req,res) => {
    res.status(200).render('leagues',{leagues});
};