onload = (() => {
	let exitBtn = document.getElementById('exit');
	
	let logOut = ()=> {
		window.location.href = '../index.html';
	}
	
	let exitAccount = () => {
		IN.User.logout(logOut);
	}
	
  exitBtn.addEventListener('click', exitAccount);
})();