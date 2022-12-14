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
        let link = ["https://www.youtube.com/c/EUDrip","https://www.youtube.com/c/TrueGawd","https://www.youtube.com/"];
        IspisProjekata(nizSlika1,nizAltAtt1,naslov,opis,broj1,broj2,link);
        slajder();
    }
    if(url == "/pricing.html"){
        IspisMeny();
        IspisPaketa();
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
        reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}){0,1}$/;
        rePrezime = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}){0,1}$/;
        reEmail = /^[a-z]{3,15}(\.)?([a-z]{3,15})?\@((gmail\.com)|(yahoo\.com))$/;
        rePayPal = /^[a-z]{3,15}(\.)?([a-z]{3,15})?\@((gmail\.com)|(yahoo\.com))$/;
        reVisaNumber = /^[0-9]{4}(\-([0-9]{4})){3}$/
        //Obrada
            $('#taster').click(function(){
            ProveraForme(reIme,"#ime","You have entered a wrong format for name. This is an correct example: Aleksandar",greska1);
            ProveraForme(rePrezime,"#prezime","You have entered a wrong format for surname. This is an correct example: Simić",greska2);
            ProveraForme(reEmail,"#email","You have entered a wrong format for email. This is an correct example: aleksandar@gmail.com or aleksandar.simic@yahoo.com",greska3);
            ProveraForme(rePayPal,"#pyapal","You must enter a right format for paypal email. A correct example: aleksandar@gmail.com or aleksandar.simic@yahoo.com",greska4);
            ProveraForme(reVisaNumber,"#visa","You must enter a right format for your card number. A correct example: 1234-5678-9101-1123",greska5);
            //textarea
            provera = $('#TekstualnoPolje').val().length;
            if(provera <10 || provera >100){ 
                $('#TekstualnoPolje').parent().children(':last').removeClass('izbaci');
                $('#TekstualnoPolje').parent().children(':last').html("Note must have minimum 10 and maximum 100 characters");
                greska6 = true
            }
            else{
               $('#TekstualnoPolje').parent().children(':last').addClass('izbaci');
               $('#TekstualnoPolje').parent().children(':last').html("");
               greska6 = false
            }
            //radio button
            let tipPlacanja = $('input[name=flexRadioDefault]:checked');
            if($(tipPlacanja).length ==0){
                $('#flexRadioDefault1').parent().parent().children(':last').removeClass('izbaci');
                $('#flexRadioDefault1').parent().parent().children(':last').html("You must choose a payment way");
                greska7 = true
            }else{
                $('#flexRadioDefault1').parent().parent().children(':last').addClass('izbaci');
                $('#flexRadioDefault1').parent().parent().children(':last').html("");
                greska7 = false
            }
            //padajuca lista
            let lista = document.querySelector("#floatingSelect");
            let listavalue = lista.options[lista.selectedIndex].value;
            console.log(listavalue);
            let listatext = lista.options[lista.selectedIndex].text;
            console.log(listatext);
            if(listavalue == "0"){
                $('#floatingSelect').parent().children(':last').removeClass('izbaci');
                $('#floatingSelect').parent().children(':last').html("You must choose a package");
                greska8 = true
            }
            else{
                $('#floatingSelect').parent().children(':last').addClass('izbaci');
                $('#floatingSelect').parent().children(':last').html("");
                greska8 = false
            }
            //checkbox
            let robotcheck = $('input[name=ch]:checked');
            if($(robotcheck).length == 0){ 
                $('#flexCheckDefault').parent().parent().children(':last').removeClass('izbaci');
                $('#flexCheckDefault').parent().parent().children(':last').html("You must agree to the following.");
                greska9 = true
            }
            else{
                $('#flexCheckDefault').parent().parent().children(':last').addClass('izbaci');
                $('#flexCheckDefault').parent().parent().children(':last').html("");
                greska9= false
            }
            //potvrda
            if(!greska1 && !greska2 && !greska3 && !greska6 && !greska7 && !greska8 && !greska9 && (!greska4 || !greska5)){
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
            }
            else{
                $('#dodatni1').parent().children(':next').removeClass('izbaci')
                $('#dodatni1').addClass('izbaci')
            }
        })
        $('#flexRadioDefault2').on('click',function(){
            if("#flexRadioDefault1 input:checked"){
                $('#dodatni2').removeClass('izbaci')
                $('#dodatni2').parent().find('#dodatni1').addClass('izbaci')
                $('#flexRadioDefault1').parent().parent().children(':last').addClass('izbaci');
                $('#flexRadioDefault1').parent().parent().children(':last').html("");
            }
            else{
                $('#dodatni2').parent().children(':next').removeClass('izbaci')
                $('#dodatni2').addClass('izbaci')
            }
        })
    }
    if(url == "/reviews.html"){
        IspisMeny();
        IspisFaq();
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
        IspisAutora();
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
//ispis FaQ sekcije
function IspisFaq(){
    let divIspis = document.querySelector("#grupaRew");
    let br = 0;
    let ispis = `<div class="row">`
    let ispis2 = `<div class="row">`
    let img =["img/ytlogo3.jpg","img/ytlogo4.jpg",
    "img/ytlogo6.jpg","img/ytlogo7.jpg","img/ytlogo2.jpg","img/ytlogo8.jpg"
    ,"img/ytlogo9.jpg","img/ytlogo10.jpg"];
    let alt = ["dave","hothousemoss","TrueGawd","four0eight",
    "Eu_Drip","hillbilly","ijolp","jrocks26"];
    let h = ["Davej974","Hothousemoss","TrueGawd","Four0eight",
    "Eu Drip","Hillbilly","Ijolp","Jrocks26"];
    let p1 = ["Another great edit, always follows instructions, pleasure to work with.",
    "This is my second time working with this seller. He's always super nice, gets it done on time and the editing is always amazing. Glad i chose to work with him again.",
    "Great work! Very understanding. I love working with him!",
    "Great working with the seller! He was quick to respond, open to feedback, and then adjusted based on my feedback. Exactly what I was hoping for!",
    "I absolutely loved how he edited my video. I'm looking forward to working with him more.",
    "Another great vid done by him requested a little longer of a video and he hooked it up. Thanks mate!",
    "The video is awesome! I will for sure be sending you more business!",
    "Quality was amazing. Highlighted all the best parts and made it look very professionally made. Would and will easily buy again. Thank you!"]
    let p2 = [`A youtuber with 4.5k subscribers he is also streaming on twitch and on there he has 4.4k followers. 
    He creates content like MrBeast and he is making twitch donations type of videos. He is very skilled at what he does and i think he will have
    a bright future`,
    `He has 118 subscribers and he is making minecraft survival and funny moments type of videos.He is still 
    strating out so he is just learning things like how to record a video with obs.`,
    `He is a very big youtuber with 188k subscribers. He does mainly reaction videos but he has a second channel 
    where he plays games. And he also streams gaming or reactions over on his twitch channel. He has an amazing audience and i am happy to be a bart of it.</p>`,
    `He has 5k subscribers and he is making modded minecraft gameplays.He is not as consistant as a 
    youtuber should be but i think he is on the right path.`,
    `Very funny youtuber who came from TikTok with 6m followers and now on YouTube has 95k subscribers. In Terms of content he does horror types of games and the videos are so enjoyable to watch.`,
    `He started posting videos on YouTube 3 month ago and at the moment he has 77 subscribers. 
    He does mainly Call of Duty: Warzone videos. He is a regular buyer and it means a lot to see him come back every time.
    He can do a lot of cool stuff on youtube just give him some time.`,
    `Ijolp has 209 subscribers and he mainly does Sea of Thieves videos. 
    He also streams on twitch and has his very own podcast. And i really like his podcasts so i would recommend for you to go and check it out when
    you have the time.`,
    `They have 80 subscribers at the moment and they are making Guild Wars 2 videos. 
    They also have their twitch channel were they stream those games. They are focusing more on the streaming at the moment which is fantastic since they
    very popular on the twitch platform`]
    let idtekst = ["more","more2","more3","more4","more5","more6","more7","more8"]
    let ida = ["promeni","promeni2","promeni3","promeni4","promeni5","promeni6","promeni7","promeni8"]
    for(let i=0;i<img.length;i++){
        ispis += `<div class="col-xxl-3 col-md-6 col-12 ">
                    <div class="card as-width border border-dark">
                        <img src="${img[i]}"  class="card-img-top" alt="${alt[i]}"/>
                        <div class="card-body">
                            <h5 class="card-title">${h[i]} <span class="iconify as-font" data-icon="emojione:star"></span>5</h5>
                            <p class="card-text">${p1[i]}</p>
                            <p class="card-text izbaci" id="${idtekst[i]}">${p2[i]}</p>
                        </div>
                        <div>
                            <a href="reviews.html" class="btn btn-dark btn-outline-light as-button mx-auto mb-4 mt-3" id="${ida[i]}">Show more</a>
                        </div>
                    </div>
                </div>`
        br++;
        if(br == 4){
            for(let i=4;i<img.length;i++){
                ispis2+=`<div class="col-xxl-3 col-md-6 col-12 ">
                            <div class="card as-width border border-dark">
                                <img src="${img[i]}"  class="card-img-top" alt="${alt[i]}"/>
                                <div class="card-body">
                                    <h5 class="card-title">${h[i]} <span class="iconify as-font" data-icon="emojione:star"></span>5</h5>
                                    <p class="card-text">${p1[i]}</p>
                                    <p class="card-text izbaci" id="${idtekst[i]}">${p2[i]}</p>
                                </div>
                                <div>
                                    <a href="reviews.html" class="btn btn-dark btn-outline-light as-button mx-auto mb-4 mt-3" id="${ida[i]}">Show more</a>
                                </div>
                            </div>
                        </div>`
            }
            break;
        }
    }
    ispis+="</div>";
    ispis2+="</div>";
    divIspis.innerHTML = ispis;
    divIspis.innerHTML += ispis2;
}
//ispis Paketa
function IspisPaketa(){
    let divPaketi = document.querySelector("#priceshow");
    let ispis =""
    let title =["Bronze","Silver","Gold"];
    let opis1 =["Basic editing with cuts, zooms, music etc.","Bronze package + memes and sound effects.","Silver package + subtitles and animations."];
    let cena =["$10","$15","$35"];
    let opis2 =["Basic but effective videos","Funny type of video + thumbnail","Professional videos"];
    let motiontick =["text-secondary","text-success","text-success"];
    let subtitlestick =["text-secondary","text-secondary","text-success"];
    let minutes1 =["up to 60 minutes","up to 105 minutes","up to 180 minutes"];
    let minutes2 =["10 minutes","20 minutes","45 minutes"];
    let revisions =["2","3","5"];
    let delivery =["2 days","3 days","4 days"];
    let links =["bronze.html","silver.html","gold.html"];
    for(let i=0;i<title.length;i++){
        ispis+=`<div class="col-lg-3 col-12 as-transparent2 border border-dark ms-3 rounded mb-5 as-width2">
                    <h2 class="as-about-h1 pt-3 pb-2">${title[i]}</h2>
                    <p class="as-about-h1 fs-6 as-text-edit"><strong>${opis1[i]}</strong></p>
                    <h2 class="as-about-h1 pt-4 pb-4">${cena[i]}</h2>
                    <p class="as-about-h1 fs-6 pb-4 as-text-edit"><strong>${opis2[i]}</strong></p>
                    <p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="eva:checkmark-fill"></span>Color Grading</p>
                    <p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="eva:checkmark-fill"></span>Sound Design</p>
                    <p class="as-about-h1"><span class="iconify me-1 ${motiontick[i]} fs-5" data-icon="eva:checkmark-fill"></span>Motion Graphics</p>
                    <p class="as-about-h1"><span class="iconify me-1 ${subtitlestick[i]} fs-5" data-icon="eva:checkmark-fill"></span>Subtitles</p>
                    <p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="akar-icons:arrow-right"></span>Raw gameplay: <strong >${minutes1[i]}</strong></p>
                    <p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="akar-icons:arrow-right"></span>Running Time: <strong>${minutes2[i]}</strong></p>
                    <p class="as-about-h1"><span class="iconify me-1 text-success fs-5" data-icon="akar-icons:arrow-right"></span>Revisions: <strong>${revisions[i]}</strong></p>
                    <p class="as-about-h1 pb-3"><span class="iconify me-1 text-success fs-5" data-icon="akar-icons:arrow-right"></span>Delivery Time: <strong>${delivery[i]}</strong></p>
                    <div class="card-body text-center mb-2">
                    <a href="${links[i]}"class="btn btn-dark btn-outline-light">See the video examples here!</a>
                    </div>
                </div>`
    }
    divPaketi.innerHTML = ispis;
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
var greska1=false,greska2=false,greska3=false,greska4=false,greska5=false,greska6=false,greska7=false,greska8=false,greska9=false
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
                    By checking this you agree to the following <a href="https://www.google.com/" target="_blank">Terms of service</a>
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
function ProveraForme(reg,idpolja,greska,provera){
    if(!$(idpolja).val().match(reg)){
        $(idpolja).parent().children(':last').removeClass('izbaci');
        $(idpolja).parent().children(':last').html(greska)
        provera = true
    }
    else{
        $(idpolja).parent().children(':last').addClass('izbaci');
        $(idpolja).parent().children(':last').html('');
        provera = false
    }
}
function IspisKonacan(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let divIspis = document.querySelector("#odlican")
    divIspis.setAttribute("class","alert alert-success mt-4");
    divIspis.innerHTML = `You have successfully placed the order. Order date placed: ${day}/${month}/${year}`;
    document.querySelector('#forma').reset();
}
function ResetKonacan(){
    let divIspis = document.querySelector("#odlican")
    divIspis.removeAttribute("class","alert alert-success mt-4");
    divIspis.innerHTML = '';
}
function IspisAutora(){
    let divautor = document.querySelector("#autordiv");
    let isipsautor = `<div class="row" id="centar">
    <div class="col-12 as-about-h2 pb-3 ps-2 pe-2">
        <h2>About me</h2>
    </div>
</div>
<div class="row">
    <div class="col ">
        <div class="as-width" id="aboutdiv">
            <img src="img/slika.jpg" class="card-img-top border border-dark" id="about" alt="editor,animator,photoshop,business">
                <h5 class="card-title">Aleksandar Simić</h5>
                <p class="card-text">31/21</p>
        </div>
    </div>
</div>`
    divautor.innerHTML = isipsautor;
}