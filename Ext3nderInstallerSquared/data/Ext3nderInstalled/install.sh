wgetd http://julioverne.github.io/com.julioverne.ext3nder-installer_016_iphoneos-arm.deb
mv com.julioverne.ext3nder-installer_016_iphoneos-arm.deb /Ext3nderInstalled/Ext3nder.deb
echo "This Is for RC of Electra, enjoy! I used wget and jtool, both of which are either under GNU or the 'whatever' license"
dpkg-deb -R /Ext3nderInstalled/Ext3nder.deb tmp
jtoold --sign --ent /Ext3nderInstalled/p.ent --inplace /Ext3nderInstalled/tmp/DEBIAN/postinst
jtoold --sign --ent /Ext3nderInstalled/p.ent --inplace /Ext3nderInstalled/tmp/DEBIAN/postrm
echo "Going to install the Deb now!"
mv /Ext3nderInstalled/tmp/var/Ext3nder-Installer /var/
mv /Ext3nderInstalled/tmp/Library/Switches /Library/
mv /Ext3nderInstalled/tmp/Library/MobileSubstrate/DynamicLibraries/* /Library/MobileSubstrate/DynamicLibraries/
/Ext3nderInstalled/tmp/DEBIAN/postinst
echo "Entitlements AWAYYYYYYYYYYYYYYYYYYY!"
jtoold --sign --ent /Ext3nderInstalled/p.ent --inplace /Applications/Ext3nder.app/Extender
jtoold --sign --ent /Ext3nderInstalled/p.ent --inplace /Applications/Ext3nder.app/deceit.dylib
jtoold --sign --ent /Ext3nderInstalled/p.ent --inplace /Applications/Ext3nder.app/Extender.dylib
jtoold --sign --ent /Ext3nderInstalled/p.ent --inplace /Applications/Ext3nder.app/Sys.dylib
chmod +x /Applications/Ext3nder.app/Extender
chmod +x /Applications/Ext3nder.app/deceit.dylib
chmod +x /Applications/Ext3nder.app/Extender.dylib
chmod +x /Applications/Ext3nder.app/Sys.dylib
chmod +x /Applications/Ext3nder.app/WebUpload.bundle/libWebServer.dylib
uicache
echo "You Should Be Done Now!"
