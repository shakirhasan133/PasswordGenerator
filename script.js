
const btn = document.getElementById('btn');
const pass = document.getElementById('pass');
const copy = document.getElementById('copy');

btn.addEventListener("click", function(){
    const length = 12;
    let password = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';

    for (let i = 0; i < length; i++) {
        
        const index = Math.floor(Math.random()*characters.length)

        console.log(index);

        password += characters[index]; 

        pass.value= password;
        
    }
    
})

copy.addEventListener("click", function(){
    if(pass.value !== ''){
        pass.select();
        document.execCommand("copy");
        alert("Password Copy Successful")
    }
    else[
        alert("Click to Generate Password")
    ]
    
})