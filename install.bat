@echo off
echo Installing German-Urdu Tutor dependencies...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version

echo.
echo Cleaning previous installation...
if exist node_modules (
    rmdir /s /q node_modules
)
if exist package-lock.json (
    del package-lock.json
)

echo.
echo Installing npm dependencies...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo Error: Failed to install dependencies
    echo Please check your internet connection and try again
    pause
    exit /b 1
)

echo.
echo Installation completed successfully!
echo.
echo To start the application, run:
echo npm start
echo.
pause
