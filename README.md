# REMIX WEBSITE

## build 
install jekyll
run jekyll serve or jekyll build


## DATA

All data is stored in _data yml files

1. sections:array

	*  title
	*  subtitle
	*  text
	*  video, an mp4 file stored in /assets/
	*  gallery:array
		*  type 
			*  youtube (ie https://youtu.be/BTtTE8aSJl8)
			*  card (ie the libraries) 
			*  img
		* title (only for cards)
		* content (only for cards)
		* link (only for cards)
			*  url
			*  title
	*  img
	*  code
	*  buttons:array
		*  title
		*  href
		*  style


2. footer
	* columns:array
		* title
		* items:array
			* title
			* href
3. team
	* title
	* description
	* members:array
		* name
		* bio
		* position
		* github
		* twitter
		* linkedin



