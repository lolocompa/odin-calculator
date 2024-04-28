# Odin Calculator

This project is a simple web-based calculator built with HTML, CSS, and JavaScript. It is part of The Odin Project curriculum, designed to help learners understand the basics of web development by building a functional calculator that can perform basic arithmetic operations.

## Features

- **Basic Arithmetic Operations**: Supports addition, subtraction, multiplication, and division.
- **Decimal Support**: Allows the use of decimal numbers for operations.
- **Clear Functionality**: Provides a clear button to reset the calculator to its initial state.

## How It Works

The calculator's functionality is primarily handled through JavaScript. Here's a brief overview of how it operates:

1. **Number and Operator Input**: Users can input numbers and select operators by clicking on the calculator buttons. The input is managed by event listeners attached to each button.

2. **Operation Execution**: Upon clicking the equal (`=`) button, the calculator evaluates the expression based on the input numbers and operators. It follows the correct order of operations, prioritizing multiplication and division before addition and subtraction.

3. **Displaying Results**: The result of the operation is displayed on the calculator's screen.

## Code Structure

- `calculator.html`: Contains the markup for the calculator, including buttons for digits, operators, decimal, and clear functionality.
- `calculator.js`: Handles the logic for the calculator's operations, including capturing user input, performing calculations, and displaying results.
- `styles.css`: Provides styling for the calculator to improve the user interface.

### Key JavaScript Functions

- `add`, `substract`, `multiply`, `divide`: Perform the basic arithmetic operations. [add](https://github.com/lolocompa/odin-calculator/tree/main/calculator.js#L84L87), [substract](https://github.com/lolocompa/odin-calculator/tree/main/calculator.js#L89L92), [multiply](https://github.com/lolocompa/odin-calculator/tree/main/calculator.js#L94L97), [divide](https://github.com/lolocompa/odin-calculator/tree/main/calculator.js#L99L102)
- `operate`: Determines which arithmetic function to call based on the operator. [operate](https://github.com/lolocompa/odin-calculator/tree/main/calculator.js#L105L125)
- `show_screen`: Updates the calculator's screen with the current input or result. [show_screen](https://github.com/lolocompa/odin-calculator/tree/main/calculator.js#L130L136)
- `show_result`: Calculates and displays the result of the entire expression. [show_result](https://github.com/lolocompa/odin-calculator/tree/main/calculator.js#L139L176)

## Getting Started

To use the calculator, simply open the `calculator.html` file in a web browser. No additional setup is required.

## Contributing

Contributions to improve the calculator are welcome. Please feel free to fork the repository, make changes, and submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
