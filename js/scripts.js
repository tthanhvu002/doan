var user_info = [];
var num_of_cus = 1;
var c = 0;
var page = [];
var mouse_page = [];
var keyboard_page = [];
var num_keyboard;
var num_mouse;
var num;
var user_info = [
  {
    name: "KhangNguyen",
    password: "123456789",
    state: 0,
    phoneNumber: "0969355151",
    address: "Hochiminh",
    email: "bubugigi2010@gmail.com",
    isBlocked: 0,
    resetPW: 0,
  },
];
var admins = ["KhangNguyen"];
var num_of_cus = 1;
var c = 0;
var page = [];
var mouse_page = [];
var keyboard_page = [];
var num_keyboard;
var num_mouse;
var num;
var mybutton = document.getElementById("BtnTop");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

function AccountOn() {
  //localStorage.clear();
  if (localStorage["user_info"] == null) {
    localStorage.setItem("user_info", JSON.stringify(user_info));
  }

  if (localStorage["admins"] == null) {
    localStorage.setItem("admins", JSON.stringify(admins));
  }

  if (localStorage["product_info"] == null) {
    var products = [
      {
        name: "Mouse MSI Clutch GM08",
        img: "../image/product_44.jpg",
        price: 420000,
        id: "p42",
        quantity: 100,
      },
      {
        name: "Mouse Razer DeathAdder V3",
        img: "..//image//product_45.jpg",
        price: 3980000,
        id: "p43",
        quantity: 100,
      },
      {
        name: "Mouse HyperX Pulsefire Haste ",
        img: "..//image//product_46.jpg",
        price: 1690000,
        id: "p44",
        quantity: 100,
      },
      {
        name: "Keyboards Fuhlen D87s RGB",
        img: "..//image//product_14.jpg",
        price: 850000,
        id: "s14",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO 3098S WT London",
        img: "..//image//product_15.jpg",
        price: 1990000,
        id: "s15",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO 3098S DCastle",
        img: "..//image//product_16.jpg",
        price: 1990000,
        id: "s16",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO 5087 RGB ASA",
        img: "..//image//product_17.jpg",
        price: 1690000,
        id: "s17",
        quantity: 100,
      },
      {
        name: "Keyboards NZXT Function TKL",
        img: "..//image//product_32.jpg",
        price: 3250000,
        id: "s30",
        quantity: 100,
      },
      {
        name: "Keyboards Razer Cynosa V2 Chroma",
        img: "..//image//product_33.jpg",
        price: 1590000,
        id: "s31",
        quantity: 100,
      },
      {
        name: "Keyboards DareU EK807G",
        img: "..//image//product_34.jpg",
        price: 640000,
        id: "s32",
        quantity: 100,
      },
      {
        name: "Keyboards Keychron K6",
        img: "..//image//product_35.jpg",
        price: 1890000,
        id: "s33",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO 3068 v2 RGB",
        img: "..//image//product_36.jpg",
        price: 1590000,
        id: "s34",
        quantity: 100,
      },
      {
        name: "Mouse Razer Basilisk V3 Pro",
        img: "..//image//product_47.jpg",
        price: 4290000,
        id: "p45",
        quantity: 100,
      },
      {
        name: "Mouse Logitech POP",
        img: "..//image//product_48.jpg",
        price: 590000,
        id: "p46",
        quantity: 100,
      },
      {
        name: "Mouse Razer Naga Pro",
        img: "..//image//product_55.jpg",
        price: 3490000,
        id: "p53",
        quantity: 100,
      },
      {
        name: "Mouse DareU EM901X",
        img: "..//image//product_56.jpg",
        price: 650000,
        id: "p54",
        quantity: 100,
      },
      {
        name: "Mouse HyperX PulseFire FPS",
        img: "..//image//product_57.jpg",
        price: 690000,
        id: "p55",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO 5087 RGB ASA",
        img: "..//image//product_18.jpg",
        price: 1690000,
        id: "s18",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO 3068B Plus",
        img: "..//image//product_19.jpg",
        price: 3890000,
        id: "s19",
        quantity: 100,
      },
      {
        name: "Keyboards Razer DeathStalker V2",
        img: "..//image//product_20.jpg",
        price: 800000,
        id: "s20",
        quantity: 100,
      },
      {
        name: "Keyboards Rapoo V500",
        img: "..//image//product_21.jpg",
        price: 790000,
        id: "s21",
        quantity: 100,
      },
      {
        name: "Mouse Steelseries Prime Wireless",
        img: "..//image//product_58.jpg",
        price: 2790000,
        id: "p56",
        quantity: 100,
      },
      {
        name: "Mouse Corsair M65 RGB",
        img: "..//image//product_59.jpg",
        price: 1490000,
        id: "p57",
        quantity: 100,
      },
      {
        name: "Mouse Logitech G604 Hero",
        img: "..//image//product_60.jpg",
        price: 1540000,
        id: "p58",
        quantity: 100,
      },
      {
        name: "Mouse Razer Orochi V2",
        img: "..//image//product_61.jpg",
        price: 1390000,
        id: "p59",
        quantity: 100,
      },
      {
        name: "Mouse MSI Clutch GM41",
        img: "..//image//product_62.jpg",
        price: 1890000,
        id: "p60",
        quantity: 100,
      },
      {
        name: "Mouse Dare-U A960 Ultralight",
        img: "..//image//product_63.jpg",
        price: 740000,
        id: "p61",
        quantity: 100,
      },
      {
        name: "Mouse ASUS ROG Gladius III",
        img: "..//image//product_64.jpg",
        price: 2590000,
        id: "p62",
        quantity: 100,
      },
      {
        name: "Mouse Steelseries Rival 3",
        img: "..//image//product_65.jpg",
        price: 850000,
        id: "p63",
        quantity: 100,
      },
      {
        name: "Mouse Rapoo V280 RGB",
        img: "..//image//product_66.jpg",
        price: 280000,
        id: "p64",
        quantity: 100,
      },
      {
        name: "Mouse SteelSeries Aerox 9",
        img: "..//image//product_67.jpg",
        price: 3290000,
        id: "p65",
        quantity: 100,
      },
      {
        name: "Mouse Cooler Master MM710",
        img: "..//image//product_68.jpg",
        price: 790000,
        id: "p66",
        quantity: 100,
      },
      {
        name: "Mouse Razer Viper V2 Pro",
        img: "..//image//product_69.jpg",
        price: 3890000,
        id: "p67",
        quantity: 100,
      },
      {
        name: "Mouse ASUS ROG Gladius III",
        img: "..//image//product_70.jpg",
        price: 1690000,
        id: "p68",
        quantity: 100,
      },
      {
        name: "Mouse Razer Deathadder V2",
        img: "..//image//product_71.jpg",
        price: 1190000,
        id: "p69",
        quantity: 100,
      },
      {
        name: "Mouse Razer DeathAdder V2",
        img: "..//image//product_72.jpg",
        price: 990000,
        id: "p70",
        quantity: 100,
      },
      {
        name: "Mouse Fuhlen D90S",
        img: "..//image//product_73.jpg",
        price: 550000,
        id: "p71",
        quantity: 100,
      },
      {
        name: "Mouse  Dare-U A918",
        img: "..//image//product_74.jpg",
        price: 590000,
        id: "p72",
        quantity: 100,
      },
      {
        name: "Mouse Corsair Sabre RGB Pro",
        img: "..//image//product_75.jpg",
        price: 1790000,
        id: "p73",
        quantity: 100,
      },
      {
        name: "Mouse Dare-U LM115G",
        img: "..//image//product_76.jpg",
        price: 165000,
        id: "p74",
        quantity: 100,
      },
      {
        name: "Mouse Corsair M65 RGB Elite",
        img: "..//image//product_77.jpg",
        price: 1490000,
        id: "p75",
        quantity: 100,
      },
      {
        name: "Mouse Logitech G304 Lightspeed",
        img: "..//image//product_78.jpg",
        price: 790000,
        id: "p76",
        quantity: 100,
      },
      {
        name: "Mouse Asus ROG Keris",
        img: "..//image//product_79.jpg",
        price: 2290000,
        id: "p77",
        quantity: 100,
      },
      {
        name: "Mouse HAVIT HV-MS1003",
        img: "..//image//product_80.jpg",
        price: 1500000,
        id: "p78",
        quantity: 100,
      },
      {
        name: "Mouse Razer Viper 8KHz",
        img: "..//image//product_81.jpg",
        price: 1890000,
        id: "p79",
        quantity: 100,
      },
      {
        name: "Mouse MSI Clutch GM30",
        img: "..//image//product_82.jpg",
        price: 950000,
        id: "p80",
        quantity: 100,
      },
      {
        name: "Mouse Corsair Harpoon RGB",
        img: "..//image//product_83.jpg",
        price: 1190000,
        id: "p81",
        quantity: 100,
      },
      {
        name: "Mouse Logitech G703 HERO",
        img: "..//image//product_84.jpg",
        price: 1590000,
        id: "p82",
        quantity: 100,
      },
      {
        name: "Mouse Logitech G302 Daedalus ",
        img: "..//image//product_85.jpg",
        price: 590000,
        id: "p83",
        quantity: 100,
      },
      {
        name: "Mouse Corsair M55 RGB",
        img: "..//image//product_86.jpg",
        price: 790000,
        id: "p84",
        quantity: 100,
      },
      {
        name: "Keyboards Logitech G413 TKL SE",
        img: "..//image//product_0.jpg",
        price: 1600000,
        id: "s1",
        quantity: 100,
      },
      {
        name: "Keyboards Leopold FC750RPD",
        img: "..//image//product_1.jpg",
        price: 3320000,
        id: "s2",
        quantity: 100,
      },
      {
        name: "Keyboards Leopold-FC900R",
        img: "..//image//product_2.jpg",
        price: 3550000,
        id: "s3",
        quantity: 100,
      },
      {
        name: "Keyboards Leopold-FC660MPD",
        img: "..//image//product_3.jpg",
        price: 3100000,
        id: "s4",
        quantity: 100,
      },
      {
        name: "Keyboards Leopold-FC980M",
        img: "..//image//product_4.jpg",
        price: 3650000,
        id: "s5",
        quantity: 100,
      },
      {
        name: "Keyboards Vortex-PC66",
        img: "..//image//product_5.jpg",
        price: 3200000,
        id: "s6",
        quantity: 100,
      },
      {
        name: "Keyboards Leopold-FC750R",
        img: "..//image//product_6.jpg",
        price: 3370000,
        id: "s7",
        quantity: 100,
      },
      {
        name: "Keyboards Rapoo V500 Pro",
        img: "..//image//product_7.jpg",
        price: 990000,
        id: "s8",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO 3068B Plus",
        img: "..//image//product_8.jpg",
        price: 1990000,
        id: "s9",
        quantity: 100,
      },
      {
        name: "Keyboards E-Dra EK387L",
        img: "..//image//product_9.jpg",
        price: 550000,
        id: "s10",
        quantity: 100,
      },
      {
        name: "Keyboards E-Dra EK3104v2",
        img: "..//image//product_10.jpg",
        price: 750000,
        id: "s11",
        quantity: 100,
      },
      {
        name: "Keyboards E-Dra EK687FL",
        img: "..//image//product_11.jpg",
        price: 1290000,
        id: "s12",
        quantity: 100,
      },
      {
        name: "Keyboards E-Dra EK384W V2",
        img: "..//image//product_12.jpg",
        price: 1390000,
        id: "s13",
        quantity: 100,
      },
      {
        name: "Keyboards Rapoo V50S RGB",
        img: "..//image//product_22.jpg",
        price: 290000,
        id: "s22",
        quantity: 100,
      },
      {
        name: "Keyboards E-Dra EK31Wv2",
        img: "..//image//product_23.jpg",
        price: 950000,
        id: "s23",
        quantity: 100,
      },
      {
        name: "Keyboards E-Dra EK3187W 3 Mode",
        img: "..//image//product_24.jpg",
        price: 1040000,
        id: "s24",
        quantity: 100,
      },
      {
        name: "Keyboards Razer Ornata V3",
        img: "..//image//product_26.jpg",
        price: 1789000,
        id: "s25",
        quantity: 100,
      },
      {
        name: "Keyboards FL-Esports FL750 SAM",
        img: "..//image//product_27.jpg",
        price: 2190000,
        id: "s26",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO 3108 Double Shot",
        img: "..//image//product_29.jpg",
        price: 1699000,
        id: "s27",
        quantity: 100,
      },
      {
        name: "Keyboards ASUS ROG Strix Flare II",
        img: "..//image//product_30.jpg",
        price: 3590000,
        id: "s28",
        quantity: 100,
      },
      {
        name: "Keyboards Acer Pre.Aethon 301 TKL",
        img: "..//image//product_31.jpg",
        price: 2500000,
        id: "s29",
        quantity: 100,
      },
      {
        name: "Keyboards Corsair K70 PRO Silent",
        img: "..//image//product_37.jpg",
        price: 3860000,
        id: "s35",
        quantity: 100,
      },
      {
        name: "Keyboards HAVIT KB872L",
        img: "..//image//product_38.jpg",
        price: 1620000,
        id: "s36",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO ACR89",
        img: "..//image//product_39.jpg",
        price: 2790000,
        id: "s37",
        quantity: 100,
      },
      {
        name: "Keyboards AKKO ACR61",
        img: "..//image//product_40.jpg",
        price: 2090000,
        id: "s38",
        quantity: 100,
      },
      {
        name: "Keyboards Logitech G PRO LOL",
        img: "..//image//product_41.jpg",
        price: 2490000,
        id: "s39",
        quantity: 100,
      },
      {
        name: "Keyboards Razer Huntsman V2",
        img: "..//image//product_42.jpg",
        price: 4390000,
        id: "s40",
        quantity: 100,
      },
      {
        name: "Keyboards Newmen GM520",
        img: "..//image//product_43.jpg",
        price: 1230000,
        id: "s41",
        quantity: 100,
      },
      {
        name: "Mouse NZXT Lift Black",
        img: "..//image//product_49.jpg",
        price: 1410000,
        id: "p47",
        quantity: 100,
      },
      {
        name: "Mouuse Cougar Minos XT",
        img: "..//image//product_50.jpg",
        price: 450000,
        id: "p48",
        quantity: 100,
      },
      {
        name: "Mouse Razer Viper V2 Pro",
        img: "..//image//product_51.jpg",
        price: 3590000,
        id: "p49",
        quantity: 100,
      },
      {
        name: "Mouse Cooler Master MM730",
        img: "..//image//product_52.jpg",
        price: 640000,
        id: "p50",
        quantity: 100,
      },
      {
        name: "Mouse Logitech G502 Hero",
        img: "..//image//product_53.jpg",
        price: 1000000,
        id: "p51",
        quantity: 100,
      },
      {
        name: "Mouse Lenovo Legion M500",
        img: "..//image//product_54.jpg",
        price: 790000,
        id: "p52",
        quantity: 100,
      },
    ];
    localStorage.setItem("product_info", JSON.stringify(products));
  }

  var stored_accounts = JSON.parse(localStorage.getItem("user_info"));
  var product_info = JSON.parse(localStorage.getItem("product_info"));
  for (var i = 0; i < stored_accounts.length; i++)
    if (stored_accounts[i].state == 1) {
      if (checkAdmin(stored_accounts[i].name) == 1)
        document.getElementById("admin").style.display = "inline-block";
      else document.getElementById("admin").style.display = "none";
      document.getElementById("acc").innerHTML =
        '<a id="userName">' + stored_accounts[i].name + "</a>";
      document.getElementById("logOut").style.display = "inline-block";
      document.getElementById("log_out").innerHTML =
        '<i class="fas fa-sign-out-alt"></i>';
      break;
    }

  var temp = "";
  for (var i = 0; i < 4; i++)
    temp +=
      '<div class="col-4"' +
      'id="' +
      product_info[i].id +
      '">' +
      '<img src="' +
      product_info[i].img +
      '"><h4>' +
      product_info[i].name +
      '</h4><div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div><p>' +
      product_info[i].price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      }) +
      "</p>" +
      '<button class="DetailBtn"' +
      'id="' +
      product_info[i].id +
      '" onclick="showProductDetail(this.id)">Details</button>' +
      "</div>";
  document.getElementById("bestSeller").innerHTML = temp;
  temp = "";
  for (var i = product_info.length - 1; i >= product_info.length - 4; i--)
    temp +=
      '<div class="col-4"' +
      'id="' +
      product_info[i].id +
      '">' +
      '<img src="' +
      product_info[i].img +
      '"><h4>' +
      product_info[i].name +
      '</h4><div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div><p>' +
      product_info[i].price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      }) +
      "</p>" +
      '<button class="DetailBtn"' +
      'id="' +
      product_info[i].id +
      '" onclick="showProductDetail(this.id)">Details</button>' +
      "</div>";
  document.getElementById("newArrival").innerHTML = temp;
  var c1 = 0;
  var temp = "";
  var product_info = JSON.parse(localStorage.getItem("product_info"));
  // console.log(product_info);
  if (product_info.length % 12 != 0)
    num = float2int(product_info.length / 12) + 1;
  else num = product_info.length / 12;
  var flag = 1;
  for (var i = 0; i < num; i++) {
    var products = "";
    for (var j = i * 12; j < i * 12 + 12; j++) {
      temp +=
        '<div class="col-4"' +
        'id="' +
        product_info[j].id +
        '">' +
        '<img src="' +
        product_info[j].img +
        '"><h4>' +
        product_info[j].name +
        '</h4><div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div><p>' +
        product_info[j].price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        }) +
        "</p>" +
        '<button class="DetailBtn"' +
        'id="' +
        product_info[j].id +
        '" onclick="showProductDetail(this.id)">Details</button>' +
        "</div>";
      c1 += 1;
      if (c1 == 4 || j == product_info.length - 1) {
        temp = '<div class="row2">' + temp + "</div>";
        products += temp;
        temp = "";
        c1 = 0;
        if (j == product_info.length - 1) flag = 0;
      }
      if (flag == 0) break;
    }
    page.push(
      '<h2 class="title">All products' +
        "/page " +
        parseInt(i + 1) +
        "</h2>" +
        products
    );
    if (flag == 0) break;
  }
  var mouse = [];
  for (var i = product_info.length - 1; i >= 0; i--)
    if (product_info[i].id.indexOf("p") != -1) mouse.push(i);

  num_mouse = getNum(mouse);
  createPage(num_mouse, mouse, mouse_page, "Mouses");

  var keyboard = [];
  for (var i = product_info.length - 1; i >= 0; i--)
    if (product_info[i].id.indexOf("s") != -1) keyboard.push(i);

  num_keyboard = getNum(keyboard);
  createPage(num_keyboard, keyboard, keyboard_page, "Keyboards");
}

