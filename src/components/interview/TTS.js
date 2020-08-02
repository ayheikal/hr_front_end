export default class TTS {
  speak(text) {
    var x = 0;
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    alert(text);
  }
}
