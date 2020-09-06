// console.log('did this work')

let pic = document.querySelector('#pic')
console.log(pic)

let h2 = document.querySelector('h2')
console.log(h2)

h2.innerText = h2.innerText + "!!!"

let containers = document.querySelectorAll('.container')
console.log(containers)

let li = document.querySelectorAll('li')
li[0].style.color = 'red'

li[2].innerText = 'Jamboree sandwich at the Jambo-ree'

const newImg = document.createElement('img')

newImg.setAttribute('src', 'https://patch.com/img/cdn20/users/20673003/20181016/105033/styles/raw/public/processed_images/downers_grove_46-1539701424-9663.jpg')
containers[1].appendChild(newImg)

for (let i = 0; i < li.length; i++){
    li[i].style.color = 'green'
}