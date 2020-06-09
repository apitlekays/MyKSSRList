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
    test('getStandardKandunganBySubjectID', () => {
        const id = '1';
        let sKandungan = xxx.getStandardKandunganBySubjectID(id);
        expect(sKandungan).toEqual([
            {
                "id": "13",
                "id_subjek": "1",
                "id_sk": "1.1",
                "standard_kandungan": "Mendengar dan memberikan respons"
            },
            {
                "id": "14",
                "id_subjek": "1",
                "id_sk": "1.2",
                "standard_kandungan": "Bertutur untuk menyampaikan maklumat dan idea bagi pelbagai tujuan"
            },
            {
                "id": "15",
                "id_subjek": "1",
                "id_sk": "2.1",
                "standard_kandungan": "Asas membaca dan memahami"
            },
            {
                "id": "16",
                "id_subjek": "1",
                "id_sk": "2.2",
                "standard_kandungan": "Membaca, memahami, dan menaakul bahan grafik dan bukan grafik"
            },
            {
                "id": "17",
                "id_subjek": "1",
                "id_sk": "2.3",
                "standard_kandungan": "Membaca dan mengapresiasi karya sastera dan bukan sastera"
            },
            {
                "id": "18",
                "id_subjek": "1",
                "id_sk": "3.1",
                "standard_kandungan": "Asas menulis"
            },
            {
                "id": "19",
                "id_subjek": "1",
                "id_sk": "3.2",
                "standard_kandungan": "Menulis perkataan, frasa, dan ayat yang bermakna"
            },
            {
                "id": "20",
                "id_subjek": "1",
                "id_sk": "3.3",
                "standard_kandungan": "Menghasilkan penulisan"
            },
            {
                "id": "21",
                "id_subjek": "1",
                "id_sk": "4.1",
                "standard_kandungan": "Mengaplikasikan unsur keindahan dan kesantunan bahasa dalam bahan sastera"
            },
            {
                "id": "22",
                "id_subjek": "1",
                "id_sk": "4.2",
                "standard_kandungan": "Menghayati keindahan dan kesantunan bahasa dalam bahan sastera"
            },
            {
                "id": "23",
                "id_subjek": "1",
                "id_sk": "4.3",
                "standard_kandungan": "Menghasilkan bahan sastera dengan menyerapkan keindahan dan kesantunan bahasa serta mempersembahkannya secara kreatif"
            },
            {
                "id": "24",
                "id_subjek": "1",
                "id_sk": "5.1",
                "standard_kandungan": "Memahami fungsi dan menggunakan golongan kata mengikut konteks"
            },
            {
                "id": "25",
                "id_subjek": "1",
                "id_sk": "5.2",
                "standard_kandungan": "Memahami dan menggunakan pembentukan kata mengikut konteks"
            },
            {
                "id": "26",
                "id_subjek": "1",
                "id_sk": "5.3",
                "standard_kandungan": "Memahami dan membina ayat mengikut konteks"
            }
        ])
    })
    test('getStandardPembelajaranBySKID', () => {
        let skid = '4.2';
        let subjectId = '2';
        let Sp = xxx.getStandardPembelajaranBySKID(subjectId, skid);
        expect(Sp).toEqual([
            {
                "id": "26",
                "subject_id": "2",
                "sk_id": "4.2",
                "standard_pembelajaran": "4.2.1 Give very basic personal information using fixed phrases"
            },
            {
                "id": "27",
                "subject_id": "2",
                "sk_id": "4.2",
                "standard_pembelajaran": "4.2.2 Greet, say goodbye, and express thanks using suitable fixed phrases"
            },
            {
                "id": "28",
                "subject_id": "2",
                "sk_id": "4.2",
                "standard_pembelajaran": "4.2.3 Express basic likes and dislikes"
            },
            {
                "id": "29",
                "subject_id": "2",
                "sk_id": "4.2",
                "standard_pembelajaran": "4.2.4 Name or describe objects using suitable words from word sets"
            },
            {
                "id": "30",
                "subject_id": "2",
                "sk_id": "4.2",
                "standard_pembelajaran": "4.2.5 Connect words and proper names using ‘and’"
            }
        ])
    })
})