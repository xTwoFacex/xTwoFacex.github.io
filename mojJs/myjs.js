window.onload = function(){
    $(document).ready(function(){
        let url = document.location.pathname;
        if(url == "/" || url == "/index.html"){
            //meny
            ajaxCall("meny.json",function(niz){
                console.log(niz);
                ispisMeny(niz,"meny");
            });
            //tim
            ajaxCall("team.json",function(niz){
                console.log(niz);
                ispisTima(niz,"as-tim");
            });
            //projects
            ajaxCall("projects.json",function(niz){
                console.log(niz);
                ispisProjekata(niz,"as-projects");
            });
            //footer
            ajaxCall("footer.json",function(niz){
                console.log(niz)
                ispisFootera(niz,"ikone")
            })
            //slajder
            slajder();
        }
        if(url == "/pricing.html"){
            //meny
            ajaxCall("meny.json",function(niz){
                console.log(niz);
                ispisMeny(niz,"meny");
            });
            //paketi
            ajaxCall("order.json",function(niz){
                console.log(niz);
                ispisPaketa(niz,"priceshow");
                sacuvajLS("sviPaketi",niz)

                $(".dodaj").click(addToCart);
            })
            //footer
            ajaxCall("footer.json",function(niz){
                console.log(niz)
                ispisFootera(niz,"ikone")
            });
        }
        if(url == "/contact.html"){

            //meny
            ajaxCall("meny.json",function(niz){
                console.log(niz);
                ispisMeny(niz,"meny");
            });
            //form
            ajaxCall("formContact.json",function(niz){
                console.log(niz)
                ispisFormeKontakt(niz,"form");
            })
            //footer
            ajaxCall("footer.json",function(niz){
                console.log(niz)
                ispisFootera(niz,"ikone")
                
            });
            setTimeout(function(){
                let form = document.querySelector(`#forma`)
                console.log(form)
                $(document).on("click","#proveri",function(){
                    var brojGresaka = 0;
                    let reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}){0,1}$/;
                    let rePrezime = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}){0,1}$/;
                    let reEmail = /^[a-z]{3,15}(\.[a-z]{3,15})?\@((gmail\.com)|(yahoo\.com))$/;
                    let ime = $('#ime').val()
                    let prezime = $('#prezime').val()
                    let email = $('#mail').val()
                    let lista = document.querySelector('#floatingSelect')
                    let pitanje = lista.options[lista.selectedIndex].value
                    let opis = $('#TekstualnoPolje').val()
                    brojGresaka += proveraPodataka(ime,"#ime",reIme,"Name is in the wrong format the rigth example: Aleksandar",brojGresaka);
                    brojGresaka += proveraPodataka(prezime,"#prezime",rePrezime,"Surname is in the wrong format the rigth example: Simić",brojGresaka);
                    brojGresaka += proveraPodataka(email,"#mail",reEmail,"Email is in the wrong format the rigth example: aca@gmail.com",brojGresaka);
                    if(opis.length < 5 || opis.length > 100){
                        brojGresaka++;
                        $('#TekstualnoPolje').parent().children(":last").removeClass("izbaci")
                        $('#TekstualnoPolje').parent().children(":last").html("Minimum 5 and maximum 100 characters");
                    }
                    else{
                        $('#TekstualnoPolje').parent().children(":last").addClass("izbaci")
                        $('#TekstualnoPolje').parent().children(":last").html('');
                    }
                    if(pitanje == "0"){
                        brojGresaka++;
                        $('#floatingSelect').parent().children(":last").removeClass("izbaci")
                        $('#floatingSelect').parent().children(":last").html("You must choose a option");
                    }
                    else{
                        $('#floatingSelect').parent().children(":last").addClass("izbaci")
                        $('#floatingSelect').parent().children(":last").html('');
                    }
                    let check = $('input[name=ch]:checked')
                    if(check.length == 0){
                        brojGresaka++;
                        $('#flexCheckDefault').parent().parent().next().removeClass("izbaci")
                        $('#flexCheckDefault').parent().parent().next().html("You must check this");
                    }
                    else{
                        $('#flexCheckDefault').parent().parent().next().addClass("izbaci")
                        $('#flexCheckDefault').parent().parent().next().html('');
                    }
                    console.log(brojGresaka);
                    if(brojGresaka == 0){
                        $('#odlican').children(":last").removeClass("izbaci")
                        document.querySelector('#forma').reset()
                    }
                })
            },100)
        }
        if(url == "/examples.html"){
            //meny
            ajaxCall("meny.json",function(niz){
                console.log(niz);
                ispisMeny(niz,"meny");
            });
            //format
            ajaxCall("format.json",function(niz){
                console.log(niz)
                sacuvajLS("sviFormati",niz)
            })
            //type
            ajaxCall("type.json",function(niz){
                console.log(niz)
                sacuvajLS("sviTipovi",niz)
            })
            //extras
            ajaxCall("extras.json",function(niz){
                console.log(niz)
                sacuvajLS("sviDodaci",niz)
            })
            //sort
            ajaxCall("sort.json",function(niz){
                console.log(niz)
                sacuvajLS("svaSortiranja",niz)
            })
            //Primeri
            ajaxCall("products.json",function(niz){
                console.log(niz)
                sacuvajLS("sviPrimeri",niz)
                ispisPrimera(niz)
            })
            //footer
            ajaxCall("footer.json",function(niz){
                console.log(niz)
                ispisFootera(niz,"ikone")
            });

            ispisFilter();
            let search = document.querySelector('#imeVidea')
            search.addEventListener("keyup",provera)
            $(document).on("change",".chf",provera)
            $(document).on("change",".che",provera)
            $(document).on("change",".cht",provera)
            $(document).on("change","#sort",provera);
            
        }
        if(url == "/cart.html"){
            //meny
            ajaxCall("meny.json",function(niz){
                console.log(niz);
                ispisMeny(niz,"meny");
            });
            //footer
            ajaxCall("footer.json",function(niz){
                console.log(niz)
                ispisFootera(niz,"ikone")
            });

            ispis()
            $(document).on("blur","#broj1",azuriranjeCene)
            $(document).on("blur","#broj2",azuriranjeCene)
            $(document).on("blur","#broj3",azuriranjeCene)
            $(document).on("blur","#broj4",azuriranjeCene)
        }
        if(url == "/about.html"){
            //meny
            ajaxCall("meny.json",function(niz){
                console.log(niz);
                ispisMeny(niz,"meny");
            });
            //footer
            ajaxCall("footer.json",function(niz){
                console.log(niz)
                ispisFootera(niz,"ikone")
            });
            IspisAutora()
        }
    })
}

