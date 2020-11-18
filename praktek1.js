/*var panjang = 20.5
var lebar = 30
var harga = 1500000
var ppn = 0.15

const luas = panjang * lebar
console.log("Luas : " + luas);

const sebelumPajak = luas * harga
console.log("Harga Sebelum Pajak : " + sebelumPajak);

const total = ((sebelumPajak * ppn)) + sebelumPajak
console.log("Total dengan pajak : " + total)*/

/*let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
]

let hargaBayar = 0;

barang.map((barang) => {
    barang.total = barang.harga * barang.jumlah;
    hargaBayar += barang.total
})

console.log("Totalnya : " + hargaBayar)*/

/*const tinggi = 1.7
const berat = 90

let BMI = berat / (tinggi * tinggi)
BMI = BMI.toFixed(1);

console.log("BMI Anda : " + BMI)

if (BMI < 18.5) {
    console.log("Kurang Berat Badan")
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal")
} else if (BMI >= 25.0 && BMI <= 29.9) {
    console.log("Berlebih berat badan")
} else if (BMI >= 30.0) {
    console.log("Obesitas")
}*/

/*var a = 4;
var rasio = 3;
var suku = 10;

let hasil = 0;

let posisi = a;

for (let i = 0; i < suku; i++) {
    hasil += posisi
    posisi = posisi * rasio
}

console.log(hasil)*/

/*var jariJari = 7.5
var tinggi = 50
var pi = 3.14

const luasLingkaran = pi * (jariJari**2)

const volume = luasLingkaran * tinggi
console.log("Volume Tabung : " + volume)


const luasPermukaan = 2 * pi * jariJari * (jariJari + tinggi)
console.log("Luas Permukaan : " + luasPermukaan)


const luasSelimut = 2 * pi * jariJari * tinggi
console.log("Luas Selimut : " + luasSelimut)*/

/*var jariJari = 10
var tinggi = 40
var pi = 3.14

const luasLingkaran = pi * (jariJari**2)
const pelukis = Math.sqrt(jariJari**2 + tinggi**2)

const volume = 1/3 * luasLingkaran * tinggi
console.log("Volume Kerucut : " + volume.toFixed(1))



const luasPermukaan = pi * jariJari * jariJari + pi * jariJari * pelukis

console.log("Luas Permukaan : " + luasPermukaan.toFixed(1))



const luasSelimut = pi * jariJari * pelukis

console.log("Luas Selimut : " + luasSelimut.toFixed(1))*/

var jariJari = 15
var pi = 3.14

const luasLingkaran = pi * (jariJari**2)

const volume = 4/3 * pi * (jariJari**3)
console.log("Volume Bola : " + volume.toFixed(1))


const luasPermukaan = 4 * pi * (jariJari**2)
console.log("Luas Permukaan : " + luasPermukaan.toFixed(1))