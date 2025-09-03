let calculation =  localStorage.getItem('calc') || ''
        upde()
        
        function update(value) {
            calculation += value
            localStorage.setItem('calc',calculation)
            upde()
            }

        function upde() {
            document.querySelector('.container-result').innerHTML = `${calculation}`
            }

        //opsional
        /*function save(){
            localStorage.setItem('calc',calculation)
        }
        */
