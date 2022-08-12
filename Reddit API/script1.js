const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
const output = document.querySelector('.output')

const url = 'https://www.reddit.com/r/funny/top/.json?limit=5'

btn.onclick = (e)=>{
    fetch(url)  //get the url
    .then(rep => rep.json()) //receive response and convert to json
    .then(data =>{
        //console.log(data.data.children) //get from API array
        getData(data.data.children)
    })
}

function getData(data){
    console.log(data)
    let html = ''
    data.forEach((item)=>{
        console.log(item.data)
        const elem = item.data
        //output the thumbnail, title, and url
        html += `<div><h3>${elem.title}</h3>`
        html += `<img src='${elem.thumbnail}'>`
        html += `<a href='${elem.url} target =`
        html += `'_blank' >${elem.url} </a></div>`
       
    })
    output.innerHTML = html
}
