# Time when the script starts
echo "Start: $(date)"
echo ""

# A welcome message that includes the current user’s username
echo "Welcome $(whoami)"
echo ""

# Information on what it does
echo "This is a bash script that checks required programs/dependencies...."
echo ""

# What type of operating system it is running on
uname -a
echo ""

# Checking version of operating system
uname -v
# Checking version of git
git --version
# Checking version of node
node --version
# Checking version of npm
npm --version

# Generate a log file and output to terminal

# Time when the script ends 
echo "End: $(date)"