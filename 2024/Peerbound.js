// Write a function to identify the three most common proper nouns spoken in a set of Zoom call recordings. Assume you have a set of hundreds or thousands of transcripts available in the following format…
// [
//    {
//        "title": "Sunny <> Stephen sync",
//        "conversation": [
//            {
//               "speaker": "Sunny",
//               "speech": "Hey, how's it going Stephen?"
//            },
//            {
//               "speaker": "Stephen",
//               "speech": "Pretty well. I just love working at Peerbound!"
//            }
//        ]
//    },
//    {
//        "title": "Sales call",
//        "conversation": [
//            {
//               "speaker": "Joe",
//               "speech": "Hi Fred. Tell me about your daily workflow."
//            },
//            {
//               "speaker": "Fred",
//               "speech": "My top tools are Gmail, Peerbound, and Gong."
//            }
//        ]
//    },
//    ...
// ]

function findTop3ProperNouns(arr) {
  const counts = {};
  const properNouns = [];

  for (let i = 0; i < arr.length; i++) {
    let conversation = arr[i]['conversation'];

    for (let x = 0; x < conversation.length; x++) {
      const speech = conversation[x]['speech'];
      const speechWithoutPunctuation = speech.split('[.!?]');

      for (let z = 0; z < speechWithoutPunctuation.length; z++) {
        const words = speechWithoutPunctuation[z].substring(2).split(' ');
        const capitalizedWords = words.filter(x => x.match(/[A-Z]/))
        properNouns.push(capitalizedWords);
      }
    }
  }

  for (let s of properNouns.flat()) {
    const wordWithoutPunctuation = s.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '');
    counts[wordWithoutPunctuation] = (counts[wordWithoutPunctuation] || 0) + 1;
  }

  const countsList = [];
  for (let x in counts) {
    countsList.push([x, counts[x]]);
  }

  const sortedCounts = countsList.sort((a, b) => b[1] - a[1]);
  const results = sortedCounts.slice(0, 3);
  return results
}

let arr = [
  {
    title: 'Sunny <> Stephen sync',
    conversation: [
      {
        speaker: 'Sunny',
        speech: "Hey, how's it going Stephen?",
      },
      {
        speaker: 'Stephen',
        speech: 'Pretty well. I just love working at Peerbound!',
      },
    ],
  },
  {
    title: 'Sales call',
    conversation: [
      {
        speaker: 'Joe',
        speech: 'Hi Fred. Tell me about your daily workflow.',
      },
      {
        speaker: 'Fred',
        speech: 'My top tools are Gmail, Peerbound, and Gong.',
      },
    ],
  },
];

console.log(findTop3ProperNouns(arr));


