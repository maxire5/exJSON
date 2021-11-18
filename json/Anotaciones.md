# Información de Análisis para el Proyecto de Venta de Autos

## Accesorios del Vehículo

### Seguridad:
- Repartidor electrónico de frenado
- Frenos ABS
- Alarma
- Inmovilizador de motor
- Airbag
- Láminas de Seguridad
- Faros antiniebla delantero

### Exterior:
- Accesorios
- Luces Halógenas
- Aros de Aleación

### Equipmiento
- Retrovisores Eléctricos
- Neblineros
- Parlantes/Bajos
- Radio CD

## Características del Vehículo

- Marca
- Modelo
- Categoría (Tipo de vehículo)
- Año de Modelo
- Año de Fabricación
- Kilometraje
- Tipo de Transmisión
- Combustible
- Cilindrada
- Número de Puertas
- Tracción
- Color

## Identificación de Entidades
- Marcas de Vehículos [Toyota, BMW, Jeep, Kia, Hyundai, Nissan, ... ]
- Modelos de Vehículos [Corolla, Yaris, Rav4, ...]
- Marca-Modelo [Toyota-corolla, Toyota-Yaris, ... Kia-Cerato, Kia-Picato, ... Nissan-Versa, ....]
- Tipos de Vehículos [autos, motos, buses-y-camiones]
- Vehículos (Id, descripción, Caracteríticas, Accesorios, Condición [nuevo, usado], plaza)
- Vendedor (Id, Nombre, Appellidos, email, Teléfono (whatsapp), [P.Natural,P.Jurídica])
- Vendedor-Vehículo (un vendedor puede ofertar uno o varios vehículos, concesionario, ...)

## Interfaces a desarrollar u otras anotaciones
- Registro del Vendedor    (Jordan)
- Ingreso (Login) del vendedor (necesario para Registrar Vehículo) (Jordan)
- Registro del Vehículo (solo vendedor propietario)
- Datos del comprador (solo para fines de comunicación)
- upload de fotos
- Filtro principal - Pagina Principal (Diego)
- Interface del anuncio (vehiculo) (Bernie)

## Filtro lateral
- Condición [nuevo, usuado]
- Precio en dólares [rangos predeterminados, rango data entry]
- Año [rangos predeterminados, rango data entry]
- Kilómetros [rangos predeterminados]
- Transmisión [mecánica, automática]
- Departamento
- Categoría
- Combustible [Gasolina, Diesel, Dual(Glp-gasolina), Dual(GNV-gasolina, Híbrido(Electrico-gasolina, Electrico))]
- Tracción {4x2, 4x4, ...]}

### Páginas de ventas de autos:
- https://neoauto.com/
- https://www.carmax.com/
- https://www.truecar.com/
- https://www.cars.com/
- https://www.beautifullife.info/web-design/best-free-car-website-templates-themes/
- https://www.derco.com.pe/catalogo-derco/autos

### Páginas API datos:
- https://api.car2db.com/
- https://edmundsapi-preprod.github.io/api-documentation/vehicle/
