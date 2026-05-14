@echo off
setlocal

cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo npm ble ikke funnet. Installer Node.js, eller sjekk at npm ligger i PATH.
  pause
  exit /b 1
)

start "" powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:5173/'"

npm run dev -- --host 127.0.0.1 --port 5173 --strictPort

pause
