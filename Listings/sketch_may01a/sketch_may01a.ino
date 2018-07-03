void setup() {
  // put your setup code here, to run once:
 // 下面的等值于 OC1A = 输出用于定时器1的CTC模式
  pinMode(3, OUTPUT);  // 设置默认关联了D9（查表得知）为输出
  TCCR2B=0; // 只是个复位的习惯可以不要
  TCCR2A=_BV(COM2B0); // 要是困扰的话你也可以写成 TCCR1A = 0b01000000; 
  //这里和上一个表示了 = CTC 模式, 开启比较器（默认输出）, prescaler = 1
  TCCR2B = _BV(WGM12)|_BV(CS10) ; //  这里等值于 TCCR1B = 0b00001001;

  // 最有意思的了，16位的玩意来确定要一个怎样的频率
  OCR2A = 3; // 计算为：F_CPU/2/Need_HZ-1 来得到你想要的，遗憾的是四舍五入来截取频率
}
void MydigitalWrite(uint8_t pin, uint8_t val)
{
//  uint8_t timer = digitalPinToTimer(pin);
//  uint8_t bit = digitalPinToBitMask(pin);
//  uint8_t port = digitalPinToPort(pin);
//  volatile uint8_t *out;
//
//  if (port == NOT_A_PIN) return;
//
//  // If the pin that support PWM output, we need to turn it off
//  // before doing a digital write.
//  if (timer != NOT_ON_TIMER) turnOffPWM(timer);
//
//  out = portOutputRegister(port);
//
//  uint8_t oldSREG = SREG;
//  cli();
//
//  if (val == LOW) {
//    *out &= ~bit;
//  } else {
//    *out |= bit;
//  }

//  SREG = oldSREG;
}
void loop() {
  // put your main code here, to run repeatedly:

}
