import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    resources: {
      en: {
        translation: {
          header: {
            home: 'Home',
            shoes: 'Shoes',
            sweaters: 'Sweaters',
            jackets: 'Jackets',
            pants: 'Pants',
          },
          home: {
            shoes: 'shoes',
            sweaters: 'sweaters',
            jackets: 'jackets',
          },
          card: {
            buttonAdd: 'Get',
          },
          productID: {
            button: 'Get now',
            message:
              'Thank you for choosing us. We hope you enjoy your product and come back soon!',
          },
        },
      },
      es: {
        translation: {
          header: {
            home: 'Inicio',
            shoes: 'Zapatos',
            sweaters: 'Sueteres',
            jackets: 'Chaquetas',
            pants: 'Pantalones',
          },
          home: {
            shoes: 'Zapatos',
            sweaters: 'Sueteres',
            jackets: 'Chaquetas',
          },
          card: {
            buttonAdd: 'Comprar',
          },
          productID: {
            button: 'Obtener ahora',
            message:
              'Gracias por elegirnos. ¡Esperamos que disfrute de su producto y vuelva pronto!',
          },
        },
      },
      fr: {
        translation: {
          header: {
            home: 'Principale',
            shoes: 'Chaussures',
            sweaters: 'Chandails',
            jackets: 'Vestes',
            pants: 'Pantalon',
          },
          home: {
            shoes: 'Chaussures',
            sweaters: 'Chandails',
            jackets: 'Vestes',
          },
          card: {
            buttonAdd: 'Acheter',
          },
          productID: {
            button: 'Acheter maintenant',
            message:
              'Merci de nous avoir choisi. Nous espérons que vous apprécierez votre produit et que vous reviendrez bientôt!',
          },
        },
      },
    },
  })
