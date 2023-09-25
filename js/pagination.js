const blogItems = document.querySelector(".blog__content");
let data;
let startItem = 0;
let endItem = 3;
if (blogItems) {
    loadBlogItems();
}

async function loadBlogItems() {
    const response = await fetch("files/data.json", {
        method: "GET"
    });
    if (response.ok) {
        const responseResult = await response.json();
        data = responseResult
        initBlog(data, startItem, endItem);

    } else ("Error!");
}

function initBlog(data, startItem, endItem) {

    const dataPart = data.items.slice(startItem, endItem);

    dataPart.forEach(item => {
        buildBlogItem(item);
    })

    viewMore();
}

function buildBlogItem(item) {
    let blogItemTemplate = ``;

    blogItemTemplate += `<article class="blog__article">`
    item.image ? blogItemTemplate += `<a class="blog__article-img" href="${item.url}"><img src="${item.image}" alt="Images blog"></a>` : null;
    blogItemTemplate += `<p class="blog__article-data">${item.date}</p>`
    blogItemTemplate += `<h4><a class="blog__article-title" href="${item.url}">${item.title}</a></h4>`
    blogItemTemplate += `<p class="blog__article-text">${item.text}</p>`
       
    
    if (item.tags) {
        blogItemTemplate += `<div class="blog__article-tag">`
        for (const tag in item.tags) {
            blogItemTemplate += `<a href="${item.tags[tag]}">${tag}</a>` 
        }
           blogItemTemplate += `</div>`
        
    }   
 
    blogItemTemplate += `</article>`;

    blogItems.insertAdjacentHTML('beforeend', blogItemTemplate);
    
}

document.addEventListener("click", documentActions);

function viewMore() {
    const dataItemsLength = data.items.length;     
    const currentItems = document.querySelectorAll(".blog__article").length;
    const viewMore = document.querySelector(".blog__button");

    currentItems < dataItemsLength ? viewMore.hidden = false : viewMore.hidden = true;
}

function documentActions(event) {
    const targetElement = event.target;

    if (targetElement.closest(".blog__button")) {

        startItem = document.querySelectorAll(".blog__article").length;
        endItem = startItem + 3; 
        

        initBlog(data,startItem, endItem)
        event.preventDefault();
    }
}