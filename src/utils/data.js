export const gameData = {
  missionDash: {
    instruction: {
      title: 'Welcome to Story Squad',
      content: 'Accept your mission to start an adventure!',
      buttonLabel: 'OK',
      navigateToOnClick: null,
      hasShown: false,
      showEveryTime: false,
    },
  },
  submissionStart: {
    instruction: {
      title: 'Are you ready to accept the challenge?',
      content:
        "To begin your journey, click the 'READ' icon to start the story!\n",
      buttonLabel: 'OK',
      navigateToOnClick: null,
      showEveryTime: false,
      hasShown: false,
    },
  },
  readComplete: {
    instruction: {
      title: 'Great Job!',
      content: 'Its time to get creative. Click on one of the prompts.',
      buttonLabel: 'OK',
      navigateToOnClick: null,
      hasShown: false,
      showEveryTime: false,
    },
  },
  submissionWriteStart: {
    instruction: {
      title: 'Instruction',
      content:
        'Once you finish writing your story, please take a picture of all your pages and upload them. After all, pages are uploaded, click submit. ',
      buttonLabel: 'OK',
      showEveryTime: false,
      navigateToOnClick: null,
    },
  },
  submissionWriteComplete: {
    instruction: {
      title: 'Submitted',
      content: 'Your Story has been submitted',
      buttonLabel: 'OK',
      navigateToOnClick: null,
      hasShown: false,
      showEveryTime: false,
    },
  },
  submissionDrawStart: {
    instruction: {
      title: 'Instruction',
      content:
        'Once you finish your drawing, please take a picture of all your pages and upload them. After all, pages are uploaded, click submit. ',
      buttonLabel: 'OK',
      navigateToOnClick: null,
      hasShown: false,
      showEveryTime: false,
    },
  },
  submissionDrawComplete: {
    instruction: {
      title: 'Submitted',
      content: 'Your drawing has been submitted',
      buttonLabel: 'OK',
      navigateToOnClick: null,
      hasShown: false,
      showEveryTime: false,
    },
  },
  submissionAllComplete: {
    instruction: {
      title: 'All Submission Received',
      content: 'Its time to join your Squad!  Click the button to continue',
      buttonLabel: 'Squad Up',
      hasShown: false,
      navigateToOnClick: '/game/squad-up',
      showEveryTime: true,
    },
  },
  gameSquadup: {
    instruction: {
      title: 'Meet your Squad Partner',
      content:
        'You have been partner up with xxx, Click "Share Points to move to next stage"',
      buttonLabel: 'Ok',
      hasShown: false,
      navigateToOnClick: null,
      showEveryTime: false,
    },
    gameControl: {
      nextButtonLabel: 'Share Points',
      previousButtonLabel: 'Back',
      navigateToOnNextButtonClick: '/game/share-points',
      navigateToOnPrevButtonClick: '/game/squad-up',
    },
  },
  gameSharePoints: {
    instruction: {
      title: 'Ready Squad!',
      content:
        "Read your partner's story, view their drawing and share some points.m" +
        'You have 00:00 until the match begins please assign points',
      buttonLabel: 'Ok',
      hasShown: false,
      navigateToOnClick: null,
      showEveryTime: false,
    },
    gameControl: {
      nextButtonLabel: 'Match Up!',
      previousButtonLabel: 'Back',
      navigateToOnNextButtonClick: '/game/match-up',
      navigateToOnPrevButtonClick: '/game/squad-up',
    },
  },
  gameMatchUp: {
    instruction: {
      title: 'You are matched up',
      content:
        'Team Show Fries, you are matched up with Star Dog.  \n ' +
        'Click on each vote button to vote for your favorite story or drawing with emoji',
      buttonLabel: 'Ok',
      hasShown: false,
      navigateToOnClick: null,
      showEveryTime: false,
    },
    gameControl: {
      nextButtonLabel: 'Match Up!',
      previousButtonLabel: 'Back',
      navigateToOnNextButtonClick: '/game/match-up',
      navigateToOnPrevButtonClick: '/game/squad-up',
    },
  },
};
