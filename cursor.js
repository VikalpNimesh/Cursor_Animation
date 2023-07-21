const cursor = document.querySelector(".cursor");
var timeout;
 
document.addEventListener("mousemove",(e)=>{
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';
    console.log(y);
    console.log(x);
    function mouseStopped (){
        cursor.style.display="none";
    }
    clearTimeout(timeout);
    timeout= setTimeout(mouseStopped,5000)
    
});



    

