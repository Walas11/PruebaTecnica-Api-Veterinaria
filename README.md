# PortalVeterinaria
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Instalar -> "ng add @angular/material"

* EN EL APPSETTINGS.JSON SE ENCUENTRA LA CADENA DE CONEXION DE BASE DE DATOS EN SQL EXPRESS, REALIZAR EL CAMBIO EN ESTE:

  "ConnectionStrings": {
    "conexion": "Server=.\\SQLExpress;Database=Veterinaria;Trusted_Connection=True;"
  },

* SE ANEXA LA CREACIÓN DE LA TABLA COMO QUERY:

USE [Veterinaria]
GO
/****** Object:  Table [dbo].[Mascotas]    Script Date: 21/07/2023 8:25:44 a. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Mascotas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](max) NOT NULL,
	[especie] [nvarchar](max) NOT NULL,
	[raza] [nvarchar](max) NOT NULL,
	[fechaNacimiento] [nvarchar](max) NOT NULL,
	[IdDueno] [int] NOT NULL,
	[fechaCreacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Mascotas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


