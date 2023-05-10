input.onButtonPressed(Button.A, function () {
    countdown = 5
    basic.pause(4000)
    Green()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(14000)
    for (let index = 0; index < 5; index++) {
        countdown += -1
        basic.pause(1000)
        basic.showNumber(countdown)
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    Yellow()
    basic.pause(4000)
    Red()
})
function Yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.B, function () {
    countdown = 6
    basic.pause(5000)
    Green()
    basic.showIcon(IconNames.StickFigure)
    for (let index = 0; index < 3; index++) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    }
    for (let index = 0; index < 5; index++) {
        music.playMelody("C C C C C - - - ", 120)
        countdown += -1
        basic.showNumber(countdown)
    }
    music.playMelody("D D D D D D D D ", 120)
    Yellow()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(4000)
    Red()
})
function Green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
let range: neopixel.Strip = null
let countdown = 0
let strip: neopixel.Strip = null
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(20)
Red()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 1)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (distance < 10) {
        basic.pause(5000)
        Green()
        basic.pause(14000)
        Yellow()
        basic.pause(4000)
        Red()
        control.reset()
    }
})