function getInfo() {
  var stored_accounts = JSON.parse(localStorage.getItem("user_info"));
  var user_name = document.getElementById("user_name").value;
  var password = document.getElementById("password").value;
  var flag = 0;

  for (var i = 0; i < stored_accounts.length; i++) {
    if (
      user_name == stored_accounts[i].name &&
      password == stored_accounts[i].password
    ) {
      if (stored_accounts[i].isBlocked == 1) {
        alert("Account is blocked");
        flag = 1;
      } else {
        console.log(user_name);
        window.location.href = "../html/index.html";
        flag = 1;
        stored_accounts[i].state = 1;

        localStorage.setItem("user_info", JSON.stringify(stored_accounts));
        document.getElementById("acc").innerHTML =
          '<a id="userName">' + user_name + "</a>";

        /*  if (checkAdmin(user_name)) {
          document.getElementById("admin").style.display = "inline-block";
          document.getElementById("logOut").style.display = "inline-block";
          document.getElementById("log_out").innerHTML =
            '<i class="fas fa-sign-out-alt"></i>';
          document.getElementById("user_name").value = null;
          document.getElementById("password").value = null;
        } */
      }
    }
  }
  if (flag === 0) {
    alert("Wrong username or password");
  }
}

function getInfo1() {
  var stored_accounts = JSON.parse(localStorage.getItem("user_info"));
  var password = document.getElementById("password1").value;
  var password1 = document.getElementById("password2").value;
  var flag = 1;
  for (var i = 0; i < stored_accounts.length; i++)
    if (
      document.getElementById("user_name1").value == stored_accounts[i].name
    ) {
      alert("username has been used ");
      flag = 0;
    }
  if (password == password1 && flag != 0) {
    var userName = document.getElementById("user_name1").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var address1 = document.getElementById("address").value;
    var email1 = document.getElementById("email").value;
    if (
      userName === "" ||
      phoneNumber === "" ||
      address1 === "" ||
      email1 === ""
    ) {
      alert("You haven't entered enough information here!!!");
    } else {
      window.location.href = "../html/login.html";
      stored_accounts.push({
        name: userName,
        password: password1.toString(),
        state: 1,
        phoneNumber: phoneNumber.toString(),
        address: address1,
        email: email1,
        isBlocked: 0,
        resetPW: 0,
      });
      localStorage.setItem("user_info", JSON.stringify(stored_accounts));
      alert("Register succesful");

      document.getElementById("acc").innerHTML =
        '<a id="userName">' +
        document.getElementById("user_name1").value +
        "</a>";
      document.getElementById("log_out").innerHTML =
        '<i class="fas fa-sign-out-alt"></i>';
      document.getElementById("logOut").style.display = "inline-block";

      document.getElementById("password1").value = null;
      document.getElementById("password2").value = null;
      document.getElementById("user_name1").value = null;
      document.getElementById("email").value = null;
      document.getElementById("phoneNumber").value = null;
      document.getElementById("address").value = null;
    }
  }
}
function logout() {
  menutoggle();
  var stored_accounts = JSON.parse(localStorage.getItem("user_info"));
  var userName = document.getElementById("userName").text;
  for (var i = 0; i < stored_accounts.length; i++)
    if (stored_accounts[i].name == userName) {
      stored_accounts[i].state = 0;
      break;
    }
  localStorage.setItem("user_info", JSON.stringify(stored_accounts));
  document.getElementById("acc").innerHTML =
    '<a href="#" title = "log in" ><i" class="fas fa-user"></i></a>';
  document.getElementById("log_out").innerHTML = " ";
  document.getElementById("admin").style.display = "none";
  document.getElementById("logOut").style.display = "none";
  window.location.reload("index.html");
}

