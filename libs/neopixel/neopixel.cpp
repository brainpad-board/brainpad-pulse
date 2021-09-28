#include "pxt.h"
#include "BrainPadDisplay.h"

#define Port(port) ((GPIO_TypeDef *) (GPIOA_BASE + (port << 10)))
#define WS2812_TICK_ONE 5
#define WS2812_TICK_ZERO 2
#define WS2812_TIMER_PORT TIM3

#define WS2812_TICK_2_3 3
#define WS2812_TICK_1_3 1

#define WS2812_TICK_4_3 8


// static uint16_t ws2812_tick_one = WS2812_TICK_ONE;
// static uint16_t ws2812_tick_zero = WS2812_TICK_ZERO;

// void WS2812_Reset() {
    // ws2812_tick_one = WS2812_TICK_ONE;
    // ws2812_tick_zero = WS2812_TICK_ZERO;
// }

#pragma GCC push_options
#pragma GCC optimize ("O2")

inline void WS2812_SendOne(GPIO_TypeDef* port, int32_t bit) {
    volatile int delay = WS2812_TICK_4_3;
	
	port->BSRR = bit;

	while (delay>2)
		delay--;

    port->BSRR = (bit << 16);

	
	while (delay>0)
		delay--;

}

inline void WS2812_SendZero(GPIO_TypeDef* port, int bit) {
	volatile int delay = WS2812_TICK_4_3;
	
    port->BSRR = bit;

	
	while (delay>6)
		delay--;

    port->BSRR = (bit << 16);


	while (delay>0)
		delay--;
}


namespace neopixel {


    bool init = false;
    int isPulse;

    _mbed::Pin* pixel[1];

    /**
     * Flush neopixel .
     * @param pin .
     * @param buffer.
     * @param size.
     * @param rgb888.
     */
     //%  
    void Flush(int pin, Buffer buffer, int size, bool rgb888) {
        uint8_t* buffer8 = buffer->data;
		size *= 3;

        pin = 0x04;
		
		GPIO_TypeDef* port = Port(pin >> 4);
        pin = pin & 0x0F;
        uint16_t bit = 1 << (pin);

        uint8_t data;

		if (!init) {
			init = true;
			
			auto en = lookupPin(PA_4);	
			en->setDigitalValue(0);
		}
		
		

        if (rgb888) {
            for (int32_t i = 0; i < size; i++) {
                data = buffer8[i];

                for (int32_t b = 7; b >= 0; b--) {
                    if (data & (1 << b)) {
                        WS2812_SendOne(port, bit);
                    }
                    else {
                        WS2812_SendZero(port, bit);
                    }
                }
            }
        }

        // if (!init) {

            // init = true;

            // if (pxt::IsPulse())
                // return ;

            // auto en = lookupPin(PA_9);	

            // en->setDigitalValue(1);

            // const uint32_t pinArray[] = { BRAINPAD_TICK_LED1 , BRAINPAD_TICK_LED2 , BRAINPAD_TICK_LED3 , BRAINPAD_TICK_LED4 , BRAINPAD_TICK_LED5 ,
                                  // BRAINPAD_TICK_LED6 , BRAINPAD_TICK_LED7 , BRAINPAD_TICK_LED8 , BRAINPAD_TICK_LED9 , BRAINPAD_TICK_LED10,
                                  // BRAINPAD_TICK_LED11, BRAINPAD_TICK_LED12, BRAINPAD_TICK_LED13, BRAINPAD_TICK_LED14, BRAINPAD_TICK_LED15, 
                                  // BRAINPAD_TICK_LED16, BRAINPAD_TICK_LED17, BRAINPAD_TICK_LED18, BRAINPAD_TICK_LED19, BRAINPAD_TICK_LED20,
                                  // BRAINPAD_TICK_LED21, BRAINPAD_TICK_LED22, BRAINPAD_TICK_LED23, BRAINPAD_TICK_LED24, BRAINPAD_TICK_LED25};
            // for (int i = 0; i < 25; i++) {						
                // pixel[i] = new _mbed::Pin(0, pinArray[i], PIN_CAPABILITY_DIGITAL);
            // }
        // }


        // if (pxt::IsPulse())
            // return;

        // if (leds < 0)
            // return;

        // pixel[leds]->setDigitalValue(value);

    }


}

#pragma GCC pop_options