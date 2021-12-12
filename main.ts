let startTime = 0
let Time = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    startTime = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    Time = input.runningTime() - startTime
    basic.showNumber(Math.idiv(Time, 1000))
})
