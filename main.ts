function showFace (image: Image) {
    image.showImage(0, 0)
}
while (true) {
    // omg its soo cursed when you switch from blocks to JS/Python
    showFace(images.createImage(`
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `))
    basic.pause(randint(800, 1000))
    // play an SFX (createSoundExpression) when blinks
    showFace(images.createImage(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `))
    music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.pause(200)
}
