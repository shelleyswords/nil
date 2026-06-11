#!/usr/bin/env python3
"""Rebrand The NIL Playbook -> The NIL Game Plan, domain -> thenilgameplan.app.
Ordered, surgical replacements across text files only."""
import os

# Ordered replacements (order matters)
REPS = [
    ("The-NIL-Playbook", "The-NIL-Game-Plan"),       # hyphenated filename stem (do first)
    ("thenilplaybook.com", "thenilgameplan.app"),     # domain
    ("thenilplaybook", "thenilgameplan"),             # handles / email stem
    ("THE NIL PLAYBOOK", "THE NIL GAME PLAN"),         # uppercase (code comments, slides)
    ("The NIL Playbook", "The NIL Game Plan"),         # brand (full)
    ("NIL Playbook", "NIL Game Plan"),                 # brand (no "The")
    (">Playbook</span>", ">Game Plan</span>"),         # logo/cover gold word
    ("the full Playbook", "the full Game Plan"),
    ("full Playbook", "full Game Plan"),
    ("The Playbook", "The Game Plan"),
    ("Playbook (", "Game Plan ("),                     # "Playbook ($29)" / "(PDF)"
    ("the Playbook", "the Game Plan"),
    ("NIL Playbook", "NIL Game Plan"),
]

TEXT_EXT = {".html", ".css", ".js", ".json", ".md", ".txt", ".xml", ".toml",
            ".py", ".webmanifest"}
SKIP_DIRS = {".git", "node_modules"}
SKIP_PATHS = {"build/slides", "build/rebrand.py"}

changed = []
for root, dirs, files in os.walk("."):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    if any(s in root for s in SKIP_PATHS):
        continue
    for fn in files:
        ext = os.path.splitext(fn)[1].lower()
        if ext not in TEXT_EXT:
            continue
        p = os.path.join(root, fn)
        if any(s in p for s in SKIP_PATHS):
            continue
        try:
            orig = open(p, encoding="utf-8").read()
        except (UnicodeDecodeError, IsADirectoryError):
            continue
        new = orig
        for a, b in REPS:
            new = new.replace(a, b)
        if new != orig:
            open(p, "w", encoding="utf-8").write(new)
            changed.append(p)

print(f"Rebranded {len(changed)} files:")
for c in sorted(changed):
    print(" ", c)
