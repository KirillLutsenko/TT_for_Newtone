(this.webpackJsonptt_newtone=this.webpackJsonptt_newtone||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(22)},,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(0),c=a.n(r),n=a(4),i=a.n(n),o=a(2),s=a(5),l=a(6),u=a(8),d=a(7),m=a(1),p=a.n(m),_=p.a.shape({price:p.a.string.isRequired,name:p.a.string.isRequired,id:p.a.string.isRequired}).isRequired,b=p.a.shape({item:p.a.arrayOf(p.a.shape({name:p.a.string.isRequired,id:p.a.string.isRequired,total:p.a.number.isRequired,count:p.a.number.isRequired})).isRequired,deleteFromCart:p.a.func.isRequired,addToCart:p.a.func.isRequired}),C=(p.a.shape({cartItems:b.isRequired,clearCart:p.a.func.isRequired,deleteFromCart:p.a.func.isRequired,addToCart:p.a.func.isRequired}).isRequired,p.a.shape({addToCart:p.a.func.isRequired,products:p.a.arrayOf(_)}).isRequired,a(16),function(t){var e=t.item,a=t.deleteFromCart,r=t.addToCart;return c.a.createElement("li",{key:e.id,className:"cart-list__cart-item cart-item"},c.a.createElement("p",{className:"cart-item__cart-product-name"},"".concat(e.name,": ").concat(e.count," kg -  $ ").concat(+e.total)),c.a.createElement("div",{className:"cart-item__buttons"},c.a.createElement("button",{type:"button",className:"cart-item__button--add",onClick:function(){return r(e)}},"+"),c.a.createElement("button",{type:"button",className:"cart-item__button--delete",onClick:function(){return a(e)}},"-")))}),f=(a(17),function(t){var e=t.cartItems,a=t.clearCart,r=t.deleteFromCart,n=t.addToCart;return c.a.createElement("div",{className:"cart-block__cart cart"},c.a.createElement("div",{className:"cart__header"},0===e.length?c.a.createElement("div",null,"Cart is empty"):c.a.createElement("div",null,"You have ".concat(e.length," items in the cart"))),c.a.createElement("div",{className:"cart__body"},c.a.createElement("ul",{className:"cart__cart-list cart-list"},e.map((function(t){return c.a.createElement(C,{item:t,deleteFromCart:r,addToCart:n,key:t.id})})))),c.a.createElement("div",{className:"cart__total"}," Total: $\n        ".concat(e.reduce((function(t,e){return t+e.total}),0),"\n      ")),c.a.createElement("div",{className:"cart__menu menu"},0===e.length?c.a.createElement(c.a.Fragment,null):c.a.createElement("button",{type:"button",onClick:a,className:"menu__button button"},"Clear Cart")))}),E=(a(18),function(t){var e=t.product,a=t.addToCart;return c.a.createElement("li",{key:e.id},c.a.createElement("div",{className:"list__product product"},c.a.createElement("p",{className:"product__name name"},e.name),c.a.createElement("p",{className:"product__price"},"$ ".concat(+e.price)),c.a.createElement("button",{type:"button",className:"product__button button",onClick:function(){return a(e)}},"Add to Cart")))}),h=(a(19),function(t){var e=t.addToCart,a=t.products;return c.a.createElement("ul",{className:"content__list list"},a.map((function(t){return c.a.createElement(E,{key:t.id,product:t,addToCart:e})})))}),v=(a(20),a(21),[{name:"Banana",price:"10",id:"1"},{name:"Apple",price:"8",id:"2"},{name:"Papaya",price:"10",id:"3"}]),N=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={products:v,cartItems:[],cartVisible:!1},t.addToCart=function(e){var a=t.state.cartItems,r=!1;a.forEach((function(t){t.id===e.id&&((t.count+1)%3===0?(t.count+=1,r=!0,t.total+=+t.price/2):(t.count+=1,r=!0,t.total+=+t.price))})),r||a.push(Object(o.a)(Object(o.a)({},e),{},{count:1,total:+e.price})),t.setState({cartItems:a})},t.deleteFromCart=function(e){var a=t.state.cartItems;a.forEach((function(t,r){t.id===e.id&&((+t.count+1)%3===0?(t.count-=1,t.total-=+t.price/2):(t.count-=1,t.total-=+t.price)),1===t.count&&(t.total=+t.price),0===t.count&&a.splice(r,1)})),t.setState({cartItems:a})},t.clearCart=function(){t.setState({cartItems:[]})},t.getCartVisible=function(){var e=t.state.cartVisible;t.setState({cartVisible:!e})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.products,a=t.cartItems,r=this.addToCart,n=this.getCartVisible,i=this.clearCart;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app__title"},"Products List"),c.a.createElement("div",{className:"app__content content"},c.a.createElement(h,{products:e,addToCart:r}),c.a.createElement("div",{className:"app__cart-block cart-block"},c.a.createElement("button",{type:"button",onClick:n,className:"cart-block__button"}),this.state.cartVisible?c.a.createElement(f,{cartItems:a,clearCart:i,deleteFromCart:this.deleteFromCart,addToCart:this.addToCart}):c.a.createElement(c.a.Fragment,null))))}}]),a}(c.a.Component);i.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.4f1b0672.chunk.js.map