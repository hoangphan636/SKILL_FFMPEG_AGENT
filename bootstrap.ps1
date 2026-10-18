param (
    [switch]$ForceReinstall
)

$ErrorActionPreference = "Stop"

Write-Host "=== [FFmpeg Agent Self-Bootstrap] Ki?m tra & Thi?t l?p m?i tr??ng ===" -ForegroundColor Cyan

function Refresh-EnvPath {
    $machinePath = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
    $userPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
    $env:Path = "$machinePath;$userPath;$env:Path"
}

Refresh-EnvPath

# 1. Ki?m tra Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue) -or $ForceReinstall) {
    Write-Host "[Bootstrap] Node.js ch?a c trong PATH. Ti?n hnh ci d?t qua winget..." -ForegroundColor Yellow
    winget install --id OpenJS.NodeJS.LTS -e --silent --accept-source-agreements --accept-package-agreements
    Refresh-EnvPath
}

# 2. Ki?m tra FFmpeg & FFprobe
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue) -or -not (Get-Command ffprobe -ErrorAction SilentlyContinue) -or $ForceReinstall) {
    Write-Host "[Bootstrap] FFmpeg/FFprobe ch?a c trong PATH. Ti?n hnh ci d?t Gyan.FFmpeg.Essentials..." -ForegroundColor Yellow
    winget install --id Gyan.FFmpeg.Essentials -e --silent --accept-source-agreements --accept-package-agreements
    Refresh-EnvPath
}

# 3. Ki?m tra npm dependencies
if (-not (Test-Path "node_modules")) {
    Write-Host "[Bootstrap] node_modules ch?a c. Ch?y npm.cmd install..." -ForegroundColor Yellow
    npm.cmd install
}

# 4. Ki?m tra dist/ build
if (-not (Test-Path "dist\cli.js")) {
    Write-Host "[Bootstrap] dist/ ch?a ???c build. Ch?y npm.cmd run build..." -ForegroundColor Yellow
    npm.cmd run build
}

Write-Host "[Bootstrap] T?t c? bin v dependencies ?? s?n sng!" -ForegroundColor Green
node --version
ffmpeg -version | Select-Object -First 1
ffprobe -version | Select-Object -First 1
