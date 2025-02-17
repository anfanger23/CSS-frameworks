# CI/CD Pipeline til Bootstrap-projekt med GitHub Actions

Dette dokument beskriver, hvordan du satte en **CI/CD pipeline** op til dit **Bootstrap-projekt** ved hjælp af **GitHub Actions** og **GitHub Pages**.

##  **Projektstruktur**
Min projektstruktur ser sådan ud:
```
CSS-frameworks/
│-- Bootstrap/
│   │-- index.html
│   │-- .github/workflows/deploy.yml
│
│-- BS-npm/
│-- Bulma/
│-- Tailwind/
│-- README.md
```

##  **1. Opret et GitHub Repository**
Først initialiserede du et **Git repository**:
```sh
git init
git add .
git commit -m "Initial commit"
```
Forbind til GitHub:
```sh
git remote add origin https://github.com/din-bruger/css-frameworks.git
git branch -M main
git push -u origin main
```

---

##  **2. Opret GitHub Actions Workflow**
Du oprettede en **CI/CD workflow**, der:
- **Bygger og deployer** dit projekt ved push til `main`
- **Bruger GitHub Pages** til hosting

###  Opret `.github/workflows/deploy.yml`
```yaml
name: Deploy Bootstrap Project

on:
  push:
    branches:
      - main  # Deploy når der pushes til main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./Bootstrap  # Deploy fra Bootstrap-mappen

      - name: Deploy til GitHub Pages
        uses: actions/deploy-pages@v1
```

---

##  **3. Aktivér GitHub Pages**
1. Gå til **din GitHub repo → Settings → Pages**.
2. Under **"Branch"**, vælg `main`.
3. Klik **Save**.

---

##  **4. Push ændringer og deploy**
```sh
git add .
git commit -m "Setup CI/CD pipeline"
git push origin main
```
GitHub Actions vil nu automatisk:
 **Deploade til GitHub Pages**  

Dit projekt er nu live på, min er på:  
🌍 **https://nilma.github.io/CSS-frameworks/Bootstrap/**

---

##  **Fejlfinding & Optimering**
###  Hvis siden ikke loader korrekt
- Sørg for, at du bruger den korrekte URL:  
  👉 **https://nilma.github.io/CSS-frameworks/Bootstrap/**
- Hvis CSS/JS ikke virker, prøv at **hard refresh** (`CMD + SHIFT + R` / `CTRL + SHIFT + R`)

### ** Mulige optimeringer**
- **Brug Netlify/Vercel** for hurtigere hosting 
- **Minificér CSS/JS** for bedre ydeevne
- **Tilføj HTML/CSS linters** i CI/CD for bedre kodekvalitet

---

### **Nu har du en fuldt fungerende CI/CD pipeline til dit Bootstrap-projekt!**  
