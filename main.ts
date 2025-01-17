radio.setGroup(42)
radio.setTransmitPower(7)
led.enable(false)
OLED12864_I2C.init(60)
voiceRecognition.init()
voiceRecognition.setVolume(7)
voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
voiceRecognition.setWakeTime(60)
serial.writeLine("" + (voiceRecognition.getWakeTime()))
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
serial.writeLine("==================")
OLED12864_I2C.showString(
0,
0,
" HELLO ROBOT !",
1
)
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        0,
        0,
        "ORDRE",
        1
        )
        OLED12864_I2C.showNumber(
        5,
        2,
        voiceRecognition.readCMDID(),
        1
        )
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W5)) {
            radio.sendNumber(62)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W6)) {
            radio.sendNumber(65)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W7)) {
            radio.sendNumber(103)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W8)) {
            radio.sendNumber(104)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W9)) {
            radio.sendNumber(5)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W10)) {
            radio.sendNumber(6)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W11)) {
            radio.sendNumber(7)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W22)) {
            radio.sendNumber(22)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W24)) {
            radio.sendNumber(23)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W141)) {
            radio.sendNumber(141)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W142)) {
            radio.sendNumber(142)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W92)) {
            radio.sendNumber(92)
        }
    }
})
