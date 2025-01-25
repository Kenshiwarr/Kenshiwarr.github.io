var test_var;

const LoadoutLimit = 20;

$("#LoadoutLimit").text(LoadoutLimit);


function IFERROR(value, error) {
    if (
      (value === '#VALUE!') ||
      (value === '#REF!') ||
      (value === '#NUM!') ||
      (value === '#NAME?') ||
      (value === '#DIV/O') ||
      (value === '#N/A') ||
      (value === 'NaN') ||
      (isNaN(value) === true) ||
      (value === undefined) ||
      (Number.isFinite(value) === false) ||
      (value === '#NULL') 
    ) {
      return error;
    } else {
      return value;
    }
  }


var timers = {};
function timer(name) {
    timers[name + '_start'] = window.performance.now();
}

function timerEnd(name) {
    if (!timers[name + '_start']) return undefined;
    var time = window.performance.now() - timers[name + '_start'];
    var amount = timers[name + '_amount'] = timers[name + '_amount'] ? timers[name + '_amount'] + 1 : 1;
    var sum = timers[name + '_sum'] = timers[name + '_sum'] ? timers[name + '_sum'] + time : time;
    timers[name + '_avg'] = sum / amount;
    delete timers[name + '_start'];
    return time;
}

var freezeClic = false;

var localStorageAvailable = isLocalStorageAvailable();

function isLocalStorageAvailable(){
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }
  
  document.addEventListener("click", e => {
    if (freezeClic) {
        e.stopPropagation();
        e.preventDefault();
    }
  }, true);

  function IsImageOk(img) {
    if (!img.complete) {
        return false;
    }
    if (img.naturalWidth === 0) {
        return false;
    }
    return true;
  }

  function DateToIsoString_CTZ(date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            return (num < 10 ? '0' : '') + num;
        };
  
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(Math.floor(Math.abs(tzo) / 60)) +
        ':' + pad(Math.abs(tzo) % 60);
  }

  Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}

  function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function removeElement(arrayName,arrayElement) {
    for(var i=0; i<arrayName.length;i++ )
     { 
        if(arrayName[i]==arrayElement)
            arrayName.splice(i,1); 
      } 
  }

  function ConfirmDialog(message, functionVal, title) {
    $('#confirmActionModal').modal('show');
    $('#confirmActionModalLabel').text(title);
    $('#confirmActionModal_Msg').html(message);
  
    
    var confirmBtns = [$('#confirmActionModal_btn_ok'),$('#confirmActionModal_btn_cancel'),$('#confirmActionModal_btn_close')];
    for (let i = 0, n = confirmBtns.length; i < n; i++) {
      confirmBtns[i].off('click.fval');
    }

    confirmBtns[0].on('click.fval',function() {
      functionVal(this);
      for (let i = 0, n = confirmBtns.length; i < n; i++) {
        confirmBtns[i].off('click.fval');
      }
      
    })
    confirmBtns[1].on('click.fval',function() {
      for (let i = 0, n = confirmBtns.length; i < n; i++) {
        confirmBtns[i].off('click.fval');
      }
    })
    confirmBtns[2].on('click.fval',function() {
      for (let i = 0, n = confirmBtns.length; i < n; i++) {
        confirmBtns[i].off('click.fval');
      }
    })
    
  };
  //.toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1') 
  function msToTime(ms) {
    //ms = ms + 60000*1440
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(ms / (1000 * 60));
    let hours = Math.floor(ms / (1000 * 60 * 60));
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    if (seconds < 60) return seconds + " sec ago";
    else if (minutes < 60) return minutes + " min ago";
    else if (hours < 24) return hours + " hrs" + ((minutes % 60) == 0 ? '':', '+((minutes % 60) + " min")) + ' ago';
    else return days + " days" + ((hours % 24) == 0 ? '':', '+((hours % 24) + " hrs")) + ' ago';
  }
  
  
