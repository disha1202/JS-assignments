
fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=> {
                for(let i=0;i<5;i++)
                {
                    document.querySelectorAll('.product')[i].innerHTML =
                     ` <img class="product-img" src=${json[i].image} />
                     <p>${json[i].title}</p>
                     <p>Price : ${json[i].price}</p>
                     <p>Product Details :${json[i].description}</p>`;
                }
                console.log(json);
                
            })

            // `<img src = ${json[i].image}`