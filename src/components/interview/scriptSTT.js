'use strict';
import React, { Component, useContext, useState } from 'react';
import InterviewContext from '../../context/interview/interviewContext';
import interviewContext from '../../context/interview/interviewContext';
//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
let finalTranscript = '';
//------------------------COMPONENT-----------------------------

const Speech = (props) => {
  const interviewContext = useContext(InterviewContext);
  const [listening, setListening] = useState(false);

  const toggleListen = async () => {
    await setListening(!listening);
    handleListen();
  };

  const handleListen = () => {
    console.log('listening?', listening);

    if (listening) {
      recognition.start();
      recognition.onend = () => {
        console.log('...continue listening...');
        recognition.start();
      };
    } else {
      recognition.stop();
      recognition.onend = () => {
        console.log('Stopped listening per click');
        finalTranscript = '';
      };
    }

    recognition.onstart = () => {
      console.log('Listening!');
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      interviewContext.setSpeechToText(finalTranscript);
      /* document.getElementById('interim').innerHTML = interimTranscript;
      document.getElementById('final').innerHTML = finalTranscript */

      //-------------------------COMMANDS------------------------------------

      /* const transcriptArr = finalTranscript.split(' ');
      const stopCmd = transcriptArr.slice(-3, -1);
      console.log('stopCmd', stopCmd);

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop();
        recognition.onend = () => {
          console.log('Stopped listening per command');
          const finalText = transcriptArr.slice(0, -3).join(' ');
          document.getElementById('final').innerHTML = finalText;
        };
      } */
    };

    //-----------------------------------------------------------------------

    recognition.onerror = (event) => {
      console.log('Error occurred in recognition: ' + event.error);
    };
  };
  const showValue = () => {
    alert(document.getElementById('final').innerHTML);
  };

  return (
    <div style={container}>
      <button
        type='button'
        id='microphone-btn'
        style={button}
        onClick={toggleListen}
      />
    </div>
  );
};

export default Speech;

//-------------------------CSS------------------------------------

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    width: '60px',
    height: '60px',
    background: 'lightblue',
    borderRadius: '50%',
    margin: '6em 0 2em 0',
  },
  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px',
  },
  final: {
    color: 'black',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px',
  },
};

const { container, button, interim, final } = styles;
