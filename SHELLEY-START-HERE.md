# 👋 Start Here, Shelley

This is your **The NIL Game Plan** website project — and your AI **specialist** that manages it with you. This guide gets it running on your computer. You don't need to be technical; just follow along, and your specialist can help with anything that's fuzzy.

*(These steps are for a **Mac**. On Windows? Tell your specialist and it'll adjust.)*

---

## What you're working with
- **Your website** lives in this project folder (the `site/` part is the actual site).
- **Your specialist** = Claude Code, an AI that can read everything here, make changes, and publish them for you. You talk to it in plain English ("change the price to $39", "write a new blog post about NIL taxes", "why isn't the email sending?") and it does the work.
- **It already knows this project** — there's a `CLAUDE.md` file it reads automatically, so it starts every session up to speed.

---

## One-time setup (about 20–30 min)

### 1. Install the tools
Open the **Terminal** app (press `Cmd+Space`, type "Terminal", Enter). You'll paste a few commands. If a step asks for your Mac password, type it (it stays hidden) and press Enter.

**a) Install Homebrew** (a tool that installs other tools) — paste this and follow the prompts:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**b) Install git, the GitHub CLI, Node, ffmpeg, and Google Chrome:**
```
brew install git gh node ffmpeg
brew install --cask google-chrome
```

**c) Install Claude Code** (your specialist):
```
npm install -g @anthropic-ai/claude-code
```
*(If `npm` isn't found, close and reopen Terminal first.)*

### 2. Sign in to GitHub (as you)
```
gh auth login
```
Choose **GitHub.com → HTTPS → Login with a web browser**, and sign in as **shelleyswords**.

### 3. Download your website project
```
cd ~/Desktop
gh repo clone shelleyswords/nil
cd nil
```
Now the whole project is in a `nil` folder on your Desktop.

### 4. Meet your specialist
While inside that `nil` folder in Terminal, start Claude Code:
```
claude
```
Say hi and ask it: **"Read CLAUDE.md and give me a status update on the site."** It'll confirm it understands the project and tell you where things stand.

---

## How to work with your specialist day-to-day
Just open Terminal, then:
```
cd ~/Desktop/nil
claude
```
…and talk to it. Examples of things you can ask:
- "Reword the homepage headline to be punchier."
- "Add a new lesson video to Module 2 — here's the file."
- "Change the launch price from $29 to $39."
- "Write a blog post answering 'do NIL athletes need an LLC?'"
- "Someone said the signup form looks broken — can you check?"
- "Make the email drip a little friendlier."

When you ask for a change, it edits the files, **publishes it live** (your site auto-updates in a minute or two), and tells you what it did. It'll always explain trade-offs and check with you before anything risky.

---

## Your accounts (you control these)
Your specialist manages the *code*, but these are **your** logins, and your secret keys live in them — **never paste a secret key into the chat or the project files**; your specialist will tell you where each one goes.
- **Netlify** — hosting + the email functions + your secret keys (Resend, etc.). Your site auto-publishes here when changes are pushed.
- **Resend** — sends your emails (domain `thenilgameplan.app` is verified).
- **Stripe** — takes payments (currently in **test mode** — switch to live before selling for real).
- **GitHub** — where the project code lives (`shelleyswords/nil`).

---

## A few things to know
- **Your domain is `thenilgameplan.app`** (not `.com` — someone else owns that).
- **Changes go live automatically** when your specialist pushes them. If you don't see a change, refresh the page with **Cmd+Shift+R**.
- **Before selling for real:** switch Stripe from test to live, and have a CPA glance at the tax content. Your specialist will walk you through both.
- **Stuck on setup?** Ask your specialist (or Jamie) — the install steps above are the only "techy" part; after that it's all plain-English conversation.

Welcome to running your own site. Your specialist's got your back. 🏈