//funkcije

//ajax funkcija
function ajaxCall(imeFajla,niz){
    $.ajax({
        url : "json/"+imeFajla,
        method: "get",
        dataType : "json",
        success : niz,
        error: function(jqXHR, exception){
            var msg = '';
            if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 400) {
            msg = 'Server understood the request, but request content was invalid.';
            }else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
            } else if (jqXHR.status == 503) {
            msg = 'Service unavailable.';
            } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
            msg = 'Time out error.';
            } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
            } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            let error = `<p class="alert alert-danger">${msg}</p>`
            document.querySelector("#ajax").innerHTML = error;
        }
    })
}

//funkcije za ispis
//index
function ispisMeny(niz,blokid){
    let ispis =""
    for(let obj of niz){
        ispis+=`<li class="nav-item">
            <a class="nav-link as-color" href="${obj.href}">${obj.naziv}</a>
        </li>`
    }
    document.querySelector(`#${blokid}`).innerHTML = ispis
}

function ispisTima(niz,blokid){
    let ispis = "";
    for(let obj of niz){
        ispis+=`<div class="col-xxl-3 col-md-6 col-12 ">
        <div class="card as-width border border-dark">
            <img src="${obj.slika.src}" class="card-img-top" alt="${obj.slika.alt}"/>
            <div class="card-body">
                <h5 class="card-title">${obj.ime} ${obj.prezime}</h5>
                <p class="card-text">${obj.opis}</p>
            </div>
        </div>
    </div>`
    }
    document.querySelector(`#${blokid}`).innerHTML = ispis;
}

