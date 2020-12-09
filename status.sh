PATH=/usr/local/bin/:$PATH

TIME=$(date +"%H:%M:%S")
SPACES=$(yabai -m query --spaces)

echo $(cat <<-EOF
{ 
    "time": "$TIME",
    "spaces": $SPACES
}
EOF
)
