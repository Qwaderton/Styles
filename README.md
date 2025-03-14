# Qwaderton/Styles

> [!WARNING]
> This project is at an early stage of development. We are not responsible for any difficulties you may encounter.

**Qwaderton/Styles** is a simple component library designed to enhance your website with ready-to-use styles. Think of it as a simpler and prettier alternative to Bootstrap, providing beautiful design elements right out of the box.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components Included](#components-included)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To get started, download the library from our Releases page or directly via **Code -> Download ZIP** to obtain the latest version (please note it may not be stable). 

1. Extract the downloaded archive.
2. Move the `src` folder to your project directory. 
3. Import the styles into your site by linking to `/src/styles/styles.css`.

## Usage

Qwaderton/Styles is perfect for:
- Project websites
- Personal pages
- Small web applications

## Components Included

The library includes a variety of components, such as:
- Buttons
- Input fields
- Some form elements
- Cards
- Grid layouts
- Header/Footer
- Navigation
- Side menus

## Customization

You can customize the styles by modifying variables in the `_variables.scss` file. Future updates will introduce ‘add-ons’ that enhance certain elements of your site. For instance, the **Bubble Add-On** will create interesting 3D effects from simple shadows.

## Contributing

We welcome contributions! Here are some recommendations for contributing effectively:
- Avoid writing styles inside an object for more than 7 lines consecutively (longer is fine if it makes sense).
- Comment on what each style you write does for clarity.
- Use SCSS for writing styles as it enhances readability and speeds up development.
- If writing styles for a component, include its name at the top, e.g.: 
  ```scss
  // Main container of the grid
  .grid {
    ...
  }
  // Basic column class with padding variable
  .col {
    ...
  }
  ```
- Create a separate file for each component or group of similar components to keep the structure organized.

## License

This project is licensed under the [BSD 4-Clause License](LICENSE).

## Contact

For any questions, feel free to join our communities:
- [Discord Server](https://discord.gg/qtjrKnCk8y)
- [Telegram Group](https://t.me/+1VzhavR1KM40NjE6)
