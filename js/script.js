var Mobiles = (function(){
    var _mobiles = []
    const init = () => fetchData()
    const fetchData = () => fetch('https://jsonblob.com/api/ea2e2c05-f8cd-11ea-a7b3-6d4c810cc2bb').then(response => response.json()).then(data => {_mobiles = data; render()})
    const render = () => {
        var str = `${_mobiles.map((item,index) => 
        `<div class="card mb-12 p-3">
          <div class="row no-gutters">
            <div class="col-md-2">
              <div class="text-center">
                <img src="${item.img}" class="card-img  card-image mx-auto" alt="${item.name}">
              </div>
              <div class="compare">          
                <input type="checkbox" name="check">
                <label for="check">Add to Compare</label>
              </div>
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p><span class="bg-green">4.5<ion-icon name="star"></ion-icon></span>&nbsp;65 Ratings & 5 Reviews</p>
                <p>${item.description}</p>
              </div>
            </div>
            <div class="col-md-2 pt-3">
              <div class="card-text">
                <span class="price">&#8377;${item.price}</span>&nbsp;<img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" height="22px" width="80px">
                <p>No Cost EMI</p>
              </div>
            </div>
            <div class="col-md-1 deleteButton">
                <a href="#" onclick="Mobiles.remove(${index})"><ion-icon name="close-circle"></ion-icon></a>
            </div>
          </div>
        </div>
        `).join('')}`
        document.querySelector(".fetchedData").innerHTML = str;
        // console.log(_mobiles)
    }
    const remove = (mobile_no) => {_mobiles = _mobiles.filter((item,index) => index!=mobile_no); render();}

    const addMobile = () => {
        var mobile_img = document.querySelector('#image').value
        var name = document.querySelector('#name').value
        var description = document.querySelector('#description').value
        var price = document.querySelector('#price').value
        console.table(mobile_img,name,description,price)
        if(mobile_img==""||name==""||description==""||price==""){
            alert("Please fill up all the fields before submitting");
            return;
        }
        _mobiles = [..._mobiles, {img:mobile_img, name, description, price}]
        console.log(_mobiles)
        render();
    }

    return{
        init,
        fetchData,
        render,
        remove,
        addMobile
    }
})()
Mobiles.init()