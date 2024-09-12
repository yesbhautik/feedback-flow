# Feedback Flow

## Tagline

"Seamlessly gather feedback with a simple scan!"

## Description

Feedback Flow is a web application designed to simplify the process of collecting user feedback via social media platforms like Twitter. By integrating OpenAI's powerful language model, this application generates context-aware feedback prompts that users can share directly on Twitter. The core feature is a dynamically generated QR code on the homepage, which, when scanned, redirects users to a feedback submission page. This page uses the OpenAI API to craft engaging, relevant feedback prompts, enhancing user interaction and engagement.

### Features

- **Dynamic QR Code Generation**: Automatically generates a QR code linking to the feedback page.
- **OpenAI Integration**: Utilizes OpenAI's GPT model to generate intelligent and context-aware feedback prompts.
- **Twitter Integration**: Seamlessly allows users to share their feedback on Twitter with a single click.
- **Responsive Design**: Ensures a smooth user experience across various devices with a clean and modern UI.

### Technologies Used

- **Node.js**: For server-side logic.
- **Express.js**: Web application framework for Node.js.
- **OpenAI API**: For generating feedback prompts.
- **QRCode**: For generating QR codes.
- **HTML/CSS**: For frontend presentation.

### Setup and Installation

1. **Clone the repository:**
```bash
git clone htt
```

2. **Navigate to the project directory:**
```bash
cd feedback-flow
```

3. **Install dependencies:**
```bash
npm install
```

4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add `OPENAI_API_KEY=your_openai_api_key_here` and `PORT=3000` to the `.env` file.
5. **Run the server:**
```bash
node server.js
```

6. **Access the application:**
   - Open a web browser and navigate to `http://localhost:3000` to view the application.

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

This repository is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/). For more information, see the [LICENSE](LICENSE) file.