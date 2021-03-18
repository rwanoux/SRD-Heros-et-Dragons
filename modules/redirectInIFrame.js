export  function redirectInIFrame(html){

    //recupérer les liens du drs.
      
    
        let links=html.find("a");
        console.log(links); 
        for (let a of links){
            if (a.href.indexOf('https://5e-drs.fr')!== -1){
                let frame=new FrameViewer(a.href, {
                    title: a.href,
                    resizable:true,
                    width:500,
                    height:600,
                    top:0,
                    left:0
                  })
                  a.removeAttribute("href")
                  a.style.borderBottom="1px solid red"
                  a.addEventListener("click",function (){
                  frame.render(true)
                })
            }
        }
   
}