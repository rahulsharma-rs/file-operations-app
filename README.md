# DataLens RC Explorer

A modern, high-performance file management application designed for High Performance Computing (HPC) environments. Built with **Next.js**, this secure application runs directly in your browser and interacts with your file system.

![HPC File Manager Preview](/placeholder-image)

## ✨ Features

*   **⚡️ Zero-DB Architecture**: Works directly with your file system. No database required.
*   **📂 Core Operations**: Upload, Download, specific file Rename, Move, and Delete.
*   **🗑️ Trash & Recovery**: Safe "soft delete" with a Trash Bin and restore functionality.
*   **⭐ Favorites**: Bookmark frequently accessed files and folders.
*   **🕒 Smart Recent Files**: Automatically tracks files modified in the last 7 days.
*   **🤝 Sharing**: Share files with other users on the system via symlinks (HPC-friendly).
*   **🔒 Secure**: Runs as the logged-in user with standard system permissions.

---

## 🚀 Local Development

Follow these steps to run the application on your local machine (Mac, Linux, or WSL).

### Prerequisites
*   Node.js 18+ installed.

### Installation
1.  Clone the repository:

    ```bash
    git clone https://github.com/rahulsharma-rs/file-operations-app.git
    cd file-operations-app
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```

### Running Locally
Start the development server:
```bash
npm run dev
```
Access the app at `http://localhost:3000`.

---

## ☁️ Deploying on Open OnDemand

This application is fully compatible with **Open OnDemand (OOD)** as a Passenger App.


### 1. Deployment Location
Navigate to your OnDemand development directory and clone the repository:

```bash
cd ~/ondemand/dev
git clone https://github.com/rahulsharma-rs/file-operations-app.git file-manager
cd file-manager
```

*Alternatively, to pull the latest updates later:*
```bash
git pull origin main
```

### 2. Build for Production
You must build the application before running it on OOD.

```bash
# Load nodejs module if required, e.g., module load nodejs
npm install
npm run build
```

### 3. Verify Configuration
*   **`manifest.yml`**: Included in the root. Defines the app title and category for the OOD Dashboard.
*   **`app.js`**: The entry point for Phusion Passenger. It automatically starts the Next.js server.
*   **`next.config.mjs`**: Configured to automatically detect the sub-URI via `PASSENGER_BASE_URI`.

### 4. Accessing the App
1.  Go to your Open OnDemand Dashboard.
2.  Navigate to **Develop** -> **My Sandbox Apps** (or equivalent menu).
3.  Click **Launch File Manager**.

The app will launch at a URL like: `https://ood.your-center.edu/pun/dev/file-manager`

---

## 🛠️ Technical Details

*   **Framework**: Next.js 16 (App Router)
*   **Styling**: Tailwind CSS + Shadcn/UI
*   **Icons**: Lucide React
*   **Server**: Node.js (Standalone or managed by Passenger)


### Troubleshooting
**Error: `SyntaxError: Unexpected token '??='`**
This means the system Node.js version is too old. You have two options:

1.  **Load a newer module (Recommended):**
    Ensure a newer Node.js (v18+) is loaded before the app starts. You can try adding this to your `~/.bashrc`:
    ```bash
    module load nodejs/20
    ```

2.  **Use the included wrapper:**
    I've included a wrapper script in `bin/node`. You can configure Passenger to use this by creating a `.htaccess` file in the app directory:
    ```apache
    PassengerNodejs /users/YOUR_USER/ondemand/dev/file-manager/bin/node
    ```
    *(Replace `YOUR_USER` with your actual username)*

### Open OnDemand Specifics
The app uses a custom `app.js` entry point to integrate with Phusion Passenger. It reads the `PASSENGER_BASE_URI` environment variable provided by OOD to correctly set the application `basePath`, ensuring assets and links load correctly relative to `/pun/sys/app` or `/pun/dev/app`.
