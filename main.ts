input.onButtonPressed(Button.A, function () {
    SuperBit.MotorStopAll()
    flag = 0
    pins.digitalWritePin(DigitalPin.P13, 0)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    SuperBit.MotorStopAll()
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 125)
    flag = 1
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
})
let flag = 0
flag = 0
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
SuperBit.MotorStopAll()
basic.forever(function () {
    if (flag == 0 && pins.digitalReadPin(DigitalPin.P13) == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        flag = 1
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