function ispisProjekata(niz,blokid){
    let ispis = ""
    for(let obj of niz){
        ispis+= `<div class="col-lg-4 col-12">
        <div class="card as-project mx-auto text-center border border-dark">
            <img src="${obj.slika.src}" class="card-img-top" alt="${obj.slika.alt}"/>
            <div class="card-body">
                <h5 class="card-title">${obj.naziv}</h5>
                <p class="card-text">${obj.opis}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">YouTube subscribers: ${obj.subscribers}</li>
                <li class="list-group-item">TikTok followers: ${obj.followers}</li>
            </ul>
            <div class="card-body">
                <a href="${obj.link}" target="_blank" class="btn btn-dark promena">YouTube</a>
            </div>
        </div>
    </div>`
    }
    document.querySelector(`#${blokid}`).innerHTML = ispis
}

function ispisFootera(niz,blokid){
    let html = `<ul class="nav justify-content-center pe-3 as-promena1">`
    for(let obj of niz){
        html+= `<li class="nav-item fs-5">
        <a class="nav-link active text-muted" href="${obj.href}" target="_blank"><span class="iconify" data-icon="${obj.dataIcon}"></span></a>
         </li>`
    }
    html += `</ul>`
    document.querySelector(`#${blokid}`).innerHTML = html
}
//pricing strana
function ispisPaketa(niz,blokid){
    let ispis = ""
    for(let obj of niz){
        ispis += `<div class="col-xxl-2 col-md-4 col-12 as-transparent2 border border-dark ms-3 rounded mb-5 as-width2">
        <h2 class="as-about-h1 pt-3 pb-2">${obj.nazivPaketa}</h2>
        <p class="as-about-h1 fs-6 as-text-edit"><strong>${obj.opis}</strong></p>
        ${ispisCene(obj.price.staraCena,obj.price.trenutnaCena)}
        ${proveraPaketa(obj.colorGrading,"Color Grading")}
        ${proveraPaketa(obj.soundDesign,"Sound Design")}
        ${proveraPaketa(obj.motionGraphics,"Motion Graphics")}
        ${proveraPaketa(obj.subtitles,"Subtitles")}
        <p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="akar-icons:arrow-right"></span>Raw gameplay: <strong >${obj.rawGameplay} min</strong></p>
        <p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="akar-icons:arrow-right"></span>Running Time: <strong>${obj.runningTime} min</strong></p>
        <p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="akar-icons:arrow-right"></span>Revisions: <strong>${obj.revisions}</strong></p>
        <p class="as-about-h1 pb-3"><span class="iconify me-1 text-success fs-5" data-icon="akar-icons:arrow-right"></span>Delivery Time: <strong>${obj.deliveryTime} days</strong></p>
        <div class="card-body text-center mb-2">
            <a href="examples.html"class="btn btn-dark promena">See the video examples here!</a>
        </div>
        <div class="card-body text-center mb-2">
            <input type="button" data-id=${obj.id} value="Add to cart" class="btn btn-dark promena dodaj">
        </div>
        <p class="alert alert-success izbaci" id="dodat${obj.id}">An item has been added to your cart</p>
        <p class="alert alert-info izbaci" id="vecpostoji${obj.id}">Item has already been added to the cart (you can change the quantity over to the cart page)</p>
    </div>`
    document.querySelector(`#${blokid}`).innerHTML = ispis;
    }
}

function proveraPaketa(obj,nazivStavke){
    let html = ""
    if(obj){
        html += `<p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="eva:checkmark-fill"></span>${nazivStavke}</p>`
    }
    else{
        html += `<p class="as-about-h1"><span class="iconify me-1 text-secondary fs-5" data-icon="eva:checkmark-fill"></span>${nazivStavke}</p>`
    }
    return html
}

