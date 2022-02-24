const link = document.querySelectorAll('.link');

for (let index = 0; index < link.length; index++) {
    const element = link[index];
    if (element.classList[1] === 'link-ativo') {
        console.log('teste');
        element.classList.remove('link-ativo');
    }

    element.onclick = () => {
        element.classList.add('link-ativo');
    }
}