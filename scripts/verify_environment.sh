foo() {
# Time when the script starts
echo "Start: $(date)"

# A welcome message that includes the current user’s username
echo "Welcome $(whoami)"

# Information on what it does
echo "This is a bash script that checks required programs/dependencies"

# What type of operating system it is running on
echo "Operating system: $(uname -a)"

# Checking version of operating system
echo "Operating system version: $(uname -v)"

# Checking version of git
if git --version >/dev/null 2>&1; then 
echo "Git version: $(git --version)"
else 
echo "Git not found"
fi

# Checking version of node
if node --version >/dev/null 2>&1; then 
echo "Node version: $(node --version)"
else 
echo "Node not found"
fi

# Checking version of npm
if npm --version >/dev/null 2>&1; then 
echo "Npm version: $(node --version)"
else 
echo "Npm not found"
fi

# Time when the script ends 
echo "End: $(date)"
echo ""
}

# Generate a log file and output to terminal
foo | tee -a "logfile.txt" 