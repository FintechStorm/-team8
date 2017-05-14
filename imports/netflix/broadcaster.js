import {
    Template
} from 'meteor/templating';
import {broadcast_abi, BroadcastContract} from './BroadcastContract.js';
import "./broadcaster.html";
import Web3 from 'web3';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.coinbase;
var caddress;
var setContract = function(contract_address){
var contract_instance = web3.eth.contract(broadcast_abi).at(contract_address);
return contract_instance;
}

Template.broadcast.events({ 
    'click #submit': function(event, template) { 
        BroadcastContract(function(address){
            var contract = setContract(address);
			// console.log('start :::: '+$('#startDate').val());
		    console.log('bstartDate:: '+$('#startDate').val());
			localStorage.setItem('bstartDate',$('#startDate').val());
			localStorage.setItem('bendDate',$('#endDate').val());
			localStorage.setItem('royalty_percent',$('#royalty_percent').val());
			localStorage.setItem('product',$('#product').val());
			localStorage.setItem('fee',$('#fee').val());
			localStorage.setItem('rights',$('#rights').val());

            contract.setDataFirst($('#licensor').val(),$('#customer').val(),$('#product').val());
            contract.setDataSecond($('#datepicker').val(),$('#rights').val(),$('#currency').val());
            contract.setDataThird($('#excl').val(),$('#channel').val(),$('#royalty_percent').val());
            contract.setDates($('#startDate').val(),$('#endDate').val(),$('#fee').val());
        });
         
    } 
});

Template.broadcast.onRendered(function () {

var totalbal= localStorage.getItem('totalbalstud');
console.log(totalbal+" totalbal");

if(totalbal == null || totalbal==""){
$("#bal").text(5000);
}else{
   var bal= $("#bal").text();
   console.log(parseInt(bal)+"bal");
   var tot= parseInt(bal)-parseInt(totalbal)
    console.log(tot+"   tot");
	if(tot == NaN){
  $("#bal").text(5000);
	}else{
   $("#bal").text(tot);
	}

}


    $("#datepicker").datepicker({
        autoclose: true,
        format: "dd/mm/yyyy"
    });
    $("#startDate").datepicker({
        autoclose: true,
        format: "dd/mm/yyyy"
    });
    $("#endDate").datepicker({
        autoclose: true,
        format: "dd/mm/yyyy"
    });
//$("#accountinfo").datepicker();
    
$('.tabNav li').each(function(){
		/*$(this).css({
			'width' : (100 / ( $('li:last-child').index('li') + 1 ) ) +  '%'
		})*/
		var tabContent = $(this).html();
		var relation = $(this).find('a').attr('rel')
		var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
		resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
	})
	/*script for mobile navigation */
	$(document).on('click','.mobile-menu',function(){
		if($(this).next('.content').css('display') == 'none')
		{
			$(this).closest('.tabResult').find('.content').slideUp();
			$(this).next('.content').slideDown();
		}
		else
		{
			$('.tabResult .tabBx .content').slideUp();
		}
	})
	/*script for desktop navigation */
	$('.tabNav li a').click(function(){
		var relation = $(this).attr('rel')
		var tabNavigation = $(this).parents('.tabNav')
		var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
		
		tabNavigation.children().find('a').removeClass('active');
		tabNavigation.children().find('li').removeClass('activeli')
		$(this).addClass('active');
		$(this).parents('li').addClass('activeli');
		
		if(resultCnt.children('div#'+relation).css('display') == 'none')
		{
			resultCnt.children('div').slideUp();
			resultCnt.children('div#'+relation).slideDown();
		}
		else
		{
			resultCnt.children('div#'+relation).slideUp();
		}
	})    
});

	Template.broadcast.events({ 
		'click #submit1': function(event, template) { 
			
			var viewcount=$("#view").val();
			console.log("submit1  ::: "+viewcount);
			var mainbalance=$("#bal").text();
			console.log("submit1 mainbalance  ::: "+mainbalance);
            var viewBal=parseInt(viewcount)*100;
			console.log("submit1 viewBal  ::: "+viewBal);
			var showbal=parseInt(mainbalance)-parseInt(viewBal);
			console.log("submit1 showbal  ::: "+showbal);
			$("#bal").text(showbal);
			$("#royaltyp").text(viewBal);
			 BroadcastContract(function(address){
            var contract = setContract(address);
            contract.setDataFirst($('#licensor').val(),$('#customer').val(),$('#product').val());
			localStorage.setItem('viewBal',viewBal);
				});
				}
			});