function float2int(value) {
  return value | 0;
}

//search result
function display(a) {
  var product_info = JSON.parse(localStorage.getItem("product_info"));
  if (a.length == 1) {
    var temp =
      '<div class = "col-4"' +
      'id="' +
      product_info[a[0]].id +
      '">' +
      '<img src="' +
      product_info[a[0]].img +
      '">' +
      "<h4>" +
      product_info[a[0]].name +
      "</h4>" +
      '<div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div>' +
      "<p>" +
      product_info[a[0]].price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      }) +
      "</p>" +
      '<button class="DetailBtn"' +
      'id="' +
      product_info[a[0]].id +
      '" onclick="showProductDetail(this.id)">Details</button>' +
      "</div>";
    temp = '<div class ="row2">' + temp + "</div>";
    document.getElementById("search_result").innerHTML = temp;
  } else {
    var search_result = "";
    var temp = "";
    var count = 0;
    for (var i = 0; i < a.length; i++) {
      // console.log("run +" + temp);
      count += 1;
      temp +=
        '<div class = "col-4"' +
        'id="' +
        product_info[a[i]].id +
        '">' +
        '<img src="' +
        product_info[a[i]].img +
        '">' +
        "<h4>" +
        product_info[a[i]].name +
        "</h4>" +
        '<div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div>' +
        "<p>" +
        product_info[a[i]].price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        }) +
        "</p>" +
        '<button class="DetailBtn"' +
        'id="' +
        product_info[a[i]].id +
        '" onclick="showProductDetail(this.id)">Details</button>' +
        "</div>";
      if (count == 4 || i == a.length - 1) {
        temp = '<div class ="row2">' + temp + "</div>";
        search_result += temp;
        temp = "";
        count = 0;
      }
    }
    document.getElementById("search_result").innerHTML = search_result;
  }
}

