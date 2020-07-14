(function(){

    'use-strict'

    // FUNCIONES

        function drawAllCards(){
            var row = document.getElementById('row')
            row.innerHTML = ' '
            for(var i=0;i<pokemons.length;i++){
                if (pokemons[i].id===808){
                    var imgLink = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/808.png"
                } else if(pokemons[i].id===809){
                    var imgLink = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/809.png"
                } else{
                    var imgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemons[i].id+".png"
                }
                var name = pokemons[i].name.english
                var typeString="Type: "
                for(var j=0;j<pokemons[i].type.length;j++){
                    if(j>0){typeString+=(", ")}
                    typeString+=pokemons[i].type[j]
                }
                var hp = ("HP: "+pokemons[i].base.HP)
                // console.log(imgLink)
                // console.log(name)
                // console.log(typeString)
                // console.log(hp)  
                drawCard(imgLink,name,typeString,hp)
            }
        }

        function drawCard(imgLink,name,typeString,hp){
            var card =document.createElement('div')
            card.innerHTML = '<div class="card m-1" style="width: 12rem;border: 2px solid #ed5564;" id="idCard">'    
                            +   '<img src="'+ imgLink + '" class="card-img-top" alt="pokedex.img">'
                            +   '<div class="card-body d-flex flex-row">'
                            +       '<h5 class="card-title mr-1">' + name + '</h5>'
                            +   '</div>'
                            +   '<ul class="list-group list-group-flush">'
                            +       '<li class="list-group-item">' + typeString + '</li>'
                            +       '<li class="list-group-item">' + hp + '</li>'
                            +   '</ul>'
                            +'</div>'
            // console.log(card)
            row.appendChild(card)
        }

        function searchByName(){
            var flagEncontrado = 0
            var row = document.getElementById('row')
            row.innerHTML = ' '
            console.log('ClickName')
            var nameToSearch =  document.getElementById('nameToSearch')
            console.log(nameToSearch.value)
            for(var i=0;i<pokemons.length;i++){
                if (pokemons[i].name.english===nameToSearch.value){
                    flagEncontrado = 1
                    if (pokemons[i].id===808){
                        var imgLink = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/808.png"
                    } else if(pokemons[i].id===809){
                        var imgLink = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/809.png"
                    } else{
                        var imgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemons[i].id+".png"
                    }
                    var name = pokemons[i].name.english
                    var typeString="Type: "
                    for(var j=0;j<pokemons[i].type.length;j++){
                        if(j>0){typeString+=(", ")}
                        typeString+=pokemons[i].type[j]
                    }
                    var hp = ("HP: "+pokemons[i].base.HP)
                    drawCard(imgLink,name,typeString,hp)
                }
            }
            if(flagEncontrado === 0){
                var bodyText = document.getElementById('bodyText')
                bodyText.innerHTML = "Pokemon NO ENCONTRADO por nombre ingresado"
                $('#modalSearch').modal('show')
            }
        }

        function btnSearchByNumber(){
            var flagEncontrado = 0
            var row = document.getElementById('row')
            row.innerHTML = ' '
            console.log('ClickNumber')
            var numberToSearch =  document.getElementById('numberToSearch')
            console.log(numberToSearch.value)
            for(var i=0;i<pokemons.length;i++){
                if (pokemons[i].id===parseInt(numberToSearch.value,10)){
                    flagEncontrado = 1
                    if (pokemons[i].id===808){
                        var imgLink = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/808.png"
                    } else if(pokemons[i].id===809){
                        var imgLink = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/809.png"
                    } else{
                        var imgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemons[i].id+".png"
                    }
                    var name = pokemons[i].name.english
                    var typeString="Type: "
                    for(var j=0;j<pokemons[i].type.length;j++){
                        if(j>0){typeString+=(", ")}
                        typeString+=pokemons[i].type[j]
                    }
                    var hp = ("HP: "+pokemons[i].base.HP)
                    drawCard(imgLink,name,typeString,hp)
                }
            }
            if(flagEncontrado === 0){
                var bodyText = document.getElementById('bodyText')
                bodyText.innerHTML = "Pokemon NO ENCONTRADO por numero ingresado(1-809)"
                $('#modalSearch').modal('show')
            }
        }

    // MAIN
    
        // Draw All Cards
        var home = document.getElementById('home')
        home.addEventListener('click',function(){
            drawAllCards()
        })

        //Draw Card by Name
        var buttonName = document.getElementById('btnSearchByName')
        buttonName.addEventListener('click', function(){
            searchByName()
        })

        //Draw Card by Number
        var buttonNumber = document.getElementById('btnSearchByNumber')
        buttonNumber.addEventListener('click', function(){
            btnSearchByNumber()
        })

})()
