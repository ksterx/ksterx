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
- Settings > Region & Language > Japanese (Mozc) > Customize Keymap > Change all Hankaku/Zenkaku to Ctrl Space

#### 3. Remap keys

Install tweaks

```bash
sudo apt update
sudo add-apt-repository universe
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

Follow the instructions on the following page: [[Page]](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#installing-docker-ce)

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
