const initRegisterArray: number[] = [
    0xef, 0x00, 0x32, 0x29, 0x33, 0x01, 0x34, 0x00, 0x35, 0x01, 0x36, 0x00, 0x37,
    0x07, 0x38, 0x17, 0x39, 0x06, 0x3a, 0x12, 0x3f, 0x00, 0x40, 0x02, 0x41, 0xff,
    0x42, 0x01, 0x46, 0x2d, 0x47, 0x0f, 0x48, 0x3c, 0x49, 0x00, 0x4a, 0x1e, 0x4b,
    0x00, 0x4c, 0x20, 0x4d, 0x00, 0x4e, 0x1a, 0x4f, 0x14, 0x50, 0x00, 0x51, 0x10,
    0x52, 0x00, 0x5c, 0x02, 0x5d, 0x00, 0x5e, 0x10, 0x5f, 0x3f, 0x60, 0x27, 0x61,
    0x28, 0x62, 0x00, 0x63, 0x03, 0x64, 0xf7, 0x65, 0x03, 0x66, 0xd9, 0x67, 0x03,
    0x68, 0x01, 0x69, 0xc8, 0x6a, 0x40, 0x6d, 0x04, 0x6e, 0x00, 0x6f, 0x00, 0x70,
    0x80, 0x71, 0x00, 0x72, 0x00, 0x73, 0x00, 0x74, 0xf0, 0x75, 0x00, 0x80, 0x42,
    0x81, 0x44, 0x82, 0x04, 0x83, 0x20, 0x84, 0x20, 0x85, 0x00, 0x86, 0x10, 0x87,
    0x00, 0x88, 0x05, 0x89, 0x18, 0x8a, 0x10, 0x8b, 0x01, 0x8c, 0x37, 0x8d, 0x00,
    0x8e, 0xf0, 0x8f, 0x81, 0x90, 0x06, 0x91, 0x06, 0x92, 0x1e, 0x93, 0x0d, 0x94,
    0x0a, 0x95, 0x0a, 0x96, 0x0c, 0x97, 0x05, 0x98, 0x0a, 0x99, 0x41, 0x9a, 0x14,
    0x9b, 0x0a, 0x9c, 0x3f, 0x9d, 0x33, 0x9e, 0xae, 0x9f, 0xf9, 0xa0, 0x48, 0xa1,
    0x13, 0xa2, 0x10, 0xa3, 0x08, 0xa4, 0x30, 0xa5, 0x19, 0xa6, 0x10, 0xa7, 0x08,
    0xa8, 0x24, 0xa9, 0x04, 0xaa, 0x1e, 0xab, 0x1e, 0xcc, 0x19, 0xcd, 0x0b, 0xce,
    0x13, 0xcf, 0x64, 0xd0, 0x21, 0xd1, 0x0f, 0xd2, 0x88, 0xe0, 0x01, 0xe1, 0x04,
    0xe2, 0x41, 0xe3, 0xd6, 0xe4, 0x00, 0xe5, 0x0c, 0xe6, 0x0a, 0xe7, 0x00, 0xe8,
    0x00, 0xe9, 0x00, 0xee, 0x07, 0xef, 0x01, 0x00, 0x1e, 0x01, 0x1e, 0x02, 0x0f,
    0x03, 0x10, 0x04, 0x02, 0x05, 0x00, 0x06, 0xb0, 0x07, 0x04, 0x08, 0x0d, 0x09,
    0x0e, 0x0a, 0x9c, 0x0b, 0x04, 0x0c, 0x05, 0x0d, 0x0f, 0x0e, 0x02, 0x0f, 0x12,
    0x10, 0x02, 0x11, 0x02, 0x12, 0x00, 0x13, 0x01, 0x14, 0x05, 0x15, 0x07, 0x16,
    0x05, 0x17, 0x07, 0x18, 0x01, 0x19, 0x04, 0x1a, 0x05, 0x1b, 0x0c, 0x1c, 0x2a,
    0x1d, 0x01, 0x1e, 0x00, 0x21, 0x00, 0x22, 0x00, 0x23, 0x00, 0x25, 0x01, 0x26,
    0x00, 0x27, 0x39, 0x28, 0x7f, 0x29, 0x08, 0x30, 0x03, 0x31, 0x00, 0x32, 0x1a,
    0x33, 0x1a, 0x34, 0x07, 0x35, 0x07, 0x36, 0x01, 0x37, 0xff, 0x38, 0x36, 0x39,
    0x07, 0x3a, 0x00, 0x3e, 0xff, 0x3f, 0x00, 0x40, 0x77, 0x41, 0x40, 0x42, 0x00,
    0x43, 0x30, 0x44, 0xa0, 0x45, 0x5c, 0x46, 0x00, 0x47, 0x00, 0x48, 0x58, 0x4a,
    0x1e, 0x4b, 0x1e, 0x4c, 0x00, 0x4d, 0x00, 0x4e, 0xa0, 0x4f, 0x80, 0x50, 0x00,
    0x51, 0x00, 0x52, 0x00, 0x53, 0x00, 0x54, 0x00, 0x57, 0x80, 0x59, 0x10, 0x5a,
    0x08, 0x5b, 0x94, 0x5c, 0xe8, 0x5d, 0x08, 0x5e, 0x3d, 0x5f, 0x99, 0x60, 0x45,
    0x61, 0x40, 0x63, 0x2d, 0x64, 0x02, 0x65, 0x96, 0x66, 0x00, 0x67, 0x97, 0x68,
    0x01, 0x69, 0xcd, 0x6a, 0x01, 0x6b, 0xb0, 0x6c, 0x04, 0x6d, 0x2c, 0x6e, 0x01,
    0x6f, 0x32, 0x71, 0x00, 0x72, 0x01, 0x73, 0x35, 0x74, 0x00, 0x75, 0x33, 0x76,
    0x31, 0x77, 0x01, 0x7c, 0x84, 0x7d, 0x03, 0x7e, 0x01,
];

