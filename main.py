def showFace(image: Image):
    image.show_image(0, 0)

showFace(images.create_image("""
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    """))

basic.pause(randint(800, 1000))

showFace(images.create_image("""
    . . . . .
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    """))
basic.pause(100)