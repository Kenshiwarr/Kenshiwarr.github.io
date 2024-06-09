const BONUS_STATS_LIST = [HP,ATK,DEF,CRIT,HIT,EVA,HP_PERCENT,ATK_PERCENT,DEF_PERCENT,CRIT_PERCENT,HIT_PERCENT,EVA_PERCENT,'SPD', 'ASPD', 'CRIT DMG', 'Skill Haste', 'HP Recovery per Sec', CDMG_RES, 'Status Effect RES', 'Incoming Healing +', 'Outgoing Healing +', 'Anti-Counter DMG', 'Anti-Soldier DMG', 'Anti-Mech DMG', 'Anti-C.O. DMG', 'Anti-Replacer DMG', 'Anti-Striker DMG', 'Anti-Defender DMG', 'Anti-Ranger DMG', 'Anti-Sniper DMG', 'Anti-Supporter DMG', 'Anti-Siege DMG', 'Anti-Tower DMG', 'Anti-Air DMG', 'Anti-Ground DMG', 'Melee DMG', 'Ranged DMG', 'Anti-Counter DMG RES', 'Anti-Soldier DMG RES', 'Anti-Mech DMG RES', 'Anti-C.O. DMG RES', 'Anti-Replacer DMG RES', 'Anti-Striker DMG RES', 'Anti-Defender DMG RES', 'Anti-Ranger DMG RES', 'Anti-Sniper DMG RES', 'Anti-Supporter DMG RES', 'Anti-Siege DMG RES', 'Anti-Tower DMG RES', 'Anti-Air DMG RES', 'Anti-Ground DMG RES', 'Melee DMG RES', 'Ranged DMG RES', 'DMG Taken RDC', 'DMG AMP','Basic Attack DMG AMP', 'Special Skill DMG AMP', 'Ultimate Skill DMG AMP', 'DEF Penetration', 'Basic Attack DMG RDC', 'Special Skill DMG RDC', 'Ultimate Skill DMG RDC', 'Barrier Enhancement', 'DMG RES Penetration', 'MDL', 'DEF per HP Loss', 'ATK per HP Loss', 'EVA per HP Loss', 'DMG TLRNC', 'AoE DMG RDC', 'Role DISADV DMG INC', 'Role DISADV DMG DEC'];
const BUFF_STATS_LIST = [HP,ATK,DEF,CRIT,HIT,EVA,HP_PERCENT,ATK_PERCENT,DEF_PERCENT,CRIT_PERCENT,HIT_PERCENT,EVA_PERCENT,'SPD', 'ASPD', 'CRIT DMG', 'Skill Haste', 'HP Recovery per Sec', CDMG_RES, 'Status Effect RES', 'Incoming Healing +', 'Outgoing Healing +', 'Anti-Counter DMG', 'Anti-Soldier DMG', 'Anti-Mech DMG', 'Anti-C.O. DMG', 'Anti-Replacer DMG', 'Anti-Striker DMG', 'Anti-Defender DMG', 'Anti-Ranger DMG', 'Anti-Sniper DMG', 'Anti-Supporter DMG', 'Anti-Siege DMG', 'Anti-Tower DMG', 'Anti-Air DMG', 'Anti-Ground DMG', 'Melee DMG', 'Ranged DMG', 'Anti-Counter DMG RES', 'Anti-Soldier DMG RES', 'Anti-Mech DMG RES', 'Anti-C.O. DMG RES', 'Anti-Replacer DMG RES', 'Anti-Striker DMG RES', 'Anti-Defender DMG RES', 'Anti-Ranger DMG RES', 'Anti-Sniper DMG RES', 'Anti-Supporter DMG RES', 'Anti-Siege DMG RES', 'Anti-Tower DMG RES', 'Anti-Air DMG RES', 'Anti-Ground DMG RES', 'Melee DMG RES', 'Ranged DMG RES', 'DMG Taken RDC', 'DMG AMP','Basic Attack DMG AMP', 'Special Skill DMG AMP', 'Ultimate Skill DMG AMP', 'DEF Penetration', 'Basic Attack DMG RDC', 'Special Skill DMG RDC', 'Ultimate Skill DMG RDC', 'Barrier Enhancement', 'DMG RES Penetration', 'MDL', 'DEF per HP Loss', 'ATK per HP Loss', 'EVA per HP Loss', 'DMG TLRNC', 'AoE DMG RDC', 'Role DISADV DMG INC', 'Role DISADV DMG DEC','Sure Fire','Perfect Evasion','Invincibility'];

const BSLL = BONUS_STATS_LIST.length;

//const BONUS_STATS_GEAR_SET_LIST = [HP,ATK,DEF,CRIT,HIT,EVA,HP_PERCENT,ATK_PERCENT,DEF_PERCENT,CRIT_PERCENT,HIT_PERCENT,EVA_PERCENT,'SPD', 'ASPD', 'CRIT DMG', 'Skill Haste', 'HP Recovery per Sec', CDMG_RES, 'Status Effect RES', 'Incoming Healing +', 'Outgoing Healing +', 'Anti-Counter DMG', 'Anti-Soldier DMG', 'Anti-Mech DMG', 'Anti-C.O. DMG', 'Anti-Replacer DMG', 'Anti-Striker DMG', 'Anti-Defender DMG', 'Anti-Ranger DMG', 'Anti-Sniper DMG', 'Anti-Supporter DMG', 'Anti-Siege DMG', 'Anti-Tower DMG', 'Anti-Air DMG', 'Anti-Ground DMG', 'Melee DMG', 'Ranged DMG', 'Anti-Counter DMG RES', 'Anti-Soldier DMG RES', 'Anti-Mech DMG RES', 'Anti-C.O. DMG RES', 'Anti-Replacer DMG RES', 'Anti-Striker DMG RES', 'Anti-Defender DMG RES', 'Anti-Ranger DMG RES', 'Anti-Sniper DMG RES', 'Anti-Supporter DMG RES', 'Anti-Siege DMG RES', 'Anti-Tower DMG RES', 'Anti-Air DMG RES', 'Anti-Ground DMG RES', 'Melee DMG RES', 'Ranged DMG RES', 'DMG Taken RDC', 'Special Skill DMG AMP', 'Ultimate Skill DMG AMP', 'DEF Penetration', 'Special Skill DMG RDC', 'Ultimate Skill DMG RDC', 'Barrier Enhancement'];

var unit_stats_to_save = [];
var target_stats_to_save = [];

var unit_saved_stats_final = [];
var target_saved_stats_final = [];

var nToastIntervalID;
var nToastTimeoutID;

var shakeTmt_edittext;

var targetIsUpdated = false;

var dTableCompare_values = [];

var unit_extra_bonus_stats = [0,	0,	0,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];
var target_extra_bonus_stats = [0,	0,	0,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];
var dummy_extra_bonus_stats = [0,	0,	0,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];


var unit_bonus_stats = [];
var target_bonus_stats = [];

var tooltiptext_active = '';

var dt_tooltip_active = '';

const Inf_mdl = 99999999;

var timerForTooltipClear;
var timerForDropdownClear;

const averageHIT = 0.4;
const averageCRIT = 0.45;
const averageCDMG = 0.5;


const average_cat1_res = 0.67
/* const average_cat1_dmg = 0.51 */
const average_cat1_dmg = 1.18

var active_skills_exclude = [];


var SureFireMod = [];

var unit_SureFireBuffUptime = 0;
var unit_PerfectEvaBuffUptime = 0;
var unit_InvincibilityBuffUptime = 0;

var unitHasEE = '';



