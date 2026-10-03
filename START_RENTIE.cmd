@echo off
cd /d "%~dp0"
if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" (
  "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" serve.py
  exit /b
)
where py >nul 2>nul
if not errorlevel 1 (
  py -3 serve.py
  exit /b
)
where python >nul 2>nul
if not errorlevel 1 (
  python serve.py
  exit /b
)
echo Python was not found. Opening the static page instead.
start "" "index.html"
pause
