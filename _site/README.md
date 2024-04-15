- Neue Unterseite erstellen:

  1. erstelle entsprechend benannten Ordner (mit vorausgehendem Unterstrich!): ./\_NAME/
     1.2 erstelle ./\_NAME/index.html: hier wird die eigentliche Integration der Dateien implementiert -> looped über vorhandene Dateien
  2. definiere Link in ./index.html
  3. füge eintrag zu ./\_config.yml hinzu (hier müssen alle existierenden Unterseiten aufgeführt sein)
  4.

- build and publish (push to github)

  1. after changes were made: jekyll build
  2. git add -> commit -> push

\_layouts/ enthält die layoutspezigikationen die in den \*.md dateien gewählt werden können

layout can be changed in index.html and /css/styles.css

feed.xml contains the script to build the site from the files that are in the category fodlers: loops over these folders

Sub-sites have their own index.html files that determine their structure
