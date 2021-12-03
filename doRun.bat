@echo off
rd /q /s "built"
rd /q /s "libs\blocksprj\built\codal\build"
del /q /s "libs\blocksprj\built\codal\buildcache.json"
del /q /s "libs\blocksprj\built\codal\codal.json"

cls & pxt serve --local


