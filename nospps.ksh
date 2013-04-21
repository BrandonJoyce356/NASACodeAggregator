#!/bin/bash
# space apps challenge: syncing nasa open source projects
# 2013-04-20
# s. henry herold (henry.herold@comcast.net)
# Brandon Joyce
# Marc Phillips
# Pawel Grzegrzolka

# usage: ./nospps.ksh
# description:  this program scrapes the project url's from code.nasa.gov and parses the links to get the latest downloads of each project.

site="http://code.nasa.gov/project/"
control=0; i=1
while [ $control -eq 0 ]
do
 wget -q "$site"page/$i -O nospps-list.$i
 if [ $? -eq 0 ]
 then
  grep \<h1\>\<a.*/a\>\</h1\> nospps-list.$i  | tr '<>' '<<' | awk -F \< '{print $5}' >> nospps-project.title
  egrep "(opensource.gsfc.nasa.gov|github.com|svn.apache.org|sourceforge.net|gmat.gsfc.nasa.gov|directreadout.sci.gsfc.nasa.gov)" nospps-list.$i | awk -F \" '{print $2}' >> nospps-project.url
#  paste nospps-project-title.$i nospps-project-url.$i
  i=`expr $i + 1`
 else
  rm -f nospps-list.*
  control=1
 fi
done

i=1
cat nospps-project.title | while read line
do
 title=`echo $line | tr ' /()' '----'`
 mkdir -p $title; cd $title
 url=`sed -n "$i"p ../nospps-project.url`
 if [ "`echo $url | egrep "(\\.htm$|\\.php$|\\.html$|\\.cgi$)"`" ]
 then
  url=${url%/*}
 fi
 if [ -z "`echo $url | grep /$`" ]
 then
  url=$url/
 fi

                                                     ####################
 if [ "`echo $url | grep opensource.gsfc.nasa.gov`" ]          ########## nasa's open source site scraper
 then
  wget -q $url -O $title.html
  source=`egrep -o \".*\\."(tar|gz|zip|bz2)"\" $title.html | awk -F \" '{print $2}'`
  for item in $source
  do
   wget -N ${url%/*}/$item
  done

                                                     ####################
 elif [ "`echo $url | grep sourceforge.net`" ]                 ########## nasa's sourceforge project scraper
 then
  if [ -z "`echo $url | grep http://sourceforge.net`" ]
  then
   projname=`echo $u | cut -b 8- | awk -F . '{print $1}'`
   url=http://sourceforge.net/projects/$projname/
  fi
  wget -q $url -O $title.html
  source=`awk -F \" '/File released:/ {print $2}' $title.html | sed s/\\\/download//`
  wget -N $source

                                                     ####################
 else                                                          ########## unknown repo type -- dont know how to scrape
  echo $url > url.$i
 fi



 i=`expr $i + 1`
 cd ..
done
rm nospps-project.title nospps-project.url
