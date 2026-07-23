these scripts can be used with git bash (or, just regular terminal on Linux) in conjunction with an installed copy of the "ImageMagick" software to take some folders of images, (ie, /photos /projects) and generate an output tree of web-quality .webp images, and also the thumbnails, and then also generate the .ts array of images that is currently embedded into the typescript. So you can drop the image folders here, and run both scripts, and then paste the images and the array back into the page, and it should update all the images in a big batch

notes:

1) right now the page is expecting there to be two galleries at /photos and /projects. It would be easy to add other galleries, its almost fully parametric but it would require making some links and cards and a little glue on the main page to actually get there.

2) the array is generated without any titles or descriptions. if it is regenerated then those will be zeroed out. Could easily make another script to import the old descriptions to the new file to do a proper update but for now i haven't needed that