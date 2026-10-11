# 🚀 Pure HTML, CSS & JS Portfolio Template (Zero-Build Edition)

Deploying a website doesn't need to be complicated. This version removes all complex build steps (Next.js, Node.js, npm, Turbopack) while preserving **100% of the Midnight Liquid Glass aesthetic**, animations, and your custom pastel color palette.

---

## ⚡ Instant 10-Second Netlify Deployment (Drag & Drop)

1. Unzip the downloaded file on your computer.
2. Go to **[Netlify Drop](https://app.netlify.com/drop)** in your web browser.
3. **Drag and drop the unzipped template folder** directly onto the Netlify Drop page.
4. Your website is instantly live worldwide on Netlify with free SSL! No build command, no terminal, and no errors.

---

## 📁 How to Customize Your Website (Edit ONE File Only)

The **only** file you or your buyers ever need to edit is:
```text
config.js
```

You can open `config.js` in:
* **Windows**: Right-click `config.js` ➔ **Open with** ➔ **Notepad**
* **Mac**: Right-click `config.js` ➔ **Open with** ➔ **TextEdit**

---

### What You Can Change in `config.js`:
* **Name & Role**: Section 1 (`name`, `role`, `tagline`, `avatarUrl`)
* **Theme Colors**: Section 2 (`thistle`, `pastelPetal`, `babyPink`, `icyBlue`, `skyBlue`)
* **Services**: Section 5 (`title`, `description`, `icon`)
* **Skills & Workflow**: Section 7
* **Contact & WhatsApp**: Section 9 (`email`, `whatsappNumber`, `whatsappFormatted`)
* **Social Links**: Section 9 (`YouTube`, `Instagram`, `LinkedIn`, `Twitter`)
* **Projects**: Section 12

---

## 🎬 How to Add New Projects (Copy & Paste in `config.js`)

Scroll down to **Section 12** in `config.js` and paste this block into `projects: [`:

```javascript
    {
      id: "my-video-id",                          // Unique ID or YouTube ID
      title: "My New Video Title",                // Project title
      description: "Short summary of the work.",  // Description
      category: "Talking Head",                   // Category (automatically creates a filter pill!)
      youtubeId: "rVVeLdouViU",                   // YouTube Video ID (used for player & HD thumbnail)
      client: "Client Name",                      // Client
      duration: "5:30",                           // Video duration
      software: ["DaVinci Resolve"],              // Software list
    },
```

Save the file and refresh your browser. Your new project, category filter, and playable popup will appear automatically!
