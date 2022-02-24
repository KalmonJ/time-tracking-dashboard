import json from "./data.json" assert { type: "json" };

const links = document.querySelectorAll('.link');
const containerInfo = document.querySelectorAll('.card__infos');
const data = json;
let x = 0;

function Default () {

    for (let c = 0; c < containerInfo.length; c++) {
        const containers = containerInfo[c];

        containers.innerHTML = `<p class = 'pratics'> ${data[c].title}</p>`;
        containers.innerHTML += `<h1 class = 'title'>${data[c].timeframes.weekly.current}hrs </h1>`;
        containers.innerHTML += `<p class = 'lasts'>Last week - ${data[c].timeframes.weekly.previous}hrs</p>`;

    }
}

Default();

while (x < links.length) {
    const link = links[x];  

    link.onclick = (e) => {

        for (let index = 0; index < containerInfo.length; index++) {
            const element = containerInfo[index];

            if (link.textContent === 'Daily') {
                element.innerHTML = `<p class = 'pratics'> ${data[index].title}</p>`;
                element.innerHTML += `<h1 class = 'title'>${data[index].timeframes.daily.current}hrs </h1>`;
                element.innerHTML += `<p class = 'lasts'>Last daily - ${data[index].timeframes.daily.previous}hrs</p>`;

            } else if (link.textContent === 'Monthly') {
                element.innerHTML = `<p class = 'pratics'> ${data[index].title}</p>`;
                element.innerHTML += `<h1 class = 'title'>${data[index].timeframes.monthly.current}hrs </h1>`;
                element.innerHTML += `<p class = 'lasts'>Last monthly - ${data[index].timeframes.monthly.previous}hrs</p>`;
            
            } else if (link.textContent === 'weekly') {
                Default();
            }
        }    
    }
    x++
}


