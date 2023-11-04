// let tanya = true;
// while (tanya) {
//     // menangkap pilihan player
//     let p = prompt('pilih : gajah, semut, orang').toLowerCase();



//     // menangkap pilihan computer

//     // membangkitkan bilangan random


//     // menentukan rules
//     let hasil = '';
//     if (p == comp) {
//         hasil = 'SERI!';
//     } else if (p == 'gajah') {
//         hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
//     } else if (p == 'orang') {
//         hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
//     } else if (p == 'semut') {
//         hasil = (comp == 'orang') ? 'KALAH' : 'MENANG!';
//     } else {
//         hasil = 'memasukkan pilihan yang salah!';
//     }

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');

let getpilihanComputer = () => {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

let getHasil = (comp, player) => {
    if (player == comp) return 'SERI!!!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    return 'Memasukkan kata kunci yang salah';
}


const putar = () => {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'assets/img-suwit-jawa/img/' + gambar[i++] + '.png');
        if (i == gambar.length) return i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');

pilihan.forEach((pil) => {
    pil.addEventListener('click', function () {
        const pilihanComputer = getpilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function () {
            //   GET image computer
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'assets/img-suwit-jawa/img/' + pilihanComputer + '.png');

            //Mengambil hasil
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);


    })
})

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getpilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // Mengecek di console
//     // console.log('Computer : ' + pilihanComputer);
//     // console.log('Saya : ' + pilihanPlayer);
//     // const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('Hasil : ' + hasil);

//     // Mengambil gambar dari Komputer
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'assets/img-suwit-jawa/img/' + pilihanComputer + '.png');

//     //Mengambil Hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

// });