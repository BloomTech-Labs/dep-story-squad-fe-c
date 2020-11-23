// ScreenData is used to serve as the repo for screen and game state
// 1. display instruction panel content for the state
// 2. route that each state belongs too
// 3. game related state also have a game control that can navigate to and from the state

// This is the game state that controls the flow of the game
export const screenData = {
  // Default route
  Home: {
    route: '/',
  },
  // This is the new mission state
  // might need to
  MISSION_NOT_STARTED: {
    // * this property is used for
    // 1. to take user back to the part of the game where they can visit,
    // 2. to see if the instruction panel belong to this route. if not, don't show
    route: '/dashboard',
    // * message to display on the missions panel
    mission_message: '',
    // Instruction Panel
    instruction: {
      title: 'Welcome to Story Squad',
      content: 'Accept your mission to start an adventure!',
      buttonLabel: 'OK', // button label
      navigateToOnClick: null, // Route to navigate to when button is clicked
      hasShown: false, // To make sure this message is only shown the first time.
      showEveryTime: false, // True if this message needs to show every time.
      isModal: false, // True if it has a blocking backdrop
    },
  },
  // Before reading start
  SUBMISSION_START: {
    route: '/mission',
    mission_message: '',
    instruction: {
      title: 'Are you ready to accept the challenge?',
      content:
        "To begin your journey, click the 'READ' icon to start the story!\n",
      buttonLabel: 'OK',
      navigateToOnClick: null,
      showEveryTime: false,
      hasShown: false,
      isModal: false,
    },
  },
  // After reading completed
  READ_COMPLETE: {
    route: '/mission',
    mission_message: '',
    instruction: {
      title: 'Great Job!',
      content: 'Its time to get creative. Click on one of the prompts.',
      buttonLabel: 'OK',
      navigateToOnClick: null,
      hasShown: false,
      showEveryTime: false,
      isModal: false,
    },
  },
  // Before reading started
  SUBMISSION_WRITE_START: {
    route: '/mission/write',
    mission_message: '',
    instruction: {
      title: 'Instruction',
      content:
        'Once you finish writing your story, please take a picture of all your pages and upload them. After all, pages are uploaded, click submit. ',
      buttonLabel: 'OK',
      showEveryTime: false,
      navigateToOnClick: null,
      isModal: false,
    },
  },
  // Before drawing started
  SUBMISSION_DRAW_START: {
    route: '/mission/draw',
    mission_message: '',
    instruction: {
      title: 'Instruction',
      content:
        'Once you finish your drawing, please take a picture of all your pages and upload them. After all, pages are uploaded, click submit. ',
      buttonLabel: 'OK',
      navigateToOnClick: null,
      hasShown: false,
      showEveryTime: false,
      isModal: false,
    },
  },

  // All submission completed, pending moderation
  PENDING_SUBMISSION_MODERATION: {
    route: '/mission',
    mission_message:
      'Your Submission is Under Review. Please Check Back on Wednesday!',
    instruction: {
      title: 'All Submission Received',
      message: 'Please check back on Wednesday',
      content:
        'Check back on Wednesday. If your submissions have been approved, you will be able to move onto the next phase - Meet your partner',
      buttonLabel: 'Back to Dashboard',
      navigateToOnClick: '/dashboard',
      hasShown: false,
      showEveryTime: true,
      isModal: true,
    },
  },

  // Submission approved (Tue)
  SUBMISSION_APPROVED: {
    route: '/game/squad-up',
    mission_message: 'Submission Approved! Squad Up  →',
    instruction: {
      title: 'Your submissions have been approved',
      content: 'Its time to join your Squad!  Click the button to continue',
      buttonLabel: 'Squad Up',
      hasShown: true,
      navigateToOnClick: '/game/squad-up',
      showEveryTime: false,
      isModal: false,
    },
  },
  // Squad up (Wed)
  GAME_SQUAD_UP: {
    route: '/game/squad-up',
    mission_message: 'Continue to Squad Up  →',
    instruction: {
      title: 'Meet your Squad Partner',
      content:
        'You have been partnered up, Click "Share Points to move to next stage"',
      buttonLabel: 'Ok',
      hasShown: false,
      navigateToOnClick: null,
      showEveryTime: false,
      isModal: false,
    },
    // Game control used for gamification screens
    gameControl: {
      // next button
      next: {
        label: 'Share Points',
        // navigate to route on click
        // if remove this property, then it will stay on this page
        route: '/game/share-points',
        // update game state, if necessary
        state: 'GAME_SHARE_POINTS',
      },
      // prev button
      prev: {
        label: 'Exit',
        route: '/dashboard',
      },
    },
  },
  // Point share (Wed)
  GAME_SHARE_POINTS: {
    route: '/game/share-points',
    mission_message: 'Continue to Point Share  →',
    instruction: {
      title: 'Ready Squad!',
      content:
        "Read your partner's story, view their drawing and share some points.m" +
        'You have 00:00 until the match begins please assign points',
      buttonLabel: 'Ok',
      hasShown: false,
      navigateToOnClick: null,
      showEveryTime: false,
      isModal: false,
    },
    gameControl: {
      next: {
        label: 'Submit',
        state: 'PENDING_MATCHUP',
      },
      prev: {
        label: 'Exit',
        route: '/dashboard',
      },
    },
  },
  // Pending matchup day. (Before Thursday)
  PENDING_MATCHUP: {
    route: '/game/share-points',
    mission_message: 'Please Check Back on Thursday for your Match-ups',
    instruction: {
      title: 'Task Complete!',
      content:
        'Your have finished your task for today. Please check back on Thursday to meet your team for match-up',
      buttonLabel: 'Back to Dashboard',
      navigateToOnClick: '/dashboard',
      hasShown: false,
      showEveryTime: true,
      isModal: true,
    },
  },
  // Matchup day (Thursday to Friday)
  GAME_MATCHUP: {
    route: '/game/match-up',
    mission_message: 'Continue to Match up  →',
    instruction: {
      title: 'You are matched up',
      content:
        'Team Show Fries, you are matched up with Star Dog.  \n ' +
        'Click on each vote button to vote for your favorite story. You will need three votes to enter match',
      buttonLabel: 'Ok',
      hasShown: false,
      navigateToOnClick: null,
      showEveryTime: false,
      isModal: false,
    },
    gameControl: {
      next: {
        label: 'Vote!',
        route: '/game/vote',
        state: 'INDEPENDENT_VOTING',
      },
      prev: {
        label: 'Exit',
        route: '/dashboard',
      },
    },
  },

  // Independent voting (Thursday to Friday before reveal)
  INDEPENDENT_VOTING: {
    route: '/game/vote',
    mission_message: 'Continue to Independent Voting  →',
    instruction: {
      title: 'Vote for your favorite',
      content: 'Select your favorite story or drawing with emoji',
      buttonLabel: 'Ok',
      hasShown: false,
      navigateToOnClick: null,
      showEveryTime: false,
    },
    gameControl: {
      next: {
        label: 'Submit',
        route: '/game/match-up',
        state: 'INDEPENDENT_VOTING',
      },
      prev: {
        label: 'Exit',
        route: '/dashboard',
      },
    },
  },
  // waiting for result (user three votes in, but still waiting for results. Will announce on Friday afternoon/evening)
  PENDING_GAME_RESULT: {
    route: '/game/waiting-for-result',
    mission_message: `Waiting for result. Please check back Friday afternoon`,
    instruction: {
      title: 'Voting in Progress',
      content:
        'We are waiting for the rest of the vote to come in. Please check back later!',
      buttonLabel: 'Ok',
      hasShown: false,
      navigateToOnClick: null,
      showEveryTime: false,
    },
    gameControl: {
      next: {
        label: 'Home',
        route: '/dashboard',
      },
      prev: {
        label: 'Exit',
        route: '/dashboard',
      },
    },
  },
};

export function getStateRoute(gameState) {
  return screenData[gameState].route;
}

export function getStateMessage(gameState) {
  return screenData[gameState].mission_message;
}

export function getGameControl(gameState) {
  return screenData[gameState].gameControl;
}

export function getIsCurrentState(gameState, route) {
  return screenData[gameState].route === route;
}
