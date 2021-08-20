export const generateFakeDataRows = (rowsNumber) => {
    const result = [];
    const all = rowsNumber;
    for (let j = 0; j < all; j++) {
      const row = j;
      if (!result[row]) {
        result[row] = {};
      }
      // tslint:disable-next-line:no-string-literal
      result[row]['name'] = `name ${row}`;
      // tslint:disable-next-line:no-string-literal
      result[row]['birthdate'] = `2021-08-05`;
      // tslint:disable-next-line:no-string-literal
      result[row]['details'] = row;
      Array.from({ length: 1000 }, (v, i) => result[row][`coll${i}`] = row);
  
    }
    return result;
};

export const generateFakeColumns = () => {
    const columns = [
      {
        name: 'Birth',
        prop: 'birthdate',
        columnType: 'custom',
        size: 200,
        pin: 'colPinStart',
        source: ["According", "Source"],
        selector: 'date'
      },
      {
        prop: 'name',
        name: 'First',
        source: ["name 1", "name 2"],
        columnType: 'custom',
        selector: 'radio'
      },
      {
        prop: 'details',
        name: 'Second',
        sortable: true
      },
    ];
  
    Array.from({ length: 1000 }, (v, i) => columns.push({ 'prop': `coll${i}`, 'name': `coll${i}`, 'sortable': false }) );
    return columns;
  
  };