@echo off
rd /q /s "built"
rd /q /s "libs\blocksprj\built\codal\build"
del /q /s "libs\blocksprj\built\codal\buildcache.json"
del /q /s "libs\blocksprj\built\codal\codal.json"

REM echo Overwrite...
REM copy /y ".\pxtworker.js" ".\node_modules\pxt-core\built\web"

cls & pxt serve --local
