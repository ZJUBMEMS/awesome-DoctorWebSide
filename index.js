var APP_ID = 'msPsA8aNeLWOVoJgnTK2IhFL-gzGzoHsz';
var APP_KEY = 'DSIy3Lmrgd6Qo9Ox0vWmuGRl';
AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});
localStorage.setItem('debug', 'leancloud*,LC*');
var query = new AV.Query("DiagnoseInfo");
query.ascending('createdAt');
query.find().then(function(result){
	for(var i = 0;i < result.length;i++){
		var div = $('#body');
		div.append('<div class="patient_info1"><a href="information.html?'+'phone='+ result[i].get('phone') + '"> 病人信息 </a></div>');
	}
})
