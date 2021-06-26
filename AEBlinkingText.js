// CursorBlinkingTextWriter effect
// Quick modifications by: Ayham Al-Ali
// Original Author: MotionHub

// Notes:
// You need to add 3 SliderControle effects to your layer and 1 checkboxControl
// Name them Speed, BlinkingSpeed, StartAt, CursorKeepsBlinking (checkbox)
// StartAt = time before the text begins to type (cursor will be blinking while that time)
// BlinkingSpeed = Cursor blinking speed
// Speed = text typing speed (makes it longer or shorter in time)

T1 = time - startTime // If the layer is moved forward this will take care of it
X = text.sourceText;
F = Math.round(T1 * effect("BlinkingSpeed")("Slider") % 1); 
L = X.length;
T = T1 * effect("Speed")("Slider") - effect("StartAt")("Slider") * effect("Speed")("Slider");

CursorChar = "|"; // Cursor character
CursorKeepsBlinking = effect("CursorKeepsBlinking")("Checkbox") == 1; // Keeps blinking after text typing is done?

Cursor = " ";
if (F==1 | T>0) Cursor = CursorChar;
if (T>=L) {
    if (CursorKeepsBlinking) {
        if (F == 1) {

            if (Cursor == CursorChar)
                Cursor = " ";
            else
                Cursor = CursorChar;
        }
    }
    else
        Cursor = " ";
}
if (T>0) X.substr(0,T) + Cursor
else Cursor