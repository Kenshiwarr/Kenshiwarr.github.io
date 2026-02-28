/* UNIT STATS */
const HP = "HP";
const HP_PERCENT = "HP%";
const DEF = "DEF";
const DEF_PERCENT = "DEF%";
const ATK = "ATK";
const ATK_PERCENT = "ATK%";
const EVA = "EVA";
const EVA_PERCENT = "EVA%";
const CRIT = "CRIT";
const CRIT_PERCENT = "CRIT%";
const HIT = "HIT";
const HIT_PERCENT = "HIT%";

const ASPD = "ASPD";
const SPD = "SPD";
const CDR = "Skill Haste";
const CDMG = "CRIT DMG";
const CDMG_RES = "CRIT DMG RES";
const DEF_PEN = "DEF Penetration";
const BARRIER_AMP = "Barrier Enhancement";
const STATUS_RES = "Status Effect RES";
const HEALED_AMP = "Incoming Healing +";
const HEALING_AMP = "Outgoing Healing +";
const SPEC_AMP = "Special Skill DMG AMP";
const ULT_AMP = "Ultimate Skill DMG AMP";

const RANGED_DMG = "Ranged DMG";
const RANGED_RES = "Ranged DMG RES";
const MELEE_DMG = "Melee DMG";
const MELEE_RES = "Melee DMG RES";
const GROUND_DMG = "Anti-Ground DMG"
const GROUND_RES = "Anti-Ground DMG RES"
const AIR_DMG = "Anti-Air DMG"
const AIR_RES = "Anti-Air DMG RES"

/* UNIT TYPE */
const COUNTER = "Counter";
const SOLDIER = "Soldier";
const MECH = "Mech";
const CO = "C.O.";
const REPLACER = "Replacer";

/* UNIT ROLE */
const STRIKER = "Striker";
const RANGER = "Ranger";
const SNIPER = "Sniper";
const DEFENDER = "Defender";
const SUPPORTER = "Supporter";
const SIEGE = "Siege"; 
const TOWER = "Tower";

const UNIT_ROLE_WITH_ADVANTAGE = [STRIKER, RANGER, SNIPER, DEFENDER]

/* GEAR SLOT TYPE */
const SLOT_WEAPON = "Weapon"
const SLOT_ARMOR = "Armor"
const SLOT_ACCESSORY = "Accessory"
const SLOT_ACCESSORY_1 = "Accessory1"
const SLOT_ACCESSORY_2 = "Accessory2"

const AVAILABLE_GEAR_ARMOR_TYPE = ['Maze','Inhibitor','Britra','Jungle','Volcano']
const AVAILABLE_GEAR_WEAPON_TYPE = ['Maze','Inhibitor','Britra','Jungle','Volcano']
const AVAILABLE_GEAR_ACCESSORY_TYPE = ['Maze','Inhibitor','Britra','Jungle','Volcano','Gordias']

const STATS_OPTION_LIST = ['HP', 'ATK', 'DEF', 'CRIT', 'HIT', 'EVA', 'SPD', 'ASPD', 'CRIT DMG', 'Skill Haste', 'HP Recovery per Sec', 'CRIT DMG RES', 'Status Effect RES', 'Incoming Healing +', 'Outgoing Healing +', 'Anti-Counter DMG', 'Anti-Soldier DMG', 'Anti-Mech DMG', 'Anti-C.O. DMG', 'Anti-Replacer DMG', 'Anti-Striker DMG', 'Anti-Defender DMG', 'Anti-Ranger DMG', 'Anti-Sniper DMG', 'Anti-Supporter DMG', 'Anti-Siege DMG', 'Anti-Tower DMG', 'Anti-Air DMG', 'Anti-Ground DMG', 'Melee DMG', 'Ranged DMG', 'Anti-Counter DMG RES', 'Anti-Soldier DMG RES', 'Anti-Mech DMG RES', 'Anti-C.O. DMG RES', 'Anti-Replacer DMG RES', 'Anti-Striker DMG RES', 'Anti-Defender DMG RES', 'Anti-Ranger DMG RES', 'Anti-Sniper DMG RES', 'Anti-Supporter DMG RES', 'Anti-Siege DMG RES', 'Anti-Tower DMG RES', 'Anti-Air DMG RES', 'Anti-Ground DMG RES', 'Melee DMG RES', 'Ranged DMG RES', 'DMG Taken RDC', 'Special Skill DMG AMP', 'Ultimate Skill DMG AMP', 'DEF Penetration', 'Special Skill DMG RDC', 'Ultimate Skill DMG RDC', 'Barrier Enhancement'];



// const GEAR_MAIN_STATS_VALUES_T7 = [ATK, HP, EVA, HIT, 399, 3476, 274, 274];
const GEAR_MAIN_STATS_VALUES_T6 = [ATK, HP, EVA, HIT, 370, 2900, 250, 250]; // don't know actually, need to check!!!

const MAZE_GEAR_SUBSTATS_VALUES_LIST_1 = [0.16];
const MAZE_ACCS_SUBSTATS_VALUES_LIST_1 = [0.176];
const MAZE_GEAR_SUBSTATS_VALUES_LIST_2 = [1480,154,81,81,0.16,0.11,0.4,0.06,0.16];
const MAZE_ACCS_SUBSTATS_VALUES_LIST_2 = [1628,170,90,90,0.176,0.121,0.44,0.066,0.176];

/* const LOYAL_GEAR_SUBSTATS_VALUES_LIST_1 = [0.16];
const DEVOTED_ACCS_SUBSTATS_VALUES_LIST_1 = [0.176];
const COURAGEOUS_GEAR_SUBSTATS_VALUES_LIST_2 = [1480,154,81,81,0.16,0.11,0.4,0.06,0.16];
const SINCERE_ACCS_SUBSTATS_VALUES_LIST_2 = [1628,170,90,90,0.176,0.121,0.44,0.066,0.176]; */

const HUMMINGBIRD_SUBSTATS_VALUES_LIST_1 = [0.12,0.12,0.045];
const HUMMINGBIRD_SUBSTATS_VALUES_LIST_2 = [81,81,81,81,0.08,0.06,0.16,0.11,0.4,0.06,0.16];

const CHALLENGER_GEAR_SUBSTATS_VALUES_LIST_1 = [0.33];
const CHALLENGER_GEAR_SUBSTATS_VALUES_LIST_2 = [1480,154,81,81,0.16,0.11,0.4,0.06,0.16];


const CHALLENGER_ACCS_SUBSTATS_VALUES_LIST_1 = [0.36];
const CHALLENGER_ACCS_SUBSTATS_VALUES_LIST_2 = [1628,170,90,90,0.176,0.121,0.44,0.066,0.176];

const GORDIAS_SUBSTATS_VALUES_LIST_1 = [0.132];
const GORDIAS_SUBSTATS_VALUES_LIST_2 = [1628,170,90,90,0.176,0.121,0.44,0.066,0.176];


const POLYMER_GEAR_SUBSTATS_VALUES_LIST_1 = [0.14];
const POLYMER_ACCS_SUBSTATS_VALUES_LIST_1 = [0.16];

const POLYMER_WEAPON_SUBSTATS_VALUES_LIST_2 = [68,68,68,68,0.08,0.06,0.14];
const POLYMER_ARMOR_SUBSTATS_VALUES_LIST_2 = [125,68,68,68,0.1,0.35,0.05,0.14];
const POLYMER_ACCS_SUBSTATS_VALUES_LIST_2 = [1480,154,81,81,0.11,0.4,0.06,0.16];

const SC_DANTE_GEAR_SUBSTATS_VALUES_LIST_1 = [0.16];
const SC_DANTE_ACCS_SUBSTATS_VALUES_LIST_1 = [0.18];

const SC_DANTE_WEAPON_SUBSTATS_VALUES_LIST_2 = [68,68,68,68,0.08,0.06,0.14];
const SC_DANTE_ARMOR_SUBSTATS_VALUES_LIST_2 = [125,68,68,68,0.1,0.35,0.05,0.14];
const SC_DANTE_ACCS_SUBSTATS_VALUES_LIST_2 = [1480,154,81,81,0.11,0.4,0.06,0.16];


const SPECTRAL_GEAR_SUBSTATS_VALUES_LIST_1 = [0.14];
const SPECTRAL_ACCS_SUBSTATS_VALUES_LIST_1 = [0.154];

const SPECTRAL_WEAPON_SUBSTATS_VALUES_LIST_2 = [0.075,0.055,0.15,0.14];
const SPECTRAL_ARMOR_SUBSTATS_VALUES_LIST_2 = [0.10,0.35,0.038,0.14];
const SPECTRAL_ACCS_SUBSTATS_VALUES_LIST_2 = [0.165,0.11,0.385,0.043,0.154];

const PHANTOM_GEAR_SUBSTATS_VALUES_LIST_1 = [0.14];
const PHANTOM_ACCS_SUBSTATS_VALUES_LIST_1 = [0.154];

const PHANTOM_WEAPON_SUBSTATS_VALUES_LIST_2 = [0.075,0.055,0.15,0.14];
const PHANTOM_ARMOR_SUBSTATS_VALUES_LIST_2 = [0.10,0.35,0.038,0.14];
const PHANTOM_ACCS_SUBSTATS_VALUES_LIST_2 = [0.165,0.11,0.385,0.043,0.154];

const INHIBITOR_GEAR_SUBSTATS_VALUES_LIST_1 = [0.04];
const INHIBITOR_ACCS_SUBSTATS_VALUES_LIST_1 = [0.05];

const INHIBITOR_GEAR_SUBSTATS_VALUES_LIST_2 = [0.16];
const INHIBITOR_ACCS_SUBSTATS_VALUES_LIST_2 = [0.176];

const BRITRA_GEAR_SUBSTATS_VALUES_LIST_1 = [36,36,0.08];
const BRITRA_ACCS_SUBSTATS_VALUES_LIST_1 = [40,40,0.088];

const BRITRA_GEAR_SUBSTATS_VALUES_LIST_2 = [0.16];
const BRITRA_ACCS_SUBSTATS_VALUES_LIST_2 = [0.176];

const SWIFT_GEAR_SUBSTATS_VALUES_LIST_1 = [0.028,0.018,0.022];
const SWIFT_ACCS_SUBSTATS_VALUES_LIST_1 = [0.031,0.02,0.024];

const SWIFT_GEAR_SUBSTATS_VALUES_LIST_2 = [0.16];
const SWIFT_ACCS_SUBSTATS_VALUES_LIST_2 = [0.176];

const JUNGLE_GEAR_SUBSTATS_VALUES_LIST_1 = [0.02,0.03,0.052];
const JUNGLE_ACCS_SUBSTATS_VALUES_LIST_1 = [0.022,0.033,0.057];

const JUNGLE_GEAR_SUBSTATS_VALUES_LIST_2 = [0.16];
const JUNGLE_ACCS_SUBSTATS_VALUES_LIST_2 = [0.176];

const VOLCANO_GEAR_SUBSTATS_VALUES_LIST_1 = [0.066,0.066,0.024];
const VOLCANO_ACCS_SUBSTATS_VALUES_LIST_1 = [0.072,0.072,0.026];

const VOLCANO_GEAR_SUBSTATS_VALUES_LIST_2 = [0.16];
const VOLCANO_ACCS_SUBSTATS_VALUES_LIST_2 = [0.176];


const INHIBITOR_LATENT_STATS_OPTION_LIST = [EVA, HP, HP_PERCENT, CDMG, CDMG_RES, CDR, SPD, STATUS_RES, RANGED_RES, MELEE_RES];
const INHIBITOR_GEAR_LATENT_STATS_VALUES_LIST = [65, 1185, 0.065, 0.128, 0.32, 0.088, 0.065, 0.048, 0.097, 0.097];
const INHIBITOR_ACCS_LATENT_STATS_VALUES_LIST = [72, 1302, 0.07, 0.142, 0.352, 0.097, 0.07, 0.053, 0.107, 0.107];

const BRITRA_LATENT_STATS_OPTION_LIST = [ATK, ATK_PERCENT, HIT, CDMG, CDMG_RES, CDR, SPD, STATUS_RES, RANGED_DMG, MELEE_DMG];
const BRITRA_GEAR_LATENT_STATS_VALUES_LIST = [123, 0.065, 65, 0.128, 0.32, 0.088, 0.065, 0.048, 0.097, 0.097];
const BRITRA_ACCS_LATENT_STATS_VALUES_LIST = [137, 0.07, 72, 0.142, 0.352, 0.097, 0.07, 0.053, 0.107, 0.107];

const SWIFT_LATENT_STATS_OPTION_LIST = [ATK, ATK_PERCENT, HP, HP_PERCENT, CDMG, CDMG_RES, CDR, SPD, ASPD, STATUS_RES];
const SWIFT_GEAR_LATENT_STATS_VALUES_LIST = [152, 0.076, 1465, 0.076, 0.15, 0.32, 0.115, 0.075, 0.063, 0.063];
const SWIFT_ACCS_LATENT_STATS_VALUES_LIST = [166, 0.083, 1598, 0.083, 0.163, 0.352, 0.125, 0.082, 0.068, 0.068];

const JUNGLE_LATENT_STATS_OPTION_LIST = [DEF, EVA, HP, HP_PERCENT, CDMG_RES, SPD, STATUS_RES, HEALED_AMP, HEALING_AMP, BARRIER_AMP];
const JUNGLE_GEAR_LATENT_STATS_VALUES_LIST = [80, 70, 1465, 0.076, 0.32, 0.063, 0.063, 0.133, 0.09, 0.163];
const JUNGLE_ACCS_LATENT_STATS_VALUES_LIST = [87, 87, 1598, 0.083, 0.352, 0.082, 0.068, 0.147, 0.099, 0.178];


const VOLCANO_LATENT_STATS_OPTION_LIST = [SPEC_AMP, ULT_AMP, ATK_PERCENT, CDMG, STATUS_RES, ASPD, DEF_PEN, "Anti-Counter DMG", "Anti-Soldier DMG", "Anti-Mech DMG"];
const VOLCANO_GEAR_LATENT_STATS_VALUES_LIST = [0.109, 0.109, 0.076, 0.15, 0.063, 0.063, 0.069, 0.128, 0.128, 0.128];
const VOLCANO_ACCS_LATENT_STATS_VALUES_LIST = [0.119, 0.119, 0.083, 0.163, 0.068, 0.068, 0.079, 0.142, 0.142, 0.142];

