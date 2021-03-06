foo() {
# Time when the script starts
echo "Start: $(date)"

# A welcome message that includes the current user’s username
echo "Welcome $(whoami)"

# Information on what it does
echo "This is a bash script that checks required programs/dependencies"

# What type of operating system it is running on
if [ "$(uname)" == "Darwin" ]; then
    echo "Operating system: $(uname -a)"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo "Operating system: $(uname -a)"
elif []; then
    echo "Operating system is not supported!" 
fi 

# Checking version of operating system, 
echo "Operating system version: $(uname -v)"

# Checking presence/version of git
if git --version >/dev/null 2>&1; then 
echo "Git version: $(git --version)"
else 
echo "Git not found"
fi

# Checking presence/version of node
if node --version >/dev/null 2>&1; then 
echo "Node version: $(node --version)"
else 
echo "Node not found"
fi

# Checking presence/version of npm
if npm --version >/dev/null 2>&1; then 
echo "Npm version: $(node --version)"
else 
echo "Npm not found"
fi

# Checking presence/version of aws
if aws --version >/dev/null 2>&1; then 
echo "aws version: $(aws --version)"
else 
echo "aws not found"
fi

# Checking presence/version of terraform 
if terraform --version >/dev/null 2>&1; then 
echo "terraform version: $(terraform --version)"
else 
echo "terraform not found"
fi

# Checking presence/version of docker 
if docker --version >/dev/null 2>&1; then 
echo "docker version: $(docker --version)"
else 
echo "docker not found"
fi

# Time when the script ends 
echo "End: $(date)"
echo ""
}

# Generate a log file and output to terminal
foo | tee -a "logfile.txt" 