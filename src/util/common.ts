import React from "react";

/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     The object.
 * @param  {Array}             Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
export function objectWithOnly(object: any, attrs: any) {
  let newObject: any = {};

  attrs.forEach((attr: any) => {
    newObject[attr] = object[attr].bind(object);
  });

  return newObject;
}

/**
 * Wraps react children elements with props.
 */
export function wrapChildrenWith(children: any, props: any) {
  return React.Children.map(children, (child) =>
    React.cloneElement(child, props)
  );
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringInclues(str: any, substr: any) {
  return str.indexOf(substr) !== -1;
}
