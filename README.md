<p align="center">
    <h1 align="center">AI Search</h1>
</p>

</p>

An advanced AI search tool based on Page Assist.

With this tool, you can easily perform social search, academic search, X posts search or even custom search using your own LLMs.

![Screenshot 2025-07-20 205120](https://github.com/user-attachments/assets/13d4e797-08bf-4deb-a464-b36529ab8158)

## Installation

[![Chrome Web Store](https://pub-35424b4473484be483c0afa08c69e7da.r2.dev/UV4C4ybeBTsZt43U4xis.png)]()

### Manual Installation

#### Pre-requisites

- Bun - [Installation Guide](https://bun.sh/)

- Ollama (Local AI Provider) - [Installation Guide](https://ollama.com)

- Any OpenAI API Compatible Endpoint (like LM Studio, llamafile etc.)
1. Clone the repository

```bash
git clone https://github.com/JasonMMIV/AI-Search.git
cd AI-Search
```

2. Install the dependencies

```bash
bun install
```

3. Build the extension (by default it will build for Chrome, Edge and Firefox)

```bash
bun run build
```

_Note: If you face any issues with Bun, use `npm` instead of `bun`._

4. Load the extension (chrome)
- Open the Extension Management page by navigating to `chrome://extensions`.

- Enable Developer Mode by clicking the toggle switch next to Developer mode.

- Click the `Load unpacked` button and select the `build` directory.
5. Load the extension (firefox)
- Open the Add-ons page by navigating to `about:addons`.
- Click the `Extensions` tab.
- Click the `Manage Your Extensions` button.
- Click the `Load Temporary Add-on` button and select the `manifest.json` file from the `build` directory.

## Local AI Provider

- [Ollama](https://github.com/ollama/ollama)

- OpenAI API Compatible endpoints (like LM Studio, llamafile etc.)

## Privacy

AI Search does not collect any personal data. The only time the extension communicates with the server is when you are using the share feature, which can be disabled from the settings.

All the data is stored locally in the browser storage. .

You learn more about the privacy policy [here](Privacy Policy.md).

## Support

If you like the project and want to support it, you can buy me a coffee. It will help me to keep working on the project.

<a href='https://ko-fi.com/jasonmmiv' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

or you can sponsor me on GitHub.

## License

MIT
