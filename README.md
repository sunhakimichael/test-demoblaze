# Playwright End-to-End Automation Framework

## Overview

This project demonstrates a scalable End-to-End (E2E) automation testing framework built using **Playwright with TypeScript**.

The framework follows modern QA automation best practices including:

* Page Object Model (POM)
* Modular architecture
* Cross-browser testing
* CI/CD integration
* Configurable environments
* Support for multiple test types (UI & API)

Target application for the automation demo:

https://www.demoblaze.com

---

# Framework Architecture

The framework is structured to ensure maintainability, scalability, and ease of extension.

tests → test scenarios
pages → Page Object Models
fixtures → reusable test setup
config → environment configuration
utils → reusable utilities
api → API test cases

---

# Technology Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI/CD)

---

# Test Coverage

### UI Tests

* User login
* Product selection
* Add item to cart
* Place order

### API Tests

* Product API availability
* Response validation

---

# Key Features

Cross-browser execution (Chromium, Firefox, WebKit)

Parallel test execution

Automatic retries for flaky tests

Screenshot / video capture on failure

HTML test reports

Environment-based configuration

Reusable Page Object Model

CI/CD pipeline ready

---

# Project Structure

```
test-demoblaze
│
├── config
├── fixtures
├── pages
├── tests
│   ├── api
│   └── ui
├── utils
└── playwright.config.ts
```

---

# Installation

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

---

# Running Tests

Run all tests:

```
npx playwright test
```

Run tests in UI mode:

```
npx playwright test --ui
```

Run regression tests:

```
npx playwright test -g @regression
```

---

# Test Reports

After execution:

```
npx playwright show-report
```

Playwright will generate an HTML report containing:

* execution results
* screenshots
* traces
* videos for failed tests

---

# CI/CD

This framework supports automated execution using **GitHub Actions**.

Pipeline includes:

* dependency installation
* browser installation
* automated test execution
* report generation

---

# Future Improvements

Additional improvements could include:

* visual regression testing
* performance monitoring integration
* advanced test data management
* contract testing for APIs
* test analytics dashboards

---

# Author

QA Automation Engineer Demo Project
