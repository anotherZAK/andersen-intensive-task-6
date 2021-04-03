class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false
  #mileage = 0;

  constructor(brand = 'BMV', model = 'X4', yearOfManufacturing = 2020, maxSpeed = 240, maxFuelVolume = 20, fuelConsumption = 12) {
    if (typeof brand !== 'string' || brand.length < 1 || brand.length > 50) {
      throw new Error('Неверный формат ввода');
    }
    this.#brand = brand;

    if (typeof model !== 'string' || model.length < 1 || model.length > 50) {
      throw new Error('Неверный формат ввода');
    }
    this.#model = model;

    if (typeof yearOfManufacturing !== 'number' || yearOfManufacturing < 1900 || yearOfManufacturing > 2021) {
      throw new Error('Неверный формат ввода');
    }
    this.#yearOfManufacturing = yearOfManufacturing;

    if (typeof maxSpeed !== 'number' || maxSpeed < 100 || maxSpeed > 300) {
      throw new Error('Неверный формат ввода');
    }
    this.#maxSpeed = maxSpeed;

    if (typeof maxFuelVolume !== 'number' || maxFuelVolume < 5 || maxFuelVolume > 20) {
      throw new Error('Неверный формат ввода');
    }
    this.#maxFuelVolume = maxFuelVolume;

    if (typeof fuelConsumption !== 'number') {
      throw new Error('Неверный формат ввода');
    }
    this.#fuelConsumption = fuelConsumption;
  }

  set brand(brand) {
    if (typeof brand !== 'string' || brand.length < 1 || brand.length > 50) {
      throw new Error('Неверный формат ввода');
    }
    this.#brand = brand;
  }

  get brand() {
    return this.#brand;
  }

  set model(model) {
    if (typeof model !== 'string' || model.length < 1 || model.length > 50) {
      throw new Error('Неверный формат ввода');
    }
    this.#model = model;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(yearOfManufacturing) {
    if (typeof yearOfManufacturing !== 'number' || yearOfManufacturing < 1900 || yearOfManufacturing > 2021) {
      throw new Error('Неверный формат ввода');
    }
    this.#yearOfManufacturing = yearOfManufacturing;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(maxSpeed) {
    if (typeof maxSpeed !== 'number' || maxSpeed < 100 || maxSpeed > 300) {
      throw new Error('Неверный формат ввода');
    }
    this.#maxSpeed = maxSpeed;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(maxFuelVolume) {
    if (typeof maxFuelVolume !== 'number' || maxFuelVolume < 5 || maxFuelVolume > 20) {
      throw new Error('Неверный формат ввода');
    }
    this.#maxFuelVolume = maxFuelVolume;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(fuelConsumption) {
    if (typeof fuelConsumption !== 'number') {
      throw new Error('Неверный формат ввода');
    }
    this.#fuelConsumption = fuelConsumption;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(fuelVolume) {
    if (typeof fuelVolume !== 'number' || this.#maxFuelVolume <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    } else if (this.#currentFuelVolume + fuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }
    this.#currentFuelVolume += fuelVolume;
  }

  drive(speed, hours) {
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    } else if (typeof speed !== 'number' || speed <= 0) {
      throw new Error('Неверная скорость');
    } else if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    } else if (typeof hours !== 'number' || hours <= 0) {
      throw new Error('Неверное количество часов');
    }

    const distance = speed * hours;
    const fuelConsupmtionPerDistance = this.#fuelConsumption * distance / 100;

    if (fuelConsupmtionPerDistance > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }

    this.#mileage += distance;
    this.#currentFuelVolume -= fuelConsupmtionPerDistance;
  }
}

module.exports = Car;
