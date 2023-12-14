# Object Awesome ✨

#### A cooler way to work with objects.

object-awesome is a tool to speed up software development and make the code more readable for us developers. It provides a set of classes and utility methods that can be called anywhere in the code.

## Find what you need 😉

-   [Contribution guide]()
-   [Documentation](#doc)
-   [Install guide](#install)

## <a href="install"></a>Installation 🔧

Add locally to your project folder: <br/>
_You can also install it globally but it's not recommended._

```bash
    # Using npm
    npm install object-awesome
    # Or yarn
    yarn add object-awesome
    # Or pnpm
    pnpm add object-awesome
```

## <a href="doc"></a>Documentation 📚

List to explain the methods and usages:<br/>

### List

| Method / Function        | Return    | Description                                                                                                                                              |
| ------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addAll                   | `void`    | Receives a list of the given type and adds all elements to the list.                                                                                     |
| addIgnoringNulls         | `void`    | Gets a thing of the specified type and throws it into the list if the thing ain't null.                                                                  |
| addManyIgnoringNulls     | `void`    | Gets a list and tosses them into the array if the element ain't null.                                                                                    |
| checkForNullsAndAddAllTo | `void`    | Receives a list of elements and checks if there is any null element in the list; if there is, raises a type error, otherwise adds them all to the array. |
| hasNullValues            | `boolean` | Checks if the list contains a null element.                                                                                                              |
| replace                  | `void`    | Replace the element with a different value.                                                                                                              |
| clear                    | `void`    | Removes all elements from the array.                                                                                                                     |
| take                     | `T`       | Get an element by index.                                                                                                                                 |
| isEmpty                  | `boolean` | Checks if the list is definitely empty.                                                                                                                  |

### Objects

| Method / Function | Return    | Description                                                                          |
| ----------------- | --------- | ------------------------------------------------------------------------------------ |
| nonNull           | `boolean` | Receives an object and checks if it is not null or undefined.                        |
| isNull            | `boolean` | Receives an object and checks if it is null and undefined.                           |
| requireNonNull    | `boolean` | Receives a sequence of objects and throws an error if an object is null.             |
| equals            | `boolean` | Receives two objects and checks if they are both exactly the same.                   |
| strictEquals      | `boolean` | Receives two objects and checks if they are both exactly the same and also not null. |
| clone             | `any`     | Return a copy of given object.                                                       |

<br/><hr/>
Made with 💜 by Emanuel Martins © 2023.
