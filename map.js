function getAdmins(map) {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'Admin') {
			admins.push(key);
		}
	}

	return admins;
};

const usuarios = new Map();

usuarios.set('Stefanie', 'Admin');
usuarios.set('Jorge', 'Admin');
usuarios.set('Cleide', 'User');
usuarios.set('Nikole', 'Admin');

console.log(getAdmins(usuarios));