function ispisCene(objStaraCena,objTrenutnaCena){
    let html = ""
    if(objStaraCena){
        html += `<h3 class="as-about-h1 pt-4"><del>${objStaraCena}$</del></h3>`
    }
    html += `<h2 class="as-about-h1 pt-4 pb-4">${objTrenutnaCena}$</h2>`
    return html;
}
//contact strana
function ispisFormeKontakt(niz,blokid){

    let ispis = `<form action="kontakt.php" id="forma" method="post">`
    for(let obj of niz){
        if(obj.type == "text" || obj.type == "mail"){
            ispis += `<div class="form-floating mb-3">
            <input type="${obj.type}" name="${obj.idname}" class="form-control border-dark as-bg-gray" id="${obj.idname}" placeholder="${obj.placeholder}" required/>
            <label for="${obj.idname}">${obj.labelsadrzaj}</label>
            <p class="text-danger mt-3 izbaci"></p>
        </div>`
        }
        else if(obj.type == "drop down list"){
            ispis += `<div class="form-floating mb-3">
            <select class="form-select border-dark as-bg-gray" id="floatingSelect" aria-label="Floating label select example required">
                <option selected value = "0">Choose</option>`
            for(let i = 0;i<obj.option.length;i++){
                ispis+=`<option value="${obj.option[i].value}">${obj.option[i].sadrzaj}</option>`
            }
            ispis +=`</select>
                    <label for="floatingSelect">Choose a option</label>
                <p class="text-danger mt-3 izbaci">
            </div>`
        }
    }
    ispis+=`<div class="form-floating mb-3">
            <textarea class="form-control border-dark as-bg-gray" placeholder="Leave a comment here" id="TekstualnoPolje" rows="16" cols="20" required"></textarea>
            <label for="TekstualnoPolje">Tell us something about the project</label>
            <p class="text-danger mt-3 izbaci"></p>
            </div>
            <div class="form-check mb-3 mt-3">
                <div>
                    <input class="form-check-input border-dark" type="checkbox" name="ch" class="ch" value="check" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    By checking this we will contact you to your <strong>email address</strong>.
                    </label>
                </div>
            </div>
            <p class="text-danger mt-3 izbaci"></p>
            <div class="col-12 mb-5s mt-3">
                <button class="btn btn-light btn-outline-dark" type="button" value="Send request" id="proveri">Send request</button>
            </div>
            <div id="odlican"><p class="alert alert-success izbaci mt-5">Your request has been sent</p></div>
            </div>
    </form>`
    $(`#${blokid}`).html(ispis);
    // document.querySelector(`#${blokid}`).innerHTML = ispis
}
//example strana
function ispisFilter(){
    let html = `<h1 class="mb-3 mt-3">Search</h1>
    <div class="col-12">
    <input type="text" name="imeVidea" class="form-control border-dark as-bg-gray" id="imeVidea" placeholder="Enter video name" required/>
    </div>
    <h1 class="mb-4 mt-3">Filters</h1>
    <h3 class="mt-2">Types</h3>`;
    let type = dohvatiIzLS("sviTipovi");
    let extras = dohvatiIzLS("sviDodaci");
    let formati = dohvatiIzLS("sviFormati");
    let sort = dohvatiIzLS("svaSortiranja");
    for(let obj of type){
        html += `<div class="col-12">
            <div>
                <input class="form-check-input border-dark mt-2 mb-2 cht" type="checkbox" name="chtype" value="${obj.id}" id="${obj.naziv}">
                <label class="form-check-label" for="${obj.naziv}">
                ${obj.naziv + brojFiltera(obj.id,"type")}
                </label>
            </div>
        </div>`
    }
    html+=`<h2 class="mt-2">Format</h2>`;
    for(let obj of formati){
        html += `<div class="col-12">
            <div>
                <input class="form-check-input border-dark mt-1 mb-2 chf" type="checkbox" name="chformat"  value="${obj.id}" id="${obj.naziv}">
                <label class="form-check-label" for="${obj.naziv}">
                ${obj.naziv + brojFiltera(obj.id,"format")}
                </label>
            </div>
        </div>`
    }
    html+=`<h2 class="mt-2">Extras</h2>`
    for(let obj of extras){
        html += `<div class="col-12">
            <div>
                <input class="form-check-input border-dark mt-1 mb-2 che" type="checkbox" name="chextra" value="${obj.id}" id="${obj.naziv}">
                <label class="form-check-label" for="${obj.naziv}">
                ${obj.naziv + brojFiltera(obj.id,"extras")}
                </label>
            </div>
        </div>`
    }
    html+=`<h1 class="mt-2">Sort</h1>
    <div class="form-floating mb-3">
    <select class="form-select border-dark as-bg-gray" id="sort" aria-label="Floating label select example required">
    <option value="0">Choose</option>`
    for(let obj of sort){
        html+=`<option value="${obj.vrednost}">${obj.naziv}</option>`
    }
    html+=`</select><label for="sort">Pick a option to sort</label></div>`
    document.querySelector('#filteri').innerHTML = html;
}

