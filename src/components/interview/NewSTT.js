//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
var final_transcript = '';
recognition.continous = true;
var interim_transcript = '';
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.onresult = function (event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      final_transcript += event.results[i][0].transcript;
    } else {
      interim_transcript += event.results[i][0].transcript;
    }
  }
};

export function startReco() {
  recognition.start();
}
export function endReco() {
  recognition.stop();
  return final_transcript;
}
