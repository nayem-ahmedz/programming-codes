/*
Factory Design Pattern Explanation:
The Factory Design Pattern is a creational design pattern that provides a way to instantiate objects without specifying the exact class of object that will be created. Instead of creating objects directly using the new keyword, you use a factory method or factory class to handle the object creation. This approach helps to decouple the client code from the instantiation details of the objects.

The Factory Pattern typically involves:

1. A Product interface (or class), which defines the interface for the objects that are created.
2. Concrete Product classes, which implement the Product interface.
3. A Creator or Factory class, which is responsible for creating the Product objects.
4. The Client interacts with the Creator to get the products, without knowing the exact class that is being instantiated.

Structure of the Factory Pattern:
1. Product: Defines the interface or abstract class for the objects the factory method will create.
2. ConcreteProduct: Implements the Product interface or class and defines specific behaviors.
3. Creator/Factory: Contains the logic for object creation. The client uses the factory to get the objects, without knowing which class of object is being created.
4. Client: Uses the Factory to create objects.
*/