function ispisPrimera(niz){
    let html = ""
    if(niz.length == 0){
        html+=`<div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-9 mt-5">
                    <p class="alert alert-dark as-about-h1">At the moment there are no videos</p>
                </div>
            </div>
        </div>`
        document.querySelector('#videos').innerHTML = html;
        return;
    }
    html=`<h1 class="as-about-h1 mb-3 mt-3">Videos</h1>
    <div class="container-fluid ps-0 pe-0">
        <div class="row justify-content-center">`
    for(let obj of niz){
        html+=`<div class="col-xl-3 col-lg-5 col-sm-9 col-11 as-transparent2 justify-content-center border border-dark mb-3 vid pb-2">
            <div class="col-12">
                <video src="assets/videos/${obj.video.src}" type="video/mp4" controls class="col-12"></video>
            </div>
            <div class="opisi">
                <h3 class="pt-2 pb-2">${obj.naziv}</h3>
                <p class="pt-1 pb-1">Format: <strong>${ispisFormata(obj.format)}</strong></p>
                <p class="pt-1 pb-1">Video type:<strong> ${ispisTipa(obj.type,"type")}</strong></p>
                <p class="pt-1 pb-1">Extras: <strong>${ispisTipa(obj.extras,"extras")}</strong></p>
                <p class="pt-1 pb-1">Price: <strong>$${obj.cena.trenutna}</strong></p>
                <p class="pt-1 pb-1">Rating: <span class="iconify as-font" data-icon="emojione:star"></span><strong>${obj.rating}</strong></p>
            </div>
        </div>`
    }
    html+=`</div></div>`
    document.querySelector('#videos').innerHTML = html;
}

function ispisFormata(obj){
    let formati = dohvatiIzLS("sviFormati");
    let html=""
    for(let fomrat of formati){
        if(fomrat.id == obj){
            html+=`${fomrat.naziv}`
        }
    }
    return html;
}

function ispisTipa(obj,tip){
    let types = dohvatiIzLS("sviTipovi");
    let extras = dohvatiIzLS("sviDodaci");
    console.log()
    html=""
    if(tip == "type"){
        for(let i =0;i<obj.length; i++){
            for(let type of types){
                if(obj[i] == type.id){
                    if(i == obj.length - 1){
                        html+=`${type.naziv}`
                    }
                    else{
                        html+=`${type.naziv}, `
                    }
                }
            }
        }
    }
    if(tip == "extras"){
        for(let i =0;i<obj.length; i++){
            for(let extra of extras){
                if(obj[i] == extra.id){
                    if(i == obj.length - 1){
                        html+=`${extra.naziv}`
                    }
                    else{
                        html+=`${extra.naziv}, `
                    }
                }
            }
        }
    }
    return html;
}
//autor
function IspisAutora(){
    let html = `<div class="row" id="centar">
    <div class="col-12 as-about-h2 pb-3 ps-2 pe-2">
        <h2>About me</h2>
    </div>
</div>
<div class="row">
    <div class="col ">
        <div class="as-width" id="aboutdiv">
            <img src="assets/img/slika.jpg" class="card-img-top border border-dark" id="about" alt="editor">
                <h5 class="card-title">Aleksandar Simić</h5>
                <p class="card-text">31/21</p>
        </div>
    </div>
</div>`
document.querySelector('#autordiv').innerHTML = html
}

//funkcije za local storage
function sacuvajLS(naziv,vrednost){
    localStorage.setItem(naziv,JSON.stringify(vrednost))
}