var pre_height = "";
var price = "";
var type = "";
function search() {
  var product_info = JSON.parse(localStorage.getItem("product_info"));
  var input = document.getElementById("input").value;
  if (input === "") {
    document.getElementById("search_result").style.display = "none";
  } else {
    var sel = document.getElementById("search_type");
    price = sel.options[sel.selectedIndex].text;
    var sel1 = document.getElementById("product_type");
    type = sel1.options[sel1.selectedIndex].text;
    document.getElementById("search_result").style.display = "block";
    var a = [];
    if (price == "Price") price = "All";
    if (type == "Product type") type = "All";
    for (var i = 0; i < product_info.length; i++) {
      if (
        product_info[i].name.toLowerCase().indexOf(input.toLowerCase()) != -1
      ) {
        a.push(i);
      }
    }

    if (type == "All" && price == "All") {
      display(a);
    } else {
      if (price == "more than 1m")
        for (var i = 0; i < a.length; i++)
          if (product_info[a[i]].price < 1000000) {
            a.splice(i, 1);
            i--;
          }
      if (price == "less than 1m")
        for (var i = 0; i < a.length; i++) {
          if (product_info[a[i]].price > 1000000) {
            a.splice(i, 1);
            i--;
          }
        }

      if (type == "All") {
        display(a);
        return true;
      } else if (type == "Keyboard") {
        for (var i = 0; i < a.length; i++)
          if (product_info[a[i]].id.indexOf("s") == -1) {
            a.splice(i, 1);
            i--;
          }
        display(a);
      } else {
        for (var i = 0; i < a.length; i++)
          if (product_info[a[i]].id.indexOf("p") == -1) {
            a.splice(i, 1);
            i--;
          }
        display(a);
      }
    }
  }
}

