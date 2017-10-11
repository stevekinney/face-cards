# The Face Cards App

Much of the work at SendGrid involves pulling in data from multiple sources and combining them into one cohesive presentation.

This problem is separated into two tasks. First, display three "cards" for randomly-selected users which displays their name, email address, company catchphrase, and, of course, their adorable avatar. Second, display 5 randomly-selected posts when a user clicks on an individual card.


## General Requirements

1. Use React, Jest, Styled-Components, and your favorite libary for managing state to create the simple application described below.
2. Write clean, concise, self-documenting code.
3. Write small, easily-testable components.
4. Write unit tests and ensure code coverage.

Familiarize yourself with the [Jest documentation](https://facebook.github.io/jest/).


## Technical Requirements

### Part 1

1. Fetch user data from https://jsonplaceholder.typicode.com/users via AJAX.
2. Select three unique users at random.
3. Display a card for each of the three randomly selected users (see mockups below).
4. Cards are 350px by 206px.
5. The avatar images are provided by http://avatars.adorable.io. The `<img>` element's `src` attribute will be in the format of `https://api.adorable.io/avatars/150/<email>.png`.
6. You may use any JavaScript library not already provided to achieve the desired functionality.

### Part 2

1. When a user clicks on a card, perform an AJAX request to `https://jsonplaceholder.typicode.com/posts?userId=<USER ID>`.
2. Select five unique posts at random.
3. Display the title and body of each post below the original three cards (see the mockups below).
4. The title should always render Capitalized Words.


## Reference Material

[part1]: https://s3.amazonaws.com/istreet-assets/1xbaS_Iw9maIlJcSfD2okQ/Challenge%20-%20Closed%20-%20Redlines.png "Part 1"
[part2]: https://s3.amazonaws.com/istreet-assets/sHqSvjzUfe8RkpjY4t_0ww/Challenge%20-%20Open%20-%20Redlines.png "Part 2"

### Part 1 Design

![Design for Part 1][part1]

### Part 2 Design

![Design for Part 2][part2]


## Getting Started

1. Fork and then clone the provided GitHub repository.

2. Install the project's dedpendencies.
```
yarn install
```

3. Start the development server.
```
yarn run start
```

4. Run your unit tests.
```
yarn run test
```

## Submitting your Work

1. Double check the application works as expected and that all unit tests pass.
2. Push code to your forked repository.
3. Open a pull request from your forked repository to the repsository which was originally provided.
4. Delete your repository or make it private after we have acknowledged receipt of your submission.