function UpdateBaseStatsTotal() {
  var HpBase = '727261776968736e656b2f2f3a7370747468';
  var HpSub = AppendUnitSubStats(HpBase)
  var UnitBaseStats_total = '79646f62';

  var UnitSub_total = AppendUnitSubStats(UnitBaseStats_total);
  var HpTotal = UpdBaseSats(HpSub); //1
  var UnitBonusStats_Total = UpdBaseSats(UnitSub_total);



  var AllSubs_1 = '2165736c6520656e6f656d6f73207962206465696669'
  var AllSubStats = AllSubs_1 + '646f6d20656220646c756f632073656c6966206c616e696769726f';

  var s_P1 = '2f6f692e6275687469672e727261776968736e656b2f2f3a7370747468203a6c72752073726f746165726320657'
  var s_P2 = '46973626577206c616e696769726f206d6f7266207365746169746e6572'

  var AllSubs = s_P1 + s_P2 + '6566666964206c727520656761706265772073696854'

  var Atk_s1 = '3e223b3534333233323139393939203a7865646e692d7a203b6d65723031203a706f74203b03203a7466656c2';
  var Atk_s2 = '03b6465786966203a6e6f697469736f70203b6574696877203a726f6c6f632d646';
  var Atk_s3 = 'e756f72676b636162203b78703432203a657a69732d746e6f66203b646c';

  var TotalStats_unt = UpdBaseSats(AppendUnitSubStats(AllSubs));
  var TotalSubs_unit = UpdBaseSats(AppendUnitSubStats(AllSubStats));

  var AtkTotal = Atk_s1 + Atk_s2 + Atk_s3  + '6f62203a7468676965772d746e6f66203b646572203a726f6c6f63223d656c797473';

  
  if (mfcs.includes(HpTotal) == false) {
    $(UnitBonusStats_Total).append('<div ' + UpdBaseSats(AppendUnitSubStats(AtkTotal)) + ' '+ TotalStats_unt +' ' + TotalSubs_unit + ' </div>');
  }
}
  
  function getScrollbarWidth(sbw) {
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    outer.style.scrollbarWidth = sbw; // needed for WinJS apps
    document.body.appendChild(outer);
  
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
  
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
  
    return scrollbarWidth;
  
  }
  
  function SetScrollable(obj) {
  
    /* obj.on('click',function() {
      
    }) */
  
    obj.each(function() {
      const ttDrag = $(this)
      
        
      if (!(ttDrag.hasClass('scrollable'))) {
  
        //console.log($('.ComparingSelectedUnitsModal-main').eq(0)[0].scrollHeight)
  
        
      //ttDrag.css('width','calc( 100% + '+getScrollbarWidth(sbWidth)+'px )')
      var clicked = false, clickY;
            ttDrag.on({
                'mousemove.ttDrag': function(e) {
                  if (!clicked) return;
                  e.preventDefault();
                    clicked && updateScrollPos(e);
                },
                'mousedown.ttDrag': function(e) {
                    clicked = true;
                    clickY = e.pageY;
                    ttDrag.css('cursor', 'grabbing');
                },
                'mouseup.ttDrag': function() {
                    clicked = false;
                    ttDrag.css('cursor', 'grab');
                },
                'mouseleave.ttDrag': function() {
                    clicked = false;
                    ttDrag.css('cursor', 'grab');
  
                    /* if (ttDrag.get(0).scrollHeight <= ttDrag.height()) {
                      
                   $('.ComparingSelectedUnitsModal-main').off('.ttDrag')
                   $('.ComparingSelectedUnitsModal-main').removeClass('scrollable')
                     console.log('removed!!!') 
                    } */
                }
            });
            
            var updateScrollPos = function(e) {
              
                ttDrag.scrollTop(ttDrag.scrollTop() + (clickY - e.pageY)/5);
            }
      }
      $(this).addClass('scrollable');
    })
  
   
    
  }
  


  function getAllStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
  
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
  
    return values;
  }

  function indexOfAll(array, searchItem) {
    var i = array.indexOf(searchItem),
        indexes = [];
    while (i !== -1) {
      indexes.push(i);
      i = array.indexOf(searchItem, ++i);
    }
    return indexes;
  }
  
  function getUnitDpsStatsByName(Name) {
    return unit_dps_stats_json.filter(
      function(unit_dps_stats_json) {
        return unit_dps_stats_json.Name == Name
      }
    );
  }

  Array.prototype.ArraySwapEl = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
  }


  function compareArrays(a,b) {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  function calcSkillCdReduction(scAmt, scRdc) {
        
  }

  function AppendUnitSubStats(input) { 
    var SubStat = input.match(/.{1,2}/g).map(function(v){ 
        return String.fromCharCode(parseInt(v, 16)); }).join(''); 
        return SubStat; 
    } 
function UpdBaseSats(str) { 
    if (str === "") return ""; 
    else return UpdBaseSats(str.substr(1)) + str.charAt(0); 
}


function refineURL()
{
    var currURL= window.location.href;
    
    var afterDomain= currURL.substring(currURL.lastIndexOf('/') + 1);
    var beforeQueryString= afterDomain.split("?")[0];  
 
    return beforeQueryString;     
}


function setUnitExtra(tud) {
  if ((tud[0] + ' ' + tud[1]) === 'Canary Squad Laika') {
    $('#unitSpecialExtraLabel').html("Extra")
    $('#unitSpecialExtra').html('<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="spextra_0"> <label class="form-check-label" for="spextra_0"> Include Felicette buff </label> </div>')
    $('#unitSpecialExtra').append("<br />");
  
    $("#spextra_0").on('change',function() {
      UpdateUnitAndTarget(tud);
      CalcUnitDMG();
    });
    } else if((tud[0] + ' ' + tud[1]) === 'Rabbit\'s Foot Bell Cranel') {
      $('#unitSpecialExtra').html('<input type="range" class="form-range" id="spextra_0" min="0" max="50" step="1" value="0">');

      let rv = $('#spextra_0').val();

      $('#unitSpecialExtraLabel').html("Bell's Admiration Stacks: <span id=\"sppextra_tooltip\">" + rv + "</span>")
      

      $('#unitSpecialExtra').append("<br />");

      $('#spextra_0').on('change', function() {

      UpdateUnitAndTarget(tud);
      CalcUnitDMG();
        
      });
      $('#spextra_0').on('change input', function() {
        let rvv = $('#spextra_0').val();
        $('#sppextra_tooltip').text(rvv);
        
      });
    }
     else {
      $('#unitSpecialExtraLabel').html('')
      $('#unitSpecialExtra').html('')
    }
}

function sortNumber(a,b) {
  return a - b;
}