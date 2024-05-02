## Subir imagen docker a repositorio
* Generar build con la ruta del repositorio como nombre de imagen
```docker build -t git.maldonado.gub.uy:3000/idm-docker-repo/miportal_estatico:latest .```
* Loguearse al repositorio desde docker
```docker login git.maldonado.gub.uy:3000/idm-docker-repo```
* Hacer push de la imagen
Ejemplo:```doker push {registry}/{owner}{image}:{tag}```
```docker push git.maldonado.gub.uy:3000/idm-docker-repo/miportal_estatico:latest```# marqueza-estatica
