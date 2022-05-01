let navTU = document.querySelector(".navTU");
let ml = document.querySelector(".ml");
let pubgm = document.querySelector(".pubgm");
let cho1 = document.querySelector(".cho1");
let imgCho = document.querySelectorAll(".imgCho");
let cho2 = document.querySelector(".cho2");
let infoC = document.querySelector(".infoC");
let flatI = document.querySelector(".flatI");
let checkCho = document.querySelectorAll(".checkCho");
let cho11 = document.querySelectorAll(".cho11");
let buy = document.querySelector(".buy");
let key1b = document.querySelector(".key1b");
let key2b = document.querySelector(".key2b");
let buyHref = document.querySelector(".buyHref");
let yakinBuy = document.querySelector(".yakinBuy");
let textYakin = document.querySelector(".textYakin");
let yakinHref = document.querySelector(".yakinH ref");
let tidakYakin = document.querySelector(".tidakYakin");
let bgNote = document.querySelector(".bgNote");
let noteMLPUBG = document.querySelector(".noteMLPUBG");
let inputML = document.getElementById("inputML");
let inputPUBG = document.getElementById("inputPUBG");
let btnInput = document.querySelector(".btnInput");
let btnInput1 = document.querySelector(".btnInput1");
let pembungkus = document.querySelector(".pembungkus");

flatI.style.opacity = "0";
flatI.style.height = "140px";

