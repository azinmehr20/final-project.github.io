 
function btnNextSport() {
   document.getElementById("sport-slider").classList.add("next-btn-active")
}

const foodMenu = [
    {
        id:1,
        title:"Ghormeh sabzi",
        category:"food",
        img:"https://media.tehrantimes.com/d/t/2020/08/14/4/3523893.jpg",
        country:`Iran`
    },
    {
        id:2,
        title:"Pasta alfredo",
        category:"food",
        img:"https://i.pinimg.com/564x/9a/94/10/9a9410d4b2b05fea9cab5b4ef8ea6991.jpg",
        country:`Italy`
    },
    {
        id:3,
        title:"Kebab",
        category:"food",
        img:"https://i.pinimg.com/564x/30/57/c5/3057c509979df20776123696380d62f2.jpg",
        country:`Iran`
    },
    {
        id:4,
        title:"Latte",
        category:"drink",
        img:"https://cdn-rdb.arla.com/Files/arla-uk/627349198/4d8b71bc-27a1-42dd-a717-58689f892fbb.jpg?mode=crop&w=1269&h=715&ak=629ae667&hm=d906c77c",
        country:`America`
    },
    {
        id:5,
        title:"Blue Hawaii",
        category:"drink",
        img:"https://i.pinimg.com/564x/65/7a/2c/657a2c84a854f2b396c15fd66282ca21.jpg",
        country:`Hawaii`
    },
    {
        id:6,
        title:"Mocha",
        category:"drink",
        img:"https://i.pinimg.com/564x/90/ff/6e/90ff6e544e95b8338cb4fd3d824ee3f2.jpg",
        country:`Germany`
    },
    {
        id:7,
        title:"Strawberry Smoothie",
        category:"drink",
        img:"https://i.pinimg.com/564x/64/ab/2d/64ab2de1f20506e2254d021403bde308.jpg",
        country:`America`
    },

];
 const justFood = [
    {
        id:1,
        title:"Ghormeh sabzi",
        category:"food",
        img:"https://media.tehrantimes.com/d/t/2020/08/14/4/3523893.jpg",
        country:`Iran`
    },
    {
        id:2,
        title:"Pasta alfredo",
        category:"food",
        img:"https://i.pinimg.com/564x/9a/94/10/9a9410d4b2b05fea9cab5b4ef8ea6991.jpg",
        country:`Italy`
    },
    {
        id:3,
        title:"Kebab",
        category:"food",
        img:"https://i.pinimg.com/564x/30/57/c5/3057c509979df20776123696380d62f2.jpg",
        country:`Iran`
    },
 ]
function activateButtonFood(item){
    document.querySelectorAll(".tab-header-button").forEach(function(btnFood){
        btnFood.classList.remove("active");
    });
    if(item){
        item.classList.add("active");
    }
}

