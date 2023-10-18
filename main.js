// caching the DOM
const reactionEl = document.querySelector('.reaction')
const memoryEl = document.querySelector('.memory')
const verbalEl = document.querySelector('.verbal')
const visualEl = document.querySelector('.visual')

const getData = async () => {
    const response = await fetch('../data.json')
    const data = await response.json()
    data.forEach((item) => {
        switch(item.category) {
            case 'Reaction':
                reactionEl.innerHTML = `
                    <img src=${item.icon} alt="${item.category}-logo">
                    <p class="item-txt">${item.category}</p>
                    <p class="grade"><span>${item.score}</span> / 100</p>
                `
                break;
            case 'Memory':
                memoryEl.innerHTML = `
                    <img src=${item.icon} alt="${item.category}-logo">
                    <p class="item-txt">${item.category}</p>
                    <p class="grade"><span>${item.score}</span> / 100</p>
                `
                break;
            case 'Verbal':
                verbalEl.innerHTML = `
                    <img src=${item.icon} alt="${item.category}-logo">
                    <p class="item-txt">${item.category}</p>
                    <p class="grade"><span>${item.score}</span> / 100</p>
                `
                break;
            case 'Visual':
                visualEl.innerHTML = `
                    <img src=${item.icon} alt="${item.category}-logo">
                    <p class="item-txt">${item.category}</p>
                    <p class="grade"><span>${item.score}</span> / 100</p>
                `
                break;
        }
    })
}

getData()