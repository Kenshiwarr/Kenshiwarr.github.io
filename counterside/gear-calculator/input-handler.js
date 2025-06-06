const url_getUnits = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
var Uname = url_query_params.unit; // "some_value"

var Tname = url_query_params.target; // "some_value"
var ifDummy = url_query_params.Isdmmy; // "some_value"
var gearUnit_DataUrl = url_query_params.gearU;
var gearTarget_DataUrl = url_query_params.gearT;
var urlExtra = url_query_params.extra;

var Loadouts_LoadOrder = [];


if (localStorageAvailable) {
  var loadOrder = ''
  let loEx = '';
  var uorder = localStorage.getItem('units_load_order');
  if (uorder !== null) {
    loadOrder = uorder;
  } 
  for (let i = 0, n = LoadoutLimit; i < n; i++) {
    loEx += (i+',');
    }
    loEx = loEx.slice(0,-1)
    loadOrder += ','+ loEx;
  let lOrder = loadOrder.split(',')
  lOrder = [...new Set(lOrder)];
  
  console.time('LoadFromLocalStorageTime');
  for (let i = 0; i < LoadoutLimit; i++) {
    var locString_compare_units = 'localStorageData_compare_units'+lOrder[i];
    var localStorageData_tooltip_gear = 'localStorageData_tooltip_gear'+lOrder[i];
    var localStorageData_gear_info = 'gearFullDataForCompare'+lOrder[i];
    var locDataUnit;
    var locDataUnit_gear_tooltip;
    var locDataUnit_gear_info;
    if ((localStorage.getItem(locString_compare_units) !== null) && (localStorage.getItem(localStorageData_tooltip_gear) !== null) && (localStorage.getItem(localStorageData_gear_info) !== null)) {
      locDataUnit = JSON.parse(localStorage.getItem(locString_compare_units));
      locDataUnit_gear_tooltip = JSON.parse(localStorage.getItem(localStorageData_tooltip_gear));
      locDataUnit_gear_info = JSON.parse(localStorage.getItem(localStorageData_gear_info));
      
    console.log('loading: ' + lOrder[i])
      UpdateCompareUnitsModal(locDataUnit,locDataUnit_gear_tooltip,locDataUnit_gear_info,false, true, lOrder[i]);
      
    }
    
  }
  if (uorder === null) {
    localStorage.setItem('units_load_order',loadOrder);
  }
  if ((localStorage.getItem('SessionLocalData') !== null) && (Uname == null)) {
    try {
      LoadSessionFromLocalStorage()
    }
    catch(error) {
      localStorage.removeItem('SessionLocalData');
      alert('There was an error loading your last session.\nSession data will be reset.')
      location.reload(true);
    }
  
  } 
  

  console.timeEnd('LoadFromLocalStorageTime');
} else {
  $('#uct_saved_loadouts').html('<div class="text-danger text-center"> local storage is not available. <br /> No data can be saved. <br /> Your progress will be lost once you refresh the page. </div>')
}

if (Uname != null) {
  //var SessionData = [url_query_params.tud,url_query_params.Uds,url_query_params.tgu,url_query_params.uebs,'','','','',url_query_params.ttd,url_query_params.gd_h,url_query_params.tebs,'','','','',url_query_params.rmd_p,url_query_params.tch,url_query_params.debs,url_query_params.tiu,url_query_params.tdd,url_query_params.ums];
  
  /* searchvcsv(Utitle.replace(/_/g, ' '),Uname.replace(/_/g, ' '),true) */


  urlExtra = urlExtra.split(';');
  
  let urlExtra_unitbstats;
  let urlExtra_targetbstats;
  let urlExtra_dummybstats;
  let urlExtra_excludeSkills;
  let urlExtra_mainAtk;
  if ((typeof urlExtra[3] !== 'undefined') && urlExtra[3] != '') {
    urlExtra_unitbstats = urlExtra[3].split(',');
    for (var i = 0, n = urlExtra_unitbstats.length; i < n; i+=2) {
      unit_extra_bonus_stats[Number(urlExtra_unitbstats[i])] = Number(urlExtra_unitbstats[i+1]);
    }
  }
  if ((typeof urlExtra[4] !== 'undefined') && urlExtra[4] != '') {
    urlExtra_targetbstats = urlExtra[4].split(',');
    for (var i = 0, n = urlExtra_targetbstats.length; i < n; i+=2) {
      target_extra_bonus_stats[Number(urlExtra_targetbstats[i])] = Number(urlExtra_targetbstats[i+1]);
    }
  }
  if ((typeof urlExtra[5] !== 'undefined') && urlExtra[5] != '') {
    urlExtra_dummybstats = urlExtra[5].split(',');
    for (var i = 0, n = urlExtra_dummybstats.length; i < n; i+=2) {
      dummy_extra_bonus_stats[Number(urlExtra_dummybstats[i])] = Number(urlExtra_dummybstats[i+1]);
    }
  }
  

  /* let urlExtraInfo = JSON.parse(atob(urlExtra[0])); */
  let urlExtraInfo = Number(urlExtra[0]);

  $('#range-melee-distance_partial').val(urlExtraInfo);
  var rangeVal = $('#range-melee-distance_partial').val();
    distance_to_target_frequency_ranged = Number(rangeVal)/100;
    distance_to_target_frequency_melee = 1 + Number(rangeVal*(-1))/100;
    $('#range-melee-distance_partial-value').text(Math.round((distance_to_target_frequency_melee+ Number.EPSILON)*100) + '% / ' + Math.round((distance_to_target_frequency_ranged + Number.EPSILON)*100) + '%');


  let toSearchU = decodeURI(Uname).split(",");

    UnitLevel = Number(toSearchU[2]);
    searchvcsv(toSearchU[0],toSearchU[1],true);
    /* let unit_gdata = JSON.parse(atob(gearUnit_DataUrl)); */
    let unit_gdata = gearUnit_DataUrl.split(";");
    console.log("U Uname  = " + unit_gdata[0].split(",")[0])
    let tgdu = total_gear_data_unit.slice(1).split('","');

    if (unit_gdata[0] !== '') {
      Weapon.setValuesByUrl(unit_gdata[0],tgdu[unit_gdata[0].split(",")[0]],"Weapon");

      Weapon.setGear();
      weaponIsConfirmed = true;
  } else {
      Weapon.removeGear();
      weaponIsConfirmed = false;
  }
  if (unit_gdata[1] !== '') {
      Armor.setValuesByUrl(unit_gdata[1],tgdu[unit_gdata[1].split(",")[0]],"Armor");
      Armor.setGear();
      armorIsConfirmed = true;
  } else {
      Armor.removeGear();
      armorIsConfirmed = false;
  }
  if (unit_gdata[2] !== '') {
      Accessory1.setValuesByUrl(unit_gdata[2],tgdu[unit_gdata[2].split(",")[0]],"Accessory1");
      Accessory1.setGear();
      accessory1IsConfirmed = true;
  } else {
      Accessory1.removeGear();
      accessory1IsConfirmed = false;
  }
  if (unit_gdata[3] !== '') {
      Accessory2.setValuesByUrl(unit_gdata[3],tgdu[unit_gdata[3].split(",")[0]],"Accessory2");
      Accessory2.setGear();
      accessory2IsConfirmed = true;
  } else {
      Accessory2.removeGear();
      accessory2IsConfirmed = false;
  }
  if (UnitStatGrowth == [] || TargetStatGrowth == []) {
    let sc_growthU = unit_stats_growth_pve.indexOf(total_unit_data[0] + ' ' + total_unit_data[1]);
    let sc_growthT = unit_stats_growth_pve.indexOf(total_target_data[0] + ' ' + total_target_data[1]);

    for (let i = 1; i < 7; i++) {
      let rd = i > 3 ? 1:0.1;
      UnitStatGrowth[i-1] = unit_stats_growth_pve[sc_growthU+i]*rd;
      UnitStatGrowth_PvE[i-1] = unit_stats_growth_pve[sc_growthU+i];
      TargetStatGrowth[i-1] = unit_stats_growth_pve[sc_growthT+i]*rd;

    }
  }
 
  
if (ifDummy == '0') {
$('#searchIDtarget').prop('disabled', false);
$('#searchIDtarget').attr('placeholder','');
ifSelectTargetDummy = false;
$('#selectCustomEnemy').removeClass('d-flex');
  $('#selectCustomEnemy').prop('hidden', true);
$('#btn-setTargetAsDummy').prop('checked',false);

$('#dummy_extra_stats_dropdown').hide();
$('#target_extra_stats_dropdown').show();
$('#dummy_BuffList_display').hide();
$('#target_BuffList_display').show();
}
  
  if (Tname != null) {
    let toSearchT = decodeURI(Tname).split(",")
    /* searchvcsv2(Ttitle.replace(/_/g, ' '),Tname.replace(/_/g, ' '),true) */
    TargetLevel = Number(toSearchT[2]);
    searchvcsv2(toSearchT[0],toSearchT[1],true);
    /* let target_gdata = JSON.parse(atob(gearTarget_DataUrl)); */
    let target_gdata = gearTarget_DataUrl.split(";");
    let tgdt = total_gear_data_target.slice(1).split('","');


    if (target_gdata[0] !== '') {
      enemy_Weapon.setValuesByUrl(target_gdata[0],tgdt[target_gdata[0].split(",")[0]],"Weapon");
      enemy_Weapon.setGear();
      enemy_weaponIsConfirmed = true;
  } else {
      enemy_Weapon.removeGear();
      enemy_weaponIsConfirmed = false;
  }
  if (target_gdata[1] !== '') {
      enemy_Armor.setValuesByUrl(target_gdata[1],tgdt[target_gdata[1].split(",")[0]],"Armor");
      enemy_Armor.setGear();
      enemy_armorIsConfirmed = true;
  } else {
      enemy_Armor.removeGear();
      enemy_armorIsConfirmed = false;
  }
  if (target_gdata[2] !== '') {
      enemy_Accessory1.setValuesByUrl(target_gdata[2],tgdt[target_gdata[2].split(",")[0]],"Accessory1");
      enemy_Accessory1.setGear();
      enemy_accessory1IsConfirmed = true;
  } else {
      enemy_Accessory1.removeGear();
      enemy_accessory1IsConfirmed = false;
  }
  if (target_gdata[3] !== '') {
      enemy_Accessory2.setValuesByUrl(target_gdata[3],tgdt[target_gdata[3].split(",")[0]],"Accessory2");
      enemy_Accessory2.setGear();
      enemy_accessory2IsConfirmed = true;
  } else {
      enemy_Accessory2.removeGear();
      enemy_accessory2IsConfirmed = false;
  }
    
  }
  if ((typeof urlExtra[1] !== 'undefined') && urlExtra[1] != '') {
    urlExtra_excludeSkills = urlExtra[1].split(',');
    for (var i = 0, n = urlExtra_excludeSkills.length; i < n; i++) {
      if (urlExtra_excludeSkills[i] == "0") {
        active_skills_exclude[i] = true;
        
      } else {
        active_skills_exclude[i] = false;
      }
    }
  }

  if ((typeof urlExtra[2] !== 'undefined') && urlExtra[2] != '') {
    urlExtra_mainAtk = urlExtra[2].split(',');
    for (var i = 0, n = urlExtra_mainAtk.length; i < n; i++) {
     unit_mainAttack_selected[i] = Number(urlExtra_mainAtk[i]);
    }
  } else {
    unit_mainAttack_selected = [0];
  }

  if (localStorageAvailable) {
    SaveSessionToLocalStorage()
  }

window.location.href = window.location.href.split("?")[0]; 

} 

setUnitExtra(total_unit_data);



