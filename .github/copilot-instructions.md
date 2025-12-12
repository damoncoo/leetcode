# Copilot Instructions for leetcode Array Solutions

## Project Overview
This repository contains algorithm solutions for array problems, implemented in both JavaScript and Swift. Each file in the `array/` directory corresponds to a specific problem, with parallel implementations in both languages where applicable.

## Directory Structure
- `array/`
  - `*.js`: JavaScript solutions
  - `*.swift`: Swift solutions

## Key Patterns & Conventions
- Each JavaScript file exports its main function using `module.exports` for easy reuse and testing.
- Swift files use top-level functions and may include a `main()` for demonstration.
- Problem logic is self-contained in each file, with minimal dependencies. The only cross-file dependency is in JavaScript, where `rotate.js` requires `reverse.js`.
- Inline comments (including Chinese explanations) clarify algorithmic choices and bitwise operations.
- Console output is used for quick validation of solutions.

## Example: Cross-file Dependency
- `rotate.js` (JavaScript) imports `reverseArray` from `reverse.js`:
  ```js
  const { reverseArray } = require("./reverse");
  ```

## How to Add New Solutions
- Place new solutions in the `array/` directory, using the same naming convention for both languages if possible.
- Export the main function in JavaScript using `module.exports`.
- For Swift, use top-level functions and a `main()` for demonstration if needed.

## Testing & Validation
- Run JavaScript files directly with Node.js to see console output.
- Run Swift files with `swift` or in Xcode Playground.
- No formal test framework is present; rely on provided `console.log` or `print` statements.

## No External Dependencies
- The codebase does not use external libraries or frameworks.
- No build or test scripts are present; all files are standalone.

## Summary Table
| File                | Language   | Purpose/Pattern                  |
|---------------------|------------|----------------------------------|
| duplicate.js/swift  | JS/Swift   | Detect duplicates in array       |
| reverse.js/swift    | JS/Swift   | Reverse array in-place           |
| rotate.js           | JS         | Rotate array using reverse logic |
| single.js           | JS         | Find single number (XOR logic)   |

## Conventions
- Keep solutions minimal and focused on the algorithm.
- Use comments to explain non-trivial logic, especially bitwise operations.
- Prefer clear, idiomatic code for each language.

---
For questions or to extend conventions, update this file.