//search type
function changeSearchType() {
  var sel = document.getElementById("search_type");
  var text = sel.options[sel.selectedIndex].text;
  if (price != text) {
    search();
  }
}

function changeProductType() {
  var sel1 = document.getElementById("product_type");
  var text1 = sel1.options[sel1.selectedIndex].text;
  if (type != text1) {
    search();
  }
}

function home() {
  menutoggle();
  document.getElementById("account").style.display = "none";
  document.getElementById("Endorser").style.display = "block";
  document.getElementById("propagation").style.display = "block";
  document.getElementById("bs&na").style.display = "block";
  document.getElementById("page-num").style.display = "none";
  document.getElementById("home").style.height = "690px";
  document.getElementById("all_products").style.display = "none";
  for (var i = 1; i <= 7; i++)
    document.getElementById(i.toString()).style.background = "#FF8C00";
}

//phan trang
function changeP(a, num, page_arr) {
  document.getElementById("all_products").innerHTML = page_arr[parseInt(a) - 1];
  document.getElementById(a).style.background = "teal";
  for (var i = 1; i <= num; i++)
    if (i != parseInt(a)) {
      document.getElementById(i.toString()).style.background = "#FF8C00";
    }
  //window.scrollBy(0, -1200);
}

function changePage(a) {
  changeP(a, num, page);
}
function changeMousePage(a) {
  changeP(a, num_mouse, mouse_page);
}
function changeKeyboardPage(a) {
  changeP(a, num_keyboard, keyboard_page);
}
//hien thi trang dau tien
function showPorS(page_arr, string, num) {
  // console.log("num: ", num);
  document.getElementById("Endorser").style.display = "none";
  document.getElementById("propagation").style.display = "none";
  document.getElementById("bs&na").style.display = "none";
  document.getElementById("page-num").style.display = "flex";
  document.getElementById("home").style.height = "100px";
  document.getElementById("all_products").style.display = "block";
  document.getElementById("all_products").innerHTML = page_arr[0];
  var temp = "";
  for (var i = 0; i < num; i++) {
    temp +=
      '<li style = "margin-left: 5px;"><button id = "' +
      (i + 1) +
      '" onclick = "' +
      string +
      '(this.id)">' +
      (i + 1) +
      "</button></li>";
  }
  document.getElementById("page-num").innerHTML = temp;
  document.getElementById("1").style.background = "teal";
}

function getNum(arr) {
  var num = 0;
  if (arr.length % 12 != 0) num = float2int(arr.length / 12) + 1;
  else num = arr.length / 12;
  return num;
}

//chuyen trang

