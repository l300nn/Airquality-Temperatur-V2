let Temperatur = 0
let Luftquality = 0

I2C_LCD1602.LcdInit(0)         // 0 = Auto-Erkennung der I²C-Adresse (0x27 oder 0x3F)
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("Bereit", 0, 0)

input.onButtonPressed(Button.A, function () {
    Temperatur = input.temperature()
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Temp: " + Temperatur + "°C", 0, 0)
})

input.onButtonPressed(Button.B, function () {
    Luftquality = pins.analogReadPin(AnalogPin.P1)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Luft: " + Luftquality, 0, 1)
})

basic.forever(function () {
    Temperatur = input.temperature()
    Luftquality = pins.analogReadPin(AnalogPin.P1)
    basic.pause(1000)
})

