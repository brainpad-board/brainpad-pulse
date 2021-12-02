/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>
/// <reference path="../built/common-sim.d.ts"/>
var pxsim;
(function (pxsim) {
    let PinName;
    (function (PinName) {
        /* GHI Changed
        export let LIGHT = -1; // adc
        export let TEMPERATURE = -1; // adc
    
        export let SCL = -1; // pwm
        export let SDA = -1; // pwm
        export let RX = -1; // pwm
        export let TX = -1; // pwm

        export let AN = -1; // analog
        export let RST = -1; // analog
        export let CS = -1; // analog
        export let PWM = -1; // pwm
        export let INT = -1; // pwm

    
        export let SCK = -1; //
        export let MISO = -1; //
        export let MOSI = -1; //
        
        // accelerometer and screen are on the same I2C as external
        export let ACCELEROMETER_SDA = -1;
        export let ACCELEROMETER_SCL = -1;
        export let ACCELEROMETER_INT = -1;

        export let SERVO_1 = -1;
        export let SERVO_2 = -1;
        */
        PinName.P0 = -1;
        PinName.P1 = -1;
        PinName.P2 = -1;
        PinName.P3 = -1;
        PinName.P4 = -1;
        PinName.P5 = -1;
        PinName.P6 = -1;
        PinName.P7 = -1;
        PinName.P8 = -1;
        PinName.P9 = -1;
        PinName.P10 = -1;
        PinName.P11 = -1;
        PinName.P12 = -1;
        PinName.P13 = -1;
        PinName.P14 = -1;
        PinName.P15 = -1;
        PinName.P16 = -1;
        PinName.SCL = -1;
        PinName.SDA = -1;
        function initPins() {
            let v = PinName;
            for (let k of Object.keys(v)) {
                let key = pxsim.getConfigKey("PIN_" + k);
                if (key != null) {
                    v[k] = pxsim.getConfig(key);
                }
            }
        }
        PinName.initPins = initPins;
    })(PinName = pxsim.PinName || (pxsim.PinName = {}));
    const paletteSrc = [
        "#000000",
        "#FFFFFF",
        "#FF2121",
        "#FF93C4",
        "#FF8135",
        "#FFF609",
        "#249CA3",
        "#78DC52",
        "#003FAD",
        "#87F2FF",
        "#8E2EC4",
        "#A4839F",
        "#5c406c",
        "#E5CDC4",
        "#4B7BEC",
        "#000000"
    ];
    class DalBoard extends pxsim.CoreBoard {
        constructor() {
            super();
            this.invertAccelerometerYAxis = true;
            PinName.initPins();
            this._neopixelState = {};
            this.bus.setNotify(1023 /* DEVICE_ID_NOTIFY */, 1022 /* DEVICE_ID_NOTIFY_ONE */);
            // IDs do matter!
            this.buttonState = new pxsim.CommonButtonState([
                new pxsim.CommonButton(45),
                new pxsim.CommonButton(23), // B
            ]);
            //this.builtinParts["lightbulb"] = this.lightBulbState = new LightBulbState();
            this.builtinParts["accelerometer"] = this.accelState = new pxsim.AccelState();
            this.builtinParts["switch"] = this.slideSwitchState = new pxsim.SlideSwitchState();
            this.builtinParts["audio"] = this.audioState = new pxsim.AudioState();
            this.builtinParts["lightsensor"] = this.lightSensorState = new pxsim.AnalogSensorState(17 /* DEVICE_ID_LIGHT_SENSOR */, 0, 255);
            this.builtinParts["thermometer"] = this.thermometerState = new pxsim.AnalogSensorState(8 /* DEVICE_ID_THERMOMETER */, -5, 50);
            this.builtinParts["screen"] = this.screenState = new pxsim.ScreenState(paletteSrc, 128, 64);
            this.builtinParts["accelerometer"] = this.accelerometerState = new pxsim.AccelerometerState(pxsim.runtime);
            this.builtinParts["edgeconnector"] = this.edgeConnectorState = new pxsim.EdgeConnectorState({
                pins: [
                    /* GHI changed
                        pxsim.PinName.SERVO_1,
                        pxsim.PinName.SERVO_2,
                        pxsim.PinName.SCL,
                        pxsim.PinName.SDA,
                        pxsim.PinName.RX,
                        pxsim.PinName.TX,
                        pxsim.PinName.AN,
                        pxsim.PinName.RST,
                        pxsim.PinName.CS,
                        pxsim.PinName.PWM,
                        pxsim.PinName.INT,
                    */
                    pxsim.PinName.P0,
                    pxsim.PinName.P1,
                    pxsim.PinName.P2,
                    pxsim.PinName.P3,
                    pxsim.PinName.P4,
                    pxsim.PinName.P5,
                    pxsim.PinName.P6,
                    pxsim.PinName.P7,
                    pxsim.PinName.P8,
                    pxsim.PinName.P9,
                    pxsim.PinName.P10,
                    pxsim.PinName.P11,
                    pxsim.PinName.P12,
                    pxsim.PinName.P13,
                    pxsim.PinName.P14,
                    pxsim.PinName.P15,
                    pxsim.PinName.P16,
                    pxsim.PinName.SCL,
                    pxsim.PinName.SDA,
                ]
            });
            this.builtinParts["microservo"] = this.edgeConnectorState;
            this.builtinVisuals["microservo"] = () => new pxsim.visuals.MicroServoView();
            this.builtinPartVisuals["microservo"] = (xy) => pxsim.visuals.mkMicroServoPart(xy);
            this.builtinParts["led"] = this.ledState = new pxsim.LedState(pxsim.runtime);
            this.matrixLedState = new Array(25);
            for (let i = 0; i < 25; i++) {
                this.matrixLedState[i] = new pxsim.LedState(pxsim.runtime);
            }
            this.builtinParts["matrixLedState"] = this.matrixLedState;
        }
        receiveMessage(msg) {
            if (!pxsim.runtime || pxsim.runtime.dead)
                return;
            switch (msg.type || "") {
                case "eventbus": {
                    let ev = msg;
                    this.bus.queue(ev.id, ev.eventid, ev.value);
                    break;
                }
                case "serial": {
                    let data = msg.data || "";
                    // TODO
                    break;
                }
            }
        }
        initAsync(msg) {
            super.initAsync(msg);
            const options = (msg.options || {});
            const boardDef = msg.boardDefinition;
            const cmpsList = msg.parts;
            const cmpDefs = msg.partDefinitions || {};
            const fnArgs = msg.fnArgs;
            const opts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
            };
            const viewHost = new pxsim.visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual,
                boardDef: boardDef,
                highContrast: msg.highContrast
            }), opts);
            document.body.innerHTML = ""; // clear children
            document.body.appendChild(this.view = viewHost.getView());
            this.accelerometerState.attachEvents(this.view);
            return Promise.resolve();
        }
        screenshot() {
            return pxsim.svg.toDataUri(new XMLSerializer().serializeToString(this.view));
        }
        tryGetNeopixelState(pinId) {
            return this._neopixelState[pinId];
        }
        neopixelState(pinId) {
            let state = this._neopixelState[pinId];
            if (!state)
                state = this._neopixelState[pinId] = new pxsim.CommonNeoPixelState();
            return state;
        }
        defaultNeopixelPin() {
            return undefined;
        }
        getDefaultPitchPin() {
            return undefined;
        }
    }
    pxsim.DalBoard = DalBoard;
    function initRuntimeWithDalBoard() {
        pxsim.U.assert(!pxsim.runtime.board);
        let b = new DalBoard();
        pxsim.runtime.board = b;
        pxsim.runtime.postError = (e) => {
            // TODO
            pxsim.runtime.updateDisplay();
        };
    }
    pxsim.initRuntimeWithDalBoard = initRuntimeWithDalBoard;
    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    class AccelState {
        GetX() {
        }
        GetY() {
        }
        GetZ() {
        }
    }
    pxsim.AccelState = AccelState;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var input;
    (function (input) {
        function ReadX() {
            const acc = pxsim.board().accelState;
            acc.GetX();
            pxsim.runtime.queueDisplayUpdate();
        }
        input.ReadX = ReadX;
        function ReadY() {
            const acc = pxsim.board().accelState;
            acc.GetY();
            pxsim.runtime.queueDisplayUpdate();
        }
        input.ReadY = ReadY;
        function ReadZ() {
            const acc = pxsim.board().accelState;
            acc.GetZ();
            pxsim.runtime.queueDisplayUpdate();
        }
        input.ReadZ = ReadZ;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var game;
    (function (game) {
        function takeScreenshot() {
        }
        game.takeScreenshot = takeScreenshot;
    })(game = pxsim.game || (pxsim.game = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var info;
    (function (info) {
        function updateHighScore(score) {
        }
        info.updateHighScore = updateHighScore;
    })(info = pxsim.info || (pxsim.info = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    class LedState {
        constructor(runtime) {
            this.animationQ = new pxsim.AnimationQueue(runtime);
        }
        setState(on) {
            this.on = on;
        }
        getState() {
            return this.on;
        }
    }
    pxsim.LedState = LedState;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var led;
    (function (led_1) {
        function __setLed(on) {
            const led = pxsim.board().ledState;
            led.setState(on);
            pxsim.runtime.queueDisplayUpdate();
        }
        led_1.__setLed = __setLed;
    })(led = pxsim.led || (pxsim.led = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    // export class LedState {
    // private on: boolean;
    // setState(on: boolean) {
    // this.on = on;        
    // }
    // getState(): boolean {
    // return this.on;
    // }
    // }
    class Image extends pxsim.RefObject {
        constructor(width, data) {
            super();
            this.width = width;
            this.data = data;
            this.height = (this.data.length / this.width) | 0;
        }
        // public print() {
        // console.debug(`Image id:${this.id} size:${this.width}x${this.height}`)
        // }
        get(x, y) {
            x = x | 0;
            y = y | 0;
            if (x < 0 || x >= this.width || y < 0 || y >= this.height)
                return 0;
            return this.data[y * this.width + x];
        }
    }
    pxsim.Image = Image;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var display;
    (function (display) {
        let needMatrixLedUpDate;
        function getMatrixLedUpdateState() {
            return needMatrixLedUpDate;
        }
        display.getMatrixLedUpdateState = getMatrixLedUpdateState;
        function setMatrixLedUpdateState(state) {
            needMatrixLedUpDate = state;
        }
        display.setMatrixLedUpdateState = setMatrixLedUpdateState;
        function __setMatrixLeds(leds, interval) {
            const ledMatrix = pxsim.board().matrixLedState;
            for (let y = 0; y < leds.height; y++) {
                for (let x = 0; x < leds.width; x++) {
                    if (leds.get(x, y) != 0) {
                        ledMatrix[y * leds.width + x].setState(true);
                    }
                    else {
                        ledMatrix[y * leds.width + x].setState(false);
                    }
                }
            }
            let cb = pxsim.getResume();
            let first = true;
            interval = 400;
            ledMatrix[0].animationQ.enqueue({
                interval,
                frame: () => {
                    if (first) {
                        setMatrixLedUpdateState(true);
                        first = false;
                        return true;
                    }
                    return false;
                },
                whenDone: cb
            });
        }
        display.__setMatrixLeds = __setMatrixLeds;
        function __ClearMatrixLeds() {
            const ledMatrix = pxsim.board().matrixLedState;
            for (let i = 0; i < 25; i++) {
                ledMatrix[i].setState(false);
            }
            setMatrixLedUpdateState(true);
            // let cb = getResume();
            // let first = true;
            // let interval = 400;
            // ledMatrix[1].animationQ.enqueue({
            // interval,
            // frame: () => {
            // if (first) {
            // setMatrixLedUpdateState(true);                    
            // first = false;
            // return true;
            // }
            // return false;
            // },
            // whenDone: cb
            // })
            //getResume()
        }
        display.__ClearMatrixLeds = __ClearMatrixLeds;
        function setMatrixLeds(leds, interval) {
        }
        display.setMatrixLeds = setMatrixLeds;
    })(display = pxsim.display || (pxsim.display = {}));
})(pxsim || (pxsim = {}));
/*
namespace pxsim {

    export class LightBulbState {
        private r: number;
        private g: number;
        private b: number;

        setColor(r: number, g: number, b: number) {
            this.r = r;
            this.g = g;
            this.b = b;
        }

        getColor(): [number, number, number] {
            return [this.r, this.g, this.b];
        }
    }
}

namespace pxsim.lightbulb {
    export function __setRGBLed(r: number, g: number, b: number): void {
        const led = (board() as DalBoard).lightBulbState;
        led.setColor(r, g, b);
        runtime.queueDisplayUpdate();
    }
}
*/ 
var pxsim;
(function (pxsim) {
    var neopixel;
    (function (neopixel) {
        function Flush(pin, buffer, size, rgb888) {
        }
        neopixel.Flush = Flush;
    })(neopixel = pxsim.neopixel || (pxsim.neopixel = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var pins;
    (function (pins) {
        function i2cReadBuffer(address, size, repeat) {
            // fake reading zeros
            return pins.createBuffer(size);
        }
        pins.i2cReadBuffer = i2cReadBuffer;
        function i2cWriteBuffer(address, buf, repeat) {
            // fake - noop
        }
        pins.i2cWriteBuffer = i2cWriteBuffer;
    })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        const MB_STYLE = `
        svg.sim {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            display: block;
        }
        svg.sim.grayscale {
            -moz-filter: grayscale(1);
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
        }
        .sim-button {
            pointer-events: none;
        }

        .sim-button-outer {
            cursor: pointer;
        }
        .sim-button-outer:hover {
            stroke-width: 1px;
            stroke: orange !important;
        }
        .sim-button-nut {
            fill:#704A4A;
            pointer-events:none;
        }
        .sim-button-nut:hover {
            stroke:1px solid #704A4A;
        }
        .sim-pin-touch:hover {
            stroke:#D4AF37;
            stroke-width:1px;
        }

        .sim-pin-touch.touched:hover {
            stroke:darkorange;
        }

        .sim-led-back:hover {
            stroke:#fff;
            stroke-width:3px;
        }
        .sim-led:hover {
            stroke:#ff7f7f;
            stroke-width:3px;
        }

        .sim-systemled {
            fill:#333;
            stroke:#555;
            stroke-width: 1px;
        }
          
         .sim-drawcircle {
           
            stroke:#42c5f4;
            stroke-width: 6px;
           
        }

        .sim-light-level-button {
            stroke:#f1c40f;
            stroke-width: 1px;
        }

        .sim-pin-level-button {
            stroke:darkorange;
            stroke-width: 1px;
        }

        .sim-sound-level-button {
            stroke:#7f8c8d;
            stroke-width: 1px;
        }

        .sim-antenna {
            stroke:#555;
            stroke-width: 2px;
        }

        .sim-text {
            font-family:"Lucida Console", Monaco, monospace;
            font-size: 40px;
            fill: #000;
        }
        .sim-text, svg.sim text {
            pointer-events: none; user-select: none;
        }
        .sim-text.small {
            font-size:6px;
        }
        .sim-text.inverted {
            fill:#000;
        }

        .sim-text-pin {
            font-family:"Lucida Console", Monaco, monospace;
            font-size:5px;
            fill:#fff;
            pointer-events: none;
        }

        .sim-thermometer {
        }

        #rgbledcircle:hover {
            r:8px;
        }

        #SLIDE_HOVER {
            cursor: pointer;
        }
        .sim-slide-switch:hover #SLIDE_HOVER {
            stroke:orange !important;
            stroke-width: 1px;
        }

        .sim-slide-switch-inner.on {
            fill:#ff0000 !important;
        }

        /* animations */
        .sim-theme-glow {
            animation-name: sim-theme-glow-animation;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-duration: 1.25s;
        }
        @keyframes sim-theme-glow-animation {
            from { opacity: 1; }
            to   { opacity: 0.75; }
        }

        .sim-flash {
            animation-name: sim-flash-animation;
            animation-duration: 0.1s;
        }

        @keyframes sim-flash-animation {
            from { fill: yellow; }
            to   { fill: default; }
        }

        .sim-flash-stroke {
            animation-name: sim-flash-stroke-animation;
            animation-duration: 0.4s;
            animation-timing-function: ease-in;
        }

        @keyframes sim-flash-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }


        .sim-sound-stroke {
            stroke-width: 10px;
            animation-name: sim-sound-stroke-animation;
            animation-duration: 0.4s;
        }

        @keyframes sim-sound-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }

        /* wireframe */
        .sim-wireframe * {
            fill: none;
            stroke: black;
        }
        .sim-wireframe .sim-display,
        .sim-wireframe .sim-led,
        .sim-wireframe .sim-led-back,
        .sim-wireframe .sim-head,
        .sim-wireframe .sim-theme,
        .sim-wireframe .sim-button-group,
        .sim-wireframe .sim-button-label,
        .sim-wireframe .sim-button,
        .sim-wireframe .sim-text-pin
        {
            visibility: hidden;
        }
        .sim-wireframe .sim-label
        {
            stroke: none;
            fill: #777;
        }
        .sim-wireframe .sim-board {
            stroke-width: 2px;
        }
        *:focus {
            outline: none;
        }
        .sim-button-outer:focus,
        .sim-slide-switch:focus,
        .sim-pin:focus,
        .sim-thermometer:focus,
        .sim-button-group:focus .sim-button-outer,
        .sim-light-level-button:focus,
        .sim-sound-level-button:focus {
            stroke: #4D90FE;
            stroke-width: 2px !important;
         }
        .no-drag {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
    `;
        const pinNames = [];
        const MB_WIDTH = 1795.6;
        const MB_HEIGHT = 1027.79999;
        visuals.themes = ["#3ADCFE"].map(accent => {
            return {
                accent: accent,
                pin: "#D4AF37",
                pinTouched: "#FFA500",
                pinActive: "#FF5500",
                ledOn: "#ff7777",
                ledOff: "transparent",
                buttonOuter: "#979797",
                buttonUps: ["#000", "#000", "#000", "#000"],
                buttonDown: "#FFA500",
                virtualButtonDown: "#FFA500",
                virtualButtonOuter: "#333",
                virtualButtonUp: "#FFF",
                lightLevelOn: "yellow",
                lightLevelOff: "#555",
                soundLevelOn: "#7f8c8d",
                soundLevelOff: "#555",
                gestureButtonOn: "#FFA500",
                gestureButtonOff: "#B4009E"
            };
        });
        function randomTheme() {
            return visuals.themes[Math.floor(Math.random() * visuals.themes.length)];
        }
        visuals.randomTheme = randomTheme;
        class BrainPadBoardSvg {
            constructor(props) {
                this.props = props;
                this.pinNmToCoord = {};
                this.counter = 0;
                this.ledMatrixActive = false;
                this.lastFlashTime = 0;
                this.fixPinIds();
                this.buildDom();
                if (props && props.wireframe)
                    pxsim.U.addClass(this.element, "sim-wireframe");
                if (props && props.theme)
                    this.updateTheme();
                if (props && props.runtime) {
                    this.board = this.props.runtime.board;
                    this.board.updateSubscribers.push(() => this.updateState());
                    this.updateState();
                    this.attachEvents();
                    this.initScreen();
                }
                //getResume();
            }
            fixPinIds() {
                /* GHI changed
                for (let pn of pinNames) {
                    let key = getConfigKey(pn.name);
                    if (key != null)
                        pn.id = getConfig(key);
                }
                */
            }
            flush() {
            }
            initScreen() {
                let requested = false;
                this.screenCanvas.width = this.board.screenState.width;
                this.screenCanvas.height = this.board.screenState.height;
                const ctx = this.screenCanvas.getContext("2d");
                ctx.imageSmoothingEnabled = false;
                const imgdata = ctx.getImageData(0, 0, this.board.screenState.width, this.board.screenState.height);
                const arr = new Uint32Array(imgdata.data.buffer);
                // this.board.screenState.onChange = () => {
                // arr.set(this.board.screenState.screen)
                // runtime.queueDisplayUpdate();
                // ctx.putImageData(imgdata, 0, 0)
                // this.lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.screenCanvas.toDataURL());
                // window.requestAnimationFrame(this.flush)
                // }
                this.board.screenState.onChange = () => {
                    const flush = () => {
                        requested = false;
                        if (this.ledMatrixActive == false) {
                            for (let i = 0; i < this.board.screenState.screen.length; i++) {
                                if (this.board.screenState.screen[i] == 0xFF000000 || this.board.screenState.screen[i] == 0)
                                    this.board.screenState.screen[i] = 0xFF000000;
                                else
                                    this.board.screenState.screen[i] = 0xFFFFFFFF;
                            }
                            const imgdataFlush = ctx.getImageData(0, 0, this.board.screenState.width, this.board.screenState.height);
                            const arrFlush = new Uint32Array(imgdataFlush.data.buffer);
                            arrFlush.set(this.board.screenState.screen);
                            ctx.putImageData(imgdataFlush, 0, 0);
                        }
                        this.lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.screenCanvas.toDataURL());
                    };
                    // after we did one-time setup, redefine ourselves to be quicker
                    this.board.screenState.onChange = () => {
                        arr.set(this.board.screenState.screen);
                        // paint rect
                        pxsim.runtime.queueDisplayUpdate();
                        if (!requested) {
                            requested = true;
                            // ctx.putImageData(imgdata, 0, 0)
                            // this.lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.screenCanvas.toDataURL());
                            window.requestAnimationFrame(flush);
                        }
                    };
                    // and finally call the redefined self
                    this.board.screenState.onChange();
                };
            }
            getView() {
                return {
                    el: this.element,
                    y: 0,
                    x: 0,
                    w: MB_WIDTH,
                    h: MB_HEIGHT
                };
            }
            getCoord(pinNm) {
                /* GHI changed
                return this.pinNmToCoord[pinNm];
                */
                return null;
            }
            highlightPin(pinNm) {
                //TODO: for instructions
            }
            getPinDist() {
                return 10;
            }
            recordPinCoords() {
                /* GHI changed
                pinNames.forEach((pin, i) => {
                    const nm = pin.name;
                    const p = this.pins[i];
                    const r = p.getBoundingClientRect();
                    this.pinNmToCoord[nm] = [r.left + r.width / 2, r.top + r.height / 2];
                });
                console.log(JSON.stringify(this.pinNmToCoord, null, 2))
                */
            }
            updateTheme() {
                let theme = this.props.theme;
                // GHI changed svg.fills(this.buttonsOuter, theme.buttonOuter);
                pxsim.svg.fill(this.buttons[0], theme.buttonUps[0]);
                pxsim.svg.fill(this.buttons[1], theme.buttonUps[1]);
                // if (this.shakeButtonGroup) {
                //     svg.fill(this.shakeButtonGroup, this.props.theme.gestureButtonOff);
                // }
                pxsim.svg.setGradientColors(this.lightLevelGradient, theme.lightLevelOn, theme.lightLevelOff);
                pxsim.svg.setGradientColors(this.thermometerGradient, theme.ledOff, theme.ledOn);
                // svg.setGradientColors(this.soundLevelGradient, theme.soundLevelOn, theme.soundLevelOff);
                // for (const id in this.pinControls) {
                //     this.pinControls[id].updateTheme();
                // }
            }
            updateState() {
                let state = this.board;
                if (!state)
                    return;
                let theme = this.props.theme;
                let bpState = state.buttonState;
                let buttons = bpState.buttons;
                pxsim.svg.fill(this.buttons[0], buttons[0].pressed ? theme.buttonDown : theme.buttonUps[0]);
                pxsim.svg.fill(this.buttons[1], buttons[1].pressed ? theme.buttonDown : theme.buttonUps[1]);
                /* GHI changed
                this.updateRgbLed();
                
                this.updateGestures();
    
                this.updateSound();
                this.updateLightLevel();
                this.updateTemperature();
    
                if (!runtime || runtime.dead) svg.addClass(this.element, "grayscale");
                else svg.removeClass(this.element, "grayscale");
                */
                this.updateSound();
                this.updateLed();
                this.UpdateScreen();
                this.updateGestures();
            }
            flashSystemLed() {
                /* GHI changed
                if (!this.systemLed)
                    this.systemLed = this.element.getElementById("LED_PWR-2") as SVGElement;
                let now = Date.now();
                if (now - this.lastFlashTime > 150) {
                    this.lastFlashTime = now;
                    svg.animate(this.systemLed, "sim-flash")
                }
                */
            }
            updateLed() {
                let state = this.board;
                if (!state)
                    return;
                const on = state.ledState.getState();
                if (this.led) {
                    if (on) {
                        pxsim.svg.fill(this.led, `#f08000`);
                        this.led.style.strokeWidth = "0.28349999";
                        this.led.style.stroke = "#f08000";
                    }
                    else {
                        pxsim.svg.fill(this.led, `#ffffff`);
                        this.led.style.strokeWidth = "0.28349999";
                        this.led.style.stroke = "#0000ff";
                    }
                }
            }
            UpdateScreen() {
                let state = this.board;
                if (!state)
                    return;
                const ledMatrix = state.matrixLedState;
                if (ledMatrix) {
                    if (!pxsim.display.getMatrixLedUpdateState()) {
                        return;
                    }
                    pxsim.display.setMatrixLedUpdateState(false);
                    //const on = ledMatrix[0].getState();
                    //update led matrix screen
                    this.screenCanvas.width = this.board.screenState.width;
                    this.screenCanvas.height = this.board.screenState.height;
                    const ctx = this.screenCanvas.getContext("2d");
                    ctx.imageSmoothingEnabled = false;
                    const imgdata = ctx.getImageData(0, 0, this.board.screenState.width, this.board.screenState.height);
                    const arr = new Uint32Array(imgdata.data.buffer);
                    // let ledWidth = (this.board.screenState.width / 5) | 0;
                    // let ledHeight = (this.board.screenState.height / 5) | 0;
                    let ledWidth = (this.board.screenState.height / 5) | 0;
                    let ledHeight = (this.board.screenState.height / 5) | 0;
                    for (let i = 0; i < this.board.screenState.screen.length; i++) {
                        this.board.screenState.screen[i] = 0xFF000000;
                    }
                    let active = false; // TQD_TODO: 
                    for (let led = 0; led < ledMatrix.length; led++) {
                        let xSrc = (led % 5) | 0;
                        let ySrc = (led / 5) | 0;
                        let xDest = xSrc * ledWidth + 34;
                        let yDest = ySrc * ledHeight;
                        for (let y = yDest + 1; y < yDest + ledHeight - 2; y++) {
                            for (let x = xDest + 1; x < xDest + ledWidth - 2; x++) {
                                let arrId = (y * this.board.screenState.width + x) | 0;
                                if (ledMatrix[led].getState() == true) {
                                    this.board.screenState.screen[arrId] = 0xFFFFFFFF;
                                    active = true;
                                }
                            }
                        }
                    }
                    this.ledMatrixActive = active;
                    arr.set(this.board.screenState.screen);
                    pxsim.runtime.queueDisplayUpdate();
                    ctx.putImageData(imgdata, 0, 0);
                    this.lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.screenCanvas.toDataURL());
                    window.requestAnimationFrame(this.flush);
                }
            }
            updateRgbLed() {
                /* GHI changed
                let state = this.board;
                if (!state) return;
               
                const rgb = state.lightBulbState.getColor();
    
                if (!this.led) {
                    if (this.rgbLed) {
                        if (!rgb || (rgb.length >= 3 && rgb[0] === 0 && rgb[1] === 0 && rgb[2] === 0)) {
                            // Clear the pixel
                            svg.fill(this.rgbLed, `#feffe9`);
                            svg.filter(this.rgbLed, null);
                            this.rgbLed.style.strokeWidth = "0.28349999";
                            this.rgbLed.style.stroke = "#58595b";
                        } else {
                            let hsl = visuals.rgbToHsl(rgb);
                            let [h, s, l] = hsl;
                            let lx = Math.max(l * 1.3, 85);
                            // at least 10% luminosity
                            l = l * 90 / 100 + 10;
                            this.rgbLed.style.stroke = `hsl(${h}, ${s}%, ${Math.min(l * 3, 75)}%)`
                            this.rgbLed.style.strokeWidth = "1.5";
                            svg.fill(this.rgbLed, `hsl(${h}, ${s}%, ${lx}%)`)
                            svg.filter(this.rgbLed, `url(#neopixelglow)`);
                            
                            // let transform = l / 100 * 0.5;
                            // this.rgbLed.style.transform = `scale(${0.9 + transform})`;
                            // this.rgbLed.style.transformOrigin = "211.30725px 43.049255px";
                        }
                    }
                }
                */
            }
            updateSound() {
                /* GHI changed
                let state = this.board;
                if (!state || !state.audioState) return;
                let audioState = state.audioState;
    
                let soundBoard = this.element.getElementById('BUZZER-1002') as SVGGElement;
                if (audioState.isPlaying()) {
                    svg.addClass(soundBoard, "sim-sound-stroke");
                } else {
                    svg.removeClass(soundBoard, "sim-sound-stroke");
                }
                */
            }
            updatePins() {
                /* GHI changed
                let state = this.board;
                if (!state || !state.edgeConnectorState) return;
                state.edgeConnectorState.pins.forEach((pin, i) => this.updatePin(pin, i));
                */
            }
            updatePin(pin, index) {
                /*
                if (!pin || !this.pins[index]) return;
    
                if ((pin as pins.CommonPin).used) {
                    if (this.pinControls[pin.id] === undefined) {
                        const pinName = pinNames.filter((a) => a.id === pin.id)[0];
                        if (pinName) {
                            this.pinControls[pin.id] = new AnalogPinControl(this, this.defs, pin.id, pinName.name);
                        }
                        else {
                            // TODO: Surface pin controls for sensor pins in some way?
                            this.pinControls[pin.id] = null;
                        }
                    }
    
                    if (this.pinControls[pin.id]) {
                        this.pinControls[pin.id].updateValue();
                    }
                }
                */
            }
            updateLightLevel() {
                /*
                let state = this.board;
                if (!state || !state.lightSensorState.sensorUsed) return;
    
                if (!this.lightLevelButton) {
                    let gid = "gradient-light-level";
                    this.lightLevelGradient = svg.linearGradient(this.defs, gid)
                    let cy = 590;
                    let r = 50;
                    this.lightLevelButton = svg.child(this.g, "circle", {
                        cx: `100px`, cy: `${cy}px`, r: `${r}px`,
                        class: 'sim-light-level-button no-drag',
                        fill: `url(#${gid})`
                    }) as SVGCircleElement;
                    let pt = this.element.createSVGPoint();
                    svg.buttonEvents(this.lightLevelButton,
                        // move
                        (ev) => {
                            let pos = svg.cursorPoint(pt, this.element, ev);
                            let rs = r / 2;
                            let level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy - rs)) / (2 * rs) * 255)));
                            if (level != this.board.lightSensorState.getLevel()) {
                                this.board.lightSensorState.setLevel(level);
                                this.applyLightLevel();
                            }
                        },
                        // start
                        ev => { },
                        // stop
                        ev => { },
                        // keydown
                        (ev) => {
                            let charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode
                            if (charCode === 40 || charCode === 37) { // Down/Left arrow
                                if (this.board.lightSensorState.getLevel() === 0) {
                                    this.board.lightSensorState.setLevel(255);
                                } else {
                                    this.board.lightSensorState.setLevel(this.board.lightSensorState.getLevel() - 1);
                                }
                                this.applyLightLevel();
                            } else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                                if (this.board.lightSensorState.getLevel() === 255) {
                                    this.board.lightSensorState.setLevel(0);
                                } else {
                                    this.board.lightSensorState.setLevel(this.board.lightSensorState.getLevel() + 1);
                                }
                                this.applyLightLevel();
                            }
                        });
                    this.lightLevelText = svg.child(this.g, "text", { x: 70, y: cy + r - 130, text: '', class: 'sim-text' }) as SVGTextElement;
                    this.updateTheme();
    
                    accessibility.makeFocusable(this.lightLevelButton);
                    accessibility.setAria(this.lightLevelButton, "slider", "Light level");
                    this.lightLevelButton.setAttribute("aria-valuemin", "0");
                    this.lightLevelButton.setAttribute("aria-valuemax", "255");
                    this.lightLevelButton.setAttribute("aria-orientation", "vertical");
                    this.lightLevelButton.setAttribute("aria-valuenow", "128");
                }
    
                svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(state.lightSensorState.getLevel() * 100 / 255))) + '%')
                this.lightLevelText.textContent = state.lightSensorState.getLevel().toString();
                */
            }
            applyLightLevel() {
                /*
                let lv = this.board.lightSensorState.getLevel();
                svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(lv * 100 / 255))) + '%')
                this.lightLevelText.textContent = lv.toString();
                this.lightLevelButton.setAttribute("aria-valuenow", lv.toString());
                accessibility.setLiveContent(lv.toString());
                */
            }
            updateTemperature() {
                /* GHI changed
                let state = this.board;
                if (!state || !state.thermometerState || !state.thermometerState.sensorUsed) return;
    
                // Celsius
                let tmin = -5;
                let tmax = 50;
                if (!this.thermometer) {
                    let gid = "gradient-thermometer";
                    this.thermometerGradient = svg.linearGradient(this.defs, gid);
                    this.thermometer = <SVGRectElement>svg.child(this.g, "rect", {
                        class: "sim-thermometer no-drag",
                        x: 72,
                        y: 120,
                        width: 39,
                        height: 260,
                        rx: 2, ry: 2,
                        fill: `url(#${gid})`
                    });
                    this.thermometerText = svg.child(this.g, "text", { class: 'sim-text', x: 70, y: 100 }) as SVGTextElement;
                    this.updateTheme();
    
                    let pt = this.element.createSVGPoint();
                    svg.buttonEvents(this.thermometer,
                        // move
                        (ev) => {
                            let cur = svg.cursorPoint(pt, this.element, ev);
                            let t = Math.max(0, Math.min(1, (380 - cur.y) / 160))
                            state.thermometerState.setLevel(Math.floor(tmin + t * (tmax - tmin)));
                            this.updateTemperature();
                        },
                        // start
                        ev => { },
                        // stop
                        ev => { },
                        // keydown
                        (ev) => {
                            let charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode
                            if (charCode === 40 || charCode === 37) { // Down/Left arrow
                                if (state.thermometerState.getLevel() === -5) {
                                    state.thermometerState.setLevel(50);
                                } else {
                                    state.thermometerState.setLevel(state.thermometerState.getLevel() - 1);
                                }
                                this.updateTemperature();
                            } else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                                if (state.thermometerState.getLevel() === 50) {
                                    state.thermometerState.setLevel(-5);
                                } else {
                                    state.thermometerState.setLevel(state.thermometerState.getLevel() + 1);
                                }
                                this.updateTemperature();
                            }
                        });
    
                    accessibility.makeFocusable(this.thermometer);
                    accessibility.setAria(this.thermometer, "slider", "Thermometer");
                    this.thermometer.setAttribute("aria-valuemin", tmin.toString());
                    this.thermometer.setAttribute("aria-valuemax", tmax.toString());
                    this.thermometer.setAttribute("aria-orientation", "vertical");
                }
    
                let t = Math.max(tmin, Math.min(tmax, state.thermometerState.getLevel()))
                let per = Math.floor((state.thermometerState.getLevel() - tmin) / (tmax - tmin) * 100)
                svg.setGradientValue(this.thermometerGradient, 100 - per + "%");
    
                let unit = "°C";
                if (state.thermometerUnitState == pxsim.TemperatureUnit.Fahrenheit) {
                    unit = "°F";
                    t = ((t * 18) / 10 + 32) >> 0;
                }
                this.thermometerText.textContent = t + unit;
                this.thermometer.setAttribute("aria-valuenow", t.toString());
                this.thermometer.setAttribute("aria-valuetext", t + unit);
                accessibility.setLiveContent(t + unit);
                */
            }
            updateGestures() {
                /* GHI changed
                let state = this.board;
                if (state.accelerometerState.useShake && !this.shakeButtonGroup) {
                    const btnr = 2;
                    const width = 22;
                    const height = 10;
    
                    let btng = svg.child(this.g, "g", { class: "sim-button-group" });
                    this.shakeButtonGroup = btng;
                    this.shakeText = svg.child(this.g, "text", { x: 81, y: 32, class: "sim-text small" }) as SVGTextElement;
                    this.shakeText.textContent = "SHAKE"
    
                    svg.child(btng, "rect", { class: "sim-button-outer", x: 79, y: 25, rx: btnr, ry: btnr, width, height });
                    svg.fill(btng, this.props.theme.gestureButtonOff);
                    pointerEvents.down.forEach(evid => this.shakeButtonGroup.addEventListener(evid, ev => {
                        let state = this.board;
                        svg.fill(btng, this.props.theme.gestureButtonOn);
                        svg.addClass(this.shakeText, "inverted");
                    }))
                    this.shakeButtonGroup.addEventListener(pointerEvents.leave, ev => {
                        let state = this.board;
                        svg.fill(btng, this.props.theme.gestureButtonOff);
                        svg.removeClass(this.shakeText, "inverted");
                    })
                    this.shakeButtonGroup.addEventListener(pointerEvents.up, ev => {
                        let state = this.board;
                        svg.fill(btng, this.props.theme.gestureButtonOff);
                        this.board.bus.queue(DAL.DEVICE_ID_GESTURE, 11); // GESTURE_SHAKE
                        svg.removeClass(this.shakeText, "inverted");
                    })
                    accessibility.makeFocusable(this.shakeButtonGroup);
                    accessibility.enableKeyboardInteraction(this.shakeButtonGroup, () => {
                        this.board.bus.queue(DAL.DEVICE_ID_GESTURE, 11);
                    });
                    accessibility.setAria(this.shakeButtonGroup, "button", "Shake the board");
                }
                */
                let state = this.board;
                // Disable accelerometer now
                if (state.accelerometerState.accelerometer.isActive)
                    state.accelerometerState.accelerometer.isActive = false;
            }
            buildDom() {
                this.element = new DOMParser().parseFromString(visuals.BOARD_SVG, "image/svg+xml").querySelector("svg");
                /* GHI changed
                svg.hydrate(this.element, {
                    "version": "1.0",
                    "viewBox": `0 0 ${MB_WIDTH} ${MB_HEIGHT}`,
                    "class": "sim",
                    "x": "0px",
                    "y": "0px",
                    "width": MB_WIDTH + "px",
                    "height": MB_HEIGHT + "px",
                });
                this.style = <SVGStyleElement>svg.child(this.element, "style", {});
                this.style.textContent = MB_STYLE;
                
                this.defs = <SVGDefsElement>svg.child(this.element, "defs", {});
                this.g = <SVGGElement>svg.elt("g");
                this.element.appendChild(this.g);
                
                // filters
                let glow = svg.child(this.defs, "filter", { id: "filterglow", x: "-5%", y: "-5%", width: "120%", height: "120%" });
                svg.child(glow, "feGaussianBlur", { stdDeviation: "5", result: "glow" });
                let merge = svg.child(glow, "feMerge", {});
                for (let i = 0; i < 3; ++i) svg.child(merge, "feMergeNode", { in: "glow" })
    
                let neopixelglow = svg.child(this.defs, "filter", { id: "neopixelglow", x: "-300%", y: "-300%", width: "600%", height: "600%" });
                svg.child(neopixelglow, "feGaussianBlur", { stdDeviation: "4.3", result: "coloredBlur" });
                let neopixelmerge = svg.child(neopixelglow, "feMerge", {});
                svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" })
                svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" })
                svg.child(neopixelmerge, "feMergeNode", { in: "SourceGraphic" })
    
                
                this.rgbLed = this.element.getElementById("LIGHTBULB_LED") as SVGCircleElement;
                const lcdRect = this.element.getElementById("DISPLAY_SCREEN") as SVGRectElement;
                this.lcd = <SVGImageElement>svg.child(lcdRect.parentElement, "image", { x : lcdRect.x.baseVal.value, y : lcdRect.y.baseVal.value, width: lcdRect.width.baseVal.value, height: lcdRect.height.baseVal.value })
                
                const btnids = ["BTN_L", "BTN_R", "BTN_U", "BTN_D"];
                const btnlabels = ["Left", "Right", "Up", "Down"];
                
                this.buttonsOuter = btnids.map((n, i) => {
                    let btn = this.element.getElementById(n + "_OUTER") as SVGElement;
                    accessibility.makeFocusable(btn);
                    accessibility.setAria(btn, "button", btnlabels[i]);
                    return btn;
                });
                
                this.buttonsOuter.forEach(b => svg.addClass(b, "sim-button-outer"));
                this.buttons = btnids.map(n => this.element.getElementById(n + "_INNER") as SVGElement);
                this.buttons.forEach(b => svg.addClass(b, "sim-button"));
                
                
                
                
                
                this.screenCanvas = document.createElement("canvas");
                */
                this.screenCanvas = document.createElement("canvas");
                const lcdRect = this.element.getElementById("DISPLAY_SCREEN");
                this.lcd = pxsim.svg.child(lcdRect.parentElement, "image", { x: lcdRect.x.baseVal.value, y: lcdRect.y.baseVal.value, width: lcdRect.width.baseVal.value, height: lcdRect.height.baseVal.value });
                //this.lcdRectLed1 = this.element.getElementById("DISPLAY_SCREEN_LED1") as SVGRectElement;
                //this.lcdLed1 = <SVGImageElement>svg.child(this.lcdRectLed1.parentElement, "rect", { x : this.lcdRectLed1.x.baseVal.value, y : this.lcdRectLed1.y.baseVal.value, width: this.lcdRectLed1.width.baseVal.value, height: this.lcdRectLed1.height.baseVal.value })
                const btnids = ["A", "B"];
                this.buttons = btnids.map(n => this.element.getElementById("BUTTON_" + n));
                this.buttons.forEach(b => pxsim.U.addClass(b, "sim-button-outer"));
                this.led = this.element.getElementById("LED");
            }
            mkBtn(left, top, label) {
                const btnr = 2;
                const btnw = 10;
                const btnn = 1.6;
                const btnnm = 2;
                const btnb = 3;
                let btng = pxsim.svg.child(this.g, "g", { class: "sim-button-group" });
                pxsim.accessibility.makeFocusable(btng);
                pxsim.accessibility.setAria(btng, "button", label);
                pxsim.svg.child(btng, "rect", { class: "sim-button-outer", x: left, y: top, rx: btnr, ry: btnr, width: btnw, height: btnw });
                const outer = btng;
                const inner = pxsim.svg.child(btng, "circle", {
                    class: "sim-button",
                    cx: left + btnw / 2,
                    cy: top + btnw / 2,
                    r: btnb
                });
                return { outer, inner };
            }
            attachEvents() {
                pxsim.Runtime.messagePosted = (msg) => {
                    switch (msg.type || "") {
                        case "serial":
                            this.flashSystemLed();
                            break;
                    }
                };
                let bpState = this.board.buttonState;
                let stateButtons = bpState.buttons;
                this.buttons.forEach((btn, index) => {
                    let button = stateButtons[index];
                    pxsim.pointerEvents.down.forEach(evid => btn.addEventListener(evid, ev => {
                        button.setPressed(true);
                        pxsim.svg.fill(this.buttons[index], this.props.theme.buttonDown);
                    }));
                    btn.addEventListener(pxsim.pointerEvents.leave, ev => {
                        button.setPressed(false);
                        pxsim.svg.fill(this.buttons[index], this.props.theme.buttonUps[index]);
                    });
                    btn.addEventListener(pxsim.pointerEvents.up, ev => {
                        button.setPressed(false);
                        pxsim.svg.fill(this.buttons[index], this.props.theme.buttonUps[index]);
                    });
                    pxsim.accessibility.enableKeyboardInteraction(btn, () => {
                        button.setPressed(true);
                        pxsim.svg.fill(this.buttons[index], this.props.theme.buttonDown);
                    }, () => {
                        button.setPressed(false);
                        pxsim.svg.fill(this.buttons[index], this.props.theme.buttonUps[index]);
                    });
                });
            }
        }
        visuals.BrainPadBoardSvg = BrainPadBoardSvg;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.BOARD_SVG = `<svg
   version="1.1"
   id="svg3336"
   inkscape:version="1.1 (c68e22c387, 2021-05-23)"
   x="0px"
   y="0px"
   viewBox="0 0 498 406"
   style="enable-background:new 0 0 498 406;"
   xml:space="preserve"
   sodipodi:docname="board.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
   id="defs380" />
<style
   type="text/css"
   id="style1492">
	.st0{fill:url(#path3694_00000059274564869875150710000011957716559757709225_);}
	.st1{fill:url(#path3698_00000147915964973541074290000005888464610750284446_);}
	.st2{fill:url(#path3702_00000106856627971963147470000006192414334431694253_);}
	.st3{fill:url(#path3706_00000137834779939291632490000002152450895056025490_);}
	.st4{fill:url(#path3710_00000155126961641215988860000005305993978079813788_);}
	.st5{fill:url(#path3714_00000000922197260626195580000010040180380662555779_);}
	.st6{fill:url(#path3718_00000018917913344883301690000001927294585331881389_);}
	.st7{fill:url(#path3722_00000066475761918088333620000010326590759302497694_);}
	.st8{fill:url(#path3726_00000025409448515759903470000010133787212356512920_);}
	.st9{fill:url(#path3730_00000001643190828513936830000009634482998148294324_);}
	.st10{fill:url(#path3734_00000041982907582825941310000005221855448674955195_);}
	.st11{fill:url(#path3738_00000035493510858565493600000004593523145978830487_);}
	.st12{fill:url(#path3742_00000172423787568615830830000009797144419426221195_);}
	.st13{fill:url(#path3746_00000110428664047487480620000004484899189864391596_);}
	.st14{fill:url(#path3750_00000144305058028471449560000006991331984504437391_);}
	.st15{fill:url(#path3754_00000025418066198260226680000010378231553548043443_);}
	.st16{fill:url(#path3758_00000173162584152265943150000004275285370840746920_);}
	.st17{fill:url(#path3762_00000088842543115397959150000008185872179878808476_);}
	.st18{fill:url(#path3766_00000098217945061374785820000001229106572806319767_);}
	.st19{fill:url(#path3770_00000061457460397759569970000017347408432990531002_);}
	.st20{fill:#FFFFFF;}
	.st21{stroke:#FFFFFF;stroke-miterlimit:10;}
	.st22{fill:#60410A;}
	.st23{fill:#262525;}
	.st24{fill:#848383;}
	.st25{fill:#575757;}
	.st26{fill:none;stroke:#FFFFFF;stroke-width:1.8911;stroke-linecap:round;stroke-miterlimit:10;}
	.st27{fill:none;stroke:#F08000;stroke-width:2.2306;stroke-linecap:round;stroke-miterlimit:10;}
	
		.st28{fill:#FCFCFC;stroke:url(#circle26031_00000119813506891439227090000005708071226892268686_);stroke-width:4.2562;stroke-miterlimit:10;}
	
		.st29{fill:#AF740B;stroke:url(#circle26042_00000067225425597571272380000003046387648790885280_);stroke-width:4.2562;stroke-miterlimit:10;}
	.st30{fill:#FFB600;}
	.st31{fill:url(#path26065_00000176013892676233451280000006362220922515042441_);}
	.st32{fill:url(#path26080_00000106844149529442371760000007383151071880706701_);}
	.st33{fill:url(#path26091_00000035504679190592897210000016871972131765393286_);}
	.st34{fill:url(#path26106_00000134948944717738923610000017472034044129217442_);}
	.st35{fill:url(#path26121_00000060007024353144362510000011032077892493451668_);}
	.st36{fill:#BCBBBB;stroke:#000000;stroke-width:0.9578;stroke-miterlimit:10;}
	.st37{fill:#BCBBBB;stroke:#000000;stroke-width:0.9049;stroke-miterlimit:10;}
	.st38{fill:#470202;}
	.st39{fill:#470202;stroke:#000000;stroke-width:0.934;stroke-miterlimit:10;}
	
		.st40{fill:url(#circle26178_00000132086369126988246820000003871960555794489484_);stroke:#9E6407;stroke-width:3.7653;stroke-miterlimit:10;}
	
		.st41{fill:url(#circle26189_00000013892910668576434370000004230845369808906649_);stroke:#9E6407;stroke-width:3.7653;stroke-miterlimit:10;}
</style>
<sodipodi:namedview
   bordercolor="#666666"
   borderopacity="1.0"
   id="namedview26193"
   inkscape:current-layer="svg3336"
   inkscape:cx="-23.911059"
   inkscape:cy="303.03607"
   inkscape:pagecheckerboard="0"
   inkscape:pageopacity="0.0"
   inkscape:pageshadow="2"
   inkscape:window-height="1017"
   inkscape:window-maximized="1"
   inkscape:window-width="1920"
   inkscape:window-x="1912"
   inkscape:window-y="-8"
   inkscape:zoom="1.0246305"
   pagecolor="#ffffff"
   showgrid="false">
	</sodipodi:namedview>
<path
   id="path25719"
   d="M466.1,0H31.9C14.3,0,0,14.3,0,31.9v342.2c0,14.3,9.4,26.4,22.3,30.4v-0.1c0-4.1,3.3-7.4,7.4-7.4h21  c4.1,0,7.4,3.3,7.4,7.4v0.9c0,0.2,0,0.4,0,0.7h63.1v-0.7c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.7h74.2v-0.5  c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.5h75v-0.4c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.4H440  c0-0.3-0.1-0.6-0.1-1v-0.9c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.4c12.9-4.1,22.3-16.2,22.3-30.4V31.9  C498,14.3,483.7,0,466.1,0z M14.3,206.7c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8  C19.2,204.6,17,206.7,14.3,206.7z M486.2,206.7c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,0.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8  C491,204.6,488.8,206.7,486.2,206.7z" />
<linearGradient
   id="path3694_00000060722228373879360890000005766174044875941551_"
   gradientUnits="userSpaceOnUse"
   x1="-1142.2222"
   y1="16.351"
   x2="-1142.2222"
   y2="17.351"
   gradientTransform="matrix(14.4 0 0 44.4 16455.1992 -368.284)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop5" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop7" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop9" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop11" />
</linearGradient>
<path
   id="path3694"
   style="fill:url(#path3694_00000060722228373879360890000005766174044875941551_);"
   d="M0,357.7v19.2  c0,10.8,6.2,20.2,14.4,25.2v-44.4L0,357.7L0,357.7z" />
<linearGradient
   id="path3698_00000176016813605994329080000012271472086852170392_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7001"
   y1="14.52"
   x2="-1104.7001"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11118.7002 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop15" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop17" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop19" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop21" />
</linearGradient>
<path
   id="path3698"
   style="fill:url(#path3698_00000176016813605994329080000012271472086852170392_);"
   d="M66.7,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3702_00000179622298570141606840000003041940647484346501_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11131.0996 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop25" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop27" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop29" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop31" />
</linearGradient>
<path
   id="path3702"
   style="fill:url(#path3702_00000179622298570141606840000003041940647484346501_);"
   d="M79.1,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3706_00000054251345259098646570000012909914909356729259_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11143.4004 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop35" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop37" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop39" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop41" />
</linearGradient>
<path
   id="path3706"
   style="fill:url(#path3706_00000054251345259098646570000012909914909356729259_);"
   d="M91.4,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3710_00000060006162439127937710000006199963038330594741_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7001"
   y1="14.52"
   x2="-1104.7001"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11155.7002 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop45" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop47" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop49" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop51" />
</linearGradient>
<path
   id="path3710"
   style="fill:url(#path3710_00000060006162439127937710000006199963038330594741_);"
   d="M103.7,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3714_00000080887613204631344960000005160026823740088211_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11216.2998 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop55" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop57" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop59" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop61" />
</linearGradient>
<path
   id="path3714"
   style="fill:url(#path3714_00000080887613204631344960000005160026823740088211_);"
   d="M164.3,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3718_00000095331150976969727520000014269420112953008783_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11228.5996 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop65" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop67" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop69" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop71" />
</linearGradient>
<path
   id="path3718"
   style="fill:url(#path3718_00000095331150976969727520000014269420112953008783_);"
   d="M176.6,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3722_00000163784460602726370010000013136366963129324968_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11240.9004 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop75" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop77" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop79" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop81" />
</linearGradient>
<path
   id="path3722"
   style="fill:url(#path3722_00000163784460602726370010000013136366963129324968_);"
   d="M188.9,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3726_00000016767143923647286060000005964356070350008475_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11253.2998 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop85" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop87" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop89" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop91" />
</linearGradient>
<path
   id="path3726"
   style="fill:url(#path3726_00000016767143923647286060000005964356070350008475_);"
   d="M201.3,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3730_00000127758795587014103380000000533144448036490374_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11265.5996 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop95" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop97" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop99" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop101" />
</linearGradient>
<path
   id="path3730"
   style="fill:url(#path3730_00000127758795587014103380000000533144448036490374_);"
   d="M213.6,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3734_00000150088302689002099680000004746314755802603148_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7001"
   y1="14.52"
   x2="-1104.7001"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11327.2002 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop105" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop107" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop109" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop111" />
</linearGradient>
<path
   id="path3734"
   style="fill:url(#path3734_00000150088302689002099680000004746314755802603148_);"
   d="M275.2,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3738_00000078755155326833036950000016976071973070020761_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11339.5 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop115" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop117" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop119" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop121" />
</linearGradient>
<path
   id="path3738"
   style="fill:url(#path3738_00000078755155326833036950000016976071973070020761_);"
   d="M287.5,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3742_00000052802368363537828320000013078680494538934667_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11351.7998 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop125" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop127" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop129" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop131" />
</linearGradient>
<path
   id="path3742"
   style="fill:url(#path3742_00000052802368363537828320000013078680494538934667_);"
   d="M299.8,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3746_00000182527125936468553310000001224729904496966589_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11364.0996 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop135" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop137" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop139" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop141" />
</linearGradient>
<path
   id="path3746"
   style="fill:url(#path3746_00000182527125936468553310000001224729904496966589_);"
   d="M312.1,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3750_00000056411538582389470030000001726237894919760046_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11376.5 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop145" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop147" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop149" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop151" />
</linearGradient>
<path
   id="path3750"
   style="fill:url(#path3750_00000056411538582389470030000001726237894919760046_);"
   d="M324.5,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3754_00000071536319431224921570000013464636659446269590_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11437.0996 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop155" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop157" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop159" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop161" />
</linearGradient>
<path
   id="path3754"
   style="fill:url(#path3754_00000071536319431224921570000013464636659446269590_);"
   d="M385.1,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3758_00000088824599398657049560000006184384116544398489_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11449.4004 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop165" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop167" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop169" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop171" />
</linearGradient>
<path
   id="path3758"
   style="fill:url(#path3758_00000088824599398657049560000006184384116544398489_);"
   d="M397.4,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3762_00000120538584307392742520000012867115344704609957_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7001"
   y1="14.52"
   x2="-1104.7001"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11461.7002 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop175" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop177" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop179" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop181" />
</linearGradient>
<path
   id="path3762"
   style="fill:url(#path3762_00000120538584307392742520000012867115344704609957_);"
   d="M409.7,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3766_00000131351633483751028650000012752926811831159182_"
   gradientUnits="userSpaceOnUse"
   x1="-1104.7"
   y1="14.52"
   x2="-1104.7"
   y2="15.52"
   gradientTransform="matrix(10 0 0 50 11474 -369.3008)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop185" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop187" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop189" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop191" />
</linearGradient>
<path
   id="path3766"
   style="fill:url(#path3766_00000131351633483751028650000012752926811831159182_);"
   d="M422,356.7h10v50h-10  V356.7z" />
<linearGradient
   id="path3770_00000160192690495096054620000003369887215556224693_"
   gradientUnits="userSpaceOnUse"
   x1="-1142.2219"
   y1="16.3879"
   x2="-1142.2219"
   y2="17.3879"
   gradientTransform="matrix(14.4 0 0 44.3 16938.7969 -368.2838)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop195" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop197" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop199" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop201" />
</linearGradient>
<path
   id="path3770"
   style="fill:url(#path3770_00000160192690495096054620000003369887215556224693_);"
   d="M483.6,402  c8.2-5,14.4-14.4,14.4-25.1v-19.2h-14.4V402z" />
<path
   id="path3786"
   d="M69.7,203.5c0,8.7-7,15.7-15.7,15.7s-15.7-7-15.7-15.7s7-15.7,15.7-15.7S69.7,194.9,69.7,203.5" />
<path
   id="path25922"
   class="st20"
   d="M475.2,256.2h-61.8c-3.8,0-6.9-3.1-6.9-6.9V119.1c0-3.8,3.1-6.9,6.9-6.9h61.8  c3.8,0,6.9,3.1,6.9,6.9v130.2C482.1,253.1,479,256.2,475.2,256.2z" />
<path
   id="path25924"
   class="st20"
   d="M87.8,256.2H26c-3.8,0-6.9-3.1-6.9-6.9V119.1c0-3.8,3.1-6.9,6.9-6.9h61.8  c3.8,0,6.9,3.1,6.9,6.9v130.2C94.7,253.1,91.6,256.2,87.8,256.2z" />
<g
   id="g25928">
	<path
   id="path25926"
   d="M71.7,160.1l-13.4,0.1L57,152l-4.7,0.3l-0.3,8.1l-13.1,0.4L54.6,123L71.7,160.1z M58.2,144.3   c0-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.7-1.1s-1.9,0.4-2.7,1.1c-0.7,0.7-1.1,1.6-1.1,2.6s0.4,1.9,1.1,2.6   c0.7,0.7,1.6,1.1,2.7,1.1s1.9-0.4,2.7-1.1S58.2,145.3,58.2,144.3z" />
</g>
<g
   id="g25932">
	<path
   id="path25930"
   d="M459,148.5c0,7.1-5.9,10.6-17.8,10.6c-3.3,0-6.5-0.3-9.8-0.8l-2.1-34.5c6.5-0.3,10.3-0.5,11.4-0.5   c8.9,0,13.3,3.2,13.3,9.5c0,1.6-0.4,3-1.1,4.2c-0.8,1.4-2,2.3-3.4,2.6c2.7,0,5,0.7,6.7,2.3C458.1,143.7,459,145.8,459,148.5z    M444.7,134.4c0-0.9-0.3-1.7-1-2.4s-1.4-1-2.4-1s-1.7,0.3-2.3,1c-0.6,0.7-1,1.4-1,2.4c0,0.9,0.3,1.7,1,2.4c0.6,0.6,1.4,1,2.3,1   s1.7-0.3,2.4-1C444.4,136.1,444.7,135.3,444.7,134.4z M447.7,147.3c0-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.6-1.1s-1.9,0.4-2.6,1.1   s-1.1,1.6-1.1,2.6s0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1s1.9-0.4,2.6-1.1C447.3,149.2,447.7,148.3,447.7,147.3z" />
</g>
<rect
   id="rect25934"
   x="121.1"
   y="81.4"
   class="st21"
   width="265.6"
   height="188.3" />
<path
   id="DISPLAY_BASE2"
   class="st22"
   d="M159.2,244.8v8.1c0,2.8-1.3,8.1,0,10.8s9.7,5.2,13.1,6.7l24.4,11.1  c1.1,0.5,4.4,1.4,5.1,2.3s0,6.2,0,8.1h109.1c0-1.9-1.1-6.5,0-8.1c0.5-0.8,3.2-1.6,4.1-2l23.1-11.6c3.2-1.6,10.7-3.9,12.2-6.7  c1.5-2.8,0-7.6,0-10.1V245L159.2,244.8z" />
<path
   id="DISPLAY_BASE1"
   class="st23"
   d="M124.8,232.8c1,3.1,1.7,9.6,4,11.8s7,2.8,9.5,3.7l39.2,15.4l17.4,6.8  c1.6,0.6,6.9,1.7,7.9,3.1s0.1,10.4,0.1,13.3v16.3h101V287c0-2.7-1.6-11.1,0.1-13.3c1.7-2.2,6.4-2.4,8-2.9l17.7-6.5l39.7-14.6  c2.5-0.9,7.7-1.7,9.6-3.5c2-1.8,3-9,4-12.1" />
<rect
   id="DISPLAY_OUTER"
   x="123.5"
   y="84.4"
   class="st24"
   width="260.5"
   height="146.2" />
<rect
   id="DISPLAY_SCREEN"
   x="127.9"
   y="86.8"
   width="251.6"
   height="141.2" />
<path
   id="path25940"
   class="st20"
   d="M232.7,52c0,0.4,0.2,0.7,0.6,0.9c0.4,0.1,0.9,0.1,1.3,0c1.4-0.2,2.8-0.3,4.2-0.4  c0.2,0,0.4,0,0.5,0c1-0.1,2.1-0.1,3.1-0.2c0.9,0,1.8-0.1,2.6-0.4c1.1-0.4,2-1.4,2.4-2.6c0.3-1,0.2-2,0.3-3c0.4-4.1,3.5-7.5,4.8-11.4  c1.5-4.9-0.2-10.6-4-14c-1.7-1.4-3.7-2.4-5.8-2.9c-2.2-0.5-4.4-0.5-6.6,0c-2.2,0.5-4.1,1.6-5.8,3.1c-1.4,1.3-2.5,2.9-3.3,4.7  c-1.3,3.1-1.4,6.8-0.2,10c1.3,3.6,4.2,6.6,4.4,10.4c0.1,0.9,0.2,2.1,1.1,2.4c0.4,0.1,0.9,0,1.2-0.3c0.5-0.5,0.6-1.2,0.6-1.9  c0.1-2.4-1-4.6-2.1-6.7c-1.1-2.1-2.4-4.1-3-6.4c-0.8-3.4,0.2-7.1,2.6-9.6s6-3.8,9.4-3.3s6.5,2.7,8.1,5.8c1,1.9,1.4,4.1,1,6.2  c-0.8,4.9-5.3,8.9-5.2,13.9c0,0.7,0.1,1.4-0.2,2c-0.4,0.7-1.2,0.9-1.9,1.1c-1.3,0.4-2.7,0.6-4.1,0.8c-0.8,0.1-1.7,0.1-2.5,0.1  s-1.6,0-2.3,0.3C233.3,51,232.7,51.4,232.7,52z" />
<path
   id="path25942"
   class="st20"
   d="M162.6,54.8c0,7.8-6.5,11.7-19.6,11.7c-3.6,0-7.2-0.3-10.8-0.8l-2.2-38  c7.2-0.4,11.3-0.5,12.5-0.5c9.8,0,14.7,3.5,14.7,10.4c0,1.7-0.4,3.3-1.3,4.7c-0.9,1.6-2.2,2.5-3.8,2.8c3,0,5.4,0.8,7.4,2.5  C161.6,49.5,162.6,51.8,162.6,54.8 M146.9,39.3c0-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.6-1.1s-1.9,0.4-2.6,1.1  c-0.7,0.7-1.1,1.6-1.1,2.6s0.3,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1s1.9-0.4,2.6-1.1S146.9,40.3,146.9,39.3 M150.1,53.5  c0-1.1-0.4-2.1-1.2-2.9c-0.8-0.8-1.8-1.2-2.9-1.2c-1.1,0-2,0.4-2.8,1.2s-1.2,1.8-1.2,2.9c0,1.1,0.4,2.1,1.2,2.8  c0.8,0.8,1.7,1.2,2.8,1.2s2.1-0.4,2.9-1.2S150.1,54.6,150.1,53.5" />
<path
   id="path25944"
   class="st20"
   d="M195.8,50.6l-11.5,2.9c-0.2-2.3-1.1-3.5-2.7-3.5c-1.5,0-2.7,1.3-3.8,3.8l0.1,11.4l-10.8,0.2  l-0.6-23.7l11.1,0.1l0.1,4c3.2-3.4,6.6-5.1,10.1-5.1C192.4,40.8,195.1,44.1,195.8,50.6" />
<path
   id="path25946"
   class="st20"
   d="M228,64.8L217.9,66l-0.5-3.2c-1.8,2.1-4.3,3.1-7.6,3.1c-8.4,0-12.6-2-12.6-6.1  c0-3,1.2-5.1,3.5-6.5c1.6-0.9,4.1-1.5,7.5-2c4.1-0.5,6.2-1.5,6.2-3.1c0-0.9-0.4-1.6-1.1-2.1c-0.7-0.5-1.4-0.7-2.3-0.7  c-1.1,0-2,0.4-2.8,1.1c-0.7,0.7-1.1,1.6-1.2,2.7h-9.4c0.1-1,0.4-2.2,1.1-3.4c2.3-4.2,6.7-6.3,13.3-6.3c10.6,0,15.9,3.7,15.9,11.2  v14.1H228z M216.7,57.8c0-1.1-0.5-1.9-1.5-2.5c-0.9-0.5-1.8-0.7-3-0.7c-1.1,0-2.1,0.2-3,0.7c-1,0.6-1.5,1.4-1.5,2.5  c0,1,0.5,1.9,1.5,2.4c0.8,0.5,1.8,0.7,3,0.7c1.1,0,2.1-0.2,3-0.7C216.2,59.6,216.7,58.8,216.7,57.8" />
<path
   id="path25948"
   class="st20"
   d="M280.3,58.2c0,3.4-0.1,5.8-0.3,7.3l-11.6-0.1c0.2-2.6,0.3-5.5,0.3-8.6c0-1.7-0.1-2.9-0.3-3.6  c-0.4-1.4-1.2-2.1-2.5-2.1c-1.4,0-2.7,1.3-3.8,3.8l0.1,10.9l-10.8-0.3l-0.6-22.7l11.1,0.2l0.1,4c3.3-3.4,6.6-5.1,10.1-5.1  c3.7,0,6.1,2,7.3,5.9C280,49.8,280.3,53.3,280.3,58.2" />
<path
   id="path25950"
   class="st20"
   d="M316.3,39.7c0,4.2-1.7,7.4-5,9.5c-2.8,1.8-6.4,2.6-10.9,2.6c-0.7,0-1.3,0-1.7-0.1l1.6,13.4  L287,65.6l-1.4-38.1l14.2-0.2c5,0,8.8,0.8,11.5,2.3C314.6,31.7,316.3,35,316.3,39.7 M305.5,39.6c0-1.2-0.4-2.2-1.3-3.1  c-0.9-0.8-1.9-1.3-3.1-1.3s-2.2,0.4-3,1.3c-0.8,0.8-1.3,1.9-1.3,3.1c0,1.2,0.4,2.2,1.3,3c0.8,0.8,1.8,1.3,3,1.3s2.2-0.4,3.1-1.3  C305.1,41.8,305.5,40.8,305.5,39.6" />
<path
   id="path25952"
   class="st20"
   d="M348.8,64.8l-10,1.2l-0.5-3.2c-1.8,2.1-4.3,3.1-7.6,3.1c-8.4,0-12.6-2-12.6-6.1  c0-3,1.2-5.1,3.5-6.5c1.6-0.9,4.1-1.5,7.5-2c4.1-0.5,6.2-1.5,6.2-3.1c0-0.9-0.4-1.6-1.1-2.1s-1.4-0.7-2.3-0.7c-1.1,0-2,0.4-2.8,1.1  c-0.7,0.7-1.1,1.6-1.2,2.7h-9.4c0.1-1,0.4-2.2,1.1-3.4c2.3-4.2,6.7-6.3,13.3-6.3c10.6,0,15.9,3.7,15.9,11.2V64.8z M337.5,57.8  c0-1.1-0.5-1.9-1.5-2.5c-0.9-0.5-1.8-0.7-3-0.7c-1.1,0-2.1,0.2-3,0.7c-1,0.6-1.5,1.4-1.5,2.5c0,1,0.5,1.9,1.5,2.4  c0.8,0.5,1.8,0.7,3,0.7c1.1,0,2.1-0.2,3-0.7C337,59.6,337.5,58.8,337.5,57.8" />
<path
   id="path25954"
   class="st20"
   d="M384,64.9l-10.9,0.5l-0.1-1.9c-2.8,1.4-5.3,2.2-7.4,2.2c-3.8,0-6.9-1.4-9.3-4.1  c-2.2-2.6-3.3-5.9-3.3-9.8c0-3.5,1.1-6.4,3.4-8.6s5.2-3.3,8.7-3.3c2,0,4.1,0.5,6.3,1.6l-1.1-13.9l13.6-0.9L384,64.9z M373.3,52.6  c0-1.4-0.5-2.7-1.5-3.7s-2.3-1.5-3.7-1.5c-1.4,0-2.7,0.5-3.7,1.5s-1.5,2.3-1.5,3.7s0.5,2.7,1.5,3.7s2.3,1.5,3.7,1.5  c1.4,0,2.7-0.5,3.7-1.5S373.3,54,373.3,52.6" />
<path
   id="path25956"
   class="st25"
   d="M242.8,29.2C242.8,29.2,242.9,29.2,242.8,29.2C242.9,29.2,242.9,29.2,242.8,29.2L242.8,29.2z" />
<polygon
   id="polygon25958"
   class="st25"
   points="242.9,29.2 242.9,29.2 243.1,29.2 " />
<path
   id="path25960"
   class="st25"
   d="M245.1,29.5h0.2l0,0l0,0H245.1z" />
<g
   id="g25964">
	<path
   id="path25962"
   class="st20"
   d="M244.8,55.3l-11.3,0.6c-0.6,0-1.1-0.4-1.1-1l0,0c0-0.6,0.4-1.1,1-1.1l11.3-0.6   c0.6,0,1.1,0.4,1.1,1l0,0C245.9,54.8,245.4,55.3,244.8,55.3z" />
</g>
<g
   id="g25968">
	<path
   id="path25966"
   class="st20"
   d="M244.8,58.1l-11.3,0.6c-0.6,0-1.1-0.4-1.1-1l0,0c0-0.6,0.4-1.1,1-1.1l11.3-0.6   c0.6,0,1.1,0.4,1.1,1l0,0C245.8,57.5,245.4,58,244.8,58.1z" />
</g>
<g
   id="g25972">
	<path
   id="path25970"
   class="st20"
   d="M244.8,60.8l-11.3,0.6c-0.6,0-1.1-0.4-1.1-1l0,0c0-0.6,0.4-1.1,1-1.1l11.3-0.6   c0.6,0,1.1,0.4,1.1,1l0,0C245.9,60.3,245.4,60.8,244.8,60.8z" />
</g>
<path
   id="path25974"
   class="st20"
   d="M244.1,61.6c0.1,2.7-2,5-4.7,5.2c-2.7,0.1-5-2-5.2-4.7L244.1,61.6z" />
<path
   id="path25976"
   class="st25"
   d="M242,29L242,29L242,29L242,29z" />
<polygon
   id="polygon25978"
   class="st25"
   points="242,29 242,29 242.1,29 " />
<path
   id="path25980"
   class="st25"
   d="M243.6,29.3h0.2l0,0l0,0H243.6z" />
<line
   id="line25982"
   class="st26"
   x1="239.2"
   y1="14.8"
   x2="239.2"
   y2="10.3" />
<path
   id="path25984"
   class="st27"
   d="M255.3,30.9" />
<path
   id="path25986"
   class="st27"
   d="M217.1,31.7" />
<path
   id="path25988"
   class="st27"
   d="M223.3,30.9" />
<g
   id="g25996">
	<path
   id="path25990"
   class="st20"
   d="M237.3,36.4h-0.4c-0.9,0-1.5-0.1-1.8-0.2c-0.3-0.1-0.4-0.3-0.5-0.6c-0.1-0.2-0.1-0.5-0.1-0.8   v-1.4c0-0.5-0.1-0.8-0.3-1s-0.5-0.3-0.9-0.3c0,0,0,0-0.1,0h-0.1v-1.5h0.1c0.1,0,0.1,0,0.1,0c0.4,0,0.7-0.1,0.9-0.3s0.3-0.5,0.3-1   v-1.4c0-0.4,0-0.7,0.1-0.8c0.1-0.3,0.3-0.5,0.5-0.6c0.3-0.2,0.9-0.2,1.8-0.2h0.4v1.5c0,0,0,0-0.1,0H237c-0.3,0-0.5,0.1-0.6,0.2   s-0.2,0.3-0.2,0.7V30c0,0.5-0.1,0.8-0.2,1c-0.2,0.2-0.5,0.4-0.9,0.4c0.5,0.1,0.8,0.2,0.9,0.4c0.1,0.2,0.3,0.5,0.3,1V34   c0,0.3,0.1,0.6,0.2,0.7c0.1,0.1,0.3,0.2,0.6,0.2c0,0,0,0,0.1,0h0.1L237.3,36.4L237.3,36.4z" />
	<path
   id="path25992"
   class="st20"
   d="M240.3,30.1c0,0.3-0.1,0.5-0.3,0.7s-0.4,0.3-0.7,0.3s-0.5-0.1-0.7-0.3   c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7s0.4-0.3,0.7-0.3s0.5,0.1,0.7,0.3C240.1,29.6,240.3,29.9,240.3,30.1z M240.3,33.3   c0,0,0,0.1-0.1,0.3c-0.2,0.6-0.4,1-0.8,1.3h-1c0.3-0.2,0.5-0.4,0.7-0.7c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.3-0.4-0.3-0.6   c0-0.3,0.1-0.5,0.3-0.7s0.4-0.3,0.7-0.3s0.5,0.1,0.7,0.3C240.2,32.8,240.3,33,240.3,33.3z" />
	<path
   id="path25994"
   class="st20"
   d="M245.4,32h-0.1c-0.1,0-0.1,0-0.1,0c-0.4,0-0.7,0.1-0.9,0.3s-0.3,0.5-0.3,1v1.4   c0,0.4,0,0.7-0.1,0.9c-0.1,0.3-0.3,0.5-0.5,0.6c-0.3,0.2-0.9,0.2-1.7,0.2h-0.5v-1.5h0.1c0.1,0,0.1,0,0.1,0c0.3,0,0.5-0.1,0.6-0.2   c0.1-0.1,0.2-0.3,0.2-0.7v-1.3c0-0.5,0.1-0.8,0.3-1s0.5-0.3,0.9-0.4c-0.5-0.1-0.8-0.2-0.9-0.4c-0.2-0.2-0.2-0.5-0.2-1v-1.3   c0-0.4-0.1-0.6-0.2-0.7c-0.1-0.1-0.3-0.2-0.6-0.2h-0.1c-0.1,0-0.1,0-0.1,0v-1.5h0.4c0.9,0,1.5,0.1,1.8,0.2s0.4,0.3,0.5,0.6   c0.1,0.2,0.1,0.5,0.1,0.9v1.4c0,0.5,0.1,0.8,0.3,1s0.5,0.3,0.9,0.3c0,0,0,0,0.1,0h0.1V32H245.4z" />
</g>
<line
   id="line25998"
   class="st26"
   x1="223.4"
   y1="30.7"
   x2="219"
   y2="31.3" />
<line
   id="line26000"
   class="st26"
   x1="259.7"
   y1="31.4"
   x2="255.3"
   y2="30.9" />
<line
   id="line26002"
   class="st26"
   x1="228"
   y1="19.6"
   x2="224.8"
   y2="16.5" />
<line
   id="line26004"
   class="st26"
   x1="250.5"
   y1="19.7"
   x2="253.6"
   y2="16.5" />
<g
   id="g26008">
	<path
   id="path26006"
   class="st20"
   d="M104.2,337.9c0,1.6-0.4,3.2-1.3,4.9c-2.4,4.7-6.6,7-12.5,7c-8.2,0-13.5-3-15.9-9.1   c-0.8-2-1.2-4-1.2-6.1v-0.4l10.6-0.2c0.2,1.1,0.3,2.1,0.3,3c0,0.7,0.7,1.4,2,2.2c1.2,0.6,2.2,1,3,1c2.3,0,3.5-1,3.5-2.9   c0-1.5-1.6-3-4.9-4.7c-5.5-2.9-8.6-4.5-9.1-4.9c-3.3-2.3-4.9-4.8-4.9-7.7c0-3.9,1.4-6.7,4.1-8.6c2.3-1.6,5.6-2.4,9.7-2.4   c7.9,0,13.1,2.9,15.5,8.7c0.7,1.6,1,3,1.1,4.3l-12.4,0.6c0-1.1-0.4-2-1.1-2.7s-1.6-1.1-2.7-1.1c-0.9,0-1.6,0.2-2.2,0.7   s-0.9,1.2-0.9,2c0,1.5,1.1,2.9,3.2,4c0.3,0.1,2,0.8,5.2,2.1C100.6,330.4,104.2,333.9,104.2,337.9z" />
</g>
<g
   id="g26012">
	<path
   id="path26010"
   class="st20"
   d="M206.8,324.9l-8.7,0.2l1.4,23.6l-13.1,0.2l0.2-23.5l-8.4,0.2l-1.5-11.2l30.2-1.5L206.8,324.9   L206.8,324.9z" />
</g>
<g
   id="g26016">
	<path
   id="path26014"
   class="st20"
   d="M317.7,349.6l-25.5,0.1l-0.8-36.6l24.4-1.5l0.4,9.2l-13.5,0.7l0.2,5.4l8.6-0.4l-0.2,6   l-8.2,0.5l0.2,4.1l14.4-0.8V349.6z" />
</g>
<g
   id="g26020">
	<path
   id="path26018"
   class="st20"
   d="M427.9,349.3l-13.4,0.4l0.4-18l-6.1,12.3l-6.5-12.3l1,17.4l-12.7,0.8v-35.7l11.6-1.2l5.8,16.3   l6.8-15.2l9.9-0.2L427.9,349.3z" />
</g>
<linearGradient
   id="circle26031_00000041276773533815216420000007297168900753734824_"
   gradientUnits="userSpaceOnUse"
   x1="431.0719"
   y1="368.4"
   x2="481.8374"
   y2="368.4"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop258" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop260" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop262" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop264" />
</linearGradient>
<circle
   id="circle26031"
   style="fill:#FCFCFC;stroke:url(#circle26031_00000041276773533815216420000007297168900753734824_);stroke-width:4.2562;stroke-miterlimit:10;"
   cx="456.5"
   cy="39.6"
   r="23.3" />
<linearGradient
   id="circle26042_00000032621163134286842090000010152564497878179211_"
   gradientUnits="userSpaceOnUse"
   x1="18.0719"
   y1="368.1"
   x2="68.8374"
   y2="368.1"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop268" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop270" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop272" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop274" />
</linearGradient>
<circle
   id="circle26042"
   style="fill:#AF740B;stroke:url(#circle26042_00000032621163134286842090000010152564497878179211_);stroke-width:4.2562;stroke-miterlimit:10;"
   cx="43.5"
   cy="39.9"
   r="23.3" />
<path
   id="LED"
   class="st30"
   d="M55.9,45.8H31c-2.7,0-4.8-2.2-4.8-4.8l0,0c0-2.7,2.2-4.8,4.8-4.8h24.8c2.7,0,4.8,2.2,4.8,4.8l0,0  C60.7,43.7,58.5,45.8,55.9,45.8z" />
<circle
   id="circle26046"
   class="st20"
   cx="40.4"
   cy="341.6"
   r="19.3" />
<circle
   id="circle26048"
   class="st20"
   cx="139"
   cy="340.8"
   r="19.3" />
<circle
   id="circle26050"
   class="st20"
   cx="249.4"
   cy="340.8"
   r="19.3" />
<circle
   id="circle26052"
   class="st20"
   cx="359.8"
   cy="340.8"
   r="19.3" />
<circle
   id="circle26054"
   class="st20"
   cx="457.8"
   cy="341.8"
   r="19.3" />
<linearGradient
   id="path26065_00000085944260733535863670000009582284018731036087_"
   gradientUnits="userSpaceOnUse"
   x1="40.2"
   y1="2.1"
   x2="40.2"
   y2="90.5"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop284" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop286" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop288" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop290" />
</linearGradient>
<path
   id="path26065"
   style="fill:url(#path26065_00000085944260733535863670000009582284018731036087_);"
   d="M40.3,317.5  c-13.1,0.1-23.8,10.6-23.8,23.7c0,0.4-0.1,0.9-0.1,1.3v60.7c1.9,0.8,3.9,1.4,5.9,1.9v-0.2c0-4.1,3.3-7.4,7.4-7.4h21  c4.1,0,7.4,3.3,7.4,7.4v0.9v0.1h5.6v-64.7H64v-0.1C64,328.1,53.4,317.5,40.3,317.5z M40.5,360.9c-10.6,0-19.3-8.7-19.3-19.3  c0-10.7,8.7-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C59.8,352.3,51.2,360.9,40.5,360.9z" />
<g
   id="g26069">
	<path
   id="path26067"
   d="M40.6,379.4c1.4,0,2.5,0.5,3.3,1.5c0.9,1.2,1.4,3.1,1.4,5.8c0,2.7-0.5,4.7-1.4,5.8c-0.8,1-1.9,1.5-3.2,1.5   c-1.4,0-2.5-0.5-3.4-1.6s-1.3-3-1.3-5.7s0.5-4.6,1.4-5.8C38.1,379.9,39.2,379.4,40.6,379.4z M40.6,381.6c-0.3,0-0.6,0.1-0.9,0.3   s-0.5,0.6-0.6,1.1c-0.2,0.7-0.3,1.9-0.3,3.6s0.1,2.8,0.3,3.5s0.4,1,0.6,1.3s0.6,0.3,0.9,0.3s0.6-0.1,0.9-0.3s0.5-0.6,0.6-1.1   c0.2-0.7,0.3-1.9,0.3-3.6s-0.1-2.8-0.3-3.5s-0.4-1-0.6-1.3S40.9,381.6,40.6,381.6z" />
</g>
<linearGradient
   id="path26080_00000031178460018694427050000007115252852510153111_"
   gradientUnits="userSpaceOnUse"
   x1="249"
   y1="2"
   x2="249"
   y2="90.7"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop296" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop298" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop300" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop302" />
</linearGradient>
<path
   id="path26080"
   style="fill:url(#path26080_00000031178460018694427050000007115252852510153111_);"
   d="M249,317.3  c-12.8,0-22.1,10.3-23.1,23.1V406h5.2v-0.5c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.5h5.2v-65.6  C272.1,327.7,261.8,317.3,249,317.3z M249.4,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3  C268.7,351.5,260.1,360.1,249.4,360.1z" />
<linearGradient
   id="path26091_00000039093919890937457560000013376885843621800881_"
   gradientUnits="userSpaceOnUse"
   x1="139.1"
   y1="2"
   x2="139.1"
   y2="90.7"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop306" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop308" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop310" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop312" />
</linearGradient>
<path
   id="path26091"
   style="fill:url(#path26091_00000039093919890937457560000013376885843621800881_);"
   d="M139.1,317.3  c-12.8,0-22.1,10.3-23.1,23.1V406h5v-0.5c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.5h5.4v-65.6  C162.2,327.7,151.9,317.3,139.1,317.3z M139.3,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3s19.3,8.7,19.3,19.3  C158.6,351.5,150,360.1,139.3,360.1z" />
<g
   id="g26095">
	<path
   id="path26093"
   d="M140.5,394h-2.7v-10.3c-1,0.9-2.2,1.6-3.5,2.1v-2.5c0.7-0.2,1.5-0.7,2.3-1.3s1.4-1.4,1.7-2.3h2.2V394z" />
</g>
<linearGradient
   id="path26106_00000177458175182505314590000005065186238959006399_"
   gradientUnits="userSpaceOnUse"
   x1="359.9"
   y1="2"
   x2="359.9"
   y2="90.7"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop318" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop320" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop322" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop324" />
</linearGradient>
<path
   id="path26106"
   style="fill:url(#path26106_00000177458175182505314590000005065186238959006399_);"
   d="M359.9,317.3  c-12.8,0-22.1,10.3-23.1,23.1V406h5.3v-0.5c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.5h5.1v-65.6  C383,327.7,372.7,317.3,359.9,317.3z M360,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3  C379.3,351.5,370.7,360.1,360,360.1z" />
<g
   id="g26110">
	<path
   id="path26108"
   d="M253.1,391.5v2.5h-9.6c0.1-1,0.4-1.9,0.9-2.7s1.5-2,3.1-3.4c1.2-1.2,2-1.9,2.3-2.3c0.4-0.6,0.6-1.1,0.6-1.7   s-0.2-1.1-0.5-1.4s-0.8-0.5-1.4-0.5c-0.6,0-1,0.2-1.4,0.5s-0.5,0.9-0.6,1.7l-2.7-0.3c0.2-1.5,0.7-2.6,1.5-3.3s1.9-1,3.2-1   c1.4,0,2.5,0.4,3.3,1.1c0.8,0.8,1.2,1.7,1.2,2.8c0,0.6-0.1,1.3-0.3,1.8c-0.2,0.6-0.6,1.2-1.1,1.8c-0.3,0.4-0.9,1-1.8,1.8   c-0.9,0.8-1.4,1.3-1.6,1.6s-0.4,0.5-0.6,0.8h5.5V391.5z" />
</g>
<linearGradient
   id="path26121_00000171711156512198276540000000641668459849732246_"
   gradientUnits="userSpaceOnUse"
   x1="458"
   y1="2"
   x2="458"
   y2="90.4"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop330" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop332" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop334" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop336" />
</linearGradient>
<path
   id="path26121"
   style="fill:url(#path26121_00000171711156512198276540000000641668459849732246_);"
   d="M458,317.6  c-13,0-23.6,10.6-23.6,23.6V406h5.5c0-0.2,0-0.4,0-0.5v-0.9c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.6  c2-0.5,3.9-1.1,5.9-1.9v-62C481.6,328.1,471,317.6,458,317.6z M457.8,360.9c-10.7,0-19.3-8.6-19.3-19.3s8.6-19.3,19.3-19.3  c10.7,0,19.3,8.7,19.3,19.3C477.1,352.2,468.4,360.9,457.8,360.9z" />
<g
   id="g26127">
	<path
   id="path26123"
   d="M348.3,390.2l2.7-0.3c0.1,0.7,0.3,1.2,0.7,1.6s0.8,0.5,1.3,0.5c0.6,0,1-0.2,1.4-0.6s0.6-1,0.6-1.7   s-0.2-1.2-0.6-1.6s-0.8-0.6-1.4-0.6c-0.4,0-0.8,0.1-1.3,0.2l0.3-2.2c0.7,0,1.3-0.1,1.7-0.5s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2   c-0.3-0.3-0.7-0.4-1.1-0.4c-0.5,0-0.9,0.2-1.2,0.5s-0.5,0.8-0.6,1.4l-2.5-0.4c0.2-0.9,0.4-1.6,0.8-2.1s0.8-0.9,1.5-1.2   s1.3-0.4,2.1-0.4c1.3,0,2.4,0.4,3.2,1.3c0.7,0.7,1,1.5,1,2.4c0,1.3-0.7,2.3-2.1,3c0.8,0.2,1.5,0.6,2,1.2s0.7,1.4,0.7,2.2   c0,1.3-0.5,2.3-1.4,3.2s-2.1,1.3-3.4,1.3s-2.4-0.4-3.2-1.1C348.9,392.4,348.4,391.4,348.3,390.2z" />
	<path
   id="path26125"
   d="M363.7,394l-5.1-14.3h3.1l3.6,10.6l3.5-10.6h3.1l-5.1,14.3H363.7z" />
</g>
<g
   id="g26135">
	<path
   id="path26129"
   d="M444.5,388.5v-2.4h6.2v5.7c-0.6,0.6-1.5,1.1-2.6,1.5s-2.3,0.7-3.5,0.7c-1.5,0-2.8-0.3-3.9-0.9   s-2-1.5-2.5-2.7s-0.8-2.4-0.8-3.8c0-1.5,0.3-2.8,0.9-4s1.5-2,2.7-2.7c0.9-0.5,2.1-0.7,3.4-0.7c1.8,0,3.2,0.4,4.2,1.1   s1.6,1.8,1.9,3.1l-2.9,0.5c-0.2-0.7-0.6-1.3-1.1-1.7s-1.3-0.6-2.1-0.6c-1.3,0-2.3,0.4-3,1.2s-1.1,2-1.1,3.6c0,1.7,0.4,3,1.1,3.8   s1.7,1.3,3,1.3c0.6,0,1.2-0.1,1.8-0.4s1.1-0.5,1.6-0.9v-1.8L444.5,388.5L444.5,388.5z" />
	<path
   id="path26131"
   d="M453.4,393.7v-14.3h2.8l5.9,9.6v-9.6h2.7v14.3h-2.9l-5.8-9.3v9.3H453.4z" />
	<path
   id="path26133"
   d="M467.8,379.4h5.3c1.2,0,2.1,0.1,2.7,0.3c0.8,0.2,1.6,0.7,2.2,1.3s1.1,1.4,1.4,2.3s0.5,2,0.5,3.4   c0,1.2-0.1,2.2-0.4,3c-0.4,1-0.9,1.9-1.5,2.5c-0.5,0.5-1.2,0.9-2,1.1c-0.6,0.2-1.5,0.3-2.6,0.3H468v-14.2H467.8z M470.7,381.8v9.5   h2.2c0.8,0,1.4,0,1.7-0.1c0.5-0.1,0.9-0.3,1.2-0.6s0.6-0.7,0.8-1.4s0.3-1.5,0.3-2.6s-0.1-2-0.3-2.5s-0.5-1.1-0.8-1.4   s-0.8-0.6-1.3-0.7c-0.4-0.1-1.2-0.1-2.4-0.1L470.7,381.8L470.7,381.8z" />
</g>
<rect
   id="rect26137"
   x="45.1"
   y="172"
   class="st36"
   width="22.4"
   height="72.8" />
<path
   id="path26139"
   class="st37"
   d="M58,241.9h-2.9c-5.2,0-9.4-4.2-9.4-9.4v-48.2c0-5.2,4.2-9.4,9.4-9.4H58c5.2,0,9.4,4.2,9.4,9.4  v48.2C67.4,237.7,63.2,241.9,58,241.9z" />
<rect
   id="rect26141"
   x="50.4"
   y="177.8"
   width="12.6"
   height="61.7" />
<path
   id="path26143"
   d="M73.2,236.2H39.7c-6.1,0-11.1-5-11.1-11.1v-33.4c0-6.1,5-11.1,11.1-11.1h33.4c6.1,0,11.1,5,11.1,11.1v33.4  C84.3,231.2,79.3,236.2,73.2,236.2z" />
<path
   id="path26145"
   class="st38"
   d="M68.9,232.2H44c-6.5,0-11.7-5.3-11.7-11.7v-24.9c0-6.5,5.3-11.7,11.7-11.7h24.8  c6.5,0,11.7,5.3,11.7,11.7v24.9C80.6,227,75.3,232.2,68.9,232.2z" />
<ellipse
   id="BUTTON_A"
   class="st39"
   cx="56.4"
   cy="207.2"
   rx="21.2"
   ry="21.2" />
<rect
   id="rect26153"
   x="434.1"
   y="171.7"
   class="st36"
   width="22.4"
   height="72.8" />
<path
   id="path26155"
   class="st37"
   d="M447,241.7h-2.9c-5.2,0-9.4-4.2-9.4-9.4v-48.2c0-5.2,4.2-9.4,9.4-9.4h2.9  c5.2,0,9.4,4.2,9.4,9.4v48.2C456.5,237.5,452.2,241.7,447,241.7z" />
<rect
   id="rect26157"
   x="439.5"
   y="177.5"
   width="12.6"
   height="61.7" />
<path
   id="path26159"
   d="M462.2,236h-33.4c-6.1,0-11.1-5-11.1-11.1v-33.4c0-6.1,5-11.1,11.1-11.1h33.4c6.1,0,11.1,5,11.1,11.1v33.4  C473.3,231,468.3,236,462.2,236z" />
<path
   id="path26161"
   class="st38"
   d="M457.9,232h-24.8c-6.5,0-11.7-5.3-11.7-11.7v-24.9c0-6.5,5.3-11.7,11.7-11.7h24.8  c6.5,0,11.7,5.3,11.7,11.7v24.9C469.6,226.7,464.4,232,457.9,232z" />
<ellipse
   id="BUTTON_B"
   class="st39"
   cx="445.5"
   cy="207"
   rx="21.2"
   ry="21.2" />
<linearGradient
   id="circle26178_00000067953745860036820580000011806216391709784733_"
   gradientUnits="userSpaceOnUse"
   x1="4.7304"
   y1="108.7"
   x2="19.3764"
   y2="108.7"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop359" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop361" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop363" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop365" />
</linearGradient>
<circle
   id="circle26178"
   style="fill:url(#circle26178_00000067953745860036820580000011806216391709784733_);stroke:#9E6407;stroke-width:3.7653;stroke-miterlimit:10;"
   cx="12.1"
   cy="299.3"
   r="7.3" />
<linearGradient
   id="circle26189_00000129904340494184524480000011571472474862025655_"
   gradientUnits="userSpaceOnUse"
   x1="475.8"
   y1="105"
   x2="490.446"
   y2="105"
   gradientTransform="matrix(1 0 0 -1 0 408)">
	<stop
   offset="0"
   style="stop-color:#D4AF37"
   id="stop369" />
	<stop
   offset="1"
   style="stop-color:#D4AF37"
   id="stop371" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop373" />
	<stop
   offset="1"
   style="stop-color:#FF5500"
   id="stop375" />
</linearGradient>
<circle
   id="circle26189"
   style="fill:url(#circle26189_00000129904340494184524480000011571472474862025655_);stroke:#9E6407;stroke-width:3.7653;stroke-miterlimit:10;"
   cx="483.1"
   cy="303"
   r="7.3" />
</svg>
`;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.mkBoardView = (opts) => {
            return new visuals.BrainPadBoardSvg({
                runtime: pxsim.runtime,
                theme: visuals.randomTheme(),
                disableTilt: false,
                wireframe: opts.wireframe,
            });
        };
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        class AnalogPinControl {
            constructor(parent, defs, id, name) {
                this.parent = parent;
                this.defs = defs;
                this.id = id;
                this.pin = pxsim.board().edgeConnectorState.getPin(this.id);
                // Init the button events
                this.outerElement = parent.element.getElementById(name);
                pxsim.U.addClass(this.outerElement, "sim-pin-touch");
                this.addButtonEvents();
                if (this.pin.used) {
                    pxsim.accessibility.makeFocusable(this.outerElement);
                    pxsim.accessibility.setAria(this.outerElement, "button", this.outerElement.firstChild.textContent);
                }
                // Init the gradient controls
                // const gid = `gradient-${CPlayPinName[id]}-level`;
                // this.innerCircle = parent.element.getElementById("PIN_CONNECTOR_" + CPlayPinName[id]) as SVGCircleElement;
                // this.gradient = svg.linearGradient(this.defs, gid);
                // this.innerCircle.setAttribute("fill", `url(#${gid})`);
                // this.innerCircle.setAttribute("class", "sim-light-level-button")
                // this.addLevelControlEvents()
                this.updateTheme();
            }
            updateTheme() {
                const theme = this.parent.props.theme;
                pxsim.svg.setGradientColors(this.gradient, theme.lightLevelOff, 'darkorange');
            }
            updateValue() {
                const value = this.pin.value;
                if (value === this.currentValue) {
                    return;
                }
                this.currentValue = value;
                // svg.setGradientValue(this.gradient, 100 - Math.min(100, Math.max(0, Math.floor(value * 100 / 1023))) + '%')
                // if (this.innerCircle.childNodes.length) {
                //    this.innerCircle.removeChild(this.innerCircle.childNodes[0])
                // }
                pxsim.svg.title(this.outerElement, value.toString());
            }
            addButtonEvents() {
                pxsim.pointerEvents.down.forEach(evid => this.outerElement.addEventListener(evid, ev => {
                    this.pin.touched = true;
                    pxsim.U.addClass(this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(this.id).setPressed(true);
                }));
                this.outerElement.addEventListener(pxsim.pointerEvents.leave, ev => {
                    this.pin.touched = false;
                    pxsim.U.removeClass(this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(this.id).setPressed(false);
                });
                this.outerElement.addEventListener(pxsim.pointerEvents.up, ev => {
                    this.pin.touched = false;
                    pxsim.U.removeClass(this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(this.id).setPressed(false);
                });
                pxsim.accessibility.enableKeyboardInteraction(this.outerElement, () => {
                    this.pin.touched = true;
                    pxsim.U.addClass(this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(this.id).setPressed(true);
                }, () => {
                    this.pin.touched = false;
                    pxsim.U.removeClass(this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(this.id).setPressed(false);
                });
            }
            addLevelControlEvents() {
                const cy = parseFloat(this.innerCircle.getAttribute("cy"));
                const r = parseFloat(this.innerCircle.getAttribute("r"));
                const pt = this.parent.element.createSVGPoint();
                pxsim.svg.buttonEvents(this.innerCircle, (ev) => {
                    const pos = pxsim.svg.cursorPoint(pt, this.parent.element, ev);
                    const rs = r / 2;
                    const level = Math.max(0, Math.min(1023, Math.floor((1 - (pos.y - (cy - rs)) / (2 * rs)) * 1023)));
                    if (level != this.pin.value) {
                        this.pin.value = level;
                        this.updateValue();
                    }
                }, ev => { }, ev => { });
            }
        }
        visuals.AnalogPinControl = AnalogPinControl;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
