@echo off
cd %~dp0
start chrome http://127.0.0.1:8080 --new-window
http-server --cors
