# 👋 Start Here, Shelley

This is your **The NIL Game Plan** website — and your AI **specialist** that runs it *for* you. You don't do anything technical. You just talk to it like a teammate ("change the price to $39", "write a blog post about NIL taxes", "the signup form looks off — can you check?") and it makes the change, publishes it to your live site, and tells you it's done.

---

## ⭐ Your everyday routine (this is all you need)

1. Open your project folder (**`nil`** — Jamie will put it somewhere easy to find, like your Dock or Finder sidebar).
2. **Double-click `Start Specialist.command`.**
   - *First time only:* if your Mac says it can't verify the file, **right-click it → Open → Open**. You only do this once.
3. A window opens. **Type what you want, in plain English.** Hit Enter.
4. The specialist does the work and publishes it live. Give it a minute, then refresh your site to see it.

That's the whole job. You never edit files, type commands, or "deploy" anything — the specialist handles 100% of that.

**Things you can just ask for:**
- "Reword the homepage headline to be punchier."
- "Change the launch price from $29 to $39."
- "Write a new blog post answering 'do NIL athletes need an LLC?'"
- "Make the welcome email a little warmer."
- "Add this new video to the course." (then tell it where the video file is)
- "Someone said a link is broken — can you find and fix it?"
- "How many people signed up this week?" (it'll tell you how to check)

When something needs *your* login (Netlify, Resend, Stripe), the specialist will give you simple click-by-click steps. **Never paste a secret key into the chat** — it'll always tell you the safe place for those.

---

## 🛠️ One-time setup (≈20 min — best done by Jamie, or sit with him once)

*This is the only "techy" part, and it's done a single time. After this, Shelley just uses the launcher above.*

Open **Terminal** (Cmd+Space → "Terminal"). Paste each block, press Enter, follow prompts (typing your Mac password when asked — it stays hidden):

**1. Install Homebrew** (installs other tools):
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**2. Install the tools** (git, GitHub CLI, Node, ffmpeg + Chrome for video work):
```
brew install git gh node ffmpeg
brew install --cask google-chrome
```

**3. Install Claude Code** (the specialist) — *close and reopen Terminal first if `npm` isn't found:*
```
npm install -g @anthropic-ai/claude-code
```

**4. Sign in to GitHub as Shelley:**
```
gh auth login
```
Choose **GitHub.com → HTTPS → Login with a web browser**, sign in as **shelleyswords**.

**5. Download the project:**
```
cd ~/Desktop
gh repo clone shelleyswords/nil
```
This creates a `nil` folder on the Desktop containing the whole project (and the `Start Specialist.command` launcher).

**6. Test it:** open the `nil` folder, double-click **`Start Specialist.command`** (right-click → Open the first time). If the specialist starts, you're done. If it says it can't find `claude`, reopen Terminal and re-run step 3.

**7. Make it easy to find:** drag the `nil` folder into Finder's sidebar (or its launcher to the Dock) so Shelley can get to it in one click.

---

## Your accounts (already set up ✅)
You've got **Netlify** (hosting + email functions), **GitHub** (the code), **Resend** (sends email), and **Stripe** (payments) — so you're good to go. Your specialist manages the website; these dashboards are where *your* secret keys live (and it'll guide you whenever one's needed).

## Good to know
- **Your site is `thenilgameplan.app`** (not `.com`).
- **Changes go live automatically** when the specialist publishes them — refresh with **Cmd+Shift+R** if you don't see one.
- **Before selling for real:** switch Stripe from test mode to live, and have a CPA glance at the tax content. Your specialist will walk you through both — just ask when you're ready.

Welcome to running your own site. Just double-click and talk. 🏈
