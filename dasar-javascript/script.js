let namaDepan, namaBelakang, namaLengkap;

document.getElementById("button_merge").onclick = function (){
    namaDepan = document.getElementById("nama_depan").value;
    namaBelakang = document.getElementById("nama_belakang").value;
    namaLengkap = `${namaDepan} ${namaBelakang}`;
    
    console.log(namaLengkap);

    document.getElementById("nama_lengkap").textContent = namaLengkap;
};