navTU.scrollTo({ left: 520, behavior: "smooth" });
navTU.addEventListener("scroll", (e) => {
  let scrollx = e.currentTarget.scrollLeft;
  if (scrollx < 520) {
    navTU.scrollTo({ left: 520 });
  }
  if (scrollx > 600) {
    cho1.style.transition = "0.3s";
    cho2.style.transition = "0.3s";
    pubgm.style.transition = "0.2s";
    pubgm.style.width = "150px";
    pubgm.style.marginTop = "35px";
    pubgm.style.boxShadow = "10px 20px 20px rgb(97, 97, 97,0.3)";
    setTimeout(() => {
      cho1.style.opacity = "1";
      cho2.style.opacity = "0";
    }, 200);
    setTimeout(() => {
      cho1.style.display = "block";
      cho2.style.display = "none";
    }, 100);
    for (let i = 0; i < imgCho.length; i++) {
      imgCho[i].style.boxShadow = "10px 20px 20px rgb(97, 97, 97,0.3)";
    }
  }
  if (scrollx < 580) {
    pubgm.style.width = "110px";
    pubgm.style.marginTop = "70px";
    pubgm.style.boxShadow = "10px 20px 20px rgb(97, 97, 97,0)";
  }
  if (scrollx < 540) {
    ml.style.transition = "0.2s";
    ml.style.width = "150px";
    ml.style.marginTop = "35px";
    ml.style.boxShadow = "10px 20px 20px rgb(97, 97, 97,0.3)";
    setTimeout(() => {
      cho1.style.opacity = "0";
      cho2.style.opacity = "1";
    }, 200);
    setTimeout(() => {
      cho1.style.display = "none";
      cho2.style.display = "block";
    }, 100);
    for (let i = 0; i < imgCho.length; i++) {
      imgCho[i].style.boxShadow = "10px 20px 20px rgb(97, 97, 97,0.3)";
    }
  }
  if (scrollx > 550) {
    ml.style.width = "110px";
    ml.style.marginTop = "70px";
    ml.style.boxShadow = "10px 20px 20px rgb(97, 97, 97,0)";
  }
});
ml.addEventListener("click", (e) => {
  ml.style.width = "150px";
  ml.style.marginTop = "35px";
  navTU.scrollTo({ left: 520, behavior: "smooth" });
});
pubgm.addEventListener("click", (e) => {
  pubgm.style.width = "150px";
  pubgm.style.marginTop = "35px";
  navTU.scrollTo({ left: 687, behavior: "smooth" });
});
infoC.addEventListener("click", (e) => {
  if (flatI.style.opacity == "0") {
    flatI.style.transition = "0.5s";
    flatI.style.height = "200px";
    flatI.style.opacity = "1";
  } else if (flatI.style.opacity == "1") {
    flatI.style.transition = "0.1s";
    flatI.style.opacity = "0";
    flatI.style.height = "150px";
  }
});
let listHarga = [
  // pubgm
  {
    nama: "uc",
    uc: "35",
    harga: "9",
  },
  {
    nama: "uc",
    uc: "50",
    harga: "12",
  },
  {
    nama: "uc",
    uc: "70",
    harga: "15",
  },
  {
    nama: "uc",
    uc: "100",
    harga: "20",
  },
  {
    nama: "uc",
    uc: "125",
    harga: "25",
  },
  {
    nama: "uc",
    uc: "150",
    harga: "32",
  },
  {
    nama: "uc",
    uc: "210",
    harga: "42",
  },
  {
    nama: "uc",
    uc: "250",
    harga: "47",
  },
  {
    nama: "uc",
    uc: "500",
    harga: "93",
  },
  {
    nama: "uc",
    uc: "700",
    harga: "135",
  },
  {
    nama: "uc",
    uc: "750",
    harga: "140",
  },
  {
    nama: "uc",
    uc: "1000",
    harga: "190",
  },
  {
    nama: "uc",
    uc: "1250",
    harga: "255",
  },
  {
    nama: "uc",
    uc: "1750",
    harga: "336",
  },
  {
    nama: "uc",
    uc: "2500",
    harga: "515",
  },
  {
    nama: "uc",
    uc: "3500",
    harga: "666",
  },
  {
    nama: "uc",
    uc: "5000",
    harga: "1000",
  },
  {
    nama: "uc",
    uc: "7000",
    harga: "1347",
  },
  {
    nama: "uc",
    uc: "9000",
    harga: "1730",
  },
  // mobile legend
  {
    nama: "dm",
    uc: "5",
    harga: "2",
  },
  {
    nama: "dm",
    uc: "12",
    harga: "5",
  },
  {
    nama: "dm",
    uc: "19",
    harga: "9",
  },
  {
    nama: "dm",
    uc: "28",
    harga: "12",
  },
  {
    nama: "dm",
    uc: "36",
    harga: "14",
  },
  {
    nama: "dm",
    uc: "44",
    harga: "15",
  },
  {
    nama: "dm",
    uc: "59",
    harga: "18",
  },
  {
    nama: "dm",
    uc: "74",
    harga: "24",
  },
  {
    nama: "dm",
    uc: "85",
    harga: "25",
  },
  {
    nama: "dm",
    uc: "100",
    harga: "33",
  },
  {
    nama: "dm",
    uc: "170",
    harga: "48",
  },
  {
    nama: "dm",
    uc: "185",
    harga: "52",
  },
  {
    nama: "dm",
    uc: "222",
    harga: "65",
  },
  {
    nama: "dm",
    uc: "240",
    harga: "68",
  },
  {
    nama: "dm",
    uc: "296",
    harga: "82",
  },
  {
    nama: "dm",
    uc: "370",
    harga: "104",
  },
  {
    nama: "dm",
    uc: "408",
    harga: "112",
  },
  {
    nama: "dm",
    uc: "568",
    harga: "152",
  },
  {
    nama: "dm",
    uc: "875",
    harga: "232",
  },
  {
    nama: "dm",
    uc: "1159",
    harga: "300",
  },
  {
    nama: "dm",
    uc: "2010",
    harga: "500",
  },
  {
    nama: "dm",
    uc: "4830",
    harga: "1200",
  },
];
let total11 = 0;
let topup1 = 0;
let topup2 = 0;
let keyItem = 0;
let belanjaan1 = "";
let belanjaan2 = [];

