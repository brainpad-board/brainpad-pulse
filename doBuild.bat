@echo off
echo Cleaning....

rd /q /s "node_modules"
rd /q /s "projects"
rd /q /s "built"

for /f "tokens=*" %%a in ('dir /b /s /a:d ".\libs"') do (
	if /i "%%~nxa"=="built" (
		rd /q /s %%a		
	)
	
	if /i "%%~nxa"=="_locales" (
		rd /q /s %%a		
	)
	
)

echo Installing 1...
npm install

echo Linking...
pxt link ../pxt
pxt link ../pxt-common-packages

echo Installing 2...
npm install