let TubeTab: number[] = [
    0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07, 0x7f, 0x6f, 0x77, 0x7c, 0x39,
    0x5e, 0x79, 0x71,
];

/**
 * Grove Gestures
 */
enum GroveGesture {
    //% block=None
    None = 0,
    //% block=Right
    Right = 1,
    //% block=Left
    Left = 2,
    //% block=Up
    Up = 3,
    //% block=Down
    Down = 4,
    //% block=Forward
    Forward = 5,
    //% block=Backward
    Backward = 6,
    //% block=Clockwise
    Clockwise = 7,
    //% block=Anticlockwise
    Anticlockwise = 8,
    //% block=Wave
    Wave = 9,
}

enum GroveJoystickKey {
    //% block="None"
    None = 0,
    //% block="Right"
    Right = 1,
    //% block="Left"
    Left = 2,
    //% block="Up"
    Up = 3,
    //% block="Down"
    Down = 4,
    //% block="Upper left"
    UL = 5,
    //% block="Upper right"
    UR = 6,
    //% block="Lower left"
    LL = 7,
    //% block="Lower right"
    LR = 8,
    //% block="press"
    Press = 9,
}

/**
 * Functions to operate Grove module.
 */
//% weight=10 color=#9F79EE icon="\uf1b3" block="Grove"
//% groups='["4-Digit","Ultrasonic","Gesture","Thumbjoystick","UartWiFi"]'
namespace grove {
    /**
    *
    */
    export class PAJ7620 {
        private paj7620WriteReg(addr: number, cmd: number) {
            let buf: Buffer = pins.createBuffer(2);

            buf[0] = addr;
            buf[1] = cmd;

            pins.i2cWriteBuffer(0x73, buf, false);
        }

        private paj7620ReadReg(addr: number): number {
            let buf: Buffer = pins.createBuffer(1);

            buf[0] = addr;

            pins.i2cWriteBuffer(0x73, buf, false);

            buf = pins.i2cReadBuffer(0x73, 1, false);

            return buf[0];
        }