/* BONUS_STATS_LIST.forEach(e => {
  $('#stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ e +'" subvalue="0">'+e + ' - 0'+'</button></li>');
}); */





      var unit_hp = 0;
      var unit_atk = 0;
      var unit_def = 0;
      var DEF_pc = unit_def/(unit_def+1000);
      var unit_crit = 0;
      var CRIT_pc = Math.min(0.0005*unit_crit,0.85);
      var unit_hit = 0;
      var HIT_pc = unit_hit/(unit_hit+1500);
      var unit_eva = 0;
      var EVA_pc = unit_eva/(unit_eva+800);
      var unit_cdmg_res = 0;
      var cat1_res = 0;
      var cat2_res = 0;
      var unitEHP = unit_hp*((1000+unit_def)/1000*(1+cat1_res)*(1+cat2_res));
      var enemy_hit = 0;
      var enemy_crit = 0;
      var enemy_cdmg = 0.5;
      var enemy_hit_percent = enemy_hit/(enemy_hit+1500);
      var enemy_crit_percent = enemy_crit/(enemy_crit+1000);
      var finalEHP = (unitEHP/(enemy_hit_percent+0.1)*EVA_pc)+(unitEHP/(1+enemy_cdmg-unit_cdmg_res)*(enemy_crit_percent*(1-EVA_pc)))+(unitEHP*(1-enemy_crit_percent*(1-EVA_pc))-EVA_pc);


      var ifSelectTargetDummy = true;

      var total_unit_data = '';


      var target_dummy_data = ['-','Target Dummy','10000','0','0','0','0','0','<img src="cs_icons/Machine_gap.png" width="256p" alt="">','Counter','Striker','Ground',1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]



      var currentUnitType; 

      
      
    
      

      var enemy_class = "Striker";
      var enemy_movement_type = "Ground";
      var enemy_distance = "Melee";
      var enemy_type = "Counter";
      var enemy_subtype = 'Counter';

      var unit_class;
      var unit_movement_type;
      var unit_type;
      var unit_subtype = '';

      
      var enemy_HP = 10000;
      var enemy_DEF = 0;
      var enemy_DEF_percent = enemy_DEF/(enemy_DEF+1000);
      var enemy_EVA = 0;
      var enemy_EVA_percent = enemy_EVA/(enemy_EVA+800);
      var enemy_CDMG_RES = 0;
      var enemy_cat1_res = 0;
      var enemy_cat2_res = 0;
      var enemy_cat3_res = 0;
      var enemy_mdl = Inf_mdl;

      var Unit_dps_stats = 0;
      var unit_stat_data = 0;

      var cat1_dmg = 0;
      var cat2_dmg = 0;
      var cat3_dmg = 0;

      var unit_advantage = 0;

      var enemy_remaining_hp_percent = 1;

      var distance_to_target_frequency_melee = 0.5;
      var distance_to_target_frequency_ranged = 0.5;

      var unit_mainAttack_selected = [0];
      

      

      
     /* var checkSubs = []; */

  
     function UpdUnitEE(statval, eestat, unt) {
      let eeinf = '';
      window[statval] = 0
      let checkEE = UNITS_W_EE.indexOf(unt);
      if (checkEE > -1) {
        switch (UNITS_W_EE[checkEE]) {
          case 'Post-War Administration Bureau Millia Rage':
            if (eestat === true) {
              eeinf += '"Exclusive,Cat Brooch,Accessory,Soldier,Icon_Soldier_Accessory_Cat Brooch_EE,ASPD,,,,,,,,,1;2,2,,2,2,,,,,,,,2,2,2,2,,,,2,2,,,,,,,,2,2,2,2,,,,2,,,,,,,,,,';
            }
            window[statval] += 0.306
            break;
          case 'Flame of Corruption Sol Badguy':
            if (eestat === true) {
              eeinf += '"Exclusive,Gear Cell Suppressor,Armor,Counter,Icon_Counter_Armor_Gear Cell Suppressor_EE,HP,,,,,,,,,,2,,2,2,,,,,,,,,,,,,,,,,,,,,,,,2,2,2,2,,,,2,2,,,1,,,,,,';
            }
            window[statval] += 4292
            break;
          default:
            
      GEAR_MAIN_STATS_VALUES_T7_unit_EE = 0;
      GEAR_MAIN_STATS_VALUES_T7_target_EE = 0;
            break;
        }
      }
      return eeinf;
    }
  


      function UpdateUnitStats(unit_data) {

        //unit_data = $('#searched-unitID-values').attr('value').split(",");


        if (unit_data != '') {

          //var enemyDistanceCtr = enemy_distance.split(';');
          var cat1_res_list = [Cat1List[enemy_class][2],Cat1List[enemy_movement_type][2],Cat1List[enemy_type][2],Cat1List[enemy_subtype][2],Cat1List['Melee'][2],Cat1List['Ranged'][2]];
          var cat1_dmg_list = [Cat1List[enemy_class][1],Cat1List[enemy_movement_type][1],Cat1List[enemy_type][1],Cat1List[enemy_subtype][1],Cat1List['Melee'][1],Cat1List['Ranged'][1]];
        
          /* if (enemyDistanceCtr.length > 1) {
            cat1_res_list.push(Cat1List[enemyDistanceCtr[1]][2])
            cat1_res_list.push(Cat1List[enemyDistanceCtr[1]][1])
          }  */


      unit_class = unit_data[10];
      unit_movement_type = unit_data[11];
      unit_type = unit_data[9].split(';')[0];
      if (unit_data[9].split(';').length > 1) {
        
      unit_subtype = unit_data[9].split(';')[1];
      } else {
        unit_subtype = unit_type;
      }

      console.log('unit_subtype')
      console.log(unit_subtype)

      if (((enemy_class === unit_class) || (([SUPPORTER,SIEGE,TOWER].some((t) => t === enemy_class))) || (([SUPPORTER,SIEGE,TOWER].some((t) => t === unit_class))) || (
      (unit_class === DEFENDER && enemy_class === STRIKER) ||
      (unit_class === STRIKER && enemy_class === DEFENDER) ||
      (unit_class === RANGER && enemy_class === SNIPER) ||
      (unit_class === SNIPER && enemy_class === RANGER)))) {
        unit_advantage = 0;
        
      } else if (
        ((unit_class === DEFENDER && enemy_class === SNIPER) ||
        (unit_class === STRIKER && enemy_class === RANGER) ||
        (unit_class === RANGER && enemy_class === DEFENDER) ||
        (unit_class === SNIPER && enemy_class === STRIKER)) && !(([SUPPORTER,SIEGE,TOWER].some((t) => t === enemy_class)))
      ) {
        unit_advantage = 1;
      } else {
        unit_advantage = -1;
      }


      


      if (Weapon.selectedGearData != 0) {
        Weapon.replaceGearByUnitType(currentUnitType,'Container',total_gear_data_unit,GEAR_MAIN_STATS_VALUES_T7_unit); 
      } if (Armor.selectedGearData != 0) {
        Armor.replaceGearByUnitType(currentUnitType,'Container',total_gear_data_unit,GEAR_MAIN_STATS_VALUES_T7_unit);
      } if (Accessory1.selectedGearData != 0) {
        Accessory1.replaceGearByUnitType(currentUnitType,'Container',total_gear_data_unit,GEAR_MAIN_STATS_VALUES_T7_unit);
      } if (Accessory2.selectedGearData != 0) {
        Accessory2.replaceGearByUnitType(currentUnitType,'Container',total_gear_data_unit,GEAR_MAIN_STATS_VALUES_T7_unit);
      }







      

      var bonus_stats = [0,	0,	0,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0.5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];
      var gear_stats = [Weapon.mainStat,Weapon.sub1,Weapon.sub2,Weapon.latent,Armor.mainStat,Armor.sub1,Armor.sub2,Armor.latent,Accessory1.mainStat,Accessory1.sub1,Accessory1.sub2,Accessory1.latent,Accessory2.mainStat,Accessory2.sub1,Accessory2.sub2,Accessory2.latent];
     // var checkSubs = [Weapon.sub1,Weapon.sub2,Weapon.latent,Armor.sub1,Armor.sub2,Armor.latent,Accessory1.sub1,Accessory1.sub2,Accessory1.latent,Accessory2.sub1,Accessory2.sub2,Accessory2.latent]

      //bonus_stats[21] += 0.8;



      for (let i = 0, n = bonus_stats.length; i < n; i++) {
        bonus_stats[i] += unit_extra_bonus_stats[i]
      }

      for (let i = 13; i < unit_data.length; i++) {
        if(unit_data[i] != '') {
          bonus_stats[i-7] += Number(unit_data[i])

        }
      }

      let SureFireBuffUptime = 0;
      let PerfectEvaBuffUptime = 0;
      let InvincibilityBuffUptime = 0;

      for (let i = 0, n = $('#dropdown-buffList-container li').length; i < n; i++) {
        let baVal = $('#buff-apply_'+i).attr('value').split(',');
        let baSVal = $('#buff-apply_'+i).attr('subvalue').split(',');
        let baBcd = Number($('#buff-apply_'+i).attr('value_bcd'));
        let baBd = Number($('#buff-apply_'+i).attr('value_bd'));

       
        let baSModifierFinal = 1;
        

        if (baBd < baBcd) {
          baSModifierFinal = baBcd/baBd
        }

       for (let j = 0, nn = baVal.length; j < nn; j++) {
        let baSValFinal;
        if (Number(baVal[j]) < BSLL) {
          if ((Number(baVal[j]) < 6)) {
            baSValFinal = Number(baSVal[j])/baSModifierFinal;
          } else {
            baSValFinal = (Number(baSVal[j])/100)/baSModifierFinal;
          }
          bonus_stats[baVal[j]] += baSValFinal;
        } else if (Number(baVal[j]) === BSLL) {
          SureFireBuffUptime = (1+SureFireBuffUptime)/baSModifierFinal;
        } else if (Number(baVal[j]) === Number(BSLL)+1) {
          PerfectEvaBuffUptime = (1+PerfectEvaBuffUptime)/baSModifierFinal;
        } else if (Number(baVal[j]) === Number(BSLL)+2) {
          InvincibilityBuffUptime = (1+InvincibilityBuffUptime)/baSModifierFinal;
        }
       }
      }

      console.log('Check buffs')
      console.log(SureFireBuffUptime)
      console.log(PerfectEvaBuffUptime)
      console.log(InvincibilityBuffUptime)

      unit_SureFireBuffUptime = SureFireBuffUptime;
      unit_PerfectEvaBuffUptime = PerfectEvaBuffUptime;
      unit_InvincibilityBuffUptime = InvincibilityBuffUptime;

      

      
      var bonus_stats_gear_set = [0,	0,	0,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];
      const gear_set_stats = [Weapon.eqSet, Armor.eqSet, Accessory1.eqSet, Accessory2.eqSet];
      const gear_set_stats_options = [Weapon.eqSet_Options, Armor.eqSet_Options, Accessory1.eqSet_Options, Accessory2.eqSet_Options];


      /* $(document).on('click','#flexCheckDefault',function(){
        var checkVal = $('#flexCheckDefault');
        if (checkVal.is(':checked') === true) {
          bonus_stats[7] += 0.1;
        } else {
          bonus_stats[7] -= 0.1;
        }
        
    }); */


  /*   var checkVal = $('#flexCheckDefault');
        if (checkVal.is(':checked') === true) {
          bonus_stats[7] += 0.1;
        } else {
          bonus_stats[7] += 0;
        } */

        //NOTE tf is this? (Was Yoo Mina skill uptime thing)

      

      switch (selectedGearSlotList) {
        case SLOT_WEAPON:
            gear_selected_set_stats = Weapon.eqSet;
            gear_selected_set_stats_options = Weapon.eqSet_Options;
          break;
          case SLOT_ARMOR:
            gear_selected_set_stats = Armor.eqSet;
            gear_selected_set_stats_options = Armor.eqSet_Options;
          break;
          case SLOT_ACCESSORY_1:
            gear_selected_set_stats = Accessory1.eqSet;
            gear_selected_set_stats_options = Accessory1.eqSet_Options;
          break;
          case SLOT_ACCESSORY_2:
            gear_selected_set_stats = Accessory2.eqSet;
            gear_selected_set_stats_options = Accessory2.eqSet_Options;
          break;
        default:
          selectedGearSlotList = '';
          break;
      }

      if (selectedGearSlotList != '') {

      



        var selector_result = [];
        

        //_!_ high memory load
      for (let i = 0, n = gear_set_stats.length; i < n; i++) {
        if (gear_set_stats_options[i] != 0) {
          selector_result[i] = String(gear_set_stats_options[i][gear_set_stats[i]]['stat1']).split(',');
        } else {
          selector_result[i] = '';
        }
      }

      


        var set_matches = [0,0,0,0];
for (let i = 0, n = gear_set_stats.length; i < n; i++) {
  if (gear_set_stats_options[i] != 0) {
    set_matches[i] = gear_set_stats.filter(x => x==(gear_set_stats_options[i][gear_set_stats[i]]['name'])).length;
  }
  
  
}


var filtered_stats = gear_set_stats;
        

/* [...new Set(array)] */ // removes duplicates from array; array.filter(Boolean) removes empty values
        


        var available_set_stats = [];
        var if_set_double = false;
        for (let i = 0; i < set_matches.length; i++) {
          /* console.log('true1') */
          
          if (gear_set_stats_options[i] != 0) {
            if((set_matches[i] / gear_set_stats_options[i][gear_set_stats[i]]['set'] >= 1) && (set_matches[i] / gear_set_stats_options[i][gear_set_stats[i]]['set'] != 2) && (gear_set_stats_options[i][gear_set_stats[i]]['set'] != 4)) {
              available_set_stats[i] = filtered_stats[i];
              /* console.log('true2') */
              if (set_matches[i] >= 2){
                if_set_double=true;
              }
            } else if (set_matches[i] / gear_set_stats_options[i][gear_set_stats[i]]['set'] == 2) {
              available_set_stats[0] = filtered_stats[i];
              available_set_stats[1] = filtered_stats[i];
            } else if (set_matches[i] / gear_set_stats_options[i][gear_set_stats[i]]['set'] == 1) {
              available_set_stats[0] = filtered_stats[i];
            }
          }
          
          
        }
        if (if_set_double == true) {
          available_set_stats = [...new Set(available_set_stats)].filter(Boolean);
        } else {
          available_set_stats = available_set_stats.filter(Boolean);
        }

        var available_set_stats_values = [];
        var available_set_stats_names = [];
        const even = (element) => element != 0;

        if (available_set_stats.length > 0) {
          
        

        for (let i = 0; i < gear_set_stats_options.length; i++) {
          if (gear_set_stats_options.some(even)) {
            for (let j = 0; j < available_set_stats.length; j++) {
              var searchSetName = String(Object.keys(gear_set_stats_options[i])).split(',').indexOf(String(available_set_stats[j]));
              if(searchSetName > -1) {
                available_set_stats_values[j] = gear_set_stats_options[i][available_set_stats[j]]['amount'];
                available_set_stats_names[j] = gear_set_stats_options[i][available_set_stats[j]]['stat1'];
              }
            }
          }
        }
      }

        /* String(gear_set_stats_options[i][available_set_stats[i]]['stat1']).split(',') */

        
        

        available_set_stats_values = String(available_set_stats_values).split(','); // turning arr[x, [x,x]] to [x,x,x] so can read properly
        available_set_stats_names = String(available_set_stats_names).split(','); // same as above

     
for (let i = 0; i < available_set_stats_values.length; i++) {

  bonus_stats_gear_set[BONUS_STATS_LIST.indexOf(available_set_stats_names[i])] += Number(available_set_stats_values[i]);
}
        
      
      
      



  }


      for (let i = 0; i < gear_stats.length; i++) {
        var if_set_double = BONUS_STATS_LIST.indexOf(gear_stats[i][0]);
        if (if_set_double > -1) {
          bonus_stats[if_set_double] = bonus_stats[if_set_double] + Number(gear_stats[i][1]); 
        }
      };

      cat1_dmg = 0;
      cat2_dmg = 0;
      cat3_dmg = 0;


      for (let i = 0, n = bonus_stats.length; i < n; i ++) {
        if (cat1_dmg_list.indexOf(BONUS_STATS_LIST[i]) > -1) {
          if ((BONUS_STATS_LIST[i] == Cat1List['Melee'][1])) {
            cat1_dmg += (bonus_stats[i]*distance_to_target_frequency_melee) + (bonus_stats_gear_set[i]*distance_to_target_frequency_melee)
          } else if ((BONUS_STATS_LIST[i] == Cat1List['Ranged'][1])) {
            cat1_dmg += (bonus_stats[i]*distance_to_target_frequency_ranged) + (bonus_stats_gear_set[i]*distance_to_target_frequency_ranged)
          } else {
            cat1_dmg += bonus_stats[i] + bonus_stats_gear_set[i];
          }

          
        }
        if (BONUS_STATS_LIST[i] === Cat2List['DMG+']) {
          cat2_dmg += Number(bonus_stats[i]);
        }
        

      }

      
      cat2_dmg = Math.max(cat2_dmg,-2);
      


      

      

      
      $('#unit-cat1_dmg').attr('value',cat1_dmg.toFixed(1));
      $('#unit-cat2_dmg').attr('value',cat2_dmg.toFixed(1));

     /*  var bonus_stats_list = [HP,ATK,DEF,CRIT,HIT,EVA,CDMG_RES,HP_PERCENT]; */
     /* var BONUS_STATS_LIST = [HP,ATK,DEF,CRIT,HIT,EVA,CDMG_RES]; */

    


      unit_hp = Number(unit_data[2])*(1+bonus_stats_gear_set[6] + bonus_stats[6]) + (bonus_stats[0]*0.1);
      unit_atk = Number(unit_data[3])*(1+bonus_stats_gear_set[7] + bonus_stats[7]) + (bonus_stats[1]*0.1);
      unit_def = Number(unit_data[4])*(1+bonus_stats_gear_set[8] + bonus_stats[8]) + (bonus_stats[2]*0.1);
      DEF_pc = unit_def/(unit_def+1000);
      unit_crit = Number(unit_data[5])*(1+bonus_stats_gear_set[9] + bonus_stats[9]) + (bonus_stats[3]);
      CRIT_pc = Math.min(0.0005*unit_crit,0.85);
      unit_hit = Number(unit_data[6])*(1+bonus_stats_gear_set[10] + bonus_stats[10]) + (bonus_stats[4]);
      HIT_pc = unit_hit/(unit_hit+1500);
      unit_eva = Number(unit_data[7])*(1+bonus_stats_gear_set[11] + bonus_stats[11]) + bonus_stats[5];
      EVA_pc = unit_eva/(unit_eva+800);
      unit_cdmg_res = Number(bonus_stats[17]);
      /* cat1_res = Number($( ".unit-cat1_res" ).attr('value'));
      cat2_res = Number($( ".unit-cat2_res" ).attr('value')); */
      cat1_res = 0;
      cat2_res = 0;
      cat3_res = 0;
      
      
      /* enemy_hit = Number($( "#enemy_hit_input" ).val());
      enemy_crit = Number($( "#enemy_crit_input" ).val());
      enemy_cdmg = Number($( "#enemy_cdmg_input" ).val()); */
      enemy_hit_percent = enemy_hit/(enemy_hit+1500);
      enemy_crit_percent = enemy_crit/(enemy_crit+1000);


      /* function checkAvailabilityRes(arr, val) {
        if (arr.some((arrVal) => val[0] === arrVal)) {
          cat1_res += Number(val[1]*100);
        }
      };

      function checkAvailabilityDps(arr, val) {
        if (arr.some((arrVal) => val[0] === arrVal)) {
          cat1_dmg += Number(val[1]*100);
        }
      }; */
      
      

      //removeElement(gear_stats,0); //function removes all elements of second parameter, first parameter is any array


/*       for (let i = 0; i < checkSubs.length; i++) {
        checkAvailabilityRes(cat1_res_list,checkSubs[i])
        if (checkSubs[i][0] === Cat2List['DMG-']) {
          cat2_res += Number(checkSubs[i][1])*100;
        }
      } */

      for (let i = 0; i < bonus_stats.length; i ++) {
        if (cat1_res_list.indexOf(BONUS_STATS_LIST[i]) > -1) {
          cat1_res += bonus_stats[i] + bonus_stats_gear_set[i]
          
        }
        if (BONUS_STATS_LIST[i] === Cat2List['DMG-']) {
          cat2_res += Number(bonus_stats[i]);
        }

      }
      bonus_stats[68] = Math.max(Math.min(bonus_stats[68],0.8),-0.8);
      cat1_res += bonus_stats[68];

      if (unit_advantage === 1) {
        cat3_dmg += bonus_stats[70];
      }
      
      
      
      /* checkAvailability(cat1_res_list, Weapon.sub1);
      checkAvailability(cat1_res_list, Weapon.sub2);
      checkAvailability(cat1_res_list, Weapon.latent);
      checkAvailability(cat1_res_list, Armor.sub1);
      checkAvailability(cat1_res_list, Armor.sub2);
      checkAvailability(cat1_res_list, Armor.latent);
      checkAvailability(cat1_res_list, Accessory1.sub1);
      checkAvailability(cat1_res_list, Accessory1.sub2);
      checkAvailability(cat1_res_list, Accessory1.latent);
      checkAvailability(cat1_res_list, Accessory2.sub1);
      checkAvailability(cat1_res_list, Accessory2.sub2);
      checkAvailability(cat1_res_list, Accessory2.latent); */


      /* enemy_cat1_res += Number($( "#unit_cat1Res_input" ).val());
      enemy_cat2_res += Number($( "#unit_cat2Res_input" ).val());

      enemy_CDMG_RES += Number($( "#unit_cdmgRes_input" ).val());
 */
     



 /*      for (let i = 0; i < bonus_stats_gear_set_list.length; i++) {
        if (bonus_stats_gear_set[i] > 0) {
          checkAvailabilityRes(cat1_res_list, [bonus_stats_gear_set_list[i],bonus_stats_gear_set[i]]);
         }
        
        
      }
 */

       
      var chanceToDodge = EVA_pc;
/* 
      var enemyChanceToCrit = enemy_crit_percent;
      var enemyChanceToHit = 1-enemyChanceToCrit-chanceToDodge; */

      if (EVA_pc <= enemy_hit_percent) {
        chanceToDodge = 0;
      }

      var chanceToDodgeAvg = EVA_pc;
      

      if (EVA_pc <= averageHIT) {
        chanceToDodgeAvg = 0;
      }

      chanceToDodgeAvg = (1-(1-chanceToDodgeAvg) * (1-(unit_PerfectEvaBuffUptime)))

      unitEHP = Number(unit_hp)*((1000+Number(unit_def))/1000*(1+Math.max(Number(cat1_res-(average_cat1_dmg)/(1+average_cat1_res*0.6)),0))*(1+Number(cat2_res)));
      finalEHP = (unitEHP/(averageHIT+0.1)*chanceToDodgeAvg)+(unitEHP/(1+Math.max(averageCDMG-unit_cdmg_res,0))*(averageCRIT*(1-chanceToDodgeAvg)))+(unitEHP*(1-(averageCRIT*(1-chanceToDodgeAvg))-chanceToDodgeAvg));
      
      if (unit_InvincibilityBuffUptime < 1) {
        finalEHP = finalEHP/(1-unit_InvincibilityBuffUptime)
      } else {
        finalEHP = Infinity
      }

      if ((total_unit_data[0] + ' ' + total_unit_data[1]) == 'Old Management Bureau: Yaksha Squadron Judy Swift') { // Judy swift doesnt gain aspd from anything?
        bonus_stats[13] = 0;
        bonus_stats_gear_set[13] = 0;
      }
      
      var untrole = unit_data[9].split(';');
      var unttype;
      switch (untrole[0]) {
        case 'Counter':
          unttype = 'unttype_counter'
          break;
          case 'Soldier':
            unttype = 'unttype_soldier'
            break;
            case 'Mech':
          unttype = 'unttype_mech'
          break;
        default:
          unttype = 'unttype_else'
          break;
      }
      var roleIcon = untrole[0].toLowerCase();
      var classIcon = unit_data[10].toLowerCase();
      var mTypeIcon = unit_data[11].toLowerCase();
      
      if ((roleIcon == 'c.o.') || (roleIcon == 'replacer')) {
        roleIcon = 'co';
      }
      
      if (untrole.length > 1) {
        $('#unit-type').html('<img src="cs_icons/type_'+ roleIcon +'.png" height="20px" width="20px">' +'<span class="'+unttype+'">['+ untrole[0]+']'+'['+ untrole[1]+']</span>');
      } else {
        $('#unit-type').html('<img src="cs_icons/type_'+ roleIcon +'.png" height="20px" width="20px">' +'<span class="'+unttype+'">['+ unit_data[9]+']</span>');
      }
      $('#unit-class').html('<img src="cs_icons/role_'+ classIcon +'.png" height="20px" width="20px">' + unit_data[10]);
      $('#unit-movement').html('<img src="cs_icons/movement_'+ mTypeIcon +'.png" height="20px" width="20px">' +unit_data[11] + ' Movement');
      
      $('#unit-hp').html('<h>HP: </h><span class="current_stats">' + Math.round(unit_hp) + ((unit_hp-unit_data[2]) > 0 ? (' <span class="added_stats">(+' + Math.round(unit_hp-unit_data[2]) + ')'):'') + '</span></span>');
      $('#unit-hp').attr('subvalue',unit_hp)
      $('#unit-current_hp').html('<h>Current HP: ' + Math.round(unit_hp*enemy_remaining_hp_percent) + ' (' + Number($('#unit-current_hp_range').val()) +'%)' + '</h>');
      $('#unit-atk').html('<h>ATK: </h><span class="current_stats">' + Math.round(unit_atk) + ''+ ((unit_atk-unit_data[3]) > 0 ? (' <span class="added_stats">(+' + Math.round(unit_atk-unit_data[3]) + ')'):'') + '</span></span>');
      $('#unit-def').html('<h>DEF: </h><span class="current_stats">' + Math.round(unit_def) + '</h> <span class="added_stats"> ' + ((unit_def-unit_data[4]) > 0 ? ('(+' + Math.round(unit_def-unit_data[4]) + ')'):'') + '('+ (DEF_pc*100).toFixed(2) +'%)</span></span>');
      $('#unit-crit').html('<h>CRIT: </h><span class="current_stats">' + Math.round(unit_crit) + '</h> <span class="added_stats"> ' + ((unit_crit-unit_data[5]) > 0 ? ('(+' + Math.round(unit_crit-unit_data[5]) + ')'):'') + '('+ (CRIT_pc*100).toFixed(2) +'%)</span></span>');
      $('#unit-hit').html('<h>HIT: </h><span class="current_stats">' + (unit_hit>(enemy_EVA*1.875) ? '<span id="uHtt">' + Math.round(unit_hit) + ' <span class="text-success">&#10004;</span></span>': Math.floor(unit_hit) +'  <span id="uHtt" class="text-warning"><small>(' + Math.floor(enemy_EVA*1.875) + ')</small></span>') + ' </h> <span class="added_stats"> ' + ((unit_hit-unit_data[6]) > 0 ? ('(+' + Math.round(unit_hit-unit_data[6]) + ')'):'') + '('+ (HIT_pc*100).toFixed(2) +'%)</span></span>');
      $('#unit-eva').html('<h>EVA: </h><span class="current_stats">' + (unit_eva>(enemy_hit/1.875) ? '<span id="uEtt">' + Math.round(unit_eva) + ' <span class="text-success">&#10004;</span></span>': Math.floor(unit_eva) +'  <span id="uEtt" class="text-warning"><small>(' + Math.floor(enemy_hit/1.875) + ')</small></span>') + '</h> <span class="added_stats"> ' + ((unit_eva-unit_data[7]) > 0 ? ('(+' + Math.round(unit_eva-unit_data[7]) + ')'):'') + '('+ (EVA_pc*100).toFixed(2) +'%)</span></span>');
      

      $('#unit-cat1_dmg').html('<h>Cat1 DMG: </h><span class="current_stats cs_extra_info">' + (cat1_dmg*100).toFixed(2) + "%</span>");
      $('#unit-cat2_dmg').html('<h>Cat2 DMG: </h><span class="current_stats cs_extra_info">' + (cat2_dmg*100).toFixed(2) + "%</span>");
      $('#unit-cat3_dmg').html('<h>Cat3 DMG: </h><span class="current_stats cs_extra_info">' + (cat3_dmg*100).toFixed(2) + "%</span>");
      $('#unit-ehp').html('<h>EHP: </h><span class="current_stats cs_extra_info">' + Math.round(unitEHP) + '</span>');
      $('#unit-ehp_final').html('<h>Final EHP: </h><span class="current_stats cs_extra_info">' + Math.round(finalEHP) + '</span>');
      $('#enemy-hit_stat').html(enemy_hit + " (" + (enemy_hit_percent * 100).toFixed(2) + "%)");
      $('#enemy-crit_stat').html(enemy_crit + " (" + (enemy_crit_percent * 100).toFixed(2) + "%)");
      $('#enemy-cdmg_stat').html(enemy_cdmg + "%");

      $('#dropdown_unit_stats').html('<div class="dropdown_stats_header">Details</div><div class="unitStats_of"></div>');


      if (unit_hit>(enemy_EVA*1.875)) {
        CreateTooltipForAnything($('#uHtt'),'Unit has Sure fire against its target!<br />HIT Required: ' + Math.round(enemy_EVA*1.875))
      } else {
        CreateTooltipForAnything($('#uHtt'),'HIT needed for Sure fire<br /> Missing: ' + Math.abs(Math.round(unit_hit - (enemy_EVA*1.875))))
      }
      
      
      if (unit_eva>(enemy_hit/1.875)) {
        CreateTooltipForAnything($('#uEtt'),'Unit can dodge enemy attacks!<br />EVA Required: ' + Math.round(enemy_hit/1.875))
      } else {
        CreateTooltipForAnything($('#uEtt'),'EVA needed to dodge<br /> Missing: ' + Math.abs(Math.round(unit_eva - (enemy_hit/1.875))))
      }
      
      

      for (let i = 0; i < BSLL; i++) {
        unit_bonus_stats[i] = bonus_stats[i] + bonus_stats_gear_set[i];
        
      }

      
      
/* 
      if (String(stats_bonuses).split(',').indexOf(DEF_PEN) === -1) {
        unit_def_pen = 0;
        
        
      } else {
        unit_def_pen = stats_bonuses[(String(stats_bonuses).split(',').indexOf(DEF_PEN))+1];
      } */


      

      //DPS = Math.max(((1-enemy_DEF_percent-(1-(unit_def_pen/100))*(1+(cat1_dmg/100)-(enemy_cat1_res/100)))),0.2)*Math.max((1+(cat2_dmg/100)-(enemy_cat2_res/100)),0.5)*(1+0.3*(unit_advantage*(1+cat3_dmg-enemy_cat3_res)))

      //DPS = ((1-(enemy_DEF_percent*(1-unit_def_pen)))*(1+cat1_dmg-(enemy_cat1_res/100)))*(1+(cat2_dmg-(enemy_cat2_res/100)))*(1+0.3*(unit_advantage*(1+cat3_dmg-enemy_cat3_res)))
      
      var stat_bonus;

      
      var eStat_pc = [CRIT_pc,HIT_pc,EVA_pc];

      unit_stats_to_save = [];

      
    for (let i = 0, n = BSLL; i < n; i++) {
        
      if ( (i == 0)) {
        stat_bonus = Math.round(unit_data[i+2]*(1+bonus_stats_gear_set[6]+bonus_stats[6])+(bonus_stats[i]*0.1));
        

        unit_stats_to_save[i] = BONUS_STATS_LIST[i];
        unit_stats_to_save[n+i] = Number(stat_bonus);
        $('#dropdown_unit_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'"> <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + '</span></li>');
      } else if ( (i == 1)) {
        
        stat_bonus = Math.round(unit_data[i+2]*(1+bonus_stats_gear_set[7]+bonus_stats[7])+(bonus_stats[i]*0.1));
        unit_stats_to_save[i] = BONUS_STATS_LIST[i];
        unit_stats_to_save[n+i] = Number(stat_bonus);
        $('#dropdown_unit_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'">  <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + '</span></li>');
      } else if ((i == 2)) {
        stat_bonus = Math.round(unit_data[i+2]*(1+bonus_stats_gear_set[8]+bonus_stats[8])+(bonus_stats[i]*0.1));
        
        unit_stats_to_save[i] = BONUS_STATS_LIST[i];
        unit_stats_to_save[n+i] = Number(stat_bonus);
        $('#dropdown_unit_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'">  <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + ' ('+ (DEF_pc*100).toFixed(2) +'%)' + '</span></li>');
      }
      if (((i > 2) && (i < 6))) {
        stat_bonus = Math.round(unit_data[i+2]*(1+bonus_stats_gear_set[i+6] + bonus_stats[i+6])+(bonus_stats[i]));
        
        unit_stats_to_save[i] = BONUS_STATS_LIST[i];
        unit_stats_to_save[n+i] = Number(stat_bonus);
        $('#dropdown_unit_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'">  <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + ' ('+ (eStat_pc[i-3]*100).toFixed(2) +'%)' + '</span></li>');
      if (i===5) {
        $('#dropdown_unit_stats .unitStats_of').append('<hr>')
      }
      }
      if ((bonus_stats[i] != 0 || bonus_stats_gear_set[i] != 0) && (i >= 6)) { //NOTE (i >= 6) to include HP%, DEF%, CRIT%, HIT%, EVA%, or i>=11 otherwise
        stat_bonus = parseFloat(((bonus_stats[i]+bonus_stats_gear_set[i])*100).toFixed(3).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1'));
        unit_stats_to_save[i] = BONUS_STATS_LIST[i];
        unit_stats_to_save[n+i] = Number(stat_bonus)/100;
        $('#dropdown_unit_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'">  <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + "%" + '</span></li>');

      }
      

    }

    

    unit_stats_to_save.push(Math.floor(unitEHP));
    unit_stats_to_save.splice((unit_stats_to_save.length)/2, 0, 'EHP');
    unit_stats_to_save.push(Math.floor(finalEHP));
    unit_stats_to_save.splice((unit_stats_to_save.length)/2, 0, 'Final EHP');

    
    unit_stats_to_save = unit_stats_to_save.filter((substat) => substat != undefined);

      
    SetScrollable($('#dropdown_unit_stats .unitStats_of'));
      

      

    $('#new_sd_hps').removeAttr('hidden');

      $('#unit-stats-details').removeAttr('hidden');

      $('#seachedUnit_body').removeAttr('hidden');
      $('#seachedTarget_body').removeAttr('hidden');


      if (localStorageAvailable) {
      $('#setCurrentToCompare').prop('disabled', false);
      }
      
      

      if (ifSelectTargetDummy === true) {

        $('#selectCustomEnemy').prop('hidden', false);
        
        
      } else {
        $('#selectCustomEnemy').prop('hidden', true);
      }

      $('#rowSearchTarget').removeAttr('hidden');
      $('#selectDistanceContainer').removeAttr('hidden');
      
      
      $('#gearContainer').removeAttr('hidden');
      //$('#custom_unit_input_values').removeAttr('hidden');
      $('#custom_enemy_input_values').removeAttr('hidden');
      $('#btn-setTargetAsDummy').prop('disabled', false);
      
    }

      }


      function CalcUnitDMG() {

        console.time('CaltUnitDMG_start');
        
      if (Unit_dps_stats != '') {
        var unit_attack_data = Unit_dps_stats;
        unit_attack_data = unit_attack_data.slice(0, -1).slice(1).split("''"); //unit_attack_data = Unit_dps_stats.slice(0, -1).slice(1).split("''"); old

        var unit_def_pen = unit_bonus_stats[58];

        var attack1_mod = (Math.max((Math.min(1-((enemy_DEF*(1-unit_def_pen))/(enemy_DEF*(1-unit_def_pen)+1000)),1)*(1+cat1_dmg-enemy_cat1_res)),0.2))*(Math.max((1+cat2_dmg+(unit_bonus_stats[55]-target_bonus_stats[59])-enemy_cat2_res),0.5))*(1+0.3*(unit_advantage*(1+Math.max(cat3_dmg-enemy_cat3_res,0))));
        var skill1_mod = (Math.max((Math.min(1-((enemy_DEF*(1-unit_def_pen))/(enemy_DEF*(1-unit_def_pen)+1000)),1)*(1+cat1_dmg-enemy_cat1_res)),0.2))*(Math.max((1+cat2_dmg+(unit_bonus_stats[56]-target_bonus_stats[60])-enemy_cat2_res),0.5))*(1+0.3*(unit_advantage*(1+Math.max(cat3_dmg-enemy_cat3_res,0))));
        var hyper1_mod = (Math.max((Math.min(1-((enemy_DEF*(1-unit_def_pen))/(enemy_DEF*(1-unit_def_pen)+1000)),1)*(1+cat1_dmg-enemy_cat1_res)),0.2))*(Math.max((1+cat2_dmg+(unit_bonus_stats[57]-target_bonus_stats[61])-enemy_cat2_res),0.5))*(1+0.3*(unit_advantage*(1+Math.max(cat3_dmg-enemy_cat3_res,0))));

        var attack1_aoe_mod = (Math.max((Math.min(1-((enemy_DEF*(1-unit_def_pen))/(enemy_DEF*(1-unit_def_pen)+1000)),1)*(1+cat1_dmg-enemy_cat1_res)),0.2))*(Math.max((1+cat2_dmg+(unit_bonus_stats[55]-target_bonus_stats[59])-enemy_cat2_res-target_bonus_stats[69]),0.5))*(1+0.3*(unit_advantage*(1+Math.max(cat3_dmg-enemy_cat3_res,0))));
        var skill1_aoe_mod = (Math.max((Math.min(1-((enemy_DEF*(1-unit_def_pen))/(enemy_DEF*(1-unit_def_pen)+1000)),1)*(1+cat1_dmg-enemy_cat1_res)),0.2))*(Math.max((1+cat2_dmg+(unit_bonus_stats[56]-target_bonus_stats[60])-enemy_cat2_res-target_bonus_stats[69]),0.5))*(1+0.3*(unit_advantage*(1+Math.max(cat3_dmg-enemy_cat3_res,0))));
        var hyper1_aoe_mod = (Math.max((Math.min(1-((enemy_DEF*(1-unit_def_pen))/(enemy_DEF*(1-unit_def_pen)+1000)),1)*(1+cat1_dmg-enemy_cat1_res)),0.2))*(Math.max((1+cat2_dmg+(unit_bonus_stats[57]-target_bonus_stats[61])-enemy_cat2_res-target_bonus_stats[69]),0.5))*(1+0.3*(unit_advantage*(1+Math.max(cat3_dmg-enemy_cat3_res,0))));
        

        
        
        var RestrictedtoType;
        switch (enemy_type) {
            case COUNTER:
              RestrictedtoType = 'NUST_COUNTER'
            break;
            case SOLDIER:
              RestrictedtoType = 'NUST_SOLDIER'
            break;
            case MECH:
              RestrictedtoType = 'NUST_MECHANIC'
            break;
            case CO:
              RestrictedtoType = 'NUST_CORRUPTED'
            break;
            case REPLACER:
              RestrictedtoType = 'NUST_REPLACER'
            break;
          default:
            break;
        }
        
      
      var SFvPEmod = target_PerfectEvaBuffUptime - unit_SureFireBuffUptime
      var targetDodgeChance;
      var natSureHitMod;

      if (HIT_pc > enemy_EVA_percent) {
        natSureHitMod = 0
      } else {
        natSureHitMod = enemy_EVA_percent;
      }

      if (SFvPEmod < 0) {
        targetDodgeChance = 1-(1-(natSureHitMod) * (1-Math.abs(SFvPEmod)))
      } else {
        targetDodgeChance = (1-(1-natSureHitMod) * (1-SFvPEmod))
      }


      var chance_to_crit = CRIT_pc*(1-targetDodgeChance);
      var chance_to_hit = 1-chance_to_crit-targetDodgeChance;
      var enemy_chance_to_dodge = targetDodgeChance;

      if ((HIT_pc > enemy_EVA_percent) && (SFvPEmod === 0)) {
        chance_to_crit = CRIT_pc;
        chance_to_hit = 1-chance_to_crit;
        enemy_chance_to_dodge = 0;
      }

      
      

      var miss_multiplier = HIT_pc+0.1;
      var crit_multiplier = Math.max(1+(unit_bonus_stats[14]-enemy_CDMG_RES),1);


     
      for (let i = 0; i < unit_attack_data.length; i++) {
        
        unit_attack_data[i] = unit_attack_data[i].replace(/-/g,0);
      }

var unitCalculatedDmg = [];
var unitCalculatedDmgTotal = [];

var needCurrHPind = false;
$('#t-ch_needed').hide();

if (Object.prototype.toString.call(unit_mainAttack_selected) !== '[object Array]') {
  unit_mainAttack_selected = [0]
}


if (((total_unit_data[0] + ' ' + total_unit_data[1]) === 'Tenured President Regina MacCready') && (unit_mainAttack_selected.indexOf(1) > -1)) {
  unit_attack_data.push("freeze_loop,1,0.5,1,0.03333333333,1,0,0,0,0,999,2,TRUE,TRUE,FALSE,FALSE,FALSE,0,1,101,USN_LOOP,0");
}
if (((total_unit_data[0] + ' ' + total_unit_data[1]) === 'Asmodeus Rosaria le Friede')) {
  unit_attack_data.splice(1,0,"attack2,1.2,0.92,2.00,0.03333333333,1,0,0,0,0,999,2,TRUE,TRUE,FALSE,FALSE,FALSE,0,0,102,USN_ATTACK2,0");
  unit_attack_data.splice(2,0,"attack_air2,1.2,0.92,2.00,0.03333333333,1,0,0,0,0,999,2,TRUE,TRUE,FALSE,FALSE,FALSE,0,0,102,USN_ATTACK2_AIR,0");
}
      
      for (let i = 0; i < unit_attack_data.length; i++) {
        let uatkd = unit_attack_data[i].split(',');
        
        if (
          ((uatkd[19] !== '01') && (Number(uatkd[3]) !== 0) &&
          ((unit_attack_data[i].indexOf(RestrictedtoType) != -1) || (uatkd[17] == 0))) /* || ((unit_attack_data[i].split(',')[20].toLowerCase().includes('start') === true) && (unit_attack_data[i].split(',')[3] != 0)) */
           /* && 
          ((unit_attack_data[i].split(',')[12].toLowerCase() === 'true' && enemy_movement_type === 'Ground') || 
           ((unit_attack_data[i].split(',')[13].toLowerCase() === 'true' && enemy_movement_type === 'Air')) || (unit_attack_data[i].split(',')[0].includes('air') === true && enemy_movement_type === 'Air') ||
            (unit_attack_data[i].split(',')[20].toLowerCase().includes('air') === true && enemy_movement_type === 'Air')) */
           ) {
          

              
         /*  var hitsLand = unit_attack_data[i].split(',')[12].toLowerCase();
          var hitsAir = unit_attack_data[i].split(',')[13].toLowerCase(); */
          var ifSureFire = uatkd[14].toLowerCase();
          var ifForceCrit = uatkd[15].toLowerCase();
          var validHitAmt = uatkd[11];

         /*  if (ifSureFire == 'true') {
            SureFireMod[i] = 1;
          } else {
            SureFireMod[i] = 0;
          } */

          var srcName = uatkd[20];
          var srcType = uatkd[21];
          var dmgMod = 1;
          if (i < unit_attack_data.length) {
            var source_dmg = 0;
            if (srcType === 'NST_ATTACK') {
              if (Number(validHitAmt) > 1) {
                dmgMod = attack1_aoe_mod;
              } else {
                dmgMod = attack1_mod;
              }
              
            } else if (srcType === 'NST_SKILL') {
              if (Number(validHitAmt) > 1) {
                dmgMod = skill1_aoe_mod;
              } else {
                dmgMod = skill1_mod;
              }
            } else if (srcType === 'NST_HYPER') {
              if (Number(validHitAmt) > 1) {
                dmgMod = hyper1_aoe_mod;
              } else {
                dmgMod = hyper1_mod;
              }
            } else {
              dmgMod = attack1_mod;
            };
            var scaleMod;
            if (uatkd[9] == 0) {
              scaleMod = (uatkd[2])*(uatkd[1]);
            } else {
              scaleMod = (uatkd[9])*(uatkd[1]);
            }
            
            
            source_dmg = unit_atk*scaleMod*dmgMod;
            var sdcurrhpd = (enemy_HP*enemy_remaining_hp_percent)*(uatkd[7]*dmgMod);
            var sdmaxhpd = enemy_HP*(uatkd[8]*dmgMod);
            var source_dmg_name = uatkd[0];
            var sdcrit = 0;
            var sdhit = 0;
            var sdmiss = 0;


            if ((sdcurrhpd > 0) && (needCurrHPind === false)) {
              $('#t-ch_needed').show();
              needCurrHPind = true;
            }/*  else {
              $('#t-ch_needed').hide();
              needCurrHPind = false;
            } */
            
            
            source_dmg += sdcurrhpd;
            source_dmg += sdmaxhpd;


            var sd_anim = uatkd[3];
            var sd_cd = uatkd[18];
            var sd_cdtype = uatkd[19];
            /* if (((ifForceCrit == 'false') && (ifSureFire == 'false')) && (sd_cdtype != '23') ) {
              if (source_dmg*crit_multiplier >= enemy_mdl) {
                sdcrit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
                
              } else {
                sdcrit = source_dmg*crit_multiplier;
              }
              if (source_dmg >= enemy_mdl) {
                sdhit = enemy_mdl+((source_dmg-enemy_mdl)*0.04);
                
              } else {
                sdhit = source_dmg;
                
              }
              if (source_dmg*miss_multiplier >= enemy_mdl) {
                sdmiss = enemy_mdl+(((source_dmg*miss_multiplier-enemy_mdl))*0.04);
              } else {
                sdmiss = source_dmg*miss_multiplier;
              }
            } else if ((ifForceCrit == 'true') && (ifSureFire == 'true')) {
              if (source_dmg*crit_multiplier >= enemy_mdl) {
                sdcrit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
                sdhit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
                sdmiss = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
                
              } else {
                sdcrit = source_dmg*crit_multiplier;
                sdhit = source_dmg*crit_multiplier;
                sdmiss = source_dmg*crit_multiplier;
              }
            } else if (ifForceCrit == 'true') {
              if (source_dmg*crit_multiplier >= enemy_mdl) {
                sdcrit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
                sdhit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
              } else {
                sdcrit = source_dmg*crit_multiplier;
                sdhit = source_dmg*crit_multiplier;
              }
              if (source_dmg*crit_multiplier*miss_multiplier >= enemy_mdl) {
                sdmiss = enemy_mdl+(((source_dmg*crit_multiplier*miss_multiplier-enemy_mdl))*0.04);
              } else {
                sdmiss = source_dmg*crit_multiplier*miss_multiplier;
              }
            } else if (ifSureFire == 'true') {
              if (source_dmg*crit_multiplier >= enemy_mdl) {
                sdcrit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
                
              } else {
                sdcrit = source_dmg*crit_multiplier;
              }
              if (source_dmg >= enemy_mdl) {
                sdhit = enemy_mdl+((source_dmg-enemy_mdl)*0.04);
                sdmiss = enemy_mdl+((source_dmg-enemy_mdl)*0.04);
              } else {
                sdhit = source_dmg;
                sdmiss = source_dmg;
              }
            } else */ 
            
            if (ifForceCrit == 'true') {
              if (source_dmg*crit_multiplier >= enemy_mdl) {
                sdcrit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
                sdhit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
              } else {
                sdcrit = source_dmg*crit_multiplier;
                sdhit = source_dmg*crit_multiplier;
              }
              if (source_dmg*crit_multiplier*miss_multiplier >= enemy_mdl) {
                sdmiss = enemy_mdl+(((source_dmg*crit_multiplier*miss_multiplier-enemy_mdl))*0.04);
              } else {
                sdmiss = source_dmg*crit_multiplier*miss_multiplier;
              }
            } else if (sd_cdtype == '23') { //part of last else
              if (source_dmg >= enemy_mdl) {
               sdcrit = enemy_mdl+((source_dmg-enemy_mdl)*0.04);
               sdhit = enemy_mdl+((source_dmg-enemy_mdl)*0.04);
             } else {
               sdcrit = source_dmg;
               sdhit = source_dmg;
             }
             if (source_dmg*miss_multiplier >= enemy_mdl) {
               sdmiss = enemy_mdl+(((source_dmg*miss_multiplier-enemy_mdl))*0.04);
             } else {
               sdmiss = source_dmg*miss_multiplier;
             }
           } else {
              if (source_dmg*crit_multiplier >= enemy_mdl) {
                sdcrit = enemy_mdl+(((source_dmg*crit_multiplier-enemy_mdl))*0.04);
                
              } else {
                sdcrit = source_dmg*crit_multiplier;
              }
              if (source_dmg >= enemy_mdl) {
                sdhit = enemy_mdl+((source_dmg-enemy_mdl)*0.04);
                
              } else {
                sdhit = source_dmg;
                
              }
              if (source_dmg*miss_multiplier >= enemy_mdl) {
                sdmiss = enemy_mdl+(((source_dmg*miss_multiplier-enemy_mdl))*0.04);
              } else {
                sdmiss = source_dmg*miss_multiplier;
              }
  
            }
            
            
            
            /* if (sdcurrhpd >= enemy_mdl) {
              sdcurrhpd = enemy_mdl+((enemy_HP*(unit_attack_data[i].split(',')[7]*attack1_mod))*0.04);
            } 
            if (sdcurrhpd >= enemy_mdl) {
              sdmaxhpd = enemy_mdl+((enemy_HP*(unit_attack_data[i].split(',')[8]*attack1_mod))*0.04);
            } 
             */
            
            unitCalculatedDmg[i] = [source_dmg_name,sdcrit,sdhit,sdmiss,sd_anim, sd_cd,sd_cdtype, srcName, srcType, sdcurrhpd, sdmaxhpd, scaleMod, dmgMod, ifSureFire, ifForceCrit];

            if (i === 0) {
              unitCalculatedDmgTotal[i] = [source_dmg_name,sdcrit,sdhit,sdmiss,sd_anim,sd_cd,sd_cdtype, srcName, srcType, sdcurrhpd, sdmaxhpd, scaleMod, dmgMod, ifSureFire, ifForceCrit];
            } else if ((unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][0] === unitCalculatedDmg[i][0]) && (unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][8] === unitCalculatedDmg[i][8]) 
            && ((unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][7] === unitCalculatedDmg[i][7]) || 
            (unitCalculatedDmg[i][7].toLowerCase().includes('end')))) {
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][1] += sdcrit;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][2] += sdhit;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][3] += sdmiss;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][4] = sd_anim;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][5] = sd_cd;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][6] = sd_cdtype;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][7] = srcName;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][8] = srcType;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][9] = sdcurrhpd;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][10] = sdmaxhpd;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][11] = scaleMod;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][12] = dmgMod;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][13] = ifSureFire;
              unitCalculatedDmgTotal[unitCalculatedDmgTotal.length-1][14] = ifForceCrit;
            } else {
              unitCalculatedDmgTotal[i] = [source_dmg_name,sdcrit,sdhit,sdmiss,sd_anim,sd_cd,sd_cdtype, srcName, srcType, sdcurrhpd, sdmaxhpd, scaleMod, dmgMod, ifSureFire, ifForceCrit];
            }
            

            
          }

        } else {
          unitCalculatedDmg.push([]);
          unitCalculatedDmgTotal.push([]);
        }
        
       
      }

      unitCalculatedDmg = unitCalculatedDmg.filter(function(val){return val.length !== 0});


      unitCalculatedDmgTotal = unitCalculatedDmgTotal.filter(function(val){return val.length !== 0});

      console.log(unitCalculatedDmg);

      console.log(unitCalculatedDmgTotal);
      
      

      

      console.log(enemy_DEF_percent + ', ' +unit_def_pen+ ', '+cat1_dmg+ ', '+(enemy_cat1_res/100)+ ', '+cat2_dmg+ ', '+(enemy_cat2_res/100) +', '+cat3_dmg+ ', '+enemy_cat3_res+ ', ')

      /* switch (unit_data[0] + ' ' + unit_data[1]) {
        case value:
          
          break;
      
        default:
          break;
      } */



     

      var unit_final_aspd = unit_bonus_stats[13];
      var unit_final_cdr = unit_bonus_stats[15];


      

      
      



      $('#new_sd_dmg').html('');
      $('#new_sd_dps').html('');
      $('#sd_dmg_table-tooltip_list').html('');
      $('#sd_dmg_table').html('<div class="accordion accordion-flush"><table class="table table-dark" id="unit_dps_table"><thead class="uthead"><tr><th>Skill name</th><th>Hit count</th><th>CD</th><th>Anim</th><th> <span id="sdmg_Hit"> Hit </span> </th> <th> <span> Crit </span> <svg id="sdmg_Crit" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16"> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/> </svg> </th> <th> <span> Miss </span><svg id="sdmg_Miss" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16"> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/> </svg> </th> <th> D<small>(avg)</small> <span id="dcm_inf"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/> </svg></span> </th> <th> DPS </th> <th> Skill Mod </th ><th> Dmg Mod </th > </tr></thead></table></div>');
      $('#sd_dmg_table-tooltip_list').append('<div class="dt_tooltip_container"> </div>');
      $('#skill_exclude_selectLabel').text('Select skills to include');
      $('#skill_exclude_select').html('');


      var unit_mainAttack_ground = [];

      var unit_mainAttack_air = [];

      var unit_mainAttack_temp = [];
      
      
      var unit_mainAttack = [];

      var unit_restAttacks = [];

      var unit_totalAttacks = [];


      for (let i = 0; i < unitCalculatedDmgTotal.length; i++) {

        /*  ((String(unitCalculatedDmgTotal[i][8]).includes('NST_ATTACK') === true) && (unitCalculatedDmgTotal[i][5] == 1)) */
        //console.log(unit_data[0] + ' ' + unit_data[1]);

        
        
        if ((String(unitCalculatedDmgTotal[i][8]).includes('NST_ATTACK') === true) && (unitCalculatedDmgTotal[i][5] <= 1)) {
          if ((String(unitCalculatedDmgTotal[i][0]).includes('phasechange') === false)) {
          //unit_mainAttack_temp.push(unitCalculatedDmgTotal[i]); 
          // NOTE!
            }
        } else if (((String(unitCalculatedDmgTotal[i][0]).includes('attack') === true) && (String(unitCalculatedDmgTotal[i][8]).includes('NST_ATTACK') === true) && 
        (unitCalculatedDmgTotal[i][5] <= 1)) || ((String(unitCalculatedDmgTotal[i][8]).includes('NST_SKILL') === true) && (unitCalculatedDmgTotal[i][5] <= 1))) {
          if ((String(unitCalculatedDmgTotal[i][0]).includes('phasechange') === false) && unitCalculatedDmgTotal[i][11] > 0) {
            
          unit_mainAttack_temp.push(unitCalculatedDmgTotal[i])
          }
        } else if ((String(unitCalculatedDmgTotal[i][7]).toLowerCase().includes('air') === false) || 
        (String(unitCalculatedDmgTotal[i][7]).toLowerCase().includes('air') === true) && (enemy_movement_type !== 'Ground')) {
          unit_restAttacks.push(unitCalculatedDmgTotal[i])
          
        }

        if ((((String(unitCalculatedDmgTotal[i][8]).includes('NST_ATTACK') === true) && (unitCalculatedDmgTotal[i][5] <= 1)) && 
        ((String(unitCalculatedDmgTotal[i][0]).includes('air') === true && enemy_movement_type === 'Air') || 
        (String(unitCalculatedDmgTotal[i][7]).toLowerCase().includes('air') === true && enemy_movement_type === 'Air'))) ||
        ((((String(unitCalculatedDmgTotal[i][8]).includes('NST_SKILL') === true) && (String(unitCalculatedDmgTotal[i][0]).includes('skill') === true) && 
        (unitCalculatedDmgTotal[i][5] <= 1)) && 
        ((String(unitCalculatedDmgTotal[i][0]).includes('air') === true && enemy_movement_type === 'Air') || 
        (String(unitCalculatedDmgTotal[i][7]).toLowerCase().includes('air') === true && enemy_movement_type === 'Air'))))) {
          if ((String(unitCalculatedDmgTotal[i][0]).includes('phasechange') === false)) {
          
            unit_mainAttack_air.push(unitCalculatedDmgTotal[i]);
          }
        }
        /* if ((String(unitCalculatedDmgTotal[i][0]).includes('air') === true && enemy_movement_type === 'Air')) {
        } 
        if ((String(unitCalculatedDmgTotal[i][7]).toLowerCase().includes('air') === true && enemy_movement_type === 'Air')) {
        } */
        if (((String(unitCalculatedDmgTotal[i][8]).includes('NST_ATTACK') === true) && (unitCalculatedDmgTotal[i][5] <= 1)) && 
        ((String(unitCalculatedDmgTotal[i][0]).includes('air') === true && enemy_movement_type === 'Air') || 
        (String(unitCalculatedDmgTotal[i][7]).toLowerCase().includes('air') === true && enemy_movement_type === 'Air'))) {
          
        }

        if (((String(unitCalculatedDmgTotal[i][8]).includes('NST_ATTACK') === true) && (unitCalculatedDmgTotal[i][5] <= 1)) && 
        ((String(unitCalculatedDmgTotal[i][0]).includes('air') === false && enemy_movement_type === 'Ground') && (String(unitCalculatedDmgTotal[i][7]).toLowerCase().includes('air') === false && enemy_movement_type === 'Ground')) || 
       ((((String(unitCalculatedDmgTotal[i][8]).includes('NST_SKILL') === true) && 
       (unitCalculatedDmgTotal[i][5] <= 1))) && ((String(unitCalculatedDmgTotal[i][0]).includes('air') === false && enemy_movement_type === 'Ground') && 
       (String(unitCalculatedDmgTotal[i][7]).toLowerCase().includes('air') === false && enemy_movement_type === 'Ground')))
        ) {
          if ((String(unitCalculatedDmgTotal[i][0]).includes('phasechange') === false) && unitCalculatedDmgTotal[i][11] > 0) {
          
          if (i>0) {
            if ((unitCalculatedDmgTotal[i][1] !== unitCalculatedDmgTotal[i-1][1]) && (unitCalculatedDmgTotal[i][2] !== unitCalculatedDmgTotal[i-1][2]) && (unitCalculatedDmgTotal[i][3] !== unitCalculatedDmgTotal[i-1][3])) {
              unit_mainAttack_ground.push(unitCalculatedDmgTotal[i])
            }
            
          } else {
            unit_mainAttack_ground.push(unitCalculatedDmgTotal[i])
          }
          }
        }
        

        switch (total_unit_data[0] + ' ' + total_unit_data[1]) {
          case 'Arhat Joo Shiyoon':
            if (i === 0) {

            
              //unit_mainAttack[0] = unitCalculatedDmgTotal[0];
              


            var attacksToProc = (4*Number(unit_mainAttack_ground[0][4])/3)/(1+unit_final_aspd);
           // var JSY_Attack2CD = 4+attacksToProc/(1+(Math.sqrt(chance_to_crit)))*2;
           var JSY_Attack2CD = IFERROR(4+attacksToProc/((Math.sqrt(chance_to_crit))),0);

            
              
            unitCalculatedDmgTotal[2][5] = JSY_Attack2CD;

            
            console.log('JSY_Script!')
            console.log(attacksToProc)
            console.log(JSY_Attack2CD)
            
            }


            break;
        
          default:
            
            break;
        }

        
        
      }
      


      if ((unit_mainAttack_ground.length == 0) && (unit_mainAttack_air.length == 0)) {
        unit_mainAttack_ground = unit_mainAttack_temp;
      }

      unit_mainAttack = unit_mainAttack.concat(unit_mainAttack_ground,unit_mainAttack_air)



      /* console.log('unit_mainAttack_ground = ')
      console.log(unit_mainAttack_ground)
      console.log('unit_mainAttack_air = ')
      console.log(unit_mainAttack_air) */

      console.log('unit_mainAttack_ground = ')
      console.log(unit_mainAttack_ground)

      console.log('unit_mainAttack_air = ')
      console.log(unit_mainAttack_air)

      console.log('unit_mainAttack = ')
      console.log(unit_mainAttack)

      console.log('unit_restAttacks = ')
      console.log(unit_restAttacks)

      console.log('unit_mainAttack_temp = ')
      console.log(unit_mainAttack_temp)

      
     // console.log( $('#Unit_Extra .form-select option:selected').attr('value'))

     

     
     

   

      
      $('#Unit_Extra').html('<span class="fw-bold">Select unit main attack:</span><br/>');


      if (unit_mainAttack.length>0) {
        
      

      for (let i = 0; i < unit_mainAttack.length; i++) {
        
          


        $('#Unit_Extra').append('<div class="form-check"> <input value="'+i+'" class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault'+i+'"> <label class="form-check-label" for="flexRadioDefault'+i+'"> '+ unit_mainAttack[i][0] + ' ' + unit_mainAttack[i][7] +'</label> </div>')

      }
      if ((unit_mainAttack_selected.length < 2)/*  && unit_mainAttack_selected[0] === 0 */) {
        $('#flexRadioDefault'+unit_mainAttack_selected[0]).prop('disabled',true);
      } else {
        $('#flexRadioDefault'+unit_mainAttack_selected[0]).prop('disabled',false);
      }
      for (let i = 0, n = unit_mainAttack_selected.length; i < n; i++) {
        $('#flexRadioDefault'+unit_mainAttack_selected[i]).prop('checked',true);
      }

      $('#Unit_Extra .form-check').on('change',function() {
        if (($('#Unit_Extra .form-check input:checkbox:checked').length > 0) && (unit_mainAttack.length > 1)) {
          unit_mainAttack_selected = [0]
          $.each($('#Unit_Extra .form-check input:checkbox:checked'),function(index) {
            unit_mainAttack_selected[index] = (Number($(this).attr('value')));
          })
         } else {
          unit_mainAttack_selected = [0];
         }

         UpdateUnitAndTarget(total_unit_data);
        CalcUnitDMG();
      })

        let ctc;
        let cth;
        let ecd;
        let ma_len = unit_mainAttack_selected.length;
        var unit_mainAttack_mixed = ['attack1',0,0,0,0,'0','0','USN_ATTACK','NST_ATTACK',0,0,0,0,'false','false'];
        var unit_mainAttackDPS = 0;


      if (active_skills_exclude[0] !== false) {
        for (let i = 0; i < ma_len; i++) {
          
        
        if (unit_mainAttack[unit_mainAttack_selected[i]][13] == 'true') {
          var sfpe = target_PerfectEvaBuffUptime - 1;
          var tdc_p;
          var eepc;
          if ((HIT_pc > enemy_EVA_percent)) { 
            eepc = 0;
          } else {
            eepc = enemy_EVA_percent;
          }
          if (sfpe < 0) {
            tdc_p = 1-(1-(eepc) * (1-Math.abs(sfpe)))
          } else {
            tdc_p = (1-(1-eepc) * (1-sfpe))
          }
          ctc = CRIT_pc*(1-tdc_p);
          if (unit_mainAttack[unit_mainAttack_selected[i]][14] == 'true') { // sure fire
            unit_mainAttack_mixed[13] = 'true';
            cth = 0
          } else {
            cth = 1-ctc-tdc_p;
          }
          ecd = tdc_p;
        } else {
          if (unit_mainAttack[unit_mainAttack_selected[i]][14] == 'true') { // force crit
            unit_mainAttack_mixed[14] = 'true';
            if ((HIT_pc > enemy_EVA_percent)) {  
              ctc = 1;
            } else {
              ctc = 1*(1-targetDodgeChance);
            }
            cth = 0
          } else {
            ctc = CRIT_pc*(1-targetDodgeChance);
            cth = 1-ctc-targetDodgeChance;
          }
          ecd = targetDodgeChance;
        }

        if (i === 0) {
          unit_mainAttack_mixed[0] = unit_mainAttack[unit_mainAttack_selected[i]][0];
          unit_mainAttack_mixed[7] = unit_mainAttack[unit_mainAttack_selected[i]][7];
          unit_mainAttack_mixed[8] = unit_mainAttack[unit_mainAttack_selected[i]][8];
        }
        
        unit_mainAttack_mixed[1] += unit_mainAttack[unit_mainAttack_selected[i]][1];
          unit_mainAttack_mixed[2] += unit_mainAttack[unit_mainAttack_selected[i]][2];
          unit_mainAttack_mixed[3] += unit_mainAttack[unit_mainAttack_selected[i]][3];
          unit_mainAttack_mixed[4] += Number(unit_mainAttack[unit_mainAttack_selected[i]][4]);

          unit_mainAttack_mixed[9] += unit_mainAttack[unit_mainAttack_selected[i]][9];
          unit_mainAttack_mixed[10] += unit_mainAttack[unit_mainAttack_selected[i]][10];
          unit_mainAttack_mixed[11] += unit_mainAttack[unit_mainAttack_selected[i]][11];
          unit_mainAttack_mixed[12] += unit_mainAttack[unit_mainAttack_selected[i]][12];

          unit_mainAttackDPS += Math.max(Number((unit_mainAttack[unit_mainAttack_selected[i]][2]*cth)+(unit_mainAttack[unit_mainAttack_selected[i]][1]*ctc)+(unit_mainAttack[unit_mainAttack_selected[i]][3]*ecd))/(unit_mainAttack[unit_mainAttack_selected[i]][4]/(1+unit_final_aspd)),0);

       


        
      }
      unit_mainAttack_mixed[1] = unit_mainAttack_mixed[1]/ma_len;
      unit_mainAttack_mixed[2] = unit_mainAttack_mixed[2]/ma_len;
      unit_mainAttack_mixed[3] = unit_mainAttack_mixed[3]/ma_len;
      unit_mainAttack_mixed[4] = unit_mainAttack_mixed[4]/ma_len;
      unit_mainAttack_mixed[4] = String(unit_mainAttack_mixed[4])

      unit_mainAttack_mixed[9] = unit_mainAttack_mixed[9]/ma_len;
      unit_mainAttack_mixed[10] = unit_mainAttack_mixed[10]/ma_len;
      unit_mainAttack_mixed[11] = unit_mainAttack_mixed[11]/ma_len;
      unit_mainAttack_mixed[12] = unit_mainAttack_mixed[12]/ma_len;
      unit_mainAttackDPS = unit_mainAttackDPS/ma_len;

      }

      console.log('unit_mainAttack');
      console.log(unit_mainAttack);
      console.log(unit_mainAttack_mixed);
      console.log(unit_mainAttackDPS);


var Total_Unit_DPS = 0;


var unit_restAttacks_last = unit_mainAttack_mixed.length;
if (unit_restAttacks.length > 0) {
  unit_restAttacks_last = unit_restAttacks[unit_restAttacks.length-1].length
}
 
var rAtk_extra = [];
var rAtk_extra_main = [];
var rAtk_extra_mod = 1;
var rAtk_extra_mod_main = 1;

for (let i = 0, n = unit_restAttacks.length; i < n; i++) {
  if (active_skills_exclude[i+1] !== false) { 
    if ((unit_restAttacks[i][13] == 'true')) {
      var sfpe = target_PerfectEvaBuffUptime - 1;
      var tdc_p;
      var eepc;
      if ((HIT_pc > enemy_EVA_percent)) { 
        eepc = 0;
      } else {
        eepc = enemy_EVA_percent;
      }
      if (sfpe < 0) {
        tdc_p = 1-(1-(eepc) * (1-Math.abs(sfpe)))
      } else {
        tdc_p = (1-(1-eepc) * (1-sfpe))
      }
      ctc = CRIT_pc*(1-tdc_p);
      if (unit_restAttacks[i][14] == 'true') {
        cth = 0
      } else {
        cth = 1-ctc-tdc_p;
      }
      ecd = tdc_p;
    } else {
    if (unit_restAttacks[i][14] == 'true') { // force crit
      if ((HIT_pc > enemy_EVA_percent)) {  
        ctc = 1;
      } else {
        ctc = 1*(1-targetDodgeChance);
      }
      cth = 0
    } else {
      ctc = CRIT_pc*(1-targetDodgeChance);
      cth = 1-ctc-targetDodgeChance;
    }
    ecd = targetDodgeChance;
  }
  if (((unit_restAttacks[i][8] === 'NST_ATTACK' && unit_restAttacks[i][11] > 0) || (unit_restAttacks[i][6] === '1')) && unit_restAttacks[i][6] !== '22') {
    unit_restAttacks[i][unit_restAttacks_last] = IFERROR(Number(((unit_restAttacks[i][2]*cth)+(unit_restAttacks[i][1]*ctc)+(unit_restAttacks[i][3]*ecd))/(IFERROR(((unit_mainAttack_mixed[4]/(1+unit_final_aspd)*unit_restAttacks[i][5]+unit_restAttacks[i][4]/(1+unit_final_aspd))/(Number(unit_restAttacks[i][5])+1)),1))/(Number(unit_restAttacks[i][5])+1)),0);
    //unit_restAttacks[i][unit_restAttacks_last] = IFERROR(Number(((unit_restAttacks[i][2]*cth)+(unit_restAttacks[i][1]*ctc)+(unit_restAttacks[i][3]*ecd))/(unit_mainAttack_mixed[4]/(1+unit_final_aspd))/(unit_restAttacks[i][5])),0); // old variant
    //unit_mainAttackDPS *= (IFERROR((1-unit_restAttacks[i][4]/(unit_restAttacks[i][5])/(unit_mainAttack_mixed[4])/(1+unit_final_aspd)),1)) // old variant
    //unit_restAttacks[i][unit_restAttacks_last] *= (IFERROR((1-unit_restAttacks[i][4]/(unit_restAttacks[i][5]/(1+unit_final_cdr))/(1+unit_final_aspd)),1)) // old (IFERROR((1-unit_restAttacks[i][4]/(unit_restAttacks[i][5])/(1+unit_final_aspd)),1)) doesn't include cdr offset from enhanced attack by skills
    unit_mainAttackDPS *= IFERROR(1/((unit_mainAttack_mixed[4]/(1+unit_final_aspd)*unit_restAttacks[i][5]+unit_restAttacks[i][4]/(1+unit_final_aspd))/(Number(unit_restAttacks[i][5])+1)),1)
    rAtk_extra_main.push(i)
    
  } else {
    if (unit_restAttacks[i][6] === '12') {
      unit_restAttacks[i][unit_restAttacks_last] = IFERROR(Number((unit_restAttacks[i][2]*cth)+(unit_restAttacks[i][1]*ctc)+(unit_restAttacks[i][3]*ecd))/(unit_restAttacks[i][5]),0);
  
      unit_mainAttackDPS *= (IFERROR((1-unit_restAttacks[i][4]/(unit_restAttacks[i][5]/(1+unit_final_cdr))/(1+unit_final_aspd)),1))
    } else if (unit_restAttacks[i][6] === '102') {
      unit_restAttacks[i][unit_restAttacks_last] = IFERROR(Number(((unit_restAttacks[i][2]*cth)+(unit_restAttacks[i][1]*ctc)+(unit_restAttacks[i][3]*ecd))/(IFERROR(((unit_mainAttack_mixed[4]/(1+unit_final_aspd)*unit_restAttacks[i][5]+unit_restAttacks[i][4]/(1+unit_final_aspd))/(Number(unit_restAttacks[i][5])+1)),1))/((Number(unit_restAttacks[i][5])+1))),0);
      rAtk_extra_main.push(i)
       
    } else if (unit_restAttacks[i][6] === '22') {
      const cfeedback_uptime = 1+CRIT_pc*(1-targetDodgeChance);
      unit_restAttacks[i][unit_restAttacks_last] = IFERROR(Number(((unit_restAttacks[i][2]*cth)+(unit_restAttacks[i][1]*ctc)+(unit_restAttacks[i][3]*ecd))/(IFERROR(((unit_mainAttack_mixed[4]/(1+unit_final_aspd)*(unit_restAttacks[i][5]/cfeedback_uptime)+unit_restAttacks[i][4]/(1+unit_final_aspd))/(Number((unit_restAttacks[i][5]))+1)/cfeedback_uptime),1))/((Number(unit_restAttacks[i][5])+1))/cfeedback_uptime),0);
      unit_mainAttackDPS *= IFERROR(1/((unit_mainAttack_mixed[4]/(1+unit_final_aspd)*(unit_restAttacks[i][5]/cfeedback_uptime)+unit_restAttacks[i][4]/(1+unit_final_aspd))/(Number(unit_restAttacks[i][5])+1)/cfeedback_uptime),1)
      
      rAtk_extra.push(i)
      rAtk_extra_mod_main *= IFERROR(1/((unit_mainAttack_mixed[4]/(1+unit_final_aspd)*(unit_restAttacks[i][5]/cfeedback_uptime)+unit_restAttacks[i][4]/(1+unit_final_aspd))/(Number(unit_restAttacks[i][5])+1)/cfeedback_uptime),1) // (IFERROR((1-(unit_mainAttack_mixed[4]/(1+unit_final_aspd))/(unit_restAttacks[i][5])/unit_mainAttack_mixed[4]/cfeedback_uptime),1)) // this would make rosa enhanced a dps gain but i think its wrong formula
       
    } else if ((unit_restAttacks[i][6] !== '101')) {
      unit_restAttacks[i][unit_restAttacks_last] = IFERROR(Number((unit_restAttacks[i][2]*cth)+(unit_restAttacks[i][1]*ctc)+(unit_restAttacks[i][3]*ecd))/(unit_restAttacks[i][5]/(1+unit_final_cdr)),0);
     /* if (rAtk_extra.length > -1) {
       //unit_restAttacks[rAtk_extra][unit_restAttacks_last] *= (IFERROR((1-unit_restAttacks[i][4]/(unit_restAttacks[i][5]/(1+unit_final_cdr))/(1+unit_final_aspd)),1)) // stuff like accumulated attacks offsets with other skills


     } */
    // rAtk_extra.push(i);
      rAtk_extra_mod_main *= (IFERROR((1-unit_restAttacks[i][4]/(unit_restAttacks[i][5]/(1+unit_final_cdr))/(1+unit_final_aspd)),1));
      rAtk_extra_mod *= (IFERROR((1-unit_restAttacks[i][4]/(unit_restAttacks[i][5]/(1+unit_final_cdr))/(1+unit_final_aspd)),1));
     
        unit_mainAttackDPS *= (IFERROR((1-unit_restAttacks[i][4]/(unit_restAttacks[i][5]/(1+unit_final_cdr))/(1+unit_final_aspd)),1))
        
      } else {
        unit_restAttacks[i][unit_restAttacks_last] = IFERROR(Number((unit_restAttacks[i][2]*cth)+(unit_restAttacks[i][1]*ctc)+(unit_restAttacks[i][3]*ecd))/(unit_restAttacks[i][5]),0);
    
      }
    
    
  }
   
  } else {
    unit_restAttacks[i][unit_restAttacks_last] = 0
  }
}

console.log('rAtk_extra_mod')
console.log(rAtk_extra_mod)
console.log(rAtk_extra)
console.log(rAtk_extra_main)



for (let i = 0, n = unit_restAttacks.length; i < n; i++) {
  if (rAtk_extra.indexOf(i) > -1) {
    unit_restAttacks[i][unit_restAttacks_last] *= rAtk_extra_mod;
    rAtk_extra.splice(i, 1);
  } else if (rAtk_extra_main.indexOf(i) > -1) {
    unit_restAttacks[i][unit_restAttacks_last] *= rAtk_extra_mod_main;
    rAtk_extra_main.splice(i, 1);
  }
  Total_Unit_DPS += unit_restAttacks[i][unit_restAttacks_last];
}

Total_Unit_DPS += unit_mainAttackDPS;
Total_Unit_DPS = Total_Unit_DPS*(1-target_InvincibilityBuffUptime);

unit_mainAttack_mixed[unit_mainAttack_mixed.length] = unit_mainAttackDPS;


unit_totalAttacks.push(unit_mainAttack_mixed)
unit_totalAttacks = unit_totalAttacks.concat(unit_restAttacks)



dTableCompare_values = [];
     
if (unit_mainAttack.length > 0) {


for (let i = 0; i < unit_totalAttacks.length; i++) {
  var cdskill = 0;
  var sanim = (unit_totalAttacks[i][4]/(1+unit_final_aspd)).toFixed(2);
  if ((((unit_totalAttacks[i][8] === 'NST_ATTACK')  || (unit_totalAttacks[i][6] === '1')) && (unit_totalAttacks[i][6] !== '100') && (unit_totalAttacks[i][6] !== '01')) && unit_totalAttacks[i][6] !== '22') {
    cdskill = ((IFERROR((((unit_mainAttack_mixed[4]/(1+unit_final_aspd))*unit_totalAttacks[i][5]+unit_totalAttacks[i][4]/(1+unit_final_aspd))/(Number(unit_totalAttacks[i][5])+1)),1))/(1/(Number(unit_totalAttacks[i][5])+1))).toFixed(2);
    //  cdskill = ((unit_mainAttack_mixed[4]/(1+unit_final_aspd))/(1/unit_totalAttacks[i][5])).toFixed(2);
  } else if ((unit_totalAttacks[i][6] === '100') || (unit_totalAttacks[i][6] === '12')) {
    cdskill = parseFloat(unit_totalAttacks[i][5]).toFixed(2);
  } else if (unit_totalAttacks[i][6] === '101') {
    cdskill = parseFloat(unit_totalAttacks[i][5]).toFixed(2);
    sanim = '1.00';
  } else if (unit_totalAttacks[i][6] === '22') {
    const cfeedback_uptime = 1+(CRIT_pc*(1-targetDodgeChance));
    cdskill = ((IFERROR(((unit_mainAttack_mixed[4]/(1+unit_final_aspd)*(unit_totalAttacks[i][5]/cfeedback_uptime)+unit_totalAttacks[i][4]/(1+unit_final_aspd))/(Number(unit_totalAttacks[i][5])+1)),1))/(1/(Number(unit_totalAttacks[i][5])+1))).toFixed(2);

  } else {
    cdskill = (unit_totalAttacks[i][5]/(1+unit_final_cdr)).toFixed(2);
  }

  var sDmg_chpd = '';
  var sDmg_mhpd = '';

  var isSureFireNat = false;
  var isSureFire = false;
  var isForceCrit = false;


  if ((unit_totalAttacks[i][13] == 'true')) { // sure fire
    var sfpe = target_PerfectEvaBuffUptime - 1;
    var tdc_p;
    var eepc;
    if ((HIT_pc > enemy_EVA_percent)) { 
      eepc = 0;
    } else {
      eepc = enemy_EVA_percent;
    }
    if (sfpe < 0) {
      tdc_p = 1-(1-(eepc) * (1-Math.abs(sfpe)))
    } else {
      tdc_p = (1-(1-eepc) * (1-sfpe))
    }
    ctc = CRIT_pc*(1-tdc_p);
    if (unit_totalAttacks[i][14] == 'true') { // force crit
      cth = 0
    } else {
      cth = 1-ctc-tdc_p;
    }
    ecd = tdc_p;
  } else {
    if (unit_totalAttacks[i][14] == 'true') { // force crit
      if ((HIT_pc > enemy_EVA_percent)) {  
        ctc = 1;
      } else {
        ctc = 1*(1-targetDodgeChance);
      }
      cth = 0
    } else {
      ctc = CRIT_pc*(1-targetDodgeChance);
      cth = 1-ctc-targetDodgeChance;
    }
    ecd = targetDodgeChance;
  }

  var chm_chance = [ctc,cth,ecd];



  if (ecd === 0) {
   /*  chm_chance[2] = 0; */
    isSureFireNat = true;
  }
  if (unit_totalAttacks[i][13] == 'true') {
    /* chm_chance[0] = CRIT_pc*(1-targetDodgeChance*Math.max(SFvPEmod,0));
    chm_chance[1] = 1-chm_chance[0]-targetDodgeChance*Math.max(SFvPEmod,0);
    chm_chance[2] = targetDodgeChance*Math.max(SFvPEmod,0); */
    isSureFire = true;
  }
  if (unit_totalAttacks[i][14] == 'true') {
    /* chm_chance[0] = 1-targetDodgeChance;
    chm_chance[1] = 0; */
    isForceCrit = true;
  }
  if ((isSureFire === true || isSureFireNat === true) && (isForceCrit === true)) {
    /* chm_chance = [1,0,ecd]; */
  }

  var hitsMdl = ['','',''];
  var mdl_redc = ['','',''];
  var dmgAppl = ['','','',''];

  var totalSkillMod = 0;

  var sDmg_mod;

  var listForMultiAtkTable = '';

  var sCounter = 0;

  var sDmg_Tdcm = 0;

  if (unitCalculatedDmg.length > 1) {
    
  for (let j = 0; j < unitCalculatedDmg.length; j++) {
    

   if (((unitCalculatedDmg[j][0].indexOf(unit_totalAttacks[i][0]) > -1) && (unitCalculatedDmg[j][7].includes(unit_totalAttacks[i][7].replace(/_END/i, "")) === true) && (unitCalculatedDmg[j][8].indexOf(unit_totalAttacks[i][8]) > -1) && (Number(unitCalculatedDmg[j][2]) > 0))) {
    sCounter++;
    if (j>0) {
      if ((unitCalculatedDmg[j][0] !== unitCalculatedDmg[j-1][0]) && (unitCalculatedDmg[j][7] !== unitCalculatedDmg[j-1][7]) && (unitCalculatedDmg[j][8] !== unitCalculatedDmg[j-1][8])) {
        
        sCounter = 1;
      }
    }

    sDmg_chpd = (Math.round(Number(unitCalculatedDmg[j][9])))
    sDmg_mhpd = (Math.round(Number(unitCalculatedDmg[j][10])))

    

    var chm_dmg = (Math.round(Number((unitCalculatedDmg[j][2]*chm_chance[1])+(unitCalculatedDmg[j][1]*chm_chance[0])+(unitCalculatedDmg[j][3]*chm_chance[2]))));
    
    var sDmg_hit = ((Number(unitCalculatedDmg[j][2]/* -unitCalculatedDmg[j][9]-unitCalculatedDmg[j][10] */)));
    var sDmg_crit = ((Number(unitCalculatedDmg[j][1]/* -unitCalculatedDmg[j][9]-unitCalculatedDmg[j][10] */)));
    var sDmg_miss = ((Number(unitCalculatedDmg[j][3]/* -unitCalculatedDmg[j][9]-unitCalculatedDmg[j][10] */)));
    sDmg_Tdcm = Math.round(Number((unit_totalAttacks[i][2]*chm_chance[1])+(unit_totalAttacks[i][1]*chm_chance[0])+(unit_totalAttacks[i][3]*chm_chance[2])));
    //sDmg_chpd = (Math.round(Number(unitCalculatedDmg[j][9]))) > 0 ?  ('Target current hp% as dmg: ' + (Math.round(Number(unitCalculatedDmg[j][9])))) + '<br />':'';
    //sDmg_mhpd = (Math.round(Number(unitCalculatedDmg[j][10]))) > 0 ? ('Target max hp% as dmg: ') + (Math.round(Number(unitCalculatedDmg[j][10]))) + '<br />':'';



    //var sDmg_scale = 'Skill modifier: ' + (unitCalculatedDmg[j][11]).toFixed(2) + '<br />';
    sDmg_mod = '<b>' + unit_totalAttacks[i][0] + '</b>'+ '<br />' + 'Damage modifier: ' + (unitCalculatedDmg[j][12]).toFixed(2) + '<br />';

    if (sDmg_hit > enemy_mdl) {
      hitsMdl[0] = ('Blocked by mdl: ' + Math.round(Math.round(((sDmg_hit-enemy_mdl)/0.04)+enemy_mdl)-sDmg_hit)) + '<br />' + ('Before mdl: ' + Math.round(((sDmg_hit-enemy_mdl)/0.04)+enemy_mdl)) + '<br />';
      mdl_redc[0] = '<span dt_target="#dt_'+i+'mdl_'+j+'_h" class="dt_tooltip_hover dt_mdl_desc"> (-'+Math.round(Math.round(((sDmg_hit-enemy_mdl)/0.04)+enemy_mdl)-sDmg_hit)+') </span>';
    } else {
      hitsMdl[0] = '';
      mdl_redc[0] = '';
    }
    if (sDmg_crit > enemy_mdl) {
      hitsMdl[1] = ('Blocked by mdl: ' + Math.round(Math.round(((sDmg_crit-enemy_mdl)/0.04)+enemy_mdl)-sDmg_crit)) + '<br />' + ('Before mdl: ' + Math.round(((sDmg_crit-enemy_mdl)/0.04)+enemy_mdl)) + '<br />';
      mdl_redc[1] = '<span dt_target="#dt_'+i+'mdl_'+j+'_c" class="dt_tooltip_hover dt_mdl_desc"> (-'+Math.round(Math.round(((sDmg_crit-enemy_mdl)/0.04)+enemy_mdl)-sDmg_crit)+') </span>';
    } else {
      hitsMdl[1] = '';
      mdl_redc[1] = '';
    }
    if (sDmg_miss > enemy_mdl) {
      hitsMdl[2] = ('Blocked by mdl: ' + Math.round(Math.round(((sDmg_miss-enemy_mdl)/0.04)+enemy_mdl)-sDmg_miss)) + '<br />' + ('Before mdl: ' + Math.round(((sDmg_miss-enemy_mdl)/0.04)+enemy_mdl)) + '<br />';
      mdl_redc[2] = '<span dt_target="#dt_'+i+'mdl_'+j+'_m" class="dt_tooltip_hover dt_mdl_desc"> (-'+Math.round(Math.round(((sDmg_miss-enemy_mdl)/0.04)+enemy_mdl)-sDmg_miss)+') </span>';
    } else {
      hitsMdl[2] = '';
      mdl_redc[2] = '';
    }



    if (((sDmg_chpd !== 0) || (sDmg_mhpd !== 0))) {
      dmgAppl[0] = '<span dt_target="#dt_'+i+'tt_'+j+'_h" class="dt_tooltip_hover">'+Math.round(sDmg_hit)+'</span>';
      dmgAppl[1] = '<span dt_target="#dt_'+i+'tt_'+j+'_c" class="dt_tooltip_hover">'+Math.round(sDmg_crit)+'</span>';
      dmgAppl[2] = '<span dt_target="#dt_'+i+'tt_'+j+'_m" class="dt_tooltip_hover">'+Math.round(sDmg_miss)+'</span>';
      

    $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'tt_'+j+'_h" class="dt_tooltip">' + (sDmg_chpd !== 0 ? ('Target current hp% as dmg: ' + sDmg_chpd + '<br />'):'') + (sDmg_mhpd !== 0 ? ('Target max hp% as dmg: ' + sDmg_mhpd + '<br />'):'') + '</div>')
    $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'tt_'+j+'_c" class="dt_tooltip">' + (sDmg_chpd !== 0 ? ('Target current hp% as dmg: ' + Math.round(sDmg_chpd*crit_multiplier) + '<br />'):'') + (sDmg_mhpd !== 0 ? ('Target max hp% as dmg: ' + Math.round(sDmg_mhpd*crit_multiplier) + '<br />'):'') + '</div>')
    if (isForceCrit === true) {
      $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'tt_'+j+'_m" class="dt_tooltip">' + (sDmg_chpd !== 0 ? ('Target current hp% as dmg: ' + Math.round(sDmg_chpd*crit_multiplier*miss_multiplier) + '<br />'):'') + (sDmg_mhpd !== 0 ? ('Target max hp% as dmg: ' + Math.round(sDmg_mhpd*crit_multiplier*miss_multiplier) + '<br />'):'') + '</div>')
    } else {
      $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'tt_'+j+'_m" class="dt_tooltip">' + (sDmg_chpd !== 0 ? ('Target current hp% as dmg: ' + Math.round(sDmg_chpd*miss_multiplier) + '<br />'):'') + (sDmg_mhpd !== 0 ? ('Target max hp% as dmg: ' + Math.round(sDmg_mhpd*miss_multiplier) + '<br />'):'') + '</div>')
    }

    } else {
      dmgAppl[0] = Math.round(sDmg_hit);
      dmgAppl[1] = Math.round(sDmg_crit);
      dmgAppl[2] = Math.round(sDmg_miss);
    }
    if ([isSureFireNat,isSureFire,isForceCrit].some((t) => t === true)) {
      dmgAppl[3] = '<span>'+Math.round(sDmg_Tdcm)+'</span> <svg  dt_target="#dt_'+i+'tt_'+j+'_dcm" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill dt_tooltip_hover" viewBox="0 0 16 16"> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/> </svg>';
    $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'tt_'+j+'_dcm" class="dt_tooltip">' + ((isSureFire !== false) || (isSureFireNat !== false) ? ('Sure Fire (Can\'t miss)<br />'):'') + (isForceCrit !== false ? ('Force Crit (Always Crits)<br />'):'') + 'Chance to hit: '+(chm_chance[1]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')+ '%<br/>Chance to crit: '+(chm_chance[0]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')+ '%<br/>Chance to miss: '+(chm_chance[2]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')+'% </div>')

    } else {
      dmgAppl[3] = '<span>'+Math.round(sDmg_Tdcm)+'</span> <svg  dt_target="#dt_'+i+'tt_'+j+'_dcm" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill dt_tooltip_hover" viewBox="0 0 16 16"> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/> </svg>';
    $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'tt_'+j+'_dcm" class="dt_tooltip">' + 'Chance to hit: '+(chm_chance[1]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')+ '%<br/>Chance to crit: '+(chm_chance[0]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')+ '%<br/>Chance to miss: '+(chm_chance[2]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')+'% </div>')

    }
    
    if (mdl_redc.some((e) => e !== '') ) {
      $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'mdl_'+j+'_h" class="dt_tooltip"> '+hitsMdl[0]+'</div>')
      $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'mdl_'+j+'_c" class="dt_tooltip"> '+hitsMdl[1]+'</div>')
      $('#sd_dmg_table-tooltip_list .dt_tooltip_container').append('<div id="dt_'+i+'mdl_'+j+'_m" class="dt_tooltip"> '+hitsMdl[2]+'</div>');

    }
    //aTooltip += '<div class="tttext"> ' + sDmg_scale + 'Damage modifier: ' + (unitCalculatedDmg[j][12]).toFixed(2) + ' </div>';
    listForMultiAtkTable += '<tr class="table_extra-dark"> <td class="text-truncate"> '+unitCalculatedDmg[j][0]+' </td> <td> '+sCounter+' </td> <td> - </td> <td> - </td>  <td> '+ (chm_chance[1] > 0 ? dmgAppl[0] + mdl_redc[0]:0) +' </td>  <td> '+(chm_chance[0] > 0 ? dmgAppl[1] + mdl_redc[1]:0)+' </td>  <td> '+(chm_chance[2] > 0 ? dmgAppl[2] + mdl_redc[2]:0)+' </td>  <td> '+chm_dmg+' </td> <td> '+Math.round(unit_totalAttacks[i][unit_restAttacks_last]/(Number((unit_totalAttacks[i][2]*cth)+(unit_totalAttacks[i][1]*ctc)+(unit_totalAttacks[i][3]*ecd))/chm_dmg))+' </td> <td> '+(unitCalculatedDmg[j][11]).toFixed(2)+' </td> <td> </td> </tr>';
    totalSkillMod += unitCalculatedDmg[j][11];
    
   }

    
  }
  
  
}
if (sCounter > 1) {
  listForMultiAtkTable = '<thead class="uthead accordion-header"><tr id="dthead_'+i+'" class="unitTotalResult_hover" data-bs-toggle="collapse" data-bs-target="#dtbody_'+i+'" aria-expanded="false" aria-controls="dtbody_'+i+'"> <th class="text-truncate">'+unit_totalAttacks[i][0]+'</th> <th> '+sCounter+' </th> <th> '+cdskill+' </th> <th> '+sanim+' </th> <th> '+ (chm_chance[1] > 0 ? Math.round(unit_totalAttacks[i][2]):0)+' </th> <th> '+ (chm_chance[0] > 0 ? Math.round(unit_totalAttacks[i][1]):0)+' </th> <th> '+ (chm_chance[2] > 0 ? Math.round(unit_totalAttacks[i][3]):0)+' </th> <th> '+dmgAppl[3]+' </th> <th> '+Math.round(unit_totalAttacks[i][unit_restAttacks_last])+' </th> <th> '+(totalSkillMod).toFixed(2)+' </th> <th> '+(unit_totalAttacks[i][12]).toFixed(2)+' </th> </tr> </thead> <tbody id="dtbody_'+i+'" class="udtbody collapse" aria-labelledby="dthead_'+i+'" data-bs-parent="#unit_dps_table">' + listForMultiAtkTable + '</tbody>';
  
} else {
  listForMultiAtkTable = '<thead class="uthead accordion-header"><tr id="dthead_'+i+'" data-bs-toggle="collapse" data-bs-target="#dtbody_'+i+'" aria-expanded="false" aria-controls="dtbody_'+i+'"> <th class="text-truncate">'+unit_totalAttacks[i][0]+'</th> <th> '+sCounter+' </th> <th> '+cdskill+' </th> <th> '+sanim+' </th> <th> '+ (chm_chance[1] > 0 ? dmgAppl[0] + mdl_redc[0]:0)+'  </th> <th> '+ (chm_chance[0] > 0 ? dmgAppl[1] + mdl_redc[1]:0)+'  </th> <th> '+ (chm_chance[2] > 0 ? dmgAppl[2] + mdl_redc[2]:0)+'  </th> <th> '+dmgAppl[3]+' </th> <th> '+Math.round(unit_totalAttacks[i][unit_restAttacks_last])+' </th> <th> '+(unit_totalAttacks[i][11]).toFixed(2)+' </th> <th> '+(unit_totalAttacks[i][12]).toFixed(2)+' </th> </tr> </thead>'
  
}

  $('#skill_exclude_select').append('<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="exsselect_'+i+'" checked> <label class="form-check-label" for="exsselect_'+i+'"> '+unit_totalAttacks[i][0]+' </label> </div>') 


 $('#unit_dps_table').append(listForMultiAtkTable)
 CreateTooltipForAnything($('#sdmg_Crit'),'Crit modifier: ' + ((1 + unit_bonus_stats[14] - target_bonus_stats[17])*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1') + '%<br/>')
 CreateTooltipForAnything($('#sdmg_Miss'),'Miss modifier: ' + ((HIT_pc+0.1)*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1') + '%<br/>');
 CreateTooltipForAnything($('#dcm_inf'),'Summ of hit, crit and miss damage values multiplied by its chances.')

 if (active_skills_exclude[i] != '') {
  

  dTableCompare_values.push(unit_totalAttacks[i][0],(Number(cdskill) < 1 ? sanim:cdskill),Math.round(sDmg_Tdcm),Math.round(unit_totalAttacks[i][unit_restAttacks_last]),(unit_totalAttacks[i][12]).toFixed(2),String(Math.round(unit_totalAttacks[i][2])) + ' (' + (chm_chance[1]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')+'%)',String(Math.round(unit_totalAttacks[i][1])) + ' (' + (chm_chance[0]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1') + '%)',String(Math.round(unit_totalAttacks[i][3])) + ' (' + (chm_chance[2]*100).toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')+'%)');

 }
 
}
}
$.each($('#skill_exclude_select input'), function () {
  $(this).prop('checked',active_skills_exclude[String($(this).attr('id')).slice(-1)]);
  
  $(this).on('change',function() {
    if (this.checked === true) {
      active_skills_exclude[String($(this).attr('id')).slice(-1)] = true
    } else {
      active_skills_exclude[String($(this).attr('id')).slice(-1)] = false;
    }
    CalcUnitDMG();
  })
  
})

for (let i = 0, n = active_skills_exclude.length; i < n; i++) {
  if (active_skills_exclude[i] === false) {
    //$('#dthead_'+i).hide()
    $('#dthead_'+i).css('visibility','hidden')
  }
}

 
var finalunitdps;
var targetdurability;


var HpsAmount;
var HpsResult;
var HpsCD;

if ($('#HPS_Healing_Amount-Input').val() === '') {
  HpsAmount = 0;
} else {
  HpsAmount = Number($('#HPS_Healing_Amount-Input').val())/100;
}
  

  HpsResult = Number($('#target-hp').attr('subvalue'))*(HpsAmount*(1+target_bonus_stats[19]));
  $('#healing_hps_amount span').text(Math.round(HpsResult));
  if ($('#HPS_Healing_CD-Input').val() != 0) {
    HpsCD = $('#HPS_Healing_CD-Input').val();
    $('#healing_hps_cd span').text(Math.round(HpsCD));
    $('#healing_hps_result span').text(Math.round(HpsResult/HpsCD));
  } else {
    $('#healing_hps_result span').text('0');
  }

  var HpsAmount;
  var HpsResult;
  var HpsCD;
  
  if ($('#HPS_Barrier_Amount-Input').val() === '') {
    HpsAmount = 0;
  } else {
    HpsAmount = (Number($('#HPS_Barrier_Amount-Input').val())/100);
  }
    
  
    HpsResult = Number($('#target-hp').attr('subvalue'))*(HpsAmount*(1+target_bonus_stats[62]));
    $('#barrier_hps_amount span').text(Math.round(HpsResult));
    if ($('#HPS_Barrier_CD-Input').val() != 0) {
      HpsCD = $('#HPS_Barrier_CD-Input').val();
      $('#barrier_hps_cd span').text(Math.round(HpsCD));
      $('#barrier_hps_result span').text(Math.round(HpsResult/HpsCD));
    } else {
      $('#barrier_hps_result span').text('0');
    }


var unitHpsHealing = 0;

var unitHpsBarrier = 0;

if ($('#HPS_Healing-Checkbox').is(':checked')) {
  unitHpsHealing = Number($('#healing_hps_result span').text());
  
}
if ($('#HPS_Barrier-Checkbox').is(':checked')) { 
  unitHpsBarrier = Number($('#barrier_hps_result span').text());
}

unitHpsHealing += Number($('#target-hp').attr('subvalue'))*(target_bonus_stats[16]*(1+target_bonus_stats[62]));


finalunitdps = Math.round(Number(Total_Unit_DPS)).toFixed(2);
targetdurability = (target_hp/(Number(Total_Unit_DPS)-unitHpsHealing-unitHpsBarrier)).toFixed(2)
        $('#new_sd_dps').append('<p></p><p>Total unit DPS = <span id="cUdps">' + Math.round(Number(Total_Unit_DPS)) + '</span> '+ (unitHpsHealing > 0 ? '<small class="txt-healing">(-'+ Math.round(unitHpsHealing) +')</small>':'') +' '+ (unitHpsBarrier > 0 ? '<small class="txt-barrier">(-'+ Math.round(unitHpsBarrier) +')</small>':'') +' Target is alive for <span id="cTdurability">'+ (target_hp/(Number(Total_Unit_DPS)-unitHpsHealing-unitHpsBarrier)).toFixed(2) +' sec.</span></p>');
        if (total_unit_data[12] > 1) {
          for (let i = 1; i < total_unit_data[12]; i++) {
            $('#new_sd_dps').append('<p>Total unit DPS ('+ (i+1) +' units) = <span id="cUdps">' + Math.round(Number(Total_Unit_DPS))*(i+1) + '</span> '+ (unitHpsHealing > 0 ? '<small class="txt-healing">(-'+ unitHpsHealing +')</small>':'') +' '+ (unitHpsBarrier > 0 ? '<small class="txt-barrier">(-'+ unitHpsBarrier +')</small>':'') +' Target is alive for <span id="cTdurability">'+ (target_hp/(Number(Total_Unit_DPS*(i+1))-unitHpsHealing-unitHpsBarrier)).toFixed(2) +' sec.</span></p>');
            finalunitdps = (Math.round(Number(Total_Unit_DPS))*(i+1)).toFixed(2)
            targetdurability = (target_hp/(Number(Total_Unit_DPS*(i+1))-unitHpsHealing-unitHpsBarrier)).toFixed(2)
          }
        }
      }

      
      unit_stats_to_save.push(Math.floor(finalunitdps));
      unit_stats_to_save.splice((unit_stats_to_save.length)/2, 0, 'DPS');
      target_stats_to_save.push(targetdurability);
      target_stats_to_save.splice((target_stats_to_save.length)/2, 0, 'Durability');


      for (let i = 0, n = $('.txt-healing').length; i < n; i++) {
        CreateTooltipForAnything($('.txt-healing').eq(i),'DPS reduced by healing')
      
      }
      for (let i = 0, n = $('.txt-barrier').length; i < n; i++) {
        CreateTooltipForAnything($('.txt-barrier').eq(i),'DPS reduced by barriers')
      
      }
      




      if (localStorageAvailable) {
        SaveSessionToLocalStorage()
      }

      
     // $("#new_sd_dmg [rel='tooltip']").tooltip();
      //$("#new_sd_dmg div").tooltip();


      $('.dt_tooltip_hover').on({'mouseenter':function(e) {
        dt_tooltip_active = $(this).attr('dt_target');
        const spanCoord = $(this).offset();
        const tTooltip = $(dt_tooltip_active)

        if (tTooltip.text() != '') {
          tTooltip.parent().css({top: spanCoord.top-tTooltip.outerHeight(), left: spanCoord.left+($(this).outerWidth()/2)-(tTooltip.outerWidth()/2)});
          tTooltip.addClass('active')
        }
       

        

        
      },'mouseleave':function(e) {
        $(dt_tooltip_active).removeClass('active')
        
      }

      })

      $('.udtbody').on('scroll',function() {
        if (tooltiptext_active != '') {
          tooltiptext_active.removeClass('active')
        }
        
        
      })

      

      $(window).resize((event) => {
        if (tooltiptext_active != '') {
          tooltiptext_active.removeClass('active')
        }
    });


      $('.tttextcontainer').on('click',function () {
        var ttarget;
        const tindex = $(this).parent().parent().index();

        
        if ($(this).parent().parent().parent().attr('class').includes($('.uthead').attr('class')) === false) {

           ttarget = $(this).parents('.udtbody').prev().prev().children().eq(tindex);
        } else {
          ttarget = $(this).parents('.uthead').prev().children().eq(tindex);
        }
        
        const scrollpos = $(this).parent().parent().parent().scrollTop();
        const pheight = $(this).parent().parent().parent()[0].scrollHeight;
        var theight = ttarget.outerHeight()*tindex;
        var twidth = ttarget.outerWidth()*tindex;


        const wheight = $(window).height();
        const dheight = $(document).height();

        const btnCoord = $(this).offset();
        

        const scrollHeightPercent = $(this).parent().parent().parent().scrollTop() / ($(this).parent().parent().parent()[0].scrollHeight - $(this).parent().parent().parent().height());


        $(ttarget.parent()).css({top: btnCoord.top-ttarget.outerHeight(), left: btnCoord.left+($(this).outerWidth()/2)-(ttarget.outerWidth()/2)});
        /* $(ttarget.parent()).css({top: btnCoord.top-theight, left: btnCoord.left}); */




        /* var destination = $(this).offset();
        $(ttarget.parent()).css({top: destination.top, left: destination.left});   */

       /*  ttarget.css('visibility','visible').siblings().css('visibility','hidden')
        ttarget.css('pointer-events','auto').siblings().css('pointer-events','none') */

        //ttarget.addClass('active').siblings().removeClass('active');

        $('.tttext').removeClass('active');
        ttarget.addClass('active')

        tooltiptext_active = ttarget;

      })

      $('.tooltipcontainer').on('click',function(){
       

            $(this).addClass('active').siblings().removeClass('active');

            const ttDrag = $('.tooltipcontainer.active .tooltiptext tbody');
            
      var clicked = false, clickY;
            ttDrag.on({
                'mousemove': function(e) {
                  if (!clicked) return;
                  e.preventDefault();
                    clicked && updateScrollPos(e);
                },
                'mousedown': function(e) {
                    clicked = true;
                    clickY = e.pageY;
                    ttDrag.css('cursor', 'grabbing');
                },
                'mouseup': function() {
                    clicked = false;
                    ttDrag.css('cursor', 'grab');
                },
                'mouseleave': function() {
                    clicked = false;
                    ttDrag.css('cursor', 'grab');
                }
            });
            
            var updateScrollPos = function(e) {
              
                ttDrag.scrollTop(ttDrag.scrollTop() + (clickY - e.pageY)/10);
            }
      
      });



      $('.unitTotalResult_hover').on('click',function(){
        
        const ttDrag = $($(this).attr('data-bs-target'));
        const sbWidth = ttDrag.css('scrollbar-width');

        
        
        if (!($(this).hasClass('scrollable')) && (ttDrag.get(0).scrollHeight > ttDrag.height())) {
          ttDrag.addClass('scrollable');
          
        ttDrag.css('width','calc( 100% + '+getScrollbarWidth(sbWidth)+'px )')
        var clicked = false, clickY;
              ttDrag.on({
                  'mousemove': function(e) {
                    if (!clicked) return;
                    e.preventDefault();
                      clicked && updateScrollPos(e);
                  },
                  'mousedown': function(e) {
                      clicked = true;
                      clickY = e.pageY;
                      ttDrag.css('cursor', 'grabbing');
                  },
                  'mouseup': function() {
                      clicked = false;
                      ttDrag.css('cursor', 'grab');
                  },
                  'mouseleave': function() {
                      clicked = false;
                      ttDrag.css('cursor', 'grab');
                  }
              });
              
              var updateScrollPos = function(e) {
                
                  ttDrag.scrollTop(ttDrag.scrollTop() + (clickY - e.pageY)/10);
              }
        }
        
        $(this).addClass('scrollable');
      });


     /*  for (let i = 0, n = $('.unitTotalResult_hover').length; i < n; i++) {
        $.each($('.unitTotalResult_hover'),function() {
          if (!($(this).hasClass('scrollable')) && $(this).get(0).scrollHeight > $(this).height()) {
            SetScrollable($($(this).attr('data-bs-target')));
          }
          
        })
      } */ //NOTE
   
     
     

      console.timeEnd('CaltUnitDMG_start');
      timerEnd('UpdateUnitAndTarget_timer');
    } else {
      $('#new_sd_dmg').html('');
      $('#new_sd_dps').html('');
      $('#sd_dmg_table-tooltip_list').html('');
      $('#sd_dmg_table').html('<div class="text-center fw-bold" style="font-size: 22px; color: red;">THIS UNIT HAS NO DAMAGE DATA!</div>');
      $('#sd_dmg_table-tooltip_list').append('<div class="dt_tooltip_container"> </div>');
    }

      }

