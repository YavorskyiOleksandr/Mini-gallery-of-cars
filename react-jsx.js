const e = React.createElement;

function Car(props) {
  return e('div', { className: 'card' }, [
    e('div', { className: 'card-img', key: 'div' }, e('img', { src: props.car.img, alt: props.car.name })),
    e('h3', { key: 'h3' }, props.car.name),
    e('p', { key: 'p' }, 'Від ' + props.car.price + ' $ (USD)'),
    e('a', { key: 'a', href: "#" }, 'Детальніше')
  ]);
}

class App extends React.Component {
  state = {
    cars: [
      { name: 'BMW X7', price: '152 000', img: 'img/bmw_x7.jpg' },
      { name: 'Honda CR-V', price: '69 500', img: 'img/honda-cr-v-2023.jpg' },
      { name: 'Hyundai Santa Fe', price: '46 000', img: 'img/Hyundai-Santa-Fe.jpg' },
      { name: 'Dacia Duster', price: '26 000', img: 'img/Dacia-Duster.jpg' },
      { name: 'Jeep Grand Cherokee', price: '67 000', img: 'img/jeep.jpg' },
      { name: 'Mercedes-Benz S-Class', price: '251 000', img: 'img/mercedes.jpg' },
      { name: 'Nissan Altima', price: '22 000', img: 'img/nissan-altima.jpg' },
      { name: 'Audi Q8', price: '89 000', img: 'img/audi_q8.jpg' },
      { name: 'Toyota Land Cruiser', price: '91 000', img: 'img/toyota.jpg' },
      { name: 'Mercedes-Benz GLS', price: '117 000', img: 'img/mercedes-gls.jpeg' },
      { name: 'Audi A7', price: '65 000', img: 'img/Audi_A7.jpg' },
      { name: 'Land Rover Range Rover', price: '84 000', img: 'img/Land Rover Range Rover.jpg' }
    ]
  };

  renderCars() {
    return this.state.cars.map(car => {
      return e(Car, { car: car, key: car.name + Math.random() });
    });
  }

  render() {
    return e(
      'div',
      { className: 'list' },
      this.renderCars()
    );
  }
}

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);
appRoot.render(e(App));
  

