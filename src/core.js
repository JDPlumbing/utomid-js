export class UtomID {
  constructor(composition, metadata = {}) {
    this.composition = composition; // [[elem, count]]
    this.metadata = metadata;
  }

  encode() {
    const bytes = [];
    this.composition.forEach(([elem, count]) => {
      bytes.push(elem & 0xFF, count & 0xFF);
    });
    return Uint8Array.from(bytes);
  }

  static decode(buffer, metadata = {}) {
    const arr = Array.from(buffer);
    const comp = [];
    for (let i = 0; i < arr.length; i += 2) {
      comp.push([arr[i], arr[i + 1]]);
    }
    return new UtomID(comp, metadata);
  }

  toJSON() {
    return { utomid: this.composition, metadata: this.metadata };
  }

  static fromJSON(obj) {
    return new UtomID(obj.utomid, obj.metadata || {});
  }
}
