function fin() {
    let x = true
    let fi = "true"
    addEventListener("click", (e) => {
        x =! x
        if (x == false) {
            fi = "false"
        } else {
            fi = "true"
        }
        console.log(fi)
    } 
    ) 
}