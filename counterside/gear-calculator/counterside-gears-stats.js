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
const JUNGLE_ACCS_LATENT_STATS_VALUES_LIST = [87, 87, 1598, 0.083, 0.352, 0.082, 0.068, 0.147, 0.099, 0.0178];


const VOLCANO_LATENT_STATS_OPTION_LIST = [SPEC_AMP, ULT_AMP, ATK_PERCENT, CDMG, STATUS_RES, ASPD, DEF_PEN, "Anti-Counter DMG", "Anti-Soldier DMG", "Anti-Mech DMG"];
const VOLCANO_GEAR_LATENT_STATS_VALUES_LIST = [0.109, 0.109, 0.076, 0.15, 0.063, 0.063, 0.069, 0.128, 0.128, 0.128];
const VOLCANO_ACCS_LATENT_STATS_VALUES_LIST = [0.119, 0.119, 0.083, 0.163, 0.068, 0.068, 0.079, 0.142, 0.142, 0.142];

// units EE's
const UNITS_W_EE = ['Post-War Administration Bureau Millia Rage','Flame of Corruption Sol Badguy','Future-at-War Titan','Triaina Plan Titan','Delta Seven Kyle Wong','Fallen Hawk Rosaria le Friede']

const MILLIA_RAGE_GEAR_STATS_VALUES_LIST_1 = [0.242];
const MILLIA_RAGE_GEAR_STATS_VALUES_LIST_2 = [0.244,0.122,0.488,0.061,0.183];

const SOL_BADGUY_GEAR_STATS_VALUES_LIST_1 = [0.052];
const SOL_BADGUY_GEAR_STATS_VALUES_LIST_2 = [0.11,0.44,0.055,0.165];

const TITAN_KYLE_GEAR_STATS_VALUES_LIST_1 = [0.121];
const TITAN_KYLE_GEAR_STATS_VALUES_LIST_2 = [0.242,0.121,0.462,0.066,0.183];

const ROSARIA_GEAR_STATS_VALUES_LIST_1 = [0.183];


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



