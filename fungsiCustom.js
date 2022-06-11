// TODO: import module bila dibutuhkan di sini
const fs = require('fs')

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  const array = [];

  firstRead(fnCallBack, array, () => {
    secondRead(fnCallBack, array, () => {
      thirdRead(fnCallBack, array)
    })
  })
}

const firstRead = (fnCallBack, array, callback) => {
  fs.readFile(file1, "utf-8", (err, data)=> {
    if(err){
      fnCallBack(err, null)
      return
    }
    array.push(processData(file1, JSON.parse(data)))
    callback(fnCallBack, array)
  })
}

const secondRead = (fnCallBack, array, callback) => {
  fs.readFile(file2, "utf-8", (err, data)=> {
    if(err){
      fnCallBack(err, null)
      return
    }
    array.push(processData(file2, JSON.parse(data)))
    callback(fnCallBack,array)
  })
}

const thirdRead = (fnCallBack, array) => {
  fs.readFile(file3, "utf-8", (err, data)=> {
    if(err){
      fnCallBack(err, null)
      return
    }
    array.push(processData(file3, JSON.parse(data)))
    fnCallBack(null, array)
  })
}

function processData(file, data) {
	if (file == file1) {
		return data.message.split(' ')[1];
	} else if (file == file2) {
		return data[0].message.split(' ')[1];
	} else if (file == file3) {
		return data[0].data.message.split(' ')[1];
	}
}

console.log(bacaData);
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
