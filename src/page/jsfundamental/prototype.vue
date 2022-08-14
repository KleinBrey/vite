<template>
  <div>原型</div>
</template>
<script>
export default {
  props: {},
  setup (props) {
    function PersionES5 (name, age) {
      this.name = name;
      this.age = age;
    }
    PersionES5.prototype.setname = function () {
      console.log(this.name);
    };
    const people = new PersionES5("老张", 25);
    console.log(people);
    people.setname();

    class Persion {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      setname () {
        console.log(this.age);
      }
    }
    class Student extends Persion {
      constructor(name, age, score) {
        super(name, age);
        this.score = score;
      }
      say () {
        console.log(`${this.score}在说话`);
      }
    }

    const student = new Student("老张", 25, 45);
    student.say();
    student.setname();

    function myNew () {
      // let arr = Array.prototype.slice.call(arguments)
      // let arr = Array.from(arguments);
      let arr = [...arguments];
      console.log(arr);
    }
    myNew(1, 2, 3, 4, 5, 6);
  }
};
</script>