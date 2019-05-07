@echo off

echo %1
if "%1"=="run" ( 
	 react-native run-android
) else if "%1" == "build" (
	cd android
	gradlew assembleRelease
	cd ..
) else if "%1" == "phone" (
	cd android
	xcopy  app\build\outputs\apk\release\*.apk  D:\dev\apache2.4.38\htdocs /y
	cd ..
	D:\dev\apache2.4.38\bin\httpd.exe
)