        private paj7620SelectBank(bank: number) {
            if (bank == 0) this.paj7620WriteReg(0xef, 0);
            else if (bank == 1) this.paj7620WriteReg(0xef, 1);
        }

        private paj7620Init() {
            let temp = 0;

            this.paj7620SelectBank(0);

            temp = this.paj7620ReadReg(0);
            if (temp == 0x20) {
                for (let i = 0; i < 438; i += 2) {
                    this.paj7620WriteReg(initRegisterArray[i], initRegisterArray[i + 1]);
                }
            }

            this.paj7620SelectBank(0);
        }

        /**
         * Create a new driver of Grove - Gesture
         */
        init() {
            this.paj7620Init();
            basic.pause(200);
        }

        /**
         * Detect and recognize the gestures from Grove - Gesture
         */

        read(): number {
            let data = 0,
                result = 0;

            data = this.paj7620ReadReg(0x43);
            switch (data) {
                case 0x01:
                    result = GroveGesture.Right;
                    break;

                case 0x02:
                    result = GroveGesture.Left;
                    break;

                case 0x04:
                    result = GroveGesture.Up;
                    break;

                case 0x08:
                    result = GroveGesture.Down;
                    break;

                case 0x10:
                    result = GroveGesture.Forward;
                    break;

                case 0x20:
                    result = GroveGesture.Backward;
                    break;

                case 0x40:
                    result = GroveGesture.Clockwise;
                    break;

                case 0x80:
                    result = GroveGesture.Anticlockwise;
                    break;

                default:
                    data = this.paj7620ReadReg(0x44);
                    if (data == 0x01) result = GroveGesture.Wave;
                    break;
            }

            return result;
        }
    }

    /**
       *
       */
    export class TM1637 {
        clkPin: DigitalPin;
        dataPin: DigitalPin;
        brightnessLevel: number;
        pointFlag: boolean;
        buf: Buffer;

        private writeByte(wrData: number) {
            for (let i = 0; i < 8; i++) {
                pins.digitalWritePin(this.clkPin, 0);
                if (wrData & 0x01) pins.digitalWritePin(this.dataPin, 1);
                else pins.digitalWritePin(this.dataPin, 0);
                wrData >>= 1;
                pins.digitalWritePin(this.clkPin, 1);
            }

            pins.digitalWritePin(this.clkPin, 0); // Wait for ACK
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.clkPin, 1);
        }

