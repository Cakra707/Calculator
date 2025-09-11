
const display = document.getElementById('display')
display.value = localStorage.getItem('calc') || "";      
        


        function update(i) {
            if (display.value === 'Error' || display.value === 'Infinity') {
                display.value =i   

            } else {
                display.value +=i
            }
        
            
            save()
        }

       function clear2() {
        display.value ="";
        save()
       }

        function calculate() {
           
            try { 
               
                let percent =  display.value.replace('%', '/100' )
                .replace('×', '*')
                .replace('÷', '/')
    
                let result = eval(percent)
                
                if (isNaN(result)) {
                    display.value ='Error';
                
                } else {
                    display.value = result;
                }
                save()
                 
            } catch {
                 display.value = 'Error' ;  
            }
        }


        function deletee() {
            if (display.value === 'Error' || display.value === 'Infinity') {
                display.value =''
            }else {
                  display.value = display.value.toString().slice(0, -1)
            }
          
        }

        function save(){
            localStorage.setItem('calc', display.value)
        }  
       