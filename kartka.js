// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazków

loadSprite("kartka","kartka.png")

loadSprite("saniey","saniey.png")

loadSound("muzyka","cicha_noc.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const saniey = add([
    sprite("saniey"),
    pos(50,200)
])



onUpdate(()=>{
    if(saniey.pos.x<500)
    saniey.pos.x += 1
})

onKeyRelease('space', ()=> play('muzyka'))