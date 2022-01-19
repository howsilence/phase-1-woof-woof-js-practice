    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(pups => {
        function renderPups(pups){
            pups.forEach(pup => {
                let pupsList = document.querySelector("#dog-bar");
                let pupSpan = document.createElement("span")
                pupSpan.innerText = pup.name
                pupSpan.addEventListener("click",()=>{
                    let pupInfo = document.querySelector("#dog-info")
                    pupInfo.innerHTML = `
                        <img src=${pup.image}>
                        <h2>${pup.name}</h2>
                        <button>${pup.isGoodDog}</button>                    
                    `
                } )
                pupsList.append(pupSpan)
            });
            
        }
        renderPups(pups);  
    })
