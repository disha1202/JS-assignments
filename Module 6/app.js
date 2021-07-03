var table = document.querySelector("table");
        var column2 = document.querySelectorAll(".col2");
        table.addEventListener("click", event => {
            for(let i=0;i<column2.length;i++){
                column2[i].style.backgroundColor = "red";
            }
           
        })