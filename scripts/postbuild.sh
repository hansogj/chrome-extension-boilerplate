rm -rf build
mkdir build
cp -r workspaces/content/build build/content
cp -r workspaces/background/build build/background
cp -r workspaces/popup/build/* build/.
cp -r public/* build/.
