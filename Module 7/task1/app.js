 const txtarea = document.querySelector("#txtarea");
  
 txtarea.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      addEventListener("beforeunload", (event)=>{
        event.preventDefault();
        event.returnValue = "data not saved";
      });
    }
    
  });