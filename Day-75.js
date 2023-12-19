const StockSpanner = class {
  constructor() {
    this.hist = [];
  }

  next(price) {
    this.hist.unshift(price);
    const count = this.hist.findIndex((x) => x > price);
    return count === -1 ? this.hist.length : count;
  }
};
