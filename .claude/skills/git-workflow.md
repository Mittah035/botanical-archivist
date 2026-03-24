# Skill: Git & Deployment Workflow

## Auto-push na Aanpassingen
Na elke significante aanpassing of batch van aanpassingen:

```bash
cd /c/Users/Mitta/Desktop/botanical-archivist
git add .
git commit -m "feat/fix/style: beschrijving"
git push
```

Vercel deployt automatisch binnen 2-3 minuten.

## Commit Bericht Formaat
```
type(scope): korte beschrijving

Optionele langere beschrijving

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

Types: feat, fix, style, refactor, docs, test, chore

## Branch Strategie
- `main` — productie (auto-deploy naar Vercel)
- `develop` — ontwikkeling
- `feature/naam` — nieuwe features

## Vercel Preview
Elke push naar non-main branch = preview URL voor testen op telefoon.
