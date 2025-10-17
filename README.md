# 🔐 Random Password Generator

👋 **Hello, everybody!**  
This project is a **Random Password Generator** that helps you create secure and customizable passwords in just one click ⚡  

---

## 🌟 Features

- ✅ Choose what to include — **uppercase**, **lowercase**, **numbers**, or **symbols**  
- 🧩 **Dynamic customization**: check or uncheck boxes to control password content  
- 🚫 **Validation**: if no boxes are selected, no password will be generated  
- 📋 **One-click copy**: easily copy your generated password to the clipboard  

---

## 🖥️ How It Works

1. Select your desired options by checking the boxes  
2. Click **“Generate Password”**  
3. Copy the password and use it anywhere safely  

---

## 🧠 Example

```js
// Example: combining character types based on user selection
if (uppercaseEl.checked) {
  characters.push(...uppercaseChars);
}
if (lowercaseEl.checked) {
  characters.push(...lowercaseChars);
}
if (numbersEl.checked) {
  characters.push(...numbers);
}
if (symbolsEl.checked) {
  characters.push(...specialChars);
}
