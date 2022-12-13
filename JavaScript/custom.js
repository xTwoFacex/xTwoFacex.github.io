window.onload = function(){
    $(document).ready(function(){
    
    let url = document.location.pathname;
    console.log(url);
    if(url == "/" || url == "/index.html"){
        IspisMeny();
        IspisFooterLinks();
        //tim
        let nizSlika = ["img/slika.jpg","img/tim1.jpg","img/tim2.jpg","img/tim3.jpg"];
        let nizAltAtt = ["editor","animator","photoshop","business"];
        let nizNaslova = ["Aleksandar Simić","Boris Jovanović","Stefan Milić","Mateja Radivojević"];
        let nizSadrzaja = ["Hi my name is Aleksandar and i am the video editor of the group. I have been editing for quite some time now and i am really enjoying it.","Hi my name is Boris and i am a animator of the group. I make custom intros and outros and making some animations for the YouTube videos.","Hi my name is Stefan and i am the photographer of the group. At the moment i am creating thumbnails for the YouTube videos.","Hi my name is Mateja and i am the administrator of the group. I am sending all of the information to others in terms of oreders (mail) etc."];
        IspisTima(nizSlika,nizAltAtt,nizNaslova,nizSadrzaja);
        //projekti
        let nizSlika1 = ["img/ytlogo2.jpg","img/ytlogo1.jpg","img/ytlogo3.jpg"];
        let nizAltAtt1 = ["Eu_Drip","Truegawd","Davej974"];
        let naslov = ["Eu Drip","Truegawd","Davej974"];
        let opis = ["Very big YouTuber with almost 100k subscribers. He does gaming content in genereal with some try not laugh challenges here and there.","Very big YouTuber with 188k subscribers.He does mainly reaction videos but he has a second channel where he plays games.","Upcoming star of YouTube with 4.5k subscribers. He does videos like MrBeast for example donation videos to twitch streamers."];
        let broj1 = ["YouTube subscribers: 95k","YouTube subscribers: 188k","YouTube subscribers: 4.5k"];
        let broj2 = ["TikTok followers: 6.4m","2nd channel subscribers: 9.3k","Twitch followers: 4.4k"];
        let link = ["https://www.youtube.com/c/EUDrip","https://www.youtube.com/c/TrueGawd","https://www.youtube.com/c/Davej974"];
        IspisProjekata(nizSlika1,nizAltAtt1,naslov,opis,broj1,broj2,link);
        slajder();
    }
    if(url == "/pricing.html"){
        IspisMeny();
        IspisFooterLinks();
        //forma
        let type =["text","text","email"];
        let id =["ime","prezime","email"];
        let placeholder =["Name","Surname","name@example.com"];
        let sadrzaj =["Name","Surname","Email address"];
        let valueListe = ["1","2","3"]
        let optionliste = ["Bronze","Silver","Gold"];
        let idradio =["flexRadioDefault1","flexRadioDefault2"];
        let valueradio=["P","V"];
        let sadrzajradio=["PayPal","Visa"];
        IspisForme(type,id,placeholder,sadrzaj,valueListe,optionliste,idradio,valueradio,sadrzajradio);
        reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}(\s[A-Z][a-z]{2,14}){0,1}$/;
        rePrezime = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}(\s[A-Z][a-z]{2,14}){0,1}$/;
        reEmail = /^[a-z]{3,15}(\.)?([a-z]{3,15})?\@(gmail\.com)|(yahoo\.com)$/;
        rePayPal = /^[a-z]{3,15}(\.)?([a-z]{3,15})?\@(gmail\.com)|(yahoo\.com)$/;
        reVisaNumber = /^[0-9]{4}(\-([0-9]{4})){3}$/
        //Obrada
        $('#taster').click(function(){
            ProveraForme(reIme,"#ime","You have entered a wrong format for name. This is an correct example: Aleksandar");
            ProveraForme(rePrezime,"#prezime","You have entered a wrong format for surname. This is an correct example: Simić");
            ProveraForme(reEmail,"#email","You have entered a wrong format for email. This is an correct example: aleksandar@gmail.com or aleksandar.simic@yahoo.com");
            ProveraForme(rePayPal,"#pyapal","You must enter a right format for paypal email. A correct example: aleksandar@gmail.com or aleksandar.simic@yahoo.com");
            ProveraForme(reVisaNumber,"#visa","You must enter a right format for your card number. A correct example: 1234-5678-9101-1123");
            //textarea
            provera = $('#TekstualnoPolje').val().length;
            if(provera <10 || provera >50){ 
                $('#TekstualnoPolje').parent().children(':last').removeClass('izbaci');
                $('#TekstualnoPolje').parent().children(':last').html("Note must have minimum 10 and maximum 50 characters");
                greska = true
            }
            else{
               $('#TekstualnoPolje').parent().children(':last').addClass('izbaci');
               $('#TekstualnoPolje').parent().children(':last').html("");
               greska = false
            }
            //radio button
            let tipPlacanja = $('input[name=flexRadioDefault]:checked');
            if($(tipPlacanja).length ==0){
                $('#flexRadioDefault1').parent().parent().children(':last').removeClass('izbaci');
                $('#flexRadioDefault1').parent().parent().children(':last').html("You must choose a payment way");
                greska = true
            }else{
                $('#flexRadioDefault1').parent().parent().children(':last').addClass('izbaci');
                $('#flexRadioDefault1').parent().parent().children(':last').html("");
                greska = false
            }
            //padajuca lista
            let lista = document.querySelector("#floatingSelect");
            let listavalue = lista.options[lista.selectedIndex].value;
            if(listavalue == "0"){
                $('#floatingSelect').parent().children(':last').removeClass('izbaci');
                $('#floatingSelect').parent().children(':last').html("You must choose a package");
                greska = true
            }
            else{
                $('#floatingSelect').parent().children(':last').addClass('izbaci');
                $('#floatingSelect').parent().children(':last').html("");
                greska = false
            }
            //checkbox
            let robotcheck = $('input[name=ch]:checked');
            if($(robotcheck).length == 0){ 
                $('#flexCheckDefault').parent().parent().children(':last').removeClass('izbaci');
                $('#flexCheckDefault').parent().parent().children(':last').html("If you aren't a bot you will check this");
                greska = true
            }
            else{
                $('#flexCheckDefault').parent().parent().children(':last').addClass('izbaci');
                $('#flexCheckDefault').parent().parent().children(':last').html("");
                greska = false
            }
            if(!greska){
                IspisKonacan();
            }
            else{
                ResetKonacan();
            }
        })
        //radio check i skriveni blokovi
        $('#flexRadioDefault1').on('click',function(){
            if("#flexRadioDefault1 input:checked"){
                $('#dodatni1').removeClass('izbaci')
                $('#dodatni1').parent().find('#dodatni2').addClass('izbaci')
                $('#flexRadioDefault1').parent().parent().children(':last').addClass('izbaci');
                $('#flexRadioDefault1').parent().parent().children(':last').html("");
                greska = true
            }
            else{
                $('#dodatni1').parent().children(':next').removeClass('izbaci')
                $('#dodatni1').addClass('izbaci')
                greska = false
            }
        })
        $('#flexRadioDefault2').on('click',function(){
            if("#flexRadioDefault1 input:checked"){
                $('#dodatni2').removeClass('izbaci')
                $('#dodatni2').parent().find('#dodatni1').addClass('izbaci')
                $('#flexRadioDefault1').parent().parent().children(':last').addClass('izbaci');
                $('#flexRadioDefault1').parent().parent().children(':last').html("");
                greska = true
            }
            else{
                $('#dodatni2').parent().children(':next').removeClass('izbaci')
                $('#dodatni2').addClass('izbaci')
                greska = false
            }
        })
    }
    if(url == "/reviews.html"){
        IspisMeny();
        IspisFooterLinks();
        //Jquery
            let brojac = 0,brojac2 = 0,brojac3 = 0,brojac4 = 0,brojac5 = 0,brojac6 = 0,brojac7 = 0,brojac8 = 0;
            $('#promeni').click(function(e){
                e.preventDefault();
                if(brojac % 2 == 0){
                    $("#more").slideToggle('slow').removeClass('izbaci');
                    $(this).html("Show less");
                }else{
                    $("#more").slideToggle('slow').addClass('izbaci');
                    $(this).html("Show more");
                }
                brojac++
            });
            $('#promeni2').click(function(e){
                e.preventDefault();
                if(brojac2 % 2 == 0){
                    $("#more2").slideToggle('slow').removeClass('izbaci');
                    $(this).html("Show less");
                }else{
                    $("#more2").slideToggle('slow').addClass('izbaci');
                    $(this).html("Show more");
                }
                brojac2++
            });
            $('#promeni3').click(function(e){
                e.preventDefault();
                if(brojac3 % 2 == 0){
                    $("#more3").slideToggle('slow').removeClass('izbaci');
                    $(this).html("Show less");
                }else{
                    $("#more3").slideToggle('slow').addClass('izbaci');
                    $(this).html("Show more");
                }
                brojac3++
            });
            $('#promeni4').click(function(e){
                e.preventDefault();
                if(brojac4 % 2 == 0){
                    $("#more4").slideToggle('slow').removeClass('izbaci');
                    $(this).html("Show less");
                }else{
                    $("#more4").slideToggle('slow').addClass('izbaci');
                    $(this).html("Show more");
                }
                brojac4++
            });
            $('#promeni5').click(function(e){
                e.preventDefault();
                if(brojac5 % 2 == 0){
                    $("#more5").slideToggle('slow').removeClass('izbaci');
                    $(this).html("Show less");
                }else{
                    $("#more5").slideToggle('slow').addClass('izbaci');
                    $(this).html("Show more");
                }
                brojac5++
            });
            $('#promeni6').click(function(e){
                e.preventDefault();
                if(brojac6 % 2 == 0){
                    $("#more6").slideToggle('slow').removeClass('izbaci');
                    $(this).html("Show less");
                }else{
                    $("#more6").slideToggle('slow').addClass('izbaci');
                    $(this).html("Show more");
                }
                brojac6++
            });
            $('#promeni7').click(function(e){
                e.preventDefault();
                if(brojac7 % 2 == 0){
                    $("#more7").slideToggle('slow').removeClass('izbaci');
                    $(this).html("Show less");
                }else{
                    $("#more7").slideToggle('slow').addClass('izbaci');
                    $(this).html("Show more");
                }
                brojac7++
            });
            $('#promeni8').click(function(e){
                e.preventDefault();
                if(brojac8 % 2 == 0){
                    $("#more8").slideToggle('slow').removeClass('izbaci');
                    $(this).html("Show less");
                }else{
                    $("#more8").slideToggle('slow').addClass('izbaci');
                    $(this).html("Show more");
                }
                brojac8++
            });
    }
    if(url == "/bronze.html"){
        IspisMeny();
        let nizsrc = ["video/b1.mp4","video/b2.mp4","video/b3.mp4","video/b4.mp4","video/b5.mp4","video/b6.mp4","video/b7.mp4","video/b8.mp4"];
        IspisVideo(nizsrc);
        IspisFooterLinks();
    }
    if(url == "/silver.html"){
        IspisMeny();
        let nizsrc= ["video/2.mp4","video/1.mp4","video/s3.mp4","video/s4.mp4","video/s5.mp4","video/s6.mp4","video/s7.mp4","video/s8.mp4"];
        IspisVideo(nizsrc);
        IspisFooterLinks();
    }
    if(url == "/gold.html"){
        IspisMeny();
        let nizsrc = ["video/g1.mp4","video/g2.mp4","video/g3.mp4","video/g4.mp4","video/g5.mp4","video/g6.mp4","video/g7.mp4","video/g8.mp4"];
        IspisVideo(nizsrc);
        IspisFooterLinks();
    }
    if(url == "/about.html"){
        IspisMeny();
        IspisFooterLinks();
    }
})
}
//ispis menija
function IspisMeny(){
    let navv = document.querySelector("#as-navbar");
    let nizHref = ["index.html","pricing.html","reviews.html","about.html"];
    let nizImena = ["Home","Pricing","Reviews","About me"]
    let ispis = `<ul class="nav justify-content-end pe-3 as-promena1">`
    for(let i=0;i<nizHref.length;i++){
        ispis += `<li class="nav-item fs-5">
                    <a class="nav-link text-muted as-hover" href="${nizHref[i]}">${nizImena[i]}</a>
                     </li>`
    }
    ispis += `</ul>`
    navv.innerHTML = ispis;
}
//ispis footer ikona
function IspisFooterLinks(){
    let nizHref = ["https://www.facebook.com/","https://www.instagram.com/","https://www.linkedin.com/","https://www.youtube.com/","sitemap.xml"];
    let nizdataicon = ["cib:facebook-f","akar-icons:instagram-fill","akar-icons:linkedin-fill","ant-design:youtube-outlined","fa:sitemap"];
    let blok = document.querySelector("#ikone")
    let ispis = `<ul class="nav justify-content-end pe-3 as-promena1">`
    for(let i=0;i<nizHref.length;i++){
        ispis += `<li class="nav-item fs-5">
                    <a class="nav-link active text-muted" href="${nizHref[i]}" target="_blank"><span class="iconify" data-icon="${nizdataicon[i]}"></span></a>
                     </li>`
    }
    ispis += `</ul>`
    blok.innerHTML = ispis;
}
//ispisi videa
function IspisVideo(nizsrc){
    let divskup = document.querySelector("#skup");
    let br = 0;
    let ispis = `<div class="row">`
    let ispis2 = `<div class="row">`
    for(let i=0;i<nizsrc.length;i++){
        ispis+= `<div class="col-xxl-3 col-md-6 col-12 mb-5 ">
                <video src="${nizsrc[i]}" type="video/mp4" controls></video>
                </div>`
        br++
        if(br == 4){
            for(let i=4;i<nizsrc.length;i++){
                ispis2+= `<div class="col-xxl-3 col-md-6 col-12 mb-5 ">
                        <video src="${nizsrc[i]}" type="video/mp4" controls></video>
                        </div>`
            }
            break;
        }
    }
    ispis+="</div>";
    ispis2+="</div>";
    divskup.innerHTML = ispis;
    divskup.innerHTML += ispis2;
}
//ispisivanje tima
function IspisTima(nizSlika,nizAltAtt,nizNaslova,nizSadrzaja){
    let divTima = document.querySelector("#as-tim");
    let ispis = "";
    for(let i=0;i<nizSlika.length;i++){
        ispis +=`<div class="col-xxl-3 col-md-6 col-12 ">
                    <div class="card as-width border border-dark">
                        <img src="${nizSlika[i]}" class="card-img-top" alt="${nizAltAtt}"/>
                        <div class="card-body">
                            <h5 class="card-title">${nizNaslova[i]}</h5>
                            <p class="card-text">${nizSadrzaja[i]}</p>
                        </div>
                    </div>
                </div>`
    }
    divTima.innerHTML = ispis;
}
//ispisivanje projekata
function IspisProjekata(img,alt,naslov,opis,broj1,broj2,link){
    let divProjekta = document.querySelector("#as-projects");
    let ispis = "";
    for(let i=0;i<img.length;i++){
        ispis +=` <div class="col-lg-4 col-12">
                    <div class="card as-project mx-auto text-center border border-dark">
                        <img src="${img[i]}" class="card-img-top" alt="${alt[i]}"/>
                        <div class="card-body">
                            <h5 class="card-title">${naslov[i]}</h5>
                            <p class="card-text">${opis[i]}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${broj1[i]}</li>
                            <li class="list-group-item">${broj2[i]}</li>
                        </ul>
                        <div class="card-body">
                            <a href="${link[i]}" target="_blank" class="btn btn-dark btn-outline-light">YouTube</a>
                        </div>
                    </div>
                </div>`
    }
    divProjekta.innerHTML = ispis;
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
//forma ispis i provera
var greska = false;
function IspisForme(type,id,placeholder,sadrzaj,valueliste,optionliste,idradio,valueradio,sadrzajradio){
    let ispis = `<form action="porudzbina.php" id="forma" method="post">`;
    //ispis tekstualnih polja
    for(let i = 0;i<type.length;i++){
        ispis +=`<div class="form-floating mb-3">
                    <input type="${type[i]}" class="form-control border-dark as-bg-gray" id="${id[i]}" placeholder="${placeholder[i]}" required/>
                    <label for="${id[i]}">${sadrzaj[i]}</label>
                    <p class="alert alert-danger mt-3 izbaci"></p>
                </div>`
    }
    //ispis textarea
        ispis +=`<div class="form-floating mb-3">
                    <textarea class="form-control border-dark as-bg-gray" placeholder="Leave a comment here" id="TekstualnoPolje" rows="16" cols="20" required"></textarea>
                    <label for="TekstualnoPolje">Tell us something about the project</label>
                        <p class="alert alert-danger mt-3 izbaci"></p>
                </div>`
    //ispis liste
        ispis +=`<div class="form-floating mb-3">
                    <select class="form-select border-dark as-bg-gray" id="floatingSelect" aria-label="Floating label select example required">
                        <option selected value = 0>Choose</option>`
        for(let i = 0;i<valueliste.length;i++){
            ispis+=`<option value="${valueliste[i]}">${optionliste[i]}</option>`
        }

        ispis +=`</select>
                    <label for="floatingSelect">Pick which package would you like</label>
                        <p class="alert alert-danger mt-3 izbaci">
                                                                </div>`
    //ispis radio
    ispis+=`<label class="form-check-label fs-5" for="${idradio[2]}">
                Choose a payment way
            </label>
            <div>`
        for(let i=0;i<idradio.length;i++){
            ispis += `<div class="form-check ">
                        <input class="form-check-input border-dark" type="radio" name="flexRadioDefault" id="${idradio[i]}" value="${valueradio[i]}"/>
                        <label class="form-check-label" for="${idradio[i]}">
                            ${sadrzajradio[i]}
                        </label>
                    </div>`
        }
    ispis+=`<p class="alert alert-danger mt-3 izbaci"></div>
            <div class="form-floating mb-3 mt-3 izbaci"id="dodatni1">
                <input type="email" class="form-control border-dark as-bg-gray" id="pyapal" placeholder="PayPal"/>
                <label for="pyapal">Please enter your PayPal email here</label>
                <p class="alert alert-danger mt-3 izbaci">
            </div>
            <div class="form-floating mb-3 mt-3 izbaci" id="dodatni2">
                <input type="text" class="form-control border-dark as-bg-gray" id="visa" placeholder="Visa"/>
                <label for="pyapal">Please enter your card number here</label>
                <p class="alert alert-danger mt-3 izbaci">
            </div>`
    ispis+=` <div>   
                <div class="form-check mb-3 mt-3">
                    <input class="form-check-input border-dark" type="checkbox" name="ch" value="check" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Make sure to check if you are not a robot
                    </label>
                </div>
                <p class="alert alert-danger mt-3 izbaci"></p>
            </div>
            <div class="col-12 mb-5s mt-3">
                <button class="btn btn-light btn-outline-dark" type="button" value="Place the order" id="taster">Place the order</button>
            </div>
            <div id="odlican"></div>
            </div>`
    ispis +=`</form>`
    $('#blokforme').html(ispis);
}
function ProveraForme(reg,idpolja,greska){
    if(!$(idpolja).val().match(reg)){
        $(idpolja).parent().children(':last').removeClass('izbaci');
        $(idpolja).parent().children(':last').html(greska)
        greska = true;
    }
    else{
        $(idpolja).parent().children(':last').addClass('izbaci');
        $(idpolja).parent().children(':last').html('');
        greska = false;
    }
}
function IspisKonacan(){
    let divIspis = document.querySelector("#odlican")
    divIspis.setAttribute("class","alert alert-success mt-4");
    divIspis.innerHTML = 'You have successfully placed the order';
    document.querySelector('#forma').reset();
}
function ResetKonacan(){
    let divIspis = document.querySelector("#odlican")
    divIspis.removeAttribute("class","alert alert-success mt-4");
    divIspis.innerHTML = '';
}