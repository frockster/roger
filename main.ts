function DrawSnake () {
    for (let index = 0; index <= Snake.length - 0; index++) {
        x = Snake[index]
        index += 1
        y = Snake[index]
        led.plot(x, y)
    }
}
let y = 0
let x = 0
let Snake: number[] = []
Snake = [
2,
2,
2,
3
]
