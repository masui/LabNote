upload: push
	ssh pitecan.com 'cd /www/www.pitecan.com/tmp; /bin/rm -r -f LabNote; git clone  ~/git/DOC/articles/SoftwareDesign/LabNote.git'

push:
	git push -u origin master
	git push -u github master
