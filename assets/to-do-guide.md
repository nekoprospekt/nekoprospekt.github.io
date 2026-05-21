OVER HERE!!
need to add

### NUMBER 1
> fade in to out white transition

### Number 2 
> Question mark or little astrixs explosion on click

### Number 3
> try to figure out how to make a script that does the Deathmatch kill thing. THIS WAS MY IDEA!!!

### Number 4
> I might have to use java to make spinny girl layout.. have to see, though.

### Numer 5
> Scripts for links and some fun text

---
# NOW add the steps nessacary for each one below, like wiki citations type thing!!! 

### Number 1

### Number 2

 <canvas id="cursor-trail"></canvas>
 top of body

#cursor-trail {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}
 in the css

 the js already here

### Number 3

<div id="kill-feed"></div>
into body

### Number 4

change <body> to <body class="loading">

THIS CSS!!!

NEAR TOP!

body.loading * {
    animation: none !important;
    transition: none !important;
}

#global-loader {
    position: fixed;
    inset: 0;
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0,0,0,0.75);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    transition: opacity 0.6s ease;
}

#global-loader.hidden {
    opacity: 0;
    pointer-events: none;
}

#global-loader img {
    width: 80px;
    height: 80px;
    object-fit: contain;
}

DIRECTLY AFTER BODY SO TOP/FIRST
<div id="global-loader">
    <img src="images/gifs-icos/loading.gif" alt="Loading...">
</div>

AT BOTTOM OF PAGE!! 
<script>
(function(){

    const loader = document.getElementById("global-loader");
    const MIN_VISIBLE_TIME = 2000;
    const startTime = Date.now();

    function finishLoading(){

        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_VISIBLE_TIME - elapsed);

        setTimeout(() => {

            loader.classList.add("hidden");

            setTimeout(() => {
                loader.remove();

                // allow animations
                document.body.classList.remove("loading");

                // Re-trigger header animation this for index
                window.dispatchEvent(new Event("scroll"));

            }, 600);

        }, remaining);
    }

    function waitForImages(){

        const images = document.images;
        let loaded = 0;
        const total = images.length;

        if(total === 0){
            finishLoading();
            return;
        }

        function imageLoaded(){
            loaded++;
            if(loaded >= total){
                finishLoading();
            }
        }

        for(let img of images){
            if(img.complete){
                imageLoaded();
            } else {
                img.addEventListener("load", imageLoaded);
                img.addEventListener("error", imageLoaded);
            }
        }
    }

    if(document.fonts){
        document.fonts.ready.then(waitForImages);
    } else {
        waitForImages();
    }

})();
</script>

### Number 5