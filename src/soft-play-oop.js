// TODO: Write your class in this file
class softPlay {
  constructor(maxOccupancy) {
    this.adults = 0;
    this.children = 0;
    this.maxOccupancy = maxOccupancy || false
  }
  occupancy() {
    //counts start at 0
    return {
      adults: this.adults,
      children: this.children,
    };
  }

  // return false if we havent reached max limit
  // return true if max limit is exceeded
  // if max occupancy is undefined or not given to us return
  // _maxLimit (numAdults,numChildren) {
  //   const maxLimit = this.maxOccupancy - (numChildren + numAdults + this.children + this.adults) <= 0
  //   return this.maxOccupancy ? maxLimit : true;
  // }
    _maxLimit (numAdults,numChildren) {
      if (this.maxOccupancy === false) return true;

    return (
      this.children + numChildren + this.adults + numAdults <= this.maxOccupancy
    );
  }


  enter(numAdults, numChildren) {
    // # 1
    // const isSupervised = numAdults;
    // if (isSupervised) {
    //   this.adults += numAdults;
    //   this.children += numChildren;
    //   return true;
    // } else return false;
    // # 2
    if (numAdults < numChildren) {
      return false;
    }
    if (!this._maxLimit (numAdults,numChildren))
      return false
    else {
      this.adults += numAdults;
      this.children += numChildren;
      return true;
    }
  }

  // leave () {
  //   this.adults -= 0
  //   this.children -= 1
  // }

  leave(numAdults, numChildren) {
    const isSupervised = numAdults;
    if (numAdults > this.adults || numChildren > this.children) {
      return false;
      //a child attempts to enter on their own, enter returns false
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
