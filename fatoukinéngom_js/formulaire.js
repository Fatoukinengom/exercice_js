
            
    var num1, num2, somme, multiplication, division, modulo

    num1= document.getElementById("num1")
    num2= document.getElementById("num2")
    const btn=document.getElementById("ngom")
    btn.addEventListener("click", ()=>{ 
    x= num1.value
    y= num2.value 
    x= parseFloat(x) 
    y=parseFloat(y) 
    somme = x + y
    multiplication = x * y  
    division= x / y
    modulo = x % y
    
    document.getElementById("sum").innerHTML="L'addition est" + somme
    document.getElementById("multi").innerHTML="la multiplication est" + multiplication
    document.getElementById("div").innerHTML="la division est" + division
    document.getElementById("mod").innerHTML="le modulo est" + modulo

    })
    
