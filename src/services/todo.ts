import update from "immutability-helper";

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
  return [
    {
      id: 1,
      text: "Learn Javascript",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React",
      completed: false,
    },
    {
      id: 3,
      text: "Build a React App",
      completed: false,
    },
  ];
}

export function getItemById(itemId: any) {
  return getAll().find((item) => item.id === itemId);
}

export function updateStatus(items: any, itemId: any, completed: any) {
  let index = items.findIndex((item: any) => item.id === itemId);

  // Returns a new list of data with updated item.
  return update(items, {
    [index]: {
      completed: { $set: completed },
    },
  });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
  return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list: any, data: any) {
  let item = Object.assign(
    {
      id: getNextId(),
    },
    data
  );

  return list.concat([item]);
}
