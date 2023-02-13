//Variables
const loader = document.getElementById("loader")
const header = document.getElementById("header")
const cartView = document.getElementById("cart-view")
const openCartViewBtn = document.getElementById("open-cart-view")
const closeCartViewBtn = document.getElementById("close-cart-view")
const menuView = document.getElementById("menu-view")
const openMenuViewBtn = document.getElementById("open-menu-view")
const closeMenuViewBtn = document.getElementById("close-menu-view")

//Functions
const hideLoader = () => {
  setTimeout(()=>{
    loader.classList.add("hidden")
  },2500)
}

const colorHeader = () => {
  if(window.scrollY>0){
    header.classList.add("colored-header")
  }else{
    header.classList.remove("colored-header")
  }
}

const toggleCartView = () => {
  cartView.classList.toggle("hidden")
}

const toggleMenuView = () => {
  menuView.classList.toggle("hidden")
}

// const openMenuView = () => {
//   menuView.classList.remove("hidden")
// }

// const closeMenuView = () => {
//   menuView.classList.add("hidden")
// }


//Events
document.addEventListener("DOMContentLoaded",() => hideLoader())
window.addEventListener("scroll",() => colorHeader())
openMenuViewBtn.addEventListener("click", () => toggleMenuView())
closeMenuViewBtn.addEventListener("click", () => toggleMenuView())
openCartViewBtn.addEventListener("click", () => toggleCartView())
closeCartViewBtn.addEventListener("click", () => toggleCartView())





// {/* <const products = [
//   {
//     id: 1,
//     name:"Camisa",
//     price:456,
//     image:"assets/images/featured1.png",
//     category:"hoodies",
//     quantity: 5,
//   },
//   {
//     id: 2,
//     name:"Playera",
//     price:456,
//     image:"assets/images/featured1.png",
//     category:"shirts",
//     quantity: 7,
//   },
//   {
//     id: 3,
//     name:"Sudadera",
//     price:456,
//     image:"assets/images/featured1.png",
//     category:"swetshirts",
//     quantity: 4,
//   }
// ]

// function printProducts(){
//   let html = ""
//   for (const product of products ){
//     html+=`

//     `
//   }
// }

// printProducts()

// let cart =[]

// function printCart(){
//   for (const article of cart){
//     console.log(article)
//   }
// }

// printCart()

// function addToCart (id,qty = 1){
//   const product = product.find(p => p.id === id)
//   if(product && product.quantity){
//       const article = cart.find(a => a.id === id)
//   if(article){
//     if(chechkStock(id,qty)){
//       article.qty++
//     }else{
//       console.log("No hay stock suficiente")
//     }
//   } else{
//     cart.push({id,qty})
//   }

//   cart.push({id})
//   }

// }

// function checkStock(id,qty){
//   const product = products.find(p=>p.id == id)
//   return product.quantity - qty >= 0
// }

// function removeFromCart(id,qty = 1){
//   const article = cart.find(a => a.id === id)
//   if (article && article.qty-qty>0){
//     article.qty--  
//   }else{
//     const confirm = window.confirm("¿estás seguro?"){
//       if (confirm){
//           cart = cart.filter(a=>a.id !== id)
//       }
//     }
//   }
// }

// function deleteFromCart(id){
//   const article = cart.find(a=>a.id === id)
//   cart.splice(cart.indexOf(article),1)
// }

// function totalArticles(){
//   return cart.reduce((acc,article) => acc + article.qty,0)
// }

// function totalAmount (){
//   return cart.reduce((acc, article) => {
//     const product = product.find(p => p.id === article.id)
//     return acc + product.price * article.qty
//   }, 0)
// }

// function clearCart(){
//   cart = []
// }

// function checkout(){
//   cart.forEach(article =>{
//     const product =products.find(p=>p.id === article.id)
//     product.quantity -= article.qty
//   })
//   clearCart()
//   printProducts()
//   console.log("Gracias por su compra")
// }> */}