// units EE's
const UNITS_W_EE = ['Post-War Administration Bureau Millia Rage','Flame of Corruption Sol Badguy','Future-at-War Titan','Triaina Plan Titan','Delta Seven Kyle Wong','Fallen Hawk Rosaria le Friede','Canary Squad Laika','Kestrel Xiao Lin','ALT Squad Kim Sobin']

const MILLIA_RAGE_GEAR_STATS_VALUES_LIST_1 = [0.242];
const MILLIA_RAGE_GEAR_STATS_VALUES_LIST_2 = [0.244,0.122,0.488,0.061,0.183];

const SOL_BADGUY_GEAR_STATS_VALUES_LIST_1 = [0.052];
const SOL_BADGUY_GEAR_STATS_VALUES_LIST_2 = [0.11,0.44,0.055,0.165];

const TITAN_KYLE_GEAR_STATS_VALUES_LIST_1 = [0.121];
const TITAN_KYLE_GEAR_STATS_VALUES_LIST_2 = [0.242,0.121,0.462,0.066,0.183];

const XIAO_GEAR_STATS_VALUES_LIST_1 = [0.116];
const XIAO_GEAR_STATS_VALUES_LIST_2 = [0.242,0.121,0.462,0.066,0.183];

const ROSARIA_GEAR_STATS_VALUES_LIST_1 = [0.183];

const LAIKA_GEAR_STATS_VALUES_LIST_1 = [0.116];
const LAIKA_GEAR_STATS_VALUES_LIST_2 = [0.244,0.122,0.488,0.061,0.183];


var st_g = []


var rest = Object.values(GEARS).filter(item => item.employee_type === 'Counter');
var rest2 = Object.values(rest).filter(item => item.slot === 'Accessory');


/* const SET_HEALING_AMP = "Healing Enhancement";
const SET_AIR_DMG = "Healing Enhancment";
const SET_GROUND_DMG = "Healing Enhancment";
const SET_SPD = "Healing Enhancment";
const SET_SPEC_AMP = "Healing Enhancment";
const SET_ULT_AMP = "Healing Enhancment";
const SET_CDR_II = "Healing Enhancment";
const SET_ASPD_II = "Healing Enhancment";
const SET_HP_II = "Healing Enhancment";
const SET_BULLET = "Spectral Bullet"; */


