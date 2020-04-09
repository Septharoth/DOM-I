const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let image1 = document.getElementById("cta-img");
image1.setAttribute('src', siteContent["cta"]["img-src"])

let topHead = document.querySelector(".cta-text h1");
topHead.innerHTML = siteContent["cta"]["h1"];

let topButton = document.querySelector(".cta-text button");
topButton.innerHTML = siteContent["cta"]["button"];

let image2 = document.getElementById("middle-img");
image2.setAttribute('src', siteContent['main-content']['middle-img-src']);

let nav = document.querySelector("nav");
nav.innerHTML = `<a href='#'>${siteContent['nav']['nav-item-1']}</a><a href='#'>${siteContent['nav']['nav-item-2']}</a><a href='#'>${siteContent['nav']['nav-item-3']}</a><a href='#'>${siteContent['nav']['nav-item-4']}</a><a href='#'>${siteContent['nav']['nav-item-5']}</a><a href='#'>${siteContent['nav']['nav-item-6']}</a>`


let newNavItemAp = document.createElement("a");
newNavItemAp.innerHTML = "AppendChild";
nav.appendChild(newNavItemAp);


let newNavItemPr = document.createElement("a");
newNavItemPr.innerHTML = "Prepend";
nav.prepend(newNavItemPr);

let navLinks = document.getElementsByTagName("a")
for (i = 0; i < navLinks.length; i++) {
  navLinks.item(i).style.color = "green";
}


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let topContent = document.querySelector(".top-content");
topContent.innerHTML = `<div class='text-content'><h4>${siteContent["main-content"]["features-h4"]}</h4><p>${siteContent["main-content"]["features-content"]}</p></div><div class='text-content'><h4>${siteContent["main-content"]["about-h4"]}</h4><p>${siteContent["main-content"]["about-content"]}</p></div>`

let botContent = document.querySelector(".bottom-content");
botContent.innerHTML = `<div class='text-content'><h4>${siteContent["main-content"]["services-h4"]}</h4><p>${siteContent["main-content"]["services-content"]}</p></div><div class='text-content'><h4>${siteContent["main-content"]["product-h4"]}</h4><p>${siteContent["main-content"]["product-content"]}</p></div><div class='text-content'><h4>${siteContent["main-content"]["vision-h4"]}</h4><p>${siteContent["main-content"]["vision-content"]}</p></div>`;

let contact = document.querySelector('.contact');
contact.innerHTML = `<h4>${siteContent['contact']['contact-h4']}</h4><p>${siteContent['contact']['address']}</p><p>${siteContent['contact']['phone']}</p><p>${siteContent['contact']['email']}</p>`

let footer = document.querySelector('footer');
footer.innerHTML = `<p>${siteContent['footer']['copyright']}</p>`