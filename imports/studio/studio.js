import {
    Template
} from 'meteor/templating';
import Web3 from 'web3';
import {
    royalty_abi,
    RoyaltyContract
} from './RoyaltyContract.js'
import "./studio.html";

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.coinbase;
var caddress;
var setContract = function(contract_address){
var contract_instance = web3.eth.contract(royalty_abi).at(contract_address);
return contract_instance;
}
//localStorage.clear();
var b_arr = [];
Template.studio.onRendered(function () {

var sdate=localStorage.getItem('bstartDate');
var edate=localStorage.getItem('bendDate');
var totalbal= localStorage.getItem('totalbal');
var royaltybal= localStorage.getItem('viewBal');
console.log(totalbal+" totalbal");
$("#sdate").text(sdate);
$("#edate").text(edate);
if(totalbal == null){
$("#bal").text(5000);
}else if(royaltybal != null && totalbal != null){
     var bal= $("#bal").text();
     console.log("bal :: "+bal);
     var royalbal=parseInt(royaltybal) * 0.5;
    var royalbalan=parseInt(bal)+royalbal;
    localStorage.setItem('royalbal',royalbal);
    console.log(" royalbal ::::  "+royalbal);
   $("#bal").text(royalbalan); 
   $("#royalpay").text(royalbal); 
}else{
   var bal= $("#bal").text();
   console.log(parseInt(bal)+"bal");
   var tot= parseInt(bal)-parseInt(totalbal);
$("#bal").text(tot);
}


    $( "#datepicker" ).datepicker({
        autoclose: true,
        format: "dd/mm/yyyy"
    });

    $('#enddate').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy"
    });


    var notify = setInterval(function () {
        var broad_addr = localStorage.getItem('broad_addr');
        var notify_count = parseInt($('#notify').find('span').text());
        if (broad_addr != null && $.inArray(broad_addr, b_arr) == -1) {
            b_arr.push(broad_addr);
            $('#notify').find('span').text(notify_count + 1);
            //Add Code to trigger notification
        }
    }, 1000);
	
});
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
Template.studio.events({
            'click #submit': function (event, template) {
                var payee = $("#payee").val();
                var royaltypercentage = $("#payementpercentage").val();
                var datep = $("#datepicker").val();
                var payementcurrency = $("#payementcurrency").val();
                var paymentdelivery = $("#paymentdelivery").val();
                var fee = $('#fee').val();
                var endDate = $('#enddate').val();
                console.log(endDate+" :::endDate");
                
                localStorage.setItem('startDateact',datep);
			    localStorage.setItem('actorendDate',endDate);
                localStorage.setItem('royaltypercentage',royaltypercentage);
                localStorage.setItem('payementcurrency',payementcurrency);
                localStorage.setItem('fee',fee);
                localStorage.setItem('paymentdelivery',paymentdelivery);


                RoyaltyContract(function(data) {
                        caddress = data;
                        var contract = setContract(caddress);
                        contract.setRightIn_first(payee, payementpercentage, datep);
                        contract.setRightIn_second(payementcurrency, paymentdelivery, fee)
                    });
                },

                'click #notification-count': function (event, template) {
                       console.log("bs :: "+localStorage.getItem('bstartDate'));
                       $("#value3").text(localStorage.getItem('bstartDate'));
                       $("#value4").text(localStorage.getItem('bendDate'));
                         $("#value5").text(localStorage.getItem('royalty_percent'));
                         $("#value1").text(localStorage.getItem('product'));
                         $("#value6").text(localStorage.getItem('fee'));
                         $("#value2").text(localStorage.getItem('rights'));

               overlayBox('notification-overlay');
                }
               });
            
        Template.studio.events({
            'click #sign-note': function (event, template) {
                  var fixeAmt=localStorage.getItem('fee');
                  console.log("fixeAmt ::: "+fixeAmt);
                  var bal= $("#bal").text();
                  console.log("bal ::: "+bal);
                  $("#fixd").text(fixeAmt);
                  var totaAmt=parseInt(fixeAmt)+parseInt(bal);
                   console.log("totaAmt ::: "+totaAmt);
                   $("#bal").text(totaAmt);
                    localStorage.setItem('totalbalstud',fixeAmt);
              }
               });