function setRangeForSub(val, subval, ls) {
  var sv = $('#sub3formSelect option[value="'+ val +'"]').attr('subvalue');
  var lv = $('#sub3formSelect option[value="'+ val +'"]').attr('latent');
  var latentValS;

$('#subValue3').html('<span id="latentValS">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === val)) ? ls:((((Number(ls) + Number.EPSILON) * 100)).toFixed(1) + '% ')) +'</span><input value="'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === val)) ? ls:ls*100) +'" step="'+(([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === val)) ? 1:0.1)+'" min="0" max="'+ ([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === val) ? sv:((Number(sv) + Number.EPSILON) * 100).toFixed(1)) +'" type="range" class="form-range" id="range-SetLatent">')
$('#sub3formSelect option[value="'+ val +'"]').attr('latent',ls);
$('#range-SetLatent').on('change input', function() {
  
  latentValS = ([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === val)) ? Number($('#range-SetLatent').val()):(Number($('#range-SetLatent').val())/100);
  $('#latentValS').text((([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === val)) ? latentValS:(latentValS*100).toFixed(1) + '% '));
  $('#sub3formSelect option[value="'+ val +'"]').attr('latent',latentValS.toFixed(3).replace(/[.,]0+$/, ""));
});
}





var weaponIsConfirmed = false;
var armorIsConfirmed = false;
var accessory1IsConfirmed = false;
var accessory2IsConfirmed = false;

var enemy_weaponIsConfirmed = false;
var enemy_armorIsConfirmed = false;
var enemy_accessory1IsConfirmed = false;
var enemy_accessory2IsConfirmed = false;



var Cat1List = {
  "Counter": { 
      1: "Anti-Counter DMG",
      2: "Anti-Counter DMG RES",
  },
  "Soldier": { 
    1: "Anti-Soldier DMG",
    2: "Anti-Soldier DMG RES",
  },
  "Mech": { 
    1: "Anti-Mech DMG",
    2: "Anti-Mech DMG RES",
  },
  "C.O.": { 
    1: "Anti-C.O. DMG",
    2: "Anti-C.O. DMG RES",
  },
  "Replacer": { 
    1: "Anti-Replacer DMG",
    2: "Anti-Replacer DMG RES",
  },
  "Striker": { 
    1: "Anti-Striker DMG",
    2: "Anti-Striker DMG RES",
  },
  "Ranger": { 
    1: "Anti-Ranger DMG",
    2: "Anti-Ranger DMG RES",
  },
  "Sniper": { 
    1: "Anti-Sniper DMG",
    2: "Anti-Sniper DMG RES",
  },
  "Defender": { 
    1: "Anti-Defender DMG",
    2: "Anti-Defender DMG RES",
  },
  "Supporter": { 
    1: "Anti-Supporter DMG",
    2: "Anti-Supporter DMG RES",
  },
  "Siege": { 
    1: "Anti-Siege DMG",
    2: "Anti-Siege DMG RES",
  },
  "Tower": { 
    1: "Anti-Tower DMG",
    2: "Anti-Tower DMG RES",
  },
  "Ground": { 
    1: "Anti-Ground DMG",
    2: "Anti-Ground DMG RES",
  },
  "Air": { 
    1: "Anti-Air DMG",
    2: "Anti-Air DMG RES",
  },
  "Melee": { 
    1: "Melee DMG",
    2: "Melee DMG RES",
  },
  "Ranged": { 
    1: "Ranged DMG",
    2: "Ranged DMG RES",
  },
  "None": { 
    1: "All DMG",
    2: "All DMG RES",
  },
  "DMG+": "DMG-Increase Suppression",
  "DMG-": "DMG-Increase Defense",
  "DMG RES+": "DMG RES Suppression",
  "DMG RES-": "DMG RES Penetration",
  "TLRNC": "DMG TLRNC",
};

var Cat2List = {
  "DMG+": "DMG AMP",
  "DMG-": "DMG Taken RDC",
  "Spec+": "Special Skill DMG AMP",
  "Spec-": "Special Skill DMG RES",
  "Ult+": "Ultimate Skill DMG AMP",
  "Ult-": "Ultimate Skill DMG RES",
  "TLRNC": "DMG TLRNC",
};

var CAT3 = 'var cat3 = "Nobody cares about cat3"';

var GearSlot = ['Weapon','Armor','Accessory1','Accessory2'];



const GEAR_SETS_LIST_BASIC = {
  "HP": { 
      name: HP,
      set: 2,
      stat1: HP_PERCENT,
      amount: 0.1,
  },
  "DEF": { 
    name: DEF,
    set: 2,
    stat1: DEF_PERCENT,
    amount: 0.2,
  }, 
  "EVA": { 
    name: EVA,
    set: 2,
    stat1: EVA_PERCENT,
    amount: 0.2,
  }, 
  "ATK": { 
    name: ATK,
    set: 2,
    stat1: ATK_PERCENT,
    amount: 0.1,
},
  "CRIT": { 
    name: CRIT,
    set: 2,
    stat1: CRIT_PERCENT,
    amount: 0.2,
  }, 
  "HIT": { 
    name: HIT,
    set: 2,
    stat1: HIT_PERCENT,
    amount: 0.2,
  }, 
  "Anti-Striker": { 
    name: "Anti-Striker",
    set: 2,
    stat1: Cat1List["Striker"][1],
    amount: 0.2,
  },
  "Anti-Defender": { 
    name: "Anti-Defender",
    set: 2,
    stat1: Cat1List["Defender"][1],
    amount: 0.2,
  },
  "Anti-Ranger": { 
    name: "Anti-Ranger",
    set: 2,
    stat1: Cat1List["Ranger"][1],
    amount: 0.2,
  },
  "Anti-Sniper": { 
    name: "Anti-Sniper",
    set: 2,
    stat1: Cat1List["Sniper"][1],
    amount: 0.2,
  },
  "Anti-Supporter": { 
    name: "Anti-Supporter",
    set: 2,
    stat1: Cat1List["Supporter"][1],
    amount: 0.2,
  },
  "Anti-Tower": { 
    name: "Anti-Tower",
    set: 2,
    stat1: Cat1List["Tower"][1],
    amount: 0.2,
  },
  "Anti-Siege": { 
    name: "Anti-Siege",
    set: 2,
    stat1: Cat1List["Siege"][1],
    amount: 0.2,
  },
  "CRIT DMG": { 
    name: "CRIT DMG",
    set: 4,
    stat1: CDMG,
    amount: 0.4,
  },
  "Cooldown": { 
    name: "Cooldown",
    set: 4,
    stat1: CDR,
    amount: 0.3,
  },
  "ASPD": { 
    name: ASPD,
    set: 4,
    stat1: ASPD,
    amount: 0.2,
  },
};



const GEAR_SETS_LIST_SPECTRAL = {
  "Spectral Bullet": { 
      name: "Spectral Bullet",
      set: 2,
      stat1: [ATK_PERCENT, HIT_PERCENT],
      amount: [0.1,0.1]
  },
  "Spectral Gear": { 
    name: "Spectral Gear",
    set: 2,
    stat1: [ATK_PERCENT, EVA_PERCENT],
    amount: [0.1,0.1]
  },
  "Spectral Chain": { 
    name: "Spectral Chain",
    set: 2,
    stat1: [ATK_PERCENT, CRIT_PERCENT],
    amount: [0.1,0.1]
  },
  "Spectral Smite": { 
    name: "Spectral Smite",
    set: 4,
    stat1: [ATK_PERCENT, CDMG],
    amount: [0.16,0.16]
  },
  "Spectral Blaze": { 
    name: "Spectral Blaze",
    set: 4,
    stat1: [ATK_PERCENT, ASPD],
    amount: [0.16,0.08]
  },
  "Spectral Spirit": { 
    name: "Spectral Spirit",
    set: 4,
    stat1: [ATK_PERCENT, CDR],
    amount: [0.16,0.12]
  },
};

const GEAR_SETS_LIST_PHANTOM = {
  "Phantom Armor": { 
      name: "Phantom Armor",
      set: 2,
      stat1: [HP_PERCENT, DEF_PERCENT],
      amount: [0.1,0.1],
  },
    "Phantom Shaft": { 
      name: "Phantom Shaft",
      set: 2,
      stat1: [HP_PERCENT, EVA_PERCENT],
      amount: [0.1,0.1],
  },
    "Phantom Barrier": { 
      name: "Phantom Barrier",
      set: 2,
      stat1: [HP_PERCENT, BARRIER_AMP],
      amount: [0.1,0.15],
  },
    "Phantom Protection": { 
      name: "Phantom Protection",
      set: 4,
      stat1: [HP_PERCENT, CDMG_RES],
      amount: [0.16,0.16],
  },
    "Phantom Glare": { 
      name: "Phantom Glare",
      set: 4,
      stat1: [HP_PERCENT, ASPD],
      amount: [0.16,0.08],
  },
     "Phantom Soul": { 
      name: "Phantom Soul",
      set: 4,
      stat1: [HP_PERCENT, CDR],
      amount: [0.16,0.12],
  },
};

const GEAR_SETS_LIST_TRINITY = {
  "DEF Penetration": { 
    name: DEF_PEN,
    set: 2,
    stat1: DEF_PEN,
    amount: 0.15,
},
  "Anti-Air DMG": { 
    name: "Anti-Air DMG",
    set: 2,
    stat1: Cat1List["Air"][1],
    amount: 0.1,
},
  "Anti-Ground DMG": { 
    name: "Anti-Ground DMG",
    set: 2,
    stat1: Cat1List["Ground"][1],
    amount: 0.1,
},
  "SPD": { 
    name: SPD,
    set: 4,
    stat1: SPD,
    amount: 0.15,
},
  "Special Skill DMG AMP": { 
    name: SPEC_AMP,
    set: 4,
    stat1: Cat2List["Spec+"],
    amount: 0.3,
},
   "Ultimate Skill DMG AMP": { 
    name: ULT_AMP,
    set: 4,
    stat1: Cat2List["Ult+"],
    amount: 0.3,
},
   "Cooldown II": { 
    name: "Cooldown II",
    set: 2,
    stat1: CDR,
    amount: 0.12,
},
    "ASPD II": { 
    name: "ASPD II",
    set: 2,
    stat1: ASPD,
    amount: 0.08,
},
  "Status Effect RES": { 
      name: "Status Effect RES",
      set: 2,
      stat1: STATUS_RES,
      amount: 0.10,
  },
    "Incoming Healing +": { 
      name: "Incoming Healing +",
      set: 2,
      stat1: HEALED_AMP,
      amount: 0.15,
  },
    "Anti-Air DMG RES": { 
      name: "Anti-Air DMG RES",
      set: 2,
      stat1: Cat1List["Air"][2],
      amount: 0.1,
  },
    "Anti-Ground DMG RES": { 
      name: "Anti-Ground DMG RES",
      set: 2,
      stat1: Cat1List["Ground"][2],
      amount: 0.1,
  },
    "Melee DMG RES": { 
      name: "Melee DMG RES",
      set: 2,
      stat1: Cat1List["Melee"][2],
      amount: 0.15,
  },
     "Ranged DMG RES": { 
      name: "Ranged DMG RES",
      set: 2,
      stat1: Cat1List["Ranged"][2],
      amount: 0.15,
  },
     "Healing Enhancement": { 
      name: "Healing Enhancement",
      set: 2,
      stat1: HEALING_AMP,
      amount: 0.15,
  },
  "HP II": { 
    name: "HP II",
    set: 4,
    stat1: HP_PERCENT,
    amount: 0.24,
},
};

const GEAR_SETS_LIST = {
    "HP": {
        "name": "HP",
        "set": 2,
        "stat1": "HP%",
        "amount": 0.1
    },
    "DEF": {
        "name": "DEF",
        "set": 2,
        "stat1": "DEF%",
        "amount": 0.2
    },
    "EVA": {
        "name": "EVA",
        "set": 2,
        "stat1": "EVA%",
        "amount": 0.2
    },
    "ATK": {
        "name": "ATK",
        "set": 2,
        "stat1": "ATK%",
        "amount": 0.1
    },
    "CRIT": {
        "name": "CRIT",
        "set": 2,
        "stat1": "CRIT%",
        "amount": 0.2
    },
    "HIT": {
        "name": "HIT",
        "set": 2,
        "stat1": "HIT%",
        "amount": 0.2
    },
    "Anti-Striker": {
        "name": "Anti-Striker",
        "set": 2,
        "stat1": "Anti-Striker DMG",
        "amount": 0.2
    },
    "Anti-Defender": {
        "name": "Anti-Defender",
        "set": 2,
        "stat1": "Anti-Defender DMG",
        "amount": 0.2
    },
    "Anti-Ranger": {
        "name": "Anti-Ranger",
        "set": 2,
        "stat1": "Anti-Ranger DMG",
        "amount": 0.2
    },
    "Anti-Sniper": {
        "name": "Anti-Sniper",
        "set": 2,
        "stat1": "Anti-Sniper DMG",
        "amount": 0.2
    },
    "Anti-Supporter": {
        "name": "Anti-Supporter",
        "set": 2,
        "stat1": "Anti-Supporter DMG",
        "amount": 0.2
    },
    "Anti-Tower": {
        "name": "Anti-Tower",
        "set": 2,
        "stat1": "Anti-Tower DMG",
        "amount": 0.2
    },
    "Anti-Siege": {
        "name": "Anti-Siege",
        "set": 2,
        "stat1": "Anti-Siege DMG",
        "amount": 0.2
    },
    "CRIT DMG": {
        "name": "CRIT DMG",
        "set": 4,
        "stat1": "CRIT DMG",
        "amount": 0.4
    },
    "Cooldown": {
        "name": "Cooldown",
        "set": 4,
        "stat1": "Skill Haste",
        "amount": 0.3
    },
    "ASPD": {
        "name": "ASPD",
        "set": 4,
        "stat1": "ASPD",
        "amount": 0.2
    },
    "Spectral Bullet": {
        "name": "Spectral Bullet",
        "set": 2,
        "stat1": [
            "ATK%",
            "HIT%"
        ],
        "amount": [
            0.1,
            0.1
        ]
    },
    "Spectral Gear": {
        "name": "Spectral Gear",
        "set": 2,
        "stat1": [
            "ATK%",
            "EVA%"
        ],
        "amount": [
            0.1,
            0.1
        ]
    },
    "Spectral Chain": {
        "name": "Spectral Chain",
        "set": 2,
        "stat1": [
            "ATK%",
            "CRIT%"
        ],
        "amount": [
            0.1,
            0.1
        ]
    },
    "Spectral Smite": {
        "name": "Spectral Smite",
        "set": 4,
        "stat1": [
            "ATK%",
            "CRIT DMG"
        ],
        "amount": [
            0.16,
            0.16
        ]
    },
    "Spectral Blaze": {
        "name": "Spectral Blaze",
        "set": 4,
        "stat1": [
            "ATK%",
            "ASPD"
        ],
        "amount": [
            0.16,
            0.08
        ]
    },
    "Spectral Spirit": {
        "name": "Spectral Spirit",
        "set": 4,
        "stat1": [
            "ATK%",
            "Skill Haste"
        ],
        "amount": [
            0.16,
            0.12
        ]
    },
    "Phantom Armor": {
        "name": "Phantom Armor",
        "set": 2,
        "stat1": [
            "HP%",
            "DEF%"
        ],
        "amount": [
            0.1,
            0.1
        ]
    },
    "Phantom Shaft": {
        "name": "Phantom Shaft",
        "set": 2,
        "stat1": [
            "HP%",
            "EVA%"
        ],
        "amount": [
            0.1,
            0.1
        ]
    },
    "Phantom Barrier": {
        "name": "Phantom Barrier",
        "set": 2,
        "stat1": [
            "HP%",
            "Barrier Enhancement"
        ],
        "amount": [
            0.1,
            0.15
        ]
    },
    "Phantom Protection": {
        "name": "Phantom Protection",
        "set": 4,
        "stat1": [
            "HP%",
            "CRIT DMG RES"
        ],
        "amount": [
            0.16,
            0.16
        ]
    },
    "Phantom Glare": {
        "name": "Phantom Glare",
        "set": 4,
        "stat1": [
            "HP%",
            "ASPD"
        ],
        "amount": [
            0.16,
            0.08
        ]
    },
    "Phantom Soul": {
        "name": "Phantom Soul",
        "set": 4,
        "stat1": [
            "HP%",
            "Skill Haste"
        ],
        "amount": [
            0.16,
            0.12
        ]
    },
    "DEF Penetration": {
        "name": "DEF Penetration",
        "set": 2,
        "stat1": "DEF Penetration",
        "amount": 0.15
    },
    "Anti-Air DMG": {
        "name": "Anti-Air DMG",
        "set": 2,
        "stat1": "Anti-Air DMG",
        "amount": 0.1
    },
    "Anti-Ground DMG": {
        "name": "Anti-Ground DMG",
        "set": 2,
        "stat1": "Anti-Ground DMG",
        "amount": 0.1
    },
    "SPD": {
        "name": "SPD",
        "set": 4,
        "stat1": "SPD",
        "amount": 0.15
    },
    "Special Skill DMG AMP": {
        "name": "Special Skill DMG AMP",
        "set": 4,
        "stat1": "Special Skill DMG AMP",
        "amount": 0.3
    },
    "Ultimate Skill DMG AMP": {
        "name": "Ultimate Skill DMG AMP",
        "set": 4,
        "stat1": "Ultimate Skill DMG AMP",
        "amount": 0.3
    },
    "Cooldown II": {
        "name": "Cooldown II",
        "set": 2,
        "stat1": "Skill Haste",
        "amount": 0.12
    },
    "ASPD II": {
        "name": "ASPD II",
        "set": 2,
        "stat1": "ASPD",
        "amount": 0.08
    },
    "Status Effect RES": {
        "name": "Status Effect RES",
        "set": 2,
        "stat1": "Status Effect RES",
        "amount": 0.1
    },
    "Incoming Healing +": {
        "name": "Incoming Healing +",
        "set": 2,
        "stat1": "Incoming Healing +",
        "amount": 0.15
    },
    "Anti-Air DMG RES": {
        "name": "Anti-Air DMG RES",
        "set": 2,
        "stat1": "Anti-Air DMG RES",
        "amount": 0.1
    },
    "Anti-Ground DMG RES": {
        "name": "Anti-Ground DMG RES",
        "set": 2,
        "stat1": "Anti-Ground DMG RES",
        "amount": 0.1
    },
    "Melee DMG RES": {
        "name": "Melee DMG RES",
        "set": 2,
        "stat1": "Melee DMG RES",
        "amount": 0.15
    },
    "Ranged DMG RES": {
        "name": "Ranged DMG RES",
        "set": 2,
        "stat1": "Ranged DMG RES",
        "amount": 0.15
    },
    "Healing Enhancement": {
        "name": "Healing Enhancement",
        "set": 2,
        "stat1": "Outgoing Healing +",
        "amount": 0.15
    },
    "HP II": {
        "name": "HP II",
        "set": 4,
        "stat1": "HP%",
        "amount": 0.24
    }
}

/* var GearSetsListTrinity = {
  
}; */




  class Gear {
    constructor(u){
      this.name = 0;
      this.eqSlot = 0;
      this.eqTier = 0;
      this.eqSet = 0;
      this.sub1 = 0;
      this.sub2 = 0;
      this.eqIcon = 0;
      this.selectedGearData = 0;
      this.latent = 0;
      this.#eqSet_Options = 0;
      this.forUnit = u;
  }
    showMainStat() {
      console.log(`[1]name = ${this.name}`);
      console.log(`mainStat = ${this.mainStat}` + `name = ${this.name}`+ `sub1 = ${this.sub1}`+ `sub2 = ${this.sub2}`
      + `set = ${this.eqSet}`+ `tier = ${this.eqTier}`+ `icon = ${this.eqIcon}`);
      
      
    
    }

    setGear() {
      timer('setGearTimer');

      if ((this.forUnit == 0)) {
        console.log("setting for UNIT");
        $('#' + `${this.#eqSlot}` + 'Container').css('background-image',"url('"+CSS.escape(`${this.#eqIcon}`)+"')");
        $('#' + `${this.#eqSlot}` + 'Container img').attr('src','cs_gears-icons/Set Icons/Icon_Set_'+`${this.#eqSet}`+'.png');
        $('#' + `${this.#eqSlot}` + 'Container img').removeAttr('hidden');
        $('#' + `${this.#eqSlot}` + 'Container').attr('isConfirmed','true')
      } else{
        console.log("setting for TARGET");
        $('#' + `${this.#eqSlot}` + 'Container_enemy').css('background-image',"url('"+CSS.escape(`${this.#eqIcon}`)+"')");
        $('#' + `${this.#eqSlot}` + 'Container_enemy img').attr('src','cs_gears-icons/Set Icons/Icon_Set_'+`${this.#eqSet}`+'.png');
        $('#' + `${this.#eqSlot}` + 'Container_enemy img').removeAttr('hidden');
        $('#' + `${this.#eqSlot}` + 'Container_enemy').attr('isConfirmed','true')
      }

      timerEnd('setGearTimer');
    }


    removeGear() {

      let ContainerType;
      if (this.forUnit == 0) {
        ContainerType = "Container";
      } else {
        ContainerType = "Container_enemy";
      }


        $('#' + `${this.#eqSlot}` + ContainerType).css('background-image',"none");
        $('#' + `${this.#eqSlot}` + ContainerType + ' img').attr('src','');
        $('#' + `${this.#eqSlot}` + ContainerType + ' img').attr("hidden",true);
        $('#' + `${this.#eqSlot}` + ContainerType).attr('isConfirmed','false')
        $('#' + `${this.#eqSlot}` + ContainerType).attr('isExclusive','false')

    this.#selectedGearData = -1;
    this.#name = 0;
    this.#eqSlot = 0;
    this.#eqTier = 0;
    this.#eqSet = 0;
    this.#sub1 = [];
    this.#sub2 = [];
    this.#latent = [];
    this.#eqIcon = 0;
    this.#mainStat = 0;
    this.#eqSet_Options = [];
    }

    replaceGearByUnitType(GearForType, ContainerType) {
      console.time('gearUpdateTimer');
      timer('gearUpdateTimer');

      
      
      var gdata = GEARS[this.#selectedGearData];

      
      let newgear = Object.values(GEARS).filter(item => item.employee_type === GearForType && item.slot === gdata["slot"] && item.gear_name === gdata["gear_name"]);
      console.log("aas: ");
      console.log(newgear);
      console.log(gdata);
      
      
      
      var gdata_icon = newgear[0]["icon"];


/*       console.log('gdata');
      console.log(gdata);
      console.log(gdata.split(',')[4]); */
      
      
      if (gdata != newgear[0]) {
        
        this.#selectedGearData = newgear[0]["id"];
          this.#eqIcon = 'cs_gears-icons/Special Gear/'+GearForType+'/' + gdata_icon +  '.png';
          this.#mainStat = newgear[0]["main_stat"]

 if (newgear["equip_type"] !== 'Exclusive') {
          $('#' + `${this.#eqSlot}` + ContainerType).attr('isExclusive','false');
          } else {
            if (ContainerType === 'Container') {
              $('#' + `${this.#eqSlot}` + ContainerType).attr('isExclusive','true');
          } else {
              $('#' + `${this.#eqSlot}` + ContainerType).attr('isExclusive','true');
            }

          }
          $('#' + `${this.#eqSlot}` + ContainerType).css('background-image',"url('"+`${this.#eqIcon}`+"')");

      }

      //this.removeGear();

    timerEnd('gearUpdateTimer');
    console.timeEnd('gearUpdateTimer');
    }

    getAllValues() {
      var Values = [`${this.selectedGearData}`,`${this.name}`,`${this.eqSlot}`,`${this.eqTier}`,`${this.eqSet}`,`${this.sub1}`,`${this.sub2}`,`${this.latent}`,`${this.eqIcon}`,`${this.mainStat}`];

      return Values;
    }

    setAllValues(Values) {

      var gdt = Values[0].split(',');
      var gdt_stype = gdt[1];



      var setOptions;

      if (['Maze','Challenger','Inhibitor','Britra','Swift','Devoted','Polymer','Sc. Dante','Sincere','Courageous','Loyal'].indexOf(gdt_stype) > -1) {
        setOptions = GEAR_SETS_LIST_BASIC;
      } else if (gdt_stype === 'Spectral') {
        setOptions = GEAR_SETS_LIST_SPECTRAL;
      } else if (gdt_stype === 'Phantom') {
        setOptions = GEAR_SETS_LIST_PHANTOM;
      } else if (gdt_stype === 'Jungle') {
        setOptions = GEAR_SETS_LIST_TRINITY;
      } else if (gdt_stype === 'Volcano') {
        setOptions = GEAR_SETS_LIST_TRINITY;
      } else {
        setOptions = GEAR_SETS_LIST_BASIC;
      }

    this.#selectedGearData = Values[0];
    this.#name = Values[1];
    this.#eqSlot = Values[2];
    this.#eqTier = Values[3];
    this.#eqSet = Values[4];
    this.#sub1 = Values[5].split(',');
    this.#sub2 = Values[6].split(',');
    this.#latent = Values[7].split(',');
    this.#eqIcon = Values[8];
    this.#mainStat = Values[9].split(',');
    
    this.#eqSet_Options = setOptions;

    
    

    }

    getUrlValues() {
      if (this.#name != 0) {
      

      let latentVal = this.#latent;
      let url_Gear_Latent;
      if (this.#latent != ",") {
        url_Gear_Latent = BONUS_STATS_LIST.indexOf(latentVal[0]) + "_" + latentVal[1];
      } else {
        url_Gear_Latent = "";
      }

      let url_Gear_Stats_id;
      if (this.forUnit == 0) {
        url_Gear_Stats_id = total_gear_data_unit.slice(1).split('","').indexOf(this.selectedGearData);
      } else {
        url_Gear_Stats_id = total_gear_data_target.slice(1).split('","').indexOf(this.selectedGearData);
      }
      let url_Gear_Sub1 = BONUS_STATS_LIST.indexOf(this.#sub1[0]);
      let url_Gear_Sub2 = BONUS_STATS_LIST.indexOf(this.#sub2[0]);
      
      let url_Gear_Set = Object.keys(this.#eqSet_Options).indexOf(this.#eqSet);
   

      return [url_Gear_Stats_id,url_Gear_Sub1,url_Gear_Sub2,url_Gear_Latent,url_Gear_Set].toString();
    } else {
      return "";
    }
    }

    setValuesByUrl(urlGearData,searchGearData,eq_Slot) {


      let ugdt = urlGearData.split(",");

      let urlGearVal = searchGearData.split(",");

      let sub1_val = ugdt[1];
      let sub2_val = ugdt[2];
      let latent_val = ugdt[3].split('_');


      var setOptions;

      if (['Maze','Challenger','Inhibitor','Britra','Swift','Devoted','Polymer','Sc. Dante','Sincere','Courageous','Loyal'].indexOf(urlGearVal[1]) > -1) {
        setOptions = GEAR_SETS_LIST_BASIC;
      } else if (urlGearVal[1] === 'Spectral') {
        setOptions = GEAR_SETS_LIST_SPECTRAL;
      } else if (urlGearVal[1] === 'Phantom') {
        setOptions = GEAR_SETS_LIST_PHANTOM;
      } else if (urlGearVal[1] === 'Jungle') {
        setOptions = GEAR_SETS_LIST_TRINITY;
      } else if (urlGearVal[1] === 'Volcano') {
        setOptions = GEAR_SETS_LIST_TRINITY;
      } else {
        setOptions = GEAR_SETS_LIST_BASIC;
      }

      let getSubstats = this.getAvailableSubstats(urlGearVal[1],eq_Slot);
      console.log('getSubstats');
      console.log(getSubstats);

      let sc = urlGearVal.slice(6)
      let sub1Final = [];
      let sub2Final = [];

      for (let i = 0, n = STATS_OPTION_LIST.length; i < n; i++) {
        if (sc[i] !== '') {
          if (sc[i].includes('1') === true) {
            if (STATS_OPTION_LIST[i] == HP && urlGearVal[1] == "Jungle") {
              sub1Final.push(HP_PERCENT)
            } else {
              sub1Final.push(STATS_OPTION_LIST[i])
            }
          } 
          if (sc[i].includes('2') === true) {
            sub2Final.push(STATS_OPTION_LIST[i])
          }
        }
      }

        let s1f;
        let s2f;
        let sC1 = [];
        let sC2 = [];
      for (var i = 0, n = sub1Final.length; i < n; i++) {
        sC1[i] = getSubstats[0].concat(Array(Number(sub1Final.length)).fill(getSubstats[0][getSubstats[0].length-1]))[i]
       
      }
    

      for (var i = 0, n = sub2Final.length; i < n; i++) { 
        sC2[i] = getSubstats[1].concat(Array(Number(sub2Final.length)).fill(getSubstats[1][getSubstats[1].length-1]))[i]

      }
      s1f = sC1[sub1Final.indexOf(BONUS_STATS_LIST[sub1_val])];
      s2f = sC2[sub2Final.indexOf(BONUS_STATS_LIST[sub2_val])];

      let GearMainStatValues;
      if (this.forUnit == 0) {
        GearMainStatValues = GEAR_MAIN_STATS_VALUES_T7_unit;
      } else {
        GearMainStatValues = GEAR_MAIN_STATS_VALUES_T7_target;
      }

      this.#selectedGearData = searchGearData;
      this.#name = urlGearVal[1];
      this.#eqSlot = eq_Slot;
      this.#eqTier = 7;

      this.#eqSet = setOptions[Object.keys(setOptions)[Number(ugdt[4])]]['name'];
      this.#sub1 = [BONUS_STATS_LIST[sub1_val],s1f];
      this.#sub2 = [BONUS_STATS_LIST[sub2_val],s2f];
      this.#latent = [BONUS_STATS_LIST[latent_val[0]],latent_val[1]];
      this.#eqIcon =  'cs_gears-icons/Special Gear/'+urlGearVal[3]+'/' + urlGearVal[4] +  '.png';
      this.#mainStat = [urlGearVal[5],GearMainStatValues[(GearMainStatValues.length/2)+GearMainStatValues.indexOf(urlGearVal[5])]];
      
      this.#eqSet_Options = setOptions;

      


      return true;
    }

    
    gts() {



      let allgear = uggg.slice(1).split('","');
      // let allgear = total_gear_data_unit.slice(1).split('","');
      let maingearstat = 0;

      
      
      for (let i = 0, nm = allgear.length; i < nm; i++) {
        
        
        const allgear_each = allgear[i].split(",");
        console.log("allgear_each: ");
        console.log(allgear_each);
        
        let gslot = allgear_each[2] == "Accessory" ? "Accessory1":allgear_each[2]
        var setOptions;

      if (['Maze','Challenger','Inhibitor','Britra','Swift','Devoted','Polymer','Sc. Dante','Sincere','Courageous','Loyal'].indexOf(allgear_each[1]) > -1) {
        setOptions = GEAR_SETS_LIST_BASIC;
      } else if (allgear_each[1] === 'Spectral') {
        setOptions = GEAR_SETS_LIST_SPECTRAL;
      } else if (allgear_each[1] === 'Phantom') {
        setOptions = GEAR_SETS_LIST_PHANTOM;
      } else if (allgear_each[1] === 'Jungle') {
        setOptions = GEAR_SETS_LIST_TRINITY;
      } else if (allgear_each[1] === 'Volcano') {
        setOptions = GEAR_SETS_LIST_TRINITY;
      } else {
        setOptions = GEAR_SETS_LIST_BASIC;
      }

        let getSubstats = this.getAvailableSubstats(allgear_each[1],gslot);
      console.log('getSubstats');
      console.log(getSubstats);

      let sc = allgear_each.slice(6)
      let sub1Final = [];
      let sub2Final = [];

       switch (allgear_each[3]) {
                case COUNTER:
                  if (allgear_each[5] == ATK) {
                    maingearstat = 399;
                  } else if (allgear_each[5] == HP) {
                    maingearstat = 3814;
                  } else if ((allgear_each[5] == HIT) || (allgear_each[5] == EVA)) {
                    maingearstat = 274;
                  }
                  break;
                  case SOLDIER:
                     if (allgear_each[5] == ATK) {
                    maingearstat = 399;
                    } else if (allgear_each[5] == HP) {
                      maingearstat = 206;
                    } else if ((allgear_each[5] == HIT) || (allgear_each[5] == EVA)) {
                      maingearstat = 206;
                    }
                  break;
                  case MECH:
                     if (allgear_each[5] == ATK) {
                    maingearstat = 399;
                    } else if (allgear_each[5] == HP) {
                      maingearstat = 309;
                    } else if ((allgear_each[5] == HIT) || (allgear_each[5] == EVA)) {
                      maingearstat = 309;
                    }
                  break;
                default:
                  break;
              }

       st_g[i] = {
        "id":i,
  "equip_type": allgear_each[0],
  "gear_name": allgear_each[1],
  "slot": allgear_each[2],
  "employee_type": allgear_each[3],
  "icon": allgear_each[4],
  "main_stat": [allgear_each[5],maingearstat],
  "latent":{},
  "sub1":{},
  "sub2":{},
  "set_options":Object.keys(setOptions),
      }

      if (allgear_each[1] == "Jungle") {
        for (let o = 0, nm = JUNGLE_LATENT_STATS_OPTION_LIST.length; o < nm; o++) {
          st_g[i]["latent"][JUNGLE_LATENT_STATS_OPTION_LIST[o]] = getSubstats[2][o];
        }
        
      } else if (allgear_each[1] == "Inhibitor") {
        for (let o = 0, nm = INHIBITOR_LATENT_STATS_OPTION_LIST.length; o < nm; o++) {
          st_g[i]["latent"][INHIBITOR_LATENT_STATS_OPTION_LIST[o]] = getSubstats[2][o];
        }
        
      } else if (allgear_each[1] == "Swift") {
        for (let o = 0, nm = SWIFT_LATENT_STATS_OPTION_LIST.length; o < nm; o++) {
          st_g[i]["latent"][SWIFT_LATENT_STATS_OPTION_LIST[o]] = getSubstats[2][o];
        }
        
      } else if (allgear_each[1] == "Britra") {
        for (let o = 0, nm = BRITRA_LATENT_STATS_OPTION_LIST.length; o < nm; o++) {
          st_g[i]["latent"][BRITRA_LATENT_STATS_OPTION_LIST[o]] = getSubstats[2][o];
        }
        
      } else if (allgear_each[1] == "Volcano") {
        for (let o = 0, nm = VOLCANO_LATENT_STATS_OPTION_LIST.length; o < nm; o++) {
          st_g[i]["latent"][VOLCANO_LATENT_STATS_OPTION_LIST[o]] = getSubstats[2][o];
        }
        
      }


      for (let i = 0, n = STATS_OPTION_LIST.length; i < n; i++) {
        if (sc[i] !== '') {
          if (sc[i].includes('1') === true) {
            if (STATS_OPTION_LIST[i] == HP && allgear_each[1] == "Jungle") {
              sub1Final.push(HP_PERCENT)
            } else {
              sub1Final.push(STATS_OPTION_LIST[i])
            }

          } 
          if (sc[i].includes('2') === true) {
            sub2Final.push(STATS_OPTION_LIST[i])

          }
        }
      }

        let sC1 = [];
        let sC2 = [];
      for (var t = 0, n = sub1Final.length; t < n; t++) {
        sC1[t] = getSubstats[0].concat(Array(Number(sub1Final.length)).fill(getSubstats[0][getSubstats[0].length-1]))[t]
          st_g[i]["sub1"][sub1Final[t]] = sC1[t]; 
       
      }
    

      for (var t = 0, n = sub2Final.length; t < n; t++) { 
        sC2[t] = getSubstats[1].concat(Array(Number(sub2Final.length)).fill(getSubstats[1][getSubstats[1].length-1]))[t]
          st_g[i]["sub2"][sub2Final[t]] = sC2[t];

      }

      
      console.log("sCS: ");
      console.log(sC1);
      console.log(sC2);
      console.log("st_g[i]: ");
      console.log(st_g[i]);
     
      /*
0: {
  "equip_unit": "Delta Seven Kyle Wong",
  "equip_type": "Exclusive",
  "gear_name": "Tactical Comms Gear",
  "slot": "Accessory",
  "employee_type": "Counter",
  "icon": "Icon_Counter_Accessory_Tactical Comms Gear_EE",
  "main_stat": ["ASPD",0.322],
    "latent": {

    },
    "sub1": {
      "Skill Haste":0.121,
    },
    "sub2": {
      "CRIT DMG":0.242,
      "Skill Haste":0.121,
      "CRIT DMG RES":0.462,
      "Status Effect RES":0.066,
      "Anti-Striker DMG":0.183,
      "Anti-Defender DMG":0.183,
      "Anti-Ranger DMG":0.183,
      "Anti-Sniper DMG":0.183,
      "Anti-Air DMG":0.183,
      "Anti-Ground DMG":0.183,
      "Anti-Striker DMG RES":0.183,
      "Anti-Defender DMG RES":0.183,
      "Anti-Ranger DMG RES":0.183,
      "Anti-Sniper DMG RES":0.183,
      "Anti-Air DMG RES":0.183,
      "Anti-Ground DMG RES":0.183,
    }
  }

      */

    }

      // let urlGearVal = searchGearData.split(",");


      // let setOptions;

      // if (['Maze','Challenger','Inhibitor','Britra','Swift','Devoted','Polymer','Sc. Dante','Sincere','Courageous','Loyal'].indexOf(urlGearVal[1]) > -1) {
      //   setOptions = GearSetsListBasic;
      // } else if (urlGearVal[1] === 'Spectral') {
      //   setOptions = GearSetsListSpectral;
      // } else if (urlGearVal[1] === 'Phantom') {
      //   setOptions = GearSetsListPhantom;
      // } else if (urlGearVal[1] === 'Jungle') {
      //   setOptions = GearSetsListTrinity;
      // } else if (urlGearVal[1] === 'Volcano') {
      //   setOptions = GearSetsListTrinity;
      // } else {
      //   setOptions = GearSetsListBasic;
      // }

      

      // this.#selectedGearData = searchGearData;
      // this.#name = urlGearVal[1];
      // this.#eqSlot = eq_Slot;
      // this.#eqTier = 7;

      // this.#eqSet = setOptions[Object.keys(setOptions)[Number(ugdt[4])]]['name'];
      // this.#sub1 = [BONUS_STATS_LIST[sub1_val],s1f];
      // this.#sub2 = [BONUS_STATS_LIST[sub2_val],s2f];
      // this.#latent = [BONUS_STATS_LIST[latent_val[0]],latent_val[1]];
      // this.#eqIcon =  'cs_gears-icons/Special Gear/'+urlGearVal[3]+'/' + urlGearVal[4] +  '.png';
      // this.#mainStat = [urlGearVal[5],GearMainStatValues[(GearMainStatValues.length/2)+GearMainStatValues.indexOf(urlGearVal[5])]];
      
      // this.#eqSet_Options = setOptions;




      return true;
    }
    
    

    getAvailableSubstats(GearType, GearSlot) {
      let aLatent = '';
      let aSub1;
      let aSub2;

      switch (GearType) {
        case "Maze":
          if((GearSlot == SLOT_WEAPON)|| (GearSlot == SLOT_ARMOR)){
          aSub1 = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
        } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
          aSub2 = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
        }
        break;
        case "Loyal":
        aSub1 = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
        aSub2 = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
        break;
        case "Devoted":
        aSub1 = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
        aSub2 = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
        break;
        case "Courageous":
        aSub1 = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
        aSub2 = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
        break;
        case "Sincere":
        aSub1 = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
        aSub2 = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
        break;
        case "Challenger":
          if((GearSlot == SLOT_WEAPON)|| (GearSlot == SLOT_ARMOR)){
            aSub1 = CHALLENGER_GEAR_SUBSTATS_VALUES_LIST_1;
            aSub2 = CHALLENGER_GEAR_SUBSTATS_VALUES_LIST_2;
          } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
            aSub1 = CHALLENGER_ACCS_SUBSTATS_VALUES_LIST_1;
            aSub2 = CHALLENGER_ACCS_SUBSTATS_VALUES_LIST_2;
          }
        break;
        case "Hummingbird":
        aSub1 = HUMMINGBIRD_SUBSTATS_VALUES_LIST_1;
        aSub2 = HUMMINGBIRD_SUBSTATS_VALUES_LIST_2;
        break;
        case "Gordias":
          aSub1 = GORDIAS_SUBSTATS_VALUES_LIST_1;
          aSub2 = GORDIAS_SUBSTATS_VALUES_LIST_2;
        break;
        case "Spectral":
          if(GearSlot == (SLOT_WEAPON)){
          aSub1 = SPECTRAL_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = SPECTRAL_WEAPON_SUBSTATS_VALUES_LIST_2;
        } else if (GearSlot == (SLOT_ARMOR)) {
          aSub1 = SPECTRAL_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = SPECTRAL_ARMOR_SUBSTATS_VALUES_LIST_2;
        } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = SPECTRAL_ACCS_SUBSTATS_VALUES_LIST_1;
          aSub2 = SPECTRAL_ACCS_SUBSTATS_VALUES_LIST_2;
        }
        break;
        case "Phantom":
          if(GearSlot == (SLOT_WEAPON)){
          aSub1 = PHANTOM_GEAR_SUBSTATS_VALUES_LIST_1; 
          aSub2 = PHANTOM_WEAPON_SUBSTATS_VALUES_LIST_2;
        } else if (GearSlot == (SLOT_ARMOR)) {
          aSub1 = PHANTOM_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = PHANTOM_ARMOR_SUBSTATS_VALUES_LIST_2;
        } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = PHANTOM_ACCS_SUBSTATS_VALUES_LIST_1;
          aSub2 = PHANTOM_ACCS_SUBSTATS_VALUES_LIST_2;
        }
        break;
        case "Polymer":
          if(GearSlot == (SLOT_WEAPON)){
          aSub1 = POLYMER_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = POLYMER_WEAPON_SUBSTATS_VALUES_LIST_2;
        } else if (GearSlot == (SLOT_ARMOR)) {
          aSub1 = POLYMER_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = POLYMER_ARMOR_SUBSTATS_VALUES_LIST_2;
        } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = POLYMER_ACCS_SUBSTATS_VALUES_LIST_1;
          aSub2 = POLYMER_ACCS_SUBSTATS_VALUES_LIST_2;
        }
        break;
        case "Sc. Dante":
          if(GearSlot == (SLOT_WEAPON)){
          aSub1 = SC_DANTE_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = SC_DANTE_WEAPON_SUBSTATS_VALUES_LIST_2;
        } else if (GearSlot == (SLOT_ARMOR)) {
          aSub1 = SC_DANTE_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = SC_DANTE_ARMOR_SUBSTATS_VALUES_LIST_2;
        } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = SC_DANTE_ACCS_SUBSTATS_VALUES_LIST_1;
          aSub2 = SC_DANTE_ACCS_SUBSTATS_VALUES_LIST_2;
        }
        break;
        case "Inhibitor":
          if((GearSlot == SLOT_WEAPON) || (GearSlot == SLOT_ARMOR)){
          aSub1 = INHIBITOR_GEAR_SUBSTATS_VALUES_LIST_1;
          aSub2 = INHIBITOR_GEAR_SUBSTATS_VALUES_LIST_2;
          aLatent = INHIBITOR_GEAR_LATENT_STATS_VALUES_LIST;
        } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = INHIBITOR_ACCS_SUBSTATS_VALUES_LIST_1;
          aSub2 = INHIBITOR_ACCS_SUBSTATS_VALUES_LIST_2;
          aLatent = INHIBITOR_ACCS_LATENT_STATS_VALUES_LIST;
        }
        break;
         case "Britra":
          if((GearSlot == SLOT_WEAPON) || (GearSlot == SLOT_ARMOR)){
            aSub1 = BRITRA_GEAR_SUBSTATS_VALUES_LIST_1;
            aSub2 = BRITRA_GEAR_SUBSTATS_VALUES_LIST_2;
            aLatent = BRITRA_GEAR_LATENT_STATS_VALUES_LIST;
          } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
            aSub1 = BRITRA_ACCS_SUBSTATS_VALUES_LIST_1;
            aSub2 = BRITRA_ACCS_SUBSTATS_VALUES_LIST_2;
            aLatent = BRITRA_ACCS_LATENT_STATS_VALUES_LIST;
          }
          break;
         case "Swift":
          if((GearSlot == SLOT_WEAPON) || (GearSlot == SLOT_ARMOR)){
            aSub1 = SWIFT_GEAR_SUBSTATS_VALUES_LIST_1;
            aSub2 = SWIFT_GEAR_SUBSTATS_VALUES_LIST_2;
            aLatent = SWIFT_GEAR_LATENT_STATS_VALUES_LIST;
          } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
            aSub1 = SWIFT_ACCS_SUBSTATS_VALUES_LIST_1;
            aSub2 = SWIFT_ACCS_SUBSTATS_VALUES_LIST_2;
            aLatent = SWIFT_ACCS_LATENT_STATS_VALUES_LIST;
          }
          break;
         case "Jungle":
          if((GearSlot == SLOT_WEAPON) || (GearSlot == SLOT_ARMOR)){
            aSub1 = JUNGLE_GEAR_SUBSTATS_VALUES_LIST_1;
            aSub2 = JUNGLE_GEAR_SUBSTATS_VALUES_LIST_2;
            aLatent = JUNGLE_GEAR_LATENT_STATS_VALUES_LIST;
          } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
            aSub1 = JUNGLE_ACCS_SUBSTATS_VALUES_LIST_1;
            aSub2 = JUNGLE_ACCS_SUBSTATS_VALUES_LIST_2;
            aLatent = JUNGLE_ACCS_LATENT_STATS_VALUES_LIST;
          }
          break;
         case "Volcano":
          if((GearSlot == SLOT_WEAPON) || (GearSlot == SLOT_ARMOR)){
            aSub1 = VOLCANO_GEAR_SUBSTATS_VALUES_LIST_1;
            aSub2 = VOLCANO_GEAR_SUBSTATS_VALUES_LIST_2;
            aLatent = VOLCANO_GEAR_LATENT_STATS_VALUES_LIST;
          } else if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
            aSub1 = VOLCANO_ACCS_SUBSTATS_VALUES_LIST_1;
            aSub2 = VOLCANO_ACCS_SUBSTATS_VALUES_LIST_2;
            aLatent = VOLCANO_ACCS_LATENT_STATS_VALUES_LIST;
          }
          break;
          case "Cat Brooch":
          if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = MILLIA_RAGE_GEAR_STATS_VALUES_LIST_1;
          aSub2 = MILLIA_RAGE_GEAR_STATS_VALUES_LIST_2;
        }
        break;
          case "Fairy\'s Infinite Ammo":
          if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = MILLIA_RAGE_GEAR_STATS_VALUES_LIST_1;
          aSub2 = MILLIA_RAGE_GEAR_STATS_VALUES_LIST_2;
        }
        break;
        case "Gear Cell Suppressor":
          if ((GearSlot == SLOT_ARMOR)) {
          aSub1 = SOL_BADGUY_GEAR_STATS_VALUES_LIST_1;
          aSub2 = SOL_BADGUY_GEAR_STATS_VALUES_LIST_2;
        }
        break;
        case "TCS Module":
          if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = TITAN_KYLE_GEAR_STATS_VALUES_LIST_1;
          aSub2 = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
        }
        break;
        case "Tactical Comms Gear":
          if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = TITAN_KYLE_GEAR_STATS_VALUES_LIST_1;
          aSub2 = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
        }
        break;
        case "Throne of Ashes":
          if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = ROSARIA_GEAR_STATS_VALUES_LIST_1;
          aSub2 = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
        }
        break;
        case "Antithesis":
          if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = LAIKA_GEAR_STATS_VALUES_LIST_1;
          aSub2 = LAIKA_GEAR_STATS_VALUES_LIST_2;
        }
        break;
        case "Reliable Messenger":
          if ((GearSlot == SLOT_ACCESSORY_1) || (GearSlot == SLOT_ACCESSORY_2)) {
          aSub1 = XIAO_GEAR_STATS_VALUES_LIST_1;
          aSub2 = XIAO_GEAR_STATS_VALUES_LIST_2;
        }
        break;
        
        default:
          break;
       };

       return [aSub1,aSub2,aLatent];
    }

    #selectedGearData = 0;
    #name = 0;
    #eqSlot = 0;
    #eqTier = 0;
    #eqSet = 0;
    #sub1 = [];
    #sub2 = [];
    #latent = [];
    #eqIcon = 0;
    #mainStat = 0;
    #eqSet_Options = [];

  set selectedGearData(e){
      this.#selectedGearData = e;
  }
  get selectedGearData(){
      return this.#selectedGearData;
  }
  set name(e){
      this.#name = e;
  }
  get name(){
      return this.#name;
  }
    set mainStat(e){
        this.#mainStat = e;
    }
    get mainStat(){
        return this.#mainStat;
    }
  set eqSlot(e){
    this.#eqSlot = e;
}
get eqSlot(){
    return this.#eqSlot;
}
set eqTier(e){
  this.#eqTier = e;
}
get eqTier(){
  return this.#eqTier;
}
set eqSet(e){
  this.#eqSet = e;
}
get eqSet(){
  return this.#eqSet;
}
set sub1(e){
  this.#sub1 = e;
}
get sub1(){
  return this.#sub1;
}
set sub2(e){
  this.#sub2 = e;
}
get sub2(){
  return this.#sub2;
}
set eqIcon(e){
  this.#eqIcon = e;
}
get eqIcon(){
  return this.#eqIcon;
}

