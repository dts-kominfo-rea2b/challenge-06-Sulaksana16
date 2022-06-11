// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
	const pfile1 = readFile(file1);
	const pfile2 = readFile(file2);
	const pfile3 = readFile(file3);

	Promise.all([pfile1, pfile2, pfile3])
		.then((values) => fnCallback(null, values))
		.catch((err) => fnCallback(err, null));
};

// readfile
function readFile(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			const result = processData(file, JSON.parse(data));
			resolve(result);
		});
	});
}
// get last word
function processData(file, data) {
	if (file == file1) {
		return data.message.split(' ')[1];
	} else if (file == file2) {
		return data[0].message.split(' ')[1];
	} else if (file == file3) {
		return data[0].data.message.split(' ')[1];
	}
}


