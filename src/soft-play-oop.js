// TODO: Write your class in this file
class softPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }
  occupancy() {
    return {
      adults: this.adults,
      children: this.children,
    };
  }

  enter(numAdults, numChildren) {
    const isSupervised = numAdults;
    if (isSupervised) {
      this.adults += numAdults;
      this.children += numChildren;
      return true;
    } else return false;
  }

  // leave () {
  //   this.adults -= 0
  //   this.children -= 1
  // }

  leave(numAdults, numChildren) {
    const isSupervised = numAdults;
    if (numAdults > this.adults || numChildren > this.children) {
      return false;
    } else if (
      this.adults - numAdults === 0 &&
      this.children - numChildren > 0
    ) {
      return false;
    } else if (
      this.children - numChildren === 0 &&
      this.adults - numAdults > 0
    ) {
      return false;
    } else if (isSupervised) {
      this.adults -= numAdults;
      this.children -= numChildren;
      return true;
    }
  }
}
// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: softPlay,
};
