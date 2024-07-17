import React from 'react';

// Decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey} with`, args);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }

interface User {
  id: number;
  name: string;
}

class Example {
   
  method(arg: string) {
    
    console.log(`Method called with ${arg}`);
  }
}

const example = new Example();
example.method('test');

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

const output = identity<string>('myString');

const ExampleComponent: React.FC = () => {
  const user: User = { id: 1, name: 'John Doe' };
  

  return (
    <div>
      <h1>TypeScript Features Demonstration</h1>
      <p>User ID: {user.id}</p>
      <p>User Name: {user.name}</p>
      <p>Generic Function Output: {output}</p>
    </div>
  );
};

export default ExampleComponent;
