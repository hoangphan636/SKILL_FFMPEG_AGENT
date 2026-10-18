@echo off
setlocal enabledelayedexpansion

echo === [FFmpeg Agent Self-Bootstrap Windows CMD/BAT] ===

:: 1. Force refresh PATH from Registry (Machine + User)
for /f "tokens=2*" %%A in ('reg query "HKLM\System\CurrentControlSet\Control\Session Manager\Environment" /v Path 2^>nul') do set "SYS_PATH=%%B"
for /f "tokens=2*" %%A in ('reg query "HKCU\Environment" /v Path 2^>nul') do set "USR_PATH=%%B"
set "PATH=%SYS_PATH%;%USR_PATH%;%PATH%"

:: 2. Check Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [Bootstrap] Node.js not detected in PATH. Installing via winget...
    winget install --id OpenJS.NodeJS.LTS -e --silent --accept-source-agreements --accept-package-agreements
    for /f "tokens=2*" %%A in ('reg query "HKLM\System\CurrentControlSet\Control\Session Manager\Environment" /v Path 2^>nul') do set "SYS_PATH=%%B"
    for /f "tokens=2*" %%A in ('reg query "HKCU\Environment" /v Path 2^>nul') do set "USR_PATH=%%B"
    set "PATH=%SYS_PATH%;%USR_PATH%;%PATH%"
)

:: 3. Check FFmpeg and FFprobe
where ffmpeg >nul 2>&1
if %errorlevel% neq 0 (
    echo [Bootstrap] FFmpeg not detected in PATH. Installing via winget...
    winget install --id Gyan.FFmpeg.Essentials -e --silent --accept-source-agreements --accept-package-agreements
    for /f "tokens=2*" %%A in ('reg query "HKLM\System\CurrentControlSet\Control\Session Manager\Environment" /v Path 2^>nul') do set "SYS_PATH=%%B"
    for /f "tokens=2*" %%A in ('reg query "HKCU\Environment" /v Path 2^>nul') do set "USR_PATH=%%B"
    set "PATH=%SYS_PATH%;%USR_PATH%;%PATH%"
)

:: 4. Install npm dependencies
if not exist "node_modules" (
    echo [Bootstrap] Installing node_modules...
    call npm.cmd install
)

:: 5. Build project
if not exist "dist\cli.js" (
    echo [Bootstrap] Building TypeScript project...
    call npm.cmd run build
)

echo.
echo [Bootstrap] All environment checks and builds completed successfully!
node --version
call ffmpeg -version | findstr /i "ffmpeg version"
call ffprobe -version | findstr /i "ffprobe version"
