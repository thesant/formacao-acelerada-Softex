
var btnOne = document.getElementById('btndisplayOne');
var btnTwo = document.getElementById('btndisplaytwo');
var containerOne = document.getElementById('conteudoOne');
var containerTwo = document.getElementById('conteudoTwo');

btnOne.addEventListener('click', ()=>{
if(containerOne.style.display === 'block'){
    containerOne.style.display = 'none';
}else{
    containerOne.style.display = 'block';
}

});

btnTwo.addEventListener('click',()=>{
    if(containerTwo.style.display === 'block'){
        containerTwo.style.display = 'none';
    }else{
        containerTwo.style.display = 'block';
    }
});





function areaTinta() {
    let form = document.getElementById('form')
    let value = document.getElementById('number');
    let btn = document.getElementById('btn-value');

    btn.onclick = ()=>{
        form.addEventListener('submit', ()=>{
            
            litrosTinta = parseFloat(value.value / 3)
            latas = parseInt(litrosTinta/18)
            if (litrosTinta % 18 != 0){
                latas+=1
                return alert('Latas de tinta: '+latas + ' Total: R$ '+ latas * 80)
            }
            document.getElementById('total').innerHTML = 'Latas de tinta: '+latas + ' Total: R$ '+ latas * 80
            
        })
    }
    
  };

function convert(){
    let value = document.getElementById('numberTwo')
    let form = document.getElementById('formTwo');
    let btn = document.getElementById('btnTwo');
    let selectedRadio = document.getElementsByName("flexRadioDefault") 

   
    btn.onclick = ()=>{
        
        form.addEventListener('submit', ()=>{    
               
            for (var i = 0; i < selectedRadio.length; i++) {
                if (selectedRadio[i].checked) {
                    x = selectedRadio[i].value;
                    if( x == 1){
                        c=(value.value-32)/1.8
                        alert('Celsius ' + c)
                        document.getElementById('aa').innerHTML = 'Conversão : Celsius para  Fahrenheit'+ 'valor: '+c;
                    }else{
                        
                        f = value.value*1.8+32
                        alert('Celsius ' + f)
                        document.getElementById('aa').innerHTML = 'Conversão : Fahrenheit para  Celsius'+ 'valor: '+f;
                    }
                }
            }
        })

    }
} 

function enumerate(){
    let form = document.getElementById('formTree')
    let value1 = document.getElementById('valueOne')
    let value2 = document.getElementById('valueTwo');
    let value3 = document.getElementById('ValueTree');
    let value4 = document.getElementById('ValueFour');
    let btn = document.getElementById('btnTree');
    
    btn.onclick = ()=>{
        form.addEventListener('submit',()=>{
            v1 = parseInt(value1.value)
            v2 = parseInt(value2.value)
            v3 = parseInt(value3.value)
            v4 = parseInt(value4.value)
            
            if(v1 || v2 || v3 || v4 > 10){
                alert('Só é permitido valores de 0 a 10')
            };
            media = v1 +v2+v3+v4/4
            sortN = [v1,v2,v3,v4]
            
            maior = Math.max(v1,v2,v3,v4);
            menor = Math.min(v1,v2,v3,v4);
            alert('maior numero: ' + maior+ ', menor numero: ' +menor+ ' media: ' + media + 'ordenação: ' + sortN.sort())
        })
    }
}

areaTinta();
convert();
enumerate();