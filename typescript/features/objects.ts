type coords = {
  coords: {
    lat: number;
    lng: number;
  };
};

const profile = {
  name: "Bob",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: coords = profile;
