input.onButtonPressed(Button.A, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 100)
    neZha.setMotorSpeed(neZha.MotorList.M2, -100)
})
input.onButtonPressed(Button.AB, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
})
input.onButtonPressed(Button.B, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -100)
    neZha.setMotorSpeed(neZha.MotorList.M2, 100)
})
