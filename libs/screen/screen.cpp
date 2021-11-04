#include "pxt.h"
#include "BrainPadDisplay.h"

namespace pxt {
    class WDisplay {
        CODAL_MBED::I2C i2c; // note that this is different pins than io->i2c
    public:
        BrainPadDisplay lcd;
        WDisplay()
            : i2c(*LOOKUP_PIN(ACCELEROMETER_SDA), *LOOKUP_PIN(ACCELEROMETER_SCL))
            , lcd(i2c)
        {}
    };

    SINGLETON(WDisplay);

    //static Image_ lastImg;
	static uint8_t lastImageBuffer[1024];
    //%
    void updateScreen(Image_ img) {
        // if (img && img != lastImg) {
            // decrRC(lastImg);
            // incrRC(img);
            // lastImg = img;
        // }
		
		        
        if (img /*lastImg->isDirty()*/) {
			uint8_t isDirty = false;
			uint8_t* pix = img->pix();

			for (int i = 0; i < 1024; i++) {
				if (lastImageBuffer[i] != pix[i]) {
					lastImageBuffer[i] = pix[i];

					isDirty = true;
				}
			}

			if (isDirty) {
				
				if (img->bpp() != 1 || img->width() != LCD_WIDTH || img->height() != LCD_HEIGHT)
					target_panic(906);
				/*lastImg->clearDirty();*/
				auto display = getWDisplay();
				display->lcd.writeScreenBuffer(lastImageBuffer);
			}
        }
    }

    //%
    void updateStats(String msg) {
        // ignore...
    }
}