        private start() {
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 0);
        }

        private stop() {
            pins.digitalWritePin(this.clkPin, 0);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
        }

        private coding(dispData: number): number {
            let pointData = 0;

            if (this.pointFlag == true) pointData = 0x80;
            else if (this.pointFlag == false) pointData = 0;

            if (dispData == 0x7f) dispData = 0x00 + pointData;
            else dispData = TubeTab[dispData] + pointData;

            return dispData;
        }

        /**
         * Show a 4 digits number on display
         * @param dispData value of number
         */

        //% blockId=grove_tm1637_display_number block="%4Digit|show number|%dispData"
        //% group="4-Digit"
        show(dispData: number) {
            let compare_01: number = dispData % 100;
            let compare_001: number = dispData % 1000;

            if (dispData < 10) {
                this.bit(dispData, 3);
                this.bit(0x7f, 2);
                this.bit(0x7f, 1);
                this.bit(0x7f, 0);
            } else if (dispData < 100) {
                this.bit(dispData % 10, 3);
                if (dispData > 90) {
                    this.bit(9, 2);
                } else {
                    this.bit(Math.floor(dispData / 10) % 10, 2);
                }

                this.bit(0x7f, 1);
                this.bit(0x7f, 0);
            } else if (dispData < 1000) {
                this.bit(dispData % 10, 3);
                if (compare_01 > 90) {
                    this.bit(9, 2);
                } else {
                    this.bit(Math.floor(dispData / 10) % 10, 2);
                }
                if (compare_001 > 900) {
                    this.bit(9, 1);
                } else {
                    this.bit(Math.floor(dispData / 100) % 10, 1);
                }
                this.bit(0x7f, 0);
            } else if (dispData < 10000) {
                this.bit(dispData % 10, 3);
                if (compare_01 > 90) {
                    this.bit(9, 2);
                } else {
                    this.bit(Math.floor(dispData / 10) % 10, 2);
                }
                if (compare_001 > 900) {
                    this.bit(9, 1);
                } else {
                    this.bit(Math.floor(dispData / 100) % 10, 1);
                }
                if (dispData > 9000) {
                    this.bit(9, 0);
                } else {
                    this.bit(Math.floor(dispData / 1000) % 10, 0);
                }
            } else {
                this.bit(9, 3);
                this.bit(9, 2);
                this.bit(9, 1);
                this.bit(9, 0);
            }
        }

        /**
         * Set the brightness level of display at from 0 to 7
         * @param level value of brightness light level
         */
        //% blockId=grove_tm1637_set_display_level block="%4Digit|brightness level to|%level"
        //% level.min=0 level.max=7
        //% group="4-Digit"
        set(level: number) {
            this.brightnessLevel = level;

            this.bit(this.buf[0], 0x00);
            this.bit(this.buf[1], 0x01);
            this.bit(this.buf[2], 0x02);
            this.bit(this.buf[3], 0x03);
        }

        /**
         * Show a single number from 0 to 9 at a specified digit of Grove - 4-Digit Display
         * @param dispData value of number
         * @param bitAddr value of bit number
         */
        //% blockId=grove_tm1637_display_bit block="%4Digit|show single number|%dispData|at digit|%bitAddr"
        //% dispData.min=0 dispData.max=9
        //% bitAddr.min=0 bitAddr.max=3
        //% group="4-Digit"
        bit(dispData: number, bitAddr: number) {
            if (dispData == 0x7f || (dispData <= 9 && bitAddr <= 3)) {
                let segData = 0;

                segData = this.coding(dispData);
                this.start();
                this.writeByte(0x44);
                this.stop();
                this.start();
                this.writeByte(bitAddr | 0xc0);
                this.writeByte(segData);
                this.stop();
                this.start();
                this.writeByte(0x88 + this.brightnessLevel);
                this.stop();

                this.buf[bitAddr] = dispData;
            }
        }

        /**
         * Turn on or off the colon point on Grove - 4-Digit Display
         * @param pointEn value of point switch
         */
        //% blockId=grove_tm1637_display_point block="%4Digit|turn|%point|colon point"
        //% group="4-Digit"
        point(point: boolean) {
            this.pointFlag = point;

            this.bit(this.buf[0], 0x00);
            this.bit(this.buf[1], 0x01);
            this.bit(this.buf[2], 0x02);
            this.bit(this.buf[3], 0x03);
        }

        /**
         * Clear the display
         */
        //% blockId=grove_tm1637_display_clear block="%4Digit|clear"
        //% group="4-Digit"
        clear() {
            this.bit(0x7f, 0x00);
            this.bit(0x7f, 0x01);
            this.bit(0x7f, 0x02);
            this.bit(0x7f, 0x03);
        }
    }

    export class GroveJoystick {
        /**
         * Detect position from Grove - Thumb Joystick
         * @param xPin
         * @param yPin
         */

        joyread(xPin: AnalogPin, yPin: AnalogPin): number {
            let xdata = 0,
                ydata = 0,
                result = 0;
            if (xPin && yPin) {
                xdata = pins.analogReadPin(xPin);
                ydata = pins.analogReadPin(yPin);
                if (xdata > 1000) {
                    result = GroveJoystickKey.Press;
                } else if (xdata > 600) {
                    if (ydata > 600) result = GroveJoystickKey.UR;
                    else if (ydata < 400) result = GroveJoystickKey.LR;
                    else result = GroveJoystickKey.Right;
                } else if (xdata < 400) {
                    if (ydata > 600) result = GroveJoystickKey.UL;
                    else if (ydata < 400) result = GroveJoystickKey.LL;
                    else result = GroveJoystickKey.Left;
                } else {
                    if (ydata > 600) result = GroveJoystickKey.Up;
                    else if (ydata < 400) result = GroveJoystickKey.Down;
                    else result = GroveJoystickKey.None;
                }
            } else {
                result = GroveJoystickKey.None;
            }
            return result;
        }
    }

    const gestureEventId = 3100;
    const joystickEventID = 3101;
    let lastGesture = GroveGesture.None;
    let lastJoystick = GroveJoystickKey.None;
    let distanceBackup: number = 0;
    let joystick = new GroveJoystick();
    let paj7620 = new PAJ7620();
    // adapted to Calliope mini V2 Core by M.Klein 17.09.2020

    /**
       * Create a new driver of Grove - Ultrasonic Sensor to measure distances in cm
       * @param pin signal pin of ultrasonic ranger module
       */
    //% blockId=grove_ultrasonic_centimeters_v2 block="(V2)Ultrasonic Sensor (in cm) at|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="Ultrasonic" pin.defl=DigitalPin.C16

    export function measureInCentimetersV2(pin: DigitalPin): number {
        let duration = 0;
        let RangeInCentimeters = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 50000); // Max duration 50 ms

        RangeInCentimeters = (duration * 153) / 44 / 2 / 100;

        if (RangeInCentimeters > 0) distanceBackup = RangeInCentimeters;
        else RangeInCentimeters = distanceBackup;

        basic.pause(50);

        return RangeInCentimeters;
    }

    /**
       * Create a new driver Grove - Ultrasonic Sensor to measure distances in inch
       * @param pin signal pin of ultrasonic ranger module
       */
    //% blockId=grove_ultrasonic_inches_v2 block="(V2)Ultrasonic Sensor (in inch) at|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="Ultrasonic" pin.defl=DigitalPin.C16
    export function measureInInchesV2(pin: DigitalPin): number {
        let duration = 0;
        let RangeInInches = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 100000); // Max duration 100 ms

        RangeInInches = (duration * 153) / 113 / 2 / 100;

        if (RangeInInches > 0) distanceBackup = RangeInInches;
        else RangeInInches = distanceBackup;

        basic.pause(50);

        return RangeInInches;
    }

    /**
       * Create a new driver of Grove - Ultrasonic Sensor to measure distances in cm
       * @param pin signal pin of ultrasonic ranger module
       */
    //% blockId=grove_ultrasonic_centimeters block="Ultrasonic Sensor (in cm) at|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="Ultrasonic" pin.defl=DigitalPin.C16

    export function measureInCentimeters(pin: DigitalPin): number {
        let duration = 0;
        let RangeInCentimeters = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 50000); // Max duration 50 ms

        RangeInCentimeters = (duration * 153) / 29 / 2 / 100;

        if (RangeInCentimeters > 0) distanceBackup = RangeInCentimeters;
        else RangeInCentimeters = distanceBackup;

        basic.pause(50);

        return RangeInCentimeters;
    }

    /**
     * Create a new driver Grove - Ultrasonic Sensor to measure distances in inch
     * @param pin signal pin of ultrasonic ranger module
     */
    //% blockId=grove_ultrasonic_inches block="Ultrasonic Sensor (in inch) at|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="Ultrasonic" pin.defl=DigitalPin.C16
    export function measureInInches(pin: DigitalPin): number {
        let duration = 0;
        let RangeInInches = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 100000); // Max duration 100 ms

        RangeInInches = (duration * 153) / 74 / 2 / 100;

        if (RangeInInches > 0) distanceBackup = RangeInInches;
        else RangeInInches = distanceBackup;

        basic.pause(50);

        return RangeInInches;
    }

    /**
     * Create a new driver Grove - 4-Digit Display
     * @param clkPin value of clk pin number
     * @param dataPin value of data pin number
     */
    //% blockId=grove_tm1637_create block="4-Digit Display at|%clkPin|and|%dataPin"
    //% clkPin.fieldEditor="gridpicker" clkPin.fieldOptions.columns=4
    //% group="4-Digit"
    //% clkPin.fieldOptions.tooltips="false" clkPin.fieldOptions.width="250"
    //% dataPin.fieldEditor="gridpicker" dataPin.fieldOptions.columns=4
    //% clkPin.defl=DigitalPin.C16 dataPin.defl=DigitalPin.C17
    //% dataPin.fieldOptions.tooltips="false" dataPin.fieldOptions.width="250"
    //% blockSetVariable=4digit
    export function createDisplay(
        clkPin: DigitalPin,
        dataPin: DigitalPin
    ): TM1637 {
        let display = new TM1637();

        display.buf = pins.createBuffer(4);
        display.clkPin = clkPin;
        display.dataPin = dataPin;
        display.brightnessLevel = 0;
        display.pointFlag = false;
        display.clear();

        return display;
    }

    /**
     * init Grove Gesture modules
     *
     */
    //% blockId=grove_initgesture block="init gesture"
    //% group="Gesture"
    export function initGesture() {
        if (!paj7620) {
            paj7620.init();
        }
    }

    /**
     * get Grove Gesture model
     *
     */
    //% blockId=grove_getgesture block="get gesture model"
    //% group="Gesture"
    export function getGestureModel(): number {
        return paj7620.read();
    }
    /**
     * get Joystick key
     *
     */
    //% blockId=grove_getjoystick block="get joystick key at|%xpin|and|%ypin"
    //% group="Thumbjoystick" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17
    export function getJoystick(xpin: AnalogPin, ypin: AnalogPin): number {
        return joystick.joyread(xpin, ypin);
    }

    /**
     * Converts the gesture name to a number
     * Useful for comparisons
     */
    //% blockId=ggesture block="%key"
    //% group="Gesture"
    export function ggesture(g: GroveGesture): number {
        return g;
    }

    /**
     * Do something when a gesture is detected by Grove - Gesture
     * @param gesture type of gesture to detect
     * @param handler code to run
     */
    //% blockId=grove_gesture_create_event block="on Gesture|%gesture"
    //% group="Gesture"
    export function onGesture(gesture: GroveGesture, handler: () => void) {
        control.onEvent(gestureEventId, gesture, handler);
        paj7620.init();
        control.inBackground(() => {
            while (true) {
                const gesture = paj7620.read();
                if (gesture != lastGesture) {
                    lastGesture = gesture;
                    control.raiseEvent(gestureEventId, lastGesture);
                }
                basic.pause(50);
            }
        });
    }

    /**
     * Converts the key name to a number
     * Useful for comparisons
     */
    //% blockId=joystickkey block="%key"
    //% group="Thumbjoystick"
    export function joystickkey(key: GroveJoystickKey): number {
        return key;
    }

    /**
     * Do something when a key is detected by Grove - Thumb Joystick
     * @param key type of joystick to detect
     * @param xpin
     * @param ypin
     * @param handler code to run
     */
    //% blockId=grove_joystick_create_event block="on Key|%key at |%xpin|and|%ypin"
    //% group="Thumbjoystick" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17

    export function onJoystick(
        key: GroveJoystickKey,
        xpin: AnalogPin,
        ypin: AnalogPin,
        handler: () => void
    ) {
        control.onEvent(joystickEventID, key, handler);
        control.inBackground(() => {
            while (true) {
                const key = joystick.joyread(xpin, ypin);
                if (key != lastJoystick) {
                    lastJoystick = key;
                    control.raiseEvent(joystickEventID, lastJoystick);
                }
                basic.pause(50);
            }
        });
    }

    let isWifiConnected = false;
    /**
     * Setup Grove - Uart WiFi V2 to connect to  Wi-Fi
     */
    //% block="Setup Wifi|TX %txPin|RX %rxPin|Baud rate %baudrate|SSID = %ssid|Password = %passwd"
    //% group="UartWiFi"
    //% txPin.defl=SerialPin.P15
    //% rxPin.defl=SerialPin.P1
    //% baudRate.defl=BaudRate.BaudRate115200
    export function setupWifi(
        txPin: SerialPin,
        rxPin: SerialPin,
        baudRate: BaudRate,
        ssid: string,
        passwd: string
    ) {
        let result = 0;

        isWifiConnected = false;

        serial.redirect(txPin, rxPin, baudRate);

        sendAtCmd("AT");
        result = waitAtResponse("OK", "ERROR", "None", 1000);

        sendAtCmd("AT+CWMODE=1");
        result = waitAtResponse("OK", "ERROR", "None", 1000);

        sendAtCmd(`AT+CWJAP="${ssid}","${passwd}"`);
        result = waitAtResponse("WIFI GOT IP", "ERROR", "None", 20000);

        if (result == 1) {
            isWifiConnected = true;
        }
    }

    /**
     * Check if Grove - Uart WiFi V2 is connected to Wifi
     */
    //% block="Wifi OK?"
    //% group="UartWiFi"
    export function wifiOK() {
        return isWifiConnected;
    }

    /**
     * Send data to ThinkSpeak
     */
    //% block="Send Data to your ThinkSpeak Channel|Write API Key %apiKey|Field1 %field1|Field2 %field2|Field3 %field3|Field4 %field4|Field5 %field5|Field6 %field6|Field7 %field7|Field8 %field8"
    //% group="UartWiFi"
    //% apiKey.defl="your Write API Key"
    export function sendToThinkSpeak(
        apiKey: string,
        field1: number,
        field2: number,
        field3: number,
        field4: number,
        field5: number,
        field6: number,
        field7: number,
        field8: number
    ) {
        let result = 0;
        let retry = 2;

        // close the previous TCP connection
        if (isWifiConnected) {
            sendAtCmd("AT+CIPCLOSE");
            waitAtResponse("OK", "ERROR", "None", 2000);
        }

        while (isWifiConnected && retry > 0) {
            retry = retry - 1;
            // establish TCP connection
            sendAtCmd('AT+CIPSTART="TCP","api.thingspeak.com",80');
            result = waitAtResponse("OK", "ALREADY CONNECTED", "ERROR", 2000);
            if (result == 3) continue;

            let data = "GET /update?api_key=" + apiKey;
            if (!isNaN(field1)) data = data + "&field1=" + field1;
            if (!isNaN(field2)) data = data + "&field2=" + field2;
            if (!isNaN(field3)) data = data + "&field3=" + field3;
            if (!isNaN(field4)) data = data + "&field4=" + field4;
            if (!isNaN(field5)) data = data + "&field5=" + field5;
            if (!isNaN(field6)) data = data + "&field6=" + field6;
            if (!isNaN(field7)) data = data + "&field7=" + field7;
            if (!isNaN(field8)) data = data + "&field8=" + field8;

            sendAtCmd("AT+CIPSEND=" + (data.length + 2));
            result = waitAtResponse(">", "OK", "ERROR", 2000);
            if (result == 3) continue;
            sendAtCmd(data);
            result = waitAtResponse("SEND OK", "SEND FAIL", "ERROR", 5000);

            // // close the TCP connection
            // sendAtCmd("AT+CIPCLOSE")
            // waitAtResponse("OK", "ERROR", "None", 2000)

            if (result == 1) break;
        }
    }

    export function sendToCustomServer(
        website: string,
        port: number,
        url: string,
        field1: number,
        field2: number,
        field3: number,
        field4: number,
        field5: number,
        field6: number,
        field7: number,
        field8: number
    ) {
        let result = 0;
        let retry = 2;

        // close the previous TCP connection
        if (isWifiConnected) {
            sendAtCmd("AT+CIPCLOSE");
            waitAtResponse("OK", "ERROR", "None", 2000);
        }

        while (isWifiConnected && retry > 0) {
            retry = retry - 1;
            // establish TCP connection
            sendAtCmd(`AT+CIPSTART="TCP",${website},${port}`);
            result = waitAtResponse("OK", "ALREADY CONNECTED", "ERROR", 2000);
            if (result == 3) continue;

            let data = `GET ${url}`;
            if (!isNaN(field1)) data = data + "&field1=" + field1;
            if (!isNaN(field2)) data = data + "&field2=" + field2;
            if (!isNaN(field3)) data = data + "&field3=" + field3;
            if (!isNaN(field4)) data = data + "&field4=" + field4;
            if (!isNaN(field5)) data = data + "&field5=" + field5;
            if (!isNaN(field6)) data = data + "&field6=" + field6;
            if (!isNaN(field7)) data = data + "&field7=" + field7;
            if (!isNaN(field8)) data = data + "&field8=" + field8;

            sendAtCmd("AT+CIPSEND=" + (data.length + 2));
            result = waitAtResponse(">", "OK", "ERROR", 2000);
            if (result == 3) continue;
            sendAtCmd(data);
            result = waitAtResponse("SEND OK", "SEND FAIL", "ERROR", 5000);

            // // close the TCP connection
            // sendAtCmd("AT+CIPCLOSE")
            // waitAtResponse("OK", "ERROR", "None", 2000)

            if (result == 1) break;
        }
    }

    /**
     * Send data to IFTTT
     */
    //% block="Send Data to your IFTTT Event|Event %event|Key %key|value1 %value1|value2 %value2|value3 %value3"
    //% group="UartWiFi"
    //% event.defl="your Event"
    //% key.defl="your Key"
    //% value1.defl="hello"
    //% value2.defl="micro"
    //% value3.defl="bit"
    export function sendToIFTTT(
        event: string,
        key: string,
        value1: string,
        value2: string,
        value3: string
    ) {
        let result = 0;
        let retry = 2;

        // close the previous TCP connection
        if (isWifiConnected) {
            sendAtCmd("AT+CIPCLOSE");
            waitAtResponse("OK", "ERROR", "None", 2000);
        }

        while (isWifiConnected && retry > 0) {
            retry = retry - 1;
            // establish TCP connection
            sendAtCmd('AT+CIPSTART="TCP","maker.ifttt.com",80');
            result = waitAtResponse("OK", "ALREADY CONNECTED", "ERROR", 2000);
            if (result == 3) continue;

            let data = "GET /trigger/" + event + "/with/key/" + key;
            data = data + "?value1=" + value1;
            data = data + "&value2=" + value2;
            data = data + "&value3=" + value3;
            data = data + " HTTP/1.1";
            data = data + "\u000D\u000A";
            data = data + "User-Agent: curl/7.58.0";
            data = data + "\u000D\u000A";
            data = data + "Host: maker.ifttt.com";
            data = data + "\u000D\u000A";
            data = data + "Accept: */*";
            data = data + "\u000D\u000A";

            sendAtCmd("AT+CIPSEND=" + (data.length + 2));
            result = waitAtResponse(">", "OK", "ERROR", 2000);
            if (result == 3) continue;
            sendAtCmd(data);
            result = waitAtResponse("SEND OK", "SEND FAIL", "ERROR", 5000);

            // // close the TCP connection
            // sendAtCmd("AT+CIPCLOSE")
            // waitAtResponse("OK", "ERROR", "None", 2000)

            if (result == 1) break;
        }
    }

    function waitAtResponse(
        target1: string,
        target2: string,
        target3: string,
        timeout: number
    ) {
        let buffer = "";
        let start = input.runningTime();

        while (input.runningTime() - start < timeout) {
            buffer += serial.readString();

            if (buffer.includes(target1)) return 1;
            if (buffer.includes(target2)) return 2;
            if (buffer.includes(target3)) return 3;

            basic.pause(100);
        }

        return 0;
    }

    function sendAtCmd(cmd: string) {
        serial.writeString(cmd + "\u000D\u000A");
    }
}