set latent(e){
  this.#latent = e;
}
get latent(){
  return this.#latent;
}
set eqSet_Options(e){
  this.#eqSet_Options = e;
}
get eqSet_Options(){
  return this.#eqSet_Options;
}



    
  }

  var Weapon = new Gear(0)
  var Armor = new Gear(0)
  var Accessory1 = new Gear(0)
  var Accessory2 = new Gear(0)

  var enemy_Weapon = new Gear(1)
  var enemy_Armor = new Gear(1)
  var enemy_Accessory1 = new Gear(1)
  var enemy_Accessory2 = new Gear(1)


 

var selectedGearSlot;
var selectedGearType;
var selectedGearSub1List;
var selectedGearSub2List;
var selectedGearLatentList;
var selectedGearSetList;

var selectedGear;

var selectedGearSlotList;

var GEAR_MAIN_STATS_VALUES_T7_unit;
var GEAR_MAIN_STATS_VALUES_T7_target;
var GEAR_MAIN_STATS_VALUES_T7_unit_EE;
var GEAR_MAIN_STATS_VALUES_T7_target_EE;

var GEAR_MAIN_STATS_VALUES_T7;
var GEAR_MAIN_STATS_VALUES_T7_EE;


var selectedGearFor;


var selectedGearUnitType;
// var selectedGear_Extra; planned for ee's but too laze





