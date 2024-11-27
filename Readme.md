# Cypress Automation Project

This project contains automated tests for the search feature of the Unibet Blog, written in Cypress. The tests verify the functionality and responsiveness of the search feature, ensuring it meets expected behaviors across different scenarios and viewports.

## Table of Contents
1. [Setup](#setup)
2. [Project Structure](#project-structure)
3. [Available Tests](#available-tests)
4. [How to Run the Tests](#how-to-run-the-tests)
5. [Future Work](#future-work)

---

## Setup

### 1. Clone the Repository
To get started, clone the project to your local machine:
```bash
git clone https://github.com/mccamatt92/MatthiasMcCarthyCypress
cd MatthiasMccarthy-Cypress
```

### 2. Install Dependencies
Install the required dependencies using `npm`:
```bash
npm install
```

This will install Cypress and other necessary packages specified in `package.json`.

### 3. Run Cypress
To open the Cypress Test Runner:
```bash
npx cypress open
```

Alternatively, to run the tests in headless mode:
```bash
npx cypress run
```

---

## Project Structure

The project is organized as follows:

```
MatthiasMcCarthy-Cypress/
├── cypress/
│   ├── e2e/
│   │   └── Search.cy.ts       # Tests for the Unibet Blog search feature
│   ├── fixtures/              # Test data and mock responses
│   ├── support/               # Custom commands and utilities
├── tsconfig.json              # TypeScript configuration file
├── package.json               # Project dependencies and scripts
├── cypress.config.js          # Cypress configuration
└── README.md                  # Project documentation
```

---

## Available Tests

The project includes tests for the following scenarios:

### 1. **Search Results Validity**
   - **Test Case**: Verify that the search feature returns relevant results for a valid query.
   - **Description**: Searches for a keyword (e.g., "Formula") and ensures that all displayed results contain the search term in their titles or descriptions.

### 2. **No Results Handling**
   - **Test Case**: Validate the behavior of the search feature when no matching results are found.
   - **Description**: Searches for an invalid keyword (e.g., "xyzinvalid") and confirms that a "Nothing Found" message is displayed.

### 3. **Responsiveness of the Search Feature**
   - **Test Case**: Ensure the search functionality works correctly on mobile viewports.
   - **Description**: Tests the search feature on a mobile screen size (375x667) and validates the results are consistent with those on the desktop.

---

## How to Run the Tests

### 1. Open the Test Runner
Run the following command to open the interactive Cypress Test Runner:
```bash
npx cypress open
```
You can select specific tests or run all available tests from the Test Runner UI.

### 2. Run in Headless Mode
For CI/CD or terminal-based testing, use the `run` command:
```bash
npx cypress run
```
This will execute all tests and output the results in the terminal.

### 3. Run Specific Tests
To run a single test file:
```bash
npx cypress run --spec cypress/e2e/Search.cy.ts
```

---

## Future Work

To enhance the automation suite, the following improvements and additional test cases are planned:

### 1. Automate Search Filters
   - **Description**: Validate the functionality of different search filters (e.g., date, category) to ensure accurate filtering of results.

### 2. Validate Pagination
   - **Description**: Automate tests for pagination in search results to verify navigation between pages and accurate loading of new results.

### 3. Expand Viewport Testing
   - **Description**: Include more device sizes (e.g., tablets) to ensure cross-device compatibility.

### 4. Mock API Responses
   - **Description**: Add tests with mocked API responses for consistent and isolated testing of search behavior.

---

## Additional Notes

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (v16 or later recommended).
- **Browser Support**: Cypress supports Chrome, Firefox, and Edge.

### Troubleshooting
- If you encounter issues with TypeScript, ensure it’s installed:
  ```bash
  npm install typescript --save-dev
  ```
- Clear cache and reinstall dependencies if issues persist:
  ```bash
  npx cypress cache clear
  rm -rf node_modules package-lock.json
  npm install
  ```

---