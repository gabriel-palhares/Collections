function getAdmins(map) {
	let admins = [];
	for ([key, value] of map) {
		if (value === 'Admin') {
			admins.push(key);
		}
	}
	return admins;
}

const usuarios = new Map();

usuarios.set ('Gabriel', 'Software Engineer');
usuarios.set ('Lua', 'Admin');
usuarios.set ('Luisa', 'UX Designer');
usuarios.set ('Ayla', 'Admin');


console.log (getAdmins(usuarios));