$( ".equipment-slot" ).on( "click", function() { // old variant: $( "#gearContainer" ).on( "click", ".equipment-slot", function() {


  selectedGear = $( this ).attr('value');

  selectedGearFor = $(this).attr('id');


  if (selectedGearFor == selectedGear+'Container') {
    selectedGearUnitType = currentUnitType;
    GEAR_MAIN_STATS_VALUES_T7 = GEAR_MAIN_STATS_VALUES_T7_unit;
    GEAR_MAIN_STATS_VALUES_T7_EE = GEAR_MAIN_STATS_VALUES_T7_unit_EE;
  } else {
    selectedGearUnitType = currentTargetType;
    GEAR_MAIN_STATS_VALUES_T7 = GEAR_MAIN_STATS_VALUES_T7_target;
    GEAR_MAIN_STATS_VALUES_T7_EE = GEAR_MAIN_STATS_VALUES_T7_target_EE;
  }


  
  var gear_data = Object.values(GEARS).filter(item => item.employee_type === currentUnitType);
  var gear_data_keys = Object.keys(gear_data);
  // var gear_data = full_gear_data.split('","');


  


  

  $('#gearSelectionModal').attr('value',$(this).attr('value'));

  if ($(this).attr('isConfirmed') == "false") {
    $('#staticBackdrop3.modal').modal('show'); //show selected gear modal
    
  

  // .slice(1) is because text starts with " so need to remove that symbol and then .split()
  
  
  /* var full_gear_data = total_gear_data.slice(1); */ // <-- new variant, using variable instead of taking text from dom element which is above^
  



  
  selectedGearSlot = $( this ).attr('value');
  
  var selectedGearAcc;

  $('#gearContainer').attr('value',selectedGearSlot); // saving variable into dom element (not doing cause using global variable)

  switch (selectedGearSlot) {
    case SLOT_ACCESSORY_1:
      selectedGearAcc = SLOT_ACCESSORY;
      break;
    case SLOT_ACCESSORY_2:
      selectedGearAcc = SLOT_ACCESSORY;
      break;
    default:
      selectedGearAcc = selectedGearSlot;
      break;
  }

  $('#exampleModalToggleLabel3').text('Select ' + selectedGearAcc);



    
 
  selectedGearSlotList = $( this ).attr('value');

  //total_unit_data = $('#searched-unitID-values').attr('value').split(',');
  //currentUnitType = total_unit_data[9].split(';')[0]; //Can remove this because already exists kinda


 
  
  
  $('#gearSelectionModal').html('');
  //$('#gearSelectionModal').html('<div class="col"> <div class="card" data-bs-target="#staticBackdrop4" data-bs-toggle="modal" value="0"> <img src="" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title"> Remove Gear</h5>  <p class="card-text">Some random text.</p> </div> </div> </div>')
 

  for (var i = 0; i < gear_data_keys.length; i++) {
    let gdis = gear_data[gear_data_keys[i]];
    if( (gdis["slot"] == selectedGearAcc)) {
      let isEx = '';
      if (gdis["equip_type"] === 'Exclusive') {
        isEx = 'id="isEx"';
      }
      

      /* console.log("Found: " + gear_data[i]) */
      $('#gearSelectionModal').append('<div class="col" '+isEx+'> <div class="card" data-bs-target="#staticBackdrop4" data-bs-toggle="modal" value="' + gdis["id"] +  '"> <img src="'+ 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gdis["icon"] +  '.png' + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title text-truncate">' + gdis["gear_name"] + '</h5>  <p class="card-text"> Main stat: '+ gdis["main_stat"][0] +' </p> </div> </div> </div>')
      
    }
    
   }


   let hasEx = 'false';
   if (selectedGearFor == selectedGear+'Container') {
    $.each($('#gearContainer .equipment-slot'),function() {
      if (hasEx === 'false') {
      hasEx = $(this).attr('isExclusive');
      }
    })
   } else {
    $.each($('#gearContainer_enemy .equipment-slot'),function() {
      if (hasEx === 'false') {
      hasEx = $(this).attr('isExclusive');
      }
    })
   }
   
   if (hasEx === 'true') {
    $('#isEx').hide();
   } else {
    $('#isEx').show();
   }

   $('#GearRemoveBtn').css('display','none');

  } else {

    

    var selected_gear_data;
    var selected_eqSub1;
    var selected_eqSub2;
    var selected_eqLatent;
    var selected_eqSet;
    var selected_eqMainstat;

    switch ($(this).attr('value')) {
      case SLOT_WEAPON:
        //Weapon.replaceGearByUnitType();

        if (selectedGearFor == selectedGear+'Container') {
          selected_gear_data = Weapon.selectedGearData;
          selected_eqSub1 = Weapon.sub1;
          selected_eqSub2 = Weapon.sub2;
          selected_eqLatent = Weapon.latent;
          selected_eqSet = Weapon.eqSet;
          selected_eqMainstat = Weapon.mainStat;
        } else {
          selected_gear_data = enemy_Weapon.selectedGearData;
          selected_eqSub1 = enemy_Weapon.sub1;
          selected_eqSub2 = enemy_Weapon.sub2;
          selected_eqLatent = enemy_Weapon.latent;
          selected_eqSet = enemy_Weapon.eqSet;
          selected_eqMainstat = enemy_Weapon.mainStat;
        }
       
        
        break;
      case SLOT_ARMOR:

      if (selectedGearFor == selectedGear+'Container') {
        selected_gear_data = Armor.selectedGearData;
        selected_eqSub1 = Armor.sub1;
        selected_eqSub2 = Armor.sub2;
        selected_eqLatent = Armor.latent;
        selected_eqSet = Armor.eqSet;
        selected_eqMainstat = Armor.mainStat;
      } else {
        selected_gear_data = enemy_Armor.selectedGearData;
        selected_eqSub1 = enemy_Armor.sub1;
        selected_eqSub2 = enemy_Armor.sub2;
        selected_eqLatent = enemy_Armor.latent;
        selected_eqSet = enemy_Armor.eqSet;
        selected_eqMainstat = enemy_Armor.mainStat;
      }

        
        break;
      case SLOT_ACCESSORY_1:
        if (selectedGearFor == selectedGear+'Container') {
          selected_gear_data = Accessory1.selectedGearData;
          selected_eqSub1 = Accessory1.sub1;
          selected_eqSub2 = Accessory1.sub2;
          selected_eqLatent = Accessory1.latent;
          selected_eqSet = Accessory1.eqSet;
          selected_eqMainstat = Accessory1.mainStat;
        } else {
          selected_gear_data = enemy_Accessory1.selectedGearData;
          selected_eqSub1 = enemy_Accessory1.sub1;
          selected_eqSub2 = enemy_Accessory1.sub2;
          selected_eqLatent = enemy_Accessory1.latent;
          selected_eqSet = enemy_Accessory1.eqSet;
          selected_eqMainstat = enemy_Accessory1.mainStat;
        }
        
        break;
      case SLOT_ACCESSORY_2:

      if (selectedGearFor == selectedGear+'Container') {
        selected_gear_data = Accessory2.selectedGearData;
        selected_eqSub1 = Accessory2.sub1;
        selected_eqSub2 = Accessory2.sub2;
        selected_eqLatent = Accessory2.latent;
        selected_eqSet = Accessory2.eqSet;
        selected_eqMainstat = Accessory2.mainStat;
      } else {
        selected_gear_data = enemy_Accessory2.selectedGearData;
        selected_eqSub1 = enemy_Accessory2.sub1;
        selected_eqSub2 = enemy_Accessory2.sub2;
        selected_eqLatent = enemy_Accessory2.latent;
        selected_eqSet = enemy_Accessory2.eqSet;
        selected_eqMainstat = enemy_Accessory2.mainStat;
      }
        break;
      default:
        break;
    }

    

    

    var selection_modal_gear_data = GEARS[selected_gear_data];
  
  
 const gear_type_loc = selection_modal_gear_data["equip_type"];
 const gear_slot_loc = selection_modal_gear_data["slot"];






selectedGearLatentList = selection_modal_gear_data["latent"];
selectedGearLatentListKeys = Object.keys(selectedGearLatentList);
selectedGearSub1List = selection_modal_gear_data["sub1"];
selectedGearSub1ListKeys = Object.keys(selectedGearSub1List);
selectedGearSub2List = selection_modal_gear_data["sub2"];
selectedGearSub2ListKeys = Object.keys(selectedGearSub2List);
selectedGearSets = selection_modal_gear_data["set_options"];
selectedGearSetList = {};


  
  
for (let i = 0, n = selectedGearSets.length; i < n; i++) {
  selectedGearSetList[selectedGearSets[i]] = GEAR_SETS_LIST[selectedGearSets[i]]
}

 let selectedGearStats = GEARS[selected_gear_data];
 selectedGearType = selectedGearStats["slot"];



 
 
 
 
 const selectedGearSetList_length_loc = Object.keys(selectedGearSetList).length;
 const selectedGearSetList_loc = Object.keys(selectedGearSetList);

 



    $('#selectedGearModal').html('<div class="text-center"><div class="fw-bold">Select Set</div><div id="gearSetOptions"></div></div> <div class="img-fluid rounded mx-auto d-block" id="selectedGearConfirmation" value="' + selected_gear_data +  '"> <img src="'+ 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + selectedGearStats["icon"] +  '.png' + '" class="card-img-top mx-auto d-block" alt="..."> <div class="card-body"> <h5 class="card-title text-truncate">' + selectedGearStats["gear_name"] + '</h5> <div id="subNameValueSplit" class="row row-cols-md-2 g-4"> <p class="card-text">  </p> <p class="card-value"> </p> </div> </div>  </div>')


    if (selectedGearStats[0] != 'Exclusive' ) {
      $('#GearModalTitle').text(selectedGearUnitType + ' ' + gear_slot_loc);
    } else {
      if (selectedGearFor == selectedGear+'Container') {
        $('#GearModalTitle').text(total_unit_data[1] + ' Exclusive equipment');
      } else {
        $('#GearModalTitle').text(total_target_data[1] + ' Exclusive equipment');
      }
      

    }
    

    for (let i = 0; i < selectedGearSetList_length_loc; i++) {
      $('#gearSetOptions').append('<button style="background-image: url(&quot;cs_gears-icons/Set Icons/Icon_Set_'+ selectedGearSetList[selectedGearSetList_loc[i]]["name"] +'.png&quot;);" type="button" value="'+ selectedGearSetList[selectedGearSetList_loc[i]]["name"] +'" class="btn btn-primary" name="options" id="gearSetOption'+ [i] +'"> <div style="max-width:20px; display:block"> </div> </button>');
      
      if (Object.prototype.toString.call(selectedGearSetList[selectedGearSetList_loc[i]]["stat1"]) === '[object Array]') {
        CreateTooltipForAnything($('#gearSetOption'+ [i]),'Set: '+selectedGearSetList[selectedGearSetList_loc[i]]["name"]+'<br /> '+selectedGearSetList[selectedGearSetList_loc[i]]["stat1"][0]+': '+(([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSetList[selectedGearSetList_loc[i]]["amount"][0])) ? selectedGearSetList[selectedGearSetList_loc[i]]["amount"][0]:((Math.round((Number(selectedGearSetList[selectedGearSetList_loc[i]]["amount"][0]) + Number.EPSILON) * 100)) + '% '))+'<br />'+selectedGearSetList[selectedGearSetList_loc[i]]["stat1"][1]+': '+(([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSetList[selectedGearSetList_loc[i]]["amount"][1])) ? selectedGearSetList[selectedGearSetList_loc[i]]["amount"][1]:((Math.round((Number(selectedGearSetList[selectedGearSetList_loc[i]]["amount"][1]) + Number.EPSILON) * 100)) + '% ')));
      
      } else {
        CreateTooltipForAnything($('#gearSetOption'+ [i]),'Set: '+selectedGearSetList[selectedGearSetList_loc[i]]["name"]+'<br /> '+selectedGearSetList[selectedGearSetList_loc[i]]["stat1"]+': '+(([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSetList[selectedGearSetList_loc[i]]["amount"])) ? selectedGearSetList[selectedGearSetList_loc[i]]["amount"]:((Math.round((Number(selectedGearSetList[selectedGearSetList_loc[i]]["amount"]) + Number.EPSILON) * 100)) + '% ')));
        
      }
     }

     

     $('#gearSetOptions button[value="'+ selected_eqSet +'"]').addClass('active').siblings().removeClass('active');
 

 $('#gearSetOptions button').on('click', function() {
  
  

  var thisBtn = $(this);
      
      thisBtn.addClass('active').siblings().removeClass('active');
 });

if (selectedGearSub1ListKeys.length == 1) {
  $('#selectedGearConfirmation .card-text').html('<span class="badge bg-secondary">Option 1 [<small>locked</small>]</span><select id="sub1formSelect" class="form-select" aria-label="Disabled select example" disabled> ');
  
} else {
  $('#selectedGearConfirmation .card-text').html('<span class="badge bg-primary">Option 1 [<small>select</small>]</span><select id="sub1formSelect" class="form-select" aria-label="select example"> ');
}
$('#selectedGearConfirmation .card-value').html('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue1">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSub1ListKeys[0])) ? selectedGearSub1List[selectedGearSub1ListKeys[0]]:((((Number(selectedGearSub1List[selectedGearSub1ListKeys[0]]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) +'</div>')
$('#selectedGearConfirmation .card-value').append('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue2">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSub2ListKeys[0])) ? selectedGearSub2List[selectedGearSub2ListKeys[0]]:((((Number(selectedGearSub2List[selectedGearSub2ListKeys[0]]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) +'</div>')
if (selectedGearSub2ListKeys.length == 1) {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-secondary">Option 2 [<small>locked</small>]</span><select id="sub2formSelect" class="form-select" aria-label="Disabled select example" disabled> ');
} else {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-primary">Option 2 [<small>select</small>]</span><select id="sub2formSelect" class="form-select" aria-label="select example"> ');
}

if (selectedGearLatentListKeys.length > 0) {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-info">Latent Ability [<small>select</small>]</span><select id="sub3formSelect" class="form-select" aria-label="select example"> ');
  $('#selectedGearConfirmation .card-value').append('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue3">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearLatentListKeys[0])) ? selectedGearLatentList[selectedGearLatentListKeys[0]]:((((Number(selectedGearLatentList[selectedGearLatentListKeys[0]]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) + '</div>')

 
}




 for (let i = 0; i < selectedGearSub1ListKeys.length; i++) {
  var a;
  if (selectedGearSub1ListKeys[i] == selected_eqSub1[0]) {
    a = "selected";
  } else {
    a = ""
  }

  $('#selectedGearConfirmation .card-text #sub1formSelect').append('<option value="'+ selectedGearSub1ListKeys[i] +'" '+ a +' subValue="'+ selectedGearSub1List[selectedGearSub1ListKeys[i]] +'">' + selectedGearSub1ListKeys[i] + '</option>');
  
 }


 for (let i = 0; i < selectedGearSub2ListKeys.length; i++) {
  var a;
  if (selectedGearSub2ListKeys[i] == selected_eqSub2[0]) {
    a = "selected";
  } else {
    a = ""
  }


  $('#selectedGearConfirmation .card-text #sub2formSelect').append('<option value="'+ selectedGearSub2ListKeys[i] +'" '+ a +' subValue="'+ selectedGearSub2List[selectedGearSub2ListKeys[i]] +'" >' + selectedGearSub2ListKeys[i] + '</option>');
  
 }

 if (selectedGearLatentListKeys.length > 0) {
  for (let i = 0; i < selectedGearLatentListKeys.length; i++) {
    var a;
  if (selectedGearLatentListKeys[i] == selected_eqLatent[0]) {
    a = "selected";
  } else {
    a = ""
  }
    $('#selectedGearConfirmation .card-text #sub3formSelect').append('<option value="'+ selectedGearLatentListKeys[i] +'" '+ a +' subValue="'+ selectedGearLatentList[selectedGearLatentListKeys[i]] +'" latent="'+ selectedGearLatentList[selectedGearLatentListKeys[i]] +'">' + selectedGearLatentListKeys[i] + '</option>');
    
   }
   
 
  // setRangeForSub(selected_eqLatent[0], selected_eqLatent[1], selected_eqLatent[1]);
}



  $('#selectedGearConfirmation .card-text').append('</select>');
 
 
  $('#sub1formSelect').on("change",function() {

    //$('#subValue1').html($( "#sub1formSelect option:selected" ).attr('subvalue'));
    $('#subValue1').html((([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === $(this).val())) ? $( "#sub1formSelect option:selected" ).attr('subvalue'):((((Number($( "#sub1formSelect option:selected" ).attr('subvalue')) + Number.EPSILON) * 100)).toFixed(1) + '% ')));
   
  });

  $('#sub2formSelect').on("change",function() {

    //$('#subValue2').html($( "#sub2formSelect option:selected" ).attr('subvalue'));
    $('#subValue2').html((([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === $(this).val())) ? $( "#sub2formSelect option:selected" ).attr('subvalue'):((((Number($( "#sub2formSelect option:selected" ).attr('subvalue')) + Number.EPSILON) * 100)).toFixed(1) + '% ')));
  
  });

  $('#sub3formSelect').on("change",function() {
    //$('#subValue3').html($( "#sub3formSelect option:selected" ).attr('subvalue'));
    $('#subValue3').html((([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === $(this).val())) ? $( "#sub3formSelect option:selected" ).attr('subvalue'):((((Number($( "#sub3formSelect option:selected" ).attr('subvalue')) + Number.EPSILON) * 100)).toFixed(1) + '% ')));
    setRangeForSub($(this).val(),$( "#sub3formSelect option:selected" ).attr('subvalue'),$( "#sub3formSelect option:selected" ).attr('latent'))
   
  });


  selectedGearSlotList = $( this ).attr('value');



  var selectedGearAcc;

  switch (selectedGearSlotList) {
    case SLOT_ACCESSORY_1:
      selectedGearAcc = SLOT_ACCESSORY;
      break;
    case SLOT_ACCESSORY_2:
      selectedGearAcc = SLOT_ACCESSORY;
      break;
    default:
      selectedGearAcc = selectedGearSlotList;
      break;
  }


  

  $('#gearSelectionModal').html('');
  //$('#gearSelectionModal').html('<div class="col"> <div class="card" data-bs-target="#staticBackdrop4" data-bs-toggle="modal" value="0"> <img src="" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title"> Remove Gear</h5>  <p class="card-text">Some random text.</p> </div> </div> </div>')
    for (var i = 0; i < gear_data_keys.length; i++) {
    let gdis = gear_data[gear_data_keys[i]];
    if( (gdis["slot"] == selectedGearAcc)) {
      let isEx = '';
      if (gdis["equip_type"] === 'Exclusive') {
        isEx = 'id="isEx"';
      }
      

      /* console.log("Found: " + gear_data[i]) */
      $('#gearSelectionModal').append('<div class="col" '+isEx+'> <div class="card" data-bs-target="#staticBackdrop4" data-bs-toggle="modal" value="' + gdis["id"] +  '"> <img src="'+ 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gdis["icon"] +  '.png' + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title text-truncate">' + gdis["gear_name"] + '</h5>  <p class="card-text"> Main stat: '+ gdis["main_stat"][0] +' </p> </div> </div> </div>')
      
    }
    
   }
   let hasEx = 'false';
   if (selectedGearFor == selectedGear+'Container') {
    $.each($('#gearContainer .equipment-slot'),function() {
      if (hasEx === 'false') {
      hasEx = $(this).attr('isExclusive');
      }
    })
   } else {
    $.each($('#gearContainer_enemy .equipment-slot'),function() {
      if (hasEx === 'false') {
      hasEx = $(this).attr('isExclusive');
      }
    })
   }
   
   if (hasEx === 'true') {
    $('#isEx').hide();
   } else {
    $('#isEx').show();
   }

   $('#selectedGearConfirmation .card-title').append(' <p>'+ selected_eqMainstat[0] +' +' + (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selected_eqMainstat[0])) ? selected_eqMainstat[1]:((selected_eqMainstat[1] + Number.EPSILON) * 100).toFixed(1) + '% ') +'</p>')
  $('#selectedGearConfirmation .card-title').attr('value', selected_eqMainstat[0]);
  $('#selectedGearConfirmation .card-title').attr('subvalue', selected_eqMainstat[1]);
  

   $('#staticBackdrop4.modal').modal('show'); //show selected gear modal
   $('#GearRemoveBtn').css('display','block');
    
  }
  
});



// click handler on modal with cards of all gear options
$('#gearSelectionModal').on('click' ,'.card', function(){

  console.time('CreateTooltip')
  
  $('#staticBackdrop3.modal').modal('hide'); //hide previous modal

  var selection_modal_gear_data = GEARS[$(this).attr('value')];
  
  
 const gear_type_loc = selection_modal_gear_data["equip_type"];
 const gear_slot_loc = selection_modal_gear_data["slot"];






selectedGearLatentList = selection_modal_gear_data["latent"];
selectedGearLatentListKeys = Object.keys(selectedGearLatentList);
selectedGearSub1List = selection_modal_gear_data["sub1"];
selectedGearSub1ListKeys = Object.keys(selectedGearSub1List);
selectedGearSub2List = selection_modal_gear_data["sub2"];
selectedGearSub2ListKeys = Object.keys(selectedGearSub2List);
selectedGearSets = selection_modal_gear_data["set_options"];
selectedGearSetList = {};


for (let i = 0, n = selectedGearSets.length; i < n; i++) {
  selectedGearSetList[selectedGearSets[i]] = GEAR_SETS_LIST[selectedGearSets[i]]
}

 const selectedGearSetList_length_loc = Object.keys(selectedGearSetList).length;
 const selectedGearSetList_loc = Object.keys(selectedGearSetList);


 $('#selectedGearModal').html('<div class="text-center"><div class="fw-bold">Select Set</div><div id="gearSetOptions"></div> </div> <div class="img-fluid rounded mx-auto d-block" id="selectedGearConfirmation" value="' + $(this).attr('value') +  '"> <img src="'+ 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + selection_modal_gear_data["icon"] +  '.png' + '" class="card-img-top mx-auto d-block" alt="..."> <div class="card-body"> <h5 class="card-title text-truncate">' + gear_type_loc + '</h5> <div id="subNameValueSplit" class="row row-cols-md-2 g-4"> <p class="card-text">  </p> <p class="card-value"> </p> </div> </div>  </div>')

 if (selection_modal_gear_data["equip_type"] != 'Exclusive' ) {
  $('#GearModalTitle').text(selectedGearUnitType + ' ' + gear_slot_loc);
} else {
  if (selectedGearFor == selectedGear+'Container') {
    $('#GearModalTitle').text(total_unit_data[1] + ' Exclusive Equipment');
  } else {
    $('#GearModalTitle').text(total_target_data[1] + ' Exclusive Equipment');
  }
  

}

 for (let i = 0; i < selectedGearSetList_length_loc; i++) {
  $('#gearSetOptions').append('<button style="background-image: url(&quot;cs_gears-icons/Set Icons/Icon_Set_'+ selectedGearSetList[selectedGearSetList_loc[i]]["name"] +'.png&quot;);" type="button" value="'+ selectedGearSetList[selectedGearSetList_loc[i]]["name"] +'" class="btn btn-primary" name="options" id="gearSetOption'+ [i] +'"> <div style="max-width:20px; display:block"> </div> </button>');
  if (Object.prototype.toString.call(selectedGearSetList[selectedGearSetList_loc[i]]["stat1"]) === '[object Array]') {
    CreateTooltipForAnything($('#gearSetOption'+ [i]),'Set: '+selectedGearSetList[selectedGearSetList_loc[i]]["name"]+'<br /> '+selectedGearSetList[selectedGearSetList_loc[i]]["stat1"][0]+': '+(([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSetList[selectedGearSetList_loc[i]]["amount"][0])) ? selectedGearSetList[selectedGearSetList_loc[i]]["amount"][0]:((Math.round((Number(selectedGearSetList[selectedGearSetList_loc[i]]["amount"][0]) + Number.EPSILON) * 100)) + '% '))+'<br />'+selectedGearSetList[selectedGearSetList_loc[i]]["stat1"][1]+': '+(([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSetList[selectedGearSetList_loc[i]]["amount"][1])) ? selectedGearSetList[selectedGearSetList_loc[i]]["amount"][1]:((Math.round((Number(selectedGearSetList[selectedGearSetList_loc[i]]["amount"][1]) + Number.EPSILON) * 100)) + '% ')));
  
  } else {
    CreateTooltipForAnything($('#gearSetOption'+ [i]),'Set: '+selectedGearSetList[selectedGearSetList_loc[i]]["name"]+'<br /> '+selectedGearSetList[selectedGearSetList_loc[i]]["stat1"]+': '+(([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSetList[selectedGearSetList_loc[i]]["amount"])) ? selectedGearSetList[selectedGearSetList_loc[i]]["amount"]:((Math.round((Number(selectedGearSetList[selectedGearSetList_loc[i]]["amount"]) + Number.EPSILON) * 100)) + '% ')));
    
  }
  
 }

 $('#gearSetOptions button').eq(0).addClass('active').siblings().removeClass('active');
 

 $('#gearSetOptions button').on('click', function() {
  
  
  

  var thisBtn = $(this);
      
      thisBtn.addClass('active').siblings().removeClass('active');
 });

 /* img src="cs_gears-icons/Set Icons/Icon_Set_ASPD.png" alt="" */

 /* cs_gears-icons/Set Icons/Icon_Set_ASPD.png */


 if (selectedGearSub1ListKeys.length == 1) {
  $('#selectedGearConfirmation .card-text').html('<span class="badge bg-secondary">Option 1 [<small>locked</small>]</span><select id="sub1formSelect" class="form-select" aria-label="Disabled select example" disabled> ');
  
} else {
  $('#selectedGearConfirmation .card-text').html('<span class="badge bg-primary">Option 1 [<small>select</small>]</span><select id="sub1formSelect" class="form-select" aria-label="select example"> ');
}
$('#selectedGearConfirmation .card-value').html('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue1">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSub1ListKeys[0])) ? selectedGearSub1List[selectedGearSub1ListKeys[0]]:((((Number(selectedGearSub1List[selectedGearSub1ListKeys[0]]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) +'</div>')
$('#selectedGearConfirmation .card-value').append('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue2">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearSub2ListKeys[0])) ? selectedGearSub2List[selectedGearSub2ListKeys[0]]:((((Number(selectedGearSub2List[selectedGearSub2ListKeys[0]]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) +'</div>')
if (selectedGearSub2ListKeys.length == 1) {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-secondary">Option 2 [<small>locked</small>]</span><select id="sub2formSelect" class="form-select" aria-label="Disabled select example" disabled> ');
} else {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-primary">Option 2 [<small>select</small>]</span><select id="sub2formSelect" class="form-select" aria-label="select example"> ');
}

if (selectedGearLatentListKeys.length > 0) {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-info">Latent Ability [<small>select</small>]</span><select id="sub3formSelect" class="form-select" aria-label="select example"> ');
  $('#selectedGearConfirmation .card-value').append('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue3">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selectedGearLatentListKeys[0])) ? selectedGearLatentList[selectedGearLatentListKeys[0]]:((((Number(selectedGearLatentList[selectedGearLatentListKeys[0]]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) + '</div>')

 
}



 for (let i = 0; i < selectedGearSub1ListKeys.length; i++) {

  $('#selectedGearConfirmation .card-text #sub1formSelect').append('<option value="'+ selectedGearSub1ListKeys[i] +'" subValue="'+ selectedGearSub1List[selectedGearSub1ListKeys[i]] +'"> ' + selectedGearSub1ListKeys[i] + '</option>');
  
 }



 for (let i = 0; i < selectedGearSub2ListKeys.length; i++) {

  $('#selectedGearConfirmation .card-text #sub2formSelect').append('<option value="'+ selectedGearSub2ListKeys[i] +'" subValue="'+ selectedGearSub2List[selectedGearSub2ListKeys[i]] +'"> ' + selectedGearSub2ListKeys[i] + '</option>');
  
 }

if (selectedGearLatentListKeys.length > 0) {
  for (let i = 0; i < selectedGearLatentListKeys.length; i++) {
    $('#selectedGearConfirmation .card-text #sub3formSelect').append('<option value="'+ selectedGearLatentListKeys[i] +'" subValue="'+ selectedGearLatentList[selectedGearLatentListKeys[i]] +'" latent="'+ selectedGearLatentList[selectedGearLatentListKeys[i]] +'"> ' + selectedGearLatentListKeys[i] + '</option>');
    
   }
   
  // setRangeForSub(isRelic[0], selectedGearLatentList[0], selectedGearLatentList[0]);
}

  $('#selectedGearConfirmation .card-text').append('</select>');
 
 
  $('#sub1formSelect').on("change",function() {

    $('#subValue1').html($( "#sub1formSelect option:selected" ).attr('subvalue'));
    $('#subValue1').html((([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === $(this).val())) ? $( "#sub1formSelect option:selected" ).attr('subvalue'):((((Number($( "#sub1formSelect option:selected" ).attr('subvalue')) + Number.EPSILON) * 100)).toFixed(1) + '% ')));
   
  });

  $('#sub2formSelect').on("change",function() {

   // $('#subValue2').html($( "#sub2formSelect option:selected" ).attr('subvalue'));
    $('#subValue2').html((([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === $(this).val())) ? $( "#sub2formSelect option:selected" ).attr('subvalue'):((((Number($( "#sub2formSelect option:selected" ).attr('subvalue')) + Number.EPSILON) * 100)).toFixed(1) + '% ')));
    
  });

  $('#sub3formSelect').on("change",function() {
    $('#subValue3').html((([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === $(this).val())) ? $( "#sub3formSelect option:selected" ).attr('subvalue'):((((Number($( "#sub3formSelect option:selected" ).attr('subvalue')) + Number.EPSILON) * 100)).toFixed(1) + '% ')));
    setRangeForSub($(this).val(),$( "#sub3formSelect option:selected" ).attr('subvalue'),$( "#sub3formSelect option:selected" ).attr('latent'))
    
  });

  

  const gear_mainstat_loc = selection_modal_gear_data["main_stat"][0];
  let gear_mainstat_val = selection_modal_gear_data["main_stat"][1];

  
  
  //+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === gear_mainstat_loc)) ? GEAR_MAIN_STATS_VALUES_T7[(GEAR_MAIN_STATS_VALUES_T7.length/2)+GEAR_MAIN_STATS_VALUES_T7.indexOf(gear_mainstat_loc)]:((GEAR_MAIN_STATS_VALUES_T7[(GEAR_MAIN_STATS_VALUES_T7.length/2)+GEAR_MAIN_STATS_VALUES_T7.indexOf(gear_mainstat_loc)] + Number.EPSILON) * 100).toFixed(1) + '% ') +
  $('#selectedGearConfirmation .card-title').append(' <p>'+ gear_mainstat_loc +' +' + (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === gear_mainstat_loc)) ? gear_mainstat_val:((gear_mainstat_val + Number.EPSILON) * 100).toFixed(1) + '% ') +'</p>')
  $('#selectedGearConfirmation .card-title').attr('value', gear_mainstat_loc);
  $('#selectedGearConfirmation .card-title').attr('subvalue', gear_mainstat_val);
  

  console.timeEnd('CreateTooltip')
});

$('#GearChangeBtn').on('click' , function(){
  $('#staticBackdrop3.modal').modal('show'); //show gear selection modal
  
});

$('#GearRemoveBtn').on('click' , function(){
  switch (selectedGear) {
    case SLOT_WEAPON:
      if (selectedGearFor == selectedGear+'Container') {

        Weapon.removeGear();
        weaponIsConfirmed = false;
        $('#WeaponContainer').attr('isConfirmed','false')
      } else {
        enemy_Weapon.removeGear();
        weaponIsConfirmed = false;
        $('#WeaponContainer_enemy').attr('isConfirmed','false')
      }
      break;
      case SLOT_ARMOR:
        if (selectedGearFor == selectedGear+'Container') {

          Armor.removeGear();
          armorIsConfirmed = false;
          $('#ArmorContainer').attr('isConfirmed','false')
        } else {

          enemy_Armor.removeGear();
          enemy_armorIsConfirmed = false;
          $('#ArmorContainer_enemy').attr('isConfirmed','false')
        }
        break;
          case SLOT_ACCESSORY_1:
            if (selectedGearFor == selectedGear+'Container') {

              Accessory1.removeGear();
              accessory1IsConfirmed = false;
              $('#Accessory1Container').attr('isConfirmed','false')
            } else {

              enemy_Accessory1.removeGear();
              enemy_accessory1IsConfirmed = false;
              $('#enemy_Accessory1Container').attr('isConfirmed','false')
            }
        break;
          case SLOT_ACCESSORY_2:
            if (selectedGearFor == selectedGear+'Container') {

              Accessory2.removeGear();
              accessory2IsConfirmed = false;
              $('#Accessory2Container').attr('isConfirmed','false')
            } else {

              enemy_Accessory2.removeGear();
              enemy_accessory2IsConfirmed = false;
              $('#enemy_Accessory2Container').attr('isConfirmed','false')
            }
        break;
    default:
      break;
   }
   var unit_stats = $('#searched-unitID-values').attr('value').split(",");
   UpdateUnitAndTarget(unit_stats);
   CalcUnitDMG()
});


$('#GearConfirmationBtn').on('click' , function(){

  var confirmation_gear_data = $('#selectedGearConfirmation').attr('value'); //getting gear data from html DOM element
  /* var gear_data = selectedGearStats; */ //getting gear data from variable declared earlier (instead^)
  /* var selected_gear = $('#gearContainer').attr('value'); // saving variable into dom element (not doing cause using global variable)

  console.log('selected gear = ' + selected_gear) */



  var substat1_value = $('#sub1formSelect').val();
  var substat2_value = $('#sub2formSelect').val();
  var latent_value = $('#sub3formSelect').val();

  var substat1_subvalue = $( "#sub1formSelect option:selected" ).attr('subvalue');
  var substat2_subvalue = $( "#sub2formSelect option:selected" ).attr('subvalue');
  var latent_subvalue = $( "#sub3formSelect option:selected" ).attr('latent');

  var gear_set_value = $('#gearSetOptions button.active').attr('value');

  /* var selectedGearSetOption = selectedGearSetList[gear_set_value]; */

  const gear_data_loc = GEARS[confirmation_gear_data];
  const gear_mainstat_loc = gear_data_loc["main_stat"];
 
  let gear_mainstat_val = gear_mainstat_loc[1];
  if (gear_data_loc["equip_type"] !== 'Exclusive') {
    if (selectedGearFor == selectedGear+'Container') {
    $('#'+selectedGear+'Container').attr('isExclusive','false');
      
    } else {
    $('#'+selectedGear+'Container_enemy').attr('isExclusive','false');

    }
  } else {
    if (selectedGearFor == selectedGear+'Container') {
    $('#'+selectedGear+'Container').attr('isExclusive','true');
      
    } else {
    $('#'+selectedGear+'Container_enemy').attr('isExclusive','true');

    }
  }


 /* gear = new Gear('Maze',SLOT_WEAPON,'7','HP','Anti-Ground DMG RES','Crit DMG RES','cs_gears-icons/Special Gear/Icon_Counter_Weapon_Maze.png'); */

 /* gear = new Gear(gear_data.split(',')[1],selectedGearType,"7",gear_data.split(',')[5],substat1_value,substat2_value,'cs_gears-icons/Special Gear/' + gear_data.split(',')[4] + '.png') */
 console.log("selectedGear = ");
 console.log(selectedGear);
 
 switch (selectedGear) {
  case SLOT_WEAPON:
    if (selectedGearFor == selectedGear+'Container') {
      Weapon.selectedGearData = confirmation_gear_data;
    Weapon.name = gear_data_loc["gear_name"];
    Weapon.eqSlot = selectedGear;
    Weapon.eqTier = "7";
    Weapon.eqSet = gear_set_value;
    Weapon.eqSet_Options = selectedGearSetList;
    Weapon.sub1 = [substat1_value,substat1_subvalue];
    Weapon.sub2 = [substat2_value,substat2_subvalue];
    Weapon.latent = [latent_value,latent_subvalue];
    Weapon.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc["icon"] + '.png';
    Weapon.mainStat = [gear_mainstat_loc[0],gear_mainstat_val]; 
    Weapon.setGear();
    //Weapon.showMainStat();
    weaponIsConfirmed = true;
    //$('#WeaponContainer').attr('isConfirmed','true');
    } else {
      enemy_Weapon.selectedGearData = confirmation_gear_data;
      enemy_Weapon.name = gear_data_loc["gear_name"];
      enemy_Weapon.eqSlot = selectedGear;
      enemy_Weapon.eqTier = "7";
      enemy_Weapon.eqSet = gear_set_value;
      enemy_Weapon.eqSet_Options = selectedGearSetList;
      enemy_Weapon.sub1 = [substat1_value,substat1_subvalue];
      enemy_Weapon.sub2 = [substat2_value,substat2_subvalue];
      enemy_Weapon.latent = [latent_value,latent_subvalue];
      enemy_Weapon.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc["icon"] + '.png';
      enemy_Weapon.mainStat = [gear_mainstat_loc[0],gear_mainstat_val]; 
      enemy_Weapon.setGear();
    //Weapon.showMainStat();
    enemy_weaponIsConfirmed = true;
    //$('#WeaponContainer_enemy').attr('isConfirmed','true')
    }
    
    break;
    case SLOT_ARMOR:

    if (selectedGearFor == selectedGear+'Container') {
      console.log("checking armor");
      console.log(confirmation_gear_data);
      console.log(selectedGear);
      console.log(gear_set_value);
      
      Armor.selectedGearData = confirmation_gear_data;
      Armor.name = gear_data_loc["gear_name"];
      Armor.eqSlot = selectedGear;
      Armor.eqTier = "7";
      Armor.eqSet = gear_set_value;
      Armor.eqSet_Options = selectedGearSetList;
      Armor.sub1 = [substat1_value,substat1_subvalue];
      Armor.sub2 = [substat2_value,substat2_subvalue];
      Armor.latent = [latent_value,latent_subvalue];
      Armor.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc["icon"] + '.png';
      Armor.mainStat = [gear_mainstat_loc[0],gear_mainstat_val]; 
      Armor.setGear();
      //Armor.showMainStat();

      console.log(Armor);

      armorIsConfirmed = true;
      //$('#ArmorContainer').attr('isConfirmed','true')
    } else {
      enemy_Armor.selectedGearData = confirmation_gear_data;
      enemy_Armor.name = gear_data_loc["gear_name"];
      enemy_Armor.eqSlot = selectedGear;
      enemy_Armor.eqTier = "7";
      enemy_Armor.eqSet = gear_set_value;
      enemy_Armor.eqSet_Options = selectedGearSetList;
      enemy_Armor.sub1 = [substat1_value,substat1_subvalue];
      enemy_Armor.sub2 = [substat2_value,substat2_subvalue];
      enemy_Armor.latent = [latent_value,latent_subvalue];
      enemy_Armor.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc["icon"] + '.png';
      enemy_Armor.mainStat = [gear_mainstat_loc[0],gear_mainstat_val]; 
      enemy_Armor.setGear();
      //enemy_Armor.showMainStat();
      enemy_ArmorIsConfirmed = true;
      //$('#ArmorContainer_enemy').attr('isConfirmed','true')
    }
      
      break;
        case SLOT_ACCESSORY_1:

        if (selectedGearFor == selectedGear+'Container') {
          Accessory1.selectedGearData = confirmation_gear_data;
          Accessory1.name = gear_data_loc["gear_name"];
          Accessory1.eqSlot = selectedGear;
          Accessory1.eqTier = "7";
          Accessory1.eqSet = gear_set_value;
          Accessory1.eqSet_Options = selectedGearSetList;
          Accessory1.sub1 = [substat1_value,substat1_subvalue];
          Accessory1.sub2 = [substat2_value,substat2_subvalue];
          Accessory1.latent = [latent_value,latent_subvalue];
          Accessory1.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc["icon"] + '.png';
          Accessory1.mainStat = [gear_mainstat_loc[0],gear_mainstat_val]; 
          Accessory1.setGear();
          //Accessory1.showMainStat();
          accessory1IsConfirmed = true;
          //$('#Accessory1Container').attr('isConfirmed','true')
        } else {
          enemy_Accessory1.selectedGearData = confirmation_gear_data;
          enemy_Accessory1.name = gear_data_loc["gear_name"];
          enemy_Accessory1.eqSlot = selectedGear;
          enemy_Accessory1.eqTier = "7";
          enemy_Accessory1.eqSet = gear_set_value;
          enemy_Accessory1.eqSet_Options = selectedGearSetList;
          enemy_Accessory1.sub1 = [substat1_value,substat1_subvalue];
          enemy_Accessory1.sub2 = [substat2_value,substat2_subvalue];
          enemy_Accessory1.latent = [latent_value,latent_subvalue];
          enemy_Accessory1.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc["icon"] + '.png';
          enemy_Accessory1.mainStat = [gear_mainstat_loc[0],gear_mainstat_val]; 
          enemy_Accessory1.setGear();
          //enemy_Accessory1.showMainStat();
          enemy_Accessory1IsConfirmed = true;
          //$('#Accessory1Container_enemy').attr('isConfirmed','true')
        }
        
      
      break;
        case SLOT_ACCESSORY_2:

        if (selectedGearFor == selectedGear+'Container') {
          Accessory2.selectedGearData = confirmation_gear_data;
          Accessory2.name = gear_data_loc["gear_name"];
          Accessory2.eqSlot = selectedGear;
          Accessory2.eqTier = "7";
          Accessory2.eqSet = gear_set_value;
          Accessory2.eqSet_Options = selectedGearSetList;
          Accessory2.sub1 = [substat1_value,substat1_subvalue];
          Accessory2.sub2 = [substat2_value,substat2_subvalue];
          Accessory2.latent = [latent_value,latent_subvalue];
          Accessory2.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc["icon"] + '.png';
          Accessory2.mainStat = [gear_mainstat_loc[0],gear_mainstat_val]; 
          Accessory2.setGear();
          //Accessory2.showMainStat();
          accessory2IsConfirmed = true;
          //$('#Accessory2Container').attr('isConfirmed','true')
        } else {
          enemy_Accessory2.selectedGearData = confirmation_gear_data;
          enemy_Accessory2.name = gear_data_loc["gear_name"];
          enemy_Accessory2.eqSlot = selectedGear;
          enemy_Accessory2.eqTier = "7";
          enemy_Accessory2.eqSet = gear_set_value;
          enemy_Accessory2.eqSet_Options = selectedGearSetList;
          enemy_Accessory2.sub1 = [substat1_value,substat1_subvalue];
          enemy_Accessory2.sub2 = [substat2_value,substat2_subvalue];
          enemy_Accessory2.latent = [latent_value,latent_subvalue];
          enemy_Accessory2.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc["icon"] + '.png';
          enemy_Accessory2.mainStat = [gear_mainstat_loc[0],gear_mainstat_val]; 
          enemy_Accessory2.setGear();
          //enemy_Accessory2.showMainStat();
          enemy_Accessory2IsConfirmed = true;
          //$('#Accessory2Container_enemy').attr('isConfirmed','true')
        }

      
      break;
  default:
    break;
 }
 
 /* var unit_stats = $('#searched-unitID-values').attr('value').split(",");

 UpdateUnitStats(unit_stats); */

$('.modal').modal('hide'); //after click "Confirm" button on last modal, closing all modals on web-page
console.time('ConfirmGearBtn_timer')
var unit_stats = $('#searched-unitID-values').attr('value').split(",");
UpdateUnitAndTarget(unit_stats);
CalcUnitDMG()
console.timeEnd('ConfirmGearBtn_timer')
});

$('#UpdateStatsBtn').on('click' , function(){
  
  
  var unit_stats = $('#searched-unitID-values').attr('value').split(",");

  
/* console.clear(); */

console.time('UpdateStatsBtn')
UpdateUnitAndTarget(unit_stats);
CalcUnitDMG();
console.timeEnd('UpdateStatsBtn')
  
  
});

