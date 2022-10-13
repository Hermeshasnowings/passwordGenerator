function generate() {
    //password variable is blank
    let newarray = [];
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@£$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    //let password =""

    for (i = 0; i < passwordLength; i++) {
        let pass = Array.from(chars)
        let randomElement = Array.from(pass[Math.floor(Math.random() * pass.length)]);
        newarray.push(randomElement);

    }
    let password = (newarray.join(''));
    console.log(password);
    document.getElementById("demo").innerHTML = password;

}

generate();