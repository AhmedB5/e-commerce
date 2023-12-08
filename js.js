window.onload = function () {
  function handleResize() {
    let Wwidth = window.innerWidth;

    let Micon = document.getElementsByTagName("header")[0];
    let icona = document.getElementById("icona");

    if (Wwidth < 822 && !icona) {
      let menu = document.createElement("i");
      menu.className = "fa-solid fa-bars";
      menu.id = "icona";
      Micon.appendChild(menu);

      menu.addEventListener("click", function () {
        let kalam = document.querySelector(".kalam h5");
        kalam.style.display = "none";

        let Allproduct = document.querySelectorAll(".Allproduct h6");
        for (let i = 0; i < Allproduct.length; i++) {
          Allproduct[i].style.display = "none";
        }

        menu.classList.toggle("fa-xmark");
        menu.id = menu.id === "close" ? "icona" : "close";

        let containerul = document.querySelector(".container ul");
        containerul.style.display =
          containerul.style.display === "flex" ? "none" : "flex";

        let block = document.getElementById("close");

        block.addEventListener("click", function () {
          let containerul = document.querySelector(".container ul");
          containerul.style.color = "rgb(21, 20, 20)";
          containerul.style.listStyle = "none";
          containerul.style.marginLeft = "0px";
          containerul.style.marginTop = "-0px";
          kalam.style.display = "none";
          for (let i = 0; i < Allproduct.length; i++) {
            Allproduct[i].style.display = "none";
            if (Allproduct[i].style.display === "none" && menu.id === "icona") {
              Allproduct[i].style.display = "block";
              kalam.style.display = "block";
            } else {
              Allproduct[i].style.display = "none";
            }
          }
        });
      });
    } else if (Wwidth >= 822 && icona) {
      icona.parentNode.removeChild(icona);
    }
  }

  window.addEventListener("resize", handleResize);

  handleResize();
};

let show = document.querySelector(".show");
let firstclick = true;

show.addEventListener("click", function () {
  let foot = document.getElementsByTagName("footer");
  if (firstclick) {
    let imges = document.querySelectorAll("#im5, #im6, #im7, #im8");
    for (let i = 0; i < imges.length; i++) {
      imges[i].style.display = "block";
      imges[i].scrollIntoView({ behavior: "smooth" });
      this.style.marginTop = "860%";
    }
    for (let j = 0; j < foot.length; j++) {
      foot[j].style.marginTop = "875%";
    }
    firstclick = false;
  } else {
    let imges2 = document.querySelectorAll("#im9, #im10, #im11, #im12");
    for (let s = 0; s < imges2.length; s++) {
      imges2[s].style.display = "block";
      imges2[s].scrollIntoView({ behavior: "smooth" });
      this.style.marginTop = "1385%";
      this.remove();
    }
    for (let k = 0; k < foot.length; k++) {
      foot[k].style.marginTop = "1345%";
    }
  }
});

let search = document.getElementById("ic1");
let dis = document.getElementById("ser");
console.log(search);

search.addEventListener("click", function () {
  dis.style.display = "flex";
  let clo = document.createElement("i");
  clo.className = "fa-solid fa-xmark";
  clo.id = "clos";
  let homa = innerWidth;
  console.log(homa);
  if (homa >= 768 && homa < 990) {
    clo.style.marginTop = "-140%";
    clo.style.display = "flex";
    clo.style.alignItems = "center";
    // document.body.style.overflow = "hidden";
  }
  document.body.style.overflow = "hidden";

  dis.appendChild(clo);

  let sd = document.getElementById("close");
  let aliii = window.innerWidth;

  if (aliii < 1000) {
    sd.style.display = "none";
  }

  clo.addEventListener("click", function () {
    clo.style.display = "none";
    dis.style.display = "none";
    sd.style.display = "block";
    // لاستعادة القيمة الافتراضية (visible)
    document.body.style.overflow = "visible";
    let ahmedd = window.innerWidth;

    if (ahmedd > 1000) {
      dis.style.display = "none";
      clo.style.display = "none";
      clo.style.display = "none";
      dis.style.display = "none";
      sd.style.display = "block";
    }
  });
});
