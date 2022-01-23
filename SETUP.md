# Frontend Setup

## 1. Setup Node and npm
In order to install node and node package manager (npm) we are first going to install node version manager (nvm). This is the easiest way to manage node versions as the apt repository often causes problems

**Step 1: Install curl and fetch the install script**
```
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

**Step 2: This prevents us from having to log in and out again**
```
source ~/.profile   
```
**Step 3: Install node (installs latest version)**
```
nvm install node
```

## 2. Install Packages
Navigate to inside the root directory of the project and execute the following:
```
npm install
```

## 3. Run development Server
Execute from the root of the project directory
```
npm run dev
```