function createPage(num, arr, page_arr, type) {
  var product_info = JSON.parse(localStorage.getItem("product_info"));
  var flag = 1;
  var c1 = 0;
  var temp = "";
  for (var i = 0; i < num; i++) {
    var products = "";
    for (var j = i * 12; j < i * 12 + 12; j++) {
      temp +=
        '<div class="col-4"' +
        'id="' +
        product_info[arr[j]].id +
        '">' +
        '<img src="' +
        product_info[arr[j]].img +
        '"><h4>' +
        product_info[arr[j]].name +
        '</h4><div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div><p>' +
        product_info[arr[j]].price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        }) +
        "</p>" +
        '<button class="DetailBtn"' +
        'id="' +
        product_info[arr[j]].id +
        '" onclick="showProductDetail(this.id)">Details</button>' +
        "</div>";
      c1 += 1;
      if (c1 == 4 || j == arr.length - 1) {
        temp = '<div class="row2">' + temp + "</div>";
        products += temp;
        temp = "";
        c1 = 0;
        if (j == arr.length - 1) flag = 0;
      }
      if (flag == 0) break;
    }
    page_arr.push(
      '<h2 class="title">' +
        type +
        "/page " +
        parseInt(i + 1) +
        "</h2>" +
        products
    );
    if (flag == 0) break;
  }
}

function showMouses() {
  document.getElementById("account").style.display = "none";
  showPorS(mouse_page, "changeMousePage", num_mouse);
  menutoggle();
}
function showKeyboards() {
  document.getElementById("account").style.display = "none";
  showPorS(keyboard_page, "changeKeyboardPage", num_keyboard);
  menutoggle();
}
function showProducts() {
  document.getElementById("account").style.display = "none";
  showPorS(page, "changePage", num);
  menutoggle();
}

function openNav() {
  document.getElementById("search").style.width = "100%";
}

function closeNav() {
  document.getElementById("search").style.width = "0%";
}

function quantitydown() {
  if (document.getElementById("quantity").value > 1)
    document.getElementById("quantity").value--;
}

function quantityup() {
  document.getElementById("quantity").value++;
}

function showProductDetail(id) {
  var product_info = JSON.parse(localStorage.getItem("product_info"));
  var res = -1;
  for (var i = 0; i < product_info.length; i++) {
    if (product_info[i].id == id) {
      res = i;
      break;
    }
  }

  if (res != -1) {
    var temp1 = '<img src="' + product_info[res].img + '">';
    var temp2 =
      "<h2>" +
      product_info[res].name +
      '</h2><div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div><p>' +
      product_info[res].price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      }) +
      "</p>";
    document.getElementById("image").innerHTML = temp1;
    document.getElementById("productInfo").innerHTML = temp2;
    document.getElementById("product_detail").style.top = "10%";
    document.getElementById("atc").innerHTML =
      '<a onclick="addToCart(this.id)"' +
      'id="' +
      id +
      '">' +
      "add to cart</a>";
  }
}

function closeDetail() {
  document.getElementById("product_detail").style.top = "-300%";
}

var cart = [];
if (localStorage["cartCount"] == null) {
  localStorage.setItem("cartCount", -1);
}

function isBlocked(name) {
  var user_info = JSON.parse(localStorage.getItem("user_info"));
  for (var i = 0; i < user_info.length; i++)
    if (name == user_info[i].name)
      if (user_info[i].isBlocked == 1) return 1;
      else return 0;
}
let cartCount1 = JSON.parse(localStorage.getItem("cart")).length;
console.log(cartCount1);
document.querySelector(".cart-btn .after").innerHTML = cartCount1;
function addToCart(id) {
  var cartCount = parseInt(localStorage.getItem("cartCount")) + 1;
  localStorage.setItem("cartCount", cartCount);
  console.log("hello from add to cart function");
  if (document.getElementById("userName") == null)
    /* kiem tra xem co dang nhap chua */
    alert("Log in before buying our products !!!!");
  else {
    var userName = document.getElementById("userName").text;
    if (isBlocked(userName) == 1) alert("Your account is blocked!");
    else {
      var sel = document.getElementById("Color");
      var sizE = sel.options[sel.selectedIndex].value;
      var quan = document.getElementById("quantity").value;
      if (localStorage["cart"] == null)
        localStorage.setItem("cart", JSON.stringify(cart));
      var stored_cart = JSON.parse(localStorage.getItem("cart"));
      stored_cart.push({
        name: userName,
        product: id,
        size: sizE,
        quantity: document.getElementById("quantity").value,
        state: 0,
        id: cartCount,
      });
      localStorage.setItem("cart", JSON.stringify(stored_cart));
      document.getElementById("quantity").value = 1;
      cartCount1 = JSON.parse(localStorage.getItem("cart")).length;
      console.log(cartCount1);
      document.querySelector(".cart-btn .after").innerHTML = cartCount1;
      closeDetail();
    }
  }
}

