# Unit Testing Workshop

This repo is to supplement the [Unit Testing Presentation](https://docs.google.com/presentation/d/16Zuz1wXtSQDExzK09ythvGTne-WJu-ecd1up2kG0M3U/edit).

There are currently 8 branches within the repo. Each is at the **completed** stage for that task.
| Repo | Description |
|---------------------------------|----------------------------------------------|
| master | Most up to date code |
| step-1-requirements | Define requirements |
| step-2-user-list-tests | Write tests for user display |
| step-3-user-list-tests-pass | Write code for user display test to pass |
| step-4-user-sorting-tests | Write tests for sorting users |
| step-5-user-sorting-tests-pass | Write code for sorting users tests to pass |
| step-6-disable-button-tests | Write test for disabling sort button |
| step-7-disable-button-test-pass | Write code for disabling sort button test to pass |

## Instructions

You can bootstrap a new React project using `create-react-app`:

```shell
~ $ npx create-react-app unit-testing
```

### Step 1 - Requirements

- Create some requirements for the application
- See the completed [requirements document](https://github.com/andyswanepoel/unit-testing-workshop/blob/step-1-requirements/REQUIREMENTS.md)

### Step 2 - Write tests for user display

- Write some tests for the application displaying users. Suggested tests:
  - Displays correct number of users
  - Empty or failed response shows correct message
- See the completed [test code](https://github.com/andyswanepoel/unit-testing-workshop/blob/step-2-user-list-tests/src/__tests__/App.test.js)

### Step 3 - Write code for user display test to pass

- Build your application to make the tests pass
- See the completed [app code](https://github.com/andyswanepoel/unit-testing-workshop/blob/step-3-user-list-tests-pass/src/App.js)

### Step 4 - Write tests for sorting users

- Write some tests for the application displaying users. Suggested tests:
  - Sorts ascending when button is clicked once
  - Sorts descending when button is clicked twice
- See the completed [test code](https://github.com/andyswanepoel/unit-testing-workshop/blob/step-4-user-sorting-tests/src/__tests__/App.test.js#L99)

### Step 5 - Write code for sorting users test to pass

- Build your application to make the tests pass
- See the completed [app code](https://github.com/andyswanepoel/unit-testing-workshop/blob/step-5-user-sorting-tests-pass/src/App.js)

### Step 6 - Write tests for disabling sort button

- Write some tests for the application displaying users. Suggested tests:
  - Button should be disabled is no users loaded
- See the completed [test code](https://github.com/andyswanepoel/unit-testing-workshop/blob/step-6-disable-button-tests/src/__tests__/App.test.js#L99)

### Step 7 - Write code for user display test to pass

- Build your application to make the tests pass
- See the completed [app code](https://github.com/andyswanepoel/unit-testing-workshop/blob/step-7-disable-button-test-pass/src/App.js)

## Running the completed project

Run the following for development:

```shell
~ $ npm ci
~ $ npm start
```

## Testing the completed project

Run the following, for testing:

```shell
~ $ npm ci
~ $ npm run test
```
