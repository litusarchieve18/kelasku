$(document).ready(function(){
    $("#nama").click(function(){
        $("#dropdown-nav-kanan").toggle();
    });
    $("#profil").click(function(){
        $("#dropdown-nav-kanan").toggle();
    });
});
var d = new Date();
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
document.getElementById("tanggal").innerHTML = hari[d.getDay()] + ", " + d.getDate() + " " + bulan[d.getMonth()] + " " + d.getFullYear();