function totalBill(userName) {
  var stored_cart = JSON.parse(localStorage.getItem("cart"));
  var stored_products = JSON.parse(localStorage.getItem("product_info"));
  var choseProduct = [];
  for (var i = 0; i < stored_cart.length; i++) {
    if (stored_cart[i].name == userName && stored_cart[i].state != 1)
      for (var j = 0; j < stored_products.length; j++)
        if (stored_products[j].id == stored_cart[i].product) {
          choseProduct.push({
            price: stored_products[j].price,
            quantity: stored_cart[i].quantity,
          });
          break;
        }
  }
  var total = 0;
  for (var i = 0; i < choseProduct.length; i++) {
    total +=
      parseInt(choseProduct[i].price) * parseInt(choseProduct[i].quantity);
  }
  return total.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

function showCart() {
  if (document.getElementById("userName") == null)
    document.getElementById("MyCart").innerHTML =
      "Please, log in before buying our products!!!";
  else {
    var userName = document.getElementById("userName").text;
    var stored_cart = JSON.parse(localStorage.getItem("cart"));
    var stored_products = JSON.parse(localStorage.getItem("product_info"));
    var inCart = "";
    for (var i = 0; i < stored_cart.length; i++) {
      if (userName == stored_cart[i].name) {
        for (var j = 0; j < stored_products.length; j++)
          if (stored_products[j].id == stored_cart[i].product) {
            inCart +=
              "<li>" +
              '<p style="font-size: 30px">' +
              stored_products[j].name +
              "</p>" +
              "<div>Size: " +
              stored_cart[i].size +
              '<div class="quantity">' +
              "Quantity:" +
              ' <button class="quantitydown" id="' +
              stored_cart[i].id +
              'a"' +
              'onclick="quantitydown2(this.id)">-</button> <input type="text" id="quan" value="' +
              stored_cart[i].quantity +
              '"> <button class="quantityup" id="' +
              stored_cart[i].id +
              "p" +
              '" onclick="quantityup2(this.id)">+</button></div>' +
              "<p>Total amount: " +
              (
                parseInt(stored_cart[i].quantity) *
                parseInt(stored_products[j].price)
              ).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              }) +
              '</p><a id="' +
              stored_cart[i].id +
              "d" +
              '" onclick="deleteThisProduct(this.id)" class="btn" style="cursor: pointer;margin-top: 0%;">Delete</a></div></div></li>';
            break;
          }
      }
    }
    inCart +=
      '<div class ="bottom_right">Total:  ' +
      totalBill(userName) +
      '<a class="btn" style="cursor: pointer;margin-left: 20px" onclick="sendOrder()">Order</a>' +
      " </div>";
    document.getElementById("MyCart").innerHTML = inCart;
  }
}

function openCart() {
  menutoggle();
  document.getElementById("cart").style.top = "0%";
  showCart();
}

function quantitydown2(id) {
  var stored_cart = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < stored_cart.length; i++) {
    if (id.slice(0, -1) == stored_cart[i].id) {
      if (stored_cart[i].quantity > 0) stored_cart[i].quantity--;
    }
  }
  localStorage.setItem("cart", JSON.stringify(stored_cart));
  showCart();
}

function quantityup2(id) {
  var stored_cart = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < stored_cart.length; i++) {
    if (id.slice(0, -1) == stored_cart[i].id) {
      if (stored_cart[i].quantity >= 0) stored_cart[i].quantity++;
    }
  }
  localStorage.setItem("cart", JSON.stringify(stored_cart));
  showCart();
}

function closeCart() {
  cartCount1 = JSON.parse(localStorage.getItem("cart")).length;
  console.log(cartCount1);
  document.querySelector(".cart-btn .after").innerHTML = cartCount1;
  document.getElementById("cart").style.top = "-600%";
}
//xoa san pham trong gio hang
function deleteThisProduct(id) {
  id = id.slice(0, -1);
  var userName = document.getElementById("userName").text;
  var stored_cart = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < stored_cart.length; i++) {
    if (
      id == stored_cart[i].id &&
      userName == stored_cart[i].name &&
      stored_cart[i].state == 0
    ) {
      stored_cart.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("cart", JSON.stringify(stored_cart));
  showCart();
}

if (localStorage["orderCount"] == null) {
  localStorage.setItem("orderCount", -1);
}

/* Luu order de render trong ham yourOrder */
function saveOrder() {
  var userName = document.getElementById("userName").text;
  var client_order = [];
  var id_client_order = [];
  var stored_order = JSON.parse(localStorage.getItem("order"));
  for (var i = 0; i < stored_order.length; i++) {
    if (userName == stored_order[i].name) {
      client_order.push(stored_order[i]);
      if (checkIdClient(stored_order[i].id, id_client_order) == false)
        id_client_order.push({
          id: stored_order[i].id,
          address: stored_order[i].address,
          date: stored_order[i].date,
          state: stored_order[i].state,
        });
    }
  }

  var sort_client_order = [];
  for (var i = 0; i < id_client_order.length; i++) {
    sort_client_order.push({
      id: id_client_order[i].id,
      order: [],
      address: id_client_order[i].address,

      name: userName,
      date: id_client_order[i].date,
      state: id_client_order[i].state,
    });
  }

  for (var i = 0; i < sort_client_order.length; i++) {
    for (var j = 0; j < client_order.length; j++)
      if (client_order[j].id == id_client_order[i].id)
        sort_client_order[i].order.push([
          client_order[j].product,
          client_order[j].size,
          client_order[j].quantity,
        ]);
  }

  if (localStorage["save_order"] == null)
    localStorage.setItem("save_order", JSON.stringify(sort_client_order));
  else {
    var save_order = JSON.parse(localStorage.getItem("save_order"));
    for (var i = 0; i < sort_client_order.length; i++) {
      var flag = true;
      for (var j = 0; j < save_order.length; j++)
        if (save_order[j].id == sort_client_order[i].id) flag = false;
      if (flag == true) save_order.push(sort_client_order[i]);
    }
    localStorage.setItem("save_order", JSON.stringify(save_order));
  }
  var save_order = JSON.parse(localStorage.getItem("save_order"));
}

//kiem tra so luong san pham

function checkQuantity(productId, quantity) {
  var stored_products = JSON.parse(localStorage.getItem("product_info"));
  for (var i = 0; i < stored_products.length; i++)
    if (stored_products[i].id == productId)
      if (stored_products[i].quantity >= quantity) {
        stored_products[i].quantity -= quantity;
        localStorage.setItem("product_info", JSON.stringify(stored_products));
        return true;
      }
  return false;
}

const orderAddressBtn = () => {
  if (
    document.querySelector("#houseNumber").value == "" ||
    document.querySelector("#ward").value == "" ||
    document.querySelector("#street").value == "" ||
    document.querySelector("#district").value == "" ||
    document.querySelector("#city").value == ""
  ) {
    alert("Can phai nhap day du thong tin");
    console.log(document.querySelector("#houseNumber").value);
  } else {
    var houseNumber = document.querySelector("#houseNumber").value;
    var street = document.querySelector("#ward").value;
    var ward = document.querySelector("#street").value;
    var district = document.querySelector("#district").value;
    var city = document.querySelector("#city").value;
    var address = `${houseNumber} ${street} ${ward} ${district} ${city}`;
    var stored_cart;
    var orderCount = parseInt(localStorage.getItem("orderCount")) + 1;
    localStorage.setItem("orderCount", orderCount);
    var today = new Date();
    var order = [];
    if (localStorage["order"] == null) {
      localStorage.setItem("order", JSON.stringify(order));
    }
    var stored_order = JSON.parse(localStorage.getItem("order"));
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    var userName = document.getElementById("userName").text;
    var stored_cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0; i < stored_cart.length; i++) {
      if (userName == stored_cart[i].name && stored_cart[i].state == 0) {
        if (
          //kiem tra so luong
          checkQuantity(stored_cart[i].product, stored_cart[i].quantity) == true
        ) {
          stored_order.push({
            date: today,
            name: userName,
            product: stored_cart[i].product,
            size: stored_cart[i].size,
            quantity: stored_cart[i].quantity,
            id: orderCount,
            address: address,
            state: 0, // tinh trang xu li cua don hang
          });
        } else {
          alert(getProductName(stored_cart[i].product) + " is out of stock");
        }
      }
    }
    stored_cart = [];

    localStorage.setItem("cart", JSON.stringify(stored_cart));
    localStorage.setItem("order", JSON.stringify(stored_order));
    showCart();
    alert("Go to order section to see your order!!!");
    saveOrder();
    document.querySelector(".order-address").classList.remove("active");
  }
};

