Write-Host "Installing German-Urdu Tutor dependencies..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Cyan
} catch {
    Write-Host "Error: Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Cleaning previous installation..." -ForegroundColor Yellow

# Remove node_modules and package-lock.json if they exist
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules" -ErrorAction SilentlyContinue
    Write-Host "Removed node_modules directory" -ForegroundColor Gray
}

if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json" -ErrorAction SilentlyContinue
    Write-Host "Removed package-lock.json" -ForegroundColor Gray
}

Write-Host ""
Write-Host "Installing npm dependencies..." -ForegroundColor Yellow

# Install dependencies
$process = Start-Process -FilePath "npm" -ArgumentList "install" -Wait -PassThru -NoNewWindow

if ($process.ExitCode -eq 0) {
    Write-Host ""
    Write-Host "Installation completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "To start the application, run:" -ForegroundColor Cyan
    Write-Host "npm start" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Error: Failed to install dependencies" -ForegroundColor Red
    Write-Host "Please check your internet connection and try again" -ForegroundColor Yellow
}

Read-Host "Press Enter to continue"
