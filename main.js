#时长
#1分钟一页：清华
setInterval(function working(){
$('.page-left.ng-star-inserted')[1].click()
},1000*60);

#3分钟一页：随行课堂
setInterval(function working(){
NextSCO();
},1000*60*3);

#教学评估自动化选择
$("input[value='10_1']").prop("checked", true);//全部选择优
window.document.StDaForm.zgpj.value=" "//填写评价
flag=true;//结束倒计时
toEvaluation();//提交
