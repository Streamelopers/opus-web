Esto es un proyecto de [Next.js](https://nextjs.org/) utilizando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tecnologías

- [Next.js](https://nextjs.org) - es un framework construido sobre Node.js que permite las funcionalidades de las aplicaciones web basadas en React, como el renderizado del lado del servidor y la generación de sitios web estáticos.
- [Typescript](https://www.typescriptlang.org) - es un lenguaje de código abierto que se basa en JavaScript, una de las herramientas más utilizadas del mundo, añadiendo definiciones de tipos estáticos.
- [Chakra UI](https://chakra-ui.com) - es una librería de componentes, modular y accesible que te da los bloques de construcción que necesitas para construir tus aplicaciones React.
- [Sass](https://sass-lang.com/) - es un preprocesador CSS es una herramienta que nos permite generar, de manera automática, hojas de estilo, añadiéndoles características que no tiene CSS.

# Requerimientos

- Node.js 12 o más nuevo
- NPM 6 o más nuevo

Para instalar ve [aquí](https://nodejs.org/en/download/) y descarga la versión correspondiente.

# Backend

- [Endpoints](https://api-dev.opus.do/swagger)
- [Entidades](https://github.com/Streamelopers/opus-api/blob/main/Requerimientos/Entidades.md)

## Configuración

```bash
npm install
```

Copia el template del archivo de las variables de entorno.

```bash
cp .env.example .env.local
```

A continuación, rellene los valores del `.env.local`. Más información [aquí](https://nextjs.org/docs/basic-features/environment-variables)

## Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Si estás utilizando Windows entonces ejecuta `npm run dev:windows` ya que hay un bug en Next.js que hace que el Fash refresh no funcione bien en Windows, puedes ver mas detalles aquí: [#Bug: Fast Refresh is not working on Windows 10](https://github.com/vercel/next.js/discussions/22214#discussioncomment-795047)

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver la apliacación funcionando.

Puedes empezar a editar la página modificando `pages/index.tsx`. La página se actualiza automáticamente a medida que se edita el archivo.

Se puede acceder a las [rutas del API](https://nextjs.org/docs/api-routes/introduction) en [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint se puede editar en `pages/api/hello.tsx`.

El directorio `pages/api` se asigna a `/api/*`. Los archivos de este directorio se tratan como [rutas para el API](https://nextjs.org/docs/api-routes/introduction) en lugar de páginas React.

## Aprende más

Para saber más sobre Next.js, eche un vistazo a los siguientes recursos:

- [Documentation de Next.js](https://nextjs.org/docs) - conozca las características y la API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes consultar [el repositorio GitHub de Next.js](https://github.com/vercel/next.js/): ¡tus comentarios y contribuciones son bienvenidos!

## Despliegue en Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizar la [Plataforma Vercel](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación sobre el despliegue de Next.js](https://nextjs.org/docs/deployment) para obtener más detalles.
