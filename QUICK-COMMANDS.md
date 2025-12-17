# ⚡ Quick Command Reference

## 🚀 To Push to GitHub (First Time)

```bash
# 1. Create repository on GitHub first (https://github.com/new)
# 2. Then run these commands:

cd "C:\Users\Pablo\Desktop\Sales Stock App\sales-stock-app"

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin master
```

---

## 🔄 To Update GitHub (After Making Changes)

```bash
cd "C:\Users\Pablo\Desktop\Sales Stock App\sales-stock-app"

git add .
git commit -m "Description of your changes"
git push
```

---

## 📱 To Run the App

```bash
cd "C:\Users\Pablo\Desktop\Sales Stock App\sales-stock-app"
npm start

# Then press:
# a = Android emulator
# i = iOS simulator  
# w = Web browser
# Scan QR = Your phone with Expo Go
```

---

## 🛠️ Useful Git Commands

```bash
# Check status
git status

# View commit history
git log --oneline

# See what changed
git diff

# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout master
```

---

## 📦 Package Management

```bash
# Install new package
npm install package-name

# Install all dependencies
npm install

# Update packages
npm update
```

---

## 🔍 Your Current Repo Status

- ✅ **Last Commit**: "feat: Add authentication screens and product management"
- ✅ **Files**: 13 changed, 1558 additions
- ✅ **Branch**: master
- ⚠️ **Remote**: Not configured yet (need to add GitHub URL)

---

## 🎯 Next Steps

1. Create GitHub repository
2. Copy repository URL
3. Run: `git remote add origin YOUR_URL`
4. Run: `git push -u origin master`
5. Done! ✅

---

**Pro Tip**: Use GitHub Desktop if command line feels complicated!

