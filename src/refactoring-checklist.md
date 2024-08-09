## Refactoring Checklist

### Code Smells: When to Refactor

- [ ] Long Method
  - Signs and Symptoms
  - A method contains too many lines of code. Generally, any method longer
    than ten lines should make you start asking questions.
  - To reduce the length of a method body, use [Extract Method](https://refactoring.guru/extract-method).
    - If local variables and parameters interfere with extracting a method, use [Replace Temp with Query](https://refactoring.guru/replace-temp-with-query), [Introduce Parameter Object](https://refactoring.guru/introduce-parameter-object) or [Preserve Whole Object](https://refactoring.guru/preserve-whole-object).
    - If none of the previous recipes help, try moving the entire method to a separate object via [Replace Method with Method Object](https://refactoring.guru/replace-method-with-method-object).
    - Conditional operators and loops are a good clue that code can be moved to a separate method. For conditionals, use [Decompose Conditional](https://refactoring.guru/decompose-conditional). If loops are in the way, try [Extract Method](https://refactoring.guru/extract-method).
- [ ] Primitive Obsession
-   Use of primitives instead of small objects for simple tasks (such as currency, ranges, special strings for phone numbers, etc.)
    
-   Use of constants for coding information (such as a constant  `USER_ADMIN_ROLE = 1`  for referring to users with administrator rights.)
    
-   Use of string constants as field names for use in data arrays.

### DO NOT

- [ ] Add new functionality
- [ ] Change tests/test results

### DO

- [ ] Rule of 3 - DRY code
- [ ] Refactor with dependency injection

- [ ] Refactor using SOLID
  - [ ] Single Responsibility Principle (SRP)
  - [ ] Open Closed Design Principle
  - [ ] Liskov Substitution Principle (LSP)
  - [ ] Interface Segregation Principle
  - [ ] Dependency Inversion Principle
- [ ] Encapsulate what changes
- [ ] Don’t look for things. Ask for things. (Dependency Injection)
- [ ] Favor Composition over Inheritance
- [ ] Program to the Interface not to the Implementation
<!-- - [ ] Delegation Principles -->
- [ ] Make public methods/functions easy to scan
  - Does your code have excessively long public methods or functions?
  - Encapsulate the steps in private methods/functions with the extract method (command+option+m) refactor.
  - Public methods and functions should describe what they do rather than how they do it.

### Code Organization and Structure

- [ ] Use meaningful names for variables, functions, and classes.
- [ ] Separate code into modules or components based on functionality.
- [ ] Avoid deep nesting of code blocks.
- [ ] Remove unused code and comments.

### Code Readability and Maintainability

- [ ] Write clear and concise comments to explain the purpose and functionality of the code.
- [ ] Avoid using magic numbers or strings, use named constants instead.
- [ ] Use meaningful variable and function names.

### Error Handling and Exception Management

- [ ] Handle errors and exceptions appropriately.
- [ ] Use try-catch blocks to handle exceptions.
- [ ] Avoid using bare except statements.
- [ ] Log errors and exceptions for debugging purposes.
- [ ] Use specific exception types instead of generic ones.

### Testing and Code Quality

- [ ] Write unit tests to ensure the correctness of the code.

### Performance Optimization

<!-- - [ ] Optimize loops and algorithms for better performance. -->
<!-- - [ ] Use appropriate data structures and algorithms. -->
<!-- - [ ] Avoid unnecessary computations or redundant code. -->
<!-- - [ ] Profile and benchmark the code to identify performance bottlenecks. -->