function dohvatiIzLS(naziv){
    return JSON.parse(localStorage.getItem(naziv))
}
//provera regularnih izraza
function proveraPodataka(polje,idPolja,regularni,greska,brojGresaka){
    if(!polje.match(regularni)){
        brojGresaka++;
        $(idPolja).parent().children(":last").removeClass("izbaci")
        $(idPolja).parent().children(":last").html(greska);
    }
    else{
        $(idPolja).parent().children(":last").addClass("izbaci")
        $(idPolja).parent().children(":last").html('');
    }
    return brojGresaka
}

//funkcije za sort i filter
function provera(){
    let primeri = dohvatiIzLS("sviPrimeri");
    primeri = check(primeri, "format")
    primeri = check(primeri, "type")
    primeri = check(primeri, "extras")
    primeri = searchFilter(primeri)
    primeri = sort(primeri)
    ispisPrimera(primeri)
}

function searchFilter(primeri){
    let val = document.querySelector('#imeVidea').value.toLowerCase()
    return primeri.filter(x=>x.naziv.toLowerCase().includes(val));
}

function check(primeri, tip){
    izabrani = [];
    if(tip == "format"){
        $(".chf:checked").each(function(el){
            izabrani.push(parseInt($(this).val()))
        })
        if(izabrani.length != 0){
            return primeri.filter(x=>izabrani.includes(x.format))
        }
        return primeri
    }
    else if(tip == "type"){
        $(".cht:checked").each(function(el){
            izabrani.push(parseInt($(this).val()))
        })
        if(izabrani.length != 0){
            return primeri.filter(x=>x.type.some(y=>izabrani.includes(y)))
        }
        return primeri
    }
    else{
        $(".che:checked").each(function(el){
            izabrani.push(parseInt($(this).val()))
        })
        if(izabrani.length !=0){
            return primeri.filter(x=>x.extras.some(y=>izabrani.includes(y)))
        }
        return primeri
    }
}

function sort(primeri){
    let novi = []
    let val = $("#sort").val()
    if(val == "0"){
        novi = primeri
    }
    else{
        novi = primeri.sort(function(a,b){
            if(val == "name-asc"){
                if(a.naziv < b.naziv){
                    return -1
                }
                else if(a.naziv > b.naziv){
                    return 1
                }
                else{
                    return 0
                }
            }
            if(val == "name-desc"){
                if(a.naziv < b.naziv){
                    return 1
                }
                else if(a.naziv > b.naziv){
                    return -1
                }
                else{
                    return 0
                }
            }
            if(val == "rating-asc"){
                return a.rating - b.rating
            }
            if(val == "rating-desc"){
                return b.rating - a.rating
            }
            if(val== "price-asc"){
                return a.cena.trenutna - b.cena.trenutna
            }
            if(val=="price-desc"){
                return b.cena.trenutna - a.cena.trenutna
            }
        })
    }
    return novi
}

//funkcija za broj Filtera
function brojFiltera(id,tip){
    let primeri = dohvatiIzLS("sviPrimeri")
    let html=""
    let br = 0
    if(tip == "type"){
        for(let primer of primeri){
            for(let i=0;i<primer.type.length;i++){
                if(id == primer.type[i]){
                br++
                }
            }
        }
        html+=` (${br})`
    }
    else if(tip == "format"){
        for(let primer of primeri){
            if(id == primer.format){
                br++
            }
        }
        html+=` (${br})`
    }
    else{
        for(let primer of primeri){
            for(let i=0;i<primer.extras.length;i++){
                if(id == primer.extras[i]){
                    br++
                }
            }
        }
        html+=` (${br})`
    }
    return html
}

//korpa
function ispis(){
    let proizvodi = dohvatiIzLS("korpa");
    if(proizvodi == null){
        prikaziPraznuKorpu()
        $('#suma').html('')
    }
    else{
        prikaziKorpu()
    }
}

function prikaziPraznuKorpu(){
    $('#sadrzaj').html(`<p class="alert alert-dark as-about-h1 col-sm-7 col-11 mt-3 prazno">There are no items in the cart</p>`)
}

