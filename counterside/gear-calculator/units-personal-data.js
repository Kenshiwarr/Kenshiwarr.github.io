/* .split(",") */

var unit_stats_data;

if (unit_stat_data != 0) {
    
    unit_stats_data = unit_stat_data.split(',');

    console.log('unit_stats_data = ' + unit_stats_data)

switch (unit_stats_data[0] + ' ' + unit_stats_data[1]) {
    case 'Expert Mercenary Yoo Mina':
      $('#Unit_Extra').html('<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> <label class="form-check-label" for="flexCheckDefault"> include 10% ATK bonus after ult </label> </div>')
      $(document).on('click','#flexCheckDefault',function(){
        var checkVal = $('#flexCheckDefault');
        if (checkVal.is(':checked') === true) {
          bonus_stats[7] += 0.1;
        } else {
          bonus_stats[7] -= 0.1;
        }
        
    });
      break;
      case 'States of One	ATAC-130 Gunship':
        var tx = "50% dmg res while turning around"
        var passdebuff = "enemy ground units -30% hit -30% eva -15% atk";
        var passbuff = "ally air units +15% atk +10% dmg res";
        break;
        case 'Zodiac Knights: Blue Shift	Esterosa de Chevalier':
        var tx = "123"
        break;
        case 'Alphatrix Innovation	Shin Jia':
        var tx = "50% dmg res while turning around"
        var passdebuff = "enemy ground units -30% hit -30% eva -15% atk";
        var passbuff = "ally air units +15% atk +10% dmg res";
        break;
        case 'Zodiac Knights: Blue Shift	Esterosa de Chevalier':
        var tx = "14% aspd, 12% atk 200 flat crit herself, allies (200 flat not included in base stat bonuses!)"
        break;
        case 'Official Support	Cathy Wade':
        var tx = "ally rangers +10% aspd"
        break;
        case 'Official Support	Irie Alford':
        var tx = "ally strikers 10% dmg res"
        break;
        case 'R7 Irregular Scouts	Eddie Fisher':
        var tx = "ally soldiers +10% ATK, +10% dmg res; ally counters same"
        break;
        case 'R7 Irregular Scouts	Charlie Rockwood':
          var statToAmplify = ['',0];
          var amp = 0;
          var skillcd = 0;
          var skillduration = 0;
          var skilluptime = 1;
          if (skillduration<skillcd) {
            skilluptime = skillcd/skillduration;
            
          }
          amp = statToAmplify[1]/skilluptime;
        var tx = "uptime for skill"
        break;
        case 'Old Administration	Administration Rifleman':
        var tx = "Increase atk by up to 10% after 5 attacks"
        break;
        case 'Old Administration	Ifrit':
          var statToAmplify = ['',0];
          var amp = 0;
          var skillcd = 0;
          var skillduration = 0;
          var skilluptime = 1;
          if (skillduration<skillcd) {
            skilluptime = skillcd/skillduration;
            
          }
          amp = statToAmplify[1]/skilluptime;
        var tx = "uptime for skill"
        break;
        case 'Old Administration	Estaque':
          var tx = "Debuff"
          var attack_anim = 0;

          break;
          case 'HRT Berry	Gaeun':
        var tx = "Gaeun ult reduce cd every accumulated attack (not included)"
        break;
        case 'Police SWAT 4	Lee Yumi':
        var tx = "Upon deployment 50% eva, 15% dmg res (20 sec)"
        break;
        case 'Fallen Hawk	Rosaria le Friede':
        var tx = "1.5% ATK per kill, up to 15%"
        break;
        case 'Future-at-War	Janus':
        var tx = "When hp below 50% use attack2, skill2 instead of attack1, attack2"
        break;
        case 'Arhat	Joo Shiyoon':
        var tx = "Note, that while ajsy has stacked counterattack, his basic attack animation is 2.17 instead of 1.88, however in perfect scenario when he's constantly getting hit, it never occurs."
        break;
        case 'Horizon Finance	Horizon':
        var tx = "During phase change changes mdl from 0.1 to 0.05; Stacking animation currently ignored. During phase change performs attack3 whenever knock back is successful (knockback uptime)"
        break;
        case 'The Gronia Department of National Security	Revenant':
        var tx = "give soldiers sure fire for 4 sec after spec cast. Passive all ally soldiers +18% ATK, +15% DEF pen"
        break;
        case 'Hidden Challenger	Kim Chulsoo':
        var tx = "stuff there"
        break;

    default:
      break;
  } 
}