for (let i = 0; i < cho11.length; i++) {
  cho11[i].addEventListener("click", () => {
    if (checkCho[i].classList == "checkCho") {
      // 1
      if (listHarga[i].nama == "uc") {
        let topup = parseInt(listHarga[i].uc);
        topup1 += topup;
        console.log("uc : " + topup1);
      } else if (listHarga[i].nama == "dm") {
        let topup = parseInt(listHarga[i].uc);
        topup2 += topup;
        console.log("diamond : " + topup2);
      }
      // 2
      let harga = parseInt(listHarga[i].harga);
      total11 += harga;
      console.log(total11);
      checkCho[i].classList.remove("checkCho");
      checkCho[i].classList.add("checkCho1");
      checkCho[i].innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>`;
      // buy botton
      setTimeout(() => {
        buy.style.transition = "0.2s";
        buy.style.bottom = "27px";
      }, 100);

      keyItem++;
      key1b.innerText = keyItem;
      key2b.innerText = total11 + "ribu";
      buy.style.width = "300px";
      buy.style.left = "30px";
      // special items
    } else if (checkCho[i].classList == "checkCho1") {
      let harga = parseInt(listHarga[i].harga);
      total11 -= harga;
      console.log(total11);
      checkCho[i].classList.remove("checkCho1");
      checkCho[i].classList.add("checkCho");
      checkCho[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
    </svg>`;
      if (total11 < 1) {
        buy.style.bottom = "-50px";
        buy.style.width = "200px";
        buy.style.left = "60px";
      }
      // 1
      if (listHarga[i].nama == "uc") {
        let topup = parseInt(listHarga[i].uc);
        topup1 -= topup;
        console.log("uc : " + topup1);
      } else if (listHarga[i].nama == "dm") {
        let topup = parseInt(listHarga[i].uc);
        topup2 -= topup;
        console.log("diamond : " + topup2);
      }
      // 2
      keyItem--;
      key1b.innerText = keyItem;
      key2b.innerText = total11 + "ribu";
    }
  });
}
// pesan ke wa
buy.addEventListener("click", () => {
  yakinBuy.style.display = "flex";
  textYakin.style.display = "block";
});
tidakYakin.addEventListener("click", () => {
  yakinBuy.style.display = "none";
  textYakin.style.display = "none";
});
function pindahKeWa() {
  yakinBuy.style.display = "none";
  textYakin.style.display = "none";
  buy.style.bottom = "-50px";
  buy.style.width = "200px";
  buy.style.left = "60px";
  pembungkus.style.display = "none";
  bgNote.style.display = "block";
  if (topup2 > 0 && !topup1 > 0) {
    bgNote.style.display = "block";
    inputML.style.display = "block";
    inputPUBG.style.display = "none";
    noteMLPUBG.innerText = "masukkan nomor id MobileLegends";
    noteMLPUBG.style.display = "block";
  } else if (topup1 > 0 && !topup2 > 0) {
    bgNote.style.display = "block";
    noteMLPUBG.style.display = "block";
    noteMLPUBG.innerText = "masukkan nomor id PUBGM";
    inputPUBG.style.display = "block";
    inputML.style.display = "none";
  } else if (topup1 > 0 && topup2 > 0) {
    bgNote.style.display = "block";
    inputPUBG.style.display = "block";
    inputML.style.display = "block";
    noteMLPUBG.style.display = "block";
    noteMLPUBG.innerText = "masukkan nomor id ML&PUBGM";
    inputML.placeholder = "cnthNoId ML: 15023456";
    inputPUBG.placeholder = "cnthNoId PUBG: 69543210";
  }
}
btnInput.addEventListener("click", () => {
  let noIdML = inputML.value;
  let noIdPUBG = inputPUBG.value;
  if (topup1 > 0 && topup2 > 0) {
    location.href =
      "http://wa.me/6281546718472?text=Permisi saya ingin TopUp, dengan keterangan : Diamond Mobile Legend = " +
      topup2 +
      "DM" +
      " dan juga UC PUBGM = " +
      topup1 +
      "UC," +
      " dengan total harga : *Rp " +
      total11 +
      ".000  ||  " +
      "nomor id ML: " +
      noIdML +
      " dan nomor id PUBGM: " +
      noIdPUBG;
  } else if (topup2 > 0 && !topup1 > 0) {
    location.href = "http://wa.me/6281546718472?text=Permisi saya ingin TopUp, dengan keterangan : Diamond Mobile Legend = " + topup2 + "DM" + " dengan total harga : *Rp " + total11 + ".000  ||  " + "nomor id ML: " + noIdML;
  } else if (topup1 > 0 && !topup2 > 0) {
    location.href = "http://wa.me/6281546718472?text=Permisi saya ingin TopUp, dengan keterangan : UC PUBGM = " + topup1 + "UC" + " dengan total harga : *Rp " + total11 + ".000  ||  " + "nomor id PUBGM: " + noIdPUBG;
  }
});
