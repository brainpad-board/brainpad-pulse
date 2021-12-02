// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
game.setWaitAnyButtonReleased(controller.pauseUntilAnyButtonIsReleased)
game.gameOverSound = () => music.playSound(music.sounds(Sounds.Wawawawaa));
