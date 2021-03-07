window.onload = () =>{
    $.ajax({
        url:"data/mobile.json",
        method: "GET",
        dataType: "json"
        succes: function(results){
            listData(results)
        }
        error: function(error){
            console.log(error)
        }
    })

    function listData(AllJsonData){
        let html="";
        for(oneData of AllJsonData){
            html+=`<div class="brand_box">
            <img src="${oneData.image.src}" alt="${oneData.alt}" />
            <h3>$<strong class="red">${oneData.price}</strong></h3>
            <span>${oneData.mark}</span>
            <p>${oneData.model}</p>
            <p id="sale">${oneData.sale}</p>
            
            <i><img src="images/star.png"/></i>
            <i><img src="images/star.png"/></i>
            <i><img src="images/star.png"/></i>
            <i><img src="images/star.png"/></i>
        </div>`
        };
        document.getElementsByClassName('brand_box').innerHTML=html;
    }
}