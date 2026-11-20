@echo off
chcp 65001 >nul
setlocal
set "PY=%DSH_PYTHON%"
if not defined PY set "PY=C:\Users\ghykk\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"
if not exist "%PY%" set "PY=python"
"%PY%" "%~dp0lookup.py" %*

