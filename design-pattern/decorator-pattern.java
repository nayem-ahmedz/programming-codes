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
