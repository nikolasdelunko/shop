(this.webpackJsonphomework6=this.webpackJsonphomework6||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){e.exports={"items-page":"Products_items-page__TIq0f",Color:"Products_Color__XNSeW",Price:"Products_Price__LjRjM"}},126:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),s=a.n(r),o=(a(122),a(8)),i=a(7),l=(a(123),a(14)),d=(a(124),a(125),a(126),a(1)),j=function(e){var t=e.classN,a=e.text,c=e.disabled,n=e.onClick;return Object(d.jsx)("div",{className:"btn-container",children:Object(d.jsx)("button",{className:t,onClick:n,disabled:c,children:a})})},u=a(5),m=a.n(u),b=function(e){var t=e.color,a=void 0===t?"#ff0000":t,c=e.filled,n=void 0!==c&&c;return Object(d.jsx)("svg",{viewBox:"0 0 16 17",width:"18",height:"19",children:Object(d.jsx)("path",{d:"M14.1891 6.37042L10.2219 5.79385L8.44847 2.19854C8.40003 2.1001 8.32034 2.02042 8.2219 1.97198C7.97503 1.8501 7.67503 1.95167 7.55159 2.19854L5.77815 5.79385L1.81097 6.37042C1.70159 6.38604 1.60159 6.4376 1.52503 6.51573C1.43247 6.61086 1.38146 6.73885 1.38322 6.87157C1.38498 7.0043 1.43936 7.13089 1.5344 7.22354L4.40472 10.022L3.72659 13.9735C3.71069 14.0655 3.72086 14.16 3.75595 14.2464C3.79105 14.3329 3.84966 14.4077 3.92514 14.4626C4.00062 14.5174 4.08995 14.55 4.183 14.5566C4.27605 14.5632 4.3691 14.5437 4.45159 14.5001L8.00003 12.6345L11.5485 14.5001C11.6453 14.5517 11.7578 14.5689 11.8657 14.5501C12.1375 14.5032 12.3203 14.2454 12.2735 13.9735L11.5953 10.022L14.4657 7.22354C14.5438 7.14698 14.5953 7.04698 14.611 6.9376C14.6532 6.66417 14.4625 6.41104 14.1891 6.37042Z",stroke:a,fill:n?a:"none"})})};b.protoTypes={color:m.a.string,filled:m.a.bool};var O=b,f=(a(130),a(10)),h=Object(f.b)(null,(function(e){return{setItemFavorites:function(t){return e({type:"SET_FAVORITES",payload:t})}}}))((function(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],s=e.article,l=e.className,j=e.setItemFavorites,u=Object(f.d)((function(e){return e.ItemFavorites})),m=Object(f.d)((function(e){return e.Products.data}));Object(c.useEffect)((function(){u.data.find((function(e){return e.article===s}))&&r(!0)}),[u.data,s]);var b=function(e){if(!u.data.find((function(t){return t.article===e}))){var t=m.filter((function(t){return t.article===e})),a=Object(i.a)(t,1),c=Object.assign({},a[0]);j([].concat(Object(o.a)(u.data),[c])),localStorage.setItem("favorites",JSON.stringify([].concat(Object(o.a)(u.data),[c])))}},h=function(e){j(Object(o.a)(u.data.filter((function(t){return t.article!==e})))),localStorage.setItem("favorites",JSON.stringify(Object(o.a)(u.data.filter((function(e){return e.article!==s})))))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"Star",onClick:function(){n?(h(s),r(!1)):(b(s),r(!0))},children:Object(d.jsx)(O,{className:l,filled:n,type:"star"})})})})),x=function(e){var t=e.card,a=t.title,n=t.price,r=t.article,s=t.url,o=t.color,l=e.onClick,u=e.deleteProduct,m=e.addFavorites,b=e.deleteFavorites,O=e.showFavIcon,x=e.showDelBtn,p=e.showBuyBtn,v=e.filled,C=Object(f.d)((function(e){return e.ItemCart})),g=Object(c.useState)(null),N=Object(i.a)(g,2),L=N[0],y=N[1];Object(c.useEffect)((function(){(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]).find((function(e){return e.article===r}))&&y("disabled")}),[C,r]);return Object(d.jsx)("div",{className:"list-items",children:Object(d.jsxs)("li",{className:"card-product",children:[Object(d.jsxs)("div",{className:"card-head",children:[Object(d.jsx)("h3",{children:a}),O&&Object(d.jsx)(h,{article:r,title:a,type:"star",addFavorites:m,deleteFavorites:b,className:"Star",filled:v,showFavIcon:!0})]}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:s,width:"200",height:"180",alt:"laptop"})}),Object(d.jsxs)("span",{className:"Color",children:["Color: ",o]}),Object(d.jsxs)("span",{className:"Price",children:["Price: ",n," $"]}),Object(d.jsxs)("span",{children:["SKU: ",r]}),p&&Object(d.jsx)(j,{onClick:function(){l(r)},text:L?"In Cart":"Add to cart",classN:"btn first",disabled:L}),x&&Object(d.jsx)(j,{onClick:function(){u(r)},text:"Remove from cart",classN:"btn first"})]})})},p=(a(132),function(e){var t=e.onClick,a=e.header,c=e.text,n=e.actions;return Object(d.jsx)("div",{className:"modal","data-testid":"modal",onClick:function(e){"modal"!==e.target.getAttribute("class")&&"modalContent__modalClose"!==e.target.getAttribute("class")||t()},children:Object(d.jsxs)("div",{className:"modal__container",children:[Object(d.jsxs)("div",{className:"modal__header",children:[Object(d.jsx)("span",{className:"modal__header-title",children:a}),Object(d.jsx)("span",{className:"modal__header-close","data-testid":"modalClose",onClick:t})]}),Object(d.jsxs)("div",{className:"modal__content",children:[Object(d.jsx)("p",{className:"modal__content-text",children:c}),Object(d.jsx)("div",{className:"modal__control",children:n})]})]})})}),v=(a(133),a(108)),C=a(26),g=a(283),N=Object(f.b)(null,(function(e){return{setModalReg:function(t){return e({type:"SET_MODAL_REG",payload:t})},setItemCart:function(){return e({type:"DEL_CART"})}}}))((function(e){var t=e.setModalReg,a=e.setItemCart,c=C.b().shape({name:C.c().typeError("Write Real Name").required("*is required").min(4,"Write Real Name").max(50,"Too Long!"),secondName:C.c().typeError("Write Real LastName").required("*is required").min(4,"Write Real LastName").max(50,"Too Long!"),age:C.a().typeError("Write Real age").required("*is required").min(18,"You must be 18+"),adress:C.c().required("*is required").min(10,"Write Real Adress").max(50,"Too Long!"),telephone:C.a().typeError("Write Real Phone number").required("*is required"),password:C.c().min(3,"Enter min 3 characters"),email:C.c().email("please enter valid email")}),n=Object(f.c)(),r=Object(f.d)((function(e){return e.ItemCart.data}));return Object(d.jsx)("div",{children:Object(d.jsx)(v.a,{initialValues:{name:"",secondName:"",age:"",adress:"",telephone:"",password:"",email:""},validateOnBlur:!0,onSubmit:function(e){console.log("Registration info:",e,"Order details:",r),localStorage.removeItem("cart"),n({type:"SET_CART",payload:[]}),t(!1),a()},validationSchema:c,children:function(e){var a=e.values,c=e.errors,n=e.touched,r=e.handleChange,s=e.handleBlur,o=e.isValid,i=e.handleSubmit,l=e.dirty;return Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("div",{className:"Reg-iputs",children:[n.name&&c.name&&Object(d.jsx)("p",{className:"error-form",children:c.name}),Object(d.jsx)(g.a,{helperText:"Please enter your name",id:"demo-helper-text-misaligned",label:"Name",selected:!0,className:"TextField",type:"form",name:"name",onChange:r,onBlur:s,value:a.name}),n.secondName&&c.secondName&&Object(d.jsx)("p",{className:"error-form",children:c.secondName}),Object(d.jsx)(g.a,{helperText:"Please enter your Last Name",id:"demo-helper-text-misaligned",label:"Last Name",selected:!0,className:"input Last Name",type:"form",name:"secondName",onChange:r,onBlur:s,value:a.secondName}),n.age&&c.age&&Object(d.jsx)("p",{className:"error-form",children:c.age}),Object(d.jsx)(g.a,{helperText:"Please enter your age",id:"demo-helper-text-misaligned",label:"AGE",selected:!0,className:"input age",type:"number",name:"age",onChange:r,onBlur:s,value:a.age}),n.adress&&c.adress&&Object(d.jsx)("p",{className:"error-form",children:c.adress}),Object(d.jsx)(g.a,{helperText:"Please enter Adress",id:"demo-helper-text-misaligned",label:"Adress",selected:!0,className:"input-adress",name:"adress",onChange:r,onBlur:s,value:a.adress,placeholder:"Ewer green street"}),n.telephone&&c.telephone&&Object(d.jsx)("p",{className:"error-form",children:c.telephone}),Object(d.jsx)(g.a,{helperText:"You phone number",id:"demo-helper-text-misaligned",label:"Phone",type:"form",name:"telephone",onChange:r,onBlur:s,value:a.telephone,placeholder:"+1(000) 123-45-68"}),n.password&&c.password&&Object(d.jsx)("p",{className:"error-form",children:c.password}),Object(d.jsx)(g.a,{helperText:"enter password",id:"demo-helper-text-misaligned",label:"password",className:"input password",type:"form",name:"password",onChange:r,onBlur:s,value:a.password,placeholder:"Password"}),n.email&&c.email&&Object(d.jsx)("p",{className:"error-form",children:c.email}),Object(d.jsx)(g.a,{helperText:"enter email",id:"demo-helper-text-misaligned",label:"enter email",selected:!0,className:"input email",type:"form",name:"email",onChange:r,onBlur:s,value:a.email,placeholder:"exemple@email.com"})]}),Object(d.jsxs)("div",{className:"Control-Form",children:[Object(d.jsx)("button",{className:"modal__control-btn",disabled:!o&&!l,onClick:i,type:"submit",children:"CHECKOUT"}),Object(d.jsx)(j,{text:"Cancel",classN:"modal__control-btn",onClick:function(){t(!1)}})]})]})}})})})),L=Object(f.b)(null,(function(e){return{setModalReg:function(t){return e({type:"SET_MODAL_REG",payload:t})}}}))((function(e){var t=e.deleteProduct,a=e.setModalReg,c=Object(f.d)((function(e){return e.ItemCart.data})),n=Object(f.d)((function(e){return e.modalReg.modalReg})),r=c.map((function(e){return Object(d.jsx)(x,{card:e,deleteProduct:t,productsCart:c,showFavIcon:!1,showDelBtn:!0},e.article)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("ul",{className:"items-page",children:r}),Object(d.jsx)("div",{className:"Cart-btn",children:r.length>=1&&Object(d.jsx)(j,{text:"Buy",classN:"btn first",onClick:function(){a(!0)}})}),n&&Object(d.jsx)("div",{className:"list-items",children:Object(d.jsx)(p,{header:"REGISTER BEFORE BUY",onClick:function(){a(!1)},closeButton:!0,modalClose:function(){a(!1)},actions:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(N,{deleteProduct:t})})})})]})})),y=(a(233),function(e){var t=e.deleteFavorites,a=e.onClick,c=Object(f.d)((function(e){return e.ItemFavorites.data})),n=c.map((function(e){return Object(d.jsx)(x,{card:e,onClick:a,deleteFavorites:t,porductsFavorites:c,productsCart:c,showFavIcon:!0,showBuyBtn:!0},e.article)}));return Object(d.jsx)("ul",{className:"items-page",children:n})}),_=(a(234),function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"lds-spinner",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})})})}),T=function(e){var t=e.onClick,a=e.addFavorites,c=e.deleteFavorites,n=Object(f.d)((function(e){return e.Products.data})).map((function(e){return Object(d.jsx)(x,{card:e,onClick:t,addFavorites:a,deleteFavorites:c,showFavIcon:!0,showBuyBtn:!0},e.article)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("ul",{className:"items-page",children:n}),0===n.length&&Object(d.jsx)(_,{})]})},S=function(e){var t=e.onClick,a=e.deleteProduct,c=e.addFavorites,n=e.deleteFavorites;return Object(d.jsx)("div",{className:"Main",children:Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{exact:!0,from:"/",to:"/shop"}),Object(d.jsx)(l.b,{exact:!0,path:"/shop",render:function(){return Object(d.jsx)(T,{onClick:t,addFavorites:c,deleteFavorites:n})}}),Object(d.jsx)(l.b,{exact:!0,path:"/cart",render:function(){return Object(d.jsx)(L,{deleteProduct:a})}}),Object(d.jsx)(l.b,{exact:!0,path:"/favorites",render:function(){return Object(d.jsx)(y,{onClick:t})}})]})})},I=a(31),E=(a(236),function(){return Object(d.jsx)("svg",{filter:"drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",width:"92.86px",height:"92.86px",viewBox:"0 0 902.86 902.86",children:Object(d.jsx)("g",{children:Object(d.jsxs)("g",{children:[Object(d.jsx)("path",{d:"M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z     M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"}),Object(d.jsx)("path",{d:"M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z     M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742    S619.162,694.432,619.162,716.897z"})]})})})});E.protoTypes={color:m.a.string,filled:m.a.bool};var F=E,R=function(){return Object(d.jsx)("svg",{filter:"drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",width:"92.86px",height:"92.86px",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12.6719 2.75961L14.5163 6.504L13.75 6.50495L13.6493 6.50834L13.5475 6.51518L13.4466 6.52542L13.2898 6.55231C12.2582 6.76694 11.5 7.67945 11.5 8.75495C11.5 9.92024 12.3858 10.8786 13.5209 10.9934L13.6771 11.0038L13.6493 11.0034L13.5475 11.0102L13.4466 11.0205L13.2898 11.0474C12.3125 11.2507 11.5806 12.0804 11.5062 13.0816L11.5 13.25L11.5052 13.404C11.5808 14.5216 12.4724 15.4154 13.589 15.4943L13.75 15.5L14 15.501L13.75 15.5015L13.6493 15.5049L13.5475 15.5117L13.4466 15.5219L13.2898 15.5488C12.3125 15.7522 11.5806 16.5818 11.5062 17.5831L11.5 17.7515L11.5052 17.9055C11.5241 18.1848 11.5939 18.4501 11.7055 18.6923L6.62564 21.3682C6.07517 21.6581 5.43135 21.1904 5.53701 20.5772L6.5684 14.5921L2.21602 10.3563C1.77015 9.92234 2.01606 9.16549 2.63184 9.07651L8.64275 8.20791L11.3263 2.75961C11.6012 2.20147 12.397 2.20147 12.6719 2.75961ZM21.25 17.0015C21.6642 17.0015 22 17.3373 22 17.7515C22 18.1312 21.7178 18.445 21.3518 18.4946L21.25 18.5015H13.75C13.3358 18.5015 13 18.1657 13 17.7515C13 17.3718 13.2822 17.058 13.6482 17.0083L13.75 17.0015H21.25ZM21.25 12.5C21.6642 12.5 22 12.8358 22 13.25C22 13.6297 21.7178 13.9435 21.3518 13.9932L21.25 14H13.75C13.3358 14 13 13.6642 13 13.25C13 12.8703 13.2822 12.5565 13.6482 12.5068L13.75 12.5H21.25ZM21.25 8.00495C21.6642 8.00495 22 8.34074 22 8.75495C22 9.13465 21.7178 9.44845 21.3518 9.49811L21.25 9.50495H13.75C13.3358 9.50495 13 9.16917 13 8.75495C13 8.37526 13.2822 8.06146 13.6482 8.0118L13.75 8.00495H21.25Z"})})},w=function(){var e=Object(f.d)((function(e){return e.ItemFavorites})),t=Object(f.d)((function(e){return e.ItemCart}));return Object(d.jsx)("div",{className:"nav-bar",children:Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"nav-links",children:[Object(d.jsx)("li",{className:"nav-li",children:Object(d.jsx)(I.b,{to:"/shop",children:Object(d.jsx)("img",{className:"Logo",alt:"Logo-img",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPSekT4rGWEIkVzVcmFQ5JSFrPln_au7Fn6Nta5zdfpDcRpWOjTZD-TxdmFmceU7KBAY&usqp=CAU"})})}),Object(d.jsx)("li",{className:"nav-li",children:Object(d.jsxs)(I.b,{to:"/favorites",children:[Object(d.jsx)(R,{}),Object(d.jsx)("p",{className:"Head-li-text",children:e.data.length})]})}),Object(d.jsx)("li",{className:"nav-li",children:Object(d.jsxs)(I.b,{to:"/cart",children:[Object(d.jsx)(F,{}),Object(d.jsx)("p",{className:"Head-li-text",children:t.data.length})]})})]})})})},k=(a(237),function(){return Object(d.jsx)("div",{className:"footer"})}),M=a(105),P=a.n(M),A=Object(f.b)(null,(function(e){return{setItemFavorites:function(t){return e({type:"SET_FAVORITES",payload:t})},setItemCart:function(t){return e({type:"SET_CART",payload:t})},setModal:function(t){return e({type:"SET_MODAL",payload:t})},setModalCart:function(t){return e({type:"SET_MODAL_CART",payload:t})},setCurrentId:function(t){return e({type:"SET_CURRENT_ID",payload:t})},setCurrentName:function(t){return e({type:"SET_CURRENT_NAME",payload:t})}}}))((function(e){var t=e.setItemFavorites,a=e.setItemCart,n=e.setModal,r=e.setModalCart,s=e.setCurrentId,l=e.setCurrentName,u=Object(f.d)((function(e){return e.modal.currentName})),m=Object(f.d)((function(e){return e.modal.currentId})),b=Object(f.d)((function(e){return e.modal.modalCart})),O=Object(f.d)((function(e){return e.ItemCart})),h=Object(f.d)((function(e){return e.ItemFavorites})),x=Object(f.d)((function(e){return e.Products.data})),v=Object(f.d)((function(e){return e.modal.modal})),C=Object(f.c)();Object(c.useEffect)((function(){setTimeout((function(){P()("/Goods.json").then((function(e){C({type:"SET_PRODUCTS",payload:e.data})}))}),1500),localStorage.getItem("cart")||localStorage.setItem("cart","[]"),localStorage.getItem("favorites")||localStorage.setItem("favorites","[]")}),[C]);var g=function(){n(!1)},N=function(){r(!1)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{}),Object(d.jsx)(S,{ItemCart:O.data,onClick:function(e){n(!0);var t=x.filter((function(t){return t.article===e})),a=Object(i.a)(t,1),c=Object.assign({},a[0]);s(c.article),l(c.title)},deleteProduct:function(e){r(!0);var t=x.filter((function(t){return t.article===e})),a=Object(i.a)(t,1),c=Object.assign({},a[0]);s(c.article)},addToFavorites:function(e){if(!h.find((function(t){return t.article===e}))){var a=x.filter((function(t){return t.article===e})),c=Object(i.a)(a,1),n=Object.assign({},c[0]);t([].concat(Object(o.a)(h),[n])),localStorage.setItem("favorites",JSON.stringify([].concat(Object(o.a)(h),[n])))}},deleteFavorites:function(e){t(Object(o.a)(h.filter((function(t){return t.article!==e}))))}}),v&&Object(d.jsx)("div",{className:"list-items",children:Object(d.jsx)(p,{header:"Confirm you choice",modalOne:!0,onClick:g,closeButton:!0,modalClose:g,text:"Do you wont add ".concat(u," to cart?"),actions:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{onClick:function(){return function(e){if(!O.data.find((function(t){return t.article===e}))){var t=x.filter((function(t){return t.article===e})),c=Object(i.a)(t,1),r=Object.assign({},c[0]);a([].concat(Object(o.a)(O.data),[r])),localStorage.setItem("cart",JSON.stringify([].concat(Object(o.a)(O.data),[r]))),n(!1)}}(m)},text:"Add",classN:"modal__control-btn"}),Object(d.jsx)(j,{onClick:function(){return g()},text:"Cancel",classN:"modal__control-btn"})]})})}),b&&Object(d.jsx)("div",{className:"list-items",children:Object(d.jsx)(p,{header:"Confirm you choice",modalOne:!0,onClick:N,closeButton:!0,modalClose:g,text:"Do you wont remove ".concat(u," from  cart?"),actions:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{onClick:function(){return function(e){a(Object(o.a)(O.data.filter((function(t){return t.article!==e})))),localStorage.setItem("cart",JSON.stringify(Object(o.a)(O.data.filter((function(t){return t.article!==e}))))),N()}(m)},text:"Delete",classN:"modal__control-btn"}),Object(d.jsx)(j,{onClick:function(){return N()},text:"Cancel",classN:"modal__control-btn"})]})})}),0!==x.length&&Object(d.jsx)(k,{})]})})})),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,284)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},D=a(34),q=a(106),H=a(107),U=a(13),W={data:[],isLoading:!0,error:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CART":return Object(U.a)(Object(U.a)({},e),{},{data:t.payload,isLoading:!1});case"DEL_CART":return Object(U.a)(Object(U.a)({},e),{},{data:[],isLoading:!1});default:return e}},G={data:[],isLoading:!0,error:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITES":return Object(U.a)(Object(U.a)({},e),{},{data:t.payload,isLoading:!1});default:return e}},z={data:[],isLoading:!0,error:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return Object(U.a)(Object(U.a)({},e),{},{data:t.payload,isLoading:!1});default:return e}},Y={modal:!1,modalCart:!1,currentId:[],currentName:[]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MODAL":return Object(U.a)(Object(U.a)({},e),{},{modal:t.payload});case"SET_MODAL_CART":return Object(U.a)(Object(U.a)({},e),{},{modalCart:t.payload});case"SET_CURRENT_ID":return Object(U.a)(Object(U.a)({},e),{},{currentId:t.payload});case"SET_CURRENT_NAME":return Object(U.a)(Object(U.a)({},e),{},{currentName:t.payload});default:return e}},Q={modalReg:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MODAL_REG":return Object(U.a)(Object(U.a)({},e),{},{modalReg:t.payload});default:return e}},$=Object(D.combineReducers)({ItemCart:J,ItemFavorites:V,Products:Z,modal:K,modalReg:X}),ee=Object(D.createStore)($,Object(q.composeWithDevTools)(Object(D.applyMiddleware)(H.a)));s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f.a,{store:ee,children:Object(d.jsx)(I.a,{children:Object(d.jsx)(A,{})})})}),document.getElementById("root")),B()}},[[257,1,2]]]);
//# sourceMappingURL=main.83852a59.chunk.js.map