# Pasos para la instalación del proyecto en desarrollo local

Recomendaciones se utilizó : 
- "vue": "^2.7.16"
- PHP 8.2.4
- Laravel Framework 8.83.29
- la libreria  "barryvdh/laravel-dompdf": "^2.2"
  
1. Clonar el repositorio de GitHub

```bash
git clone https://github.com/aldairle95/laboratorios_XYZ.git
```

2. Acceder a la carpeta del repositorio

```bash
cd laboratorios_xyz
```

3. Instalar dependencias

```bash
composer install
```
```bash
composer update
```

4. Copiar .env.example a .env

```bash
cp .env.example .env
```

5. Generar key de la aplicación y limpiar cache

```bash
php artisan key:generate
php artisan config:cache
composer dump-autoload
```

6. Configurar la base de datos en el archivo .env

7. Ejecutar las migraciones junto a los seeders

```bash
php artisan migrate  --seed
```

8. Ejecutar el servidor de desarrollo

```bash
php artisan serve
```