function addToCart(){
    let idProizvoda =$(this).data("id")
    console.log(idProizvoda)

    let proizvodiKorpa = dohvatiIzLS("korpa");
    if(proizvodiKorpa == null){
        dodajPrviPut(idProizvoda)
        document.querySelector('#dodat'+idProizvoda).classList.remove('izbaci')
    }
    else{
        if(daLiVecPostoji(proizvodiKorpa,idProizvoda)){
            document.querySelector('#vecpostoji'+idProizvoda).classList.remove('izbaci')
            document.querySelector('#dodat'+idProizvoda).classList.add('izbaci')
        }
        else{
            dodajUKorpu(idProizvoda)
            document.querySelector('#vecpostoji'+idProizvoda).classList.add('izbaci')
            document.querySelector('#dodat'+idProizvoda).classList.remove('izbaci')
        }
    }
}

function dodajPrviPut(idProizvoda){
    let proizvod = [
        {
            id: idProizvoda,
            qty : 1
        }
    ]
    sacuvajLS("korpa",proizvod)
}

function daLiVecPostoji(proizvodiKorpa,idProizvoda){
    console.log(proizvodiKorpa)
    console.log(idProizvoda)
    let x =  proizvodiKorpa.filter(x=>x.id == idProizvoda)
    if(x.length == 0){
        return false
    }
    else{
        return true
    }
}

function dodajUKorpu(idProizvoda){
    let proizvodLS = dohvatiIzLS("korpa")
    proizvodLS.push({
        id : idProizvoda,
        qty : 1
    })
    sacuvajLS("korpa",proizvodLS)
}

function prikaziKorpu(){
    let sviProizvodi = dohvatiIzLS("sviPaketi")
    let proizvodiIzKorpe = dohvatiIzLS("korpa")

    let proizvodi = sviProizvodi.filter(x=>{
        for(let proizvod of proizvodiIzKorpe){
            if(x.id == proizvod.id){
                x.qty = proizvod.qty
                return true
            }
        }
        return false
    })
    console.log(proizvodi)
    prikazProizvoda(proizvodi)
}

function prikazProizvoda(proizvodi){
    let br=0;
    let html = ""
    let sum = 0;
    for(let obj of proizvodi){
        br++;
        html += teloProizvoda(obj,br)
        sum += (obj.price.trenutnaCena*obj.qty)
    }
    document.querySelector('#sadrzaj').innerHTML = html
    document.querySelector('#suma').innerHTML = `<h4 class="as-about-h1"><strong>The total price is $${sum}</strong></h4>
    <div id="kraj" class="mb-5">
        <button class="btn btn-dark promena brisiSve" id="bris">Remove All</button>
        <button class="btn btn-dark promena poruci">Order</button>
        <p class="text-danger izbaci mb-2 mt-2"></p>
    </div>
    <h4 class="text-danger izbaci mb-2 mt-2 as-about-h1"></h4>`
    
    $(".brisi").click(izbaciIzKorpe)
    $(".brisiSve").click(izbrisiSveIzKorpe)
    $(".poruci").click(poruci)
}

function teloProizvoda(obj,br){
    return `
        <div class="col-xxl-2 col-md-4 col-12 as-transparent2 border border-dark ms-3 rounded mb-5 as-width2">
            <p class="as-about-h1">Number <strong>${br}</strong></p>
            <div class="pozicija">${slika(obj.nazivPaketa)}</div>
            <hr/>
            <p class="as-about-h1 mt-4 mb-4">Package name: <strong>${obj.nazivPaketa}</strong></p>
            <p class="as-about-h1 mt-4 mb-4">Price:<strong> $${obj.price.trenutnaCena}</strong></p>
            <hr/>
            <p class="as-about-h1 mt-4">Quantity (Min:1 Max:5)</p>
            <div class="pozicija">
                <input type="text" name="broj" id="broj${obj.id}" data-idb="${obj.id}" class="form-control as-about-h1" value="${obj.qty}"/>
                <p class="text-danger izbaci mb-2 mt-2 as-about-h1"></p>
            </div>
            <hr/>
            <p class="as-about-h1 mt-4 mb-4">Total price for the package:<strong> $${obj.price.trenutnaCena * obj.qty}</strong></p>
            <hr/>
            <p class="as-about-h1 mt-4">Select a video</p>
            <div>
                <input type="file" name="file" id="file${obj.id}" class="form-control"/>
            </div>
            <div class="pozicija mt-4 mb-4">
                <button class="btn btn-dark promena brisi mt-3 mb-3" data-id="${obj.id}">Remove</button>
            </div>
        </div>`
}

