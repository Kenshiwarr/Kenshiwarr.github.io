      var target_hp = 0;
      var target_atk = 0;
      var target_def = 0;
      var target_DEF_pc = target_def/(target_def+1000);
      var target_crit = 0;
      var target_CRIT_pc = Math.min(0.0005*target_crit,0.85);
      var target_hit = 0;
      var target_HIT_pc = target_hit/(target_hit+1500);
      var target_eva = 0;
      var target_EVA_pc = target_eva/(target_eva+800);
      var target_cdmg_res = 0;
      var target_cat1_res = 0;
      var target_cat2_res = 0;
      var targetEHP;
      var targetfinalEHP;

      
      var target_cat1_res = 0;
      var target_cat2_res = 0;

      var total_target_data = '';

      var currentTargetType;

      var Target_dps_stats = 0;
      var target_stat_data = 0;

      var target_SureFireBuffUptime = 0;
      var target_PerfectEvaBuffUptime = 0;
      var target_InvincibilityBuffUptime = 0;

      
     
      



      function UpdateTargetStats(target_data) {

        console.log('TARGET DATA = ' + target_data)

        console.log('total_target_data')
        console.log(total_target_data)

        

       

      //  var unitcdmg = Number($('#unit-stats-details .unit-CRIT_DMG').attr('subvalue'))/100;


        if (target_data != '') {
          
          
          if (ifSelectTargetDummy === true) {
console.log('THIS ALSO SHOULD WORK FINE')
console.log(target_data)
            enemy_class = target_dummy_data[10];
            enemy_movement_type = target_dummy_data[11];
            enemy_type = target_dummy_data[9];
            enemy_subtype = enemy_type;
          } else {
          enemy_class = target_data[10];
          enemy_movement_type = target_data[11];
          enemy_type = target_data[9].split(';')[0];
          if (target_data[9].split(';').length > 1) {
        
            enemy_subtype = target_data[9].split(';')[1];
            } else {
              enemy_subtype = enemy_type;
            }
          }

      //var enemyDistanceCtr = enemy_distance.split(';');

      var cat1_res_list = [Cat1List[unit_class][2],Cat1List[unit_movement_type][2],Cat1List[unit_type][2],Cat1List[unit_subtype][2],Cat1List['Melee'][2],Cat1List['Ranged'][2]];
      //var cat1_dmg_list = [Cat1List[unit_class][1],Cat1List[unit_movement_type][1],Cat1List[unit_type][1],Cat1List[unit_subtype][1],Cat1List['Melee'][1],Cat1List['Ranged'][1]];
      

      

      if (enemy_Weapon.selectedGearData != 0) {
        enemy_Weapon.replaceGearByUnitType(currentTargetType,'Container_enemy',total_gear_data_target,GEAR_MAIN_STATS_VALUES_T7_target); 
      } if (enemy_Armor.selectedGearData != 0) {
        enemy_Armor.replaceGearByUnitType(currentTargetType,'Container_enemy',total_gear_data_target,GEAR_MAIN_STATS_VALUES_T7_target);
      } if (enemy_Accessory1.selectedGearData != 0) {
        enemy_Accessory1.replaceGearByUnitType(currentTargetType,'Container_enemy',total_gear_data_target,GEAR_MAIN_STATS_VALUES_T7_target);
      } if (enemy_Accessory2.selectedGearData != 0) {
        enemy_Accessory2.replaceGearByUnitType(currentTargetType,'Container_enemy',total_gear_data_target,GEAR_MAIN_STATS_VALUES_T7_target);
      }






      

      var bonus_stats = [0,	0,	0,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0.5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];
      var gear_stats = [enemy_Weapon.mainStat,enemy_Weapon.sub1,enemy_Weapon.sub2,enemy_Weapon.latent,enemy_Armor.mainStat,enemy_Armor.sub1,enemy_Armor.sub2,enemy_Armor.latent,enemy_Accessory1.mainStat,enemy_Accessory1.sub1,enemy_Accessory1.sub2,enemy_Accessory1.latent,enemy_Accessory2.mainStat,enemy_Accessory2.sub1,enemy_Accessory2.sub2,enemy_Accessory2.latent];
     // var checkSubs = [enemy_Weapon.sub1,enemy_Weapon.sub2,enemy_Weapon.latent,enemy_Armor.sub1,enemy_Armor.sub2,enemy_Armor.latent,enemy_Accessory1.sub1,enemy_Accessory1.sub2,enemy_Accessory1.latent,enemy_Accessory2.sub1,enemy_Accessory2.sub2,enemy_Accessory2.latent]


      if (ifSelectTargetDummy) {
        for (let i = 0, n = bonus_stats.length; i < n; i++) {
          bonus_stats[i] += dummy_extra_bonus_stats[i]
        }
      } else {
        for (let i = 0, n = bonus_stats.length; i < n; i++) {
          bonus_stats[i] += target_extra_bonus_stats[i]
        }
      }
      
      
      var bonus_stats_gear_set = [0,	0,	0,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];
      var gear_set_stats = [enemy_Weapon.eqSet, enemy_Armor.eqSet, enemy_Accessory1.eqSet, enemy_Accessory2.eqSet];
      var gear_set_stats_options = [enemy_Weapon.eqSet_Options, enemy_Armor.eqSet_Options, enemy_Accessory1.eqSet_Options, enemy_Accessory2.eqSet_Options];


      if (ifSelectTargetDummy === true) {
        for (let i = 0; i < gear_stats.length; i++) {
          gear_stats[i] = 0;
          
        }
        for (let i = 0; i < gear_set_stats.length; i++) {
          gear_set_stats[i] = 0;
          
        }
        for (let i = 0; i < gear_set_stats_options.length; i++) {
          gear_set_stats_options[i] = 0;
          
        }
      }


      for (let i = 13; i < target_data.length; i++) {
        if(target_data[i] != '') {
          bonus_stats[i-7] += Number(target_data[i])

        }
      }

      let SureFireBuffUptime = 0;
      let PerfectEvaBuffUptime = 0;
      let InvincibilityBuffUptime = 0;
      var bftr;

      if (ifSelectTargetDummy) {
        bftr = 'dummy_'
      } else {
        bftr = 'target_'
      }

      for (let i = 0, n = $('#'+bftr+'dropdown-buffList-container li').length; i < n; i++) {
        let baVal = $('#'+bftr+'buff-apply_'+i).attr('value').split(',');
        let baSVal = $('#'+bftr+'buff-apply_'+i).attr('subvalue').split(',');
        let baBcd = Number($('#'+bftr+'buff-apply_'+i).attr('value_bcd'));
        let baBd = Number($('#'+bftr+'buff-apply_'+i).attr('value_bd'));

       
        let baSModifierFinal = 1;
        

        if (baBd < baBcd) {
          baSModifierFinal = baBcd/baBd
        }

       for (let j = 0, nn = baVal.length; j < nn; j++) {
        let baSValFinal;
        if (Number(baVal[j]) < BSLL) {
          if ((Number(baVal[j]) <= 2)) {
            baSValFinal = (Number(baSVal[j])*10)/baSModifierFinal;
          } else if ((Number(baVal[j]) > 2) && (Number(baVal[j]) < 6)) {
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

      

      console.log('Check buffs Target')
      console.log(SureFireBuffUptime)
      console.log(PerfectEvaBuffUptime)
      console.log(InvincibilityBuffUptime)

      target_SureFireBuffUptime = SureFireBuffUptime;
      target_PerfectEvaBuffUptime = PerfectEvaBuffUptime;
      target_InvincibilityBuffUptime = InvincibilityBuffUptime;

      console.log('gear_stats2')
      console.log(gear_stats)

      var gear_selected_set_stats;
      var gear_selected_set_stats_options;

      /* $(document).on('click','#flexCheckDefault',function(){
        var checkVal = $('#flexCheckDefault');
        if (checkVal.is(':checked') === true) {
          bonus_stats[7] += 0.1;
        } else {
          bonus_stats[7] -= 0.1;
        }
        
    }); */


   /*  var checkVal = $('#flexCheckDefault');
        if (checkVal.is(':checked') === true) {
          bonus_stats[7] += 0.1;
        } else {
          bonus_stats[7] += 0;
        } */
        // NOTE old rmina cdmg check
        


      switch (selectedGearSlotList) {
        case SLOT_WEAPON:
            gear_selected_set_stats = enemy_Weapon.eqSet;
            gear_selected_set_stats_options = enemy_Weapon.eqSet_Options;
          break;
          case SLOT_ARMOR:
            gear_selected_set_stats = Armor.eqSet;
            gear_selected_set_stats_options = enemy_Armor.eqSet_Options;
          break;
          case SLOT_ACCESSORY_1:
            gear_selected_set_stats = Accessory1.eqSet;
            gear_selected_set_stats_options = enemy_Accessory1.eqSet_Options;
          break;
          case SLOT_ACCESSORY_2:
            gear_selected_set_stats = Accessory2.eqSet;
            gear_selected_set_stats_options = enemy_Accessory2.eqSet_Options;
          break;
        default:
          selectedGearSlotList = '';
          break;
      }

      if (selectedGearSlotList != '') {

      

        

        /* console.log('asdasdasd = !!! ' + String(gear_set_stats_options[1][gear_set_stats[1]]['stat1']).split(',')); */
      

        var selector_result = [];
        

        //_!_ high memory load
      for (let i = 0; i < gear_set_stats.length; i++) {
        if (gear_set_stats_options[i] != 0) {
          selector_result[i] = String(gear_set_stats_options[i][gear_set_stats[i]]['stat1']).split(',');
        } else {
          selector_result[i] = '';
        }
        
      }


        var set_matches = [0,0,0,0];
for (let i = 0; i < gear_set_stats.length; i++) {
  if (gear_set_stats_options[i] != 0) {
    set_matches[i] = gear_set_stats.filter(x => x==(gear_set_stats_options[i][gear_set_stats[i]]['name'])).length;
  }
  
  
}

var filtered_stats = gear_set_stats;
        

/* [...new Set(array)] */ // removes duplicates from array; array.filter(Boolean) removes empty values
        set_matches;


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

        
        
        console.log('available_set_stats = ' + available_set_stats);/* 
        console.log('available_set_stats_names = ' + available_set_stats_names);
        console.log('available_set_stats_values = ' + available_set_stats_values); */

        available_set_stats_values = String(available_set_stats_values).split(','); // turning arr[x, [x,x]] to [x,x,x] so can read properly
        available_set_stats_names = String(available_set_stats_names).split(','); // same as above

     
for (let i = 0; i < available_set_stats_values.length; i++) {

  bonus_stats_gear_set[BONUS_STATS_LIST.indexOf(available_set_stats_names[i])] += Number(available_set_stats_values[i]);
}
        
      
      
      
      /* 
      console.log('set option 0 = !!! ' +  String(gear_selected_set_stats_options[gear_selected_set_stats[1]]['stat1']).split(',')[0] ); */



  }


      for (let i = 0; i < gear_stats.length; i++) {
        var if_set_double = BONUS_STATS_LIST.indexOf(gear_stats[i][0]);
        if (if_set_double > -1) {
          bonus_stats[if_set_double] = bonus_stats[if_set_double] + Number(gear_stats[i][1]); 
        }
      };

      
      
      

      

      

      

      
      $('#target-cat1_res').attr('value',enemy_cat1_res.toFixed(1));
      $('#target-cat2_res').attr('value',enemy_cat2_res.toFixed(1));

     /*  var bonus_stats_list = [HP,ATK,DEF,CRIT,HIT,EVA,CDMG_RES,HP_PERCENT]; */
     /* var bonus_stats_gear_set_list = [HP,ATK,DEF,CRIT,HIT,EVA,CDMG_RES]; */
    console.log('bonus_stats = ' + bonus_stats)

    


    
      target_hp = Number(target_data[2])*(1+bonus_stats_gear_set[6] + bonus_stats[6]) + (bonus_stats[0]*0.1);
      target_atk = Number(target_data[3])*(1+bonus_stats_gear_set[7] + bonus_stats[7]) + (bonus_stats[1]*0.1);
      target_def = Number(target_data[4])*(1+bonus_stats_gear_set[8] + bonus_stats[8]) + (bonus_stats[2]*0.1);
      target_DEF_pc = target_def/(target_def+1000);
      target_crit = Number(target_data[5])*(1+bonus_stats_gear_set[9] + bonus_stats[9]) + (bonus_stats[3]);
      target_CRIT_pc = Math.min(0.0005*target_crit,0.85);
      target_hit = Number(target_data[6])*(1+bonus_stats_gear_set[10] + bonus_stats[10]) + (bonus_stats[4]);
      target_HIT_pc = target_hit/(target_hit+1500);
      target_eva = Number(target_data[7])*(1+bonus_stats_gear_set[11] + bonus_stats[11]) + bonus_stats[5];
      target_EVA_pc = target_eva/(target_eva+800);
      target_cdmg_res = Number(bonus_stats[17]);
      /* cat1_res = Number($( ".unit-cat1_res" ).attr('value'));
      cat2_res = Number($( ".unit-cat2_res" ).attr('value')); */
      enemy_cat1_res = 0;
      enemy_cat2_res = 0;
      enemy_cat3_res = 0;
      
      enemy_hit_percent = enemy_hit/(enemy_hit+1500);
      enemy_crit_percent = enemy_crit/(enemy_crit+1000);


      /* function checkAvailabilityRes(arr, val) {
        if (arr.some((arrVal) => val[0] === arrVal)) {
          enemy_cat1_res += Number(val[1]*100);
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
          if ((BONUS_STATS_LIST[i] == Cat1List['Melee'][2])) {
            enemy_cat1_res += (bonus_stats[i]*distance_to_target_frequency_melee) + (bonus_stats_gear_set[i]*distance_to_target_frequency_melee)
          } else if ((BONUS_STATS_LIST[i] == Cat1List['Ranged'][2])) {
            enemy_cat1_res += (bonus_stats[i]*distance_to_target_frequency_ranged) + (bonus_stats_gear_set[i]*distance_to_target_frequency_ranged);
          } else {
            enemy_cat1_res += bonus_stats[i] + bonus_stats_gear_set[i];
          }
        }
        
        
        if (BONUS_STATS_LIST[i] === Cat2List['DMG-']) {
          enemy_cat2_res += Number(bonus_stats[i]);
        }

      }

      bonus_stats[68] = Math.max(Math.min(bonus_stats[68],0.8),-0.8);
      enemy_cat1_res += bonus_stats[68];

      if (unit_advantage === 1) {
        enemy_cat3_res += bonus_stats[71];
      }

      enemy_cat1_res = Math.max(enemy_cat1_res - unit_bonus_stats[63],0);



      enemy_cat2_res = Math.min(enemy_cat2_res,0.5)

      enemy_cat1_res += Number($( "#unit_cat1Res_input" ).val())/100;
      enemy_cat2_res += Number($( "#unit_cat2Res_input" ).val())/100;

      enemy_CDMG_RES += Number($( "#unit_cdmgRes_input" ).val())/100;

      for (let i = 0; i < BONUS_STATS_LIST.length; i++) {
        target_bonus_stats[i] = bonus_stats[i] + bonus_stats_gear_set[i];
        
      }
      
      
      
      
       
      var chanceToDodge = target_EVA_pc;

     

      if (target_EVA_pc <= enemy_hit_percent) {
        chanceToDodge = 0;
      }

      var chanceToDodgeAvg = target_EVA_pc;

      if (target_EVA_pc <= averageHIT) {
        chanceToDodgeAvg = 0;
      }


      chanceToDodgeAvg = (1-(1-chanceToDodgeAvg) * (1-(target_PerfectEvaBuffUptime)))

      targetEHP = Number(target_hp)*((1000+Number(target_def))/1000*(1+Math.max(Number(enemy_cat1_res-(average_cat1_dmg)/(1+average_cat1_res*0.6)),0))*(1+Number(enemy_cat2_res)));
      targetfinalEHP = (targetEHP/(averageHIT+0.1)*chanceToDodgeAvg)+(targetEHP/(1+Math.max(averageCDMG-target_cdmg_res,0))*(averageCRIT*(1-chanceToDodgeAvg)))+(targetEHP*(1-(averageCRIT*(1-chanceToDodgeAvg))-chanceToDodgeAvg));
      

      if (target_InvincibilityBuffUptime < 1) {
        targetfinalEHP = targetfinalEHP/(1-target_InvincibilityBuffUptime)
      } else {
        targetfinalEHP = Infinity
      }


      //+ ((stat_bonus-target_data[i+2]) > 0 ? (' (+' + (stat_bonus-target_data[i+2]) + ')'):'') +
      
      var untclass = target_data[9].split(';');
      var unttype;
      switch (untclass[0]) {
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

      var roleIcon = untclass[0].toLowerCase();
      var classIcon = target_data[10].toLowerCase();
      var mTypeIcon = target_data[11].toLowerCase();

      if ((roleIcon == 'c.o.') || (roleIcon == 'replacer')) {
        roleIcon = 'co';
      }
      

      if (untclass.length > 1) {
        $('#target-type').html('<img src="cs_icons/type_'+ roleIcon +'.png" height="20px" width="20px">' +'<span class="'+unttype+'">['+ untclass[0]+']'+'['+ untclass[1]+']</span>');
      } else {
        $('#target-type').html('<img src="cs_icons/type_'+ roleIcon +'.png" height="20px" width="20px">' +'<span class="'+unttype+'">['+ target_data[9]+']</span>');
      }

      $('#target-class').html('<img src="cs_icons/role_'+ classIcon +'.png" height="20px" width="20px">' + target_data[10]);
      $('#target-movement').html('<img src="cs_icons/movement_'+ mTypeIcon +'.png" height="20px" width="20px">' +target_data[11] + ' Movement');


      $('#target-hp').html('<h>HP: </h><span class="current_stats">' + Math.round(target_hp) + ((target_hp-target_data[2]) > 0 ? (' <span class="added_stats">(+' + Math.round(target_hp-target_data[2]) + ')'):'') + '</span></span>');
      $('#target-hp').attr('subvalue',target_hp)
      $('#target-current_hp').html('<h>Current HP: ' + Math.round(target_hp*enemy_remaining_hp_percent) + ' (' + Number($('#target-current_hp_range').val()) +'%)' + '</h>');
      $('#target-atk').html('<h>ATK: </h><span class="current_stats">' + Math.round(target_atk) + ((target_atk-target_data[3]) > 0 ? (' <span class="added_stats">(+' + Math.round(target_atk-target_data[3]) + ')'):'') + '</span></span>');
      $('#target-def').html('<h>DEF: </h><span class="current_stats">' + Math.round(target_def) + '</h> <span class="added_stats"> ' + ((target_def-target_data[4]) > 0 ? ('(+' + Math.round(target_def-target_data[4]) + ')'):'') + '('+ (target_DEF_pc*100).toFixed(2) +'%)</span></span>');
      $('#target-crit').html('<h>CRIT: </h><span class="current_stats">' + Math.round(target_crit) + '</h> <span class="added_stats"> ' + ((target_crit-target_data[5]) > 0 ? ('(+' + Math.round(target_crit-target_data[5]) + ')'):'') + '('+ (target_CRIT_pc*100).toFixed(2) +'%)</span></span>');
      $('#target-hit').html('<h>HIT: </h><span class="current_stats">' + Math.round(target_hit) + '</h> <span class="added_stats"> ' + ((target_hit-target_data[6]) > 0 ? ('(+' + Math.round(target_hit-target_data[6]) + ')'):'') + '('+ (target_HIT_pc*100).toFixed(2) +'%)</span></span>');
      $('#target-eva').html('<h>EVA: </h><span class="current_stats">' + Math.round(target_eva) + '</h> <span class="added_stats"> ' + ((target_eva-target_data[7]) > 0 ? ('(+' + Math.round(target_eva-target_data[7]) + ')'):'') + '('+ (target_EVA_pc*100).toFixed(2) +'%)</span></span>');

      $('#target-cat1_res').html('<h>Cat1 RES: </h><span class="current_stats cs_extra_info">' + (enemy_cat1_res*100).toFixed(2) + "%</span>");
      $('#target-cat2_res').html('<h>Cat2 RES: </h><span class="current_stats cs_extra_info">' + (enemy_cat2_res*100).toFixed(2) + "%</span>");
      $('#target-cat3_res').html('<h>Cat3 RES: </h><span class="current_stats cs_extra_info">' + (enemy_cat3_res*100).toFixed(2) + "%</span>");
      $('#target-ehp').html('<h>EHP: </h><span class="current_stats cs_extra_info">' + Math.round(targetEHP) + '</span>');
      $('#target-ehp_final').html('<h>Final EHP: </h><span class="current_stats cs_extra_info">' + Math.round(targetfinalEHP) + '</span>');
      $('#enemy-hit_stat').html(enemy_hit + " (" + (enemy_hit_percent * 100).toFixed(2) + "%)");
      $('#enemy-crit_stat').html(enemy_crit + " (" + (enemy_crit_percent * 100).toFixed(2) + "%)");
      $('#enemy-cdmg_stat').html(enemy_cdmg + "%");

      $('#dropdown_target_stats').html('<div class="dropdown_stats_header">Details</div><div class="unitStats_of"></div>');

      enemy_HP = target_hp;
      enemy_DEF = target_def;
      enemy_DEF_percent = enemy_DEF/(enemy_DEF+1000);
      enemy_EVA = target_eva;
      enemy_hit = target_hit;
      enemy_EVA_percent = enemy_EVA/(enemy_EVA+800);
      enemy_CDMG_RES = target_cdmg_res;
      /* enemy_cat1_res = enemy_cat1_res*100;
      enemy_cat2_res = enemy_cat2_res*100; */
      /* enemy_cat3_res = 0; */


      if (target_data[71] != '') {
        enemy_mdl = target_hp*(bonus_stats[64]);
      } else {
        enemy_mdl = Inf_mdl;
      }

      if (ifSelectTargetDummy) {
        enemy_mdl = Inf_mdl
      }
      /* enemy_mdl = Inf_mdl; */

      // enemy_mdl = target_hp*1;
      
      console.log('Target mdl = ');
      console.log(enemy_mdl);




      var stat_bonus;

      var eStat_pc = [target_CRIT_pc,target_HIT_pc,target_EVA_pc];

      //'('+ (target_DEF_pc*100).toFixed(2) +'%)'


      target_stats_to_save = [];

      for (let i = 0, n = BONUS_STATS_LIST.length; i < n; i++) {
        
        if ((i == 0)) {
          stat_bonus = Math.round(target_data[i+2]*(1+bonus_stats_gear_set[6]+bonus_stats[6])+(bonus_stats[i]*0.1));
  
          target_stats_to_save[i] = BONUS_STATS_LIST[i];
          target_stats_to_save[n+i] = Number(stat_bonus);
          $('#dropdown_target_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'"> <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + '</span></li>');
        } else if ((i == 1)) {
          stat_bonus = Math.round(target_data[i+2]*(1+bonus_stats_gear_set[7]+bonus_stats[7])+(bonus_stats[i]*0.1));
          target_stats_to_save[i] = BONUS_STATS_LIST[i];
          target_stats_to_save[n+i] = Number(stat_bonus);
          $('#dropdown_target_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'"> <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + '</span></li>');
        } else if ((i == 2)) {
          stat_bonus = Math.round(target_data[i+2]*(1+bonus_stats_gear_set[8]+bonus_stats[8])+(bonus_stats[i]*0.1));
          target_stats_to_save[i] = BONUS_STATS_LIST[i];
          target_stats_to_save[n+i] = Number(stat_bonus);
          $('#dropdown_target_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'"> <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + ' ('+ (target_DEF_pc*100).toFixed(2) +'%)' + '</span></li>');
        }
        if (((i > 2) && (i < 6))) {
          stat_bonus = Math.round(target_data[i+2]*(1+bonus_stats_gear_set[i+6] + bonus_stats[i+6])+(bonus_stats[i]));
          target_stats_to_save[i] = BONUS_STATS_LIST[i];
          target_stats_to_save[n+i] = Number(stat_bonus);
          $('#dropdown_target_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'"> <span>'+ BONUS_STATS_LIST[i] +': </span> <span class="details_li_fr"> ' + stat_bonus + ' ('+ (eStat_pc[i-3]*100).toFixed(2) +'%)' + '</span></li>');
          if (i===5) {
            $('#dropdown_target_stats .unitStats_of').append('<hr>')
          }
        }
        if ((bonus_stats[i] != 0 || bonus_stats_gear_set[i] != 0) && (i >= 6)) { //NOTE (i >= 6) to include HP%, DEF%, CRIT%, HIT%, EVA%,
          stat_bonus = ((bonus_stats[i]+bonus_stats_gear_set[i])*100).toFixed(1);
          target_stats_to_save[i] = BONUS_STATS_LIST[i];
          target_stats_to_save[n+i] = Number(stat_bonus)/100;
          $('#dropdown_target_stats .unitStats_of').append('<li value="'+ BONUS_STATS_LIST[i] +'" subvalue="'+ stat_bonus +'"> <span>'+ BONUS_STATS_LIST[i] +': <span class="details_li_fr">' + stat_bonus + "%" + '</span></li>');
  
        }
      
  
      }
  
      
  
      target_stats_to_save.push(Math.floor(targetEHP));
      target_stats_to_save.splice((target_stats_to_save.length)/2, 0, 'EHP');
      target_stats_to_save.push(Math.floor(targetfinalEHP));
      target_stats_to_save.splice((target_stats_to_save.length)/2, 0, 'Final EHP');



      target_stats_to_save = target_stats_to_save.filter((substat) => substat != undefined);
      
      
      SetScrollable($('#dropdown_target_stats .unitStats_of'));




      if (ifSelectTargetDummy === true) {
        $('#gearContainer_enemy').prop('hidden', true);
      } else {
        $('#gearContainer_enemy').removeAttr('hidden');
      }
      
      $('#target-stats-details').removeAttr('hidden');
      

    }

      }



function autocompleteTarget(inp, arr) {
    var currentFocus;
    
    inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + " autocompleteTarget-list");
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
    
    
          
          
          //b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "' subvalue='" + unit_titles[i] + "'>";
              b.addEventListener("click", function(e) {
                var uTitle = this.getElementsByTagName("input")[0].getAttribute('subvalue');
                var uName = this.getElementsByTagName("input")[0].value;
              //inp.value = this.getElementsByTagName("input")[0].value;
              inp.value = (uTitle) + ' ' + (uName);
              console.log(this.getElementsByTagName("input")[0].value);
              
              e.preventDefault();

              if ((inp.value != (total_target_data[0] + ' ' + total_target_data[1]))) {
                
              //searchvajax2(inp.value, true);
              searchvcsv2(uTitle, uName, true)
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



    inp.addEventListener("click", function(e) {
      

      var a, b, i, val = this.value;
      closeAllLists();
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + " autocompleteTarget-list");
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
    
    
          
          
          //b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "' subvalue='" + unit_titles[i] + "'>";
              b.addEventListener("click", function(e) {
                var uTitle = this.getElementsByTagName("input")[0].getAttribute('subvalue');
                var uName = this.getElementsByTagName("input")[0].value;
              //inp.value = this.getElementsByTagName("input")[0].value;
              inp.value = (uTitle) + ' ' + (uName);
              console.log(this.getElementsByTagName("input")[0].value);

              e.preventDefault();

              if ((inp.value != (total_target_data[0] + ' ' + total_target_data[1]))) {
                
                //searchvajax2(inp.value, true);
                searchvcsv2(uTitle, uName, true)
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
        var x = document.getElementById(this.id + " autocompleteTarget-list");
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
  $('body').on('click' , function(e){
    if (e.target.id != 'searchID') {
      closeAllLists(e.target);
    }
    
    
    
  });




  
  

  }

  function searchvcsv2(uTitle, uName, check) {

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
  

                  var target_data = sc2.split(',');
  
                  var ugr = '';
                  var ugid = indexOfAll(unit_gear_stats_csv, target_data[9].split(';')[0]);
                  
                  for (let i = 0, n = ugid.length; i < n; i++) {
                    ugr += '"'
                    for (let j = 0; j < 59; j++) {
                      if (unit_gear_stats_csv[ugid[i]+j-3] === undefined) {
                        ugr += ','
                      } else {
                        ugr += unit_gear_stats_csv[ugid[i]+j-3] + ',';
                      }
                    }
                    ugr += '",'
                  }
  
                  /* var udpsid = indexOfAll(unit_dps_stats_csv, unit_name);
                  var udpst = ''
  
                  for (let i = 0, n = udpsid.length; i < n; i++) {
                    udpst += "'"
                    for (let j = 1; j < 23; j++) {
                      if (unit_dps_stats_csv[udpsid[i]+j] === undefined) {
                        udpst += ','
                      } else {
                        if (j / 24 === 1) {
                          udpst += unit_dps_stats_csv[udpsid[i]+j] + "'";
                        } else if (j === 22) {
                          udpst += unit_dps_stats_csv[udpsid[i]+j];
                        } else {
                          udpst += unit_dps_stats_csv[udpsid[i]+j] + ',';
                        }
                        
                      }
                    }
  
                  } */
  
                  //udpst = udpst.slice(0, -1);
                  
                  
                  
                  currentTargetType = target_data[9].split(';')[0];
        
                  $('#searched-targetID-values').attr('value',target_data);
          
                  $("#target-icon").html(target_data[8])
                  $("#target-title").html(target_data[0])
                  $("#target-name").html(target_data[1])
                  $("#target-hp").html(target_data[2])
                  $("#target-current_hp").html(target_data[2])
                  $("#target-atk").html(target_data[3])
                  $("#target-def").html(target_data[4])
                  $("#target-crit").html(target_data[5])
                  $("#target-hit").html(target_data[6])
                  $("#target-eva").html(target_data[7])
                 
          
          
                total_target_data = target_data;
          
          
          
                target_hp = target_data[2];
                target_atk = target_data[3]
                target_def = target_data[4]
                target_DEF_pc = target_def/(target_def+1000);
                target_crit = target_data[5]
                target_CRIT_pc = Math.min(0.0005*target_crit,0.85); 
                target_hit = target_data[6]
                target_HIT_pc = target_hit/(target_hit+1500);
                target_eva = target_data[7]
                target_EVA_pc = target_eva/(target_eva+800);
                
                //Target_dps_stats = udpst;
  
                
                
                switch (currentTargetType) { // variable for different main stat values of gear for counter/sol/mech, put it here idk where else
                  case COUNTER:
                    GEAR_MAIN_STATS_VALUES_T7_target = [ATK, HP, EVA, HIT, 399, 3814, 274, 274];
                    break;
                    case SOLDIER:
                      GEAR_MAIN_STATS_VALUES_T7_target = [ATK, HP, EVA, HIT, 399, 3814, 206, 206];
                    break;
                    case MECH:
                      GEAR_MAIN_STATS_VALUES_T7_target = [ATK, HP, EVA, HIT, 399, 3814, 309, 309];
                    break;
                  default:
                    break;
                }
                let checkEE = UNITS_W_EE.indexOf((total_target_data[0] + ' ' + total_target_data[1]));
              if (checkEE > -1) {
                switch (UNITS_W_EE[checkEE]) {
                  case 'Post-War Administration Bureau Millia Rage':
                    ugr += '"Exclusive,Cat Brooch,Accessory,Soldier,Icon_Soldier_Accessory_Cat Brooch_EE,ASPD,2,2,2,2,,,,,1,2,,2,2,,,,,,,,2,2,2,2,,,,2,2,,,,,,,,2,2,2,2,,,,2,,,,,,,,,,';
                    GEAR_MAIN_STATS_VALUES_T7_target.splice(GEAR_MAIN_STATS_VALUES_T7_target.length/2, 0, ASPD);
                    GEAR_MAIN_STATS_VALUES_T7_target.push(0.306)
                    break;
                  default:
                    break;
                }
              }
              total_gear_data_target = ugr;
              $('#gearData_enemy').html(ugr);
        
                targetIsUpdated = true;
                AppendCustomStatsForUnits();
        
                if (check === true) {
                  console.time('ajax_Unit_timer')
                UpdateUnitAndTarget(total_unit_data);
                CalcUnitDMG()
                
                console.timeEnd('ajax_Unit_timer')
                }
                
                $('#compareUnitsModal .modal-body .unit_container .list-group-item .dropdown-item[mtd-action="overwrite"]').removeClass('disabled');
              }
