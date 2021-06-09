// define three parts of random story

const partOne = [{id: 1,
                message: "I once met a young boy who"
                    },
                {id: 2,
                message: "Once upon a time, I"
                    },
                {id: 3,
                message: "Zut alors! That frenchman"
                },
                {id: 4,
                message: "The most exciting thing happend when I"
                }     
                ];

const partTwo = [{id: 1,
                message: "ate a lot of baked beans for lunch. I later found out that"
                    },
                {id: 2,
                message: "went to space to meet Zorp the Almighty. Having seen his mighty image, I knew that"
                    },
                {id: 3,
                message: "turned into a horse. Afterwards, I realised that"
                    },
                {id: 4,
                message: "saw a castle in the shape of a pineapple and a palm tree prince. Flabergasted, I questioned if"
                    }
                ];

const partThree = [{id: 1,
                message: "this was all a dream."
                    },
                {id: 2,
                message: "he wanted me to open a particularly stubborn jar of lemon curd."
                    },
                {id: 3,
                message: "the meaning of life is 42."
                    },
                {id: 4,
                message: "'pickles' is a weird word."
                    },
                    {id: 5,
                message: "it is in fact a house coat, and not a dressing gown."
                    },
                    {id: 6,
                message: "flatulence is a very serious problem."
                    }
                
                ];


    // generate random sentences

    function generateFirstPhrase () {
       const i = Math.floor(Math.random() * partOne.length);
       const firstPhrase = partOne[i].message;
       return firstPhrase;
    } // end of first phrase generator function

     function generateSecondPhrase () {
       const i = Math.floor(Math.random() * partTwo.length);
       const secondPhrase = partTwo[i].message;
       return secondPhrase;
    } // end of second phrase generator function

      function generateThirdPhrase () {
       const i = Math.floor(Math.random() * partThree.length);
       const thirdPhrase = partThree[i].message;
       return thirdPhrase;
    } // end of second phrase generator function

    function generateRandomStory() {
        const firstPhrase = generateFirstPhrase();
        const secondPhrase = generateSecondPhrase();
        const thirdPhrase = generateThirdPhrase();

        const randomStory = `${firstPhrase} ${secondPhrase} ${thirdPhrase}`;
        return randomStory;

    } // end of random story creator