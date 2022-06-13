document.querySelector('main').remove()

const newHeader = document.createElement('h1')
newHeader.className = "victory"
newHeader.setAttribute('id', 'victory')
newHeader.textContent = "YOUR-NAME is the champion"