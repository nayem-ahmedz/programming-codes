package com.mycompany.decorator_pattern;
/**
 *
 * @author nayem
 */

interface Coffe{
    String getDesc();
    double getCost();
}
class PlainCoffe implements Coffe{
    public String getDesc(){
        return "Plain Coffe";
    }
    public double getCost(){
        return 200;
    }
}
class Decorator implements Coffe{
    protected Coffe decoratedCoffe;
    public Decorator(Coffe decoratedCoffe){
        this.decoratedCoffe = decoratedCoffe;
    }
    public String getDesc(){
        return decoratedCoffe.getDesc();
    }
    public double getCost(){
        return decoratedCoffe.getCost();
    }
}
class MilkDecorator extends Decorator{
    public MilkDecorator(Coffe decoratedCoffe){
        super(decoratedCoffe);
    }
    public String getDesc(){
        return decoratedCoffe.getDesc() + ", Extra Milk";
    }
    public double getCost(){
        return decoratedCoffe.getCost() + 50;
    }
}

public class Decorator_Pattern {
    
    public static void main(String[] args) {
        Coffe plainCoffe = new PlainCoffe();
        System.out.println("Description : " + plainCoffe.getDesc());
        System.out.println("Price : " + plainCoffe.getCost());
        
        Coffe milkCoffe = new MilkDecorator(new PlainCoffe());
        System.out.println("Description: " + milkCoffe.getDesc());
        System.out.println("Price : " + milkCoffe.getCost());
        
        Coffe milkCoffe2 = new MilkDecorator(new MilkDecorator(new PlainCoffe()));
        System.out.println("Description: " + milkCoffe2.getDesc());
        System.out.println("Price : " + milkCoffe2.getCost());
    }
}




//Example By Burger
/*

package com.mycompany.decorator_pattern;
/**
 *
 * @author nayem
 */

interface Burger{
    String getDesc();
    double getCost();
}
class PlainBurger implements Burger{
    public String getDesc(){
        return "Plain Burger";
    }
    public double getCost(){
        return 100;
    }
}
class Decorator implements Burger{
    protected Burger decoratedBurger;
    public Decorator(Burger decoratedBurger) {
        this.decoratedBurger = decoratedBurger;
    }
    public String getDesc(){
        return decoratedBurger.getDesc();
    }
    public double getCost(){
        return decoratedBurger.getCost();
    }
}
class ChickenBurger extends Decorator{
    public ChickenBurger(Burger decoratedBurger) {
        super(decoratedBurger);
    }
    public String getDesc(){
        return decoratedBurger.getDesc() + "(Chicken)";
    }
    public double getCost(){
        return decoratedBurger.getCost() + 100;
    }
}
class BeefBurger extends Decorator{
    public BeefBurger(Burger decoratedBurger) {
        super(decoratedBurger);
    }
    public String getDesc(){
        return decoratedBurger.getDesc() + "(Beef)";
    }
    public double getCost(){
        return decoratedBurger.getCost() + 200;
    }
}

public class Decorator_Pattern {
    
    public static void main(String[] args) {
        Burger normalBurger = new PlainBurger();
        System.out.println("Description : " + normalBurger.getDesc());
        System.out.println("Price : " + normalBurger.getCost());
        
        Burger beefBurger = new BeefBurger(new PlainBurger());
        System.out.println("Description : " + beefBurger.getDesc());
        System.out.println("Price : " + beefBurger.getCost());
    }
}

*/
