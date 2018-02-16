onload = (() => {
	let exitBtn = document.getElementById('exit');
	let user = document.getElementById('user');
	let info = document.getElementById('mail');
	
	user.innerText = localStorage.user;
	info.innerText = localStorage.place;
	
	let logOut = ()=> {
		window.location.href = '../index.html';
	}
	
	let exitAccount = () => {
		IN.User.logout(logOut);
	}
	
  exitBtn.addEventListener('click', exitAccount);
})();