function setButtonFood(){

    const tabHeader = document.getElementById('tab-header');

    const categoryFood = foodMenu.reduce(
        function (values , item) {
            if(item && item.category &&!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },
        ["food"]
    );

    const buttonFood = categoryFood.map(function (category){
        const classListFood = category === 'food' ? "tab-header-button active " :"tab-header-button"
        return ` <div class="${classListFood}" data-id=${category}>${category}</div>`
    });
    tabHeader.innerHTML=buttonFood.join("");

    document.querySelectorAll(".tab-header-button").forEach(function(item){
        const categoryTypeFood =item.getAttribute('data-id')
        item.addEventListener("click" , function(){
            activateButtonFood(item);
            
            const filterMenuFood = foodMenu.filter(function(item){
                return item.category === categoryTypeFood
            })
             displayMenueItems(filterMenuFood)

        });
    });
        
    
    
   
}



function displayMenueItems(items){
    const menuWrapper = document.getElementById("food-drink-galery");
    if(items){
        menuWrapper.innerHTML = items.map(function (fooddrink){
            return `<figure class="food-drink wow animate__animated animate__flipInX animate__delay-1s">
            <img src=${fooddrink.img} alt="" class="food-drink-image">
            <figcaption class="food-drink-details">
                <div>
                   <p class="f-d-name">${fooddrink.title}</p>
                   <p class="f-d-country">country : ${fooddrink.country}</p></div>
                <a href="#" target="blank">How Make? <i class="fas fa-link"></i></a>
            </figcaption>
        </figure>`;
        })
        .join("");
    }
}
document.addEventListener("DOMContentLoaded" ,function(){
    setButtonFood();
    displayMenueItems(justFood);
    
});

/* country & city menu*/

const menuCountry= [
    {
        id:1,
        name:"Singapor",
        category:"singapor",
        img:"https://i.pinimg.com/564x/76/b3/73/76b3737d94df2fab39d5ed5546023363.jpg",
        countinet:`In Asia`,
        link:"https://goo.gl/maps/xFbZG6TE7EEmTJ2v6",
    },
    {
        id:2,
        name:"France",
        category:"France",
        img:"https://i.pinimg.com/564x/e5/fd/67/e5fd671ccb4499cff3bdc6074191beae.jpg",
        countinet:`In Eurupe`,
        link:"https://goo.gl/maps/1xMzFuYpt6aB8ba48",
    },
    {
        id:3,
        name:"Malaysia",
        category:"malaysia",
        img:"https://i.pinimg.com/564x/e3/62/d2/e362d224a77ea899f13500a0fcc67193.jpg",
        countinet:`In Asia`,
        link:"https://goo.gl/maps/dmFj2a6w58f8GRzb6",
    },
    {
        id:4,
        name:"Shiraze",
        category:"shiraze",
        img:"https://i.pinimg.com/564x/cb/8c/17/cb8c17aba14ae4bdd42e9189f19f9060.jpg",
        countinet:`In Iran`,
        link:"https://goo.gl/maps/JYRhnR6VBZqkgN9j6",
    },
    {
        id:5,
        name:"Bali",
        category:"bali",
        img:"https://i.pinimg.com/564x/1b/82/bb/1b82bb53765ef7cfd4660821850ff41b.jpg",
        countinet:`In indonesia`,
        link:"https://goo.gl/maps/dhoUkQ2d4KCdns9w6",
    },
];

const justSingapor =[
    {
        id:1,
        name:"Singapor",
        category:"singapor",
        img:"https://i.pinimg.com/564x/76/b3/73/76b3737d94df2fab39d5ed5546023363.jpg",
        countinet:`In Asia`,
        link:"https://goo.gl/maps/xFbZG6TE7EEmTJ2v6",
    },
]

function activateButtonCountry(item){
    document.querySelectorAll(".country-btn").forEach(function(btnCountry){
        btnCountry.classList.remove("activ-cou-btn");
    });
    if(item){
        item.classList.add("activ-cou-btn");
    }
};

function setButtonCountry(){

    const countryMenuBtn = document.getElementById('country-menu-btn');

    const categoryCountry = menuCountry.reduce(
        function (values , item) {
            if(item && item.category &&!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },
        ["singapor"]
    );

    const buttonCityCountry =categoryCountry.map(function (category){
        const classListCountry = category === 'singapor' ? "country-btn activ-cou-btn" :"country-btn"
        return ` <button type="button" class="${classListCountry}"  data-id=${category} >${category}</button>`
    });
    countryMenuBtn.innerHTML=buttonCityCountry.join("");

    document.querySelectorAll(".country-btn").forEach(function(item){
        const categoryTypeCountry =item.getAttribute('data-id')
        item.addEventListener("click" , function(){
            activateButtonCountry(item);
            const filterMenuCountry = menuCountry.filter(function(item){
                return item.category === categoryTypeCountry
            })
            displayCountryItems(filterMenuCountry)

        });
    });
        
    
    
   
}

function displayCountryItems(items){
    const menuCountryWrapper = document.getElementById("country-menu-imgs");
    if(items){
        menuCountryWrapper.innerHTML = items.map(function (countrycity){
            return `<div class="country-menu-img singapor wow animate__animated animate__flipInX animate__delay-1s" >
            <div class="country-img ">
                <img src="${countrycity.img}">
            </div>
            <div class="country-img-about">
                <p>${countrycity.name}</p>
                <p>${countrycity.countinet}</p>
                <a href="${countrycity.link}" target="blank">Fallow In Map<i class="fas fa-globe-africa"></i></a>
            </div>
        </div>`
          ;
        })
        .join("");
    }
}
document.addEventListener("DOMContentLoaded" ,function(){
    setButtonCountry();
    displayCountryItems(justSingapor);
    
});






