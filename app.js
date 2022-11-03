

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0,
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0,
}]

const cones = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
}, {
    name: 'Dipped Cone',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB408l7twGwR_asHrj5v4uFSNAUDt5qwAteg&usqp=CAU',
    price: 3,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
}, {
    name: 'Oreos',
    image: 'https://thumbs.dreamstime.com/b/pile-crushed-oreo-cookies-topping-73515327.jpg',
    price: 3,
    quantity: 0
}]


function renderStoreTop() {
    let allToppings = document.getElementById('topp')
    let template = ''
    toppings.forEach(t => {
        template += `<div class="col-4 cute-card" onclick="buyTopping('${t.name}')">
    <img src="${t.image}" class="img-fluid fit-img">
    <p>${t.name} $${t.price}</p>
</div>
`})
    allToppings.innerHTML = template
}

function renderStoreCone() {
    let allCones = document.getElementById('conee')
    let template = ''
    cones.forEach(v => {
        template += `<div class="col-4 cute-card" onclick="buyCone('${v.name}')">
    <img src="${v.image}" class="img-fluid fit-img">
    <p>${v.name} $${v.price}</p>
</div>
`})
    allCones.innerHTML = template
}


function renderStoreCream() {
    let allCream = document.getElementById('creamm')
    let template = ''
    iceCream.forEach(i => {
        template += `<div class="col-4 cute-card" onclick="buyCream('${i.name}')">
    <img src="${i.image}" class="img-fluid fit-img">
    <p>${i.name} $${i.price}</p>
</div>
`})
    allCream.innerHTML = template
}

function buyTopping(toppingname) {
    let foundTopping = toppings.find(t => t.name == toppingname)
    foundTopping.quantity++
    console.log(foundTopping);
    drawToppings()
}

function buyCone(conename) {
    let foundCone = cones.find(v => v.name == conename)
    foundCone.quantity++
    console.log(foundCone);
    drawCones()
}

function buyCream(creamname) {
    let foundCream = iceCream.find(i => i.name == creamname)
    foundCream.quantity++
    console.log(foundCream);
    drawIceCream()
}

function drawToppings() {
    let template = ''
    toppings.forEach(t => {
        if (t.quantity > 0) {
            template += `<div class="bg-secondary d-flex justify-content-between px-2"> <i class="mdi mdi-close text-danger cursor-pointer" onclick="removeToppings('${t.name}')"></i> <P>${t.name}</P> 
            <P>${t.quantity}</P>
             <P>$${t.price}</P> 
             <P>$${t.price * t.quantity}</P> </div>`
        }
        document.getElementById('toppingsCart').innerHTML = template
        drawTotal()
    })
}

function drawIceCream() {
    let template = ''
    iceCream.forEach(i => {
        if (i.quantity > 0) {
            template += `<div class="bg-secondary d-flex justify-content-between px-2"> <i class="mdi mdi-close text-danger cursor-pointer" onclick="removeiceCream('${i.name}')"></i><p> ${i.name}</p>
            <P>${i.quantity}</P>
            <P>$${i.price}</P>  
            <P>$${i.price * i.quantity}</P> </div>`
        }
        document.getElementById('iceCreamCart').innerHTML = template
        drawTotal()
    })
}

function drawCones() {
    let template = ''
    cones.forEach(c => {
        if (c.quantity > 0) {
            template += `<div class="bg-secondary d-flex justify-content-between px-2"> <i class="mdi mdi-close text-danger cursor-pointer" onclick="removeCones('${c.name}')"></i><p> ${c.name}</p>
            <P>${c.quantity}</P>
            <P>$${c.price}</P> 
            <P>$${c.price * c.quantity}</P> </div>`
        }
        document.getElementById('conesCart').innerHTML = template
        drawTotal()
    })
}

function drawTotal() {
    let total = 0
    iceCream.forEach(i => {
        total += i.price * i.quantity
    })
    toppings.forEach(t => {
        total += t.price * t.quantity
    })
    cones.forEach(c => {
        total += c.price * c.quantity
    })
    document.getElementById("total").innerHTML = total
}



function removeiceCream(icecreamname) {
    let foundCream = iceCream.find(i => i.name == icecreamname)
    foundCream.quantity--
    drawIceCream()
    console.log('decreasing', foundCream)
}


function removeToppings(toppingsName) {
    let foundTopping = toppings.find(t => t.name == toppingsName)
    foundTopping.quantity--
    drawToppings()

}

function removeCones(conename) {
    let foundCone = cones.find(c => c.name == conename)
    foundCone.quantity--
    drawCones()
}

renderStoreTop()
renderStoreCone()
renderStoreCream()