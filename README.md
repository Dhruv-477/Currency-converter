# Currency Converter

A simple, responsive web-based currency converter that provides real-time exchange rates for currencies from around the world. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Real-time Exchange Rates**: Get up-to-date currency conversion rates using ExchangeRatesAPI
- **Multi-Currency Support**: Convert between 160+ world currencies
- **Interactive Flag Display**: Visual country flags that update automatically based on selected currencies
- **Responsive Design**: Clean, modern interface that works on desktop and mobile devices
- **Instant Calculation**: Real-time conversion as you type or change currency selections
- **Default Currencies**: Pre-configured with USD to INR conversion for quick access

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Interactive functionality and API integration
- **Font Awesome** - Icons and visual elements
- **ExchangeRatesAPI** - Real-time currency exchange data
- **FlagsAPI** - Country flag images

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API access

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Dhruv-477/Currency-converter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Currency-converter
   ```

3. Open `index.html` in your web browser:
   - **Option 1**: Double-click the `index.html` file
   - **Option 2**: Right-click and select "Open with" your preferred browser
   - **Option 3**: Use a local server (recommended for development):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

## 📖 How to Use

1. **Enter Amount**: Input the amount you want to convert in the text field
2. **Select Source Currency**: Choose the currency you're converting from using the dropdown
3. **Select Target Currency**: Choose the currency you're converting to using the dropdown
4. **Get Exchange Rate**: Click the "Get Exchange Rate" button to see the conversion
5. **View Result**: The conversion result will be displayed below the button

The application automatically loads with a default conversion from USD to INR and fetches the current exchange rate.

## 📁 Project Structure

```
Currency-converter/
├── index.html          # Main HTML file with embedded JavaScript
├── app.js             # Standalone JavaScript file (alternative implementation)
├── countries.js       # Currency to country code mapping for flags
├── style.css          # CSS styles and responsive design
└── README.md          # Project documentation
```

## 🔗 API Dependencies

### ExchangeRatesAPI
- **Purpose**: Provides real-time currency exchange rates
- **Endpoint**: `http://api.exchangeratesapi.io/v1/latest`
- **Note**: Uses a free API key (consider using your own for production)

### FlagsAPI
- **Purpose**: Displays country flags for visual currency identification
- **Endpoint**: `https://flagsapi.com/{country_code}/flat/64.png`
- **Format**: 64x64 pixel flat flag images

### Font Awesome
- **Purpose**: Icons for UI elements
- **CDN**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`

## 🎨 Customization

### Changing Default Currencies
Edit the default selections in `index.html` or `app.js`:
```javascript
if(select.name === "from" && curr === "USD"){
    a.selected = "selected";
}else if (select.name === "to" && curr === "INR"){
    a.selected = "selected";
}
```

### Styling
Modify `style.css` to customize the appearance:
- Change color scheme by updating the CSS variables
- Adjust layout dimensions and spacing
- Modify button styles and hover effects

### Adding More Currencies
Update the `countryList` object in `countries.js` to add support for additional currencies.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** and test them
4. **Commit your changes**: `git commit -m "Add some feature"`
5. **Push to the branch**: `git push origin feature/your-feature-name`
6. **Submit a pull request**

### Development Guidelines
- Follow existing code style and formatting
- Test your changes across different browsers
- Ensure the application remains responsive
- Update documentation if you add new features

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (limited support)

---

**Made with ❤️ by [Dhruv-477](https://github.com/Dhruv-477)**
