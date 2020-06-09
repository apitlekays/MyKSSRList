const tahunList = require('./src/tahun.json');
const subjekList = require('./src/subjek.json');
const standardKandungan = require('./src/standard_kandungan.json');
const standardPembelajaran = require('./src/standard_pembelajaran.json');

module.exports = {
    getAllTahun: function () {
        return tahunList;
    },
    getSubjectsByTahunID: function (idTahun) {
        let subjects = subjekList.filter(function (value){
            return value.id_tahun === idTahun
        })
        return subjects
    }
}