function sendOrder() {
  let userInfo = JSON.parse(localStorage.getItem("user_info"));
  var orderCount = parseInt(localStorage.getItem("orderCount")) + 1;
  localStorage.setItem("orderCount", orderCount);
  var today = new Date();
  var order = [];
  if (localStorage["order"] == null) {
    localStorage.setItem("order", JSON.stringify(order));
  }
  var stored_order = JSON.parse(localStorage.getItem("order"));
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  var userName = document.getElementById("userName").text;
  var stored_cart = JSON.parse(localStorage.getItem("cart"));
  let userConfirm = confirm(
    "Chon Ok de nhap dia chi moi, chon Huy de lay dia chi mac dinh"
  );
  if (userConfirm) {
    document.querySelector(".order-address").classList.add("active");
    orderAddressBtn();
  } else {
    let address = ''
    for (let i = 0; i < userInfo.length; i++) {
      if (document.querySelector("#userName").innerHTML == userInfo[i].name) {
        address = userInfo[i].address;
      }
    }
    for (var i = 0; i < stored_cart.length; i++) {
      if (userName == stored_cart[i].name && stored_cart[i].state == 0) {
        if (
          //kiem tra so luong
          checkQuantity(stored_cart[i].product, stored_cart[i].quantity) == true
        ) {
          stored_order.push({
            date: today,
            name: userName,
            product: stored_cart[i].product,
            size: stored_cart[i].size,
            quantity: stored_cart[i].quantity,
            address: address,
            id: orderCount,
            state: 0, // tinh trang xu li cua don hang
          });
        } else {
          alert(getProductName(stored_cart[i].product) + " is out of stock");
        }
      }
    }
    console.log(stored_order);
    stored_cart = [];

    localStorage.setItem("cart", JSON.stringify(stored_cart));
    localStorage.setItem("order", JSON.stringify(stored_order));
    showCart();
    alert("Go to order section to see your order!!!");
    saveOrder();
  }
}

function checkIdClient(id, id_array) {
  if (id_array == []) false;
  for (var i = 0; i < id_array.length; i++)
    if (id == id_array[i].id) return true;
  return false;
}

function getProductName(id) {
  var stored_products = JSON.parse(localStorage.getItem("product_info"));
  for (var i = 0; i < stored_products.length; i++)
    if (stored_products[i].id == id) return stored_products[i].name;
}

function getState(state) {
  if (state == 0) return "Your order is being processed.";
  return "Your order is being delivered.";
}

function yourOrder() {
  menutoggle();
  document.getElementById("order").style.top = "0%";
  var save_order = JSON.parse(localStorage.getItem("save_order"));
  var temp = "";
  if (document.getElementById("userName") == null)
    document.getElementById("MyOrder").innerHTML =
      "You have not ordered anything, yet.";
  else {
    var userName = document.getElementById("userName").text;
    var flag = false;
    for (var i = 0; i < save_order.length; i++) {
      if (userName == save_order[i].name) {
        temp +=
          '<li style="margin-bottom: 1.5%;"><p>Order ID: ' +
          save_order[i].id +
          "</p>" +
          "<p>Date: " +
          save_order[i].date +
          "</p><p> State: " +
          getState(save_order[i].state) +
          "</p> <ul>";
        for (var j = 0; j < save_order[i].order.length; j++) {
          temp +=
            '<li style="display: inline-block; margin-right: 5%;border-radius: 10px;border: 2px solid black; padding: 5px; margin-bottom: 5px"> <p style="font-size: 28px;">' +
            getProductName(save_order[i].order[j][0]) +
            "</p>" +
            "<p> Size: " +
            save_order[i].order[j][1] +
            "</p> <p> Quantity: " +
            save_order[i].order[j][2] +
            "</p></li>";
        }
        temp += "</ul></li>";
        flag = true;
      }
    }
    document.getElementById("MyOrder").innerHTML = temp;
  }
}

function closeOrder() {
  document.getElementById("order").style.top = "-600%";
}

function gotoAdmin() {
  var admin = document.getElementById("userName").text;
  localStorage.setItem("current_admin", admin);
}

function checkAdmin(name) {
  var admins = JSON.parse(localStorage.getItem("admins"));
  for (var i = 0; i < admins.length; i++) if (name == admins[i]) return 1;
  return 0;
}
