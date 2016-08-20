import Immutable from 'immutable';


// Support both plain objects and Immutable.Map
export default function getField(item, fieldName) {
  if (Immutable.Map.isMap(item)) return item.get(fieldName);
  return item[fieldName];
}
