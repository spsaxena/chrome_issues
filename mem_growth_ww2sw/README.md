# Sample app to reproduce memory growth in Chrome 


#### Steps to reproduce memory growth 
* cd mem_growth_ww2sw
* http-server // to run the node server
* launch Chrome and goto localhost:8080
* click reload button to reload after service worker is installed
* open Chrome task manager

Notice: That the memory footprint in Chrome increases rapidly till it Aw Snap! whereas in firefox the memory in firefox remains constant for the web app.


### Begin
<img width="1790" alt="image" src="https://user-images.githubusercontent.com/79571312/161910758-823fbc2b-727b-42ba-be50-453f89dc815c.png">

### After few minutes

<img width="1790" alt="image" src="https://user-images.githubusercontent.com/79571312/161910876-d03054be-590d-4bde-ba31-f47d85202c61.png">

