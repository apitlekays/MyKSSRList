const xxx = require('../index');

describe('My KSSR List', () => {
    test('getAllTahun', () => {
        let allTahun = xxx.getAllTahun();
        expect(allTahun).toEqual(
            [
                {
                    "id": "1",
                    "tahun": "Tahun 1"
                },
                {
                    "id": "2",
                    "tahun": "Tahun 2"
                },
                {
                    "id": "3",
                    "tahun": "Tahun 3"
                },
                {
                    "id": "4",
                    "tahun": "Tahun 4"
                },
                {
                    "id": "5",
                    "tahun": "Tahun 5"
                },
                {
                    "id": "6",
                    "tahun": "Tahun 6"
                }
            ]
        )
    })
    test('getSubjectsByTahunID', ()=> {
        const id = '1';
        let subjects = xxx.getSubjectsByTahunID(id);
        expect(subjects).toEqual([
            {
                "id": "1",
                "id_tahun": "1",
                "subjek": "Bahasa Melayu"
            },
            {
                "id": "2",
                "id_tahun": "1",
                "subjek": "Bahasa Inggeris"
            },
            {
                "id": "3",
                "id_tahun": "1",
                "subjek": "Bahasa Cina"
            },
            {
                "id": "4",
                "id_tahun": "1",
                "subjek": "Bahasa Tamil"
            },
            {
                "id": "5",
                "id_tahun": "1",
                "subjek": "Matematik"
            },
            {
                "id": "6",
                "id_tahun": "1",
                "subjek": "Pendidikan Islam"
            },
            {
                "id": "7",
                "id_tahun": "1",
                "subjek": "Pendidikan Moral"
            },
            {
                "id": "8",
                "id_tahun": "1",
                "subjek": "Sains"
            },
            {
                "id": "9",
                "id_tahun": "1",
                "subjek": "Pendidikan Jasmani dan Kesihatan"
            },
            {
                "id": "10",
                "id_tahun": "1",
                "subjek": "Pendidikan Kesenian"
            },
            {
                "id": "11",
                "id_tahun": "1",
                "subjek": "Bahasa Arab"
            },
            {
                "id": "12",
                "id_tahun": "1",
                "subjek": "Bahasa Iban"
            },
            {
                "id": "13",
                "id_tahun": "1",
                "subjek": "Bahasa Kadazandusun"
            },
            {
                "id": "14",
                "id_tahun": "1",
                "subjek": "Bahasa Semai"
            }])
    })
})