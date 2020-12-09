# desk
A stupidly simple menu bar for macOS desktops with the [yabai](https://github.com/koekeishiya/yabai)
window manager integration.

Uses [Ubersicht](https://github.com/felixhageloh/uebersicht) for rendering the components
with `React`.

# Usage
Install in widgets folder
```
git clone https://github.com/marc1/desk
mv desk ~/Library/Application Support/Übersicht/widgets/desk # default location
```

Make sure `yabai` refreshes properly<sup>1</sup>
```
yabai -m signal --add event=space_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"desk-bar-jsx\"'"
yabai -m signal --add event=window_focused \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"desk-bar-jsx\"'"
yabai -m signal --add event=window_destroyed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"desk-bar-jsx\"'"
yabai -m signal --add event=window_created \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"desk-bar-jsx\"'"
```
<sup>1</sup>: `yabai` does not currently have support for events such as `space_destroyed`, `space_created`,
`space_renamed`,so you'll have to add refreshing for those events manually





