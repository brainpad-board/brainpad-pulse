@echo off

SET INPUT_DIR=%CD%
SET OPTION=%1

IF "%OPTION%" == "" (
	ECHO Error:
    ECHO 	0 : Overwrite PXT relates to colors pallete.
    ECHO 	1 : Overwrite path in gh-pages, and fix Icon
	GOTO :EOF
)

IF "%OPTION%" == "1" (
	SET INPUT_DIR="%CD%\gh-pages"
	
)

Echo Working on %INPUT_DIR%...
call "%CD%\tools\OverwritePxtOutput.exe" %OPTION% %INPUT_DIR%