var GearSetsListBasic = {
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



var GearSetsListSpectral = {
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

var GearSetsListPhantom = {
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

var GearSetsListTrinity = {
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

/* var GearSetsListTrinity = {
  
}; */




  class Gear {
    constructor(){
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
  }
    showMainStat() {
      console.log(`[1]name = ${this.name}`);
      console.log(`mainStat = ${this.mainStat}` + `name = ${this.name}`+ `sub1 = ${this.sub1}`+ `sub2 = ${this.sub2}`
      + `set = ${this.eqSet}`+ `tier = ${this.eqTier}`+ `icon = ${this.eqIcon}`);
      
      
    
    }

    setGear(selectedFor) {


      if ((selectedFor === 0)) {
        $('#' + `${this.#eqSlot}` + 'Container').css('background-image',"url('"+`${this.#eqIcon}`+"')");
        $('#' + `${this.#eqSlot}` + 'Container img').attr('src','cs_gears-icons/Set Icons/Icon_Set_'+`${this.#eqSet}`+'.png');
        $('#' + `${this.#eqSlot}` + 'Container img').removeAttr('hidden');
        $('#' + `${this.#eqSlot}` + 'Container').attr('isConfirmed','true')
      } else{
        $('#' + `${this.#eqSlot}` + 'Container_enemy').css('background-image',"url('"+`${this.#eqIcon}`+"')");
        $('#' + `${this.#eqSlot}` + 'Container_enemy img').attr('src','cs_gears-icons/Set Icons/Icon_Set_'+`${this.#eqSet}`+'.png');
        $('#' + `${this.#eqSlot}` + 'Container_enemy img').removeAttr('hidden');
        $('#' + `${this.#eqSlot}` + 'Container_enemy').attr('isConfirmed','true')
      }

      
    }


    removeGear(ContainerType) {

      /* if (selectedGearFor == selectedGear+'Container') {

        $('#' + `${this.#eqSlot}` + ContainerType).css('background-image',"none");
        $('#' + `${this.#eqSlot}` + ContainerType + ' img').attr('src','');
        $('#' + `${this.#eqSlot}` + ContainerType + ' img').attr("hidden",true);


      } else {
        $('#' + `${this.#eqSlot}` + ContainerType).css('background-image',"none");
        $('#' + `${this.#eqSlot}` + ContainerType + ' img').attr('src','');
        $('#' + `${this.#eqSlot}` + ContainerType + ' img').attr("hidden",true);
      } */

        $('#' + `${this.#eqSlot}` + ContainerType).css('background-image',"none");
        $('#' + `${this.#eqSlot}` + ContainerType + ' img').attr('src','');
        $('#' + `${this.#eqSlot}` + ContainerType + ' img').attr("hidden",true);
        $('#' + `${this.#eqSlot}` + ContainerType).attr('isConfirmed','false')
        $('#' + `${this.#eqSlot}` + ContainerType).attr('isExclusive','false')

    this.#selectedGearData = 0;
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

    replaceGearByUnitType(GearForType, ContainerType, GearData, GearMainStatValues) {

      
      var gdata = this.#selectedGearData.split(',');
      var gdata_icon = gdata[4].split('_');

      

      gdata_icon[1] = GearForType;
      for (let i = 0; i < gdata_icon.length; i++) {
        if (i<gdata_icon.length-1) {
          gdata_icon[i] += '_';
        }
        
        
      }


      gdata[3] = GearForType;

      gdata[4]=String(gdata_icon).replace(/,/g,'');

      gdata = String(gdata);


/*       console.log('gdata');
      console.log(gdata);
      console.log(gdata.split(',')[4]); */
      
      if (GearData.indexOf(gdata) > -1) {
        let gdis = gdata.split(',');


        this.#selectedGearData = gdata;
          this.#eqIcon = 'cs_gears-icons/Special Gear/'+GearForType+'/' + gdis[4] +  '.png';
          if (gdis[0] !== 'Exclusive') {
          this.#mainStat[1] = GearMainStatValues[(GearMainStatValues.length/2)+GearMainStatValues.indexOf(gdis[5])]
          $('#' + `${this.#eqSlot}` + ContainerType).attr('isExclusive','false');
          } else {
            if (ContainerType === 'Container') {
              this.#mainStat[1] = GEAR_MAIN_STATS_VALUES_T7_unit_EE;
              $('#' + `${this.#eqSlot}` + ContainerType).attr('isExclusive','true');
          } else {
              this.#mainStat[1] = GEAR_MAIN_STATS_VALUES_T7_target_EE;
              $('#' + `${this.#eqSlot}` + ContainerType).attr('isExclusive','true');
            }

          }
          $('#' + `${this.#eqSlot}` + ContainerType).css('background-image',"url('"+`${this.#eqIcon}`+"')");
      
    } else {
      this.removeGear(ContainerType);
    }
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
        setOptions = GearSetsListBasic;
      } else if (gdt_stype === 'Spectral') {
        setOptions = GearSetsListSpectral;
      } else if (gdt_stype === 'Phantom') {
        setOptions = GearSetsListPhantom;
      } else if (gdt_stype === 'Jungle') {
        setOptions = GearSetsListTrinity;
      } else if (gdt_stype === 'Volcano') {
        setOptions = GearSetsListTrinity;
      } else {
        setOptions = GearSetsListBasic;
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
      

      /* var setOptions;

      if (['Maze','Challenger','Inhibitor','Britra','Swift','Devoted','Polymer','Sc. Dante','Sincere','Courageous','Loyal'].indexOf(this.#name) > -1) {
        setOptions = GearSetsListBasic;
      } else if (this.#name === 'Spectral') {
        setOptions = GearSetsListSpectral;
      } else if (this.#name === 'Phantom') {
        setOptions = GearSetsListPhantom;
      } else if (this.#name === 'Jungle') {
        setOptions = GearSetsListTrinity;
      } else if (this.#name === 'Volcano') {
        setOptions = GearSetsListTrinity;
      } else {
        setOptions = GearSetsListBasic;
      } */
      

      let latentVal = this.#latent;
      let url_Gear_Latent;
      if (this.#latent != ",") {
        url_Gear_Latent = BONUS_STATS_LIST.indexOf(latentVal[0]) + "_" + latentVal[1];
      } else {
        url_Gear_Latent = "";
      }

      let url_Gear_Name = this.#name;
      let url_Gear_Sub1 = BONUS_STATS_LIST.indexOf(this.#sub1[0]) + "_" + this.#sub1[1];
      let url_Gear_Sub2 = BONUS_STATS_LIST.indexOf(this.#sub2[0]) + "_" + this.#sub2[1];
      
      let url_Gear_Set = Object.keys(this.#eqSet_Options).indexOf(this.#eqSet);
   

      return [url_Gear_Name,url_Gear_Sub1,url_Gear_Sub2,url_Gear_Latent,url_Gear_Set,this.#mainStat[0]].toString();
    } else {
      return "";
    }
    }

    setValuesByUrl(urlGearVal,GearMainStatValues,searchTerm,searchGearData,eq_Slot) {


      urlGearVal = urlGearVal.split(",");
      let n;
      let m = searchGearData.length;
      for (let i = 0; i < m; i++) {
        if ((searchGearData[i].includes(searchTerm) == true) && (searchGearData[i].indexOf(urlGearVal[5]) > -1)) {
          n = i;
        }

      }
      if (n == undefined) {
        return false;
      }

      let sgd = searchGearData[n];

      let sub1_val = urlGearVal[1].split('_');
      let sub2_val = urlGearVal[2].split('_');
      let latent_val = urlGearVal[3].split('_');

      let sgearData = sgd.split(",");
      console.log(sgearData[5])

      var setOptions;

      if (['Maze','Challenger','Inhibitor','Britra','Swift','Devoted','Polymer','Sc. Dante','Sincere','Courageous','Loyal'].indexOf(urlGearVal[0]) > -1) {
        setOptions = GearSetsListBasic;
      } else if (urlGearVal[0] === 'Spectral') {
        setOptions = GearSetsListSpectral;
      } else if (urlGearVal[0] === 'Phantom') {
        setOptions = GearSetsListPhantom;
      } else if (urlGearVal[0] === 'Jungle') {
        setOptions = GearSetsListTrinity;
      } else if (urlGearVal[0] === 'Volcano') {
        setOptions = GearSetsListTrinity;
      } else {
        setOptions = GearSetsListBasic;
      }

      this.#selectedGearData = sgd;
      this.#name = urlGearVal[0];
      this.#eqSlot = eq_Slot;
      this.#eqTier = 7;
      this.#eqSet = setOptions[Object.keys(setOptions)[Number(urlGearVal[4])]]['name'];
      this.#sub1 = [BONUS_STATS_LIST[sub1_val[0]],sub1_val[1]];
      this.#sub2 = [BONUS_STATS_LIST[sub2_val[0]],sub2_val[1]];
      this.#latent = [BONUS_STATS_LIST[latent_val[0]],latent_val[1]];
      this.#eqIcon =  'cs_gears-icons/Special Gear/'+searchTerm.split(",")[2]+'/' + sgearData[4] +  '.png';
      this.#mainStat = [sgearData[5],GearMainStatValues[(GearMainStatValues.length/2)+GearMainStatValues.indexOf(sgearData[5])]];
      
      this.#eqSet_Options = setOptions;

      


      return true;
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

  Weapon = new Gear()
  Armor = new Gear()
  Accessory1 = new Gear()
  Accessory2 = new Gear()

  enemy_Weapon = new Gear()
  enemy_Armor = new Gear()
  enemy_Accessory1 = new Gear()
  enemy_Accessory2 = new Gear()


 

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

  var full_gear_data;

  if (selectedGearFor == selectedGear+'Container') {
    selectedGearUnitType = currentUnitType;
    full_gear_data = $('#gearData').html().slice(1); 
    GEAR_MAIN_STATS_VALUES_T7 = GEAR_MAIN_STATS_VALUES_T7_unit;
    GEAR_MAIN_STATS_VALUES_T7_EE = GEAR_MAIN_STATS_VALUES_T7_unit_EE;
  } else {
    selectedGearUnitType = currentTargetType;
    full_gear_data = $('#gearData_enemy').html().slice(1); 
    GEAR_MAIN_STATS_VALUES_T7 = GEAR_MAIN_STATS_VALUES_T7_target;
    GEAR_MAIN_STATS_VALUES_T7_EE = GEAR_MAIN_STATS_VALUES_T7_target_EE;
  }


  
  var gear_data = full_gear_data.split('","');

  


  

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
 

  for (var i = 0; i < gear_data.length; i++) {
    let gdis = gear_data[i].split(',');
    if( (gdis.indexOf(selectedGearAcc) > -1)) {
      let isEx = '';
      if (gdis[0] === 'Exclusive') {
        isEx = 'id="isEx"';
      }
      

      /* console.log("Found: " + gear_data[i]) */
      $('#gearSelectionModal').append('<div class="col" '+isEx+'> <div class="card" data-bs-target="#staticBackdrop4" data-bs-toggle="modal" value="' + gear_data[i] +  '"> <img src="'+ 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gdis[4] +  '.png' + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title text-truncate">' + gdis[1] + '</h5>  <p class="card-text"> Main stat: '+ gdis[5] +' </p> </div> </div> </div>')
      
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

    
    /* switch (currentUnitType) {
      case COUNTER:
        selected_gear_data[3] = COUNTER;
        selected_gear_data[4] = selected_gear_data[4].split('_')[1] = COUNTER;
        break;
        case SOLDIER:
          selected_gear_data[3] = SOLDIER;
          selected_gear_data[4] = selected_gear_data[4].split('_')[1] = SOLDIER;
        break;
        case MECH:
          selected_gear_data[3] = MECH;
          selected_gear_data[4] = selected_gear_data[4].split('_')[1] = MECH;
        break;
    
      default:
        break;
    } */


    

    

    var selection_modal_gear_data = selected_gear_data;



    var smgdArr = selection_modal_gear_data.split(',');
  
    const gear_type_loc = smgdArr[1];
    const gear_slot_loc = smgdArr[2];
  

/* 
  var gearSubs = selection_modal_gear_data.split(',').slice(6).concat(STATS_OPTION_LIST);
  

  var gearSub1 = [];
  var gearSub2 = [];
 
 for (var i = 0; i < STATS_OPTION_LIST.length; i++) {
   if (gearSubs[i] != "") {
     gearSub1[i] = gearSubs[i];
     gearSub2[i] = gearSubs[i+(gearSubs.length/2)];
   }
 }

 gearSub1 = gearSub1.filter(elm => elm);
 gearSub2 = gearSub2.filter(elm => elm);


 var sub1Final = [];
 var sub2Final = [];

 var numS = 0;




 while (numS < gearSub1.length) {
  if (gearSub1[numS] == 1) {
    sub1Final[numS] = gearSub2[numS];
    if (gearSub2[numS] == HP && gear_type_loc == "Jungle") {sub1Final[numS] = HP_PERCENT}
  } else if (gearSub1[numS] == 2) {
    sub2Final[numS] = gearSub2[numS];
  }
  numS++;
}

sub1Final = sub1Final.filter(elm => elm);
sub2Final = sub2Final.filter(elm => elm); */ // old variant (garbage performance)

console.time('subs_alt')
var sc = smgdArr.slice(6)
var sub1Final = [];
var sub2Final = [];

for (let i = 0, n = STATS_OPTION_LIST.length; i < n; i++) {
  if (sc[i] !== '') {
    if (sc[i].includes('1') === true) {
      if (STATS_OPTION_LIST[i] == HP && gear_type_loc == "Jungle") {
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


console.timeEnd('subs_alt')



    var isRelic = [];

 switch (gear_type_loc) {
  case "Inhibitor":
    isRelic = INHIBITOR_LATENT_STATS_OPTION_LIST;
    break;
   case "Britra":
    isRelic = BRITRA_LATENT_STATS_OPTION_LIST;
    break;
   case "Swift":
    isRelic = SWIFT_LATENT_STATS_OPTION_LIST;
    break;
   case "Jungle":
    isRelic = JUNGLE_LATENT_STATS_OPTION_LIST;
    break;
   case "Volcano":
    isRelic = VOLCANO_LATENT_STATS_OPTION_LIST;
    break;
  default:
    break;
 };

 let selectedGearStats = selected_gear_data.split(',');
 selectedGearType = selectedGearStats[1];



 // NOTE! changed all selectedGearSlot to selectedGearSlotList down here
 

 switch (gear_type_loc) {
  case "Maze":
    if((selectedGear == SLOT_WEAPON)|| (selectedGear == SLOT_ARMOR)){
    selectedGearSub1List = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
  } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  selectedGearLatentList = '';
  break;
  case "Loyal":
  selectedGearSub1List = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  selectedGearLatentList = '';
  break;
  case "Devoted":
  selectedGearSub1List = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  selectedGearLatentList = '';
  break;
  case "Courageous":
  selectedGearSub1List = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  selectedGearLatentList = '';
  break;
  case "Sincere":
  selectedGearSub1List = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  selectedGearLatentList = '';
  break;
  case "Challenger":
    if((selectedGear == SLOT_WEAPON)|| (selectedGear == SLOT_ARMOR)){
      selectedGearSub1List = CHALLENGER_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = CHALLENGER_GEAR_SUBSTATS_VALUES_LIST_2;
    } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
      selectedGearSub1List = CHALLENGER_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = CHALLENGER_ACCS_SUBSTATS_VALUES_LIST_2;
    }
  selectedGearSetList = GearSetsListBasic;
  selectedGearLatentList = '';
  break;
  case "Hummingbird":
  selectedGearSub1List = HUMMINGBIRD_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = HUMMINGBIRD_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  selectedGearLatentList = '';
  break;
  case "Gordias":
    selectedGearSub1List = GORDIAS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = GORDIAS_SUBSTATS_VALUES_LIST_2;
    selectedGearSetList = GearSetsListBasic;
    selectedGearLatentList = '';
  break;
  case "Spectral":
    if(selectedGear == (SLOT_WEAPON)){
    selectedGearSub1List = SPECTRAL_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SPECTRAL_WEAPON_SUBSTATS_VALUES_LIST_2;
  } else if (selectedGear == (SLOT_ARMOR)) {
    selectedGearSub1List = SPECTRAL_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SPECTRAL_ARMOR_SUBSTATS_VALUES_LIST_2;
  } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = SPECTRAL_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SPECTRAL_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearLatentList = '';
  selectedGearSetList = GearSetsListSpectral;
  break;
  case "Phantom":
    if(selectedGear == (SLOT_WEAPON)){
    selectedGearSub1List = PHANTOM_GEAR_SUBSTATS_VALUES_LIST_1; 
    selectedGearSub2List = PHANTOM_WEAPON_SUBSTATS_VALUES_LIST_2;
  } else if (selectedGear == (SLOT_ARMOR)) {
    selectedGearSub1List = PHANTOM_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = PHANTOM_ARMOR_SUBSTATS_VALUES_LIST_2;
  } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = PHANTOM_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = PHANTOM_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearLatentList = '';
  selectedGearSetList = GearSetsListPhantom;
  break;
  case "Polymer":
    if(selectedGear == (SLOT_WEAPON)){
    selectedGearSub1List = POLYMER_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = POLYMER_WEAPON_SUBSTATS_VALUES_LIST_2;
  } else if (selectedGear == (SLOT_ARMOR)) {
    selectedGearSub1List = POLYMER_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = POLYMER_ARMOR_SUBSTATS_VALUES_LIST_2;
  } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = POLYMER_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = POLYMER_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearLatentList = '';
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Sc. Dante":
    if(selectedGear == (SLOT_WEAPON)){
    selectedGearSub1List = SC_DANTE_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SC_DANTE_WEAPON_SUBSTATS_VALUES_LIST_2;
  } else if (selectedGear == (SLOT_ARMOR)) {
    selectedGearSub1List = SC_DANTE_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SC_DANTE_ARMOR_SUBSTATS_VALUES_LIST_2;
  } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = SC_DANTE_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SC_DANTE_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearLatentList = '';
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Inhibitor":
    if((selectedGear == SLOT_WEAPON) || (selectedGear == SLOT_ARMOR)){
    selectedGearSub1List = INHIBITOR_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = INHIBITOR_GEAR_SUBSTATS_VALUES_LIST_2;
    selectedGearLatentList = INHIBITOR_GEAR_LATENT_STATS_VALUES_LIST;
  } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = INHIBITOR_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = INHIBITOR_ACCS_SUBSTATS_VALUES_LIST_2;
    selectedGearLatentList = INHIBITOR_ACCS_LATENT_STATS_VALUES_LIST;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
   case "Britra":
    if((selectedGear == SLOT_WEAPON) || (selectedGear == SLOT_ARMOR)){
      selectedGearSub1List = BRITRA_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = BRITRA_GEAR_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = BRITRA_GEAR_LATENT_STATS_VALUES_LIST;
    } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
      selectedGearSub1List = BRITRA_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = BRITRA_ACCS_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = BRITRA_ACCS_LATENT_STATS_VALUES_LIST;
    }
    selectedGearSetList = GearSetsListBasic;
    break;
   case "Swift":
    if((selectedGear == SLOT_WEAPON) || (selectedGear == SLOT_ARMOR)){
      selectedGearSub1List = SWIFT_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = SWIFT_GEAR_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = SWIFT_GEAR_LATENT_STATS_VALUES_LIST;
    } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
      selectedGearSub1List = SWIFT_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = SWIFT_ACCS_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = SWIFT_ACCS_LATENT_STATS_VALUES_LIST;
    }
    selectedGearSetList = GearSetsListBasic;
    break;
   case "Jungle":
    if((selectedGear == SLOT_WEAPON) || (selectedGear == SLOT_ARMOR)){
      selectedGearSub1List = JUNGLE_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = JUNGLE_GEAR_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = JUNGLE_GEAR_LATENT_STATS_VALUES_LIST;
    } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
      selectedGearSub1List = JUNGLE_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = JUNGLE_ACCS_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = JUNGLE_ACCS_LATENT_STATS_VALUES_LIST;
    }
    selectedGearSetList = GearSetsListTrinity;
    break;
   case "Volcano":
    if((selectedGear == SLOT_WEAPON) || (selectedGear == SLOT_ARMOR)){
      selectedGearSub1List = VOLCANO_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = VOLCANO_GEAR_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = VOLCANO_GEAR_LATENT_STATS_VALUES_LIST;
    } else if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
      selectedGearSub1List = VOLCANO_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = VOLCANO_ACCS_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = VOLCANO_ACCS_LATENT_STATS_VALUES_LIST;
    }
    selectedGearSetList = GearSetsListTrinity;
    break;
    case "Cat Brooch":
    if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = MILLIA_RAGE_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = MILLIA_RAGE_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Gear Cell Suppressor":
    if ((selectedGear == SLOT_ARMOR)) {
    selectedGearSub1List = SOL_BADGUY_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = SOL_BADGUY_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "TCS Module":
    if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Tactical Comms Gear":
    if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Throne of Ashes":
    if ((selectedGear == SLOT_ACCESSORY_1) || (selectedGear == SLOT_ACCESSORY_2)) {
    selectedGearSub1List = ROSARIA_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  

  
  default:
    break;
 };

 
 
 
 const selectedGearSetList_length_loc = Object.keys(selectedGearSetList).length;
 const selectedGearSetList_loc = Object.keys(selectedGearSetList);



    $('#selectedGearModal').html('<div class="text-center"><div class="fw-bold">Select Set</div><div id="gearSetOptions"></div></div> <div class="img-fluid rounded mx-auto d-block" id="selectedGearConfirmation" value="' + selected_gear_data +  '"> <img src="'+ 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + selectedGearStats[4] +  '.png' + '" class="card-img-top mx-auto d-block" alt="..."> <div class="card-body"> <h5 class="card-title text-truncate">' + selectedGearStats[1] + '</h5> <div id="subNameValueSplit" class="row row-cols-md-2 g-4"> <p class="card-text">  </p> <p class="card-value"> </p> </div> </div>  </div>')

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

 if (sub1Final.length == 1) {
  $('#selectedGearConfirmation .card-text').html('<span class="badge bg-secondary">Option 1 [<small>locked</small>]</span><select id="sub1formSelect" class="form-select" aria-label="Disabled select example" disabled> ');
  
} else {
  $('#selectedGearConfirmation .card-text').html('<span class="badge bg-primary">Option 1 [<small>select</small>]</span><select id="sub1formSelect" class="form-select" aria-label="select example"> ');
}
$('#selectedGearConfirmation .card-value').html('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue1">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selected_eqSub1[0])) ? selected_eqSub1[1]:((((Number(selected_eqSub1[1]) + Number.EPSILON) * 100)).toFixed(1) + '% '))  +'</div>')
$('#selectedGearConfirmation .card-value').append('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue2">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selected_eqSub2[0])) ? selected_eqSub2[1]:((((Number(selected_eqSub2[1]) + Number.EPSILON) * 100)).toFixed(1) + '% '))  +'</div>')
if (sub2Final.length == 1) {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-secondary">Option 2 [<small>locked</small>]</span><select id="sub2formSelect" class="form-select" aria-label="Disabled select example" disabled> ');
} else {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-primary">Option 2 [<small>select</small>]</span><select id="sub2formSelect" class="form-select" aria-label="select example"> ');
}

if (isRelic.length > 0) {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-info">Latent Ability [<small>select</small>]</span><select id="sub3formSelect" class="form-select" aria-label="select example"> ');
  $('#selectedGearConfirmation .card-value').append('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue3">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === selected_eqLatent[0])) ? selected_eqLatent[1]:((((Number(selected_eqLatent[1]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) +'</div>')

  
}




 for (let i = 0; i < sub1Final.length; i++) {
  var a;
  if (sub1Final[i] == selected_eqSub1[0]) {
    a = "selected";
  } else {
    a = ""
  }

  $('#selectedGearConfirmation .card-text #sub1formSelect').append('<option value="'+ sub1Final[i] +'" '+ a +' subValue="'+ selectedGearSub1List.concat(Array(Number(sub1Final.length)).fill(selectedGearSub1List[selectedGearSub1List.length-1]))[i] +'">' + sub1Final[i] + '</option>');
  
 }


 for (let i = 0; i < sub2Final.length; i++) {
  var a;
  if (sub2Final[i] == selected_eqSub2[0]) {
    a = "selected";
  } else {
    a = ""
  }


  $('#selectedGearConfirmation .card-text #sub2formSelect').append('<option value="'+ sub2Final[i] +'" '+ a +' subValue="'+ selectedGearSub2List.concat(Array(Number(sub2Final.length)).fill(selectedGearSub2List[selectedGearSub2List.length-1]))[i] +'" >' + sub2Final[i] + '</option>');
  
 }

 if (isRelic.length > 0) {
  for (let i = 0; i < isRelic.length; i++) {
    var a;
  if (isRelic[i] == selected_eqLatent[0]) {
    a = "selected";
  } else {
    a = ""
  }
    $('#selectedGearConfirmation .card-text #sub3formSelect').append('<option value="'+ isRelic[i] +'" '+ a +' subValue="'+ selectedGearLatentList[i] +'" latent="'+ selectedGearLatentList[i] +'">' + isRelic[i] + '</option>');
    
   }
   
 
  setRangeForSub(selected_eqLatent[0], selected_eqLatent[1], selected_eqLatent[1]);
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
  for (var i = 0; i < gear_data.length; i++) {
    let gdis = gear_data[i].split(',');
    if( (gdis.indexOf(selectedGearAcc) > -1)) {
      /* console.log("Found: " + gear_data[i]) */
      let isEx = '';
      if (gdis[0] === 'Exclusive') {
        isEx = 'id="isEx"';
      }
      $('#gearSelectionModal').append('<div class="col" '+isEx+'> <div class="card" data-bs-target="#staticBackdrop4" data-bs-toggle="modal" value="' + gear_data[i] +  '"> <img src="'+ 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gdis[4] +  '.png' + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title text-truncate">' + gdis[1] + '</h5> <p class="card-text"> Main stat: ' +  gdis[5] + '</p> </div> </div> </div>')
      
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

  var selection_modal_gear_data = $(this).attr('value');
  
  var smgdArr = selection_modal_gear_data.split(',');
  
 const gear_type_loc = smgdArr[1];
 const gear_slot_loc = smgdArr[2];
  /* console.time('subs_prim')
  var gearSubs = selection_modal_gear_data.split(',').slice(6).concat(STATS_OPTION_LIST);

  var gearSub1 = [];
  var gearSub2 = [];
 
 for (var i = 0; i < STATS_OPTION_LIST.length; i++) {
   if (gearSubs[i] != "") {
     gearSub1[i] = gearSubs[i];
     gearSub2[i] = gearSubs[i+(gearSubs.length/2)];
   }
 }



 gearSub1 = gearSub1.filter(elm => elm);
 gearSub2 = gearSub2.filter(elm => elm);



 var sub1Final = [];
 var sub2Final = [];

 var numS = 0;



while (numS < gearSub1.length) {
  if (gearSub1[numS] == 1) {
    sub1Final[numS] = gearSub2[numS];
    if (gearSub2[numS] == HP && gear_type_loc == "Jungle") {sub1Final[numS] = HP_PERCENT}
  } else if (gearSub1[numS] == 2) {
    sub2Final[numS] = gearSub2[numS];
  }
  numS++;
}

sub1Final = sub1Final.filter(elm => elm);
sub2Final = sub2Final.filter(elm => elm);

console.log('sub1Final = ' + sub1Final);
console.log('sub2Final = ' + sub2Final);
console.timeEnd('subs_prim') */ // old variant (garbage performance)

console.time('subs_alt')
var sc = smgdArr.slice(6)
var sub1Final = [];
var sub2Final = [];

for (let i = 0, n = STATS_OPTION_LIST.length; i < n; i++) {
  if (sc[i] !== '') {
    if (sc[i].includes('1') === true) {
      if (STATS_OPTION_LIST[i] == HP && gear_type_loc == "Jungle") {
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


console.timeEnd('subs_alt')

let selectedGearStats = selection_modal_gear_data.split(',');

var isRelic = [];

 switch (gear_type_loc) {
  case "Inhibitor":
    isRelic = INHIBITOR_LATENT_STATS_OPTION_LIST;
    break;
   case "Britra":
    isRelic = BRITRA_LATENT_STATS_OPTION_LIST;
    break;
   case "Swift":
    isRelic = SWIFT_LATENT_STATS_OPTION_LIST;
    break;
   case "Jungle":
    isRelic = JUNGLE_LATENT_STATS_OPTION_LIST;
    break;
   case "Volcano":
    isRelic = VOLCANO_LATENT_STATS_OPTION_LIST;
    break;
  default:
    break;
 };




 switch (gear_type_loc) {
  case "Maze":
    if((gear_slot_loc == SLOT_WEAPON )|| (gear_slot_loc == SLOT_ARMOR)){
    selectedGearSub1List = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Loyal":
  selectedGearSub1List = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Devoted":
  selectedGearSub1List = MAZE_GEAR_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = MAZE_GEAR_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Courageous":
  selectedGearSub1List = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Sincere":
  selectedGearSub1List = MAZE_ACCS_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = MAZE_ACCS_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Challenger":
    if((gear_slot_loc == SLOT_WEAPON )|| (gear_slot_loc == SLOT_ARMOR)){
      selectedGearSub1List = CHALLENGER_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = CHALLENGER_GEAR_SUBSTATS_VALUES_LIST_2;
    } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
      selectedGearSub1List = CHALLENGER_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = CHALLENGER_ACCS_SUBSTATS_VALUES_LIST_2;
    }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Hummingbird":
  selectedGearSub1List = HUMMINGBIRD_SUBSTATS_VALUES_LIST_1;
  selectedGearSub2List = HUMMINGBIRD_SUBSTATS_VALUES_LIST_2;
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Gordias":
    selectedGearSub1List = GORDIAS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = GORDIAS_SUBSTATS_VALUES_LIST_2;
    selectedGearSetList = GearSetsListBasic;
  break;
  case "Spectral":
    if(gear_slot_loc == (SLOT_WEAPON)){
    selectedGearSub1List = SPECTRAL_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SPECTRAL_WEAPON_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ARMOR)) {
    selectedGearSub1List = SPECTRAL_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SPECTRAL_ARMOR_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = SPECTRAL_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SPECTRAL_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListSpectral;
  break;
  case "Phantom":
    if(gear_slot_loc == (SLOT_WEAPON)){
    selectedGearSub1List = PHANTOM_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = PHANTOM_WEAPON_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ARMOR)) {
    selectedGearSub1List = PHANTOM_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = PHANTOM_ARMOR_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = PHANTOM_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = PHANTOM_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListPhantom;
  break;
  case "Polymer":
    if(gear_slot_loc == (SLOT_WEAPON)){
    selectedGearSub1List = POLYMER_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = POLYMER_WEAPON_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ARMOR)) {
    selectedGearSub1List = POLYMER_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = POLYMER_ARMOR_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = POLYMER_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = POLYMER_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Sc. Dante":
    if(gear_slot_loc == (SLOT_WEAPON)){
    selectedGearSub1List = SC_DANTE_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SC_DANTE_WEAPON_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ARMOR)) {
    selectedGearSub1List = SC_DANTE_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SC_DANTE_ARMOR_SUBSTATS_VALUES_LIST_2;
  } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = SC_DANTE_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = SC_DANTE_ACCS_SUBSTATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Inhibitor":
    if((gear_slot_loc == SLOT_WEAPON )|| (gear_slot_loc == SLOT_ARMOR)){
    selectedGearSub1List = INHIBITOR_GEAR_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = INHIBITOR_GEAR_SUBSTATS_VALUES_LIST_2;
    selectedGearLatentList = INHIBITOR_GEAR_LATENT_STATS_VALUES_LIST;
  } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = INHIBITOR_ACCS_SUBSTATS_VALUES_LIST_1;
    selectedGearSub2List = INHIBITOR_ACCS_SUBSTATS_VALUES_LIST_2;
    selectedGearLatentList = INHIBITOR_ACCS_LATENT_STATS_VALUES_LIST;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
   case "Britra":
    if((gear_slot_loc == SLOT_WEAPON ) || (gear_slot_loc == SLOT_ARMOR)){
      selectedGearSub1List = BRITRA_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = BRITRA_GEAR_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = BRITRA_GEAR_LATENT_STATS_VALUES_LIST;
    } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
      selectedGearSub1List = BRITRA_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = BRITRA_ACCS_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = BRITRA_ACCS_LATENT_STATS_VALUES_LIST;
    }
    selectedGearSetList = GearSetsListBasic;
    break;
   case "Swift":
    if((gear_slot_loc == SLOT_WEAPON )|| (gear_slot_loc == SLOT_ARMOR)){
      selectedGearSub1List = SWIFT_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = SWIFT_GEAR_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = SWIFT_GEAR_LATENT_STATS_VALUES_LIST;
    } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
      selectedGearSub1List = SWIFT_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = SWIFT_ACCS_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = SWIFT_ACCS_LATENT_STATS_VALUES_LIST;
    }
    selectedGearSetList = GearSetsListBasic;
    break;
   case "Jungle":
    if((gear_slot_loc == SLOT_WEAPON )|| (gear_slot_loc == SLOT_ARMOR)){
      selectedGearSub1List = JUNGLE_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = JUNGLE_GEAR_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = JUNGLE_GEAR_LATENT_STATS_VALUES_LIST;
    } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
      selectedGearSub1List = JUNGLE_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = JUNGLE_ACCS_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = JUNGLE_ACCS_LATENT_STATS_VALUES_LIST;
    }
    selectedGearSetList = GearSetsListTrinity;
    break;
   case "Volcano":
    if((gear_slot_loc == SLOT_WEAPON )|| (gear_slot_loc == SLOT_ARMOR)){
      selectedGearSub1List = VOLCANO_GEAR_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = VOLCANO_GEAR_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = VOLCANO_GEAR_LATENT_STATS_VALUES_LIST;
    } else if (gear_slot_loc == (SLOT_ACCESSORY)) {
      selectedGearSub1List = VOLCANO_ACCS_SUBSTATS_VALUES_LIST_1;
      selectedGearSub2List = VOLCANO_ACCS_SUBSTATS_VALUES_LIST_2;
      selectedGearLatentList = VOLCANO_ACCS_LATENT_STATS_VALUES_LIST;
    }
    selectedGearSetList = GearSetsListTrinity;
    break;
    case "Cat Brooch":
    if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = MILLIA_RAGE_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = MILLIA_RAGE_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Gear Cell Suppressor":
    if (gear_slot_loc == (SLOT_ARMOR)) {
    selectedGearSub1List = SOL_BADGUY_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = SOL_BADGUY_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "TCS Module":
    if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Tactical Comms Gear":
    if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  case "Throne of Ashes":
    if (gear_slot_loc == (SLOT_ACCESSORY)) {
    selectedGearSub1List = ROSARIA_GEAR_STATS_VALUES_LIST_1;
    selectedGearSub2List = TITAN_KYLE_GEAR_STATS_VALUES_LIST_2;
  }
  selectedGearSetList = GearSetsListBasic;
  break;
  default:
    break;
 };



 const selectedGearSetList_length_loc = Object.keys(selectedGearSetList).length;
 const selectedGearSetList_loc = Object.keys(selectedGearSetList);


 $('#selectedGearModal').html('<div class="text-center"><div class="fw-bold">Select Set</div><div id="gearSetOptions"></div> </div> <div class="img-fluid rounded mx-auto d-block" id="selectedGearConfirmation" value="' + selection_modal_gear_data +  '"> <img src="'+ 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + selectedGearStats[4] +  '.png' + '" class="card-img-top mx-auto d-block" alt="..."> <div class="card-body"> <h5 class="card-title text-truncate">' + gear_type_loc + '</h5> <div id="subNameValueSplit" class="row row-cols-md-2 g-4"> <p class="card-text">  </p> <p class="card-value"> </p> </div> </div>  </div>')
 
 if (selectedGearStats[0] != 'Exclusive' ) {
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


 if (sub1Final.length == 1) {
  $('#selectedGearConfirmation .card-text').html('<span class="badge bg-secondary">Option 1 [<small>locked</small>]</span><select id="sub1formSelect" class="form-select" aria-label="Disabled select example" disabled> ');
  
} else {
  $('#selectedGearConfirmation .card-text').html('<span class="badge bg-primary">Option 1 [<small>select</small>]</span><select id="sub1formSelect" class="form-select" aria-label="select example"> ');
}
$('#selectedGearConfirmation .card-value').html('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue1">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === sub1Final[0])) ? selectedGearSub1List[0]:((((Number(selectedGearSub1List[0]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) +'</div>')
$('#selectedGearConfirmation .card-value').append('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue2">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === sub2Final[0])) ? selectedGearSub2List[0]:((((Number(selectedGearSub2List[0]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) +'</div>')
if (sub2Final.length == 1) {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-secondary">Option 2 [<small>locked</small>]</span><select id="sub2formSelect" class="form-select" aria-label="Disabled select example" disabled> ');
} else {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-primary">Option 2 [<small>select</small>]</span><select id="sub2formSelect" class="form-select" aria-label="select example"> ');
}

if (isRelic.length > 0) {
  $('#selectedGearConfirmation .card-text').append('<span class="badge bg-info">Latent Ability [<small>select</small>]</span><select id="sub3formSelect" class="form-select" aria-label="select example"> ');
  $('#selectedGearConfirmation .card-value').append('<span class="badge" style="visibility: hidden;">0</span><div class="p-2" id="subValue3">'+ (([HP,ATK,DEF,CRIT,HIT,EVA].some((t) => t === isRelic[0])) ? selectedGearLatentList[0]:((((Number(selectedGearLatentList[0]) + Number.EPSILON) * 100)).toFixed(1) + '% ')) + '</div>')

 
}



 for (let i = 0; i < sub1Final.length; i++) {

  $('#selectedGearConfirmation .card-text #sub1formSelect').append('<option value="'+ sub1Final[i] +'" subValue="'+ selectedGearSub1List.concat(Array(Number(sub1Final.length)).fill(selectedGearSub1List[selectedGearSub1List.length-1]))[i] +'"> ' + sub1Final[i] + '</option>');
  
 }



 for (let i = 0; i < sub2Final.length; i++) {

  $('#selectedGearConfirmation .card-text #sub2formSelect').append('<option value="'+ sub2Final[i] +'" subValue="'+ selectedGearSub2List.concat(Array(Number(sub2Final.length)).fill(selectedGearSub2List[selectedGearSub2List.length-1]))[i] +'"> ' + sub2Final[i] + '</option>');
  
 }

if (isRelic.length > 0) {
  for (let i = 0; i < isRelic.length; i++) {
    $('#selectedGearConfirmation .card-text #sub3formSelect').append('<option value="'+ isRelic[i] +'" subValue="'+ selectedGearLatentList[i] +'" latent="'+ selectedGearLatentList[i] +'"> ' + isRelic[i] + '</option>');
    
   }
   
  setRangeForSub(isRelic[0], selectedGearLatentList[0], selectedGearLatentList[0]);
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

  

  const gear_mainstat_loc = selectedGearStats[5];
  let gear_mainstat_val;
  if (selectedGearStats[0] !== 'Exclusive') {
    gear_mainstat_val = GEAR_MAIN_STATS_VALUES_T7[(GEAR_MAIN_STATS_VALUES_T7.length/2)+GEAR_MAIN_STATS_VALUES_T7.indexOf(gear_mainstat_loc)];
  } else {
    gear_mainstat_val = GEAR_MAIN_STATS_VALUES_T7_EE;
  }

  
  
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

        Weapon.removeGear('Container');
        weaponIsConfirmed = false;
        $('#WeaponContainer').attr('isConfirmed','false')
      } else {
        enemy_Weapon.removeGear('Container_enemy');
        weaponIsConfirmed = false;
        $('#WeaponContainer_enemy').attr('isConfirmed','false')
      }
      break;
      case SLOT_ARMOR:
        if (selectedGearFor == selectedGear+'Container') {

          Armor.removeGear('Container');
          armorIsConfirmed = false;
          $('#ArmorContainer').attr('isConfirmed','false')
        } else {

          enemy_Armor.removeGear('Container_enemy');
          enemy_armorIsConfirmed = false;
          $('#ArmorContainer_enemy').attr('isConfirmed','false')
        }
        break;
          case SLOT_ACCESSORY_1:
            if (selectedGearFor == selectedGear+'Container') {

              Accessory1.removeGear('Container');
              accessory1IsConfirmed = false;
              $('#Accessory1Container').attr('isConfirmed','false')
            } else {

              enemy_Accessory1.removeGear('Container_enemy');
              enemy_accessory1IsConfirmed = false;
              $('#enemy_Accessory1Container').attr('isConfirmed','false')
            }
        break;
          case SLOT_ACCESSORY_2:
            if (selectedGearFor == selectedGear+'Container') {

              Accessory2.removeGear('Container');
              accessory2IsConfirmed = false;
              $('#Accessory2Container').attr('isConfirmed','false')
            } else {

              enemy_Accessory2.removeGear('Container_enemy');
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

  const gear_data_loc = confirmation_gear_data.split(',');
  const gear_mainstat_loc = gear_data_loc[5];
 
  let gear_mainstat_val;
  if (gear_data_loc[0] !== 'Exclusive') {
    gear_mainstat_val = GEAR_MAIN_STATS_VALUES_T7[(GEAR_MAIN_STATS_VALUES_T7.length/2)+GEAR_MAIN_STATS_VALUES_T7.indexOf(gear_mainstat_loc)];
    if (selectedGearFor == selectedGear+'Container') {
    $('#'+selectedGear+'Container').attr('isExclusive','false');
      
    } else {
    $('#'+selectedGear+'Container_enemy').attr('isExclusive','false');

    }
  } else {
    gear_mainstat_val = GEAR_MAIN_STATS_VALUES_T7_EE;
    if (selectedGearFor == selectedGear+'Container') {
    $('#'+selectedGear+'Container').attr('isExclusive','true');
      
    } else {
    $('#'+selectedGear+'Container_enemy').attr('isExclusive','true');

    }
  }


 /* gear = new Gear('Maze',SLOT_WEAPON,'7','HP','Anti-Ground DMG RES','Crit DMG RES','cs_gears-icons/Special Gear/Icon_Counter_Weapon_Maze.png'); */

 /* gear = new Gear(gear_data.split(',')[1],selectedGearType,"7",gear_data.split(',')[5],substat1_value,substat2_value,'cs_gears-icons/Special Gear/' + gear_data.split(',')[4] + '.png') */
 
 switch (selectedGear) {
  case SLOT_WEAPON:
    if (selectedGearFor == selectedGear+'Container') {
      Weapon.selectedGearData = confirmation_gear_data;
    Weapon.name = gear_data_loc[1];
    Weapon.eqSlot = selectedGear;
    Weapon.eqTier = "7";
    Weapon.eqSet = gear_set_value;
    Weapon.eqSet_Options = selectedGearSetList;
    Weapon.sub1 = [substat1_value,substat1_subvalue];
    Weapon.sub2 = [substat2_value,substat2_subvalue];
    Weapon.latent = [latent_value,latent_subvalue];
    Weapon.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc[4] + '.png';
    Weapon.mainStat = [gear_mainstat_loc,gear_mainstat_val]; 
    Weapon.setGear(0);
    //Weapon.showMainStat();
    weaponIsConfirmed = true;
    //$('#WeaponContainer').attr('isConfirmed','true');
    } else {
      enemy_Weapon.selectedGearData = confirmation_gear_data;
      enemy_Weapon.name = gear_data_loc[1];
      enemy_Weapon.eqSlot = selectedGear;
      enemy_Weapon.eqTier = "7";
      enemy_Weapon.eqSet = gear_set_value;
      enemy_Weapon.eqSet_Options = selectedGearSetList;
      enemy_Weapon.sub1 = [substat1_value,substat1_subvalue];
      enemy_Weapon.sub2 = [substat2_value,substat2_subvalue];
      enemy_Weapon.latent = [latent_value,latent_subvalue];
      enemy_Weapon.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc[4] + '.png';
      enemy_Weapon.mainStat = [gear_mainstat_loc,gear_mainstat_val]; 
      enemy_Weapon.setGear();
    //Weapon.showMainStat();
    enemy_weaponIsConfirmed = true;
    //$('#WeaponContainer_enemy').attr('isConfirmed','true')
    }
    
    break;
    case SLOT_ARMOR:

    if (selectedGearFor == selectedGear+'Container') {
      Armor.selectedGearData = confirmation_gear_data;
      Armor.name = gear_data_loc[1];
      Armor.eqSlot = selectedGear;
      Armor.eqTier = "7";
      Armor.eqSet = gear_set_value;
      Armor.eqSet_Options = selectedGearSetList;
      Armor.sub1 = [substat1_value,substat1_subvalue];
      Armor.sub2 = [substat2_value,substat2_subvalue];
      Armor.latent = [latent_value,latent_subvalue];
      Armor.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc[4] + '.png';
      Armor.mainStat = [gear_mainstat_loc,gear_mainstat_val]; 
      Armor.setGear(0);
      //Armor.showMainStat();
      armorIsConfirmed = true;
      //$('#ArmorContainer').attr('isConfirmed','true')
    } else {
      enemy_Armor.selectedGearData = confirmation_gear_data;
      enemy_Armor.name = gear_data_loc[1];
      enemy_Armor.eqSlot = selectedGear;
      enemy_Armor.eqTier = "7";
      enemy_Armor.eqSet = gear_set_value;
      enemy_Armor.eqSet_Options = selectedGearSetList;
      enemy_Armor.sub1 = [substat1_value,substat1_subvalue];
      enemy_Armor.sub2 = [substat2_value,substat2_subvalue];
      enemy_Armor.latent = [latent_value,latent_subvalue];
      enemy_Armor.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc[4] + '.png';
      enemy_Armor.mainStat = [gear_mainstat_loc,gear_mainstat_val]; 
      enemy_Armor.setGear();
      //enemy_Armor.showMainStat();
      enemy_ArmorIsConfirmed = true;
      //$('#ArmorContainer_enemy').attr('isConfirmed','true')
    }
      
      break;
        case SLOT_ACCESSORY_1:

        if (selectedGearFor == selectedGear+'Container') {
          Accessory1.selectedGearData = confirmation_gear_data;
          Accessory1.name = gear_data_loc[1];
          Accessory1.eqSlot = selectedGear;
          Accessory1.eqTier = "7";
          Accessory1.eqSet = gear_set_value;
          Accessory1.eqSet_Options = selectedGearSetList;
          Accessory1.sub1 = [substat1_value,substat1_subvalue];
          Accessory1.sub2 = [substat2_value,substat2_subvalue];
          Accessory1.latent = [latent_value,latent_subvalue];
          Accessory1.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc[4] + '.png';
          Accessory1.mainStat = [gear_mainstat_loc,gear_mainstat_val]; 
          Accessory1.setGear(0);
          //Accessory1.showMainStat();
          accessory1IsConfirmed = true;
          //$('#Accessory1Container').attr('isConfirmed','true')
        } else {
          enemy_Accessory1.selectedGearData = confirmation_gear_data;
          enemy_Accessory1.name = gear_data_loc[1];
          enemy_Accessory1.eqSlot = selectedGear;
          enemy_Accessory1.eqTier = "7";
          enemy_Accessory1.eqSet = gear_set_value;
          enemy_Accessory1.eqSet_Options = selectedGearSetList;
          enemy_Accessory1.sub1 = [substat1_value,substat1_subvalue];
          enemy_Accessory1.sub2 = [substat2_value,substat2_subvalue];
          enemy_Accessory1.latent = [latent_value,latent_subvalue];
          enemy_Accessory1.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc[4] + '.png';
          enemy_Accessory1.mainStat = [gear_mainstat_loc,gear_mainstat_val]; 
          enemy_Accessory1.setGear();
          //enemy_Accessory1.showMainStat();
          enemy_Accessory1IsConfirmed = true;
          //$('#Accessory1Container_enemy').attr('isConfirmed','true')
        }
        
      
      break;
        case SLOT_ACCESSORY_2:

        if (selectedGearFor == selectedGear+'Container') {
          Accessory2.selectedGearData = confirmation_gear_data;
          Accessory2.name = gear_data_loc[1];
          Accessory2.eqSlot = selectedGear;
          Accessory2.eqTier = "7";
          Accessory2.eqSet = gear_set_value;
          Accessory2.eqSet_Options = selectedGearSetList;
          Accessory2.sub1 = [substat1_value,substat1_subvalue];
          Accessory2.sub2 = [substat2_value,substat2_subvalue];
          Accessory2.latent = [latent_value,latent_subvalue];
          Accessory2.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc[4] + '.png';
          Accessory2.mainStat = [gear_mainstat_loc,gear_mainstat_val]; 
          Accessory2.setGear(0);
          //Accessory2.showMainStat();
          accessory2IsConfirmed = true;
          //$('#Accessory2Container').attr('isConfirmed','true')
        } else {
          enemy_Accessory2.selectedGearData = confirmation_gear_data;
          enemy_Accessory2.name = gear_data_loc[1];
          enemy_Accessory2.eqSlot = selectedGear;
          enemy_Accessory2.eqTier = "7";
          enemy_Accessory2.eqSet = gear_set_value;
          enemy_Accessory2.eqSet_Options = selectedGearSetList;
          enemy_Accessory2.sub1 = [substat1_value,substat1_subvalue];
          enemy_Accessory2.sub2 = [substat2_value,substat2_subvalue];
          enemy_Accessory2.latent = [latent_value,latent_subvalue];
          enemy_Accessory2.eqIcon = 'cs_gears-icons/Special Gear/'+selectedGearUnitType+'/' + gear_data_loc[4] + '.png';
          enemy_Accessory2.mainStat = [gear_mainstat_loc,gear_mainstat_val]; 
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

  
console.clear();

console.time('UpdateStatsBtn')
UpdateUnitAndTarget(unit_stats);
CalcUnitDMG();
console.timeEnd('UpdateStatsBtn')
  
  
});

