var APP_ID = 'msPsA8aNeLWOVoJgnTK2IhFL-gzGzoHsz';
var APP_KEY = 'DSIy3Lmrgd6Qo9Ox0vWmuGRl';
AV.init({
			appId: APP_ID,
			appKey: APP_KEY
		});
localStorage.setItem('debug', 'leancloud*,LC*');
var phone = document.URL.split('=')[1];
var query = new AV.Query("DiagnoseInfo");
query.equalTo('phone', phone);
query.ascending('createdAt');
query.first().then(function(result){
	var name = $('#name');
	name.get(0).innerHTML = result.get('name');
	var birthday = $('#birthday');
	birthday.get(0).innerHTML = result.get('birthday');
	var phone_number = $('#phone_number');
	phone_number.get(0).innerHTML = result.get('phone');
	var help = $('#expect_help');
	help.get(0).innerHTML = result.get('help');
	var addition = $('#plus_info');
	addition.get(0).innerHTML = result.get('addition');
	for(var i = 1;i <= 8;i++){
		var img = $('#photo_'+i);
		img.attr('src', result.get('pic'+i));
	}
	var button = $('#submit').get(0);
	button.onclick = function(){
		var backmessage = $('#diagnose').val();
		var LoadObject = AV.Object.extend('DiagnoseBack');
		var loadObject = new LoadObject();
		loadObject.set('phone', phone);
		loadObject.set('message', backmessage);
		loadObject.save().then(function(todo){
		var deleted = new AV.Query('DiagnoseInfo');
		deleted.ascending('createdAt');
		deleted.equalTo('phone', todo.get('phone'));
		deleted.first().then(function(result){
			result.destroy().then(function(success){
				alert('提交成功');
				window.location.href="index.html";
			})
		})
		}, function(error){
			console.error(error);
		});
	}
});