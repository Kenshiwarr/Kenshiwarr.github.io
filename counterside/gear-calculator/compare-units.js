



/* $('#compareUnitsModal .modal-body').append() */

function UpdateCompareUnitsModal(sau, sGear,gearDataSavedValues, overwrite, loading, storageID, trgt) {
    console.time('UpdateCompareUnitsModal_f');
    var cScount = $('#compareUnitsModal .modal-body .unit_container .list-group-item').last();
    
    function MonthToNum(mon){
    return "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mon) / 3 + 1
    }

    var headerName = sau[8];

    $('#deleteAllDataForCompare').prop('hidden', false);

    
    if ((cScount.index() < 4) || (overwrite === true)) {

    //var yourDate = new Date()
    var saveDate = new Date(Number(sau[9]));

    var currDate = '';

    if (sau[9] === '') {
        saveDate = new Date();
    } else {
        currDate = Math.abs(new Date() - saveDate);
    }

    

    if (currDate != '') {
        currDate = msToTime(currDate)
    }

    var yourDateLocal = DateToIsoString_CTZ(saveDate).split('T');
    /* var yourDate_local = String(new Date()).split(' ');
    var localMnth = MonthToNum(yourDate_local[1]);
    var localMnthTxt = localMnth.toString().length > 1 ? localMnth:'0' + localMnth; */
    var dateA;
    var timeA;

    dateA = yourDateLocal[0]
    timeA = yourDateLocal[1]
    timeA = timeA.substring(0, timeA.indexOf("+"));


    var preDeleteTimeout;

    if (sau[9] === '') {
       /*  dateA = yourDate.toISOString().split('T')[0]
        timeA = yourDate.toISOString().split('T')[1]
        timeA = timeA.substring(0, timeA.indexOf("."));

        dateA = yourDate_local[3] + '-' + yourDate_local[2] + '-' + localMnthTxt
        timeA = yourDate_local[4]; */

        
    } else {
        /* dateA = sau[9].split(';')[0];
        timeA = sau[9].split(';')[1]; */

        //new Date(dateA.replace(/-/g,'/') + ' ' + timeA.replace(/-/g,'/'))
    }
    

    if (headerName == '') {
        headerName = 'Loadout #' + (Number(storageID)+1);
    }
    
    var currIndexLi = 0;

    if (overwrite === false) {
        
    } else {
        currIndexLi = trgt;
    }

    var localStorageData_compare_units = sau;
    var localStorageData_tooltip_gear = sGear;
    var localStorageData_gear_info = gearDataSavedValues;

    

    

    

    //$('#compareUnitsModal .modal-body .unit_container').html('');
    
    /* $('#compareUnitsModal .modal-body .unit_container').append(total_unit_data[8]); */
    //$('#compareUnitsModal .modal-body .unit_container').append('<div class="unit_stats_container"> </div>');
    
    /* for (let i = 0, n =( unit_stats_to_save.length)/2; i < n; i++) {
        $('#compareUnitsModal .modal-body .unit_container .unit_stats_container').append('<span> '+unit_stats_to_save[i]+': '+ unit_stats_to_save[n-1+i] +' </span>' );
    } */
    
    if (overwrite === false) {
        $('#compareUnitsModal .modal-body .unit_container ol').append(' <li id="storage_loadout-'+ storageID +'" class="list-group-item d-flex justify-content-between align-items-start"> <div class="ms-2 me-auto" style="width: 15rem; overflow: auto;"> <span class="badge bg-primary rounded-pill">'+currDate+'<br /> '+''+'</span> <div class="fw-bold"><span class="text-truncate h_main_text"> '+headerName+' </span><svg width="16" height="16" fill="currentColor" class="bi bi-pencil-square edittext" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/> </svg><div class="textedit_group" style="display: none;"><input name="compareUnitsChangeName" maxlength="24" type="text" class="form-control" aria-label="Sizing example input"><button type="button" class="btn btn-success confirmTextEdit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"> <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/> </svg></button><button type="button" class="btn btn-danger cancelTextEdit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"> <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/> </svg></button></div></div> <div class="Unit_Compare_Container"> <div class="imgContainer_forCompare cUnit" value="'+sau[10]+'" subvalue="'+sau[0]+','+sau[1]+'"> <img src="'+sau[2]+'" alt="">  </div><button class="btn btn-primary dropdown_btn-unit">Stats</button></div><div class="Unit_Compare_Container"> <div class="imgContainer_forCompare cTarget" value="'+sau[11]+'" subvalue="'+sau[4]+','+sau[5]+'"><img src="'+sau[6]+'" alt=""> </div><button class="btn btn-primary dropdown_btn-target">Stats</button></div></div></div>   </div> <div class="d-grid me-auto">  <button type="button" class="btn btn-warning btn_chooseToCompare">Compare</button> <button style="display: none;" type="button" class="btn btn-success btn_selectForCompare">Select</button> <button style="display: none;" type="button" class="btn btn-danger btn_chooseToCompareCancel">Cancel</button> </div>  <div class="btn-group dropstart"> <svg width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical dropdown-toggle" viewBox="0 0 16 16" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/> </svg> <ul class="dropdown-menu dropdown-menu-dark""> <li><a class="dropdown-item" mtd-action="load" href="#">Load</a></li> <li><a class="dropdown-item" mtd-action="rename" href="#">Reset name</a></li> <li><a class="dropdown-item disabled" mtd-action="overwrite" href="#">Overwrite</a></li><li><hr class="dropdown-divider"></li> <li><a class="dropdown-item text-danger" mtd-action="delete" href="#">Delete</a></li> </ul> </div> </li>')
            //currIndexLi = $('#compareUnitsModal .modal-body .unit_container .list-group-item').last();
            currIndexLi = $('#storage_loadout-'+storageID);
            
    } else if (overwrite === true) {
        currIndexLi.html(' <div class="ms-2 me-auto" style="width: 15rem; overflow: auto;"> <span class="badge bg-primary rounded-pill">'+currDate+'<br /> '+''+'</span> <div class="fw-bold"><span class="text-truncate h_main_text"> '+headerName+' </span><svg width="16" height="16" fill="currentColor" class="bi bi-pencil-square edittext" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/> </svg><div class="textedit_group" style="display: none;"><input name="compareUnitsChangeName" maxlength="24" type="text" class="form-control" aria-label="Sizing example input"><button type="button" class="btn btn-success confirmTextEdit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"> <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/> </svg></button><button type="button" class="btn btn-danger cancelTextEdit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"> <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/> </svg></button></div></div> <div class="Unit_Compare_Container"> <div class="imgContainer_forCompare cUnit" value="'+sau[10]+'" subvalue="'+sau[0]+','+sau[1]+'"> <img src="'+sau[2]+'" alt="">  </div><button class="btn btn-primary dropdown_btn-unit">Stats</button></div><div class="Unit_Compare_Container"> <div class="imgContainer_forCompare cTarget" value="'+sau[11]+'" subvalue="'+sau[4]+','+sau[5]+'"><img src="'+sau[6]+'" alt=""> </div><button class="btn btn-primary dropdown_btn-target">Stats</button></div></div></div>   </div> <div class="d-grid me-auto">  <button type="button" class="btn btn-warning btn_chooseToCompare">Compare</button> <button style="display: none;" type="button" class="btn btn-success btn_selectForCompare">Select</button> <button style="display: none;" type="button" class="btn btn-danger btn_chooseToCompareCancel">Cancel</button> </div>  <div class="btn-group dropstart"> <svg width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical dropdown-toggle" viewBox="0 0 16 16" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/> </svg> <ul class="dropdown-menu dropdown-menu-dark""> <li><a class="dropdown-item" mtd-action="load" href="#">Load</a></li> <li><a class="dropdown-item" mtd-action="rename" href="#">Reset name</a></li> <li><a class="dropdown-item" mtd-action="overwrite" href="#">Overwrite</a></li><li><hr class="dropdown-divider"></li> <li><a class="dropdown-item text-danger" mtd-action="delete" href="#">Delete</a></li> </ul> </div>')
    }
        
            

            

            var dropdownDetails = currIndexLi.find('.dropdown_btn-unit');
            var dropdownDetails_target = currIndexLi.find('.dropdown_btn-target');
            var dropdownText = sau[3];
            var dropdownText_target = sau[7];

            var cUnit_info_container = currIndexLi.find('.cUnit');
            var cTarget_info_container = currIndexLi.find('.cTarget');

            
            var cScountInd = String('localStorageData_compare_units' + storageID);
            var cScountInd_tg = String('localStorageData_tooltip_gear' + storageID);
            var cScountInd_gear = String('gearFullDataForCompare' + storageID);



            

            //JSON.parse(localStorage.getItem('gearFullDataForCompare0'))

//localStorage.getItem('localStorageData_compare_units0')
//localStorage.getItem('as1')

            //JSON.parse(localStorage.getItem('localStorageData_compare_units0'))
            

            CreateDropdownForAnything(dropdownDetails, dropdownText, '<div>'+ '<small>' + sau[0] +'</small><br />' + ' ' + sau[1] +'</div>','<div class="gear-containers"> <div class="equipment-slot_tooltip" '+sGear[0]+'>'+sGear[1]+'</div> <div class="equipment-slot_tooltip" '+sGear[2]+'>'+sGear[3]+'</div> <div class="equipment-slot_tooltip" '+sGear[4]+'>'+sGear[5]+'</div> <div class="equipment-slot_tooltip" '+sGear[6]+'>'+sGear[7]+'</div> </div>',$('#uct_saved_loadouts'));
            if (sau[19]) {
                CreateDropdownForAnything(dropdownDetails_target, dropdownText_target, '<div>'+ '<small>' +  sau[4] +'</small><br />' + ' ' + sau[5] +'</div>','',$('#uct_saved_loadouts'));

            } else {
                CreateDropdownForAnything(dropdownDetails_target, dropdownText_target, '<div>'+ '<small>' +  sau[4] +'</small><br />' + ' ' + sau[5] +'</div>','<div class="gear-containers"> <div class="equipment-slot_tooltip" '+sGear[8]+'>'+sGear[9]+'</div> <div class="equipment-slot_tooltip" '+sGear[10]+'>'+sGear[11]+'</div> <div class="equipment-slot_tooltip" '+sGear[12]+'>'+sGear[13]+'</div> <div class="equipment-slot_tooltip" '+sGear[14]+'>'+sGear[15]+'</div> </div>',$('#uct_saved_loadouts'));
            }
            
            
            
            var currIndexLi_header = currIndexLi.find('.fw-bold .h_main_text');
            var currIndexLi_header_edit = currIndexLi.find('.fw-bold .textedit_group');
            var currIndexLi_header_svg = currIndexLi.find('.fw-bold svg');
            var currIndexLi_header_input = currIndexLi.find('.fw-bold .textedit_group input');
            var currIndexLi_header_confirm_btn = currIndexLi.find('.fw-bold .textedit_group .confirmTextEdit');
            var currIndexLi_header_cancel_btn = currIndexLi.find('.fw-bold .textedit_group .cancelTextEdit');
            var currIndexLi_header_edittext_btn = currIndexLi.find('.fw-bold .edittext')
            var currIndexLi_header_badge = currIndexLi.find('.badge')
            
           

            
            setInterval(function() {
                currIndexLi_header_badge.text(msToTime((Math.abs(new Date() - saveDate))));
            },1000);
            

            //

            currIndexLi_Menu_load_btn = currIndexLi.find('.dropdown-item[mtd-action="load"]');
            currIndexLi_Menu_rename_btn = currIndexLi.find('.dropdown-item[mtd-action="rename"]');
            currIndexLi_Menu_overwrite_btn = currIndexLi.find('.dropdown-item[mtd-action="overwrite"]');
            currIndexLi_Menu_delete_btn = currIndexLi.find('.dropdown-item[mtd-action="delete"]');

            
            
            //var currIndexLi_header_btn_ExtraBtn = currIndexLi.find('.btn_ExtraBtn');
            var currIndexLi_header_btn_chooseToCompare = currIndexLi.find('.btn_chooseToCompare');
            var currIndexLi_header_btn_selectForCompare = currIndexLi.find('.btn_selectForCompare');
            var currIndexLi_header_btn_chooseToCompare_Cancel = currIndexLi.find('.btn_chooseToCompareCancel');
            
            

            var currIndexLi_header_confirm_btn_svg = currIndexLi.find('.fw-bold .textedit_group .confirmTextEdit svg');
            var currIndexLi_header_cancel_btn_svg = currIndexLi.find('.fw-bold .textedit_group .cancelTextEdit svg');


            if (($('#searched-unitID-values').attr('value') !== '') && ($('#searched-targetID-values').attr('value') !== '') && localStorageAvailable === true) {
                $('#compareUnitsModal .modal-body .unit_container .list-group-item .dropdown-item[mtd-action="overwrite"]').removeClass('disabled');
                localStorageData_compare_units = [total_unit_data[0],total_unit_data[1],$('#seachedUnit_body img').attr('src'),dropdownText,sau[4],sau[5],$('#seachedTarget_body img').attr('src'),dropdownText_target,currIndexLi_header.text(),''+saveDate.getTime(),sau[10],sau[11],sau[12],sau[13],sau[14],sau[15],sau[16],sau[17],sau[18],sau[19],sau[20],sau[21],sau[22],sau[23],sau[24]];
                localStorageData_tooltip_gear = sGear;
                localStorageData_gear_info = gearDataSavedValues;
            }


            
            if (localStorageAvailable && (loading === false)) {
            localStorage.setItem(cScountInd, JSON.stringify(localStorageData_compare_units));
            localStorage.setItem(cScountInd_tg, JSON.stringify(localStorageData_tooltip_gear));
            localStorage.setItem(cScountInd_gear, JSON.stringify(localStorageData_gear_info));
            }
    
    CreateTooltipForAnything(currIndexLi_header_badge, dateA + ' ' + timeA)

    
    currIndexLi_Menu_load_btn.on('click',function() {

        console.time('LoadingSaved_timer')
        freezeClic = true;
        $('#searchID').val(sau[1])
        unit_extra_bonus_stats = sau[12];
        target_extra_bonus_stats = sau[13];
        dummy_extra_bonus_stats = sau[22];
        targetIsUpdated = sau[23];
        target_dummy_data = sau[24];
        selectedGearSlotList = "Weapon";

        $('#selectEnemyType').val(target_dummy_data[9])
        $('#selectEnemyClass').val(target_dummy_data[10])
        $('#selectMovementType').val(target_dummy_data[11])

        ifSelectTargetDummy = sau[19];

  $('#range-melee-distance_partial').val(sau[20]);
  var rangeVal = $('#range-melee-distance_partial').val();
    
    
    distance_to_target_frequency_ranged = Number(rangeVal)/100
    distance_to_target_frequency_melee = 1 + Number(rangeVal*(-1))/100

    
    $('#range-melee-distance_partial-value').text(Math.round((distance_to_target_frequency_melee+ Number.EPSILON)*100) + '% / ' + Math.round((distance_to_target_frequency_ranged + Number.EPSILON)*100) + '%');


    

        UpdateUnitFromLocalStorage(sau[14],sau[15],sau[16]);
        if (gearDataSavedValues[0] !== '') {
            selectedGearStats = gearDataSavedValues[0][0];
            Weapon.setAllValues(gearDataSavedValues[0]);
            Weapon.setGear(0);
            weaponIsConfirmed = true;
        } else {
            Weapon.removeGear('Container');
            weaponIsConfirmed = false;
        }
        if (gearDataSavedValues[1] !== '') {
            selectedGearStats = gearDataSavedValues[1][0];
            Armor.setAllValues(gearDataSavedValues[1]);
            Armor.setGear(0);
            armorIsConfirmed = true;
        } else {
            Armor.removeGear('Container');
            armorIsConfirmed = false;
        }
        if (gearDataSavedValues[2] !== '') {
            selectedGearStats = gearDataSavedValues[2][0];
            Accessory1.setAllValues(gearDataSavedValues[2]);
            Accessory1.setGear(0);
            accessory1IsConfirmed = true;
        } else {
            Accessory1.removeGear('Container');
            accessory1IsConfirmed = false;
        }
        if (gearDataSavedValues[3] !== '') {
            selectedGearStats = gearDataSavedValues[3][0];
            Accessory2.setAllValues(gearDataSavedValues[3]);
            Accessory2.setGear(0);
            accessory2IsConfirmed = true;
        } else {
            Accessory2.removeGear('Container');
            accessory2IsConfirmed = false;
        }


        if (ifSelectTargetDummy === false) {
        $('#searchIDtarget').prop('disabled', false);
      $('#searchIDtarget').attr('placeholder','');
      ifSelectTargetDummy = false;
      $('#selectCustomEnemy').removeClass('d-flex');
        $('#selectCustomEnemy').prop('hidden', true);
      $('#btn-setTargetAsDummy').prop('checked',false);
      
    $('#dummy_extra_stats_dropdown').hide();
    $('#target_extra_stats_dropdown').show();
    
    $('#searchIDtarget').val(sau[5])
            } else {
                $('#searchIDtarget').val('')
            }

            
        UpdateTargetFromLocalStorage(sau[17],sau[18],sau[21]);

        
       

        //$('#gearData_enemy')
        
        if (gearDataSavedValues[4] !== '') {
            selectedGearStats = gearDataSavedValues[4][0];
            enemy_Weapon.setAllValues(gearDataSavedValues[4]);
            enemy_Weapon.setGear();
            enemy_weaponIsConfirmed = true;
        } else {
            enemy_Weapon.removeGear('Container_enemy');
            enemy_weaponIsConfirmed = false;
        }
        if (gearDataSavedValues[5] !== '') {
            selectedGearStats = gearDataSavedValues[5][0];
            enemy_Armor.setAllValues(gearDataSavedValues[5]);
            enemy_Armor.setGear();
            enemy_armorIsConfirmed = true;
        } else {
            enemy_Armor.removeGear('Container_enemy');
            enemy_armorIsConfirmed = false;
        }
        if (gearDataSavedValues[6] !== '') {
            selectedGearStats = gearDataSavedValues[6][0];
            enemy_Accessory1.setAllValues(gearDataSavedValues[6]);
            enemy_Accessory1.setGear();
            enemy_accessory1IsConfirmed = true;
        } else {
            enemy_Accessory1.removeGear('Container_enemy');
            enemy_accessory1IsConfirmed = false;
        }
        if (gearDataSavedValues[7] !== '') {
            selectedGearStats = gearDataSavedValues[7][0];
            enemy_Accessory2.setAllValues(gearDataSavedValues[7]);
            enemy_Accessory2.setGear();
            enemy_accessory2IsConfirmed = true;
        } else {
            enemy_Accessory2.removeGear('Container_enemy');
            enemy_accessory2IsConfirmed = false;
        }
        
        

        AppendCustomStatsForUnits()
        UpdateUnitStats(sau[14]);
        UpdateUnitAndTarget(sau[14]);
        CalcUnitDMG();
        $('#compareUnitsModal .modal-body .unit_container .list-group-item .dropdown-item[mtd-action="overwrite"]').removeClass('disabled');
        freezeClic = false;
        console.log('loading data of: ' + storageID);

   /*  $.when(searchvajax(sau[0] + ' ' + sau[1]),false).done(function(){
        
        UpdateUnitStats(total_unit_data);
        UpdateUnitAndTarget(total_unit_data);
        
        // 
        

            $.when(searchvajax2(sau[4] + ' ' + sau[5]),false).done(function(){
    
        
        
});
}); */

console.timeEnd('LoadingSaved_timer')
    });
    currIndexLi_Menu_delete_btn.on('click',function() {

        console.log('deleting: ' + storageID)
        var ert = 4;
        
        currIndexLi.children().addClass('preDeleted')
        currIndexLi.append('<div class="d-grid text-center" style="position: absolute; top: 35%; left: 40%;"><span class="text-danger undo_text">Deletes in '+ert+' sec.</span><button class="btn btn-primary undo_btn" mtd-action="undo">Undo</button></div>')
        
        var Undobtn = currIndexLi.find('.undo_btn')
        var Undotxt = currIndexLi.find('.undo_text')
        var nUndoIntervalID = setInterval(function() {
            ert--;
            Undotxt.html('Deletes in '+ert+' sec.')
        }, 1000);
        
        preDeleteTimeout = setTimeout(function(){
        localStorage.removeItem(cScountInd);
        localStorage.removeItem(cScountInd_tg);
        localStorage.removeItem(cScountInd_gear);
       /*  localStorageData_compare_units = null;
        localStorageData_tooltip_gear = null;
        localStorageData_gear_info = null; */
        console.log('deleted: ' + storageID)
        currIndexLi.remove();
        if ($('#compareUnitsModal .modal-body .unit_container .list-group-item').length === 0) {
            $('#deleteAllDataForCompare').prop('hidden', true);
        } 
        clearInterval(nUndoIntervalID);
        nUndoIntervalID = null;
    
        }, 5000);

        
        
        
        Undobtn.on('click',function() {
            clearTimeout(preDeleteTimeout);
            clearInterval(nUndoIntervalID);
            currIndexLi.children().removeClass('preDeleted')
            $(this).parent().remove();
        });
       
    });
    currIndexLi_Menu_rename_btn.on('click',function() {
        
        currIndexLi_header.text('Loadout #'+(currIndexLi.index()+1))
        
        if (localStorageAvailable) {
            localStorageData_compare_units = sau;
            localStorageData_compare_units[8] = [currIndexLi_header.text()];
            localStorage.setItem(cScountInd, JSON.stringify(localStorageData_compare_units));
        }
                
    });
    currIndexLi_Menu_overwrite_btn.on('click',function() {

        ConfirmDialog('This will overwrite data of <b>'+headerName+'</b>. <br />Are you sure?',function() {
      var tt_title
      var tt_name
      
      if (ifSelectTargetDummy) {
        tt_title = target_dummy_data[0]; 
        tt_name = target_dummy_data[1]; 
      } else {
        tt_title = total_target_data[0]; 
        tt_name = total_target_data[1]; 
      }
    var sau_o = [total_unit_data[0],total_unit_data[1],$('#seachedUnit_body img').attr('src'),'',tt_title,tt_name,$('#seachedTarget_body img').attr('src'),'',headerName,'',unit_stats_to_save,target_stats_to_save,unit_extra_bonus_stats,target_extra_bonus_stats,total_unit_data,Unit_dps_stats,total_gear_data_unit,total_target_data,$('#gearData_enemy').html(),ifSelectTargetDummy,$('#range-melee-distance_partial').val(),$('#target-current_hp_range').val(),dummy_extra_bonus_stats,targetIsUpdated,target_dummy_data];
    
    var sGear_o = [Weapon.eqIcon,Weapon.eqSet,Armor.eqIcon,Armor.eqSet,Accessory1.eqIcon,Accessory1.eqSet,Accessory2.eqIcon,Accessory2.eqSet,enemy_Weapon.eqIcon,enemy_Weapon.eqSet,enemy_Armor.eqIcon,enemy_Armor.eqSet,enemy_Accessory1.eqIcon,enemy_Accessory1.eqSet,enemy_Accessory2.eqIcon,enemy_Accessory2.eqSet];
    for (let i = 0, n = (unit_stats_to_save.length)/2; i < n; i++) {
      if (i<6) {
        sau_o[3] += unit_stats_to_save[i]+': '+ unit_stats_to_save[n+i] +'<br />';
      } else {
        if (['EHP','Final EHP','DPS'].some((t) => t === unit_stats_to_save[i])) {
            sau_o[3] += unit_stats_to_save[i]+': '+ unit_stats_to_save[n+i] +'<br />';
        } else {
            sau_o[3] += unit_stats_to_save[i]+': '+ (unit_stats_to_save[n+i]*100).toFixed(1).replace(/[.,]0+$/, "") +'% <br />';
        }
        
          
      }
      
  }

  for (let i = 0, n = (target_stats_to_save.length)/2; i < n-1; i++) {
      if (i<6) {
        sau_o[7] += target_stats_to_save[i] +': '+ target_stats_to_save[n+i] +'<br />';
      } else {
        if (['EHP','Final EHP','Durability'].some((t) => t === target_stats_to_save[i])) {
            sau_o[7] += target_stats_to_save[i] +': '+ target_stats_to_save[n+i] +'<br />';
        } else {
            sau_o[7] += target_stats_to_save[i]+': '+ (target_stats_to_save[n+i]*100).toFixed(1).replace(/[.,]0+$/, "") +'% <br />';
        }
        
      }
  }

  for (let i = 0, n = sGear_o.length; i < n; i+=2) {
    if (sGear_o[i] !== 0) {
      sGear_o[i] = 'style="background-image: url(&quot;'+ sGear_o[i] +'&quot;);"';
    } else {
      sGear_o[i] = ''
    }
    if (sGear_o[i+1] !== 0) {
      sGear_o[i+1] = '<img src="cs_gears-icons/Set Icons/Icon_Set_'+ sGear_o[i+1] +'.png" alt="">'
    } else {
      sGear_o[i+1] = '';
    }
  }

        var gearSaveData_o = ['','','','','','','',''];

  if ($('#WeaponContainer').attr('isConfirmed') == "true") {
    gearSaveData_o[0] = Weapon.getAllValues();
  }
  if ($('#ArmorContainer').attr('isConfirmed') == "true") {
    gearSaveData_o[1] = Armor.getAllValues();
  }
  if ($('#Accessory1Container').attr('isConfirmed') == "true") {
    gearSaveData_o[2] = Accessory1.getAllValues();
  }
  if ($('#Accessory2Container').attr('isConfirmed') == "true") {
    gearSaveData_o[3] = Accessory2.getAllValues();
  }
  //
  if ($('#WeaponContainer_enemy').attr('isConfirmed') == "true") {
    gearSaveData_o[4] = enemy_Weapon.getAllValues();
  }
  if ($('#ArmorContainer_enemy').attr('isConfirmed') == "true") {
    gearSaveData_o[5] = enemy_Armor.getAllValues();
  }
  if ($('#Accessory1Container_enemy').attr('isConfirmed') == "true") {
    gearSaveData_o[6] = enemy_Accessory1.getAllValues();
  }
  if ($('#Accessory2Container_enemy').attr('isConfirmed') == "true") {
    gearSaveData_o[7] = enemy_Accessory2.getAllValues();
  }

    var trgt = currIndexLi;
    UpdateCompareUnitsModal(sau_o, sGear_o, gearSaveData_o, true, false, storageID, trgt);
        });
        /* if (confirm('This will overwrite data of existing loadout. \nAre you sure? ')) { 

        
        
        
} */
    });
    currIndexLi_header_edittext_btn.on('click',function() {

       /*  currIndexLi_header_edit.hide()
        currIndexLi_header_svg.show();
        currIndexLi_header.show(); */
        
        //$('#activeEditText').removeAttr('id');

        var activeTextEdit = $('#activeEditText').next().find('input');
        if ($('#activeEditText').length === 0) {
            currIndexLi_header_edittext_btn.attr('id','activeEditText');
            currIndexLi_header_edit.attr('id','activeEditTextEdt');
            currIndexLi_header.attr('id','activeEditTextHd');

            currIndexLi_header_svg.hide();
            currIndexLi_header_confirm_btn_svg.show();
            currIndexLi_header_cancel_btn_svg.show();
            currIndexLi_header.hide();
            currIndexLi_header_input.val(currIndexLi_header.text());
            currIndexLi_header_edit.show();
            
        } else {
            /* clearTimeout(shakeTmt_edittext);
            activeTextEdit.addClass('shake')
            shakeTmt_edittext = setTimeout(function() {
                activeTextEdit.removeClass('shake')
                shakeTmt_edittext = null;
            },820) */
            
            $('#activeEditTextEdt').hide()
            $('#activeEditText').show();
            $('#activeEditTextHd').show();
        
        $('#activeEditText').removeAttr('id');
        $('#activeEditTextEdt').removeAttr('id');
        $('#activeEditTextHd').removeAttr('id');

        currIndexLi_header_edittext_btn.attr('id','activeEditText');
            currIndexLi_header_edit.attr('id','activeEditTextEdt');
            currIndexLi_header.attr('id','activeEditTextHd');

            currIndexLi_header_svg.hide();
            currIndexLi_header_confirm_btn_svg.show();
            currIndexLi_header_cancel_btn_svg.show();
            currIndexLi_header.hide();
            currIndexLi_header_input.val(currIndexLi_header.text());
            currIndexLi_header_edit.show();
        }
        
        
    });
    currIndexLi_header_confirm_btn.on('click',function() {
        
        
        
        currIndexLi_header.text(currIndexLi_header_input.val());
        currIndexLi_header_edit.hide()
        currIndexLi_header_svg.show();
        currIndexLi_header.show();

                localStorageData_compare_units = sau;
                localStorageData_compare_units[8] = [currIndexLi_header.text()];
                localStorage.setItem(cScountInd, JSON.stringify(localStorageData_compare_units));

                $('#activeEditText').removeAttr('id');
                $('#activeEditTextEdt').removeAttr('id');
                $('#activeEditTextHd').removeAttr('id');

    });
    currIndexLi_header_cancel_btn.on('click',function() {
        currIndexLi_header_edit.hide()
        currIndexLi_header_svg.show();
        currIndexLi_header.show();
        
        $('#activeEditText').removeAttr('id');
        $('#activeEditTextEdt').removeAttr('id');
        $('#activeEditTextHd').removeAttr('id');
    });

    currIndexLi_header_btn_chooseToCompare.on('click',function() {
        if ($('.btn_chooseToCompare').length > 1) {
            cUnit_info_container.attr('id','cUnitID')
            cTarget_info_container.attr('id','cTargetID')
            currIndexLi_header.attr('id','cHeaderID')
            $('.btn_chooseToCompare').hide();
            $('.btn_selectForCompare').show();
            currIndexLi_header_btn_selectForCompare.hide();
            currIndexLi_header_btn_chooseToCompare_Cancel.show();
        } else {
            $('#toastForCompareFail').removeClass('hide');
            $('#toastForCompareFail').addClass('show');
            $('#toastForCompareFail small').html('closes in 5 sec')
            clearInterval(nToastIntervalID);
            clearTimeout(nToastTimeoutID);
            nToastTimeoutID = null;
            nIntervId = null;
            var ert = 5;
            nToastIntervalID = setInterval(function() {
                ert--;
                $('#toastForCompareFail small').html('closes in '+ert+' sec')
                
            }, 1000);
            nToastTimeoutID = setTimeout(function(){
            $('#toastForCompareFail').removeClass('show');
            $('#toastForCompareFail').addClass('hide');
            clearInterval(nToastIntervalID);
            nToastIntervalID = null;}, 6000);
        }
        
    });
    currIndexLi_header_btn_chooseToCompare_Cancel.on('click',function() {
        $(this).hide();
        $('.btn_selectForCompare').hide();
        $('.btn_chooseToCompare').show();
    })
    currIndexLi_header_btn_selectForCompare.on('click',function() {
        console.time('btn_selectForCompare')
        var cUnitID = $('#cUnitID');
        var cTargetID = $('#cTargetID');
        var cHeaderID = $('#cHeaderID');
         var cUnit_val = cUnitID.attr('value').split(',');
         var cTarget_val = cTargetID.attr('value').split(',');
         var cUnit_subvalue = [];
         cUnit_subvalue = cUnitID.attr('subvalue').split(',');
         var cTarget_subvalue = [];
         cTarget_subvalue = cTargetID.attr('subvalue').split(',');


        var cCompares_Length = [cUnit_val.length,sau[10].length,cTarget_val.length,sau[11].length];
        //$('#unit-container_line_0'); // can use document.getElementByClassName('unit-container_line')[0]; or $('.unit-container_line').eq(0) or $('.unit-container_line:nth-child(0)') however last is much slower.

        
        
        
        $('.btn_chooseToCompareCancel').hide();
        $('.btn_selectForCompare').hide();
        $('.btn_chooseToCompare').show();
        //$('#ComparingSelectedUnitsModal-main').html(' <div class="unit-container_line" id="unit-container_line_0"> <div class="unit-container_icon" id="unit-container_icon_0"> '+cUnit_subvalue[0]+' '+cUnit_subvalue[1]+' <img src="'+cUnitID.children().eq(0).attr('src')+'" alt=""> </div></div> <div class="unit-container_line" id="unit-container_line_1"> <div class="unit-container_icon" id="unit-container_icon_1"> '+sau[0]+' '+sau[1]+' <img src="'+sau[2]+'" alt=""> </div> </div> <div class="unit-container_line" id="unit-container_line_2"> <div class="unit-container_icon" id="unit-container_icon_2"> '+cTarget_subvalue[0]+' '+cTarget_subvalue[1]+' <img src="'+cTargetID.children().eq(0).attr('src')+'" alt=""> </div> </div> <div class="unit-container_line" id="unit-container_line_3"> <div class="unit-container_icon" id="unit-container_icon_3"> '+sau[4]+' '+sau[5]+' <img src="'+sau[6]+'" alt=""> </div> </div>');
        var uctL = [];
        uctL[0] = $('#unit-container_line_0');
        uctL[1] = $('#unit-container_line_1');
        uctL[2] = $('#unit-container_line_2');
        uctL[3] = $('#unit-container_line_3');

        uctL[4] = $('#unit-container_line_4');
        uctL[5] = $('#unit-container_line_5');
        uctL[6] = $('#unit-container_line_6');
        uctL[7] = $('#unit-container_line_7');
        var uctI = [];
        uctI[0] = $('#unit-container_icon_0');
        uctI[1] = $('#unit-container_icon_1');
        uctI[2] = $('#unit-container_icon_2');
        uctI[3] = $('#unit-container_icon_3');

        uctI[4] = $('#unit-container_icon_4');
        uctI[5] = $('#unit-container_icon_5');
        uctI[6] = $('#unit-container_icon_6');
        uctI[7] = $('#unit-container_icon_7');
        uctI[0].html('<div class="uct_header_outer"> <span class="uHeaderName"> </span> <div class="uct_header" id="ucth_0"> <img src="'+cUnitID.children().eq(0).attr('src')+'" alt="" draggable="false">  </div> <div class="text-truncate" style="width: max-content;"> <small>' +cUnit_subvalue[0]+'</small><br/> '+cUnit_subvalue[1]+'</div> </div><div class="uctIc"><br/><br/>  <img src="" alt=""></div>');
        uctI[0].append('<div id="unit-compare_container_mainstats_0"> </div>');
        uctI[0].append('<div class="unit-compare_container_otherstats" id="unit-compare_container_otherstats_0"> </div>');

        uctI[1].html('<div class="uct_header_outer"> <span class="uHeaderName"> </span> <div class="uct_header" id="ucth_1"> <img src="'+sau[2]+'" alt="" draggable="false"></div> <div class="text-truncate" style="width: max-content;"><small>' +sau[0]+'</small><br/>  '+sau[1]+'</div>  </div><div class="uctIc"><br/><br/>  <img src="" alt=""></div>');
        uctI[1].append('<div id="unit-compare_container_mainstats_1"> </div>');
        uctI[1].append('<div class="unit-compare_container_otherstats" id="unit-compare_container_otherstats_1"> </div>');

        uctI[2].html('<div class="uct_header_outer"> <span class="uHeaderName"> </span><div class="uct_header" id="ucth_2"><img src="'+cTargetID.children().eq(0).attr('src')+'" alt="" draggable="false"> </div> <div class="text-truncate" style="width: max-content;"><small>' +cTarget_subvalue[0]+'</small><br/>  '+cTarget_subvalue[1]+'</div></div><div class="uctIc"><br/><br/>  <img src="" alt=""></div>');
        uctI[2].append('<div id="unit-compare_container_mainstats_2"> </div>');
        uctI[2].append('<div class="unit-compare_container_otherstats" id="unit-compare_container_otherstats_2"> </div>');

        uctI[3].html('<div class="uct_header_outer"> <span class="uHeaderName"> </span><div class="uct_header" id="ucth_3"><img src="'+sau[6]+'" alt="" draggable="false">  </div> <div class="text-truncate" style="width: max-content;"><small>' + sau[4]+'</small><br/>  '+sau[5]+'</div> </div><div class="uctIc"><br/><br/>  <img src="" alt=""></div>');
        uctI[3].append('<div id="unit-compare_container_mainstats_3"> </div>');
        uctI[3].append('<div class="unit-compare_container_otherstats" id="unit-compare_container_otherstats_3"> </div>');

        uctI[4].html('<div class="uctIc"><br/><br/>  <img src="" alt=""></div> ');
        uctI[4].append('<div id="unit-compare_container_mainstats_4"> </div>');
        uctI[4].append('<div class="unit-compare_container_otherstats" id="unit-compare_container_otherstats_4"> </div>');

        uctI[5].html('<div class="uctIc"><small><br/></small><br/>  <img src="" alt=""></div> ');
        uctI[5].append('<div id="unit-compare_container_mainstats_5"> </div>');
        uctI[5].append('<div class="unit-compare_container_otherstats" id="unit-compare_container_otherstats_5"> </div>');
        
        uctI[6].html('<div class="uctIc"><br/><br/>  <img src="" alt=""></div> ');
        uctI[6].append('<div id="unit-compare_container_mainstats_6"> </div>');
        uctI[6].append('<div class="unit-compare_container_otherstats" id="unit-compare_container_otherstats_6"> </div>');

        uctI[7].html('<div class="uctIc"><small><br/></small><br/>  <img src="" alt=""></div> ');
        uctI[7].append('<div id="unit-compare_container_mainstats_7"> </div>');
        uctI[7].append('<div class="unit-compare_container_otherstats" id="unit-compare_container_otherstats_7"> </div>');


        var uctI_d = [];
        uctI_d[0] = $('#unit-compare_container_mainstats_0');
        uctI_d[1] = $('#unit-compare_container_mainstats_1');
        uctI_d[2] = $('#unit-compare_container_mainstats_2');
        uctI_d[3] = $('#unit-compare_container_mainstats_3');
        
        uctI_d[4] = $('#unit-compare_container_mainstats_4');
        uctI_d[5] = $('#unit-compare_container_mainstats_5');
        uctI_d[6] = $('#unit-compare_container_mainstats_6');
        uctI_d[7] = $('#unit-compare_container_mainstats_7');

        var uctI_o = [];
        uctI_o[0] = $('#unit-compare_container_otherstats_0');
        uctI_o[1] = $('#unit-compare_container_otherstats_1');
        uctI_o[2] = $('#unit-compare_container_otherstats_2');
        uctI_o[3] = $('#unit-compare_container_otherstats_3');

        uctI_o[4] = $('#unit-compare_container_otherstats_4');
        uctI_o[5] = $('#unit-compare_container_otherstats_5');
        uctI_o[6] = $('#unit-compare_container_otherstats_6');
        uctI_o[7] = $('#unit-compare_container_otherstats_7');


        CreateTooltipForAnything($('#ucth_0'), '<b>' + cHeaderID.text() + '</b>','Data from:')
        CreateTooltipForAnything($('#ucth_1'), '<b>' + localStorageData_compare_units[8] + '</b>','Data from:') //$('#csum-m2') as anchor
        CreateTooltipForAnything($('#ucth_2'), '<b>' + cHeaderID.text() + '</b>','Data from:')
        CreateTooltipForAnything($('#ucth_3'), '<b>' + localStorageData_compare_units[8] + '</b>','Data from:')




        var cUnit_val_Left = [];
        var sau10_Left = [];

        var cTarget_val_Left = [];
        var sau11_Left = [];

        var fadb = [];
        for (let i = 0, n = BONUS_STATS_LIST.length; i < n; i++) {
            fadb[i] = BONUS_STATS_LIST[i];
        }
        fadb.push('EHP','Final EHP','DPS','Durability')

        var indxOfval = 0;
        var indxOfval2 = 0;
        var indxOfval3 = 0;
        var indxOfval4 = 0;

        cUnit_val_Left = cUnit_val.slice(0,cCompares_Length[0]/2);
        sau10_Left = sau[10].slice(0,cCompares_Length[1]/2);

        cTarget_val_Left = cTarget_val.slice(0,cCompares_Length[2]/2);
        sau11_Left = sau[11].slice(0,cCompares_Length[3]/2);


        var cUnit_Left = [...new Set(cUnit_val_Left.concat(sau10_Left))];
        var cUnit_Left_sorted = [];

        var cTarget_Left = [...new Set(cTarget_val_Left.concat(sau11_Left))];
        var cTarget_Left_sorted = [];
        
        for (let i = 0, n = cUnit_Left.length; i < n; i++) {
            cUnit_Left_sorted[fadb.indexOf(cUnit_Left[i])] = cUnit_Left[i]
        }
        for (let i = 0, n = cTarget_Left.length; i < n; i++) {
            cTarget_Left_sorted[fadb.indexOf(cTarget_Left[i])] = cTarget_Left[i]
        }
        cUnit_Left_sorted = cUnit_Left_sorted.filter(Boolean);
        cTarget_Left_sorted = cTarget_Left_sorted.filter(Boolean);

       /*  cUnit_Left_sorted.push('EHP','Final EHP')
        cTarget_Left_sorted.push('EHP','Final EHP') */



        var cBothLen = [...new Set(cUnit_Left_sorted.concat(cTarget_Left_sorted))];

        for (let i = 0, n = cBothLen.length; i < n; i++) {
            
            
            if (i < 6) {
                var u_1stat = IFERROR(Number(sau[10][(cCompares_Length[1]/2+i)]),0);
                var u_2stat = IFERROR(Number(cUnit_val[(cCompares_Length[0]/2+i)]),0);
                uctI_d[4].append(cUnit_Left_sorted[i] + ': ' + '<br />');
            uctI_d[6].append(cTarget_Left_sorted[i] + ': ' + '<br />');
            
                uctI_d[0].append(cUnit_val[(cCompares_Length[0]/2+i)] +  '<br />');
                uctI_d[1].append(sau[10][(cCompares_Length[1]/2+i)] +  '<br />');
                uctI_d[2].append(cTarget_val[(cCompares_Length[2]/2+i)] + '<br />');
                uctI_d[3].append(sau[11][(cCompares_Length[3]/2+i)] +  '<br />');
                if ((u_1stat - u_2stat) == 0) {
                    uctI_d[5].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                    
                } else {
                    uctI_d[5].append(((u_1stat >= u_2stat)  ?  '<span class="text-success">+' + (u_1stat - u_2stat):'<span class="text-danger">' + (u_1stat - u_2stat)) + '</span><br />');
                }
                var u_1stat = IFERROR(Number(sau[11][(cCompares_Length[3]/2+i)]),0);
                var u_2stat = IFERROR(Number(cTarget_val[(cCompares_Length[2]/2+i)]),0);
                if ((u_1stat - u_2stat) == 0) {
                    uctI_d[7].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                } else {
                    uctI_d[7].append(((u_1stat >= u_2stat)  ?  '<span class="text-success">+' + (u_1stat - u_2stat):'<span class="text-danger">' + (u_1stat - u_2stat)) + '</span><br />');    
                }
                
            } else if (i >= 6) {
                indxOfval = cUnit_val.indexOf(cUnit_Left_sorted[i]);
                indxOfval2 = sau[10].indexOf(cUnit_Left_sorted[i]);

                if ((indxOfval != -1) || (indxOfval2 != -1)) {
                    var u_1stat = IFERROR(Number(sau[10][indxOfval2+(cCompares_Length[1]/2)]),0);
                    var u_2stat = IFERROR(Number(cUnit_val[indxOfval+(cCompares_Length[0]/2)]),0);
                    uctI_o[4].append(cUnit_Left_sorted[i] + ': ' + '<br />');

                        if (cUnit_Left_sorted[i] === 'EHP') {
                                uctI_o[0].append((u_2stat) + '<br />');
                                uctI_o[1].append((u_1stat) + '<br />');

                                if (u_1stat-u_2stat == 0) {
                                    uctI_o[5].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                                } else {
                                    uctI_o[5].append( (u_1stat >= u_2stat ? '<span class="text-success">+'+ (u_1stat-u_2stat) + '</span>':'<span class="text-danger">'+ (u_1stat-u_2stat) + '</span>') +  '<br />');

                                }

                            } else if (cUnit_Left_sorted[i] === 'Final EHP') {
                                uctI_o[0].append((u_2stat) + '<br />');
                                uctI_o[1].append((u_1stat) + '<br />');
                                if (u_1stat-u_2stat == 0) {
                                    uctI_o[5].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                                } else {
                                    uctI_o[5].append( (u_1stat >= u_2stat ? '<span class="text-success">+'+ (u_1stat-u_2stat) + '</span>':'<span class="text-danger">'+ (u_1stat-u_2stat) + '</span>') +  '<br />');

                                }
                                } else if (cUnit_Left_sorted[i] === 'DPS') {
                                uctI_o[0].append((u_2stat) + '<br />');
                                uctI_o[1].append((u_1stat) + '<br />');

                                if (u_1stat-u_2stat == 0) {
                                    uctI_o[5].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                                } else {
                                    uctI_o[5].append( (u_1stat >= u_2stat ? '<span class="text-success">+'+ (u_1stat-u_2stat) + '</span>':'<span class="text-danger">'+ (u_1stat-u_2stat) + '</span>') +  '<br />');

                                }

                            } else {
                                
                                if (u_1stat-u_2stat == 0) {
                                    uctI_o[5].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                                } else {
                                    uctI_o[5].append((u_1stat >= u_2stat ? '<span class="text-success">+'+ ((u_1stat-u_2stat)*100).toFixed(1).replace(/[.,]0+$/, "") + '%</span>':'<span class="text-danger">'+ ((u_1stat-u_2stat)*100).toFixed(1).replace(/[.,]0+$/, "") + '%</span>') +  '<br />');

                                }
                                if (indxOfval2 !== -1) {
                            u_1stat = (Number(sau[10][indxOfval2+(cCompares_Length[1]/2)])*100).toFixed(1).replace(/[.,]0+$/, ""); 
                            uctI_o[0].append((u_1stat) + '%' +  '<br />');
                           
                        } else {
                            uctI_o[0].append('- <br />');
                        }
                        if (indxOfval !== -1) {
                            u_2stat = (Number(cUnit_val[indxOfval+(cCompares_Length[0]/2)])*100).toFixed(1).replace(/[.,]0+$/, "");
                            uctI_o[1].append((u_2stat) + '%' +  '<br />');
                        } else {
                            uctI_o[1].append('- <br />');
                        }
                            }

                        

                        

                        
                    }


                indxOfval3 = cTarget_val.indexOf(cTarget_Left_sorted[i]);
                indxOfval4 = sau[11].indexOf(cTarget_Left_sorted[i]);

                if ((indxOfval3 != -1) || (indxOfval4 != -1)) {

                    var u_1stat = IFERROR(Number(sau[11][indxOfval4+(cCompares_Length[3]/2)]),0); 
                    var u_2stat = IFERROR(Number(cTarget_val[indxOfval3+(cCompares_Length[2]/2)]),0);


                    if (cTarget_Left_sorted[i] === 'EHP') {
                        
                    uctI_o[6].append(cTarget_Left_sorted[i] + ': ' + '<br />');
                            uctI_o[2].append((u_2stat) + '<br />');
                            uctI_o[3].append((u_1stat) + '<br />');
                            if (u_1stat-u_2stat == 0) {
                                uctI_o[7].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                            } else {
                            uctI_o[7].append( (u_1stat >= u_2stat ? '<span class="text-success">+'+ (u_1stat-u_2stat) + '</span>':'<span class="text-danger">'+ (u_1stat-u_2stat) + '</span>') +  '<br />');

                            }                            } else if (cTarget_Left_sorted[i] === 'Final EHP') {
                                
                    uctI_o[6].append(cTarget_Left_sorted[i] + ': ' + '<br />');
                            uctI_o[2].append((u_2stat) + '<br />');
                            uctI_o[3].append((u_1stat) + '<br />');


                            if (u_1stat-u_2stat == 0) {
                                uctI_o[7].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                            } else {
                            uctI_o[7].append( (u_1stat >= u_2stat ? '<span class="text-success">+'+ (u_1stat-u_2stat) + '</span>':'<span class="text-danger">'+ (u_1stat-u_2stat) + '</span>') +  '<br />');

                            }

                            } else if (cTarget_Left_sorted[i] === 'Durability') {
                                
                    uctI_o[6].append('Alive for' + ': ' + '<br />');
                            uctI_o[2].append((u_2stat) + '<br />');
                            uctI_o[3].append((u_1stat) + '<br />');
                            if (u_1stat-u_2stat == 0) {
                                uctI_o[7].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                            } else {
                                uctI_o[7].append( (u_1stat >= u_2stat ? '<span class="text-success">+'+ (u_1stat-u_2stat).toFixed(2).replace(/[.,]0+$/, "") + ' sec.</span>':'<span class="text-danger">'+ (u_1stat-u_2stat).toFixed(2).replace(/[.,]0+$/, "") + ' sec. </span>') +  '<br />');

                            }


                            
                        } else {
                                
                    uctI_o[6].append(cTarget_Left_sorted[i] + ': ' + '<br />');
                    if (u_1stat-u_2stat === 0) {
                        uctI_o[7].append('<span class="text-secondary">'+ 0 + '</span>' +  '<br />');
                          
                    } else {
                        uctI_o[7].append( (u_1stat >= u_2stat ? '<span class="text-success">+'+ ((u_1stat-u_2stat)*100).toFixed(1).replace(/[.,]0+$/, "") + '%</span>':'<span class="text-danger">'+ ((u_1stat-u_2stat)*100).toFixed(1).replace(/[.,]0+$/, "") + '%</span>') +  '<br />');
                        
                    }
                                if (indxOfval4 !== -1) {
                            u_1stat = (Number(sau[11][indxOfval4+(cCompares_Length[3]/2)])*100).toFixed(1).replace(/[.,]0+$/, "");
                            uctI_o[2].append((u_1stat) + '%' +  '<br />');
                        } else {
                            uctI_o[2].append('- <br />');
                        }
                        if (indxOfval3 !== -1) {
                            u_2stat = (Number(cTarget_val[indxOfval3+(cCompares_Length[2]/2)])*100).toFixed(1).replace(/[.,]0+$/, "");
                            uctI_o[3].append((u_2stat) + '%' +  '<br />');
                        } else {
                            uctI_o[3].append('- <br />');
                        }
                            }

                        
                        

                        
                    }
            } 

            
        }
        
        $('#cUnitID').removeAttr('id');
        $('#cTargetID').removeAttr('id');
        $('#cHeaderID').removeAttr('id');
        $('#compare_selectedUnitsModal').modal('show');
        
        /* $('.ComparingSelectedUnitsModal-main').off('.ttDrag')
        $('.ComparingSelectedUnitsModal-main').removeClass('scrollable')
        SetScrollable($('.ComparingSelectedUnitsModal-main')); */
        cUnitID = null;
        cTargetID = null;
        console.timeEnd('btn_selectForCompare')
    });
    //currIndexLi_header_btn_ExtraBtn.on('click',function() {});
    
    

} else {
        console.log('limit');
    }
    console.timeEnd('UpdateCompareUnitsModal_f');
}


