@echo off

SET INPATH=%1

IF "%INPATH%" == "" (
	SET INPATH="images"
)


pxt buildsprites %INPATH%