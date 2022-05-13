const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./assets/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./assets/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./assets/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./assets/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./assets/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./assets/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./assets/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./assets/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./assets/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./assets/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
]

function activateTheButton(item){
  document.querySelectorAll(".category-btn").forEach(function(btn){
    btn.classList.remove("active");
  });
  if (item){
    item.classList.add("active");
  }
}

function setButtonCategories() {

  const categoryMenu = document.getElementById('menu-category')

  const categories = menu.reduce(
    function(values , item) {
      if (item && item.category && !values.includes(item.category)){
        values.push(item.category);

      }
      return values;
    },
    ["all"]
  );

  const buttons = categories.map(function (category){
    const classList = category==='all' ? "category-btn active" :"category-btn"
    return  `<button class="${classList}" data-id=${category}>${category}</button>`
  })

  categoryMenu.innerHTML=buttons.join("");

  document.querySelectorAll(".category-btn").forEach(function (item){
    const categoryType = item.getAttribute('data-id') ;
    item.addEventListener("click" ,function(){

      activateTheButton(item);
      
      if (categoryType==="all"){
        displayMenuItems(menu);
        return;
      }
      const filterdMenu = menu.filter(function(item){
        return item.category===categoryType;
      });
      displayMenuItems(filterdMenu);
    });
  })

  
}

function displayMenuItems(items) {
  const menuWrapper = document.getElementById("menu-item");
  if (items) {
    menuWrapper.innerHTML = items
      .map(function (item) {
        return `<div class="item">
      <img src=${item.img} alt="" class="item-img" />
      <div class="item-details">
        <div class="detail-header">
          <p>${item.title}</p>
          <p>$${item.price}</p>
        </div>
        <p class="item-desc">
          ${item.desc}
        </p>
      </div>
    </div>`;
      })
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", function(){
  setButtonCategories();
  displayMenuItems(menu);
});