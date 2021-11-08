type FullAddress = {
  'country': string,
  'city': string,
  'index': string,
  'street': string,

  'region'?: string,
  'house'?: string,
  'flat'?: string,
};

class OrderData {
  public address: FullAddress = {
    country: 'country',
    city: 'city',
    index: 'index',
    street: 'street',

    region: 'region',
    house: 'house',
    flat: 'flat',
  };

  public payMethod: string;

  public setAddress(obj: FullAddress) {
    this.address.country = obj.country;
    this.address.city = obj.city;
    this.address.index = obj.index;
    this.address.street = obj.street;
  }
}

export default new OrderData();
