// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazków

loadSprite("kartka","kartka.png")

loadSprite("saniey","saniey.png")

add([
    sprite("kartka"),
    pos(0,0)
])

add([
    sprite("saniey"),
    pos(50,200)
])