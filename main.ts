let temperature = 0
let Ambient_light = 0
basic.forever(function () {
    temperature = input.temperature()
    Ambient_light = input.lightLevel()
    if (temperature > 2) {
        servos.P0.setAngle(90)
    } else {
        servos.P0.setAngle(0)
    }
    if (Ambient_light < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Ambeint light")
        basic.showNumber(Ambient_light)
        basic.pause(1000)
        basic.showString("temperature")
        basic.showNumber(temperature)
    }
})
