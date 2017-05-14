import { Template } from 'meteor/templating';
import "./actor.html";
import Web3 from 'web3';
import {
    royalty_abi,
    RoyaltyContract
} from '../studio/RoyaltyContract.js'
import { HTTP } from 'meteor/http';


var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.coinbase;
var caddress;
var setContract = function(contract_address){
var contract_instance = web3.eth.contract(royalty_abi).at(contract_address);
return contract_instance;
}

/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
  target = $('#' + popupID)
  animationIn = target.attr('data-animation-in');
  animationOut = target.attr('data-animation-out');
  if (typeof (animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '')
  {    
    animationIn = 'zoomIn';
  }
  if (typeof (animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '')
  {
    animationOut = 'zoomOut';
  }
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
}

/*Overlay function end*/

//localStorage.clear();
var s_arr = [];
Template.actor.onRendered(function () {

var sdate=localStorage.getItem('startDateact');
var edate=localStorage.getItem('actorendDate');
console.log(localStorage.getItem('startDateact'));
console.log(localStorage.getItem('actorendDate'));
var bal= $("#bal").text();
var royaltybal= localStorage.getItem('royalbal');
console.log("royaltybal :: "+royaltybal);
var ryaltyactor=royaltybal * 0.25;
console.log("ryaltyactor :: "+ryaltyactor);
console.log("bal :: "+bal);
 var royalbal=parseInt(bal)+parseInt(ryaltyactor);
  console.log(" royalbal ::::  "+royalbal);
 $("#bal").text(royalbal); 
 $("#royalty").text(ryaltyactor); 
$("#sdate").text(sdate);
$("#edate").text(edate);

    var notify = setInterval(function () {
        var studio_addr = localStorage.getItem('studio_addr');
        var notify_count = parseInt($('#notify').find('span').text());
        if (studio_addr != null && $.inArray(studio_addr, s_arr) == -1) {
            s_arr.push(studio_addr);
            $('#notify').find('span').text(notify_count + 1);
            //Add Code to trigger notification
        }
    }, 1000);
});

Template.actor.events({
            'click #notification-count': function (event, template) {

                // RoyaltyContract(function(data) {
                //         caddress = data;
                //         var contract = setContract(caddress);
                //       var firstData =  contract.getRightIn_first();
                //       console.log("firstData "+firstData);
                //        var secondData =   contract.getRightIn_second();
                //     });
                //     $("#payee").val(firstData[0]);
                 $("#value1").text(localStorage.getItem('startDateact'));
			           $("#value2").text(localStorage.getItem('actorendDate'));
                $("#value3").text(localStorage.getItem('royaltypercentage'));
                $("#value4").text(localStorage.getItem('payementcurrency'));
                $("#value6").text(localStorage.getItem('fee'));
                 $("#value5").text(localStorage.getItem('paymentdelivery'));

               overlayBox('notification-overlay')
                }
            });


            Template.actor.events({
            'click #sign-note': function (event, template) {
                  var fixeAmt=localStorage.getItem('fee');
                  console.log("fixeAmt ::: "+fixeAmt);
                  var bal= $("#bal").text();
                  console.log("bal ::: "+bal);
                  $("#fixd").text(fixeAmt);
                  var totaAmt=parseInt(fixeAmt)+parseInt(bal);
                   console.log("totaAmt ::: "+totaAmt);
                   $("#bal").text(totaAmt);
                    localStorage.setItem('totalbal',fixeAmt);
              }
               });