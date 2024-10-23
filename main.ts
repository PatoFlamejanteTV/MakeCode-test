function showFace (image: Image) {
    image.showImage(0, 0)
}
showFace(images.createImage(`
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `))
basic.pause(randint(800, 1000))
showFace(images.createImage(`
    . . . . .
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `))
basic.pause(100)
