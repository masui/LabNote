upload:
	git push
	ssh pitecan.com 'cd /www/www.pitecan.com/tmp; /bin/rm -r -f LabNote; git clone  ~/git/DOC/articles/SoftwareDesign/LabNote.git'
#	ssh pitecan.com 'cd /www/www.pitecan.com/tmp; git clone  ~/git/DOC/articles/SoftwareDesign/LabNote.git'
#	cd ..; scp -r LabNote pitecan.com:/www/www.pitecan.com/tmp

