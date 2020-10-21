#### known Bugs

# Mission uploader forms
  - the 'write' uploader says it takes 5 images at a time. If you open the file selector and grab 9 images for example, it will still act like everything is ok. you will get 9 image previews. I don't think the back end will accept it though, but there's no warning about this on the front end. I have temporarily commented out the 'multiple' attribute on the uploader component. You can still upload 5 files, but you have to select them one at a time until you build up to 5, and then you can submit them. The 'draw' uploader is the same, but it's only supposed to allow a single image to be uploaded.

# Account selection form.
- when you are already logged in, if you try to 'change users' and then before selecting another user, you change your mind and close the form it logs you out and sends you back to the Okta login. 
- It also keeps your current user in local storage as well as global state, which will cause an issue when trying to immediately log back in. you must first clear local storage at this point to get logged back in. 