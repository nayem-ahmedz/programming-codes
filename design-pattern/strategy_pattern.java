package com.mycompany.decorator_pattern;

/**
 *
 * @author nayem
 */

interface Strategy{
    int performOp(int a, int b);
}
class Addition implements Strategy{
    public int performOp(int a, int b){
        return a + b;
    }
}
class Subtration implements Strategy{
    public int performOp(int a, int b){
        return a - b;
    }
}
class Context{
    private Strategy strategy;
    public Context(Strategy strategy) {
        this.strategy = strategy;
    }
    public int doStrategy(int a, int b){
        return strategy.performOp(a, b);
    }
}

public class Strategy_Pattern {
    public static void main(String[] args){
        Context context = new Context(new Addition());
        System.out.println("Output : " + context.doStrategy(10, 5));
        
        context = new Context(new Subtration());
        System.out.println("Output : " + context.doStrategy(10, 5));
    }
}
