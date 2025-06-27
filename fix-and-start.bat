@echo off
echo Fixing Tailwind CSS configuration...
echo.

echo Removing conflicting files...
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"

echo.
echo Installing correct dependencies...
npm install

echo.
echo Starting the application...
npm start
