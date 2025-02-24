# Getting Started

To get a local copy of the project up and running, follow these simple steps:

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later) or Yarn

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/konstantinbytsay/weather.git
   cd weather
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

   This command will install all the necessary dependencies listed in your `package.json` file.

# Commit Message Convention

To maintain a clear and consistent project history, we follow a commit message convention inspired by [Conventional Commits](https://www.conventionalcommits.org/). This convention helps us generate automatic release notes and improve the readability of our commit history.

### Commit Message Format

Each commit message consists of a **header**, **body**, and **footer**. The header has a special format that includes a **type**, **scope**, and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Commit Types

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- **docs**: Documentation only changes.
- **feat**: A new feature.
- **fix**: A bug fix.
- **perf**: A code change that improves performance.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
- **test**: Adding missing tests or correcting existing tests.
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation.

### Scope

The scope can be anything specifying the place of the commit change. For example, `api`, `parser`, `readme`, etc.

### Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes".
- Don't capitalize the first letter.
- No dot (.) at the end.

### Body

Just as in the subject, use the imperative, present tense: "fix" not "fixed" nor "fixes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

### Examples

- `feat(api): add login endpoint`
- `fix(parser): handle edge cases for empty input`
- `docs(readme): update installation instructions`

By following these conventions, we ensure that our commit history is easy to navigate and understand, making collaboration more efficient.

### Available Scripts

In the project directory, you can run the following scripts:

- **Start the development server**:

  ```sh
  npm run dev
  ```

  This will start the Vite development server and open the application in your default web browser.

- **Build the project**:

  ```sh
  npm run build
  ```

  This script first runs the TypeScript compiler (`tsc`) to check for type errors and then builds the project using Vite.

- **Lint the code**:

  ```sh
  npm run lint
  ```

  This will run ESLint to analyze the code for potential errors and enforce coding standards.

- **Run tests**:

  ```sh
  npm run test
  ```

  This will execute the test suite using Jest.

- **Preview the build**:

  ```sh
  npm run preview
  ```

  This will serve the built application locally for previewing.

- **Prepare Git hooks**:

  ```sh
  npm run prepare
  ```

  This will set up Husky Git hooks to enforce commit message conventions and run linters/tests before commits.

- **Type check**:
  ```sh
  npm run typecheck
  ```
  This will run the TypeScript compiler to check for type errors without emitting any files.

By following these steps, you should have the project set up and ready for development.
