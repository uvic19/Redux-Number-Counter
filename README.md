# Redux Number Counter

A simple React application that demonstrates the use of Redux for state management. This app features a counter that allows users to increment, decrement, and reset a number, as well as increase it by a specified amount.

## Features

- Increment the counter by 1
- Decrement the counter by 1
- Reset the counter to 0
- Increase the counter by a user-defined amount

## Technologies Used

- React
- Redux
- CSS for styling

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd redux-number-counter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your web browser and go to [http://localhost:3000](http://localhost:3000).

## Usage

- Click the **+** button to increment the counter.
- Click the **-** button to decrement the counter.
- Click the **Reset Count** button to reset the counter to 0.
- Enter a number in the input field and click **Increase by Amount** to add that amount to the counter.

## Code Overview

The main functionality is implemented in the `App` component, which uses Redux to manage the counter state. Key functions include:

- `handleIncrementClick`: Dispatches the increment action to increase the counter by 1.
- `handleDecrementClick`: Dispatches the decrement action to decrease the counter by 1.
- `handleResetClick`: Dispatches the reset action to set the counter back to 0.
- `handleIncAmountClick`: Dispatches an action to increase the counter by a user-defined amount.

The state of the counter is retrieved from the Redux store using the `useSelector` hook, and actions are dispatched using the `useDispatch` hook.

## Folder Structure

```
/redux-number-counter
├── /src
│   ├── /app
│   ├── /features
│   │   ├── /counter
│   │   │   ├── counterSlice.js
│   ├── App.css
│   └── App.js
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
