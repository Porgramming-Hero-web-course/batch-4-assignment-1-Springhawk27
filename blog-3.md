# Why Are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases

In typeScript, type guards help us handle variables with multiple possible types (like `string | number`) safely and accurately. Type guards gives us the access to check a variable’s type at runtime, ensuring our code runs correctly depending on the actual type. Here’s a brief look at why they’re useful and some common ways to use them.

---

### Various types of Type Guards and their use cases

#### 1. `typeof` for Basic Types

we use `typeof` to check if a variable is a `string`, `number`, or something like that

```typescript
function printMyNumber(number: string | number) {
  if (typeof number === "string") {
    console.log(number.toUpperCase());
  } else {
    console.log(number.toFixed(4));
  }
}
```

#### 2. `instanceof` for objects and classes

we use `instanceof` to check if an object is an instance of a specific class or not

```typescript
class Cow {
  hamba() {}
}
class Cat {
  meow() {}
}

function scream(animal: Cow | Cat) {
  if (animal instanceof Cow) {
    animal.hamba();
  } else {
    animal.meow();
  }
}
```

#### 3. Custom Type Guards

we create custom functions to check specific types.

```typescript
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

function handlePet(pet: Dog | Cat) {
  if (isDog(pet)) pet.bark();
  else pet.meow();
}
```