//var units_full_names = ['States of One ACH-4 Clan','States of One ATAC-130 Gunship','States of One ATB-1B Spear','States of One ATF-35 Thunderbolt','States of One ATL-1 Lincoln','Abyssal Ravage Orca','ESPR Acolyte','Fennec Fox Adamant Sniper','Old Administration Administration Rifleman','Old Administration Administration Shieldman','Old Administration Administration Sword Fighter','Agent Eujin','Valentinus Monastery Agnes Abigail','Old Administration: Maze Division Alex','Six Wings Amy Firstwing','Freedom Riders Amy Strickland','Future-at-War Arachne','Zodiac Knights: Blue Shift Arius Esquede','Special Hero Class Arti Lana','States of One Assault Trooper','Fenrir Squad Hilde','Cold Case Horizon','Stormbringer Jake Walker','Arhat Joo Shiyoon','Minerva Karin Wong','Ace of Wings Lee Sooyeon','Kresnik Lyudmila','Garguantia Maria Antonov','Six Wings Na Yubin','Nehemoth Ray','Tenured President Regina MacCready','Asmodeus Rosaria le Friede','Altergressive Seo Yoon','Singularity Shin Jia','Final Phase Sigma','Type: Fenrir Yoo Mina','Solar Codex Yuna Springfield','Future-at-War Ballista','Miracle Investigation Council 9 Benedict Constantine','Best Mascot Irie Alford','Best Streamer Miya','Miracle Investigation Council 9 Biblide Luce','Black Tide Black Tail','Blue Blood Elizabeth Pendragon','HRT Berry Bomi','Breakbeat Alex','Administration Counter Academy Brownie Moore','Steel Lane Buzzard','Lancelot Frontier C.C.','Knights of Redemption Carlota Martinez','Elysium Philharmonic Carmen','Official Support Cathy Wade','Black Tide Chariot','R7 Irregular Scouts Charlie Rockwood','White Rabbit Cho Hojin','Daymine Mining Team 4 Choi Gangsan','HRT Berry Choi Ina','The Militia Choi Jihoon','The Gronia Department of National Security Christina Brecht','Academy Student Council Ciel Marronier','Miracle Investigation Council 9 Cindy Looper','Knights of Redemption Clareth El Arcadena','Miracle Investigation Council 9 Claudia Nelson','The Iron Knight Gerard Curian','Dark Seven Sylvia Lena Cooper','Horizon Finance Dash','Suicide Squad Joo Shiyoung','Delta Seven Dominic King Reginald','OZ Dorothy','Front Bay Sharks Dracasia','R7 Irregular Scouts Eddie Fisher','ESPR Edel Meitner','Academy Student Council Edith Twins','Jehuty Biotech Eins & Zwei','Prydwen Institution Elizabeth Pendragon','Border Guards Ella','Old Administration Estaque','Zodiac Knights: Blue Shift Esterosa de Chevalier','ALT Squad Eujin','Gha&quot;agsheblah Eve Meitner','Strega Evelyn Keller','Apex Predator Evolved One','Expert Mercenary Yoo Mina','Canary Squad Felicette','Zodiac Knights: Blue Shift Fione Lowell','Fallen Hawk Frederick Doma','Fallen Hawk Frederick Yuma','Freelancer Kim Chowon','Full Moon Nanahara Chinatsu','Alphatrix Innovation Gabriel Jun the Vicious Breaker','HRT Berry Gaeun','Galahad Roy Burnett','Betatrix Gambler','Scavengers Glitch','Northern Union Goliath','Great Silence Ecclesia','Gremory\'s Bar Gremory','Northern Union Grendel','Griffin Rider Christina Brecht','Fennec Fox HM MRLS','White Rabbit Han Sorim','Cronenworth Puppet Troupe Harab','Nanahara Family Alliance Hayami Kanade','Nanahara Family Alliance Hayami Sanae','Hero Blossom Kaci Bins','Hidden Challenger Kim Chulsoo','Type: Siegfried Hilde','Freedom Riders Hirose Aki','Horizon Finance Horizon','Steel Lane Hound','Red Musician I-NO','Old Administration Ifrit','Strega Ingrid Johanna','Joint Investigation Kang Soyoung','Official Support Irie Alford','States of One Ironside','Delta Seven Jaina Kropel','Delta Seven Jake Walker','Mason Mercenary Office Jane Doe','Future-at-War Janus','R7 Irregular Scouts Jessica Green','Subculture Research Club Jin Bora','Mason Mercenary Office John Mason','Fenrir Squad Joo Shiyoon','Delta Seven: Pathfinder Joo Shiyoung','Special Hero Class Kaci Bins','GUREN TYPE-08 ELEMENTS "SEITEN" Kallen Kozuki','The Militia Kang Minwoo','Police SWAT 4 Kang Soyoung','Delta Seven: Pathfinder Karin Wong','Kestrel Xiao Lin','Alphatrix Innovation Kim Chowon','Yeoksam Residents&apos;& Association Kim Chulsoo','ALT Squad Kim Sobin','Delta Seven Kyle Wong','Canary Squad Laika','ESPR Lamda Spatari','Platina Express Lara Jaeger','Strega Laura Beatrix','Frontier Lee Dafoe','Alphatrix Innovation Lee Jin','Six Wings Lee Jisoo','Freedom Riders Lee Minseo','Fenrir Division Lee Sooyeon','Police SWAT 4 Lee Yumi','The Militia Lee Yuri','Zero Lelouch Lamperouge','Northern Union Lenore','Successor Levia Thanis','Flora Maid Service Lily','Freedom Riders Lin Xien','OZ Liona','Zodiac Knights: Blue Shift Liv Allen','Lonely Villainess Lone Lee','Jehuty Biotech Lucid','Knights of Redemption Lucrecia','Nightmare Realization Lulu the Nightmare','HRT Berry Lumi','Elysium Philharmonic Luna','Flora Maid Service Lycoris','Old Administration: Maze Division Lyudmila','Fennec Fox MA1 HMMWV','Scavengers Machine Collector','Elysium Philharmonic Maestra Nequitia','Delta Seven Maria Antonov','Jellyfish Pirates May','Frontier Maya Hunt','Subculture Research Club Mi Rinae','Academy Student Council Mika ★ Star','Post-War Administration Bureau Millia Rage','Demon-type C.O. Ministra','HRT Berry Miya','Flora Maid Service Mone','Demon-type C.O. Mors','Fennec Fox Mortar Team','Fenrir Division Na Yubin','Administration Counter Academy Naielle Bluesteel','Nanahara Family Alliance Nanahara Chifuyu','Nanahara Family Alliance Nanahara Chinatsu', 'Nanahara Family Alliance Nanahara Nao','Nanahara Family Alliance Nayuka Minato','Near Astraea Esterosa de Chevalier','Nest Keeper Xiao Lin','Gremory\'&s Bar Nicole Primer','Frontier Nina Anderson','Fenrir Squad Noelle Wright','Nanahara Family Alliance Ogami Masaki','Alphatrix Innovation Oh Saerom','Successor Orca','Orochinagi Nanahara Chifuyu','Outlander Rivet','Scavengers Overflow','Charade Ozymandias','Fennec Fox PZH Mobile Gun','Daymine Mining Team 4 Park Hyunsoo','States of One Peacekeeper','Elysium Philharmonic Plaga','Purple Mist Laura Beatrix','Illyria Commando Brigade Ramlethal Valentine','Alphatrix Innovation Raphaela Juri the Evil Chaser','Black Tide Reaper','Delta Seven: Pathfinder Rebecca Catherine','Fennec Fox Recoiless Gunner','ESPR Regina MacCready','Replacer Syndicate Replacer Bishop','Replacer Syndicate Replacer King','Replacer Syndicate Replacer Knight','Replacer Syndicate Replacer Queen','The Gronia Department of National Security Revenant','Steel Lane Rhino','Steel Lane Rifleman','Horizon Finance Rita Arsenico','ESPR Rivet','Fallen Hawk Rosaria le Friede','Prydwen Institution Roy Burnett','Prydwen Institution Ryan Ferrier','Black Tide Scout','Secret Service Lycoris','ALT Squad Seo Yoon','Cronenworth Puppet Troupe Serapel','Elysium Philharmonic Shena','The Elemental and the Beast Shepherd & Lurcher','Steel Lane Shieldman','Daymine Mining Team 4 Shim Somi','Alphatrix Innovation Shin Jia','Future Strategy Department Sigma','OZ Skia Crow','Special Hero Class Sky Layfield','The Sleeping Girl and the Yellow-billed Flock Edith Twins','Steel Lane Sniper','Flame of Corruption Sol Badguy','Front Bay Sharks Sonya Bill','Steel Lane Sparrow','Special Force Han Sorim','Demon-type C.O. Spira','Fennec Fox Stinger Gunner','Black Tide Stronghold','Steel Lane Suppressor','Black Tide Sweeper','Delta Seven Sylvia Lena Cooper','Steel Lane Tactical Transporter Deuce-and-a-Half','Front Bay Sharks Tallie','Old Administration Tarrasque','Black Tide Terminator','Prydwen Institution Thaddeus Morgan','Future-at-War Titan','Tommy and the Losers Tommy the Die-hard','Triaina Plan Titan','Fennec Fox UBGL Rifleman','Flora Maid Service Veronica','Volume Up! Gaeun','Border Guards Warden','Steel Lane Woodpecker','ALT Squad Xiao Lin','The Fallen Plague God Yamata no Orochi','Zodiac Knights: Blue Shift Yang Hansol','White Rabbit Yang Harim','Academy Student Council Yen Xing Lanchester','Fenrir Squad Yoo Mina','Strega Yuna Springfield','Fennec Fox ZSU Shilka','New Age Naielle Bluesteel','Official Support Zena Bird'];
    var units_icons = ['Icon_ACH-4 Clan_States of One', 'Icon_ATAC-130 Gunship_States of One', 'Icon_ATB-1B Spear_States of One', 'Icon_ATF-35 Thunderbolt_States of One', 'Icon_ATL-1 Lincoln_States of One', 'Icon_Orca_Abyssal Ravage', 'Icon_Acolyte_ESPR', 'Icon_Adamant Sniper_Fennec Fox', 'Icon_Surya_Aditya', 'Icon_Administration Rifleman_Old Administration', 'Icon_Administration Shieldman_Old Administration', 'Icon_Administration Sword Fighter_Old Administration', 'Icon_Eujin_Agent', 'Icon_Agnes Abigail_Valentinus Monastery', 'Icon_Alex_Old Administration; Maze Division', 'Icon_Amy Firstwing_Six Wings', 'Icon_Amy Strickland_Freedom Riders', 'Icon_Machine Collector_Apex Jackal', 'Icon_Arachne_Future-at-War', 'Icon_Arius Esquede_Zodiac Knights; Blue Shift', 'Icon_Arti Lana_Special Hero Class', 'Icon_Assault Trooper_States of One', 'Icon_Mordred_Avenger', 'Icon_Hilde_Type; Siegfried', 'Icon_Horizon_Cold Case', 'Icon_Jake Walker_Stormbringer', 'Icon_Joo Shiyoon_Arhat', 'Icon_Karin Wong_Minerva', 'Icon_Lee Sooyeon_Ace of Wings', 'Icon_Lyudmila_Kresnik', 'Icon_Maria Antonov_Garguantia', 'Icon_Na Yubin_Six Wings', 'Icon_Ray_Nehemoth', 'Icon_Regina MacCready_Tenured President', 'Icon_Rosaria le Friede_Asmodeus', 'Icon_Seo Yoon_Altergressive', 'Icon_Shin Jia_Singularity', 'Icon_Sigma_Final Phase', 'Icon_Yoo Mina_Type; Fenrir', 'Icon_Yuna Springfield_Solar Codex', 'Icon_Ballista_Future-at-War', 'Icon_Benedict Constantine_Miracle Investigation Council 9', 'Icon_Irie Alford_Best Mascot', 'Icon_Miya_Best Streamer', 'Icon_Biblide Luce_Miracle Investigation Council 9', 'Icon_Black Tail_Black Tide', 'Icon_Elizabeth Pendragon_Blue Blood', 'Icon_Bomi_HRT Berry', 'Icon_Alex_Breakbeat', 'Icon_Brownie Moore_Administration Counter Academy', 'Icon_Buzzard_Steel Lane', 'Icon_C.C._Lancelot Frontier', 'Icon_Carlota Martinez_Knights of Redemption', 'Icon_Carmen_Elysium Philharmonic', 'Icon_Cathy Wade_Official Support', 'Icon_Chariot_Black Tide', 'Icon_Charlie Rockwood_R7 Irregular Scouts', 'Icon_Cho Hojin_White Rabbit', 'Icon_Choi Gangsan_Daymine Mining Team 4', 'Icon_Choi Ina_HRT Berry', 'Icon_Choi Jihoon_The Militia', 'Icon_Christina Brecht_The Gronia Department of National Security', 'Icon_Ciel Marronier_Academy Student Council', 'Icon_Cindy Looper_Miracle Investigation Council 9', 'Icon_Clareth El Arcadena_Knights of Redemption', 'Icon_Claudia Nelson_Miracle Investigation Council 9', 'Icon_Credere_Future Strategy Department', 'Icon_Gerard Curian_The Iron Knight', 'Icon_Sylvia Lena Cooper_Dark Seven', 'Icon_Dash_Horizon Finance', 'Icon_Joo Shiyoung_Suicide Squad', 'Icon_Dominic King Reginald_Delta Seven', 'Icon_Dorothy_OZ', 'Icon_Dracasia_Front Bay Sharks', 'Icon_Drekavac_Northern Union', 'Icon_Eddie Fisher_R7 Irregular Scouts', 'Icon_Edel Meitner_ESPR', 'Icon_Edith Twins_Academy Student Council', 'Icon_Eins & Zwei_Jehuty Biotech', 'Icon_Elizabeth Pendragon_Prydwen Institution', 'Icon_Ella_Border Guards', 'Icon_Estaque_Old Administration', 'Icon_Esterosa de Chevalier_Zodiac Knights; Blue Shift', 'Icon_Eujin_ALT Squad', 'Icon_Eve Meitner_Gha&apos;agsheblah', 'Icon_Evelyn Keller_Strega', 'Icon_Evolved One_Apex Predator', 'Icon_Yoo Mina_Expert Mercenary', 'Icon_Félicette_Canary Squad', 'Icon_Fione Lowell_Zodiac Knights; Blue Shift', 'Icon_Frederick Doma_Fallen Hawk', 'Icon_Frederick Yuma_Fallen Hawk', 'Icon_Kim Chowon_Freelancer', 'Icon_Nanahara Chinatsu_Full Moon', 'Icon_Gabriel Jun the Vicious Breaker_Alphatrix Innovation', 'Icon_Gaeun_HRT Berry', 'Icon_Roy Burnett_Galahad', 'Icon_Gambler_Betatrix', 'Icon_Glitch_Scavengers', 'Icon_Goliath_Northern Union', 'Icon_Ecclesia_Great Silence', 'Icon_Gremory_Gremory&apos;s Bar', 'Icon_Grendel_Northern Union', 'Icon_Christina Brecht_Griffin Rider', 'Icon_HM MRLS_Fennec Fox', 'Icon_Han Sorim_White Rabbit', 'Icon_Harab_Cronenworth Puppet Troupe', 'Icon_Hayami Kanade_Nanahara Family Alliance', 'Icon_Hayami Sanae_Nanahara Family Alliance', 'Icon_Kaci Bins_Hero Blossom', 'Icon_Kim Chulsoo_Hidden Challenger', 'Icon_Hilde_Fenrir Squad', 'Icon_Hirose Aki_Freedom Riders', 'Icon_Horizon_Horizon Finance', 'Icon_Hound_Steel Lane', 'Icon_I-NO_Red Musician', 'Icon_Ifrit_Old Administration', 'Icon_Hayami Sanae_Ignis Blade', 'Icon_Ingrid Johanna_Strega', 'Icon_Kang Soyoung_Joint Investigation', 'Icon_Irie Alford_Official Support', 'Icon_Ironside_States of One', 'Icon_Jack-O_Scales of Juno', 'Icon_Jaina Kropel_Delta Seven', 'Icon_Jake Walker_Delta Seven', 'Icon_Jane Doe_Mason Mercenary Office', 'Icon_Janus_Future-at-War', 'Icon_Jessica Green_R7 Irregular Scouts', 'Icon_Jin Bora_Subculture Research Club', 'Icon_John Mason_Mason Mercenary Office', 'Icon_Joo Shiyoon_Fenrir Squad', 'Icon_Joo Shiyoung_Delta Seven; Pathfinder', 'Icon_Judy Swift_Old Management Bureau; Yaksha Squadron', 'Icon_Kaci Bins_Special Hero Class', 'Icon_Kallen Kozuki_GUREN TYPE-08 ELEMENTS `SEITEN`', 'Icon_Kang Minwoo_The Militia', 'Icon_Kang Soyoung_Police SWAT 4', 'Icon_Karin Wong_Delta Seven; Pathfinder', 'Icon_Xiao Lin_Kestrel', 'Icon_Kim Chowon_Alphatrix Innovation', 'Icon_Kim Chulsoo_Yeoksam Residents&apos; Association', 'Icon_Kim Sobin_ALT Squad', 'Icon_Mavka_Kostroma', 'Icon_Alice Braidwood_Kubera', 'Icon_Kyle Wong_Delta Seven', 'Icon_Laika_Canary Squad', 'Icon_Lamda Spatari_ESPR', 'Icon_Lara Jaeger_Platina Express', 'Icon_Laura Beatrix_Strega', 'Icon_Lee Dafoe_Frontier', 'Icon_Lee Jin_Alphatrix Innovation', 'Icon_Lee Jisoo_Six Wings', 'Icon_Lee Minseo_Freedom Riders', 'Icon_Lee Sooyeon_Fenrir Division', 'Icon_Lee Yumi_Police SWAT 4', 'Icon_Lee Yuri_The Militia', 'Icon_Lelouch Lamperouge_Zero', 'Icon_Lenore_Northern Union', 'Icon_Levia Thanis_Successor', 'Icon_Lily_Flora Maid Service', 'Icon_Lin Xien_Freedom Riders', 'Icon_Liona_OZ', 'Icon_Liv Allen_Zodiac Knights; Blue Shift', 'Icon_Lone Lee_Lonely Villainess', 'Icon_Lucid_Jehuty Biotech', 'Icon_Lucrecia_Knights of Redemption', 'Icon_Lulu the Nightmare_Nightmare Realization', 'Icon_Lumi_HRT Berry', 'Icon_Luna_Elysium Philharmonic', 'Icon_Lycoris_Flora Maid Service', 'Icon_Lyudmila_Old Administration; Maze Division', 'Icon_MA1 HMMWV_Fennec Fox', 'Icon_Machine Collector_Scavengers', 'Icon_Maestra Nequitia_Elysium Philharmonic', 'Icon_Maria Antonov_Delta Seven', 'Icon_May_Jellyfish Pirates', 'Icon_Maya Hunt_Frontier', 'Icon_Mi Rinae_Subculture Research Club', 'Icon_Mika Star_Academy Student Council', 'Icon_Millia Rage_Post-War Administration Bureau', 'Icon_Ministra_Demon-type C.O.', 'Icon_Miya_HRT Berry', 'Icon_Mone_Flora Maid Service', 'Icon_Morgana_Stump of the Gelid Lands', 'Icon_Mors_Demon-type C.O.', 'Icon_Mortar Team_Fennec Fox', 'Icon_Na Yubin_Fenrir Division', 'Icon_Naielle Bluesteel_Administration Counter Academy', 'Icon_Nanahara Chifuyu_Nanahara Family Alliance', 'Icon_Nanahara Chinatsu_Nanahara Family Alliance', 'Icon_Nao_Nanahara Family Alliance', 'Icon_Nayuka Minato_Nanahara Family Alliance', 'Icon_Esterosa de Chevalier_Near Astraea', 'Icon_Xiao Lin_Nest Keeper', 'Icon_Nicole Primer_Gremory&apos;s Bar', 'Icon_Nina Anderson_Frontier', 'Icon_Noelle Wright_Fenrir Squad', 'Icon_Ogami Masaki_Nanahara Family Alliance', 'Icon_Oh Saerom_Alphatrix Innovation', 'Icon_Orca_Successor', 'Icon_Nanahara Chifuyu_Orochinagi', 'Icon_Rivet_Outlander', 'Icon_Overflow_Scavengers', 'Icon_Ozymandias_Charade', 'Icon_PZH Mobile Gun_Fennec Fox', 'Icon_Park Hyunsoo_Daymine Mining Team 4', 'Icon_Peacekeeper_States of One', 'Icon_Plaga_Elysium Philharmonic', 'Icon_Laura Beatrix_Purple Mist', 'Icon_Ramlethal Valentine_Illyria Commando Brigade', 'Icon_Raphaela Juri the Evil Chaser_Alphatrix Innovation', 'Icon_Reaper_Black Tide', 'Icon_Rebecca Catherine_Delta Seven; Pathfinder', 'Icon_Recoiless Gunner_Fennec Fox', 'Icon_Regina MacCready_ESPR', 'Icon_Replacer Bishop_Replacer Syndicate', 'Icon_Replacer King_Replacer Syndicate', 'Icon_Replacer Knight_Replacer Syndicate', 'Icon_Replacer Queen_Replacer Syndicate', 'Icon_Revenant_The Gronia Department of National Security', 'Icon_Rhino_Steel Lane', 'Icon_Rifleman_Steel Lane', 'Icon_Rita Arsenico_Horizon Finance', 'Icon_Rivet_ESPR', 'Icon_Rosaria le Friede_Fallen Hawk', 'Icon_Roy Burnett_Prydwen Institution', 'Icon_Ryan Ferrier_Prydwen Institution', 'Icon_Scout_Black Tide', 'Icon_Lycoris_Secret Service', 'Icon_Seo Yoon_ALT Squad', 'Icon_Serapel_Cronenworth Puppet Troupe', 'Icon_Shena_Elysium Philharmonic', 'Icon_Shepherd & Lurcher_The Elemental and the Beast', 'Icon_Shieldman_Steel Lane', 'Icon_Shim Somi_Daymine Mining Team 4', 'Icon_Shin Jia_Alphatrix Innovation', 'Icon_Sigma_Future Strategy Department', 'Icon_Swan Claire_Six Wings', 'Icon_Skia Crow_OZ', 'Icon_Sky Layfield_Special Hero Class', 'Icon_Edith Twins_The Sleeping Girl and the Yellow-billed Flock', 'Icon_Sniper_Steel Lane', 'Icon_Sol Badguy_Flame of Corruption', 'Icon_Sonya Bill_Front Bay Sharks', 'Icon_Sparrow_Steel Lane', 'Icon_Han Sorim_Special Force', 'Icon_Spencer_Chamber', 'Icon_Spira_Demon-type C.O.', 'Icon_Stinger Gunner_Fennec Fox', 'Icon_Stronghold_Black Tide', 'Icon_Suppressor_Steel Lane', 'Icon_Sweeper_Black Tide', 'Icon_Sylvia Lena Cooper_Delta Seven', 'Icon_Tactical Transporter Deuce-and-a-Half_Steel Lane', 'Icon_Tallie_Front Bay Sharks', 'Icon_Tarrasque_Old Administration', 'Icon_Terminator_Black Tide', 'Icon_Thaddeus Morgan_Prydwen Institution', 'Icon_Titan_Future-at-War', 'Icon_Tommy the Die-hard_Tommy and the Losers', 'Icon_Titan_Triaina Plan', 'Icon_UBGL Rifleman_Fennec Fox', 'Icon_Veronica_Flora Maid Service', 'Icon_Gaeun_Volume Up!', 'Icon_Warden_Border Guards', 'Icon_Woodpecker_Steel Lane', 'Icon_Xiao Lin_ALT Squad', 'Icon_Yamata no Orochi_The Fallen Plague God', 'Icon_Yang Hansol_Zodiac Knights; Blue Shift', 'Icon_Yanikka Shirokova_Chamber', 'Icon_Yang Harim_White Rabbit', 'Icon_Yen Xing Lanchester_Academy Student Council', 'Icon_Yoo Mina_Fenrir Squad', 'Icon_Yuna Springfield_Strega', 'Icon_ZSU Shilka_Fennec Fox', 'Icon_Naielle Bluesteel_New Age', 'Icon_Bell Cranel_Rabbit&apos;s Foot', 'Icon_Ryu Lion_Gale Wind', 'Icon_Ais Wallenstein_Sword Princess','Icon_Solovey_Sprouting Star', 'Icon_Nibble_Irregular C.O.', 'Icon_Lucia Ridge_Exorcist','Icon_Zena Bird_Official Support']

    var unit_names = ['ACH-4 Clan', 'ATAC-130 Gunship', 'ATB-1B Spear', 'ATF-35 Thunderbolt', 'ATL-1 Lincoln', 'Orca', 'Acolyte', 'Adamant Sniper', 'Surya', 'Administration Rifleman', 'Administration Shieldman', 'Administration Sword Fighter', 'Eujin', 'Agnes Abigail', 'Alex', 'Amy Firstwing', 'Amy Strickland', 'Machine Collector', 'Arachne', 'Arius Esquede', 'Arti Lana', 'Assault Trooper', 'Mordred', 'Hilde', 'Horizon', 'Jake Walker', 'Joo Shiyoon', 'Karin Wong', 'Lee Sooyeon', 'Lyudmila', 'Maria Antonov', 'Na Yubin', 'Ray', 'Regina MacCready', 'Rosaria le Friede', 'Seo Yoon', 'Shin Jia', 'Sigma', 'Yoo Mina', 'Yuna Springfield', 'Ballista', 'Benedict Constantine', 'Irie Alford', 'Miya', 'Biblide Luce', 'Black Tail', 'Elizabeth Pendragon', 'Bomi', 'Alex', 'Brownie Moore', 'Buzzard', 'C.C.', 'Carlota Martinez', 'Carmen', 'Cathy Wade', 'Chariot', 'Charlie Rockwood', 'Cho Hojin', 'Choi Gangsan', 'Choi Ina', 'Choi Jihoon', 'Christina Brecht', 'Ciel Marronier', 'Cindy Looper', 'Clareth El Arcadena', 'Claudia Nelson', 'Credere', 'Gerard Curian', 'Sylvia Lena Cooper', 'Dash', 'Joo Shiyoung', 'Dominic King Reginald', 'Dorothy', 'Dracasia', 'Drekavac', 'Eddie Fisher', 'Edel Meitner', 'Edith Twins', 'Eins & Zwei', 'Elizabeth Pendragon', 'Ella', 'Estaque', 'Esterosa de Chevalier', 'Eujin', 'Eve Meitner', 'Evelyn Keller', 'Evolved One', 'Yoo Mina', 'Félicette', 'Fione Lowell', 'Frederick Doma', 'Frederick Yuma', 'Kim Chowon', 'Nanahara Chinatsu', 'Gabriel Jun the Vicious Breaker', 'Gaeun', 'Roy Burnett', 'Gambler', 'Glitch', 'Goliath', 'Ecclesia', 'Gremory', 'Grendel', 'Christina Brecht', 'HM MRLS', 'Han Sorim', 'Harab', 'Hayami Kanade', 'Hayami Sanae', 'Kaci Bins', 'Kim Chulsoo', 'Hilde', 'Hirose Aki', 'Horizon', 'Hound', 'I-NO', 'Ifrit', 'Hayami Sanae', 'Ingrid Johanna', 'Kang Soyoung', 'Irie Alford', 'Ironside', 'Jack-O', 'Jaina Kropel', 'Jake Walker', 'Jane Doe', 'Janus', 'Jessica Green', 'Jin Bora', 'John Mason', 'Joo Shiyoon', 'Joo Shiyoung', 'Judy Swift', 'Kaci Bins', 'Kallen Kozuki', 'Kang Minwoo', 'Kang Soyoung', 'Karin Wong', 'Xiao Lin', 'Kim Chowon', 'Kim Chulsoo', 'Kim Sobin', 'Mavka', 'Alice Braidwood', 'Kyle Wong', 'Laika', 'Lamda Spatari', 'Lara Jaeger', 'Laura Beatrix', 'Lee Dafoe', 'Lee Jin', 'Lee Jisoo', 'Lee Minseo', 'Lee Sooyeon', 'Lee Yumi', 'Lee Yuri', 'Lelouch Lamperouge', 'Lenore', 'Levia Thanis', 'Lily', 'Lin Xien', 'Liona', 'Liv Allen', 'Lone Lee', 'Lucid', 'Lucrecia', 'Lulu the Nightmare', 'Lumi', 'Luna', 'Lycoris', 'Lyudmila', 'MA1 HMMWV', 'Machine Collector', 'Maestra Nequitia', 'Maria Antonov', 'May', 'Maya Hunt', 'Mi Rinae', 'Mika Star', 'Millia Rage', 'Ministra', 'Miya', 'Mone', 'Morgana', 'Mors', 'Mortar Team', 'Na Yubin', 'Naielle Bluesteel', 'Nanahara Chifuyu', 'Nanahara Chinatsu', 'Nao', 'Nayuka Minato', 'Esterosa de Chevalier', 'Xiao Lin', 'Nicole Primer', 'Nina Anderson', 'Noelle Wright', 'Ogami Masaki', 'Oh Saerom', 'Orca', 'Nanahara Chifuyu', 'Rivet', 'Overflow', 'Ozymandias', 'PZH Mobile Gun', 'Park Hyunsoo', 'Peacekeeper', 'Plaga', 'Laura Beatrix', 'Ramlethal Valentine', 'Raphaela Juri the Evil Chaser', 'Reaper', 'Rebecca Catherine', 'Recoiless Gunner', 'Regina MacCready', 'Replacer Bishop', 'Replacer King', 'Replacer Knight', 'Replacer Queen', 'Revenant', 'Rhino', 'Rifleman', 'Rita Arsenico', 'Rivet', 'Rosaria le Friede', 'Roy Burnett', 'Ryan Ferrier', 'Scout', 'Lycoris', 'Seo Yoon', 'Serapel', 'Shena', 'Shepherd & Lurcher', 'Shieldman', 'Shim Somi', 'Shin Jia', 'Sigma', 'Swan Claire', 'Skia Crow', 'Sky Layfield', 'Edith Twins', 'Sniper', 'Sol Badguy', 'Sonya Bill', 'Sparrow', 'Han Sorim', 'Spencer', 'Spira', 'Stinger Gunner', 'Stronghold', 'Suppressor', 'Sweeper', 'Sylvia Lena Cooper', 'Tactical Transporter Deuce-and-a-Half', 'Tallie', 'Tarrasque', 'Terminator', 'Thaddeus Morgan', 'Titan', 'Tommy the Die-hard', 'Titan', 'UBGL Rifleman', 'Veronica', 'Gaeun', 'Warden', 'Woodpecker', 'Xiao Lin', 'Yamata no Orochi', 'Yang Hansol', 'Yanikka Shirokova', 'Yang Harim', 'Yen Xing Lanchester', 'Yoo Mina', 'Yuna Springfield', 'ZSU Shilka', 'Naielle Bluesteel', 'Bell Cranel', 'Ryu Lion', 'Ais Wallenstein', 'Solovey', 'Nibble', 'Lucia Ridge','Zena Bird']
    var unit_titles = ['States of One', 'States of One', 'States of One', 'States of One', 'States of One', 'Abyssal Ravage', 'ESPR', 'Fennec Fox', 'Aditya', 'Old Administration', 'Old Administration', 'Old Administration', 'Agent', 'Valentinus Monastery', 'Old Administration: Maze Division', 'Six Wings', 'Freedom Riders', 'Apex Jackal', 'Future-at-War', 'Zodiac Knights: Blue Shift', 'Special Hero Class', 'States of One', 'Avenger', 'Type: Siegfried', 'Cold Case', 'Stormbringer', 'Arhat', 'Minerva', 'Ace of Wings', 'Kresnik', 'Garguantia', 'Six Wings', 'Nehemoth', 'Tenured President', 'Asmodeus', 'Altergressive', 'Singularity', 'Final Phase', 'Type: Fenrir', 'Solar Codex', 'Future-at-War', 'Miracle Investigation Council 9', 'Best Mascot', 'Best Streamer', 'Miracle Investigation Council 9', 'Black Tide', 'Blue Blood', 'HRT Berry', 'Breakbeat', 'Administration Counter Academy', 'Steel Lane', 'Lancelot Frontier', 'Knights of Redemption', 'Elysium Philharmonic', 'Official Support', 'Black Tide', 'R7 Irregular Scouts', 'White Rabbit', 'Daymine Mining Team 4', 'HRT Berry', 'The Militia', 'The Gronia Department of National Security', 'Academy Student Council', 'Miracle Investigation Council 9', 'Knights of Redemption', 'Miracle Investigation Council 9', 'Future Strategy Department', 'The Iron Knight', 'Dark Seven', 'Horizon Finance', 'Suicide Squad', 'Delta Seven', 'OZ', 'Front Bay Sharks', 'Northern Union', 'R7 Irregular Scouts', 'ESPR', 'Academy Student Council', 'Jehuty Biotech', 'Prydwen Institution', 'Border Guards', 'Old Administration', 'Zodiac Knights: Blue Shift', 'ALT Squad', 'Gha&apos;agsheblah', 'Strega', 'Apex Predator', 'Expert Mercenary', 'Canary Squad', 'Zodiac Knights: Blue Shift', 'Fallen Hawk', 'Fallen Hawk', 'Freelancer', 'Full Moon', 'Alphatrix Innovation', 'HRT Berry', 'Galahad', 'Betatrix', 'Scavengers', 'Northern Union', 'Great Silence', 'Gremory&apos;s Bar', 'Northern Union', 'Griffin Rider', 'Fennec Fox', 'White Rabbit', 'Cronenworth Puppet Troupe', 'Nanahara Family Alliance', 'Nanahara Family Alliance', 'Hero Blossom', 'Hidden Challenger', 'Fenrir Squad', 'Freedom Riders', 'Horizon Finance', 'Steel Lane', 'Red Musician', 'Old Administration', 'Ignis Blade', 'Strega', 'Joint Investigation', 'Official Support', 'States of One', 'Scales of Juno', 'Delta Seven', 'Delta Seven', 'Mason Mercenary Office', 'Future-at-War', 'R7 Irregular Scouts', 'Subculture Research Club', 'Mason Mercenary Office', 'Fenrir Squad', 'Delta Seven: Pathfinder', 'Old Management Bureau: Yaksha Squadron', 'Special Hero Class', 'GUREN TYPE-08 ELEMENTS "SEITEN"', 'The Militia', 'Police SWAT 4', 'Delta Seven: Pathfinder', 'Kestrel', 'Alphatrix Innovation', 'Yeoksam Residents&apos; Association', 'ALT Squad', 'Kostroma', 'Kubera', 'Delta Seven', 'Canary Squad', 'ESPR', 'Platina Express', 'Strega', 'Frontier', 'Alphatrix Innovation', 'Six Wings', 'Freedom Riders', 'Fenrir Division', 'Police SWAT 4', 'The Militia', 'Zero', 'Northern Union', 'Successor', 'Flora Maid Service', 'Freedom Riders', 'OZ', 'Zodiac Knights: Blue Shift', 'Lonely Villainess', 'Jehuty Biotech', 'Knights of Redemption', 'Nightmare Realization', 'HRT Berry', 'Elysium Philharmonic', 'Flora Maid Service', 'Old Administration: Maze Division', 'Fennec Fox', 'Scavengers', 'Elysium Philharmonic', 'Delta Seven', 'Jellyfish Pirates', 'Frontier', 'Subculture Research Club', 'Academy Student Council', 'Post-War Administration Bureau', 'Demon-type C.O.', 'HRT Berry', 'Flora Maid Service', 'Stump of the Gelid Lands', 'Demon-type C.O.', 'Fennec Fox', 'Fenrir Division', 'Administration Counter Academy', 'Nanahara Family Alliance', 'Nanahara Family Alliance', 'Nanahara Family Alliance', 'Nanahara Family Alliance', 'Near Astraea', 'Nest Keeper', 'Gremory&apos;s Bar', 'Frontier', 'Fenrir Squad', 'Nanahara Family Alliance', 'Alphatrix Innovation', 'Successor', 'Orochinagi', 'Outlander', 'Scavengers', 'Charade', 'Fennec Fox', 'Daymine Mining Team 4', 'States of One', 'Elysium Philharmonic', 'Purple Mist', 'Illyria Commando Brigade', 'Alphatrix Innovation', 'Black Tide', 'Delta Seven: Pathfinder', 'Fennec Fox', 'ESPR', 'Replacer Syndicate', 'Replacer Syndicate', 'Replacer Syndicate', 'Replacer Syndicate', 'The Gronia Department of National Security', 'Steel Lane', 'Steel Lane', 'Horizon Finance', 'ESPR', 'Fallen Hawk', 'Prydwen Institution', 'Prydwen Institution', 'Black Tide', 'Secret Service', 'ALT Squad', 'Cronenworth Puppet Troupe', 'Elysium Philharmonic', 'The Elemental and the Beast', 'Steel Lane', 'Daymine Mining Team 4', 'Alphatrix Innovation', 'Future Strategy Department', 'Six Wings', 'OZ', 'Special Hero Class', 'The Sleeping Girl and the Yellow-billed Flock', 'Steel Lane', 'Flame of Corruption', 'Front Bay Sharks', 'Steel Lane', 'Special Force', 'Chamber', 'Demon-type C.O.', 'Fennec Fox', 'Black Tide', 'Steel Lane', 'Black Tide', 'Delta Seven', 'Steel Lane', 'Front Bay Sharks', 'Old Administration', 'Black Tide', 'Prydwen Institution', 'Future-at-War', 'Tommy and the Losers', 'Triaina Plan', 'Fennec Fox', 'Flora Maid Service', 'Volume Up!', 'Border Guards', 'Steel Lane', 'ALT Squad', 'The Fallen Plague God', 'Zodiac Knights: Blue Shift', 'Chamber', 'White Rabbit', 'Academy Student Council', 'Fenrir Squad', 'Strega', 'Fennec Fox', 'New Age', 'Rabbit&apos;s Foot', 'Gale Wind', 'Sword Princess','Sprouting Star', 'Irregular C.O.', 'Exorcist','Official Support']
   
    var unit_types = ['Mech', 'Mech', 'Mech', 'Mech', 'Mech', 'Counter', 'Soldier;C.O.', 'Soldier', 'Counter', 'Soldier', 'Soldier', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech', 'Counter', 'Counter', 'Soldier', 'Counter', 'Counter', 'Mech', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter;C.O.', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech', 'Counter', 'Counter', 'Mech', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech', 'Counter', 'Counter', 'Counter', 'Soldier', 'Mech', 'Mech', 'Counter', 'Counter;C.O.', 'Counter', 'Mech', 'Soldier', 'Counter', 'Counter', 'Soldier', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Soldier', 'Counter', 'Mech', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech;Soldier', 'Mech', 'Counter', 'Counter', 'Mech', 'Counter;Mech', 'Mech', 'Soldier', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech', 'Mech', 'Counter;Mech', 'Mech', 'Counter', 'Counter', 'Soldier', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Soldier', 'Mech', 'Soldier', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech', 'Soldier', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter;C.O.', 'Counter', 'Counter', 'Mech', 'Counter', 'Counter;C.O.', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Soldier', 'Counter;C.O.', 'Counter', 'Counter', 'Counter', 'Mech;C.O.', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Soldier', 'Mech;Soldier', 'Counter', 'Mech', 'Counter', 'Soldier', 'Counter;C.O.', 'Counter', 'Counter', 'Counter', 'Mech', 'Counter', 'Soldier', 'Counter', 'Counter;Replacer', 'Counter;Replacer', 'Counter;Replacer', 'Counter;Replacer', 'Soldier', 'Mech', 'Soldier', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Soldier', 'Counter', 'Counter', 'Counter', 'Counter;C.O.', 'Mech;C.O.', 'Soldier', 'Counter', 'Counter', 'Mech', 'Counter', 'Mech;Soldier', 'Counter', 'Counter', 'Soldier', 'Counter', 'Counter', 'Mech', 'Soldier', 'Soldier', 'Counter;C.O.', 'Soldier', 'Soldier', 'Soldier', 'Soldier', 'Counter', 'Mech', 'Counter', 'Mech', 'Soldier', 'Counter', 'Mech', 'Soldier', 'Mech', 'Soldier', 'Soldier', 'Counter', 'Soldier', 'Mech', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Mech', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter', 'Counter'];
    var unit_roles = ['Tower', 'Tower', 'Ranger', 'Ranger', 'Striker', 'Striker', 'Supporter', 'Sniper', 'Defender', 'Ranger', 'Defender', 'Striker', 'Sniper', 'Sniper', 'Striker', 'Sniper', 'Striker', 'Supporter', 'Ranger', 'Supporter', 'Sniper', 'Ranger', 'Sniper', 'Defender', 'Striker', 'Defender', 'Striker', 'Ranger', 'Ranger', 'Supporter', 'Ranger', 'Defender', 'Defender', 'Ranger', 'Sniper', 'Ranger', 'Supporter', 'Striker', 'Striker', 'Striker', 'Tower', 'Defender', 'Defender', 'Sniper', 'Ranger', 'Ranger', 'Ranger', 'Striker', 'Defender', 'Supporter', 'Sniper', 'Ranger', 'Defender', 'Supporter', 'Ranger', 'Striker', 'Defender', 'Ranger', 'Defender', 'Tower', 'Sniper', 'Ranger', 'Striker', 'Striker', 'Striker', 'Supporter', 'Ranger', 'Sniper', 'Supporter', 'Sniper', 'Striker', 'Defender', 'Sniper', 'Striker', 'Sniper', 'Ranger', 'Sniper', 'Tower', 'Striker', 'Ranger', 'Striker', 'Sniper', 'Striker', 'Striker', 'Striker', 'Supporter', 'Defender', 'Ranger', 'Defender', 'Defender', 'Ranger', 'Striker', 'Defender', 'Supporter', 'Tower', 'Ranger', 'Defender', 'Supporter', 'Striker', 'Siege', 'Defender', 'Supporter', 'Sniper', 'Supporter', 'Sniper', 'Ranger', 'Supporter', 'Striker', 'Sniper', 'Defender', 'Defender', 'Striker', 'Defender', 'Defender', 'Defender', 'Sniper', 'Striker', 'Defender', 'Striker', 'Ranger', 'Defender', 'Supporter', 'Striker', 'Sniper', 'Striker', 'Striker', 'Ranger', 'Striker', 'Sniper', 'Ranger', 'Ranger', 'Striker', 'Ranger', 'Defender', 'Striker', 'Defender', 'Ranger', 'Sniper', 'Sniper', 'Sniper', 'Defender', 'Ranger', 'Ranger', 'Ranger', 'Ranger', 'Ranger', 'Ranger', 'Tower', 'Supporter', 'Defender', 'Supporter', 'Supporter', 'Supporter', 'Striker', 'Defender', 'Ranger', 'Supporter', 'Striker', 'Defender', 'Supporter', 'Striker', 'Striker', 'Striker', 'Supporter', 'Sniper', 'Ranger', 'Supporter', 'Siege', 'Defender', 'Sniper', 'Sniper', 'Striker', 'Supporter', 'Tower', 'Tower', 'Supporter', 'Sniper', 'Striker', 'Supporter', 'Ranger', 'Ranger', 'Sniper', 'Defender', 'Sniper', 'Defender', 'Tower', 'Ranger', 'Striker', 'Striker', 'Supporter', 'Supporter', 'Ranger', 'Striker', 'Tower', 'Ranger', 'Striker', 'Sniper', 'Defender', 'Striker', 'Striker', 'Striker', 'Ranger', 'Defender', 'Striker', 'Siege', 'Striker', 'Ranger', 'Ranger', 'Supporter', 'Striker', 'Tower', 'Sniper', 'Striker', 'Ranger', 'Supporter', 'Striker', 'Defender', 'Defender', 'Sniper', 'Supporter', 'Siege', 'Ranger', 'Supporter', 'Ranger', 'Ranger', 'Striker', 'Defender', 'Ranger', 'Striker', 'Ranger', 'Defender', 'Sniper', 'Striker', 'Defender', 'Supporter', 'Ranger', 'Tower', 'Supporter', 'Ranger', 'Supporter', 'Tower', 'Sniper', 'Defender', 'Supporter', 'Ranger', 'Ranger', 'Supporter', 'Striker', 'Sniper', 'Defender', 'Striker', 'Sniper', 'Sniper', 'Tower', 'Sniper', 'Ranger', 'Striker', 'Ranger', 'Striker', 'Defender', 'Striker', 'Ranger', 'Striker', 'Ranger', 'Sniper', 'Striker', 'Sniper', 'Ranger', 'Ranger', 'Striker', 'Supporter', 'Striker', 'Ranger', 'Ranger', 'Ranger', 'Defender', 'Striker', 'Supporter', 'Striker', 'Ranger', 'Ranger', 'Striker', 'Striker'];
    var unit_mtypes = ['Air', 'Air', 'Air', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Air', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Air', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground', 'Ground','Ground','Ground','Ground','Ground'];
   
    autocomplete(document.getElementById("searchID"), unit_names);
autocompleteTarget(document.getElementById("searchIDtarget"), unit_names);


$( "#unit_cdmgRes_input" ).on( "input", function() {
    
    console.log("input value; = " + $( "#unit_cdmgRes_input" ).val())
  });
  $( "#unit_cat1Res_input" ).on( "input", function() {
    
    console.log("input value; = " + $( "#unit_cat1Res_input" ).val())
  });
  $( "#unit_cat2Res_input" ).on( "input", function() {
    
    console.log("input value; = " + $( "#unit_cat2Res_input" ).val())
  });



$( "#enemy_hit_input" ).on( "input", function() {
    
    console.log("input value; = " + $( "#enemy_hit_input" ).val())
  });
  $( "#enemy_crit_input" ).on( "input", function() {
    
    console.log("input value; = " + $( "#enemy_crit_input" ).val())
  });
  $( "#enemy_cdmg_input" ).on( "input", function() {
    
    console.log("input value; = " + $( "#enemy_cdmg_input" ).val())
  });


  $('#selectEnemyType').on("change",function() {

    target_dummy_data[9] = $(this).val();


    var unit_stats = $('#searched-unitID-values').attr('value').split(",");
    UpdateUnitAndTarget(unit_stats);
    CalcUnitDMG()
  });
  
  $('#selectEnemyClass').on("change",function() {

    target_dummy_data[10]  = $(this).val();


    var unit_stats = $('#searched-unitID-values').attr('value').split(",");
    UpdateUnitAndTarget(unit_stats);
    CalcUnitDMG()
  });
  
  $('#selectMovementType').on("change",function() {

    target_dummy_data[11]  = $(this).val();


    var unit_stats = $('#searched-unitID-values').attr('value').split(",");
    UpdateUnitAndTarget(unit_stats);
    CalcUnitDMG()
  });
  
  /* $('#selectDistance').on("change",function() {

    enemy_distance  = $(this).val()

    console.log("input value = " + $(this).val())
  }); */

  $('#btn-setTargetAsDummy').on("change",function() { 

    if (this.checked === true) {
      ifSelectTargetDummy = true;
      $('#searchIDtarget').prop('disabled', true);
      //$('#searchIDtarget').val('')
      
      $('#searchIDtarget').attr('placeholder','Disabled input');
      
    console.log('!_t yes');
    $('#target_extra_stats_dropdown').hide();
    $('#dummy_extra_stats_dropdown').show();
    $('#dummy_BuffList_display').show();
    $('#target_BuffList_display').hide();
if (targetIsUpdated) {
  UpdateUnitAndTarget(total_unit_data);
    CalcUnitDMG()
}
    
    } else {
      $('#searchIDtarget').prop('disabled', false);
      
      $('#searchIDtarget').attr('placeholder','Search target');
      ifSelectTargetDummy = false;
     // $('#searchIDtarget').val('')
    console.log('!_t no');
    $('#dummy_extra_stats_dropdown').hide();
    $('#target_extra_stats_dropdown').show();
    $('#dummy_BuffList_display').hide();
    $('#target_BuffList_display').show();
    if (targetIsUpdated) {
      UpdateUnitAndTarget(total_unit_data);
        CalcUnitDMG()
    }
    }


  });



/*   const chp_range_events = ['click','mousemove', 'touchmove']

$.each(chp_range_events, function(k,v) {
  
}); */

$('#target-current_hp_range').on('change input', function() {
  enemy_remaining_hp_percent = Number($('#target-current_hp_range').val())/100
  $('#target-current_hp').text('Current HP: ' + Math.floor(enemy_HP*enemy_remaining_hp_percent) + ' ('+Math.floor(enemy_remaining_hp_percent*100)+'%)');
});

$('#target-current_hp_range').on('change',function(){
  var unit_stats = $('#searched-unitID-values').attr('value').split(",");
        UpdateUnitAndTarget(unit_stats);
        CalcUnitDMG()
});

$('#unit-current_hp_range').on('change input', function() {
  unit_remaining_hp_percent = Number($('#unit-current_hp_range').val())/100
  $('#unit-current_hp').text('Current HP: ' + Math.floor(unit_hp*unit_remaining_hp_percent) + ' ('+Math.floor(unit_remaining_hp_percent*100)+'%)');
});

$('#unit-current_hp_range').on('change',function(){
  var unit_stats = $('#searched-unitID-values').attr('value').split(",");
      UpdateUnitAndTarget(unit_stats);
      CalcUnitDMG()
});
$('#range-melee-distance_partial').on('change input', function() {

  var rangeVal = $('#range-melee-distance_partial').val();
  
  
  distance_to_target_frequency_ranged = Number(rangeVal)/100
  distance_to_target_frequency_melee = 1 + Number(rangeVal*(-1))/100

  
  $('#range-melee-distance_partial-value').text(Math.round((distance_to_target_frequency_melee+ Number.EPSILON)*100) + '% / ' + Math.round((distance_to_target_frequency_ranged + Number.EPSILON)*100) + '%');
});

$('#range-melee-distance_partial').on('change',function(){
  var unit_stats = $('#searched-unitID-values').attr('value').split(",");
        UpdateUnitAndTarget(unit_stats);
        CalcUnitDMG()
});


$('#deleteAllDataForCompare').on('click',function() {
  if (confirm('This will delete all saved loadouts from your local storage. \nAre you sure? ')) {
    localStorage.clear();
    $('#compareUnitsModal .modal-body .unit_container .list-group-item').remove();
    if ($('#compareUnitsModal .modal-body .unit_container .list-group-item').length === 0) {
      $('#deleteAllDataForCompare').prop('hidden', true);
    }
  }
});



  $('#setCurrentToCompare').on('click',function() {

    let gearIcUnit = '<div class="gear-containers"> <div class="equipment-slot_tooltip" style="background-image: url(&quot;'+ Weapon.eqIcon +'&quot;)">'+(Weapon.eqSet !== 0 ? '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ Weapon.eqSet +'.png" alt="">': "") + '</img>'+'</div>  <div class="equipment-slot_tooltip" style="background-image: url(&quot;'+ Armor.eqIcon +'&quot;)">'+(Armor.eqSet !== 0 ? '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ Armor.eqSet +'.png" alt="">': "") + '</div>  <div class="equipment-slot_tooltip" style="background-image: url(&quot;'+ Accessory1.eqIcon +'&quot;)">'+(Accessory1.eqSet !== 0 ? '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ Accessory1.eqSet +'.png" alt="">': "") + '</div>  <div class="equipment-slot_tooltip" style="background-image: url(&quot;'+ Accessory2.eqIcon +'&quot;)">'+(Accessory2.eqSet !== 0 ? '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ Accessory2.eqSet +'.png" alt="">': "") + '</div> </div>';
    let gearIcTarget = '<div class="gear-containers"> <div class="equipment-slot_tooltip" style="background-image: url(&quot;'+ enemy_Weapon.eqIcon +'&quot;)">'+(enemy_Weapon.eqSet !== 0 ? '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ enemy_Weapon.eqSet +'.png" alt="">': "") + '</div>  <div class="equipment-slot_tooltip" style="background-image: url(&quot;'+ enemy_Armor.eqIcon +'&quot;)">'+(enemy_Armor.eqSet !== 0 ? '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ enemy_Armor.eqSet +'.png" alt="">': "") + '</div> <div class="equipment-slot_tooltip" style="background-image: url(&quot;'+ enemy_Accessory1.eqIcon +'&quot;)">'+(enemy_Accessory1.eqSet !== 0 ? '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ enemy_Accessory1.eqSet +'.png" alt="">': "") + '</div> <div class="equipment-slot_tooltip" style="background-image: url(&quot;'+ enemy_Accessory2.eqIcon +'&quot;)">'+(enemy_Accessory2.eqSet !== 0 ? '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ enemy_Accessory2.eqSet +'.png" alt="">': "") + '</div> </div>';
    ConfirmDialog("<b>" + total_unit_data[0] + " " + total_unit_data[1] + " - Lv. " + UnitLevel  +  " </b>"  + '<div class="saveLoadoutConfirmImg">'+total_unit_data[8] + "</div><br />"+gearIcUnit+ "<b><br />" + (ifSelectTargetDummy ? "":(total_target_data[0] ?? '')) + " " + (ifSelectTargetDummy ? "Target Dummy":(total_target_data[1] ?? '')) + " - Lv. " + (ifSelectTargetDummy ? "?":TargetLevel)+ "</b>" + '<div class="saveLoadoutConfirmImg">'+total_target_data[8] + "</div><br />" + (ifSelectTargetDummy ? "":gearIcTarget),function() {
      $('#compareUnitsModal').modal('show');
    if (localStorageAvailable) {
      var fcId = $('#compareUnitsModal .modal-body .unit_container .list-group-item').length;
      var emptyId = 0;
      var usedIds = [];
      for (let i = 0; i < fcId; i++) {
        usedIds[i] = Number($('#compareUnitsModal .modal-body .unit_container .list-group-item').eq(i).attr('id').split("-")[1]);
      }

      usedIds = usedIds.sort(sortNumber);
     /*  while (((localStorage.getItem('localStorageData_compare_units'+emptyId) !== null) && (localStorage.getItem('localStorageData_tooltip_gear'+emptyId) !== null) && (localStorage.getItem('gearFullDataForCompare'+emptyId) !== null)) || emptyId === 6) {
        emptyId++
      } */

        console.log('usedIds')
        console.log(usedIds)
        console.log(usedIds.length)
      for (let i = 0, n = usedIds.length; i < n; i++) {
        if (usedIds[i] === emptyId) {
        emptyId++
        }
      }
    
    
    if (fcId < LoadoutLimit) {
      var tt_title
      var tt_name
      
      if (ifSelectTargetDummy) {
        tt_title = target_dummy_data[0]; 
        tt_name = target_dummy_data[1]; 
      } else {
        tt_title = total_target_data[0]; 
        tt_name = total_target_data[1]; 
      }
      var sau = [total_unit_data[0],total_unit_data[1],$('#seachedUnit_body img').attr('src'),'',tt_title,tt_name,$('#seachedTarget_body img').attr('src'),'','','',unit_stats_to_save,target_stats_to_save,unit_extra_bonus_stats,target_extra_bonus_stats,total_unit_data,Unit_dps_stats,total_gear_data_unit,total_target_data,$('#gearData_enemy').html(),ifSelectTargetDummy,$('#range-melee-distance_partial').val(),$('#target-current_hp_range').val(),dummy_extra_bonus_stats,targetIsUpdated,target_dummy_data,unit_mainAttack_selected,dTableCompare_values,UnitLevel,TargetLevel,saveToUrl()];
      var sGear = [Weapon.eqIcon,Weapon.eqSet,Armor.eqIcon,Armor.eqSet,Accessory1.eqIcon,Accessory1.eqSet,Accessory2.eqIcon,Accessory2.eqSet,enemy_Weapon.eqIcon,enemy_Weapon.eqSet,enemy_Armor.eqIcon,enemy_Armor.eqSet,enemy_Accessory1.eqIcon,enemy_Accessory1.eqSet,enemy_Accessory2.eqIcon,enemy_Accessory2.eqSet];
      for (let i = 0, n = (unit_stats_to_save.length)/2; i < n; i++) {
        if (i<6) {
          sau[3] += unit_stats_to_save[i]+': '+ unit_stats_to_save[n+i] +'<br />';
        } else {
          if (['EHP','Final EHP','DPS','HPS','BPS'].some((t) => t === unit_stats_to_save[i])) {
            sau[3] += unit_stats_to_save[i]+': '+ unit_stats_to_save[n+i] +'<br />';
          } else {
            sau[3] += unit_stats_to_save[i]+': '+ (unit_stats_to_save[n+i]*100).toFixed(1) +'% <br />';
          }
            
        }
        
    }
  
    for (let i = 0, n = (target_stats_to_save.length)/2; i < n; i++) {
        if (i<6) {
          sau[7] += target_stats_to_save[i] +': '+ target_stats_to_save[n+i] +'<br />';
        } else {
          if (['EHP','Final EHP','Durability','Healing','Barrier'].some((t) => t === target_stats_to_save[i])) {
            sau[7] += target_stats_to_save[i]+': '+ target_stats_to_save[n+i] +'<br />';
          } else {
            sau[7] += target_stats_to_save[i]+': '+ (target_stats_to_save[n+i]*100).toFixed(1) +'% <br />';
          }
          
        }
    }
  
    for (let i = 0, n = sGear.length; i < n; i+=2) {
      if (sGear[i] !== 0) {
        sGear[i] = 'style="background-image: url(&quot;'+ sGear[i] +'&quot;);"';
      } else {
        sGear[i] = ''
      }
      if (sGear[i+1] !== 0) {
        sGear[i+1] = '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ sGear[i+1] +'.png" alt="">'
      } else {
        sGear[i+1] = '';
      }
    }
  
    var gearSaveData = ['','','','','','','',''];
  
    if ($('#WeaponContainer').attr('isConfirmed') == "true") {
      gearSaveData[0] = Weapon.getAllValues();
    }
    if ($('#ArmorContainer').attr('isConfirmed') == "true") {
      gearSaveData[1] = Armor.getAllValues();
    }
    if ($('#Accessory1Container').attr('isConfirmed') == "true") {
      gearSaveData[2] = Accessory1.getAllValues();
    }
    if ($('#Accessory2Container').attr('isConfirmed') == "true") {
      gearSaveData[3] = Accessory2.getAllValues();
    }
    //
    if ($('#WeaponContainer_enemy').attr('isConfirmed') == "true") {
      gearSaveData[4] = enemy_Weapon.getAllValues();
    }
    if ($('#ArmorContainer_enemy').attr('isConfirmed') == "true") {
      gearSaveData[5] = enemy_Armor.getAllValues();
    }
    if ($('#Accessory1Container_enemy').attr('isConfirmed') == "true") {
      gearSaveData[6] = enemy_Accessory1.getAllValues();
    }
    if ($('#Accessory2Container_enemy').attr('isConfirmed') == "true") {
      gearSaveData[7] = enemy_Accessory2.getAllValues();
    }
  
    //localStorage.setItem(fcId, JSON.stringify(gearSaveData));
  
    console.log('saving: ' + fcId)
    console.log('emptyId: ' + emptyId)
  
  
    //localStorage.setItem('units_load_order')

    
  
      UpdateCompareUnitsModal(sau,sGear,gearSaveData,false,false,emptyId)
    } else {
      console.log('can\'t save more, limit');
    }
  }
},"Save this loadout?");
  });

  //CreateTooltipForAnything($('#test1'),'123-123');

  

function UpdateUnitFromLocalStorage(unit_data, LS_unit_dps_stats, LS_total_gear_data_unit) {
  $('#searched-unitID-values').attr('value',unit_data);

  total_unit_data = unit_data;
  Unit_dps_stats = LS_unit_dps_stats;
  total_gear_data_unit = LS_total_gear_data_unit;

  active_skills_exclude = [];

  $("#unit-icon").html(unit_data[8])
  $("#unit-title").html(unit_data[0])
  $("#unit-name").html(unit_data[1])
  $("#unit-hp").html(unit_data[2])
  $("#unit-atk").html(unit_data[3])
  $("#unit-def").html(unit_data[4])
  $("#unit-crit").html(unit_data[5])
  $("#unit-hit").html(unit_data[6])
  $("#unit-eva").html(unit_data[7])

  let sc_growthU = unit_stats_growth_pve.indexOf(total_unit_data[0] + ' ' + total_unit_data[1]);

  for (let i = 1; i < 7; i++) {
    let rd = i > 3 ? 1:0.1;
     
    UnitStatGrowth[i-1] = unit_stats_growth_pve[sc_growthU+i]*rd;
    UnitStatGrowth_PvE[i-1] = unit_stats_growth_pve[sc_growthU+i];

  }
  unit_hp = unit_data[2];
  unit_atk = unit_data[3]
  unit_def = unit_data[4]
  DEF_pc = unit_def/(unit_def+1000);
  unit_crit = unit_data[5]
  CRIT_pc = unit_crit/(unit_crit+1000);
  unit_hit = unit_data[6]
  HIT_pc = unit_hit/(unit_hit+1500);
  unit_eva = unit_data[7]
  EVA_pc = unit_eva/(unit_eva+800);

  unit_mainAttack_selected = [0];

  currentUnitType = unit_data[9].split(';')[0];

  $('#gearData').html(LS_total_gear_data_unit);
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
        UpdUnitEE('GEAR_MAIN_STATS_VALUES_T7_unit_EE',undefined,(total_unit_data[0] + ' ' + total_unit_data[1]))
        
}

function UpdateTargetFromLocalStorage(target_data, LS_total_gear_data_target, LS_currhp_range,LS_target_dps_stats) {
  if (target_data !== '') {
    $('#searched-targetID-values').attr('value',target_data);



    total_target_data = target_data;
    total_gear_data_target = LS_total_gear_data_target;
    Target_dps_stats = LS_target_dps_stats;
  
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
    
    
    
          let sc_growthT = unit_stats_growth_pve.indexOf(total_target_data[0] + ' ' + total_target_data[1]);
          for (let i = 1; i < 7; i++) {
            let rd = i > 3 ? 1:0.1;
            TargetStatGrowth[i-1] = unit_stats_growth_pve[sc_growthT+i]*rd;
        
          }
    
           target_hp = target_data[2];
           target_atk = target_data[3]
           target_def = target_data[4]
           target_DEF_pc = target_def/(target_def+1000);
           target_crit = target_data[5]
           target_CRIT_pc = target_crit/(target_crit+1000);
           target_hit = target_data[6]
           target_HIT_pc = target_hit/(target_hit+1500);
           target_eva = target_data[7]
           target_EVA_pc = target_eva/(target_eva+800);
  
    currentTargetType = target_data[9].split(';')[0];
  
    $('#gearData_enemy').html(LS_total_gear_data_target);
          switch (currentTargetType) {
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
          UpdUnitEE('GEAR_MAIN_STATS_VALUES_T7_target_EE',undefined,(total_target_data[0] + ' ' + total_target_data[1]))
  }

  $('#target-current_hp_range').val(Number(LS_currhp_range));
    enemy_remaining_hp_percent = Number($('#target-current_hp_range').val())/100;
  $('#target-current_hp').text('Current HP: ' + Math.floor(enemy_HP*enemy_remaining_hp_percent) + ' ('+Math.floor(enemy_remaining_hp_percent*100)+'%)');
  
}

$('#ResetSessionPageBtn').on('click',function() {
  localStorage.removeItem('SessionLocalData');
  location.reload()
})



SetScrollable($('.ComparingSelectedUnitsModal-main'));


CreateTooltipForAnything($('#target-current_hp'),'<div style="width: 12rem;">This only appears if unit can do damage based on target\'s current % health</div>');


$('#label-hps_h_cd').hide();
$('#label-hps_h_amt').hide();

$('#label-hps_b_cd').hide();
$('#label-hps_b_amt').hide();

$('#HPS_Healing_CD-Input').hide();
    $('#HPS_Healing_Amount-Input').hide();
    $('#HPS_Healing_Confirm-btn').hide();

    $('#healing_hps_cd').hide();
    $('#healing_hps_amount').hide();
    $('#healing_hps_result').hide();

    $('#HPS_Barrier_CD-Input').hide();
    $('#HPS_Barrier_Amount-Input').hide();
    $('#HPS_Barrier_Confirm-btn').hide();

    $('#barrier_hps_cd').hide();
    $('#barrier_hps_amount').hide();
    $('#barrier_hps_result').hide();
    



$('#HPS_Healing-Checkbox').on('change',function() {
  if (this.checked === true) {
    $('#label-hps_h_cd').show();
    $('#label-hps_h_amt').show();
    $('#HPS_Healing_CD-Input').show();
    $('#HPS_Healing_Amount-Input').show();
    $('#HPS_Healing_Confirm-btn').show();

    $('#healing_hps_cd').show();
    $('#healing_hps_amount').show();
    $('#healing_hps_result').show();
  } else {
    $('#label-hps_h_cd').hide();
    $('#label-hps_h_amt').hide();
    $('#HPS_Healing_CD-Input').hide();
    $('#HPS_Healing_Amount-Input').hide();
    $('#HPS_Healing_Confirm-btn').hide();

    $('#healing_hps_cd').hide();
    $('#healing_hps_amount').hide();
    $('#healing_hps_result').hide();
  }
 
  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG();
 
});

$('#HPS_Barrier-Checkbox').on('change',function() {
  if (this.checked === true) {
    $('#label-hps_b_cd').show();
    $('#label-hps_b_amt').show();
    $('#HPS_Barrier_CD-Input').show();
    $('#HPS_Barrier_Amount-Input').show();
    $('#HPS_Barrier_Confirm-btn').show();

    $('#barrier_hps_cd').show();
    $('#barrier_hps_amount').show();
    $('#barrier_hps_result').show();
  } else {
    $('#label-hps_b_cd').hide();
    $('#label-hps_b_amt').hide();
    $('#HPS_Barrier_CD-Input').hide();
    $('#HPS_Barrier_Amount-Input').hide();
    $('#HPS_Barrier_Confirm-btn').hide();

    $('#barrier_hps_cd').hide();
    $('#barrier_hps_amount').hide();
    $('#barrier_hps_result').hide();
  }
 
  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG();
});



$('#HPS_Healing_Confirm-btn').on('click',function() {
  var HpsAmount;
var HpsResult;
var HpsCD;

if ($('#HPS_Healing_Amount-Input').val() === '') {
  HpsAmount = 0;
} else {
  HpsAmount = Number($('#HPS_Healing_Amount-Input').val())/100;
}
  

  UpdateUnitAndTarget(total_unit_data);
  HpsResult = Number($('#target-hp').attr('subvalue'))*(HpsAmount*(1+target_bonus_stats[19]));
  $('#healing_hps_amount span').text(Math.round(HpsResult));
  if ($('#HPS_Healing_CD-Input').val() != 0) {
    HpsCD = $('#HPS_Healing_CD-Input').val();
    $('#healing_hps_cd span').text(Math.round(HpsCD));
    $('#healing_hps_result span').text(Math.round(HpsResult/HpsCD));
  } else {
    $('#healing_hps_result span').text('0');
  }
  
  CalcUnitDMG();

});

$('#HPS_Barrier_Confirm-btn').on('click',function() {
  var HpsAmount;
var HpsResult;
var HpsCD;

if ($('#HPS_Barrier_Amount-Input').val() === '') {
  HpsAmount = 0;
} else {
  HpsAmount = Number($('#HPS_Barrier_Amount-Input').val())/100;
}
  

  UpdateUnitAndTarget(total_unit_data);
  HpsResult = Number($('#target-hp').attr('subvalue'))*(HpsAmount*(1+target_bonus_stats[62]));
  $('#barrier_hps_amount span').text(Math.round(HpsResult));
  if ($('#HPS_Barrier_CD-Input').val() != 0) {
    HpsCD = $('#HPS_Barrier_CD-Input').val();
    $('#barrier_hps_cd span').text(Math.round(HpsCD));
    $('#barrier_hps_result span').text(Math.round(HpsResult/HpsCD));
  } else {
    $('#barrier_hps_result span').text('0');
  }
  
  CalcUnitDMG();

});





//localStorage.clear();

//localStorage.getItem('localStorageData_unit0')

/* var variables = ""
for (var name in this)
    variables += name + ' '; */ // this checks all global variable names (even if undefined)




//$('.equipment-slot').addClass('eqSlot_bg');


 /* $.each($('.equipment-slot'), function() {
  $(this).on({
    mouseenter: function () {
      $(this).css('background-image',$(this).css('background-image') + ',url("cs_icons/SSR_BG.jpeg")');
    },
    mouseleave: function () {
      $(this).css('background-image',$(this).css('background-image').split(',')[0]);
    }
});
});
 */ // adds background image behind another background image


 CreateTooltipForAnything($('#Page_new_stuff'),'<hr>Bell Cranel <img src="cs_icons/Icon_Bell Cranel_Rabbit&apos;s Foot.png" height="34px" width="34px" alt=""><br /><hr>Ryu Lion <img src="cs_icons/Icon_Ryu Lion_Gale Wind.png" height="34px" width="34px" alt=""><br /><hr>Ais Wallenstein <img src="cs_icons/Icon_Ais Wallenstein_Sword Princess.png" height="34px" width="34px" alt=""><hr><div class="fw-bold">Units\' levels</div><small>You can change level of a unit (1-120)</small><br /><hr><div class="fw-bold">PvE Toggle</div><small>Toggle target dummy changes stats for the attacking unit to it\'s PvE scaling variant</small>','<div class="text-center fw-bold">Added units</div>','','bot','12rem')
 
 for (let i = 0, n = BUFF_STATS_LIST.length; i < n; i++) {
  if (i >= 65 && i < 68) {
    
  } else {
    $('#applyBuffModal-body').append('<div class="form-check"> <input class="form-check-input" type="checkbox" value="'+BUFF_STATS_LIST[i]+'" id="applyBuffCheck_'+i+'"> <label class="form-check-label" for="applyBuffCheck_'+i+'">'+BUFF_STATS_LIST[i]+'</label> </div>');

  }
  
 }
 

 $('#applyBuffModal_confirm-btn').on('click',function() {
  let cel = $('#applyBuffModal-body .form-check input:checked')
  $('#configBuffModal_sbuffs').html('')
  $('#configBuffModal_sbconf').html('')
$.each(cel, function(index) {
  $('#configBuffModal_sbuffs').append('<span id="celcfg_'+index+'" class="badge bg-secondary" value="'+$(this).attr('id').split('_')[1]+'" subvalue="0">'+$(this).val()+'</span> ')
  if (!(Number($(this).attr('id').split('_')[1]) >= BONUS_STATS_LIST.length)) { 
    $('#configBuffModal_sbconf').append('<div class="input-group mb-2"> <span class="input-group-text">'+$(this).val()+'</span> <input id="bcfg-input_'+index+'" type="number" class="form-control" placeholder="Amount" value="0"> </div>');
  
  $('#bcfg-input_'+index).on('input',function() {
  $('#celcfg_'+index).attr('subvalue',$(this).val());
})
}
})



if (cel.length > 0) {
  $('#applyBuffModal').modal('hide'); 
  $('#configBuffModal').modal('show'); 
}

 });

 $('#confirm_btn-configBuffModal').on('click',function() {

  var buffApplyTo = $('#applyBuffModal_confirm-btn').attr('subvalue');

  if ($('#configBuffModal').attr('bconf-for')==='new') {
    
  var cbm_cd = $('#configBuffModal_CD-input');
  var cbm_d = $('#configBuffModal_Duration-input');
  var cbm_name = $('#buffName-input').val();

  var fcId = $('#' + buffApplyTo + 'dropdown-buffList li').length;
    var emptyId = 0;
    var usedIds = [];
    for (let i = 0; i < fcId; i++) {
      const idNum = $('#' + buffApplyTo + 'dropdown-buffList li').eq(i).attr('id').split("_");
      usedIds[i] = Number(idNum[idNum.length-1]);
    }

    usedIds = usedIds.sort(sortNumber);

    for (let i = 0, n = usedIds.length; i < n; i++) {
      if (usedIds.includes(emptyId)) {
      emptyId++
      usedIds.pop(i);
      }
    }
    console.log('empty id  = ')
    console.log(buffApplyTo);
    console.log(emptyId);
    console.log(usedIds);

  if (cbm_name == '') {
    cbm_name = 'Buff_'+emptyId;
  }
  if ((cbm_cd.val() != '') && (cbm_d.val() != '')) {
    
  
  var buffStats = '';
  var buffStatsValues = '';
  var infoTT = '';
  $.each($('#configBuffModal_sbuffs span'), function() {
    if (!(Number($(this).attr('id').split('_')[1]) >= BONUS_STATS_LIST.length)) {
      buffStats += $(this).attr('value') + ',';
      buffStatsValues += $(this).attr('subvalue') + ',';
    }
    infoTT += '<span class="badge bg-secondary">'+BUFF_STATS_LIST[Number($(this).attr('value'))]+'</span>';
    
   
  });
  $('#' + buffApplyTo + 'dropdown-buffList-container').append('<li id="'+buffApplyTo + 'buff-apply_'+emptyId+'" class="dropdown-item" value="'+buffStats.slice(0,-1)+'" subvalue="'+buffStatsValues.slice(0,-1)+'" value_bcd="'+cbm_cd.val()+'" value_bd="'+cbm_d.val()+'">'+cbm_name+' <svg id="'+buffApplyTo+'tt_buffapply_'+emptyId+'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/> </svg></li>');

  
  $('#'+buffApplyTo + 'buff-apply_'+emptyId).off('.btcf');
  $('#'+buffApplyTo + 'buff-apply_'+emptyId).on('click.btcf',function() {
    $('#applyBuffModal_confirm-btn').attr('subvalue',buffApplyTo)
    $('#applyBuffModal_confirm-btn').attr('subvalue',buffApplyTo)
    $('#configBuffModal').attr('bconf-for','#'+buffApplyTo + 'buff-apply_'+emptyId);
    $('#configBuffModal_sbuffs').html('');
    $('#configBuffModal_sbconf').html('');
    var bsl = buffStats.slice(0,-1).split(',');
    var bslv = buffStatsValues.slice(0,-1).split(',');
    
    for (let i = 0, n = bsl.length; i < n; i++) {
      $('#configBuffModal_sbuffs').append('<span id="celcfg_'+i+'" class="badge bg-secondary" value="'+bsl[i]+'" subvalue="'+bslv[i]+'">'+BUFF_STATS_LIST[Number(bsl[i])]+'</span> ');
      if (!(Number($('#celcfg_'+i).attr('value')) >= BONUS_STATS_LIST.length)) {  
      $('#configBuffModal_sbconf').append('<div class="input-group mb-2"> <span class="input-group-text">'+BONUS_STATS_LIST[Number(bsl[i])]+'</span> <input id="bcfg-input_'+i+'" type="number" class="form-control" placeholder="Amount" value="'+bslv[i]+'"> </div>');
      
      $('#bcfg-input_'+i).on('input',function() {
        $('#celcfg_'+i).attr('subvalue',$(this).val());
      })
    }
    }
    
    $('#buffName-input').val(cbm_name);
    $('#configBuffModal_CD-input').val($('#'+buffApplyTo + 'buff-apply_'+emptyId).attr('value_bcd'));
    $('#configBuffModal_Duration-input').val($('#'+buffApplyTo + 'buff-apply_'+emptyId).attr('value_bd'));
    $('#delete_btn-configBuffModal').prop('hidden',false);
    $('#back_btn-configBuffModal').prop('hidden',true);
    $('#configBuffModalLabel').text('Configure Buff - '+cbm_name);
    $('#configBuffModal').modal('show');
    
  });
  $('#configBuffModal').attr('bconf-for','#'+buffApplyTo + 'buff-apply_'+emptyId)
  $('#buffName-input').val(cbm_name)
  $('#' + buffApplyTo + 'dropdown-buffList_empty').hide();
  $('#configBuffModal').modal('hide');
  CreateTooltipForAnything($('#'+buffApplyTo+'tt_buffapply_'+emptyId),'<div style="max-width: 10rem;">Buffs: '+infoTT+'</div>','CD: '+cbm_cd.val()+' sec, Duration: '+cbm_d.val() + ' sec','Uptime: ' + (Number(cbm_cd.val()) < Number(cbm_d.val()) ? ' Permanent':(1/(Number(cbm_cd.val())/Number(cbm_d.val()))*Number(cbm_d.val())).toFixed(2) + ' sec'))
  
  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG();
} else {
  cbm_cd.attr('placeholder','Enter value!');
  cbm_d.attr('placeholder','Enter value!');
}
  } else {
    var btnconf = $('#configBuffModal').attr('bconf-for');
  var cbm_cd = $('#configBuffModal_CD-input');
  var cbm_d = $('#configBuffModal_Duration-input');
  var cbm_name = $('#buffName-input').val();
  

    var emptyId = $($('#configBuffModal').attr('bconf-for'));
  if (cbm_name == '') {
    cbm_name = emptyId.text();
  }
  if ((cbm_cd.val() != '') && (cbm_d.val() != '')) {
    
  
  var buffStats = '';
  var buffStatsValues = '';
  var infoTT = ''
  $.each($('#configBuffModal_sbuffs span'), function() {
    if (!(Number($(this).attr('id').split('_')[1]) >= BONUS_STATS_LIST.length)) {
      buffStats += $(this).attr('value') + ',';
      buffStatsValues += $(this).attr('subvalue') + ',';
    }
    
    infoTT += '<span class="badge bg-secondary">'+BUFF_STATS_LIST[Number($(this).attr('value'))]+'</span>';
  });
  emptyId.text(cbm_name);
  emptyId.append(' <svg id="'+buffApplyTo+'tt_buffapply_'+(emptyId.attr('id').split("_")[1])+'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/> </svg>')
  $(btnconf).attr('value',buffStats.slice(0,-1));
  $(btnconf).attr('subvalue',buffStatsValues.slice(0,-1));
  $(btnconf).attr('value_bcd',cbm_cd.val());
  $(btnconf).attr('value_bd',cbm_d.val());

  $(btnconf).off('.btcf');
  $(btnconf).on('click.btcf',function() {
    $('#configBuffModal').attr('bconf-for',btnconf);
    $('#configBuffModal_sbuffs').html('');
    $('#configBuffModal_sbconf').html('');
    var bsl = buffStats.slice(0,-1).split(',');
    var bslv = buffStatsValues.slice(0,-1).split(',');
    for (let i = 0, n = bsl.length; i < n; i++) {
      $('#configBuffModal_sbuffs').append('<span id="celcfg_'+i+'" class="badge bg-secondary" value="'+bsl[i]+'" subvalue="'+bslv[i]+'">'+BUFF_STATS_LIST[Number(bsl[i])]+'</span> ');
      if (!(Number($('#celcfg_'+i).attr('value')) >= BONUS_STATS_LIST.length)) {  
      $('#configBuffModal_sbconf').append('<div class="input-group mb-2"> <span class="input-group-text">'+BONUS_STATS_LIST[Number(bsl[i])]+'</span> <input id="bcfg-input_'+i+'" type="number" class="form-control" placeholder="Amount" value="'+bslv[i]+'"> </div>');
      
      $('#buffName-input').val(emptyId.text())
      $('#bcfg-input_'+i).on('input',function() {
        $('#celcfg_'+i).attr('subvalue',$(this).val());
      })
    }
    }
    
    
    $('#configBuffModal_CD-input').val($(btnconf).attr('value_bcd'));
    $('#configBuffModal_Duration-input').val($(btnconf).attr('value_bd'));
    $('#configBuffModalLabel').text('Configure Buff - '+emptyId.text());
    $('#configBuffModal').modal('show');
  });
  $('#configBuffModal').attr('bconf-for',btnconf);
  $('#buffName-input').val(emptyId.text())
  $('#' + buffApplyTo + 'dropdown-buffList_empty').hide();
  $('#configBuffModal').modal('hide');

  CreateTooltipForAnything($('#'+buffApplyTo+'tt_buffapply_'+(emptyId.attr('id').split("_")[1])),'<div style="max-width: 10rem;">Buffs: '+infoTT+'</div>','CD: '+cbm_cd.val()+' sec, Duration: '+cbm_d.val() + ' sec','Uptime: ' + (Number(cbm_cd.val()) < Number(cbm_d.val()) ? ' Permanent':(1/(Number(cbm_cd.val())/Number(cbm_d.val()))*Number(cbm_d.val())).toFixed(2) + ' sec'))
 
  
  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG();
} else {
  cbm_cd.attr('placeholder','Enter value!');
  cbm_d.attr('placeholder','Enter value!');
}
  }


 });


 $('#addBuff-btn').on('click',function() {
  $('#applyBuffModal_confirm-btn').attr('subvalue','')
  $('#applyBuffModalLabel').text('Unit');
  $('#configBuffModal').attr('bconf-for','new');
  $('#delete_btn-configBuffModal').prop('hidden',true);
  $('#back_btn-configBuffModal').prop('hidden',false)
  $('#applyBuffModal-body .form-check input').prop('checked',false);
  $('#configBuffModalLabel').text('Configure New Buff')
  $('#buffName-input').val('');
  $('#configBuffModal_CD-input').val('');
  $('#configBuffModal_Duration-input').val('');
 });

 $('#target_addBuff-btn').on('click',function() {
  $('#applyBuffModal_confirm-btn').attr('subvalue','target_')
  $('#applyBuffModalLabel').text('Target');
  $('#configBuffModal').attr('bconf-for','new');
  $('#delete_btn-configBuffModal').prop('hidden',true);
  $('#back_btn-configBuffModal').prop('hidden',false)
  $('#applyBuffModal-body .form-check input').prop('checked',false);
  $('#configBuffModalLabel').text('Configure New Buff')
  $('#buffName-input').val('');
  $('#configBuffModal_CD-input').val('');
  $('#configBuffModal_Duration-input').val('');
 });
 
 $('#dummy_addBuff-btn').on('click',function() {
  $('#applyBuffModal_confirm-btn').attr('subvalue','dummy_')
  $('#applyBuffModalLabel').text('Target');
  $('#configBuffModal').attr('bconf-for','new');
  $('#delete_btn-configBuffModal').prop('hidden',true);
  $('#back_btn-configBuffModal').prop('hidden',false)
  $('#applyBuffModal-body .form-check input').prop('checked',false);
  $('#configBuffModalLabel').text('Configure New Buff')
  $('#buffName-input').val('');
  $('#configBuffModal_CD-input').val('');
  $('#configBuffModal_Duration-input').val('');
 });



 $('#delete_btn-configBuffModal').on('click',function() {
  var buffApplyTo = $('#applyBuffModal_confirm-btn').attr('subvalue');
  $($('#configBuffModal').attr('bconf-for')).remove();
  if (Number($('#' + buffApplyTo + 'dropdown-buffList li').length) < 1) {
    $('#' + buffApplyTo + 'dropdown-buffList_empty').show();
  }
  $('#configBuffModal').modal('hide');
 

  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG();
 });


 $('#Include_TargetSkillData').on('change',function() {
  if (this.checked === true) {
    $('#new_sd_target_dtable').show();
    $('#new_sd_target_dtable').html('');
    CalcTargetDMG();
  } else {
    $('#new_sd_target_dtable').hide();
  }
 });

 function calcSkillCdReduction(scAmt, scRdc, cds) {
  
  return Number(scRdc)/Number(scAmt)/Number(cds)+1
 }

 $('#applyBuffModal-search').on('input',function() {
  const tval = $(this).val().toLowerCase();
  
  $("#applyBuffModal-body .form-check-input").filter(function () {
  if (tval !== '') {
  $(this).parent().not().addClass('filter_search-hidden')
  }
  return $(this).val().toLowerCase().indexOf(tval) > -1;
  }).parent().removeClass('filter_search-hidden')
 })

 $('#unit-lvl_range').on('change input', function() {
  UnitLevel = Number($('#unit-lvl_range').val());
  $('#unit-lvl_input').val(UnitLevel);
  $('#unit-lvl').text('Lv. ' + UnitLevel);
  if (UnitLevel > 110) {
    $('#unit-lvl').addClass('limitFusion_2_color');
    $('#unit-lvl').removeClass('no_limitFusion_color');
    $('#unit-lvl').removeClass('limitFusion_color');
  } else if(UnitLevel > 100) {
    $('#unit-lvl').addClass('limitFusion_color');
    $('#unit-lvl').removeClass('limitFusion_2_color');
    $('#unit-lvl').removeClass('no_limitFusion_color');
  } else {
    $('#unit-lvl').addClass('no_limitFusion_color');
    $('#unit-lvl').removeClass('limitFusion_2_color');
    $('#unit-lvl').removeClass('limitFusion_color');
  }
});

 $('#unit-lvl_range').on('change', function() {
  UnitLevel = Number($('#unit-lvl_range').val());

  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG()
});

$('#target-lvl_range').on('change input', function() {
 TargetLevel = Number($('#target-lvl_range').val());
 $('#target-lvl_input').val(TargetLevel);
  $('#target-lvl').text('Lv. ' + TargetLevel);
  if (TargetLevel > 110) {
    $('#target-lvl').addClass('limitFusion_2_color');
    $('#target-lvl').removeClass('no_limitFusion_color');
    $('#target-lvl').removeClass('limitFusion_color');
  } else if(TargetLevel > 100) {
    $('#target-lvl').addClass('limitFusion_color');
    $('#target-lvl').removeClass('limitFusion_2_color');
    $('#target-lvl').removeClass('no_limitFusion_color');
  } else {
    $('#target-lvl').addClass('no_limitFusion_color');
    $('#target-lvl').removeClass('limitFusion_2_color');
    $('#target-lvl').removeClass('limitFusion_color');
  }
});

 $('#target-lvl_range').on('change', function() {
  TargetLevel = Number($('#target-lvl_range').val());

  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG()
});

$('#unit-lvl_input').on('input',function() {
  inputRes = 1;
  if ($(this).val() == "") {
    inputRes = 1;

  } else if($(this).val() > 120) {
    $(this).val(120);
    inputRes = $(this).val();

  } else if($(this).val() < 1) {
    $(this).val(1);
    inputRes = $(this).val();
  } else {
    inputRes = $(this).val();
    

  }
  $('#unit-lvl_range').val(inputRes);
  UnitLevel = Number($('#unit-lvl_range').val());

  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG()
})

$('#target-lvl_input').on('input',function() {
  inputRes = 1;
  if ($(this).val() == "") {
    inputRes = 1;

  } else if($(this).val() > 120) {
    $(this).val(120);
    inputRes = $(this).val();

  } else if($(this).val() < 1) {
    $(this).val(1);
    inputRes = $(this).val();
  } else {
    inputRes = $(this).val();
    

  }
  $('#target-lvl_range').val(inputRes);
  TargetLevel = Number($('#target-lvl_range').val());
  UpdateUnitAndTarget(total_unit_data);
  CalcUnitDMG()
})


$('#unit-lvl_range').val(UnitLevel)
$('#target-lvl_range').val(TargetLevel)
$('#unit-lvl_input').val(UnitLevel)
$('#target-lvl_input').val(TargetLevel)



$('#saveToUrlBtn').on('click',function() {
  $('#saveUrlModalLabel').text('Sharing active loadout')
  $('#saveUrl_input').val(saveToUrl());
  DeleteTooltipFromAnything($("#copyUrlBtn"));
CreateTooltipForAnything($("#copyUrlBtn"),"Copy to clipboard")
  
});

/* $("#copyUrlBtn").on('mouseout',function() {
  DeleteTooltipFromAnything($("#copyUrlBtn"));
CreateTooltipForAnything($("#copyUrlBtn"),"Copy to clipboard")
console.log("mouse is out")
}) */


$('#copyUrlBtn').on('click',function() {

  let textInput = $('#saveUrl_input');

  textInput.select();
  textInput[0].setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(textInput.val());
  UpdateTooltipForAnything($("#copyUrlBtn"),"Text copied!")
});

var expandBtn_1_state = false;
$('#compareModalExpandBtn_1').on('click',function() {
  console.log('cl')
  if (!expandBtn_1_state) {
    $('#compareModalExpandBtn_1').text("Compact");
    $('#csum-m1').css('height',$('#csum-m1')[0].scrollHeight);
    $('#csum-m2').addClass("d-none");
    $("#modalCompareHR").addClass("d-none");
  } else {
    $('#compareModalExpandBtn_1').text("Expand");
    $('#csum-m1').css('height',"20rem");
    $('#csum-m2').removeClass("d-none");
    $("#modalCompareHR").removeClass("d-none");
}
expandBtn_1_state = !expandBtn_1_state;

})

var expandBtn_2_state = false;
$('#compareModalExpandBtn_2').on('click',function() {
  console.log('cl')
  if (!expandBtn_2_state) {
    $('#compareModalExpandBtn_2').text("Compact");
    $('#csum-m2').css('height',$('#csum-m2')[0].scrollHeight);
    $('#csum-m1').addClass("d-none");
    $("#modalCompareHR").addClass("d-none");
  } else {
    $('#compareModalExpandBtn_2').text("Expand");
    $('#csum-m2').css('height',"20rem");
    $('#csum-m1').removeClass("d-none");
    $("#modalCompareHR").removeClass("d-none");
}
expandBtn_2_state = !expandBtn_2_state;

})



function saveToUrl() {

  let cUrl = window.location.href.split("?")[0].replace("#", "");

  let unitN = encodeURI(total_unit_data[0] + "," + total_unit_data[1] + "," + UnitLevel);
  let targetN = encodeURI(total_target_data[0] + "," + total_target_data[1] + "," + TargetLevel);
  /* let gear_Data_u = [Weapon.getUrlValues(),Armor.getUrlValues(),Accessory1.getUrlValues(),Accessory2.getUrlValues()] */
  let gear_Data_u = Weapon.getUrlValues()+";"+Armor.getUrlValues()+";"+Accessory1.getUrlValues()+";"+Accessory2.getUrlValues();
  /* let gear_Data_t = [enemy_Weapon.getUrlValues(),enemy_Armor.getUrlValues(),enemy_Accessory1.getUrlValues(),enemy_Accessory2.getUrlValues()] */
  let gear_Data_t = enemy_Weapon.getUrlValues()+";"+enemy_Armor.getUrlValues()+";"+enemy_Accessory1.getUrlValues()+";"+enemy_Accessory2.getUrlValues();

  /* let gear_Data_unit = btoa(JSON.stringify(gear_Data_u));
  let gear_Data_target = btoa(JSON.stringify(gear_Data_t)); */


  /* let extraInfo = btoa(JSON.stringify([$('#range-melee-distance_partial').val()])); */
  let extraInfo = $('#range-melee-distance_partial').val();

  let extraStatsData_unit = "";
  let extraStatsData_target = "";
  let extraStatsData_dummy = "";
  

  for (var i = 0, n = unit_extra_bonus_stats.length; i < n; i++) {
    if (unit_extra_bonus_stats[i] != 0) {
      extraStatsData_unit += i + "," + unit_extra_bonus_stats[i] + ",";
    }
    if (target_extra_bonus_stats[i] != 0) {
      extraStatsData_target += i + "," + target_extra_bonus_stats[i] + ",";
    }
    if (dummy_extra_bonus_stats[i] != 0) {
      extraStatsData_dummy += i + "," + dummy_extra_bonus_stats[i] + ",";
    }
  }

 


  extraStatsData_unit = extraStatsData_unit.slice(0, -1);
  extraStatsData_target = extraStatsData_target.slice(0, -1);
  extraStatsData_dummy = extraStatsData_dummy.slice(0, -1);

   

  if (extraStatsData_dummy != "") {
    extraStatsData_unit = ";" + extraStatsData_unit;
    extraStatsData_target = ";" + extraStatsData_target;
    extraStatsData_dummy = ";" + extraStatsData_dummy;
    
  } else if (extraStatsData_target != "") {
    extraStatsData_unit = ";" + extraStatsData_unit;
    extraStatsData_target = ";" + extraStatsData_target;
    
  } else if (extraStatsData_unit != "") {
    extraStatsData_unit = ";" + extraStatsData_unit;
    
  }

  
  let dummyIf = (ifSelectTargetDummy ? 1:0);

  let excludeSkillsData = [];
  if (active_skills_exclude.length > 0) {
    
 
  for (var i = 0, n = $("#skill_exclude_select input").length; i < n; i++) {
    excludeSkillsData[i] = 0;
      if (active_skills_exclude[i] == false) {
        
      excludeSkillsData[i] = 1;
    } else {
      excludeSkillsData[i] = 0;
    }
  }
}
  excludeSkillsData = excludeSkillsData.toString();


  return cUrl + "?unit="+unitN+"&target="+targetN+"&Isdmmy="+dummyIf+"&gearU="+gear_Data_u+"&gearT="+gear_Data_t+"&extra="+extraInfo+";"+excludeSkillsData+";"+unit_mainAttack_selected.toString()+extraStatsData_unit+extraStatsData_target+extraStatsData_dummy;
}