function slika(nazivPaketa){
    if(nazivPaketa == "Bronze"){
        return `<img src="assets/img/bronze.png" alt="Bronze" class="img-fluid slike">`
    }
    else if(nazivPaketa == "Silver"){
        return `<img src="assets/img/silver.png" alt="Silver" class="img-fluid slike">`
    }
    else if(nazivPaketa == "Gold"){
        return `<img src="assets/img/gold.png" alt="Gold" class="img-fluid slike">`
    }
    else{
        return `<img src="assets/img/shorts.png" alt="Shorts" class="img-fluid slike">`
    }
}

function izbaciIzKorpe(){
    let idP = $(this).data("id");
    console.log(idP)
    let proizvodiIzKorpe = dohvatiIzLS("korpa")
    let filtriran = proizvodiIzKorpe.filter(x=>x.id != idP)
    console.log(filtriran)
    if(filtriran == 0){
        localStorage.removeItem("korpa")
    }
    else{
        sacuvajLS("korpa",filtriran)
    }
    ispis()
}

function azuriranjeCene(){
    let id = $(this).data("idb")
    console.log(id)
    let vred = $(this).val()
    var provera = isNaN(vred)
    if(provera){
        $(this).parent().children(":last").removeClass('izbaci')
        $(this).parent().children(":last").html('You must enter a number')
        return;
    }
    if(vred < 1){
        $(this).parent().children(":last").removeClass('izbaci')
        $(this).parent().children(":last").html('Quantity must be minimum 1')
        return;
    }
    else if(vred > 5){
        $(this).parent().children(":last").removeClass('izbaci')
        $(this).parent().children(":last").html('Maximum quantity is 5')
        return;
    }
    else{
        $(this).parent().children(":last").addClass('izbaci')
        $(this).parent().children(":last").html('') 
    }
    let vredd = parseInt(vred)
    let proizvodi = dohvatiIzLS("korpa")
    for(let p of proizvodi){
        if(p.id == id){
            p.qty = vredd
            sacuvajLS("korpa",proizvodi)
        }
    }
    ispis()
}

function izbrisiSveIzKorpe(){
    localStorage.removeItem("korpa");
    ispis()
}

function poruci(){
    let proizvodi = dohvatiIzLS("korpa")
    let reFajl = /.mp4|.mkv|.m4v$/
    let brojGresaka = 0
    for(let obj of proizvodi){
        let vredQty = document.querySelector(`#broj${obj.id}`).value
        console.log(vredQty)
        let vredFile = document.querySelector(`#file${obj.id}`).value
        console.log(vredFile)
        if(!vredFile.match(reFajl)){
            brojGresaka++
        }
        if(vredQty < 1 || vredQty >5){
            brojGresaka++
        }
        if(isNaN(vredQty)){
            brojGresaka++
        }
    }
    if(brojGresaka > 0){
        $(this).parent().next().removeClass('izbaci')
        $(this).parent().next().html('Quantity must be a number and can be minimum 1 and maximum 5 and video file must end with these formats: .mp4 or .mkv or .m4v')
        return;
    }
    else{
        izbrisiSveIzKorpe()
        document.querySelector("#poruceno").innerHTML = `<p class="alert alert-success mb-3 col-sm-9 col-11 prazno as-about-h1">You have successfully placed the order</p>`
    }
}
//slajder
var tajmer;
function slajder(){
    let trenutniSlajd = $('#slajder .aktivan')
    let sledeciSlajd = (trenutniSlajd.next().length) ? trenutniSlajd.next() : trenutniSlajd.parent().children(':first');
    trenutniSlajd.removeClass('aktivan')
    sledeciSlajd.addClass("aktivan")
    tajmer = setTimeout(slajder, 4000);
}