# Near Setup
* Table of content
    * Javascript env
    * Rust env

Default dev environment in linux or wsl.

## Javascript env
```bash
npm install -g near-cli
```

## Rust env
```bash
npm install -g near-cli-rs cargo-near
```

Alternative:
```bash
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh | sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/cargo-near/releases/latest/download/cargo-near-installer.sh | sh
```