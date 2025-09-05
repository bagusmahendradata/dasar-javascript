//MENTUKAN SALDO AKHIR

let saldoAwal = Number(prompt("Masukan saldo awal anda : "));
let saldoTambahan = Number(prompt("Masukan saldo tambahan anda : "));
const saldoAkhir = saldoAwal + saldoTambahan
alert(`Saldo anda saat ini adalah : ${saldoAkhir}`);


//Menampilkan hari

let hari = new Date().getDay()
let namaHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
const hasil= namaHari[hari]
alert(`Hari ini adalah hari ${hasil}`)