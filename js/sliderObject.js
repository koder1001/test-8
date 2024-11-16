if(window.matchMedia("(max-width:700px)").matches){
    let pxWh = 360;
    let pxWhDL = 2800;
    if(window.matchMedia("(max-width:400px)").matches){
        pxWhDL = pxWh-800;
        pxWh=pxWh-50;
        console.log(pxWh)};
        let offset=0;
        const sliderLine=document.querySelector('.object__slider');
        document.querySelector('.object__buttonNext').addEventListener('click',function(

        ){offset=offset+pxWh;if(offset > pxWhDL){pxWhDL=0}
        
sliderLine.style.left=-offset+'px'})
document.querySelector('.object__buttonPrev').addEventListener('click',function(){offset=offset-pxWh;if(offset<720){offset=0}
sliderLine.style.left=-offset+'px'})}