class Vehicle {
	constructor(type, avgFuelCons, fuelTankCapacity, currentFuel, speed) {
		this.type = type;
		this.avgFuelCons = avgFuelCons;
		this.fuelTankCapacity = fuelTankCapacity;
		this.currentFuel = currentFuel;
		this.speed = speed;
	}
	// помощью которого можно вычислить сколько автомобиль может проехать на полном баке топлива
	// Вычисление при полном баке
	calcRangeFuelFullTank() {
		return this.calcCurrRange(this.fuelTankCapacity);
	}
	// Вычисление при текущем уровне бака
	calcRangeFuelCurrTank() {
		return this.calcCurrRange(this.currentFuel);
	}
	// Вычисление топлива от потребления
	calcCurrRange(fuel) {
		return fuel / this.avgFuelCons;
	}
	// Вычисление времени преодоления дистанции
	calcTimeCoverDistance(distance) {
		return distance / this.speed;
	}
	// Запас хода
	rangeCurrFuelDisplay() {
		console.log("Запас хода равен " + this.calcCurrRange(this.currentFuel));
	}
}
class PassengerCar extends Vehicle {
	fuelCoofOnOnePassanger = 0.06;
	constructor(
		avgFuelCons,
		fuelTankCapacity,
		currentFuel,
		speed,
		maxPassangers,
		currPassangers
	) {
		super(
			"Пассажирский автомобиль",
			avgFuelCons,
			fuelTankCapacity,
			currentFuel,
			speed
		);
		(this.currPassangers = currPassangers),
			(this.maxPassangers = maxPassangers);
		if (currPassangers > maxPassangers) {
			console.log(
				"Число пассажиров не должно быть больше " + this.maxPassangers
			);
		}
		this.currPassangers = currPassangers;
		this.maxPassangers = maxPassangers;
	}
	calcCurrRange(fuel) {
		return fuel / (1 - this.fuelCoofOnOnePassanger * this.avgFuelCons);
	}
}

class SportCar extends Vehicle {
	constructor(avgFuelCons, fuelTankCapacity, currentFuel, speed) {
		super(
			"Спортивный автомобиль",
			avgFuelCons,
			fuelTankCapacity,
			currentFuel,
			speed
		);
	}
}

class TruckCar extends Vehicle {
	fuelRangeDecreaseForWeight = 0.04;
	n = 200;

	constructor(
		avgFuelCons,
		fuelTankCapacity,
		currentFuel,
		speed,
		maxCapacity,
		currentLoad
	) {
		super(
			"Грузовой автомобиль",
			avgFuelCons,
			fuelTankCapacity,
			currentFuel,
			speed
		);
		this.maxCapacity = maxCapacity;
		this.currentLoad = currentLoad;
		if (currentLoad > maxCapacity) {
			alert("Нагрузка должна быть не больше " + this.maxCapacity);
		}
	}
	calcCurrRange(fuel) {
		return (
			super.calcCurrRange(fuel) *
			(1 - this.currentLoad * (this.fuelRangeDecreaseForWeight / this.n))
		);
	}
}
