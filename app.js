new Vue({
    el: "#app",
    data(){

        return{
            playername:"",
            state:1,
            points:0,
            move:window.innerWidth/2,
            enemies: [
            ],
            colors: {
                0:"#FF4C4B",
                1:"#5D44FE",
                2:"#FFC638",
                3:"#61FFBC",
                
            }
        }
    },
    mounted(){
        setInterval(()=>{
            this.addEnemy(Math.floor(Math.random()*4))

        },500)
        setInterval(()=> {
            this.enemies.forEach(value => {
                value.top += 5
                 this.points += 1
            })

          
          }, 50)
        document.addEventListener('keydown', (event) => {
            // get key pressed
            var name = event.key;
            var code = event.code;
            if (code === "ArrowRight"){
                this.moveRight()
                
            } else if (code === "ArrowLeft") {
                this.moveLeft()
            }
            // key func 
          }, false);
    },
    
    methods:{
        login(){
            console.log("hi")
            this.state = 1
        },
        // move btn
        moveLeft(){
            this.move -= 10
        },
        moveRight(){
            this.move += 10
        },
        addEnemy(type){
            this.enemies.push({
                type : type,
                color : this.colors[type],
                top : 0,
                left : Math.random()* window.innerWidth,
            })
        }
    },
})