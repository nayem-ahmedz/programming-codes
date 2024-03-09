#include <stdio.h>

int main() {
  int age = 23;
  int *age2 = &age;
  printf("Age is : %d\n", age);
  printf("Age2 is : %d\n", *age2);
  age = 21;
  printf("Updated Age is : %d\n", age);
  printf("Updated Age2 is : %d\n", *age2);
  printf("Memory Address of Age is : %p, Age 2 is : %p\n", &age, age2);
}