function autocomplete(inp, arr) {
    var currentFocus;
    
    inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + " autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      function getIndixesOf(searchStr, str, caseSensitive) {
          var searchStrLen = searchStr.length;
          if (searchStrLen == 0) {
              return [];
          }
          var startIndex = 0, index, indices = [];
          if (!caseSensitive) {
              str = str.toLowerCase();
              searchStr = searchStr.toLowerCase();
          }
          while ((index = str.indexOf(searchStr, startIndex)) > -1) {
              indices.push(index);
              startIndex = index + searchStrLen;
          }
          return indices;
      }
      
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(getIndixesOf(val, arr[i]), val.length).toUpperCase() == val.toUpperCase()) {
          
          b = document.createElement("DIV");
          if(Number(getIndixesOf(val, arr[i])[0])==0){
              b.innerHTML += unit_titles[i] + " <strong>" + arr[i].substr(getIndixesOf(val, arr[i]), val.length) + "</strong>";
              b.innerHTML += arr[i].substr(val.length);
          } else {
              b.innerHTML = unit_titles[i] + ' ';
              b.innerHTML += arr[i].substr(0, getIndixesOf(val, arr[i]), val.length) + "<strong>" + arr[i].substr(getIndixesOf(val, arr[i]), val.length) + "</strong>";
              b.innerHTML += arr[i].substr(Number(getIndixesOf(val, arr[i]))+val.length);
          }
    
          b.innerHTML += '<span class="d-flex align-items-center"><img src="cs_icons/' + units_icons[i] + '.png" alt=""> <span style="position: relative; left: 1rem; top: 0;">' + '<span class="d-flex align-items-center"><img src="cs_icons/type_'+ ((unit_types[i].split(';')[0].toLowerCase() == 'c.o.') || (unit_types[i].split(';')[0].toLowerCase() == 'replacer') ? 'co':unit_types[i].split(';')[0].toLowerCase()) +'.png" height="20px" width="20px">' +  unit_types[i].split(';')[0] + '</span>' + '<span class="d-flex align-items-center"><img src="cs_icons/role_'+ unit_roles[i].toLowerCase() +'.png" height="20px" width="20px">' + unit_roles[i] + '</span>' + '<span class="d-flex align-items-center"><img src="cs_icons/movement_'+ unit_mtypes[i].toLowerCase() +'.png" height="20px" width="20px">' + unit_mtypes[i] + '</span></span>';
    
    
          
          
          //b.innerHTML += "<input type='hidden' value='" + unit_titles[i] +  ' ' + arr[i] + "'>";
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "' subvalue='" + unit_titles[i] + "'>";
              b.addEventListener("click", function(e) {
                var uTitle = this.getElementsByTagName("input")[0].getAttribute('subvalue');
                var uName = this.getElementsByTagName("input")[0].value;
              //inp.value = this.getElementsByTagName("input")[0].value;
              inp.value = (uTitle) + ' ' + (uName);
              console.log(inp.value);
              
              e.preventDefault();
//units_stats_csv[units_stats_csv.indexOf('Icon_Lee Yuri_The Militia') % 1 + 7]
//$('#searched-unitID-values').attr('subvalue') === $('#searched-unitID-values').attr('value');

              if ((inp.value != (total_unit_data[0] + ' ' + total_unit_data[1]))) {
               //searchvajax(inp.value, true);
               searchvcsv(uTitle, uName, true)
              }  else {
                  alert('Same unit!')
                }
                inp.value = (uName);

              closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });



    inp.addEventListener("click", function(e) {
      

      var a, b, i, val = this.value;
      closeAllLists();
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + " autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      function getIndixesOf(searchStr, str, caseSensitive) {
          var searchStrLen = searchStr.length;
          if (searchStrLen == 0) {
              return [];
          }
          var startIndex = 0, index, indices = [];
          if (!caseSensitive) {
              str = str.toLowerCase();
              searchStr = searchStr.toLowerCase();
          }
          while ((index = str.indexOf(searchStr, startIndex)) > -1) {
              indices.push(index);
              startIndex = index + searchStrLen;
          }
          return indices;
      }
      
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(getIndixesOf(val, arr[i]), val.length).toUpperCase() == val.toUpperCase()) {
          
          b = document.createElement("DIV");
          if(Number(getIndixesOf(val, arr[i])[0])==0){
              b.innerHTML += unit_titles[i] + " <strong>" + arr[i].substr(getIndixesOf(val, arr[i]), val.length) + "</strong>";
              b.innerHTML += arr[i].substr(val.length);
          } else {
              b.innerHTML = unit_titles[i] + ' ';
              b.innerHTML += arr[i].substr(0, getIndixesOf(val, arr[i]), val.length) + "<strong>" + arr[i].substr(getIndixesOf(val, arr[i]), val.length) + "</strong>";
              b.innerHTML += arr[i].substr(Number(getIndixesOf(val, arr[i]))+val.length);
          }
    
          b.innerHTML += '<span class="d-flex align-items-center"><img src="cs_icons/' + units_icons[i] + '.png" alt=""> <span style="position: relative; left: 1rem; top: 0;">' + '<span class="d-flex align-items-center"><img src="cs_icons/type_'+ ((unit_types[i].split(';')[0].toLowerCase() == 'c.o.') || (unit_types[i].split(';')[0].toLowerCase() == 'replacer') ? 'co':unit_types[i].split(';')[0].toLowerCase()) +'.png" height="20px" width="20px">' +  unit_types[i].split(';')[0] + '</span>' + '<span class="d-flex align-items-center"><img src="cs_icons/role_'+ unit_roles[i].toLowerCase() +'.png" height="20px" width="20px">' + unit_roles[i] + '</span>' + '<span class="d-flex align-items-center"><img src="cs_icons/movement_'+ unit_mtypes[i].toLowerCase() +'.png" height="20px" width="20px">' + unit_mtypes[i] + '</span></span>';
    
          
          
          //b.innerHTML += "<input type='hidden' value='" + unit_titles[i] +  ' ' + arr[i] + "'>";
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "' subvalue='" + unit_titles[i] + "'>";
              b.addEventListener("click", function(e) {
                var uTitle = this.getElementsByTagName("input")[0].getAttribute('subvalue');
                var uName = this.getElementsByTagName("input")[0].value;
              //inp.value = this.getElementsByTagName("input")[0].value;
              inp.value = (uTitle) + ' ' + (uName);
              console.log(inp.value);

              e.preventDefault();

              //var cunit = String(total_unit_data[0] + ' ' + total_unit_data[1]);

              if ((inp.value != (total_unit_data[0] + ' ' + total_unit_data[1]))) {
                //searchvajax(inp.value, true);

                searchvcsv(uTitle, uName, true)
                
              }  else {
                  alert('Same unit!')
                }
                inp.value = (this.getElementsByTagName("input")[0].value);

              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });


  
    
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + " autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = $('.autocomplete-items');
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
      if (x.html() != '') {
        
        
    }
    
  }
  }
  $(window).on('click' , function(e){
    if (e.target.id != 'searchIDtarget') {
      closeAllLists(e.target);
    }


    //console.log(e.target.classList) // This thing can't find appended element for some reason idk
    //console.log($(e.target).closest('span').find('.fixed_header').attr('class')); // this thing can find the appended element
  
    /* 
    console.log('classList = ')
    console.log(e.target.classList)
    console.log('className = ')
    console.log(e.target.className) */ // NOTE
    if ((e.target.classList.contains('tooltipcontainer') === true)) {
      
    } else if (($(e.target).closest('div').find('.fixed_header').attr('class') !== 'fixed_header') && (e.target.className != 'tooltipcontainer active')) {
      $('.tooltipcontainer').removeClass('active')
      
    }


    
    if ((e.target.classList.contains('tttextcontainer') === true)) {
      
    } else if ((e.target.classList.contains('tttext') === true)) {
      
    } else {
      $('.tttext').removeClass('active')
    }



    /* if ((e.target.className != 'tooltipcontainer active')) {
    $('.tooltipcontainer').removeClass('active')
  } */
  });

  



  
  

  }


  function searchvcsv(uTitle, uName, check) {
    console.time('!_searchvcsv_timer')
    timer('!_searchvcsv_timer')

  var unit_name = uTitle+ ' ' + uName;

                var sc1 = units_stats_csv.indexOf(unit_name);
                var sc2 = '';
                var scI = '<img src="cs_icons/' + units_stats_csv[sc1+7] + '.png" alt="">'
                for (let i = sc1, n = sc1+72; i < n; i++) {
                  if ((i === (sc1+6))) {
                    sc2 += ',' + scI;
                  } else if (units_stats_csv[i+1] === undefined) {
                    sc2 +=  ','
                  } else {
                    sc2 +=  ',' + units_stats_csv[i+1] 
                  }
                 
                  
                }

                sc2 = uTitle + ',' + uName + sc2 + ',' + ',';
                $('#searched-unitID-values').attr('subvalue',sc2);


                var unit_data = sc2.split(',');

                var ugr = '';
                var ugid = indexOfAll(unit_gear_stats_csv, unit_data[9].split(';')[0]);
                
                for (let i = 0, n = ugid.length; i < n; i++) {
                  ugr += '"';
                  for (let j = 0; j < 59; j++) {
                    if (unit_gear_stats_csv[ugid[i]+j-3] === undefined) {
                      ugr += ',';
                    } else {
                      ugr += unit_gear_stats_csv[ugid[i]+j-3] + ',';
                    }
                  }
                  ugr += '",';
                }

                var udpsid = indexOfAll(unit_dps_stats_csv, unit_name);
                var udpst = '';


                if (udpsid.length != 0) {

                
                  

                for (let i = 0, n = udpsid.length; i < n; i++) {
                  udpst += "'";
                  for (let j = 1; j < 23; j++) {
                    if (unit_dps_stats_csv[udpsid[i]+j] === undefined) {
                      udpst += ',';
                    } else {
                      if (j === 22) {
                        udpst += unit_dps_stats_csv[udpsid[i]+j];
                      } else {
                        udpst += unit_dps_stats_csv[udpsid[i]+j] + ',';
                      }
                      
                    }
                  }

                }
              } else {
                udpst = '';
              }

                //udpst = udpst.slice(0, -1);
                
                
               
                currentUnitType = unit_data[9].split(';')[0];
      
                $('#searched-unitID-values').attr('value',unit_data);
        
                $("#unit-icon").html(unit_data[8])
                $("#unit-title").html(unit_data[0])
                $("#unit-name").html(unit_data[1])
                $("#unit-hp").html(unit_data[2])
                $("#unit-atk").html(unit_data[3])
                $("#unit-def").html(unit_data[4])
                $("#unit-crit").html(unit_data[5])
                $("#unit-hit").html(unit_data[6])
                $("#unit-eva").html(unit_data[7])
               
        
              unit_mainAttack_selected = [0];
        
        
              total_unit_data = unit_data;
        
        
        
               unit_hp = unit_data[2];
               unit_atk = unit_data[3]
               unit_def = unit_data[4]
               DEF_pc = unit_def/(unit_def+1000);
               unit_crit = unit_data[5]
               CRIT_pc = Math.min(0.0005*unit_crit,0.85);
               unit_hit = unit_data[6]
               HIT_pc = unit_hit/(unit_hit+1500);
               unit_eva = unit_data[7]
               EVA_pc = unit_eva/(unit_eva+800);
              
              Unit_dps_stats = udpst;

              
              
              switch (currentUnitType) {
                case COUNTER:
                  GEAR_MAIN_STATS_VALUES_T7_unit = [ATK, HP, EVA, HIT, 399, 3814, 274, 274];
                  break;
                  case SOLDIER:
                    GEAR_MAIN_STATS_VALUES_T7_unit = [ATK, HP, EVA, HIT, 399, 3814, 206, 206];
                  break;
                  case MECH:
                    GEAR_MAIN_STATS_VALUES_T7_unit = [ATK, HP, EVA, HIT, 399, 3814, 309, 309];
                  break;
                default:
                  break;
              }
              
              
              ugr += UpdUnitEE('GEAR_MAIN_STATS_VALUES_T7_unit_EE', true, (total_unit_data[0] + ' ' + total_unit_data[1]))
              total_gear_data_unit = ugr;
              $('#gearData').html(ugr);
      
              active_skills_exclude = [];

              AppendCustomStatsForUnits();
      
              if (check === true) {
                //UpdateUnitStats(total_unit_data);
              UpdateUnitAndTarget(total_unit_data,0);
              CalcUnitDMG();
              
              }
              
              $('#compareUnitsModal .modal-body .unit_container .list-group-item .dropdown-item[mtd-action="overwrite"]').removeClass('disabled');


              


              timerEnd('!_searchvcsv_timer')
              console.timeEnd('!_searchvcsv_timer')
            }




  function UpdateUnitAndTarget(unit_stats, updpos) {
    timer('UpdateUnitAndTarget_timer');
    if (unit_stats != '') {
      if (updpos === 0) {
        UpdateUnitStats(unit_stats);
      }
      
      $('#searchID').val(unit_stats[1])
      if (ifSelectTargetDummy) {
        
    $('#target_extra_stats_dropdown').hide();
    $('#dummy_extra_stats_dropdown').show();
    $('#target_BuffList_display').hide();
    $('#dummy_BuffList_display').show();
      } else {
        
    $('#target_extra_stats_dropdown').show();
    $('#dummy_extra_stats_dropdown').hide();
    $('#target_BuffList_display').show();
    $('#dummy_BuffList_display').hide();
      }

      $('#searchID').val(unit_stats[1])
  
      if (ifSelectTargetDummy === true) {
        if ($("#target-icon").html() != target_dummy_data[8] && $("#target-title").html() != target_dummy_data[0] && $("#target-name").html() != target_dummy_data[1]) {
          
        $("#target-icon").html(target_dummy_data[8])
        $("#target-title").html(target_dummy_data[0])
        $("#target-name").html(target_dummy_data[1])
    
        }
          $('#searched-targetID-values').attr('value',target_dummy_data)
          var target_stats = $('#searched-targetID-values').attr('value').split(",");
    
          //$('#searchIDtarget').val(target_dummy_data[1]);
          
        UpdateTargetStats(target_stats);
      } else if (total_target_data != '') {
        
      $('#searchIDtarget').val(total_target_data[1])
        $('#searched-targetID-values').attr('value',total_target_data)
        if ($("#target-icon").html() != total_target_data[8] && $("#target-title").html() != total_target_data[0] && $("#target-name").html() != total_target_data[1]) {
          
          
        $("#target-icon").html(total_target_data[8])
        $("#target-title").html(total_target_data[0])
        $("#target-name").html(total_target_data[1])
          }
        
        var target_stats = $('#searched-targetID-values').attr('value').split(",");
        $('#searchIDtarget').val(target_stats[1])
        UpdateTargetStats(target_stats);
      } else{
        alert('Target was not selected!');
      }
      
      if (updpos !== 0) {
        UpdateUnitStats(unit_stats);
      }
    } else {
      alert('Unit was not selected!');
    }
    $('#CalculateBtn').prop('hidden',false);
  }


  function CreateTooltipForAnything(obj, text, headerText, footerText, anchor) {

      /* var stale_id = '';
    $($(obj).parentsUntil($(obj).parent().parent().parent().parent())).each(function() {
      $.each(this.attributes, function() {
        if(this.specified) {
          stale_id += (this.name + this.value);  // this.name this.value

        }
      });
    });
    stale_id = stale_id.replace(/\s/g,'') */
      var tooltipID = makeid(5);


      if (headerText === undefined) {
        headerText = '';
      }
      if (footerText === undefined) {
        footerText = '';
      }

      if (text !== '') {
        text = '<div class="">'+headerText+'</div><div class="">' + text + '</div><div class="">'+footerText+'</div>'
        
      }
      let tt_anchor;

      if (anchor === undefined) {
        tt_anchor = 'ct_top'
      } else {
        tt_anchor = 'ct_' + anchor;
      }

      obj.addClass('ct_tooltip_hover');
      obj.attr('ct_target','#ct_'+obj.prop("tagName")+'_'+obj.index()+'_'+tooltipID);
    if($('#ct_'+obj.prop("tagName")+obj.index()+'_'+tooltipID).length == 0) {
    $('#tooltip_container_ct').append('<div id="ct_'+obj.prop("tagName")+'_'+obj.index()+'_'+tooltipID+'" class="ct_tooltip '+tt_anchor+'">' + text + '</div>');
    } else {
    console.log('tooltip exists!');
  }
    const tattr = obj.attr('ct_target');
    const tTooltip = $(tattr);

    
  window.clearTimeout(timerForTooltipClear);
  
    timerForTooltipClear = window.setTimeout(function(){
      console.time('ClearEmptyTooltips_timer');
      ClearEmptyTooltips();
      console.timeEnd('ClearEmptyTooltips_timer');
  }, 5000);


    obj.on({
      'mouseenter':function() {
        const spanCoord = $(this).offset();
        if (tTooltip.text() != '') {

          switch (anchor) {
            case 'top':
              tTooltip.css({top: spanCoord.top-tTooltip.outerHeight(), left: spanCoord.left+(obj.outerWidth()/2)-(tTooltip.outerWidth()/2)});
              break;
            case 'bot':
              tTooltip.css({top: spanCoord.top+obj.outerHeight(), left: spanCoord.left+(obj.outerWidth()/2)-(tTooltip.outerWidth()/2)});
              break;
            case 'right':
              tTooltip.css({top: spanCoord.top+(obj.outerHeight()/2)-(tTooltip.outerHeight()/2), right: spanCoord.left-((tTooltip.outerWidth()/2)+(obj.outerWidth()/2))});
              break;
            case 'left':
              tTooltip.css({top: spanCoord.top+(obj.outerHeight()/2)-(tTooltip.outerHeight()/2), left: spanCoord.left+((tTooltip.outerWidth()/2)-(obj.outerWidth()))});
              break;
            default:
              tTooltip.css({top: spanCoord.top-tTooltip.outerHeight(), left: spanCoord.left+(obj.outerWidth()/2)-(tTooltip.outerWidth()/2)});
              break;
          }
          
          tTooltip.addClass('active')
          
        }
      },'mouseleave':function() {
        tTooltip.removeClass('active');
      }

      })

      /* if ((scrollAnchor !== undefined) || (scrollAnchor !== '')) {
        scrollAnchor.on('scroll.'+ttID, function() {
          if (tTooltip != '') {
            if (tTooltip.hasClass('active')) {
              const scrollCoord = scrollAnchor.offset();
            const spanCoord = obj.offset();
            if ((spanCoord.top >= 0) && (((spanCoord.top + obj.outerHeight()) > scrollCoord.top) && (scrollCoord.top > (spanCoord.top - scrollAnchor.innerHeight())))) {
              tTooltip.css({top: spanCoord.top+(obj.outerHeight()/2), left: spanCoord.left+(obj.outerWidth()/2)-(tTooltip.outerWidth()/2)});
            
            } else {
              tTooltip.removeClass('active');
            }
            }
            if ($('#'+ttID).length === 0) {
              scrollAnchor.off('scroll.'+ttID);
              console.log('scroll event of '+ttID+' from $(scrollAnchor) was removed!');
            }
            
          }
          
          
        })
      } */
    
  }

  function UpdateTooltipForAnything(obj, text) {
    
    if (obj.length > 1) {
      if (text === '' || text === undefined) {
        $.each(obj,function() {
          $($(this).attr('ct_target')).remove();
        })
      } else {
        $.each(obj,function() {
          $(this).html(text);
        })
      }
      
    } else {
      if (text === '' || text === undefined) {
        $(obj.attr('ct_target')).remove();
      } else {
        obj.html(text);
      }
    }
    
  }

  

  function ClearEmptyTooltips() {

    /* $('.ct_tooltip').each(function(i) {
      if ($('[ct_target="#'+$(this).attr('id')+'"]').length > 0) {
        console.log('yes - 1');
      } else {
        console.log('no - 2');
      }

      
      
    }) */ // seems slower 
    
    
    $('.ct_tooltip').filter(function() {

      return $('[ct_target="#'+$(this).attr('id')+'"]').length == 0
    }).remove();
  }

  function CreateDropdownForAnything(obj, text, headerText, footerText, scrollAnchor) {

    var dropdownID = makeid(5);
    
    if (text !== '') {
      text = '<div class="cd_dropdown_header">'+headerText+'</div><div class="cd_dropdown_inner">' + text + '</div><div class="cd_dropdown_footer">'+footerText+'</div>'
      
    }

    obj.addClass('cd_dropdown_hover');
    obj.attr('cd_target','#cd_'+obj.prop("tagName")+'_'+obj.index()+'_'+dropdownID);
  if($('#cd_'+obj.prop("tagName")+obj.index()+'_'+dropdownID).length == 0) {
  $('#dropdown_container_cd').append('<div id="cd_'+obj.prop("tagName")+'_'+obj.index()+'_'+dropdownID+'" class="cd_dropdown cd_dropdown_item">' + text + '</div>');
  } else {
  console.log('dropdown exists!');
}
  const tattr = obj.attr('cd_target');
  const tTooltip = $(tattr);
  const ttID = tTooltip.attr('id');

  
window.clearTimeout(timerForDropdownClear);

  timerForDropdownClear = window.setTimeout(function(){
    console.time('ClearEmptyDropdowns_timer');
    ClearEmptyDropdowns();
    console.timeEnd('ClearEmptyDropdowns_timer');
}, 5000);


tTooltip.children().addClass('cd_dropdown_item')




  obj.on({
    'click':function() {
      
      const spanCoord = obj.offset();
      tTooltip.css({top: spanCoord.top+(obj.outerHeight()/2), left: spanCoord.left+(obj.outerWidth()/2)-(tTooltip.outerWidth()/2)});
      
      if (tTooltip.text() != '') {

        const ttDrag = $(tattr + ' .cd_dropdown_inner')
        const sbWidth = ttDrag.css('scrollbar-width');

        
        
        if (!($(ttDrag).hasClass('scrollable')) && (ttDrag.get(0).scrollHeight > ttDrag.height())) {
          
        //ttDrag.css('width','calc( 100% + '+getScrollbarWidth(sbWidth)+'px )')
        var clicked = false, clickY;
              ttDrag.on({
                  'mousemove': function(e) {
                    if (!clicked) return;
                    e.preventDefault();
                      clicked && updateScrollPos(e);
                  },
                  'mousedown': function(e) {
                      clicked = true;
                      clickY = e.pageY;
                      ttDrag.css('cursor', 'grabbing');
                  },
                  'mouseup': function() {
                      clicked = false;
                      ttDrag.css('cursor', 'grab');
                  },
                  'mouseleave': function() {
                      clicked = false;
                      ttDrag.css('cursor', 'grab');
                  }
              });
              
              var updateScrollPos = function(e) {
                
                  ttDrag.scrollTop(ttDrag.scrollTop() + (clickY - e.pageY)/5);
              }
        }
        $(ttDrag).addClass('scrollable');

        if (tTooltip.hasClass('active')) {
          tTooltip.removeClass('active')
        } else {
          $('.cd_dropdown').removeClass('active')
          tTooltip.addClass('active')
        }
       
      }
    }});

    $('body').on('click.'+ttID,function(e) {
      if ((e.target.classList.contains('cd_dropdown_hover') === true) || (e.target.classList.contains('cd_dropdown_item') === true)) {
        
      } else {
        tTooltip.removeClass('active');

        if ($('#'+ttID).length === 0) {
          $('body').off('click.'+ttID);
          console.log('click event of '+ttID+' from $(body) was removed!');
        }
      }
    })

  $(window).on('resize.'+ttID, function() {
    if (tTooltip != '') {
      const spanCoord = obj.offset();
      //tTooltip.removeClass('active')
      tTooltip.css({top: spanCoord.top+(obj.outerHeight()/2), left: spanCoord.left+(obj.outerWidth()/2)-(tTooltip.outerWidth()/2)});
      if ($('#'+ttID).length === 0) {
        $(window).off('resize.'+ttID);
        console.log('resize event of '+ttID+' from $(window) was removed!');
      }
    }
  });


  if ((scrollAnchor !== undefined) || (scrollAnchor !== '')) {
    scrollAnchor.on('scroll.'+ttID, function() {
      if (tTooltip != '') {
        if (tTooltip.hasClass('active')) {
          const scrollCoord = scrollAnchor.offset();
        const spanCoord = obj.offset();
        if ((spanCoord.top >= 0) && (((spanCoord.top + obj.outerHeight()) > scrollCoord.top) && (scrollCoord.top > (spanCoord.top - scrollAnchor.innerHeight())))) {
          tTooltip.css({top: spanCoord.top+(obj.outerHeight()/2), left: spanCoord.left+(obj.outerWidth()/2)-(tTooltip.outerWidth()/2)});
        
        } else {
          tTooltip.removeClass('active');
        }
        }
        if ($('#'+ttID).length === 0) {
          scrollAnchor.off('scroll.'+ttID);
          console.log('scroll event of '+ttID+' from $(scrollAnchor) was removed!');
        }
        
      }
      
      
    })
  }
  
  
}

