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





//Example by Sorting

//package com.mycompany.decorator_pattern;

/**
 *
 * @author nayem
 */
/*
interface Sort{
    String sorting(int[] args);
}
class BubbleSort implements Sort{
    public String sorting(int[] args){
        return "Bubble sort is done";
    }
}
class MergeSort implements Sort{
    public String sorting(int[] args){
        return "Merge sort is done";
    }
}
class Context{
    private Sort sort;
    public Context(Sort sort) {
        this.sort = sort;
    }
    public String doSort(int[] args){
        return sort.sorting(args);
    }
}

public class Strategy_Pattern {
    public static void main(String[] args){
        int[] array = {2, 1, 3, 5};
        Context context = new Context(new BubbleSort());
        System.out.println("Output : " + context.doSort(array));
        
        context = new Context(new MergeSort());
        System.out.println("Output : " + context.doSort(array));
    }
}
*/
