onload = (()=> {
	IN.Event.on(IN, "auth", getProfileData);
	
	function onSuccess(data) {
		console.log(data);
		localStorage.user = data.firstName + ' ' + data.lastName;
		localStorage.place = data.headline;
		window.location.href = 'views/account.html';
	}
	
	function saveData(data){
		console.log(data);
	}
	
	function onError(error) {
    console.log(error);
  }

	
	function getProfileData() {
		IN.API.Raw('/people/~').result(onSuccess).error(onError);
    IN.API.Raw('/people/~:(first-name,last-name,num-connections,picture-url').result(saveData).error(onError);
  }
})();

