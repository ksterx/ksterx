## Set up

#### 1. Change the default brower to Google Chrome

#### 2. Add Japanese language to the system

- Settings > Region & Language > Japanese (Manage Installed Languages > Finish installing > Log out)
- Settings > Region & Language > Japanese (Mozc) > Customize Keymap > Change all Hankaku/Zenkaku to Ctrl Space

#### 3. Remap keys

Install tweaks

```
sudo apt update
sudo apt install gnome-tweak-tool
```

and remap the keys to the following:

```
gnome-tweaks
# Keyboard & Mouse -> Additional Layout Options
# 1. Ctrl position -> Swap Left Alt with Left Ctrl
# 2. Caps Lock behavior -> Swap ESC and Caps Lock
```

#### 4. Change completion setting by adding the following line to `~/.inputrc`

```
set completion-ignore-case on
```

#### 5. Install Docker, CUDA Toolkit & NVIDIA Docker [[Page]](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#installing-docker-ce)

#### 6. Install following apps

- Visual Studio Code
- Slack
