const wrapper = document.body.firstElementChild.firstElementChild.lastElementChild

for(let i = 0; i < cats.length; i++) {
    
    wrapper.innerHTML += `
    <div class="block__item">
        <img class="cats" src="${cats[i].img_link}"></img>
        <div class="block__item_d">
            <h2 class="name_cat">Имя котика: ${cats[i].name}</h2>
            <h2 class="desc_cat" id="age">Возраст котика: ${cats[i].age}</h2>
            <h2 class="desc_cat" >Рейтинг: ${cats[i].rate}</h2>
            <h2>Описание: ${cats[i].description}</h2>
        </div>
    </div>
    `
}