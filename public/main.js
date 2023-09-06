let balls = []
setInterval(function() {
    let ball = `
    <div class="ball" style="top:${Math.random() * 100}vh; left:${Math.random() * 100}vw; background:rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})"></div>
    `
    let balldiv = document.createElement('div')
    balldiv.innerHTML = ball
    document.body.appendChild(balldiv)
    balls.push({
        element: balldiv.children[0],
        vx: Math.random() * 10 - 5,
        vy: Math.random() * 10 - 5,
        x: Math.random() * window.innerWidth,
        y: 0
    })
},100)

setInterval(function() {
    //physics
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i].element
        let ballX = balls[i].x
        let ballY = balls[i].y
        let ballW = 50
        let ballH = 50
        let ballVX = balls[i].vx
        let ballVY = balls[i].vy

        if (ballX + ballW >= window.innerWidth || ballX <= -1) {
            let oldVX = balls[i].vx
            balls[i].vx = -ballVX*0.5
            balls[i].x += oldVX*-1
        }
        if (ballY + ballH >= window.innerHeight || ballY <= -1) {
            let oldVY = balls[i].vy
            balls[i].vy = -ballVY*0.5
            balls[i].y += oldVY*-1
        }

        for (let j = 0; j < balls.length; j++) {
            if (i == j) continue
            if (balls[i].x + ballW > balls[j].x && balls[i].x < balls[j].x + ballW && balls[i].y + ballH > balls[j].y && balls[i].y < balls[j].y + ballH) {
                let oldVX = balls[i].vx
                let oldVY = balls[i].vy
                balls[i].vx = balls[j].vx*0.5
                balls[i].vy = balls[j].vy*0.5
                balls[j].vx = oldVX*0.5
                balls[j].vy = oldVY*0.5
                balls[i].x += oldVX*-1
                balls[i].y += oldVY*-1
                balls[j].x += oldVX
                balls[j].y += oldVY
            }
        }

            

        balls[i].x += balls[i].vx
        balls[i].y += balls[i].vy
        ball.style.top = balls[i].y + 'px'
        ball.style.left = balls[i].x + 'px'

        balls[i].vy += 0.1

        
    }
}, 16)