function ClearEmptyDropdowns() {

  $('.cd_dropdown').filter(function() {

    return $('[cd_target="#'+$(this).attr('id')+'"]').length == 0
  }).remove();
}

function DeleteTooltipFromAnything(ttid) {
  $(ttid.attr('ct_target')).remove();
}

function DeleteDropdownFromAnything(ddid) {
  $(ddid.attr('cd_target')).remove();
}


function AppendCustomStatsForUnits() {

  $('#stat_data_list_values ol').html('');
  $('#target_stat_data_list_values ol').html('');
  $('#dummy_stat_data_list_values ol').html('');

  if (($('#stat_data_list_values ol .dropdown-item').length === 0) && ($('#target_stat_data_list_values ol .dropdown-item').length === 0) && ($('#dummy_stat_data_list_values ol .dropdown-item').length === 0)) {
    
    for (let i = 0, n = BSLL; i < n; i++) {
      if (unit_extra_bonus_stats[i] === undefined) {
        unit_extra_bonus_stats[i] = 0;
      }
      if (target_extra_bonus_stats[i] === undefined) {
        target_extra_bonus_stats[i] = 0;
      }
      if (dummy_extra_bonus_stats[i] === undefined) {
        dummy_extra_bonus_stats[i] = 0;
      }
  
      if (i < 3) {
        $('#stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+unit_extra_bonus_stats[i]/10+'">'+ BONUS_STATS_LIST[i] + ' = '+unit_extra_bonus_stats[i]/10+'</button></li>');
        $('#target_stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+target_extra_bonus_stats[i]/10+'">'+ BONUS_STATS_LIST[i] + ' = '+target_extra_bonus_stats[i]/10+'</button></li>');
        $('#dummy_stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+dummy_extra_bonus_stats[i]/10+'">'+ BONUS_STATS_LIST[i] + ' = '+dummy_extra_bonus_stats[i]/10+'</button></li>');
    
      } else if ((i > 2) && (i < 6)){
        $('#stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+unit_extra_bonus_stats[i]+'">'+ BONUS_STATS_LIST[i] + ' = '+unit_extra_bonus_stats[i]+''+'</button></li>');
        $('#target_stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+target_extra_bonus_stats[i]+'">'+ BONUS_STATS_LIST[i] + ' = '+target_extra_bonus_stats[i]+''+'</button></li>');
        $('#dummy_stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+dummy_extra_bonus_stats[i]+'">'+ BONUS_STATS_LIST[i] + ' = '+dummy_extra_bonus_stats[i]+''+'</button></li>');
      } else {
        if (i >= 65 && i < 68) {
          $('#stat_data_list_values ol').append('<li><div class="d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16"> <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/> </svg><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+unit_extra_bonus_stats[i]*100+'" disabled>   '+ BONUS_STATS_LIST[i] + ' = '+unit_extra_bonus_stats[i]*100+'%'+'</button></div></li>');
          $('#target_stat_data_list_values ol').append('<li><div class="d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16"> <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/> </svg><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+target_extra_bonus_stats[i]*100+'" disabled> '+ BONUS_STATS_LIST[i] + ' = '+target_extra_bonus_stats[i]*100+'%'+'</button></div></li>');
          $('#dummy_stat_data_list_values ol').append('<li><div class="d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16"> <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/> </svg><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+dummy_extra_bonus_stats[i]*100+'" disabled> '+ BONUS_STATS_LIST[i] + ' = '+dummy_extra_bonus_stats[i]*100+'%'+'</button></div></li>');
      
        } else {
          $('#stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+unit_extra_bonus_stats[i]*100+'">'+ BONUS_STATS_LIST[i] + ' = '+unit_extra_bonus_stats[i]*100+'%'+'</button></li>');
          $('#target_stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+target_extra_bonus_stats[i]*100+'">'+ BONUS_STATS_LIST[i] + ' = '+target_extra_bonus_stats[i]*100+'%'+'</button></li>');
          $('#dummy_stat_data_list_values ol').append('<li><button class="dropdown-item" type="button" value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+dummy_extra_bonus_stats[i]*100+'">'+ BONUS_STATS_LIST[i] + ' = '+dummy_extra_bonus_stats[i]*100+'%'+'</button></li>');
      
        }
       
      }
    }
    
  $('#search_data_list_values').on('input',function(e) {
  const tval = $(this).val().toLowerCase();
  
  $("#stat_data_list_values li .dropdown-item").filter(function () {
  if (tval !== '') {
  $(this).parents('li').not().addClass('filter_search-hidden')
  }
  return $(this).val().toLowerCase().indexOf(tval) > -1;
  }).parents('li').removeClass('filter_search-hidden')
  
  
  
  });

  $('#target_search_data_list_values').on('input',function(e) {
  const tval = $(this).val().toLowerCase();
  
  $("#target_stat_data_list_values li .dropdown-item").filter(function () {
  if (tval !== '') {
  $(this).parents('li').not().addClass('filter_search-hidden')
  }
  return $(this).val().toLowerCase().indexOf(tval) > -1;
  }).parents('li').removeClass('filter_search-hidden')
  
  
  
  });

  $('#dummy_search_data_list_values').on('input',function(e) {
    const tval = $(this).val().toLowerCase();
    
    $("#dummy_stat_data_list_values li .dropdown-item").filter(function () {
    if (tval !== '') {
    $(this).parents('li').not().addClass('filter_search-hidden')
    }
    return $(this).val().toLowerCase().indexOf(tval) > -1;
    }).parents('li').removeClass('filter_search-hidden')
    
    
    
    });
  
  $('#stat_data_list_values .dropdown-item').on('click',function() {
  var sItem = $(this).text();
  
  var clickedItem = $(this);
  
  
  const searchFill = '<div class="d-flex" id="SelectedStatValueInput"><input name="svalInpuit" searchFill="" type="number" inputmode="numeric" maxlength="20" placeholder="Input value"  class="form-control" placeholder="Input amount"><button id="btn-clearExtraStats" type="button" class="btn btn-light">Clear</button><button id="btn-confirmExtraStats" type="button" class="btn btn-success">Ok</button></div>'
  
  
  //console.log($('#SelectedStatValueInput').get($('#SelectedStatValueInput').index()))
  
  /* if ($('#SelectedStatValueInput').length == 0) {
  $(this).parent().append('<input class="form-control" id="SelectedStatValueInput" placeholder="Input amount">')
  } else if ($(this).parent().after() !== $('#SelectedStatValueInput')) {
  $('#SelectedStatValueInput').remove();
  $(this).parent().append('<input class="form-control" id="SelectedStatValueInput" placeholder="Input amount">')
  } */
  
  if ($('#SelectedStatValueInput').length === 0) {
  $(this).parent().append(searchFill)
  } else if ($(this).next().attr('id') === $('#SelectedStatValueInput').attr('id')) {
  $('#SelectedStatValueInput').remove();
  } else if (($(this).next().attr('id') !== $('#SelectedStatValueInput').attr('id')) && ($('#SelectedStatValueInput').length > 0)) {
  $('#SelectedStatValueInput').remove();
  $(this).parent().append(searchFill)
  }
  
  if ($(this).attr('subvalue') != Number(0)) {
    $('#SelectedStatValueInput input').val($(this).attr('subvalue'));
  }
  
  //.after('<div class="d-flex"> <input class="form-control" id="SelectedStatValueInput" placeholder="Input amount"></div>')
  // $("#stat_data_list_values > li:nth-child(2)").after("<div>foobar</div>");
  
  // unit_extra_bonus_stats[BONUS_STATS_LIST.indexOf(sItem)] = 1;
  //<input class="form-control" id="exampleDataList2" placeholder="Input amount"></div>     
  
  
  
  
  
  $('#btn-confirmExtraStats').on('click',function () {
  
  var inputVal = 0;
  var inptId = $(this).parent().parent().index();
  var ias_d = Number($('#SelectedStatValueInput input').val()).countDecimals();
  
  if (inptId < 3) {
  inputVal = Number($('#SelectedStatValueInput input').val()*10);
  clickedItem.text(clickedItem.val() + ' = ' + (inputVal/10).toFixed(ias_d));
  clickedItem.attr('subvalue',(inputVal/10).toFixed(ias_d))
  } else if ((inptId > 2) && (inptId < 6)) {
    inputVal = Number($('#SelectedStatValueInput input').val());
    clickedItem.text(clickedItem.val() + ' = ' + (inputVal).toFixed(ias_d));
    clickedItem.attr('subvalue',(inputVal).toFixed(ias_d))
    } else {
  inputVal = Number($('#SelectedStatValueInput input').val())/100;
  clickedItem.text(clickedItem.val() + ' = ' + (inputVal*100).toFixed(ias_d) + '%');
  
  clickedItem.attr('subvalue',(inputVal*100).toFixed(ias_d))
  }

  
  
  if (($('#checkbox_filterChanged').is(':checked') === true)) {
  //$('#target_stat_data_list_values li').addClass('filter-hidden');
  $('#stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
  } else {
  $('#stat_data_list_values li').removeClass('filter-hidden');
  }
  
  
  if (unit_extra_bonus_stats[inptId] !== inputVal) {
    
  unit_extra_bonus_stats[inptId] = inputVal;

    UpdateUnitAndTarget(total_unit_data, 0);
    CalcUnitDMG()
      } else {
        console.log('same val');
      }
  });

  $('#btn-clearExtraStats').on('click',function() {
    var inputVal = 0;
    var inptId = $(this).parent().parent().index();
    
    if (inptId < 3) {
    clickedItem.text(clickedItem.val() + ' = ' + inputVal);
    clickedItem.attr('subvalue',inputVal)
    } else if ((inptId > 2) && (inptId < 6)) {
      clickedItem.text(clickedItem.val() + ' = ' + inputVal);
      clickedItem.attr('subvalue',inputVal)
      } else {
    clickedItem.text(clickedItem.val() + ' = ' + inputVal + '%');
    
    clickedItem.attr('subvalue',inputVal)
    }
    
    
  if (($('#checkbox_filterChanged').is(':checked') === true)) {
    //$('#target_stat_data_list_values li').addClass('filter-hidden');
    $('#stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
    } else {
    $('#stat_data_list_values li').removeClass('filter-hidden');
    }
    $('#SelectedStatValueInput input').val('');
    if (unit_extra_bonus_stats[inptId] !== inputVal) {
    unit_extra_bonus_stats[inptId] = inputVal;

    UpdateUnitAndTarget(total_unit_data, 0);
    CalcUnitDMG() 
  }
  });
  
  });
  
  $('#checkbox_filterChanged').on('change',function() {
    if ((this.checked === true)) {
    $('#stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
    } else {
    $('#stat_data_list_values li').removeClass('filter-hidden');
    }
    });

    
  $('#btn-stat_data_list_reset').on('click',function() {
  
  
    for (let i = 0, n = unit_extra_bonus_stats.length; i < n; i++) {
    unit_extra_bonus_stats[i] = 0;
    if (i < 6) {
    
    $('#stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + 0);
    } else {
    $('#stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + 0 + '%');
    }
    $('#stat_data_list_values .dropdown-item').eq(i).attr('subvalue',0)
    }
    if (($('#checkbox_filterChanged').is(':checked') === true)) {
    $('#stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
    } else {
    $('#stat_data_list_values li').removeClass('filter-hidden');
    }
    
    $('#SelectedStatValueInput input').val('');
  /* UpdateUnitStats(total_unit_data);
  UpdateTargetStats(total_target_data); */
  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG()
    });
    

    // Target data
  
  $('#target_stat_data_list_values .dropdown-item').on('click',function() {
  var sItem = $(this).text();
  
  var clickedItem = $(this);
  
  
  const searchFill = '<div class="d-flex" id="target_SelectedStatValueInput"><input name="searchFill" type="text" inputmode="numeric" maxlength="20" placeholder="Input value"  class="form-control" placeholder="Input amount"><button id="btn-target_clearExtraStats" type="button" class="btn btn-light">Clear</button><button id="btn-target_confirmExtraStats" type="button" class="btn btn-success">Ok</button></div>'
  
  
  
  if ($('#target_SelectedStatValueInput').length === 0) {
  $(this).parent().append(searchFill)
  } else if ($(this).next().attr('id') === $('#target_SelectedStatValueInput').attr('id')) {
  $('#target_SelectedStatValueInput').remove();
  } else if (($(this).next().attr('id') !== $('#target_SelectedStatValueInput').attr('id')) && ($('#target_SelectedStatValueInput').length > 0)) {
  $('#target_SelectedStatValueInput').remove();
  $(this).parent().append(searchFill)
  }
  
  if ($(this).attr('subvalue') != Number(0)) {
    $('#target_SelectedStatValueInput input').val($(this).attr('subvalue'));
  }
  
  
  
  
  
  
  $('#btn-target_confirmExtraStats').on('click',function () {

  
  var inputVal = 0;
  var inptId = $(this).parent().parent().index();
  var ias_d = Number($('#target_SelectedStatValueInput input').val()).countDecimals();
  
  
  if (inptId < 3) {
  inputVal = Number($('#target_SelectedStatValueInput input').val()*10);
  clickedItem.text(clickedItem.val() + ' = ' + (inputVal/10).toFixed(ias_d));
  clickedItem.attr('subvalue',(inputVal/10).toFixed(ias_d))
  } else if ((inptId > 2) && (inptId < 6)) {
    inputVal = Number($('#target_SelectedStatValueInput input').val());
    clickedItem.text(clickedItem.val() + ' = ' + (inputVal).toFixed(ias_d));
    clickedItem.attr('subvalue',(inputVal).toFixed(ias_d))
    } else {
  inputVal = Number($('#target_SelectedStatValueInput input').val())/100;
  clickedItem.text(clickedItem.val() + ' = ' + (inputVal*100).toFixed(ias_d) + '%');
  
  clickedItem.attr('subvalue',(inputVal*100).toFixed(ias_d))
  }
  
  
  
  if (($('#target_checkbox_filterChanged').is(':checked') === true)) {
  $('#target_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
  } else {
  $('#target_stat_data_list_values li').removeClass('filter-hidden');
  }
  
  //$(this).prev().val('')
  
  if (target_extra_bonus_stats[inptId] !== inputVal) {
    
  target_extra_bonus_stats[inptId] = inputVal;
/* UpdateUnitStats(total_unit_data);
  UpdateTargetStats(total_target_data); */
  UpdateUnitAndTarget(total_unit_data);
CalcUnitDMG()
  } else {
    console.log('same val');
  }
  
  });

  $('#btn-target_clearExtraStats').on('click',function() {
    var inputVal = 0;
    var inptId = $(this).parent().parent().index();
    
    if (inptId < 3) {
    clickedItem.text(clickedItem.val() + ' = ' + inputVal);
    clickedItem.attr('subvalue',inputVal)
    } else if ((inptId > 2) && (inptId < 6)) {
      clickedItem.text(clickedItem.val() + ' = ' + inputVal);
      clickedItem.attr('subvalue',inputVal)
      } else {
    clickedItem.text(clickedItem.val() + ' = ' + inputVal + '%');
    
    clickedItem.attr('subvalue',inputVal)
    }
    
    
  
    if (($('#target_checkbox_filterChanged').is(':checked') === true)) {
      $('#target_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
      } else {
      $('#target_stat_data_list_values li').removeClass('filter-hidden');
      }
      $('#target_SelectedStatValueInput input').val('');
    if (target_extra_bonus_stats[inptId] !== inputVal) {
    target_extra_bonus_stats[inptId] = inputVal;

    UpdateUnitAndTarget(total_unit_data, 0);
    CalcUnitDMG()
    }
  });
  
  });
  
  
  
  $('#target_checkbox_filterChanged').on('change',function() {
  if ((this.checked === true)) {
  //$('#target_stat_data_list_values li').addClass('filter-hidden');
  $('#target_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
  } else {
  $('#target_stat_data_list_values li').removeClass('filter-hidden');
  }
  });


  $('#btn-target_stat_data_list_reset').on('click',function() {

  for (let i = 0, n = target_extra_bonus_stats.length; i < n; i++) {
  target_extra_bonus_stats[i] = 0;
  if (i < 6) {
    
    $('#target_stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + 0);
  } else {
    $('#target_stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + 0 + '%');
    
  }
  $('#target_stat_data_list_values .dropdown-item').eq(i).attr('subvalue',0)
  }
  if (($('#target_checkbox_filterChanged').is(':checked') === true)) {
  $('#target_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
  } else {
  $('#target_stat_data_list_values li').removeClass('filter-hidden');
  }

  $('#target_SelectedStatValueInput input').val('');
/* UpdateUnitStats(total_unit_data);
  UpdateTargetStats(total_target_data); */
  UpdateUnitAndTarget(total_unit_data);
CalcUnitDMG()
  }); 


  // Dummy data

  
  $('#dummy_stat_data_list_values .dropdown-item').on('click',function() {
    var sItem = $(this).text();
    
    var clickedItem = $(this);
    
    
    const searchFill = '<div class="d-flex" id="dummy_SelectedStatValueInput"><input name="searchFill" type="text" inputmode="numeric" maxlength="20" placeholder="Input value"  class="form-control" placeholder="Input amount"><button id="btn-dummy_clearExtraStats" type="button" class="btn btn-light">Clear</button><button id="btn-dummy_confirmExtraStats" type="button" class="btn btn-success">ok</button></div>'
    
    
    
    if ($('#dummy_SelectedStatValueInput').length === 0) {
    $(this).parent().append(searchFill)
    } else if ($(this).next().attr('id') === $('#dummy_SelectedStatValueInput').attr('id')) {
    $('#dummy_SelectedStatValueInput').remove();
    } else if (($(this).next().attr('id') !== $('#dummy_SelectedStatValueInput').attr('id')) && ($('#dummy_SelectedStatValueInput').length > 0)) {
    $('#dummy_SelectedStatValueInput').remove();
    $(this).parent().append(searchFill)
    }
    
    if ($(this).attr('subvalue') != Number(0)) {
      $('#dummy_SelectedStatValueInput input').val($(this).attr('subvalue'));
    }
    
    
    
    
    
    
    $('#btn-dummy_confirmExtraStats').on('click',function () {
  
    
    var inputVal = 0;
    var inptId = $(this).parent().parent().index();
    var ias_d = Number($('#dummy_SelectedStatValueInput input').val()).countDecimals();
    
    
    if (inptId < 3) {
    inputVal = Number($('#dummy_SelectedStatValueInput input').val()*10);
    clickedItem.text(clickedItem.val() + ' = ' + (inputVal/10).toFixed(ias_d));
    clickedItem.attr('subvalue',(inputVal/10).toFixed(ias_d))
    } else if ((inptId > 2) && (inptId < 6)) {
      inputVal = Number($('#dummy_SelectedStatValueInput input').val());
      clickedItem.text(clickedItem.val() + ' = ' + (inputVal).toFixed(ias_d));
      clickedItem.attr('subvalue',(inputVal).toFixed(ias_d))
      } else {
    inputVal = Number($('#dummy_SelectedStatValueInput input').val())/100;
    clickedItem.text(clickedItem.val() + ' = ' + (inputVal*100).toFixed(ias_d) + '%');
    
    clickedItem.attr('subvalue',(inputVal*100).toFixed(ias_d))
    }
    
    
    
    if (($('#dummy_checkbox_filterChanged').is(':checked') === true)) {
    $('#dummy_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
    } else {
    $('#dummy_stat_data_list_values li').removeClass('filter-hidden');
    }
    
    //$(this).prev().val('')
    
    if (dummy_extra_bonus_stats[inptId] !== inputVal) {
      
    dummy_extra_bonus_stats[inptId] = inputVal;
    UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG()
    } else {
      console.log('same val');
    }
    
    });

    $('#btn-dummy_clearExtraStats').on('click',function() {
      var inputVal = 0;
      var inptId = $(this).parent().parent().index();
      
      if (inptId < 3) {
      clickedItem.text(clickedItem.val() + ' = ' + inputVal);
      clickedItem.attr('subvalue',inputVal)
      } else if ((inptId > 2) && (inptId < 6)) {
        clickedItem.text(clickedItem.val() + ' = ' + inputVal);
        clickedItem.attr('subvalue',inputVal)
        } else {
      clickedItem.text(clickedItem.val() + ' = ' + inputVal + '%');
      
      clickedItem.attr('subvalue',inputVal)
      }
      
      
    if (($('#dummy_checkbox_filterChanged').is(':checked') === true)) {
    $('#dummy_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
    } else {
    $('#dummy_stat_data_list_values li').removeClass('filter-hidden');
    }
    
    $('#dummy_SelectedStatValueInput input').val('');
      if (dummy_extra_bonus_stats[inptId] !== inputVal) {
      dummy_extra_bonus_stats[inptId] = inputVal;
  
      UpdateUnitAndTarget(total_unit_data);
      CalcUnitDMG()
      }
    });
    
    });
    
    
    
    $('#dummy_checkbox_filterChanged').on('change',function() {
    if ((this.checked === true)) {
    //$('#dummy_stat_data_list_values li').addClass('filter-hidden');
    $('#dummy_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
    } else {
    $('#dummy_stat_data_list_values li').removeClass('filter-hidden');
    }
    });
  
  
    $('#btn-dummy_stat_data_list_reset').on('click',function() {
  
    for (let i = 0, n = dummy_extra_bonus_stats.length; i < n; i++) {
    dummy_extra_bonus_stats[i] = 0;
    if (i < 6) {
      
      $('#dummy_stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + 0);
    } else {
      $('#dummy_stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + 0 + '%');
      
    }
    $('#dummy_stat_data_list_values .dropdown-item').eq(i).attr('subvalue',0)
    }
    if (($('#dummy_checkbox_filterChanged').is(':checked') === true)) {
    $('#dummy_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
    } else {
    $('#dummy_stat_data_list_values li').removeClass('filter-hidden');
    }
  
    $('#dummy_SelectedStatValueInput input').val('');
    UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG()
    }); 

  } else {
    
for (let i = 0, n = unit_extra_bonus_stats.length; i < n; i++) {
  //unit_extra_bonus_stats[i] = 0;
  if (i < 6) {
  
  $('#stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + unit_extra_bonus_stats[i]);
  
  $('#stat_data_list_values .dropdown-item').eq(i).attr('subvalue',unit_extra_bonus_stats[i])
  } else {
  $('#stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + unit_extra_bonus_stats[i]*100 + '%');
  $('#stat_data_list_values .dropdown-item').eq(i).attr('subvalue',unit_extra_bonus_stats[i]*100)
  }
  }
  if (($('#checkbox_filterChanged').is(':checked') === true)) {
  $('#stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
  } else {
  $('#stat_data_list_values li').removeClass('filter-hidden');
  }

  

for (let i = 0, n = target_extra_bonus_stats.length; i < n; i++) {
  if (i < 6) {
    //target_extra_bonus_stats[i] = 0;
    $('#target_stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + target_extra_bonus_stats[i]);
    
  $('#target_stat_data_list_values .dropdown-item').eq(i).attr('subvalue',target_extra_bonus_stats[i])
  } else {
    $('#target_stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + target_extra_bonus_stats[i]*100 + '%');
    
  $('#target_stat_data_list_values .dropdown-item').eq(i).attr('subvalue',target_extra_bonus_stats[i]*100)
  }
  }
  if (($('#target_checkbox_filterChanged').is(':checked') === true)) {
  $('#target_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
  } else {
  $('#target_stat_data_list_values li').removeClass('filter-hidden');
  }


  for (let i = 0, n = dummy_extra_bonus_stats.length; i < n; i++) {
    if (i < 6) {
      //dummy_extra_bonus_stats[i] = 0;
      $('#dummy_stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + dummy_extra_bonus_stats[i]);
      
    $('#dummy_stat_data_list_values .dropdown-item').eq(i).attr('subvalue',dummy_extra_bonus_stats[i])
    } else {
      $('#dummy_stat_data_list_values .dropdown-item').eq(i).text(BONUS_STATS_LIST[i] + ' = ' + dummy_extra_bonus_stats[i]*100 + '%');
      
    $('#dummy_stat_data_list_values .dropdown-item').eq(i).attr('subvalue',dummy_extra_bonus_stats[i]*100)
    }
    }
    if (($('#dummy_checkbox_filterChanged').is(':checked') === true)) {
    $('#dummy_stat_data_list_values li .dropdown-item[subvalue="0"]').parents('li').addClass('filter-hidden');
    } else {
    $('#dummy_stat_data_list_values li').removeClass('filter-hidden');
    }
  
  }


}

UpdateBaseStatsTotal()

function SaveSessionToLocalStorage() {

  /* if ($('#searched-unitID-values').attr('value') !== '') {
    
  }
  if ($('#searched-targetID-values').attr('value') !== '') {
    
  } */
  var SessionData = [total_unit_data,Unit_dps_stats,total_gear_data_unit,unit_extra_bonus_stats,'','','','',total_target_data,$('#gearData_enemy').html(),target_extra_bonus_stats,'','','','',ifSelectTargetDummy,$('#range-melee-distance_partial').val(),$('#target-current_hp_range').val(),dummy_extra_bonus_stats,targetIsUpdated,target_dummy_data,unit_mainAttack_selected];
  
  //total_gear_data_target

  

  if ($('#WeaponContainer').attr('isConfirmed') == "true") {
    SessionData[4] = Weapon.getAllValues();
  }
  if ($('#ArmorContainer').attr('isConfirmed') == "true") {
    SessionData[5] = Armor.getAllValues();
  }
  if ($('#Accessory1Container').attr('isConfirmed') == "true") {
    SessionData[6] = Accessory1.getAllValues();
  }
  if ($('#Accessory2Container').attr('isConfirmed') == "true") {
    SessionData[7] = Accessory2.getAllValues();
  }
  //
  if ($('#WeaponContainer_enemy').attr('isConfirmed') == "true") {
    SessionData[11] = enemy_Weapon.getAllValues();
  }
  if ($('#ArmorContainer_enemy').attr('isConfirmed') == "true") {
    SessionData[12] = enemy_Armor.getAllValues();
  }
  if ($('#Accessory1Container_enemy').attr('isConfirmed') == "true") {
    SessionData[13] = enemy_Accessory1.getAllValues();
  }
  if ($('#Accessory2Container_enemy').attr('isConfirmed') == "true") {
    SessionData[14] = enemy_Accessory2.getAllValues();
  }
  

  //localStorage.setItem(fcId, JSON.stringify(gearSaveData));
  
  localStorage.setItem('SessionLocalData',JSON.stringify(SessionData));
}

function LoadSessionFromLocalStorage() {
  var SessionData = JSON.parse(localStorage.getItem('SessionLocalData'));
  
  freezeClic = true;
  ifSelectTargetDummy = SessionData[15];

  $('#range-melee-distance_partial').val(SessionData[16]);
  var rangeVal = $('#range-melee-distance_partial').val();
    distance_to_target_frequency_ranged = Number(rangeVal)/100;
    distance_to_target_frequency_melee = 1 + Number(rangeVal*(-1))/100;
    $('#range-melee-distance_partial-value').text(Math.round((distance_to_target_frequency_melee+ Number.EPSILON)*100) + '% / ' + Math.round((distance_to_target_frequency_ranged + Number.EPSILON)*100) + '%');

  
        $('#searchID').val(SessionData[0][1])
        
        unit_extra_bonus_stats = SessionData[3];
        target_extra_bonus_stats = SessionData[10];
        dummy_extra_bonus_stats = SessionData[18]
        targetIsUpdated = SessionData[19]
        target_dummy_data = SessionData[20];
        selectedGearSlotList = "Weapon";
        


        $('#selectEnemyType').val(target_dummy_data[9])
        $('#selectEnemyClass').val(target_dummy_data[10])
        $('#selectMovementType').val(target_dummy_data[11])

        //option[value="'+ val +'"]
        

        UpdateUnitFromLocalStorage(SessionData[0],SessionData[1],SessionData[2]);
        if (SessionData[4] !== '') {
            selectedGearStats = SessionData[4][0];
            Weapon.setAllValues(SessionData[4]);
            Weapon.setGear(0);
            weaponIsConfirmed = true;
        }
        if (SessionData[5] !== '') {
            selectedGearStats = SessionData[5][0];
            Armor.setAllValues(SessionData[5]);
            Armor.setGear(0);
            armorIsConfirmed = true;
        }
        if (SessionData[6] !== '') {
            selectedGearStats = SessionData[6][0];
            Accessory1.setAllValues(SessionData[6]);
            Accessory1.setGear(0);
            accessory1IsConfirmed = true;
        }
        if (SessionData[7] !== '') {
            selectedGearStats = SessionData[7][0];
            Accessory2.setAllValues(SessionData[7]);
            Accessory2.setGear(0);
            accessory2IsConfirmed = true;
        }

        $('#searchIDtarget').val(SessionData[8][1])


        if (ifSelectTargetDummy === false) {
        $('#searchIDtarget').prop('disabled', false);
      $('#searchIDtarget').attr('placeholder','Search target');
      ifSelectTargetDummy = false;
        $('#selectCustomEnemy').prop('hidden', true);
      $('#btn-setTargetAsDummy').prop('checked',false)
      
            }


            

            UpdateTargetFromLocalStorage(SessionData[8],SessionData[9], SessionData[17]);

        
        if (SessionData[11] !== '') {
            selectedGearStats = SessionData[11][0];
            enemy_Weapon.setAllValues(SessionData[11]);
            enemy_Weapon.setGear();
            enemy_weaponIsConfirmed = true;
        }
        if (SessionData[12] !== '') {
            selectedGearStats = SessionData[12][0];
            enemy_Armor.setAllValues(SessionData[12]);
            enemy_Armor.setGear();
            enemy_armorIsConfirmed = true;
        }
        if (SessionData[13] !== '') {
            selectedGearStats = SessionData[13][0];
            enemy_Accessory1.setAllValues(SessionData[13]);
            enemy_Accessory1.setGear();
            enemy_accessory1IsConfirmed = true;
        }
        if (SessionData[14] !== '') {
            selectedGearStats = SessionData[14][0];
            enemy_Accessory2.setAllValues(SessionData[14]);
            enemy_Accessory2.setGear();
            enemy_accessory2IsConfirmed = true;
        }
        AppendCustomStatsForUnits()
        UpdateUnitStats(SessionData[0]);
        UpdateUnitAndTarget(SessionData[0]);
        unit_mainAttack_selected = SessionData[21];
        //$('#Unit_Extra .form-check input:radio:nth-child(1)').prop('checked',true).siblings().prop('checked',false);
        CalcUnitDMG()
        $('#compareUnitsModal .modal-body .unit_container .list-group-item .dropdown-item[mtd-action="overwrite"]').removeClass('disabled');
        freezeClic = false;
}


/* 
  
  $('.table-search-item').click(function() {
   
    
   
    var currentRow=$(this).closest("tr"); 
         
    var col1=currentRow.find("td:eq(1)").text();
    var col2=currentRow.find("td:eq(2)").text();
    

    var unit_selected = col1 + col2;
    console.log(unit_selected.trim());
});
 */


// NOTE_

// array1 = array2.slice(0) puts values of another array intead of reference to this array (so when u change array1, array 2 doesn't change) 



