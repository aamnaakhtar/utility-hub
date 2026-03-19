import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      {
        title: 'To Do List',
        description:
          'Manage your tasks, stay organized and boost your productivity with our intuitive to-do list app.',
        link: 'https://aamnaakhtar.github.io/to-do-list-js',
        image: '/assets/todo.jpg',
      },
      {
        title: 'Weather App',
        description: 'Check the current weather of anywhere in one click',
        link: 'https://aamnaakhtar.github.io/weather-app',
        image: '/assets/weather.jpg',
      },
      {
        title: 'Currency Converter',
        description:
          'Check the real-time accurate exchange rates with a user-friendly interface.',
        link: 'https://aamnaakhtar.github.io/currency-converter',
        image: '/assets/currency-convertor.jpg',
      },
      {
        title: 'QR Generator',
        description:
          'Generate QR codes for any text or URL with our simple and efficient QR code generator.',
        link: 'https://aamnaakhtar.github.io/qrGenerator',
        image: '/assets/qrcode.jpg',
      },
      {
        title: 'Quote Of The Day',
        description: 'Get inspirational and motivational quote on one click',
        link: 'https://aamnaakhtar.github.io/quotes-generator',
        image: '/assets/quote.jpg',
      },
    ];
  }
}
