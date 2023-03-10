# Ubuntu

---

## Setup

#### 1. Change the default brower to Google Chrome

#### 2. Download git

```bash
apt-get install git
```

#### 3. Clone this repository

```bash
mkdir ~/Development
git clone 
```

#### 2. Add Japanese language to the system

- Settings > Region & Language > Japanese (Manage Installed Languages > Finish installing > Log out)
- Mozc > Tools > Properties > General > Keymap style > Customize > Change all Hankaku/Zenkaku to Ctrl Space
- Download my dictionary from Google Drive and import it to Mozc dictionary by Mozc > Tools > Properties > Dictionary > Edit user dictionary > Tools > Import to current dictionary

#### 3. Remap keys

Install tweaks

```bash
sudo apt update
<<<<<<< HEAD
sudo add-apt-repository universe
=======
>>>>>>> 795d4c6f5bd1525a49aaaaa41af538380269a04e
sudo apt install gnome-tweaks
```

and remap the keys to the following:

```bash
gnome-tweaks
# Keyboard & Mouse -> Additional Layout Options
# 1. Ctrl position -> Swap Left Alt with Left Ctrl
# 2. Caps Lock behavior -> Swap ESC and Caps Lock
```

#### 4. Change completion setting

```bash
echo "set completion-ignore-case on" >> ~/.inputrc
```

#### 5. Install Docker, CUDA Toolkit & NVIDIA Docker

- Nvidia Docker Installation Guide [[Page]](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#installing-docker-ce)

- CUDA Toolkit Archive [Page](https://developer.nvidia.com/cuda-toolkit-archive)

For Ubuntu 22.04, CUDA 11.7.1, run the following commands:

```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-ubuntu2204.pin
sudo mv cuda-ubuntu2204.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.7.1/local_installers/cuda-repo-ubuntu2204-11-7-local_11.7.1-515.65.01-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu2204-11-7-local_11.7.1-515.65.01-1_amd64.deb
sudo cp /var/cuda-repo-ubuntu2204-11-7-local/cuda-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install cuda-drivers  # Install Nvidia Driver & CUDA Toolkit
```

#### 6. Install following apps

- Visual Studio Code
- Slack
- TeamViewer
- Blender
- UE
- Zoom
- CopyQ
- GIMP
- Inkscape
- Omniverse
- Psensor
- Solaar
- Spotify
- Ulauncer/Albert
- VLC
- MarkText
- Notion
- ClickUp

#### 7. Install Anaconda/Miniconda

Follow the instructions on the following page: [[Page]](https://docs.anaconda.com/anaconda/install/linux/)

#### 8. Install Albert

For Ubuntu 20.04

```bash
curl "https://build.opensuse.org/projects/home:manuelschneid3r/public_key" | sudo apt-key add -
sudo sh -c 'echo "deb http://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_20.04/ /" >> /etc/apt/sources.list.d/home:manuelschneid3r.list'
sudo apt update
sudo apt install albert
```

#### 9. Mount Google Drive
