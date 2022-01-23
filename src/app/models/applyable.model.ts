
// Assign the provided object to 'this' and then return 'this'
export class Applyable {
  apply(input: any): this {
      return Object.assign(this, input);
  };
}
